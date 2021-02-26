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

/***/ "./pages/css/home1.css":
/*!*****************************!*\
  !*** ./pages/css/home1.css ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/css/home1.less":
/*!******************************!*\
  !*** ./pages/css/home1.less ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"eheader": "fx7JJ0nDeoqSIVvTeL-oB",
	"ehcenter": "_1Ng3Ry1OQTWzJXGGc6SLH0",
	"sloganBox": "K3z_oZUUykzJQqmU7kUTc",
	"text": "Uq4FOf6IcadmTD0tIUz0D",
	"userinfoBox": "_1objaFnx4ssbI5BOxFvs_0",
	"itemInfo": "yZZ1RSPl48QMs41CTqfym",
	"infoNormal": "_2fkvkrLghQBblZSITcfIbP",
	"infoText": "_1JzZTMFDvo7dybjidy_yUH",
	"infoLink": "_3vqYZqIceKyqs_QSc39UIM",
	"infoNormal2": "_3rTarMB8653cjLgWIjfp7T",
	"infoNormal3": "_3XuuC-eOnXdMV2GozUbNZh",
	"lineTest": "_2hN3NpkkJVvwZNadsUSybR",
	"tubiao": "_2BKefyFlVyxFA7rsNI7vkY",
	"headersearchBox": "_29uB4BCW_LoiP67O4m9STs",
	"headerSearch": "VwZ4KCGnm3EELoWFh_02k",
	"logoText": "_1_b7K9d0gy5psm520D28ZB",
	"searchBox": "k1OVvKulicgArYHPigcVH",
	"searchCon": "_3hN8ryTeJu_uocLmEE3lKR",
	"searchType": "AiR3_4AovX1Dd8Hzdrotp",
	"itemType": "_1R1sRSWPFIl_Vlk0Hf__Dy",
	"indicator": "_3VZVMIgAXEtSIexlaDna1u",
	"searchinputBox": "_37EMaXCWOfKbMOMVDQfRIx",
	"searchstatusBox": "_3BYf3JisdmWcH9cqR-ns_W",
	"curStatus": "zDbbudX3x6okMxwvLswhY",
	"icontabDown": "_1ckSZsM1_Hjq4j_h8lzdbq",
	"inputLabel": "_1WW4o1RNzXNlnaegyCy52N",
	"searchLabel": "_1yFsh0tZq9hiEd_iO_zg2_",
	"btn": "_1io1WwkvQKzhLInx_5YRwD",
	"searchLink": "_2p7aiM23a0-Rj5wjE-v5xd",
	"advsearchBtn": "_3CeY2i_K7yEZrtzda2DK9L",
	"head": "_3Ro77ObOMRliJ8PNZBfWii",
	"nav_box": "_3OLh1BUpe-LKPTWwpSR5nw"
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
/* harmony import */ var _css_home1_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../css/home1.css */ "./pages/css/home1.css");
/* harmony import */ var _css_home1_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_css_home1_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _css_home1_less__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../css/home1.less */ "./pages/css/home1.less");
/* harmony import */ var _css_home1_less__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_css_home1_less__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_footerbook__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/footerbook */ "./pages/components/footerbook.tsx");


var _jsxFileName = "D:\\react\u6BD5\u4E1A\u8BBE\u8BA1\\\u5B9E\u8DF5\u8D44\u6599\\20210201\\20210201\\code\\next-ts\u6A21\u677F\\my-app\\pages\\home\\index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;
// import Link from 'next/link'
 // import { withRouter } from "next/router";






 // 声明的全局数据

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
      className: _css_home1_less__WEBPACK_IMPORTED_MODULE_6___default.a.eheader,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 11
      }
    }, __jsx("div", {
      className: _css_home1_less__WEBPACK_IMPORTED_MODULE_6___default.a.ehcenter,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: _css_home1_less__WEBPACK_IMPORTED_MODULE_6___default.a.sloganBox,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 15
      }
    }, __jsx("span", {
      className: _css_home1_less__WEBPACK_IMPORTED_MODULE_6___default.a.text,
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
      className: _css_home1_less__WEBPACK_IMPORTED_MODULE_6___default.a.userinfoBox,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 15
      }
    }, __jsx("div", {
      className: _css_home1_less__WEBPACK_IMPORTED_MODULE_6___default.a.itemInfo,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 17
      }
    }, __jsx("span", {
      id: "nickName",
      className: _css_home1_less__WEBPACK_IMPORTED_MODULE_6___default.a.infoNormal,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 19
      }
    }, __jsx("span", {
      className: _css_home1_less__WEBPACK_IMPORTED_MODULE_6___default.a.infoText,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 21
      }
    }, "\u767B\u5F55"), __jsx("span", {
      className: _css_home1_less__WEBPACK_IMPORTED_MODULE_6___default.a.infoText,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 21
      }
    }, "/"), __jsx("span", {
      className: _css_home1_less__WEBPACK_IMPORTED_MODULE_6___default.a.infoText,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 21
      }
    }, "\u6CE8\u518C"))), __jsx("div", {
      className: _css_home1_less__WEBPACK_IMPORTED_MODULE_6___default.a.itemInfo,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 17
      }
    }, __jsx("a", {
      className: _css_home1_less__WEBPACK_IMPORTED_MODULE_6___default.a.infoLink,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 19
      }
    }, __jsx("span", {
      className: _css_home1_less__WEBPACK_IMPORTED_MODULE_6___default.a.infoText,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 21
      }
    }, "\u6D88\u606F"))), __jsx("div", {
      className: _css_home1_less__WEBPACK_IMPORTED_MODULE_6___default.a.itemInfo,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 17
      }
    }, __jsx("a", {
      className: _css_home1_less__WEBPACK_IMPORTED_MODULE_6___default.a.infoLink,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 19
      }
    }, __jsx("span", {
      className: _css_home1_less__WEBPACK_IMPORTED_MODULE_6___default.a.infoText,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 21
      }
    }, "\u8D2D\u7269\u8F66"))), __jsx("div", {
      className: _css_home1_less__WEBPACK_IMPORTED_MODULE_6___default.a.itemInfo,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 17
      }
    }, __jsx("a", {
      className: _css_home1_less__WEBPACK_IMPORTED_MODULE_6___default.a.infoLink,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 19
      }
    }, __jsx("span", {
      className: _css_home1_less__WEBPACK_IMPORTED_MODULE_6___default.a.infoText,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 21
      }
    }, "\u6211\u7684\u8BA2\u5355"))), __jsx("div", {
      className: _css_home1_less__WEBPACK_IMPORTED_MODULE_6___default.a.itemInfo,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 17
      }
    }, __jsx("a", {
      className: _css_home1_less__WEBPACK_IMPORTED_MODULE_6___default.a.infoLink,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 19
      }
    }, __jsx("span", {
      className: _css_home1_less__WEBPACK_IMPORTED_MODULE_6___default.a.infoText,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 21
      }
    }, "\u4E2A\u4EBA\u4E2D\u5FC3"))), __jsx("div", {
      className: _css_home1_less__WEBPACK_IMPORTED_MODULE_6___default.a.itemInfo,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 17
      }
    }, __jsx("a", {
      className: _css_home1_less__WEBPACK_IMPORTED_MODULE_6___default.a.infoLink,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 19
      }
    }, __jsx("span", {
      className: _css_home1_less__WEBPACK_IMPORTED_MODULE_6___default.a.infoText,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 21
      }
    }, "\u5356\u5BB6\u4E2D\u5FC3"))), __jsx("div", {
      className: _css_home1_less__WEBPACK_IMPORTED_MODULE_6___default.a.itemInfo,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 17
      }
    }, __jsx("a", {
      className: _css_home1_less__WEBPACK_IMPORTED_MODULE_6___default.a.infoLink,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 19
      }
    }, __jsx("span", {
      className: _css_home1_less__WEBPACK_IMPORTED_MODULE_6___default.a.infoText,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 21
      }
    }, "\u5BA2\u670D"))), __jsx("div", {
      className: _css_home1_less__WEBPACK_IMPORTED_MODULE_6___default.a.itemInfo,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 17
      }
    }, __jsx("span", {
      className: _css_home1_less__WEBPACK_IMPORTED_MODULE_6___default.a.infoNormal2,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 19
      }
    }, __jsx("a", {
      className: _css_home1_less__WEBPACK_IMPORTED_MODULE_6___default.a.infoLink,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 21
      }
    }, __jsx("span", {
      className: _css_home1_less__WEBPACK_IMPORTED_MODULE_6___default.a.infoText,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 23
      }
    }, "\u624B\u673A\u7248"))), __jsx("span", {
      className: _css_home1_less__WEBPACK_IMPORTED_MODULE_6___default.a.lineTest,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 19
      }
    }, "|")), __jsx("div", {
      className: _css_home1_less__WEBPACK_IMPORTED_MODULE_6___default.a.itemInfo,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 17
      }
    }, __jsx("span", {
      className: _css_home1_less__WEBPACK_IMPORTED_MODULE_6___default.a.infoNormal3,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 19
      }
    }, __jsx("a", {
      className: _css_home1_less__WEBPACK_IMPORTED_MODULE_6___default.a.infoLink,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 21
      }
    }, __jsx("span", {
      className: _css_home1_less__WEBPACK_IMPORTED_MODULE_6___default.a.infoText,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 23
      }
    }, "\u9001\u81F3 \u5317\u4EAC"))))))), __jsx("div", {
      className: _css_home1_less__WEBPACK_IMPORTED_MODULE_6___default.a.headersearchBox,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 11
      }
    }, __jsx("div", {
      className: _css_home1_less__WEBPACK_IMPORTED_MODULE_6___default.a.headerSearch,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 13
      }
    }, __jsx("a", {
      className: _css_home1_less__WEBPACK_IMPORTED_MODULE_6___default.a.logoText,
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
      className: _css_home1_less__WEBPACK_IMPORTED_MODULE_6___default.a.searchBox,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 15
      }
    }, __jsx("form", {
      className: _css_home1_less__WEBPACK_IMPORTED_MODULE_6___default.a.searchCon,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: _css_home1_less__WEBPACK_IMPORTED_MODULE_6___default.a.searchType,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 19
      }
    }, __jsx("div", {
      className: _css_home1_less__WEBPACK_IMPORTED_MODULE_6___default.a.itemType,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 21
      }
    }, "\u5546\u54C1"), __jsx("div", {
      className: _css_home1_less__WEBPACK_IMPORTED_MODULE_6___default.a.itemType,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 21
      }
    }, "\u62CD\u5356\u533A"), __jsx("div", {
      className: _css_home1_less__WEBPACK_IMPORTED_MODULE_6___default.a.indicator,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 21
      }
    })), __jsx("div", {
      className: _css_home1_less__WEBPACK_IMPORTED_MODULE_6___default.a.searchinputBox,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125,
        columnNumber: 19
      }
    }, __jsx("div", {
      className: _css_home1_less__WEBPACK_IMPORTED_MODULE_6___default.a.searchstatusBox,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 21
      }
    }, __jsx("div", {
      className: _css_home1_less__WEBPACK_IMPORTED_MODULE_6___default.a.curStatus,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 23
      }
    }, "\u5728\u552E"), __jsx("span", {
      className: _css_home1_less__WEBPACK_IMPORTED_MODULE_6___default.a.icontabDown,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 23
      }
    }), __jsx("span", {
      className: _css_home1_less__WEBPACK_IMPORTED_MODULE_6___default.a.icontabUp,
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
      className: _css_home1_less__WEBPACK_IMPORTED_MODULE_6___default.a.inputLabel,
      readOnly: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 21
      }
    }), __jsx("label", {
      className: _css_home1_less__WEBPACK_IMPORTED_MODULE_6___default.a.searchLabel,
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
      className: _css_home1_less__WEBPACK_IMPORTED_MODULE_6___default.a.btn,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 146,
        columnNumber: 19
      }
    }, "\u641C\u7D22")), __jsx("div", {
      className: _css_home1_less__WEBPACK_IMPORTED_MODULE_6___default.a.searchLink,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 150,
        columnNumber: 17
      }
    }, __jsx("a", {
      className: _css_home1_less__WEBPACK_IMPORTED_MODULE_6___default.a.advsearchBtn,
      rel: "nofollow",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 151,
        columnNumber: 19
      }
    }, "\u9AD8\u7EA7\u641C\u7D22")))))), __jsx("div", {
      className: _css_home1_less__WEBPACK_IMPORTED_MODULE_6___default.a.head,
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
      className: _css_home1_less__WEBPACK_IMPORTED_MODULE_6___default.a.nav_box,
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
    }, "706"), "\u8FBD\u5B81\u7701"))))))))), __jsx(_components_footerbook__WEBPACK_IMPORTED_MODULE_8__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1033,
        columnNumber: 11
      }
    })));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9MYXlvdXQudHN4Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9hbnRkL2xpYi9jYXJvdXNlbC9zdHlsZS9jc3MuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvY29tcG9uZW50cy9mb290ZXJib29rLnRzeCIsIndlYnBhY2s6Ly8vLi9wYWdlcy9jc3MvaG9tZTEubGVzcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9ob21lL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhbnRkL2xpYi9jYXJvdXNlbFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImlzb21vcnBoaWMtdW5mZXRjaFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3R5bGVkLWpzeC9zdHlsZVwiIl0sIm5hbWVzIjpbIkxheW91dCIsImNoaWxkcmVuIiwidGl0bGUiLCJJbmRleFBhZ2UiLCJwcm9wcyIsImltZ251bWJlciIsIlJlYWN0IiwiQ29tcG9uZW50IiwiZ2V0SW5pdGlhbFByb3BzIiwicmVzIiwiZmV0Y2giLCJkYXRhIiwianNvbiIsInNob3ciLCJjb25zdHJ1Y3RvciIsInN0YXRlIiwic2VsZWN0ZWQiLCJyZW5kZXIiLCJjc3NvYmoiLCJlaGVhZGVyIiwiZWhjZW50ZXIiLCJzbG9nYW5Cb3giLCJ0ZXh0IiwidXNlcmluZm9Cb3giLCJpdGVtSW5mbyIsImluZm9Ob3JtYWwiLCJpbmZvVGV4dCIsImluZm9MaW5rIiwiaW5mb05vcm1hbDIiLCJsaW5lVGVzdCIsImluZm9Ob3JtYWwzIiwiaGVhZGVyc2VhcmNoQm94IiwiaGVhZGVyU2VhcmNoIiwibG9nb1RleHQiLCJmb250RmFtaWx5IiwiZm9udFdlaWdodCIsInNlYXJjaEJveCIsInNlYXJjaENvbiIsInNlYXJjaFR5cGUiLCJpdGVtVHlwZSIsImluZGljYXRvciIsInNlYXJjaGlucHV0Qm94Iiwic2VhcmNoc3RhdHVzQm94IiwiY3VyU3RhdHVzIiwiaWNvbnRhYkRvd24iLCJpY29udGFiVXAiLCJpbnB1dExhYmVsIiwic2VhcmNoTGFiZWwiLCJkaXNwbGF5IiwiYnRuIiwic2VhcmNoTGluayIsImFkdnNlYXJjaEJ0biIsImhlYWQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJuYXZfYm94Iiwiam9pbiIsInBhZGRpbmdMZWZ0IiwidGV4dERlY29yYXRpb24iLCJtYXAiLCJpdGVtIiwiaWQiLCJtYXJnaW5SaWdodCIsImltZ1NyYyIsIml0ZW1OYW1lIiwicHJvZHVjdGVyIiwicHJpY2UiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEZBO0FBRUE7O0FBT0EsTUFBTUEsTUFBTSxH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QUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtDQURGLENBREYsQ0FwQkYsRUEwQkU7QUFBSyxlQUFTLEVBQUVSLHNEQUFNLENBQUNNLFFBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFHLGVBQVMsRUFBRU4sc0RBQU0sQ0FBQ1MsUUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQU0sZUFBUyxFQUFFVCxzREFBTSxDQUFDUSxRQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtDQURGLENBREYsQ0ExQkYsRUFnQ0U7QUFBSyxlQUFTLEVBQUVSLHNEQUFNLENBQUNNLFFBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFHLGVBQVMsRUFBRU4sc0RBQU0sQ0FBQ1MsUUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQU0sZUFBUyxFQUFFVCxzREFBTSxDQUFDUSxRQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtDQURGLENBREYsQ0FoQ0YsRUFzQ0U7QUFBSyxlQUFTLEVBQUVSLHNEQUFNLENBQUNNLFFBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFHLGVBQVMsRUFBRU4sc0RBQU0sQ0FBQ1MsUUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQU0sZUFBUyxFQUFFVCxzREFBTSxDQUFDUSxRQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQURGLENBREYsQ0F0Q0YsRUE0Q0U7QUFBSyxlQUFTLEVBQUVSLHNEQUFNLENBQUNNLFFBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFNLGVBQVMsRUFBRU4sc0RBQU0sQ0FBQ1UsV0FBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtB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RTtBQUFNLGVBQVMsRUFBQyxpQkFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLEVBRUU7QUFBTSxlQUFTLEVBQUMsVUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQ0UsVUFBSSxFQUFDLGdDQURQO0FBRUUsWUFBTSxFQUFDLFFBRlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw4Q0FERixDQUZGLENBeENGLEVBbURFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFNLGVBQVMsRUFBQyxpQkFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLEVBRUU7QUFBTSxlQUFTLEVBQUMsVUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQ0UsVUFBSSxFQUFDLCtCQURQO0FBRUUsWUFBTSxFQUFDLFFBRlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQ0FERixDQUZGLENBbkRGLEVBOERFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFNLGVBQVMsRUFBQyxpQkFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLEVBRUU7QUFBTSxlQUFTLEVBQUMsVUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQ0UsVUFBSSxFQUFDLCtCQURQO0FBRUUsWUFBTSxFQUFDLFFBRlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw4Q0FERixDQUZGLENBOURGLEVBeUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFNLGVBQVMsRUFBQyxpQkFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLEVBRUU7QUFBTSxlQUFTLEVBQUMsVUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQ0UsVUFBSSxFQUFDLCtCQURQO0FBRUUsWUFBTSxFQUFDLFFBRlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQ0FERixDQUZGLENBekVGLEVBb0ZFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFNLGVBQVMsRUFBQyxpQkFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLEVBRUU7QUFBTSxlQUFTLEVBQUMsVUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQ0UsVUFBSSxFQUFDLGdDQURQO0FBRUUsWUFBTSxFQUFDLFFBRlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQ0FERixDQUZGLENBcEZGLEVBK0ZFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFNLGVBQVMsRUFBQyxpQkFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLEVBRUU7QUFBTSxlQUFTLEVBQUMsVUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQ0UsVUFBSSxFQUFDLCtCQURQO0FBRUUsWUFBTSxFQUFDLFFBRlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQ0FERixDQUZGLENBL0ZGLEVBMEdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFNLGVBQVMsRUFBQyxpQkFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLEVBRUU7QUFBTSxlQUFTLEVBQUMsVUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQ0UsVUFBSSxFQUFDLDhCQURQO0FBRUUsWUFBTSxFQUFDLFFBRlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0QkFERixDQUZGLENBMUdGLENBREYsQ0FWRixDQWxCRixFQXdKRTtBQUFLLGVBQVMsRUFBQyxPQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBDQUNRO0FBQU0sZUFBUyxFQUFDLE1BQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FEUixPQUN3QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUR4QyxDQURGLEVBVUU7QUFBSyxlQUFTLEVBQUMsbUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUksV0FBSyxFQUFFO0FBQUVBLGVBQU8sRUFBRTtBQUFYLE9BQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFNLGVBQVMsRUFBQyw0QkFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLEVBSUU7QUFBTSxlQUFTLEVBQUMsVUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQ0UsVUFBSSxFQUFDLCtCQURQO0FBRUUsWUFBTSxFQUFDLFFBRlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQ0FERixDQUpGLENBREYsRUFjRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBTSxlQUFTLEVBQUMsNEJBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixFQUlFO0FBQU0sZUFBUyxFQUFDLFVBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUNFLFVBQUksRUFBQyxnQ0FEUDtBQUVFLFlBQU0sRUFBQyxRQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0NBREYsQ0FKRixDQWRGLEVBMkJFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFNLGVBQVMsRUFBQyw0QkFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLEVBSUU7QUFBTSxlQUFTLEVBQUMsVUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQ0UsVUFBSSxFQUFDLGdDQURQO0FBRUUsWUFBTSxFQUFDLFFBRlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw4Q0FERixDQUpGLENBM0JGLEVBd0NFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFNLGVBQVMsRUFBQyxpQkFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLEVBRUU7QUFBTSxlQUFTLEVBQUMsVUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQ0UsVUFBSSxFQUFDLGdDQURQO0FBRUUsWUFBTSxFQUFDLFFBRlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw2REFERixDQUZGLENBeENGLEVBbURFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFNLGVBQVMsRUFBQyxpQkFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLEVBRUU7QUFBTSxlQUFTLEVBQUMsVUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQ0UsVUFBSSxFQUFDLCtCQURQO0FBRUUsWUFBTSxFQUFDLFFBRlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQ0FERixDQUZGLENBbkRGLEVBOERFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFNLGVBQVMsRUFBQyxpQkFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLEVBRUU7QUFBTSxlQUFTLEVBQUMsVUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQ0UsVUFBSSxFQUFDLCtCQURQO0FBRUUsWUFBTSxFQUFDLFFBRlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvREFERixDQUZGLENBOURGLEVBeUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFNLGVBQVMsRUFBQyxpQkFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLEVBRUU7QUFBTSxlQUFTLEVBQUMsVUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQ0UsVUFBSSxFQUFDLCtCQURQO0FBRUUsWUFBTSxFQUFDLFFBRlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQ0FERixDQUZGLENBekVGLEVBb0ZFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFNLGVBQVMsRUFBQyxpQkFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLEVBRUU7QUFBTSxlQUFTLEVBQUMsVUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQ0UsVUFBSSxFQUFDLGdDQURQO0FBRUUsWUFBTSxFQUFDLFFBRlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3Q0FERixDQUZGLENBcEZGLEVBK0ZFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFNLGVBQVMsRUFBQyxpQkFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLEVBRUU7QUFBTSxlQUFTLEVBQUMsVUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7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QSxZQURGLEVBRUU7QUFBTSxlQUFTLEVBQUMsVUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQ0UsVUFBSSxFQUFDLCtCQURQO0FBRUUsWUFBTSxFQUFDLFFBRlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3Q0FERixDQUZGLENBbkRGLEVBOERFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFNLGVBQVMsRUFBQyxpQkFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLEVBRUU7QUFBTSxlQUFTLEVBQUMsVUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQ0UsVUFBSSxFQUFDLCtCQURQO0FBRUUsWUFBTSxFQUFDLFFBRlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQ0FERixDQUZGLENBOURGLEVBeUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFNLGVBQVMsRUFBQyxpQkFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLEVBRUU7QUFBTSxlQUFTLEVBQUMsVUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQ0UsVUFBSSxFQUFDLCtCQURQO0FBRUUsWUFBTSxFQUFDLFFBRlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQ0FERixDQUZGLENBekVGLEVBb0ZFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFNLGVBQVMsRUFBQyxpQkFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLEVBRUU7QUFBTSxlQUFTLEVBQUMsVUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQ0UsVUFBSSxFQUFDLGdDQURQO0FBRUUsWUFBTSxFQUFDLFFBRlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvREFERixDQUZGLENBcEZGLEVBK0ZFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFNLGVBQVMsRUFBQyxpQkFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLEVBRUU7QUFBTSxlQUFTLEVBQUMsVUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQ0UsVUFBSSxFQUFDLCtCQURQO0FBRUUsWUFBTSxFQUFDLFFBRlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQ0FERixDQUZGLENBL0ZGLEVBMEdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFNLGVBQVMsRUFBQyxpQkFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLEVBRUU7QUFBTSxlQUFTLEVBQUMsVUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQ0UsVUFBSSxFQUFDLDhCQURQO0FBRUUsWUFBTSxFQUFDLFFBRlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQ0FERixDQUZGLENBMUdGLENBREYsQ0FSRixDQTlSRixFQWthRTtBQUFLLGVBQVMsRUFBQyxjQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9DQUNPO0FBQU0sZUFBUyxFQUFDLE1BQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FEUCxPQUN1QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUR2QyxDQURGLEVBSUU7QUFBSSxlQUFTLEVBQUMsTUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUcsWUFBTSxFQUFDLFFBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQU0sZUFBUyxFQUFDLFlBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERix1QkFERixDQURGLEVBTUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUcsWUFBTSxFQUFDLFFBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQU0sZUFBUyxFQUFDLFlBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERix1QkFERixDQU5GLEVBV0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUcsWUFBTSxFQUFDLFFBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQU0sZUFBUyxFQUFDLFlBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERix1QkFERixDQVhGLEVBZ0JFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFHLFlBQU0sRUFBQyxRQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFNLGVBQVMsRUFBQyxZQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsdUJBREYsQ0FoQkYsRUFxQkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUcsWUFBTSxFQUFDLFFBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQU0sZUFBUyxFQUFDLFlBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERix1QkFERixDQXJCRixFQTBCRTtBQUFBO0FB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QURGLENBMUNGLEVBa3pCRSxNQUFDLDhEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFsekJGLENBakxGLENBREY7QUE0K0JEOztBQTMvQm1FLEMsQ0E4L0J0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLHdDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM2hDQSw4Qzs7Ozs7Ozs7Ozs7QUNBQSwrQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSw2QyIsImZpbGUiOiJwYWdlcy9ob21lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9ob21lL2luZGV4LnRzeFwiKTtcbiIsImltcG9ydCBSZWFjdCwgeyBSZWFjdE5vZGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcblxudHlwZSBQcm9wcyA9IHtcbiAgY2hpbGRyZW4/OiBSZWFjdE5vZGVcbiAgdGl0bGU/OiBzdHJpbmdcbn1cblxuY29uc3QgTGF5b3V0ID0gKHsgY2hpbGRyZW4sIHRpdGxlID0gJ1RoaXMgaXMgdGhlIGRlZmF1bHQgdGl0bGUnIH06IFByb3BzKSA9PiAoXG4gIDxkaXY+XG4gICAgPEhlYWQ+XG4gICAgICA8dGl0bGU+e3RpdGxlfTwvdGl0bGU+XG4gICAgICA8bWV0YSBjaGFyU2V0PVwidXRmLThcIiAvPlxuICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cImluaXRpYWwtc2NhbGU9MS4wLCB3aWR0aD1kZXZpY2Utd2lkdGhcIiAvPlxuICAgIDwvSGVhZD5cbiAgICA8aGVhZGVyPlxuICAgICAgPG5hdj5cbiAgICAgICAgey8qIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgICAgPGE+SG9tZTwvYT5cbiAgICAgICAgPC9MaW5rPnsnICd9XG4gICAgICAgIHx7JyAnfVxuICAgICAgICA8TGluayBocmVmPVwiL2Fib3V0XCI+XG4gICAgICAgICAgPGE+QWJvdXQ8L2E+XG4gICAgICAgIDwvTGluaz57JyAnfVxuICAgICAgICB8eycgJ31cbiAgICAgICAgPExpbmsgaHJlZj1cIi91c2Vyc1wiPlxuICAgICAgICAgIDxhPlVzZXJzIExpc3Q8L2E+XG4gICAgICAgIDwvTGluaz57JyAnfVxuICAgICAgICB8IDxhIGhyZWY9XCIvYXBpL3VzZXJzXCI+VXNlcnMgQVBJPC9hPiAqL31cbiAgICAgIDwvbmF2PlxuICAgIDwvaGVhZGVyPlxuICAgIHtjaGlsZHJlbn1cbiAgICA8Zm9vdGVyPlxuICAgICAgey8qIDxociAvPiAqL31cbiAgICAgIHsvKiA8c3Bhbj5JJ20gaGVyZSB0byBzdGF5IChGb290ZXIpPC9zcGFuPiAqL31cbiAgICA8L2Zvb3Rlcj5cblxuICAgIDxzdHlsZSBqc3ggZ2xvYmFsPlxuICAgICAge1xuICAgICAgICBgXG4gICAgICAgIGBcbiAgICAgIH1cbiAgICA8L3N0eWxlPlxuICA8L2Rpdj5cbilcblxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0XG4iLCIndXNlIHN0cmljdCc7XG5cbnJlcXVpcmUoJy4uLy4uL3N0eWxlL2luZGV4LmNzcycpO1xuXG5yZXF1aXJlKCcuL2luZGV4LmNzcycpOyIsIi8vIGltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcclxuLy8gaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBcIkAvc3RhdGljL2Nzcy9mb250LWF3ZXNvbWUuY3NzXCI7XHJcbmltcG9ydCB7IHdhdGNoIH0gZnJvbSBcImZzXCI7XHJcbi8vIGltcG9ydCBcIi4vY3NzL2luZGV4LmNzc1wiO1xyXG4vLyBpbXBvcnQgZmV0Y2ggZnJvbSBcImlzb21vcnBoaWMtdW5mZXRjaFwiO1xyXG4vLyBpbXBvcnQgRnJvbWRlbW8gZnJvbSBcIi4vY29tcG9uZW50cy9mcm9tXCJcclxuLy8g5aOw5piO55qE5YWo5bGA5pWw5o2uXHJcblxyXG5sZXQgSW5kZXhQYWdlOiBSZWFjdC5GQz0gKHByb3BzKSA9PiB7IFxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlci1ib3hcIj5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyLXdyYXAgY2xlYXJmaXhcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb3B5cmlnaHQtaW5mby1ib3hcIj5cclxuICAgICAgICDCqSAyMDAyLTIwMjEgS29uZ2Z6LmNvbSDlrZTlrZDml6fkuabnvZEg54mI5p2D5omA5pyJXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpbmstYm94XCI+XHJcbiAgICAgICAgPGFcclxuICAgICAgICAgIGNsYXNzTmFtZT1cIml0ZW1cIlxyXG4gICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgIHJlbD1cIm5vZm9sbG93XCJcclxuICAgICAgICAgIGhyZWY9XCJodHRwOi8vd3d3Lmtvbmdmei5jb20vaGVscC9hYm91dHVzLnBocFwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAg5YWz5LqO5a2U572RXHJcbiAgICAgICAgPC9hPlxyXG4gICAgICAgIDxhXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJpdGVtXCJcclxuICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICByZWw9XCJub2ZvbGxvd1wiXHJcbiAgICAgICAgICBocmVmPVwiaHR0cDovL3d3dy5rb25nZnouY29tL2hlbHAvbGlhbnhpLmh0bWxcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIOiBlOezu+aIkeS7rFxyXG4gICAgICAgIDwvYT5cclxuICAgICAgICA8YVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiaXRlbVwiXHJcbiAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgcmVsPVwibm9mb2xsb3dcIlxyXG4gICAgICAgICAgaHJlZj1cImh0dHA6Ly9oZWxwLmtvbmdmei5jb20vXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICDluK7liqnkuK3lv4NcclxuICAgICAgICA8L2E+XHJcbiAgICAgICAgPGFcclxuICAgICAgICAgIGNsYXNzTmFtZT1cIml0ZW1cIlxyXG4gICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgIHJlbD1cIm5vZm9sbG93XCJcclxuICAgICAgICAgIGhyZWY9XCJodHRwOi8vd3d3Lmtvbmdmei5jb20vaGVscC9jb3B5cmlnaHQucGhwXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICDniYjmnYPpmpDnp4FcclxuICAgICAgICA8L2E+XHJcbiAgICAgICAgPGFcclxuICAgICAgICAgIGNsYXNzTmFtZT1cIml0ZW1cIlxyXG4gICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgIHJlbD1cIm5vZm9sbG93XCJcclxuICAgICAgICAgIGhyZWY9XCJodHRwOi8vd3d3Lmtvbmdmei5jb20vaGVscC9ndWFuZ2dhby5waHBcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIOW5v+WRiuS4muWKoVxyXG4gICAgICAgIDwvYT5cclxuICAgICAgICA8YVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiaXRlbVwiXHJcbiAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgcmVsPVwibm9mb2xsb3dcIlxyXG4gICAgICAgICAgaHJlZj1cImh0dHA6Ly93d3cua29uZ2Z6LmNvbS9oZWxwL3poYW9waW4ucGhwXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICDlt6XkvZzmnLrkvJpcclxuICAgICAgICA8L2E+XHJcbiAgICAgICAgPGFcclxuICAgICAgICAgIGNsYXNzTmFtZT1cIml0ZW1cIlxyXG4gICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgIGhyZWY9XCJodHRwczovL20ua29uZ2Z6LmNvbS9cIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIOenu+WKqOeJiFxyXG4gICAgICAgIDwvYT5cclxuICAgICAgICA8YVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiaXRlbVwiXHJcbiAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgaHJlZj1cImh0dHA6Ly9ib29rLmtvbmdmei5jb20vXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICDlm77kuabnm67lvZVcclxuICAgICAgICA8L2E+XHJcbiAgICAgICAgPGFcclxuICAgICAgICAgIGNsYXNzTmFtZT1cIml0ZW1cIlxyXG4gICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgIGhyZWY9XCJodHRwOi8vYnEua29uZ2Z6LmNvbS9cIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIOWbvuS5puagh+etvlxyXG4gICAgICAgIDwvYT5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuXHJcbi8vIGV4cG9ydCBkZWZhdWx0IGNsYXNzIENoaWxkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xyXG4gICBcclxuLy8gICByZW5kZXIoKXtcclxuLy8gICAgIHJldHVybiAgPGRpdj57dGhpcy5wcm9wcy5wYXJhbXMubXNnfTwvZGl2PlxyXG4vLyAgIH1cclxuLy8gfVxyXG5cclxuLy9nZXRJbml0aWFsUHJvcHMg5pa55rOV5pei5Y+v5Lul5Zyo5pyN5Yqh5Zmo6L+Q6KGM77yM5Y+I5Y+v5Lul5Zyo5a6i5oi356uv6L+Q6KGMKOe7hOS7tuWIm+W7uuS5i+WJjeaJp+ihjOeahClcclxuLy/lvZPliLfmlrDpobXpnaIo5Yid5qyh6L295YWl6aG16Z2iKe+8jOivpeaWueazleS8muWcqOacjeWKoeWZqOaJp+ihjFxyXG4vL+W9k+mAmui/hzxMaW5rPui3s+i9rOi3r+eUseeahOaXtuWAme+8jOivpeaWueazleS8muWcqOWuouaIt+err+aJp+ihjFxyXG4vLyBJbmRleFBhZ2UuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKCkgPT4ge1xyXG4vLyAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDozMDAxL2FwaS91c2Vyc1wiKTtcclxuLy8gICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuLy8gICAvL+i/mei+uei/lOWbnueahOaVsOaNruS8muiiq+aMgui9veWIsOe7hOS7tueahHByb3Bz5LitXHJcbi8vICAgcmV0dXJuIHsgc2hvdzogZGF0YSB9O1xyXG4vLyB9O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXhQYWdlO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJlaGVhZGVyXCI6IFwiZng3SkowbkRlb3FTSVZ2VGVMLW9CXCIsXG5cdFwiZWhjZW50ZXJcIjogXCJfMU5nM1J5MU9RVFd6SlhHR2M2U0xIMFwiLFxuXHRcInNsb2dhbkJveFwiOiBcIkszel9vWlVVeWt6SlFxbVU3a1VUY1wiLFxuXHRcInRleHRcIjogXCJVcTRGT2Y2SWNhZG1URDB0SVV6MERcIixcblx0XCJ1c2VyaW5mb0JveFwiOiBcIl8xb2JqYUZueDRzc2JJNUJPeEZ2c18wXCIsXG5cdFwiaXRlbUluZm9cIjogXCJ5WloxUlNQbDQ4UU1zNDFDVHFmeW1cIixcblx0XCJpbmZvTm9ybWFsXCI6IFwiXzJma3ZrckxnaFFCYmxaU0lUY2ZJYlBcIixcblx0XCJpbmZvVGV4dFwiOiBcIl8xSnpaVE1GRHZvN2R5YmppZHlfeVVIXCIsXG5cdFwiaW5mb0xpbmtcIjogXCJfM3ZxWVpxSWNlS3lxc19RU2MzOVVJTVwiLFxuXHRcImluZm9Ob3JtYWwyXCI6IFwiXzNyVGFyTUI4NjUzY2pMZ1dJamZwN1RcIixcblx0XCJpbmZvTm9ybWFsM1wiOiBcIl8zWHV1Qy1lT25YZE1WMkdvelViTlpoXCIsXG5cdFwibGluZVRlc3RcIjogXCJfMmhOM05wa2tKVnZ3Wk5hZHNVU3liUlwiLFxuXHRcInR1Ymlhb1wiOiBcIl8yQktlZnlGbFZ5eEZBN3JzTkk3dmtZXCIsXG5cdFwiaGVhZGVyc2VhcmNoQm94XCI6IFwiXzI5dUI0QkNXX0xvaVA2N080bTlTVHNcIixcblx0XCJoZWFkZXJTZWFyY2hcIjogXCJWd1o0S0NHbm0zRUVMb1dGaF8wMmtcIixcblx0XCJsb2dvVGV4dFwiOiBcIl8xX2I3SzlkMGd5NXBzbTUyMEQyOFpCXCIsXG5cdFwic2VhcmNoQm94XCI6IFwiazFPVnZLdWxpY2dBcllIUGlnY1ZIXCIsXG5cdFwic2VhcmNoQ29uXCI6IFwiXzNoTjhyeVRlSnVfdW9jTG1FRTNsS1JcIixcblx0XCJzZWFyY2hUeXBlXCI6IFwiQWlSM180QW92WDFEZDhIemRyb3RwXCIsXG5cdFwiaXRlbVR5cGVcIjogXCJfMVIxc1JTV1BGSWxfVmxrMEhmX19EeVwiLFxuXHRcImluZGljYXRvclwiOiBcIl8zVlpWTUlnQVhFdFNJZXhsYURuYTF1XCIsXG5cdFwic2VhcmNoaW5wdXRCb3hcIjogXCJfMzdFTWFYQ1dPZktiTU9NVkRRZlJJeFwiLFxuXHRcInNlYXJjaHN0YXR1c0JveFwiOiBcIl8zQllmM0ppc2RtV2NIOWNxUi1uc19XXCIsXG5cdFwiY3VyU3RhdHVzXCI6IFwiekRiYnVkWDN4Nm9rTXh3dkxzd2hZXCIsXG5cdFwiaWNvbnRhYkRvd25cIjogXCJfMWNrU1pzTTFfSGpxNGpfaDhsemRicVwiLFxuXHRcImlucHV0TGFiZWxcIjogXCJfMVdXNG8xUk56WE5sbmFlZ3lDeTUyTlwiLFxuXHRcInNlYXJjaExhYmVsXCI6IFwiXzF5RnNoMHRacTloaUVkX2lPX3pnMl9cIixcblx0XCJidG5cIjogXCJfMWlvMVd3a3ZRS3poTElueF81WVJ3RFwiLFxuXHRcInNlYXJjaExpbmtcIjogXCJfMnA3YWlNMjNhMC1SajV3akUtdjV4ZFwiLFxuXHRcImFkdnNlYXJjaEJ0blwiOiBcIl8zQ2VZMmlfSzd5RVpydHpkYTJESzlMXCIsXG5cdFwiaGVhZFwiOiBcIl8zUm83N09iT01SbGlKOFBOWkJmV2lpXCIsXG5cdFwibmF2X2JveFwiOiBcIl8zT0xoMUJVcGUtTEtQVFd3cFNSNW53XCJcbn07IiwiLy8gaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0xheW91dFwiO1xyXG4vLyBpbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFwiQC9zdGF0aWMvY3NzL2ZvbnQtYXdlc29tZS5jc3NcIjtcclxuaW1wb3J0IFwiLi4vY3NzL2hvbWUxLmNzc1wiO1xyXG5pbXBvcnQgY3Nzb2JqIGZyb20gXCIuLi9jc3MvaG9tZTEubGVzc1wiO1xyXG5pbXBvcnQgZmV0Y2ggZnJvbSBcImlzb21vcnBoaWMtdW5mZXRjaFwiO1xyXG5pbXBvcnQgeyBDYXJvdXNlbCB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvZm9vdGVyYm9va1wiXHJcbi8vIOWjsOaYjueahOWFqOWxgOaVsOaNrlxyXG5cclxudHlwZSBzdGF0ZSA9IHtcclxuICBzZWxlY3RlZDogYm9vbGVhbjtcclxufTtcclxuXHJcbnR5cGUgSVByb3BzID0ge1xyXG4gIHNob3c6IFt7fV07XHJcbn07XHJcbnZhciBpbWdudW1iZXI6IG51bWJlciA9IDA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleFBhZ2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8SVByb3BzLCBzdGF0ZT4ge1xyXG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoKSB7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9ob21lXCIpO1xyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgIC8v6L+Z6L656L+U5Zue55qE5pWw5o2u5Lya6KKr5oyC6L295Yiw57uE5Lu255qEcHJvcHPkuK1cclxuICAgIHJldHVybiB7IHNob3c6IGRhdGEgfTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByb3BzOiBhbnkpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7IHNlbGVjdGVkOiBmYWxzZSB9O1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPExheW91dCB0aXRsZT1cIummlumhtVwiPlxyXG4gICAgICAgIDxoZWFkZXI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3Nzb2JqLmVoZWFkZXJ9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3Nzb2JqLmVoY2VudGVyfT5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3Nzb2JqLnNsb2dhbkJveH0+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2Nzc29iai50ZXh0fT7nvZHnvZflpKnkuIvlm77kuaY8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj7kvKDmib/kuK3ljY7mlofljJY8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nzc29iai51c2VyaW5mb0JveH0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3Nzb2JqLml0ZW1JbmZvfT5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gaWQ9XCJuaWNrTmFtZVwiIGNsYXNzTmFtZT17Y3Nzb2JqLmluZm9Ob3JtYWx9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y3Nzb2JqLmluZm9UZXh0fT7nmbvlvZU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjc3NvYmouaW5mb1RleHR9Pi88L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjc3NvYmouaW5mb1RleHR9PuazqOWGjDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3Nzb2JqLml0ZW1JbmZvfT5cclxuICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtjc3NvYmouaW5mb0xpbmt9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y3Nzb2JqLmluZm9UZXh0fT7mtojmga88L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjc3NvYmouaXRlbUluZm99PlxyXG4gICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e2Nzc29iai5pbmZvTGlua30+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjc3NvYmouaW5mb1RleHR9Pui0reeJqei9pjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nzc29iai5pdGVtSW5mb30+XHJcbiAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17Y3Nzb2JqLmluZm9MaW5rfT5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2Nzc29iai5pbmZvVGV4dH0+5oiR55qE6K6i5Y2VPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3Nzb2JqLml0ZW1JbmZvfT5cclxuICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtjc3NvYmouaW5mb0xpbmt9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y3Nzb2JqLmluZm9UZXh0fT7kuKrkurrkuK3lv4M8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjc3NvYmouaXRlbUluZm99PlxyXG4gICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e2Nzc29iai5pbmZvTGlua30+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjc3NvYmouaW5mb1RleHR9PuWNluWutuS4reW/gzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nzc29iai5pdGVtSW5mb30+XHJcbiAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17Y3Nzb2JqLmluZm9MaW5rfT5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2Nzc29iai5pbmZvVGV4dH0+5a6i5pyNPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3Nzb2JqLml0ZW1JbmZvfT5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjc3NvYmouaW5mb05vcm1hbDJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17Y3Nzb2JqLmluZm9MaW5rfT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y3Nzb2JqLmluZm9UZXh0fT7miYvmnLrniYg8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y3Nzb2JqLmxpbmVUZXN0fT58PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nzc29iai5pdGVtSW5mb30+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y3Nzb2JqLmluZm9Ob3JtYWwzfT5cclxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e2Nzc29iai5pbmZvTGlua30+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2Nzc29iai5pbmZvVGV4dH0+6YCB6IezIOWMl+S6rDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgey8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovfVxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nzc29iai5oZWFkZXJzZWFyY2hCb3h9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3Nzb2JqLmhlYWRlclNlYXJjaH0+XHJcbiAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y3Nzb2JqLmxvZ29UZXh0fVxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgZm9udEZhbWlseTogXCLljY7mlofmpbfkvZNcIiwgZm9udFdlaWdodDogXCJib2xkZXJcIiB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIOWtlOWtkOaXp+S5pue9kVxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3Nzb2JqLnNlYXJjaEJveH0+XHJcbiAgICAgICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9e2Nzc29iai5zZWFyY2hDb259PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3Nzb2JqLnNlYXJjaFR5cGV9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjc3NvYmouaXRlbVR5cGV9PuWVhuWTgTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjc3NvYmouaXRlbVR5cGV9PuaLjeWNluWMujwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjc3NvYmouaW5kaWNhdG9yfT48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjc3NvYmouc2VhcmNoaW5wdXRCb3h9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjc3NvYmouc2VhcmNoc3RhdHVzQm94fT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjc3NvYmouY3VyU3RhdHVzfT7lnKjllK48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y3Nzb2JqLmljb250YWJEb3dufT48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2Nzc29iai5pY29udGFiVXB9Pjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJzZWFyY2hXb3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y3Nzb2JqLmlucHV0TGFiZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICByZWFkT25seVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Nzc29iai5zZWFyY2hMYWJlbH1cclxuICAgICAgICAgICAgICAgICAgICAgIGh0bWxGb3I9XCJzZWFyY2hJbnB1dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiBcImJsb2NrXCIgfX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICDllYblk4HlkI3np7DjgIHkvZzogIXjgIHlh7rniYjnpL7jgIFJU0JOXHJcbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJzZWFyY2hCdG5cIiBjbGFzc05hbWU9e2Nzc29iai5idG59PlxyXG4gICAgICAgICAgICAgICAgICAgIOaQnOe0olxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjc3NvYmouc2VhcmNoTGlua30+XHJcbiAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17Y3Nzb2JqLmFkdnNlYXJjaEJ0bn0gcmVsPVwibm9mb2xsb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICDpq5jnuqfmkJzntKJcclxuICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICB7LyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL31cclxuICAgICAgICA8L2hlYWRlcj5cclxuICAgICAgICB7LyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL31cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nzc29iai5oZWFkfSBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IFwid2hpdGVcIiB9fT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjc3NvYmoubmF2X2JveH0+XHJcbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9e1tcInB1bGxMZWZ0XCIsIFwibGVmdHBhcnRcIl0uam9pbihcIiBcIil9PlxyXG4gICAgICAgICAgICAgIDxsaSBzdHlsZT17eyBwYWRkaW5nTGVmdDogXCI0cHhcIiB9fT5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIlBDXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXY+6aaW6aG1PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImhlYWRlcl9saW5lXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcblxyXG4gICAgICAgICAgICAgIDxsaSBzdHlsZT17eyBwYWRkaW5nTGVmdDogXCI0cHhcIiB9fT5cclxuICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIlBDXCJcclxuICAgICAgICAgICAgICAgICAgaHJlZj1cIi9uZXdib29rXCJcclxuICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgdGV4dERlY29yYXRpb246IFwibm9uZVwiIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXY+5paw5Lmm6LWE6K6vPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImhlYWRlcl9saW5lXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcblxyXG4gICAgICAgICAgICAgIDxsaSBzdHlsZT17eyBwYWRkaW5nTGVmdDogXCI0cHhcIiB9fT5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIlBDXCIgc3R5bGU9e3sgdGV4dERlY29yYXRpb246IFwibm9uZVwiIH19PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2PuWwj+ivtDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJoZWFkZXJfbGluZVwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG5cclxuICAgICAgICAgICAgICA8bGkgc3R5bGU9e3sgcGFkZGluZ0xlZnQ6IFwiNHB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJQQ1wiIHN0eWxlPXt7IHRleHREZWNvcmF0aW9uOiBcIm5vbmVcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgPGRpdj7mlaPmloc8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaGVhZGVyX2xpbmVcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuXHJcbiAgICAgICAgICAgICAgPGxpIHN0eWxlPXt7IHBhZGRpbmdMZWZ0OiBcIjRweFwiIH19PlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiUENcIiBzdHlsZT17eyB0ZXh0RGVjb3JhdGlvbjogXCJub25lXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXY+6ZqP56yUPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImhlYWRlcl9saW5lXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcblxyXG4gICAgICAgICAgICAgIDxsaSBzdHlsZT17eyBwYWRkaW5nTGVmdDogXCI0cHhcIiB9fT5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIlBDXCIgc3R5bGU9e3sgdGV4dERlY29yYXRpb246IFwibm9uZVwiIH19PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2PuaWh+WtpjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJoZWFkZXJfbGluZVwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgey8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi99XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3R0b21Db2xvclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsdW5ib2JveFwiPlxyXG4gICAgICAgICAgICA8Q2Fyb3VzZWwgYXV0b3BsYXkgY2xhc3NOYW1lPVwibHVuYm9cIj5cclxuICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgey8qIDxoMyBjbGFzc05hbWU9XCJjb250ZW50U3R5bGVcIj4xPC9oMz4gKi99XHJcbiAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgIHNyYz1cIi4uLy4uL3N0YXRpYy9pbWFnZXMvbHVuNS5qcGdcIlxyXG4gICAgICAgICAgICAgICAgICB3aWR0aD1cIjEwMDBcIlxyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIyNzBcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICBzcmM9XCIuLi8uLi9zdGF0aWMvaW1hZ2VzL2x1bi5qcGdcIlxyXG4gICAgICAgICAgICAgICAgICB3aWR0aD1cIjEwMDBcIlxyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIyNzBcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICBzcmM9XCIuLi8uLi9zdGF0aWMvaW1hZ2VzL2x1bjIuanBnXCJcclxuICAgICAgICAgICAgICAgICAgd2lkdGg9XCIxMDAwXCJcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMjcwXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgc3JjPVwiLi4vLi4vc3RhdGljL2ltYWdlcy9sdW4zLmpwZ1wiXHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMTAwMFwiXHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjI3MFwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgIHNyYz1cIi4uLy4uL3N0YXRpYy9pbWFnZXMvbHVuNC5qcGdcIlxyXG4gICAgICAgICAgICAgICAgICB3aWR0aD1cIjEwMDBcIlxyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIyNzBcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9DYXJvdXNlbD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgey8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLeWvvOiIquagj+mDqOWIhue7k+adny0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL31cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RvcmUtYm94XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9keWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFibGUtcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1yaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNsZWFyZml4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtX2I1MFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib29rbGlzdF90aXRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInB1bGwtbGVmdFwiPueJueiJsuaOqOiNkDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHVsbC1yaWdodCBtb3JlX2xpc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiXCIgY2xhc3NOYW1lPVwibm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICDnur/oo4Xlj6TnsY1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIlwiIGNsYXNzTmFtZT1cIm5vd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAg5Zu95a2m5Y+k57GNXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJcIiBjbGFzc05hbWU9XCJub3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIOawkeWbveaXp+S5plxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiXCIgY2xhc3NOYW1lPVwibm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICDlkI3kurrloqjov7lcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIlwiIGNsYXNzTmFtZT1cIm5vd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAg6Im65pyv54+N5pysXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJcIiBjbGFzc05hbWU9XCJub3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIOWPsuWtpuWFuOexjVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiAtLS0tLeS5puexjeWxleekuuWMuuWfny0tLS0tLS0tICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvb2tfbGlzdCBtX3QyNVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9va2xpc3RfYm94IGJvb2tsaXN0X2l0ZW0xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Lyoge3RoaXMucHJvcHMuc2hvd30gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLnNob3cubWFwKChpdGVtOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbS5pZCA8IDExKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJsaXRlc3Rob21lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5SaWdodDogXCIyOHB4XCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2l0ZW0uaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBpY1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHA6Ly9ib29rLmtvbmdmei5jb20vMTE3Mjg3LzIzOTY2MTUxMjUvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2l0ZW0uaW1nU3JjfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9va19uYW1lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cDovL2Jvb2sua29uZ2Z6LmNvbS8yNDQ4MDQvMjU0NDY1MDU2NC9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0aXRsZT1cIuabneS5puS6rembhlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLml0ZW1OYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hvcF9uYW1lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cDovL3Nob3Aua29uZ2Z6LmNvbS8yNDQ4MDQvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGl0bGU9XCLnkb7np4DpmIFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5wcm9kdWN0ZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib29ranV0aV9wcmljZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+77+lPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0ucHJpY2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb29rX21vcmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cDovL2Jvb2sua29uZ2Z6LmNvbS9DeGlhbnpodWFuZy9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHVsbC1yaWdodFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi7mm7TlpJpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIC0tLS0tLS0tLS0t5LiN5a656ZSZ6L+H5byA5aeLLS0tLS0tLS0tLS0tLSAqL31cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1fYjUwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvb2tsaXN0X3RpdF9iaWdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInB1bGwtbGVmdCBtX3IxMFwiPuS4jeWuuemUmei/hzwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHVsbC1sZWZ0IHRpdF9pbmZvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibGluZV94aWUgbV9yMTBcIj4vPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIOaWh+WPsuekvuenkeexu+eyvuWTgeaOqOiNkFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib29rX2xpc3QgbV90MjVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib29rbGlzdF9ib3ggYm9va2xpc3RfaXRlbTFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7Lyoge3RoaXMucHJvcHMuc2hvd30gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuc2hvdy5tYXAoKGl0ZW06IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbS5pZCA+PSAxMSAmJiBpdGVtLmlkIDwgMjEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImxpdGVzdGhvbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5SaWdodDogXCIyOHB4XCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpdGVtLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBpY1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cDovL2Jvb2sua29uZ2Z6LmNvbS8xMTcyODcvMjM5NjYxNTEyNS9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17aXRlbS5pbWdTcmN9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib29rX25hbWVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHA6Ly9ib29rLmtvbmdmei5jb20vMjQ0ODA0LzI1NDQ2NTA1NjQvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0aXRsZT1cIuabneS5puS6rembhlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0uaXRlbU5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaG9wX25hbWVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHA6Ly9zaG9wLmtvbmdmei5jb20vMjQ0ODA0L1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGl0bGU9XCLnkb7np4DpmIFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLnByb2R1Y3Rlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvb2tqdXRpX3ByaWNlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+77+lPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLnByaWNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvb2tfbW9yZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHA6Ly9ib29rLmtvbmdmei5jb20vQ3hpYW56aHVhbmcvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHVsbC1yaWdodFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLuabtOWkmlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiAtLS0tLS0tLS0tLeS4jeWuuemUmei/h+e7k+adny0tLS0tLS0tLS0tLS0gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIC0tLS0tLS0tLS0t6LaF5YC85L2O5Lu35byA5aeLLS0tLS0tLS0tLS0tLSAqL31cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGFvemhpZGlqaWEgc2hvcF9ib29rbGlzdDEgdGlhb3poZW5nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2xlYXJmaXggYm9va2xpc3RfdGl0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInB1bGwtbGVmdFwiPui2heWAvOS9juS7tzwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdWxsLXJpZ2h0IG1vcmVfbGlzdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIlwiIGNsYXNzTmFtZT1cIm5vd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxMOWFg+S4k+WMulxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIlwiIGNsYXNzTmFtZT1cIm5vd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxMC0zMOWFg+S4k+WMulxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIlwiIGNsYXNzTmFtZT1cIm5vd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAzMC01MOWFg+S4k+WMulxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiDkuabnsY3lsZXnpLrmqKHlnZcgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib29rX2xpc3QgbV90MjVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9va2xpc3RfYm94IGJvb2tsaXN0X2l0ZW0xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiB7dGhpcy5wcm9wcy5zaG93fSAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLnNob3cubWFwKChpdGVtOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpdGVtLmlkID49IDIxICYmIGl0ZW0uaWQgPCAzMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibGl0ZXN0aG9tZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5SaWdodDogXCIyOHB4XCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aXRlbS5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBpY1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwOi8vYm9vay5rb25nZnouY29tLzExNzI4Ny8yMzk2NjE1MTI1L1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpdGVtLmltZ1NyY30gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvb2tfbmFtZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwOi8vYm9vay5rb25nZnouY29tLzI0NDgwNC8yNTQ0NjUwNTY0L1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0aXRsZT1cIuabneS5puS6rembhlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5pdGVtTmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJzaG9wX25hbWVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHA6Ly9zaG9wLmtvbmdmei5jb20vMjQ0ODA0L1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGl0bGU9XCLnkb7np4DpmIFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLnByb2R1Y3Rlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9va2p1dGlfcHJpY2VjaGFvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPu+/pTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0ucHJpY2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJsb29rX21vcmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwOi8vYm9vay5rb25nZnouY29tL0N4aWFuemh1YW5nL1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB1bGwtcmlnaHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi7mm7TlpJpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICB7LyogLS0tLS0tLS0tLS3otoXlgLzkvY7ku7fnu5PmnZ8tLS0tLS0tLS0tLS0tICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibm8tbW9yZS1ib3hcIj7msqEg5pyJIOabtCDlpJog5LqGPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWxlZnRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hvcExlZnRiYXJcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3JkZXJfYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIOesrOS4gOWIl+W8gOWniyAqL31cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFsbGluZm9fYm94IGdyYXk2XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmYSBtX3IxNSBmYS1iYW5rIGljb25mb250XCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAxODIxNSDlrrbkuablupdcclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtX3Q1XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZhIG1fcjE1IGZhLWxpZmUtcmluZyBpY29uZm9udFwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgMjEwMTAyIOWutuS5puaRilxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1fdDVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmEgbV9yMTUgZmEtYm9vayBpY29uZm9udFwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgOTE0NDA5OTkg56eN5Zu+5LmmXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICB7Lyog56ys5LiA5YiX57uT5p2fICovfVxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiDnrKzkuozliJflvIDlp4sgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtX3QzNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGgzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICDplIDph4/mjpLooYzmppwgPHNwYW4gY2xhc3NOYW1lPVwibGluZVwiPi88L3NwYW4+IDxhPuabtOWkmjwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYW5nZV90aXRsZV9ib3ggY2xlYXJmaXhcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibm93XCI+5ZGoPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJcIj7mnIg8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIlwiPuW5tDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgey8qIC0tLS0tLeWIl+ihqOaVsOaNriAqL31cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhbmdlX3RleHQgbV90MTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsIHN0eWxlPXt7IGRpc3BsYXk6IFwiYmxvY2tcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ3X251bSBwdWxsLWxlZnQgY19yZWQgYmxvZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dF9ib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cDovL3Nob3Aua29uZ2Z6LmNvbS83MzEyMi9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDmtbfkuJ3msYnlraboirjnqpdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwid19udW0gcHVsbC1sZWZ0IGNfcmVkIGJsb2RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMi5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHRfYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHA6Ly9zaG9wLmtvbmdmei5jb20vMTY1MDUwL1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOWiqOesuualvOWVhuWfjlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ3X251bSBwdWxsLWxlZnQgY19yZWQgYmxvZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAzLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dF9ib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cDovL3Nob3Aua29uZ2Z6LmNvbS8yMzM3MDEvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg5YWJ5ZKM5pu45oi/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIndfbnVtIHB1bGwtbGVmdFwiPjQuPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dF9ib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cDovL3Nob3Aua29uZ2Z6LmNvbS8xOTM1MzUvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg5oeC5b635ZaE5pys5Lmm6ZiBXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIndfbnVtIHB1bGwtbGVmdFwiPjUuPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dF9ib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cDovL3Nob3Aua29uZ2Z6LmNvbS82OTM3OC9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDmt5jlrp3nlLvlu4pcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwid19udW0gcHVsbC1sZWZ0XCI+Ni48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0X2JveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwOi8vc2hvcC5rb25nZnouY29tLzIyOTEyL1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOWkp+iIjeiJuuacr+S5puW6l1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ3X251bSBwdWxsLWxlZnRcIj43Ljwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHRfYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHA6Ly9zaG9wLmtvbmdmei5jb20vMjYyMzEvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg5Y2O5pel5Lmm5bqXXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIndfbnVtIHB1bGwtbGVmdFwiPjguPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dF9ib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cDovL3Nob3Aua29uZ2Z6LmNvbS8xNzc2NzUvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg5oKm54S25Lmm5bqXXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIndfbnVtIHB1bGwtbGVmdFwiPjkuPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dF9ib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cDovL3Nob3Aua29uZ2Z6LmNvbS8yNjk4Ni9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDkuIDlvpfkuaboi5FcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwid19udW0gcHVsbC1sZWZ0XCI+MTAuPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dF9ib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cDovL3Nob3Aua29uZ2Z6LmNvbS8zNjY5L1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOmAmumbhei9qVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgey8qIC0tLS0tLeWIl+ihqOaVsOaNriAqL31cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICB7Lyog56ys5LqM5YiX57uT5p2fICovfVxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiDnrKzkuInliJflvIDlp4sgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtX3QzNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGgzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICDnu7zlkIjmjpLooYzmppwgPHNwYW4gY2xhc3NOYW1lPVwibGluZVwiPi88L3NwYW4+IDxhPuabtOWkmjwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJjaGFuZ2VfdGl0bGVfYm94IGNsZWFyZml4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibm93XCI+5ZGoPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIlwiPuaciDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJcIj7lubQ8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgIHsvKiAtLS0tLS3liJfooajmlbDmja4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYW5nZV90ZXh0IG1fdDEwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBzdHlsZT17eyBkaXNwbGF5OiBcImJsb2NrXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwid19udW0gcHVsbC1sZWZ0IGNfcmVkIGJsb2RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMS5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHRfYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHA6Ly9zaG9wLmtvbmdmei5jb20vNzMxMjIvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg5a2U6b6Z5Lmm56S+QVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ3X251bSBwdWxsLWxlZnQgY19yZWQgYmxvZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAyLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dF9ib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cDovL3Nob3Aua29uZ2Z6LmNvbS8xNjUwNTAvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg5a2m5Yiw6ICB5Lmm5bqXXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIndfbnVtIHB1bGwtbGVmdCBjX3JlZCBibG9kXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDMuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0X2JveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwOi8vc2hvcC5rb25nZnouY29tLzIzMzcwMS9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDlrZTpvpnmlofkvZPlhazlj7hcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwid19udW0gcHVsbC1sZWZ0XCI+NC48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0X2JveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwOi8vc2hvcC5rb25nZnouY29tLzE5MzUzNS9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDpnIDphY3kuabpmaIgKOWNl+S6rOS5puW6lylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwid19udW0gcHVsbC1sZWZ0XCI+NS48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0X2JveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwOi8vc2hvcC5rb25nZnouY29tLzY5Mzc4L1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOeOieeSnuS5puWxi1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ3X251bSBwdWxsLWxlZnRcIj42Ljwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHRfYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHA6Ly9zaG9wLmtvbmdmei5jb20vMjI5MTIvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg5Lid57u45LmL6Lev5pen5Lmm5bqXXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIndfbnVtIHB1bGwtbGVmdFwiPjcuPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dF9ib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cDovL3Nob3Aua29uZ2Z6LmNvbS8yNjIzMS9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDlk6Xkv6nkuablsYtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwid19udW0gcHVsbC1sZWZ0XCI+OC48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0X2JveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwOi8vc2hvcC5rb25nZnouY29tLzE3NzY3NS9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDlrabliLDogIHkuabln45cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwid19udW0gcHVsbC1sZWZ0XCI+OS48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0X2JveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwOi8vc2hvcC5rb25nZnouY29tLzI2OTg2L1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOWMl+S6rOW4gueZvuS4juaWh+WMluS8oOWqklxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ3X251bSBwdWxsLWxlZnRcIj4xMC48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0X2JveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwOi8vc2hvcC5rb25nZnouY29tLzM2NjkvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg6IKy5b635Lmm5bqXXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7LyogLS0tLS0t5YiX6KGo5pWw5o2uICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiDnrKzkuInliJfnu5PmnZ8gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIOesrOWbm+WIl+W8gOWniyAqL31cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1fdDM0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aDM+5q+P5ZGo5o6o6I2Q5qacPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cImNoYW5nZV90aXRsZV9ib3ggY2xlYXJmaXhcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJub3dcIj7lkag8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiXCI+5pyIPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIlwiPuW5tDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgey8qIC0tLS0tLeWIl+ihqOaVsOaNriAqL31cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhbmdlX3RleHQgbV90MTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsIHN0eWxlPXt7IGRpc3BsYXk6IFwiYmxvY2tcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ3X251bSBwdWxsLWxlZnQgY19yZWQgYmxvZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dF9ib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cDovL3Nob3Aua29uZ2Z6LmNvbS83MzEyMi9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDotLXpmLPkupTkuYvloILkuablupdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwid19udW0gcHVsbC1sZWZ0IGNfcmVkIGJsb2RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMi5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHRfYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHA6Ly9zaG9wLmtvbmdmei5jb20vMTY1MDUwL1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOS5puS5i+Win1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ3X251bSBwdWxsLWxlZnQgY19yZWQgYmxvZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAzLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dF9ib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cDovL3Nob3Aua29uZ2Z6LmNvbS8yMzM3MDEvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg6IyD54m56KW/5Lmm5bqXXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIndfbnVtIHB1bGwtbGVmdFwiPjQuPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dF9ib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cDovL3Nob3Aua29uZ2Z6LmNvbS8xOTM1MzUvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg5bi45bee5LiH6LGh5Y+k5pen5Lmm5bqXXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIndfbnVtIHB1bGwtbGVmdFwiPjUuPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dF9ib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cDovL3Nob3Aua29uZ2Z6LmNvbS82OTM3OC9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDkupTms4nmt5jkuabmlotcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwid19udW0gcHVsbC1sZWZ0XCI+Ni48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0X2JveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwOi8vc2hvcC5rb25nZnouY29tLzIyOTEyL1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOilv+aWh+a2ieWNjlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ3X251bSBwdWxsLWxlZnRcIj43Ljwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHRfYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHA6Ly9zaG9wLmtvbmdmei5jb20vMjYyMzEvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg54ix6I6J5Lmm5bGLXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIndfbnVtIHB1bGwtbGVmdFwiPjguPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dF9ib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cDovL3Nob3Aua29uZ2Z6LmNvbS8xNzc2NzUvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg6ZKi6ZOB6aaS5aS05LqM5Y+35bqXXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIndfbnVtIHB1bGwtbGVmdFwiPjkuPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dF9ib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cDovL3Nob3Aua29uZ2Z6LmNvbS8yNjk4Ni9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDlvpDorrDkuabmlotcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwid19udW0gcHVsbC1sZWZ0XCI+MTAuPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dF9ib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cDovL3Nob3Aua29uZ2Z6LmNvbS8zNjY5L1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOS6rOWJp+S5puW6l1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgey8qIC0tLS0tLeWIl+ihqOaVsOaNriAqL31cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICB7Lyog56ys5Zub5YiX57uT5p2fICovfVxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiDnrKzkupTliJflvIDlp4sgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsbV9ib3ggbV90NTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxoMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAg5Lmm5bqX6IGU55ufIDxzcGFuIGNsYXNzTmFtZT1cImxpbmVcIj4vPC9zcGFuPiA8YT7mm7TlpJo8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicHVsbC1yaWdodFwiPjMyMTA8L3NwYW4+5YyX5Lqs5biCXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwdWxsLXJpZ2h0XCI+ODUwPC9zcGFuPuS4iua1t+W4glxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicHVsbC1yaWdodFwiPjQxMDwvc3Bhbj7lpKnmtKXluIJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInB1bGwtcmlnaHRcIj4yMzY8L3NwYW4+6YeN5bqG5biCXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwdWxsLXJpZ2h0XCI+NDk0PC9zcGFuPuWuieW+veecgVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicHVsbC1yaWdodFwiPjMxNTwvc3Bhbj7npo/lu7rnnIFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInB1bGwtcmlnaHRcIj4yMDA8L3NwYW4+55SY6IKD55yBXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwdWxsLXJpZ2h0XCI+ODcwPC9zcGFuPuW5v+S4nOecgVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicHVsbC1yaWdodFwiPjE4MDwvc3Bhbj7lub/opb9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInB1bGwtcmlnaHRcIj43OTwvc3Bhbj7otLXlt57nnIFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInB1bGwtcmlnaHRcIj4zNDwvc3Bhbj7mtbfljZfnnIFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInB1bGwtcmlnaHRcIj4xMjU3PC9zcGFuPuays+WMl+ecgVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicHVsbC1yaWdodFwiPjg5OTwvc3Bhbj7msrPljZfnnIFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInB1bGwtcmlnaHRcIj4zMjM8L3NwYW4+6buR6b6Z5rGf55yBXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwdWxsLXJpZ2h0XCI+NTkzPC9zcGFuPua5luWMl+ecgVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicHVsbC1yaWdodFwiPjQwMTwvc3Bhbj7muZbljZfnnIFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInB1bGwtcmlnaHRcIj4zMjY8L3NwYW4+5ZCJ5p6X55yBXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwdWxsLXJpZ2h0XCI+MTE1Njwvc3Bhbj7msZ/oi4/nnIFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInB1bGwtcmlnaHRcIj4yOTM8L3NwYW4+5rGf6KW/55yBXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwdWxsLXJpZ2h0XCI+NzA2PC9zcGFuPui+veWugeecgVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIOesrOS6lOWIl+e7k+adnyAqL31cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIHsvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLeS4u+S9k+e7k+adny0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovfVxyXG4gICAgICAgICAgey8qIOW6lemDqOW8gOWniyAqL31cclxuICAgICAgICAgIDxGb290ZXI+PC9Gb290ZXI+XHJcblxyXG4gICAgICAgICAgey8qIOW6lemDqOe7k+adnyAqL31cclxuICAgICAgICAgIHsvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIHsvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovfVxyXG4gICAgICA8L0xheW91dD5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBJbmRleFBhZ2UuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKCkgPT4ge1xyXG4vLyAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDozMDAxL2FwaS9ub3ZlbHRhYmxlXCIpO1xyXG4vLyAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xyXG4vLyAgIC8v6L+Z6L656L+U5Zue55qE5pWw5o2u5Lya6KKr5oyC6L295Yiw57uE5Lu255qEcHJvcHPkuK1cclxuLy8gICBsZXQgbm92ZWxzaG93O1xyXG4vLyAgIHJldHVybiB7IHNob3c6IGRhdGEgfTtcclxuLy8gfTtcclxuXHJcbi8vIGV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoSW5kZXhQYWdlKTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYW50ZC9saWIvY2Fyb3VzZWxcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaXNvbW9ycGhpYy11bmZldGNoXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtanN4L3N0eWxlXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=