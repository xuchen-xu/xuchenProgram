webpackHotUpdate_N_E("pages/newbook",{

/***/ "./pages/newbook.tsx":
/*!***************************!*\
  !*** ./pages/newbook.tsx ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return IndexPage; });
/* harmony import */ var antd_lib_carousel_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/carousel/style/css */ "./node_modules/antd/lib/carousel/style/css.js");
/* harmony import */ var antd_lib_carousel_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_carousel_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/carousel */ "./node_modules/antd/lib/carousel/index.js");
/* harmony import */ var antd_lib_carousel__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_carousel__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_dropdown_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/dropdown/style/css */ "./node_modules/antd/lib/dropdown/style/css.js");
/* harmony import */ var antd_lib_dropdown_style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_dropdown_style_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_dropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/dropdown */ "./node_modules/antd/lib/dropdown/index.js");
/* harmony import */ var antd_lib_dropdown__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_dropdown__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var antd_lib_menu_style_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! antd/lib/menu/style/css */ "./node_modules/antd/lib/menu/style/css.js");
/* harmony import */ var antd_lib_menu_style_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(antd_lib_menu_style_css__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var antd_lib_menu__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! antd/lib/menu */ "./node_modules/antd/lib/menu/index.js");
/* harmony import */ var antd_lib_menu__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(antd_lib_menu__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _css_home_less__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./css/home.less */ "./pages/css/home.less");
/* harmony import */ var _css_home_less__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_css_home_less__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _static_css_font_awesome_css__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../static/css/font-awesome.css */ "./static/css/font-awesome.css");
/* harmony import */ var _static_css_font_awesome_css__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_static_css_font_awesome_css__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _css_home_css__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./css/home.css */ "./pages/css/home.css");
/* harmony import */ var _css_home_css__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_css_home_css__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_20__);















var _jsxFileName = "D:\\react\u6BD5\u4E1A\u8BBE\u8BA1\\\u5B9E\u8DF5\u8D44\u6599\\20210201\\20210201\\code\\next-ts\u6A21\u677F\\my-app\\pages\\newbook.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_11__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_11__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_10__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

// import Link from 'next/link'
 // import { withRouter } from "next/router";

 // import { useEffect } from "react";
// import { Button } from 'antd';
//开启css模块化之后可以这样使用样式
// import cssobj from './index.less'





var SubMenu = antd_lib_menu__WEBPACK_IMPORTED_MODULE_14___default.a.SubMenu; // 声明的全局数据

var menu1 = __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_14___default.a, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 3
  }
}, __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_14___default.a.Item, {
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
}, "\u6211\u7684\u597D\u53CB")), __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_14___default.a.Item, {
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
}, "\u8D44\u91D1\u8D26\u6237")), __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_14___default.a.Item, {
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
}, "\u56FE\u4E66\u6536\u85CF")), __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_14___default.a.Item, {
  danger: true,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 47,
    columnNumber: 5
  }
}, "\u62CD\u5356\u4EA4\u6613"));

var menu2 = __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_14___default.a, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 52,
    columnNumber: 3
  }
}, __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_14___default.a.ItemGroup, {
  title: "\u5E97\u94FA",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 53,
    columnNumber: 5
  }
}, __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_14___default.a.Item, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 54,
    columnNumber: 7
  }
}, "\u514D\u8D39\u6446\u5730\u644A"), __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_14___default.a.Item, {
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
}, __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_14___default.a.Item, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 58,
    columnNumber: 7
  }
}, "\u7533\u8BF7\u62CD\u5356\u4F1A\u5458"), __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_14___default.a.Item, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 59,
    columnNumber: 7
  }
}, "\u62CD\u5356\u4FE1\u606F")));

var menu3 = __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_14___default.a, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 69,
    columnNumber: 3
  }
}, __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_14___default.a.ItemGroup, {
  title: "APP\u5BA2\u6237\u7AEF",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 70,
    columnNumber: 5
  }
}), __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_14___default.a.ItemGroup, {
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
})), __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_14___default.a.ItemGroup, {
  title: "iOS \u2022 Android",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 77,
    columnNumber: 5
  }
})); // 声明的全局数据


var imgnumber = 0;

var IndexPage = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_9__["default"])(IndexPage, _React$Component);

  var _super = _createSuper(IndexPage);

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_8__["default"])(IndexPage, null, [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee() {
        var res, show;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_20___default()("http://localhost:3001/essaytable");

              case 2:
                res = _context.sent;
                _context.next = 5;
                return res.json();

              case 5:
                show = _context.sent;
                return _context.abrupt("return", {
                  show: show
                });

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getInitialProps() {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  function IndexPage(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__["default"])(this, IndexPage);

    _this = _super.call(this, props);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_12__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "handleClick", function (e) {
      _this.setState({
        selected: !_this.state.selected
      }, function () {
        if (!_this.state.selected) {// this.clearAll();
        }
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_12__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "rightBtnStyle", {
      display: "block",
      color: "blue"
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_12__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "rightBtnStyle2", {
      display: "none",
      color: "red"
    });

    _this.state = {
      selected: false
    };
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_8__["default"])(IndexPage, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var currentstyle;

      if (this.state.selected) {
        currentstyle = this.rightBtnStyle2;
      } else {
        currentstyle = this.rightBtnStyle;
      }

      return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_15__["default"], {
        title: "\u65B0\u4E66\u8D44\u8BAF",
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
        className: _css_home_less__WEBPACK_IMPORTED_MODULE_17___default.a.shortcut,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127,
          columnNumber: 11
        }
      }, __jsx("div", {
        className: _css_home_less__WEBPACK_IMPORTED_MODULE_17___default.a.headerWrap,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128,
          columnNumber: 13
        }
      }, __jsx("div", {
        className: _css_home_less__WEBPACK_IMPORTED_MODULE_17___default.a.sloganBox,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129,
          columnNumber: 15
        }
      }, __jsx("span", {
        className: _css_home_less__WEBPACK_IMPORTED_MODULE_17___default.a.text,
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
        className: [_css_home_less__WEBPACK_IMPORTED_MODULE_17___default.a.userinfobox, _css_home_less__WEBPACK_IMPORTED_MODULE_17___default.a.clearfix].join(" "),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134,
          columnNumber: 13
        }
      }, __jsx("div", {
        className: _css_home_less__WEBPACK_IMPORTED_MODULE_17___default.a.itemInfo,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136,
          columnNumber: 15
        }
      }, __jsx("span", {
        className: _css_home_less__WEBPACK_IMPORTED_MODULE_17___default.a.infoNormal,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137,
          columnNumber: 17
        }
      }, __jsx("span", {
        className: _css_home_less__WEBPACK_IMPORTED_MODULE_17___default.a.infoText,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138,
          columnNumber: 19
        }
      }, "\u767B\u5F55"), __jsx("span", {
        className: _css_home_less__WEBPACK_IMPORTED_MODULE_17___default.a.infoText,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139,
          columnNumber: 19
        }
      }, "/"), __jsx("span", {
        className: _css_home_less__WEBPACK_IMPORTED_MODULE_17___default.a.infoText,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140,
          columnNumber: 19
        }
      }, "\u6CE8\u518C"))), __jsx("div", {
        className: _css_home_less__WEBPACK_IMPORTED_MODULE_17___default.a.itemInfo,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150,
          columnNumber: 15
        }
      }, __jsx("a", {
        href: "http://cart.kongfz.com/list",
        className: _css_home_less__WEBPACK_IMPORTED_MODULE_17___default.a.infoLink,
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
        className: ["fa", "fa-shopping-cart", _css_home_less__WEBPACK_IMPORTED_MODULE_17___default.a.tubiao].join(" "),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158,
          columnNumber: 19
        }
      }), __jsx("span", {
        className: _css_home_less__WEBPACK_IMPORTED_MODULE_17___default.a.infoText,
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
        className: _css_home_less__WEBPACK_IMPORTED_MODULE_17___default.a.itemInfo,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167,
          columnNumber: 17
        }
      }, __jsx("a", {
        href: "http://shop.kongfz.com/buyer/order/order_list.html",
        className: [_css_home_less__WEBPACK_IMPORTED_MODULE_17___default.a.infoLink, "ant-dropdown-link"].join(" "),
        target: "_blank",
        rel: "nofollow",
        onClick: function onClick(e) {
          return e.preventDefault();
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168,
          columnNumber: 19
        }
      }, __jsx("span", {
        className: _css_home_less__WEBPACK_IMPORTED_MODULE_17___default.a.infoText,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 175,
          columnNumber: 21
        }
      }, "\u4E2A\u4EBA\u4E2D\u5FC3")))), __jsx("div", {
        className: _css_home_less__WEBPACK_IMPORTED_MODULE_17___default.a.itemInfo,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 181,
          columnNumber: 15
        }
      }, __jsx("a", {
        href: "http://shop.kongfz.com/buyer/order/order_list.html",
        className: _css_home_less__WEBPACK_IMPORTED_MODULE_17___default.a.infoLink,
        target: "_blank",
        rel: "nofollow",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 182,
          columnNumber: 17
        }
      }, __jsx("span", {
        className: _css_home_less__WEBPACK_IMPORTED_MODULE_17___default.a.infoText,
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
        className: _css_home_less__WEBPACK_IMPORTED_MODULE_17___default.a.itemInfo,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 192,
          columnNumber: 17
        }
      }, __jsx("a", {
        href: "http://shop.kongfz.com/buyer/order/order_list.html",
        className: [_css_home_less__WEBPACK_IMPORTED_MODULE_17___default.a.infoLink, "ant-dropdown-link"].join(" "),
        target: "_blank",
        rel: "nofollow",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 193,
          columnNumber: 19
        }
      }, __jsx("span", {
        className: _css_home_less__WEBPACK_IMPORTED_MODULE_17___default.a.infoText,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 199,
          columnNumber: 21
        }
      }, "\u5356\u5BB6\u4E2D\u5FC3")))), __jsx("div", {
        className: _css_home_less__WEBPACK_IMPORTED_MODULE_17___default.a.itemInfo,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 203,
          columnNumber: 15
        }
      }, __jsx("a", {
        href: "http://shop.kongfz.com/buyer/order/order_list.html",
        className: [_css_home_less__WEBPACK_IMPORTED_MODULE_17___default.a.infoLink, "ant-dropdown-link"].join(" "),
        target: "_blank",
        rel: "nofollow",
        onClick: function onClick(e) {
          return e.preventDefault();
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 204,
          columnNumber: 17
        }
      }, __jsx("span", {
        className: _css_home_less__WEBPACK_IMPORTED_MODULE_17___default.a.infoText,
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
        className: _css_home_less__WEBPACK_IMPORTED_MODULE_17___default.a.itemInfo,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 216,
          columnNumber: 17
        }
      }, __jsx("a", {
        href: "http://shop.kongfz.com/buyer/order/order_list.html",
        className: [_css_home_less__WEBPACK_IMPORTED_MODULE_17___default.a.infoLink, "ant-dropdown-link"].join(" "),
        target: "_blank",
        rel: "nofollow",
        onClick: function onClick(e) {
          return e.preventDefault();
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 217,
          columnNumber: 19
        }
      }, __jsx("span", {
        className: _css_home_less__WEBPACK_IMPORTED_MODULE_17___default.a.infoText,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 224,
          columnNumber: 21
        }
      }, "\u624B\u673A\u7248")))), __jsx("div", {
        className: _css_home_less__WEBPACK_IMPORTED_MODULE_17___default.a.itemInfo,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 228,
          columnNumber: 15
        }
      }), __jsx("div", {
        className: _css_home_less__WEBPACK_IMPORTED_MODULE_17___default.a.itemInfo,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 229,
          columnNumber: 15
        }
      }), __jsx("div", {
        className: _css_home_less__WEBPACK_IMPORTED_MODULE_17___default.a.itemInfo,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 230,
          columnNumber: 15
        }
      }), __jsx("div", {
        className: _css_home_less__WEBPACK_IMPORTED_MODULE_17___default.a.itemInfo,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 231,
          columnNumber: 15
        }
      }), __jsx("div", {
        className: _css_home_less__WEBPACK_IMPORTED_MODULE_17___default.a.itemInfo,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 232,
          columnNumber: 15
        }
      }), __jsx("div", {
        className: _css_home_less__WEBPACK_IMPORTED_MODULE_17___default.a.itemInfo,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 233,
          columnNumber: 15
        }
      }), __jsx("div", {
        className: _css_home_less__WEBPACK_IMPORTED_MODULE_17___default.a.itemInfo,
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
      }, this.props.show.map(function (item) {
        imgnumber++;

        if (imgnumber < 22) {
          return __jsx("div", {
            key: item.bookId,
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 296,
              columnNumber: 19
            }
          }, __jsx("img", {
            src: "../static/images/image/".concat(item.imgPath),
            width: "115",
            height: "172",
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 297,
              columnNumber: 21
            }
          }), item.bookName, __jsx("div", {
            __self: _this2,
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
      }, this.props.show.map(function (item) {
        // let grade = item.grade;
        if (item.bookId < 32 && item.bookId > 22) {
          if (item.grade < 9) {
            return __jsx("div", {
              key: item.bookId,
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 347,
                columnNumber: 21
              }
            }, __jsx("img", {
              src: "../static/images/image/".concat(item.imgPath),
              width: "85",
              height: "120",
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 348,
                columnNumber: 23
              }
            }), __jsx("br", {
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 353,
                columnNumber: 23
              }
            }), __jsx("div", {
              className: "bk clear",
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 354,
                columnNumber: 23
              }
            }, __jsx("div", {
              className: "bookname",
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 355,
                columnNumber: 25
              }
            }, item.bookName), __jsx("br", {
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 356,
                columnNumber: 25
              }
            }), __jsx("div", {
              className: "dbgrade",
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 357,
                columnNumber: 25
              }
            }, __jsx("div", {
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 358,
                columnNumber: 27
              }
            }, "\u8BC4\u5206\uFF1A"), __jsx("div", {
              className: "cl",
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 359,
                columnNumber: 27
              }
            }, __jsx(react__WEBPACK_IMPORTED_MODULE_16___default.a.Fragment, {
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 360,
                columnNumber: 29
              }
            }, __jsx("div", {
              className: "grade",
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 361,
                columnNumber: 31
              }
            }, item.grade), __jsx("img", {
              src: "../static/images/image/star1.png",
              height: "11",
              width: "11",
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 362,
                columnNumber: 31
              }
            }), __jsx("img", {
              src: "../static/images/image/star1.png",
              height: "11",
              width: "11",
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 367,
                columnNumber: 31
              }
            }), __jsx("img", {
              src: "../static/images/image/star1.png",
              height: "11",
              width: "11",
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 372,
                columnNumber: 31
              }
            }), __jsx("img", {
              src: "../static/images/image/star1.png",
              height: "11",
              width: "11",
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 377,
                columnNumber: 31
              }
            })))), __jsx("div", {
              className: "bookau",
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 385,
                columnNumber: 25
              }
            }, "\u4F5C\u8005:", item.author), __jsx("br", {
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 386,
                columnNumber: 25
              }
            })));
          } else {
            return __jsx("div", {
              key: item.bookId,
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 392,
                columnNumber: 21
              }
            }, __jsx("img", {
              src: "../static/images/image/".concat(item.imgPath),
              width: "85",
              height: "120",
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 393,
                columnNumber: 23
              }
            }), __jsx("br", {
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 398,
                columnNumber: 23
              }
            }), __jsx("div", {
              className: "bk clear",
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 399,
                columnNumber: 23
              }
            }, __jsx("div", {
              className: "bookname",
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 400,
                columnNumber: 25
              }
            }, item.bookName), __jsx("br", {
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 401,
                columnNumber: 25
              }
            }), __jsx("div", {
              className: "dbgrade",
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 402,
                columnNumber: 25
              }
            }, __jsx("div", {
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 403,
                columnNumber: 27
              }
            }, "\u8BC4\u5206\uFF1A"), __jsx("div", {
              className: "cl",
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 404,
                columnNumber: 27
              }
            }, __jsx(react__WEBPACK_IMPORTED_MODULE_16___default.a.Fragment, {
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 405,
                columnNumber: 29
              }
            }, __jsx("div", {
              className: "grade",
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 406,
                columnNumber: 31
              }
            }, item.grade), __jsx("img", {
              src: "../static/images/image/star1.png",
              height: "11",
              width: "11",
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 407,
                columnNumber: 31
              }
            }), __jsx("img", {
              src: "../static/images/image/star1.png",
              height: "11",
              width: "11",
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 412,
                columnNumber: 31
              }
            }), __jsx("img", {
              src: "../static/images/image/star1.png",
              height: "11",
              width: "11",
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 417,
                columnNumber: 31
              }
            }), __jsx("img", {
              src: "../static/images/image/star1.png",
              height: "11",
              width: "11",
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 422,
                columnNumber: 31
              }
            }), __jsx("img", {
              src: "../static/images/image/star1.png",
              height: "11",
              width: "11",
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 427,
                columnNumber: 31
              }
            })))), __jsx("div", {
              className: "bookau",
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 435,
                columnNumber: 25
              }
            }, "\u4F5C\u8005:", item.author), __jsx("br", {
              __self: _this2,
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
  }]);

  return IndexPage;
}(react__WEBPACK_IMPORTED_MODULE_16___default.a.Component); // const IndexPage = (props: any) => {
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbmV3Ym9vay50c3giXSwibmFtZXMiOlsiU3ViTWVudSIsIm1lbnUxIiwibWVudTIiLCJtZW51MyIsIm1hcmdpblJpZ2h0IiwibWFyZ2luTGVmdCIsImltZ251bWJlciIsIkluZGV4UGFnZSIsImZldGNoIiwicmVzIiwianNvbiIsInNob3ciLCJwcm9wcyIsImUiLCJzZXRTdGF0ZSIsInNlbGVjdGVkIiwic3RhdGUiLCJkaXNwbGF5IiwiY29sb3IiLCJjdXJyZW50c3R5bGUiLCJyaWdodEJ0blN0eWxlMiIsInJpZ2h0QnRuU3R5bGUiLCJjc3NvYmoiLCJzaG9ydGN1dCIsImhlYWRlcldyYXAiLCJzbG9nYW5Cb3giLCJ0ZXh0IiwidXNlcmluZm9ib3giLCJjbGVhcmZpeCIsImpvaW4iLCJpdGVtSW5mbyIsImluZm9Ob3JtYWwiLCJpbmZvVGV4dCIsImluZm9MaW5rIiwidHViaWFvIiwicHJldmVudERlZmF1bHQiLCJtYXAiLCJpdGVtIiwiYm9va0lkIiwiaW1nUGF0aCIsImJvb2tOYW1lIiwiYXV0aG9yIiwiZ3JhZGUiLCJ0ZXh0RGVjb3JhdGlvbiIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Q0FFQTs7Q0FFQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ3dCO0FBQ3hCO0lBT1FBLE8seURBQUFBLE8sRUFFUjs7QUFDQSxJQUFNQyxLQUFLLEdBQ1Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUNFLDREQUFNLElBQU47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUNFO0FBQ0UsUUFBTSxFQUFDLFFBRFQ7QUFFRSxLQUFHLEVBQUMscUJBRk4sQ0FHRTtBQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEs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O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBSyxpQkFBUyxFQUFDLGVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQUssaUJBQVMsRUFBQyxNQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFERixDQURGLEVBSUU7QUFBSyxpQkFBUyxFQUFDLEtBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQUssaUJBQVMsRUFBQyxtQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9DQURGLEVBRUU7QUFBSyxpQkFBUyxFQUFDLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQUssaUJBQVMsRUFBQyxPQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUFHLFlBQUksRUFBQyxRQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBREYsQ0FERixFQUlFO0FBQUssaUJBQVMsRUFBQyxPQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUFHLFlBQUksRUFBQyxRQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBREYsQ0FKRixFQU9FO0FBQUssaUJBQVMsRUFBQyxRQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUFHLFlBQUksRUFBQyxRQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBREYsQ0FQRixFQVVFO0FBQUssaUJBQVMsRUFBQyxNQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUFHLFlBQUksRUFBQyxhQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBREYsQ0FWRixDQUZGLENBSkYsRUF1QkU7QUFB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UDtBQUVFLGNBQU0sRUFBQyxRQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMENBREYsRUFNTyxHQU5QLENBN0JGLEVBcUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUNFLFlBQUksRUFBQywrQ0FEUDtBQUVFLGNBQU0sRUFBQyxRQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0RBREYsRUFNTyxHQU5QLENBckNGLEVBNkNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUNFLFlBQUksRUFBQyxtREFEUDtBQUVFLGNBQU0sRUFBQyxRQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0RBREYsRUFNTyxHQU5QLENBN0NGLEVBcURFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUNFLFlBQUksRUFBQywrQ0FEUDtBQUVFLGNBQU0sRUFBQyxRQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0RBREYsRUFNTyxHQU5QLENBckRGLEVBNkRFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUNFLFlBQUksRUFBQywrQ0FEUDtBQUVFLGNBQU0sRUFBQyxRQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0RBREYsRUFNTyxHQU5QLENBN0RGLEVBcUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUNFLFlBQUksRUFBQyx3REFEUDtBQUVFLGNBQU0sRUFBQyxRQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0RBREYsRUFNTyxHQU5QLENBckVGLEVBNkVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUNFLFlBQUksRUFBQyxpREFEUDtBQUVFLGNBQU0sRUFBQyxRQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0RBREYsRUFNTyxHQU5QLENBN0VGLEVBcUZFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUNFLFlBQUksRUFBQyx3REFEUDtBQUVFLGNBQU0sRUFBQyxRQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0VBREYsRUFNTyxHQU5QLENBckZGLEVBNkZFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUNFLFlBQUksRUFBQyxzREFEUDtBQUVFLGNBQU0sRUFBQyxRQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0VBREYsRUFNTyxHQU5QLENBN0ZGLEVBcUdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUNFLFlBQUksRUFBQyxtREFEUDtBQUVFLGNBQU0sRUFBQyxRQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMENBREYsRUFNTyxHQU5QLENBckdGLEVBNkdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUNFLFlBQUksRUFBQyxpREFEUDtBQUVFLGNBQU0sRUFBQyxRQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0RBREYsRUFNTyxHQU5QLENBN0dGLEVBcUhFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUNFLFlBQUksRUFBQyxrREFEUDtBQUVFLGNBQU0sRUFBQyxRQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMENBREYsRUFNTyxHQU5QLENBckhGLEVBNkhFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUNFLFlBQUksRUFBQyxpREFEUDtBQUVFLGNBQU0sRUFBQyxRQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0RBREYsRUFNTyxHQU5QLENBN0hGLEVBcUlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUNFLFlBQUksRUFBQyxnREFEUDtBQUVFLGNBQU0sRUFBQyxRQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0NBREYsRUFNTyxHQU5QLENBcklGLEVBNklFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUNFLFlBQUksRUFBQyxnREFEUDtBQUVFLGNBQU0sRUFBQyxRQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMENBREYsRUFNTyxHQU5QLENBN0lGLEVBcUpFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUNFLFlBQUksRUFBQyxnREFEUDtBQUVFLGNBQU0sRUFBQyxRQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0RBREYsRUFNTyxHQU5QLENBckpGLEVBNkpFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUNFLFlBQUksRUFBQyw4Q0FEUDtBQUVFLGNBQU0sRUFBQyxRQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0RBREYsRUFNTyxHQU5QLENBN0pGLEVBcUtFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUNFLFlBQUksRUFBQyx1Q0FEUDtBQUVFLGNBQU0sRUFBQyxRQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBREYsRUFNTyxHQU5QLENBcktGLEVBNktFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUNFLFlBQUksRUFBQywrQ0FEUDtBQUVFLGNBQU0sRUFBQyxRQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0NBREYsRUFNTyxHQU5QLENBN0tGLEVBcUxFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUNFLFlBQUksRUFBQyxzQ0FEUDtBQUVFLGNBQU0sRUFBQyxRQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBREYsRUFNTyxHQU5QLENBckxGLEVBNkxFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUNFLFlBQUksRUFBQyw2Q0FEUDtBQUVFLGNBQU0sRUFBQyxRQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsOEJBREYsRUFNTyxHQU5QLENBN0xGLEVBcU1FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUNFLFlBQUksRUFBQywwQ0FEUDtBQUVFLGNBQU0sRUFBQyxRQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsOEJBREYsRUFNTyxHQU5QLENBck1GLEVBNk1FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUNFLFlBQUksRUFBQyxzQ0FEUDtBQUVFLGNBQU0sRUFBQyxRQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBREYsRUFNTyxHQU5QLENBN01GLEVBcU5FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUNFLFlBQUksRUFBQyxxQ0FEUDtBQUVFLGNBQU0sRUFBQyxRQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBREYsRUFNTyxHQU5QLENBck5GLEVBNk5FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUNFLFlBQUksRUFBQyxxQ0FEUDtBQUVFLGNBQU0sRUFBQyxRQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBREYsRUFNTyxHQU5QLENBN05GLEVBcU9FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUNFLFlBQUksRUFBQywwQ0FEUDtBQUVFLGNBQU0sRUFBQyxRQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBREYsRUFNTyxHQU5QLENBck9GLEVBNk9FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUNFLFlBQUksRUFBQywyQ0FEUDtBQUVFLGNBQU0sRUFBQyxRQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsOEJBREYsRUFNTyxHQU5QLENBN09GLEVBcVBFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUNFLFlBQUksRUFBQyxxQ0FEUDtBQUVFLGNBQU0sRUFBQyxRQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBREYsRUFNTyxHQU5QLENBclBGLEVBNlBFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUNFLFlBQUksRUFBQyx3Q0FEUDtBQUVFLGNBQU0sRUFBQyxRQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBREYsRUFNTyxHQU5QLENBN1BGLEVBcVFFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUNFLFlBQUksRUFBQywyQ0FEUDtBQUVFLGNBQU0sRUFBQyxRQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsOEJBREYsRUFNTyxHQU5QLENBclFGLEVBNlFFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUNFLFlBQUksRUFBQyx5Q0FEUDtBQUVFLGNBQU0sRUFBQyxRQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsOEJBREYsRUFNTyxHQU5QLENBN1FGLEVBcVJFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUNFLFlBQUksRUFBQyx1Q0FEUDtBQUVFLGNBQU0sRUFBQyxRQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsOEJBREYsRUFNTyxHQU5QLENBclJGLEVBNlJFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUNFLFlBQUksRUFBQywwQ0FEUDtBQUVFLGNBQU0sRUFBQyxRQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0NBREYsRUFNTyxHQU5QLENBN1JGLEVBcVNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUNFLFlBQUksRUFBQyx1Q0FEUDtBQUVFLGNBQU0sRUFBQyxRQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBREYsRUFNTyxHQU5QLENBclNGLEVBNlNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUNFLFlBQUksRUFBQyxzQ0FEUDtBQUVFLGNBQU0sRUFBQyxRQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBREYsRUFNTyxHQU5QLENBN1NGLENBREYsQ0ExU0YsQ0FmRixDQURGLENBTEYsRUEwbkJFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkZBMW5CRixFQTJuQkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQTNuQkYsRUE0bkJFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0RBNW5CRixDQWpVRixDQURGO0FBbThCRDs7OztFQXArQm9DMkIsNkNBQUssQ0FBQ0MsUyxHQXMrQjdDO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9uZXdib29rLjVmYTVlYzhiMjE1ODc1ZTQwODcyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XHJcbi8vIGltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG4vLyBpbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuLy8gaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnYW50ZCc7XHJcbi8v5byA5ZCvY3Nz5qih5Z2X5YyW5LmL5ZCO5Y+v5Lul6L+Z5qC35L2/55So5qC35byPXHJcbi8vIGltcG9ydCBjc3NvYmogZnJvbSAnLi9pbmRleC5sZXNzJ1xyXG5pbXBvcnQgY3Nzb2JqIGZyb20gXCIuL2Nzcy9ob21lLmxlc3NcIjtcclxuaW1wb3J0IFwiQC9zdGF0aWMvY3NzL2ZvbnQtYXdlc29tZS5jc3NcIjtcclxuaW1wb3J0IFwiLi9jc3MvaG9tZS5jc3NcIjtcclxuaW1wb3J0IGZldGNoIGZyb20gXCJpc29tb3JwaGljLXVuZmV0Y2hcIjtcclxuXHJcbmltcG9ydCB7IENhcm91c2VsIH0gZnJvbSBcImFudGRcIjtcclxuLy8gaW1wb3J0IENvbHVtbkdyb3VwIGZyb20gXCJhbnRkL2xpYi90YWJsZS9Db2x1bW5Hcm91cFwiO1xyXG4vLyBpbXBvcnQgeyB0eXBlIH0gZnJvbSBcIm9zXCI7XHJcbmltcG9ydCB7IE1lbnUsIERyb3Bkb3duIH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IHsgRG93bk91dGxpbmUgfSBmcm9tIFwiQGFudC1kZXNpZ24vaWNvbnNcIjtcclxuY29uc3QgeyBTdWJNZW51IH0gPSBNZW51O1xyXG5cclxuLy8g5aOw5piO55qE5YWo5bGA5pWw5o2uXHJcbmNvbnN0IG1lbnUxID0gKFxyXG4gIDxNZW51PlxyXG4gICAgPE1lbnUuSXRlbSA+XHJcbiAgICAgIDxhXHJcbiAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcclxuICAgICAgICAvLyBocmVmPVwiaHR0cDovL3d3dy5hbGlwYXkuY29tL1wiXHJcbiAgICAgID5cclxuICAgICAgICDmiJHnmoTlpb3lj4tcclxuICAgICAgPC9hPlxyXG4gICAgPC9NZW51Lkl0ZW0+XHJcbiAgICA8TWVudS5JdGVtPlxyXG4gICAgICA8YVxyXG4gICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXHJcbiAgICAgICAgLy8gaHJlZj1cImh0dHA6Ly93d3cudGFvYmFvLmNvbS9cIlxyXG4gICAgICA+XHJcbiAgICAgICAg6LWE6YeR6LSm5oi3XHJcbiAgICAgIDwvYT5cclxuICAgIDwvTWVudS5JdGVtPlxyXG4gICAgPE1lbnUuSXRlbT5cclxuICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiPlxyXG4gICAgICAgIOWbvuS5puaUtuiXj1xyXG4gICAgICA8L2E+XHJcbiAgICA8L01lbnUuSXRlbT5cclxuICAgIDxNZW51Lkl0ZW0gZGFuZ2VyPuaLjeWNluS6pOaYkzwvTWVudS5JdGVtPlxyXG4gIDwvTWVudT5cclxuKTtcclxuXHJcbmNvbnN0IG1lbnUyID0gKFxyXG4gIDxNZW51PlxyXG4gICAgPE1lbnUuSXRlbUdyb3VwIHRpdGxlPVwi5bqX6ZO6XCI+XHJcbiAgICAgIDxNZW51Lkl0ZW0+5YWN6LS55pGG5Zyw5pGKPC9NZW51Lkl0ZW0+XHJcbiAgICAgIDxNZW51Lkl0ZW0+55Sz6K+35byA5bqXPC9NZW51Lkl0ZW0+XHJcbiAgICA8L01lbnUuSXRlbUdyb3VwPlxyXG4gICAgPFN1Yk1lbnUgdGl0bGU9XCLmi43ljZZcIj5cclxuICAgICAgPE1lbnUuSXRlbT7nlLPor7fmi43ljZbkvJrlkZg8L01lbnUuSXRlbT5cclxuICAgICAgPE1lbnUuSXRlbT7mi43ljZbkv6Hmga88L01lbnUuSXRlbT5cclxuICAgIDwvU3ViTWVudT5cclxuICAgIHsvKiA8U3ViTWVudSB0aXRsZT1cImRpc2FibGVkIHN1YiBtZW51XCIgZGlzYWJsZWQ+XHJcbiAgICAgIDxNZW51Lkl0ZW0+NWQgbWVudSBpdGVtPC9NZW51Lkl0ZW0+XHJcbiAgICAgIDxNZW51Lkl0ZW0+NnRoIG1lbnUgaXRlbTwvTWVudS5JdGVtPlxyXG4gICAgPC9TdWJNZW51PiAqL31cclxuICA8L01lbnU+XHJcbik7XHJcblxyXG5jb25zdCBtZW51MyA9IChcclxuICA8TWVudT5cclxuICAgIDxNZW51Lkl0ZW1Hcm91cCB0aXRsZT1cIkFQUOWuouaIt+err1wiPlxyXG4gICAgICB7LyogPE1lbnUuSXRlbT5cclxuICAgICAgICA8aW1nIHNyYz1cIi4uL3N0YXRpYy9pbWFnZXMvYXBwLmpwZ1wiIHdpZHRoPVwiMTUwXCIgaGVpZ2h0PVwiMTUwXCIgLz5cclxuICAgICAgPC9NZW51Lkl0ZW0+ICovfVxyXG4gICAgICB7LyogPE1lbnUuSXRlbT5pT1Mg4oCiIEFuZHJvaWQ8L01lbnUuSXRlbT4gKi99XHJcbiAgICA8L01lbnUuSXRlbUdyb3VwPlxyXG4gICAgPE1lbnUuSXRlbUdyb3VwPjxpbWcgc3JjPVwiLi4vc3RhdGljL2ltYWdlcy9hcHAuanBnXCIgd2lkdGg9XCIxNTBcIiBoZWlnaHQ9XCIxNTBcIiBzdHlsZT17e21hcmdpblJpZ2h0OlwiMTBweFwiLG1hcmdpbkxlZnQ6XCIxMHB4XCJ9fSAvPjwvTWVudS5JdGVtR3JvdXA+XHJcbiAgICA8TWVudS5JdGVtR3JvdXAgdGl0bGU9XCJpT1Mg4oCiIEFuZHJvaWRcIj48L01lbnUuSXRlbUdyb3VwPlxyXG4gIDwvTWVudT5cclxuKTtcclxuXHJcbi8vIOWjsOaYjueahOWFqOWxgOaVsOaNrlxyXG52YXIgaW1nbnVtYmVyOiBudW1iZXIgPSAwO1xyXG5cclxudHlwZSBzdGF0ZSA9IHtcclxuICBzZWxlY3RlZDogYm9vbGVhbjtcclxufTtcclxuXHJcbnR5cGUgSVByb3BzID0ge1xyXG4gIHNob3c6IFt7fV07XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4UGFnZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxJUHJvcHMsIHN0YXRlPiB7XHJcbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcygpIHtcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDozMDAxL2Vzc2F5dGFibGVcIik7XHJcbiAgICBjb25zdCBzaG93ID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICAgIC8v6L+Z6L656L+U5Zue55qE5pWw5o2u5Lya6KKr5oyC6L295Yiw57uE5Lu255qEcHJvcHPkuK1cclxuICAgIHJldHVybiB7IHNob3cgfTtcclxuICB9XHJcbiAgY29uc3RydWN0b3IocHJvcHM6IGFueSkge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHsgc2VsZWN0ZWQ6IGZhbHNlIH07XHJcbiAgfVxyXG4gIGhhbmRsZUNsaWNrID0gKGU6IGFueSkgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdGVkOiAhdGhpcy5zdGF0ZS5zZWxlY3RlZCB9LCAoKSA9PiB7XHJcbiAgICAgIGlmICghdGhpcy5zdGF0ZS5zZWxlY3RlZCkge1xyXG4gICAgICAgIC8vIHRoaXMuY2xlYXJBbGwoKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfTtcclxuICBwcml2YXRlIHJpZ2h0QnRuU3R5bGUgPSB7XHJcbiAgICBkaXNwbGF5OiBcImJsb2NrXCIsXHJcbiAgICBjb2xvcjogXCJibHVlXCIsXHJcbiAgfTtcclxuICBwcml2YXRlIHJpZ2h0QnRuU3R5bGUyID0ge1xyXG4gICAgZGlzcGxheTogXCJub25lXCIsXHJcbiAgICBjb2xvcjogXCJyZWRcIixcclxuICB9O1xyXG4gIHJlbmRlcigpIHtcclxuICAgIHZhciBjdXJyZW50c3R5bGU7XHJcbiAgICBpZiAodGhpcy5zdGF0ZS5zZWxlY3RlZCkge1xyXG4gICAgICBjdXJyZW50c3R5bGUgPSB0aGlzLnJpZ2h0QnRuU3R5bGUyO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY3VycmVudHN0eWxlID0gdGhpcy5yaWdodEJ0blN0eWxlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPExheW91dCB0aXRsZT1cIuaWsOS5pui1hOiur1wiPlxyXG4gICAgICAgIDxoZWFkZXI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3Nzb2JqLnNob3J0Y3V0fT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nzc29iai5oZWFkZXJXcmFwfT5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3Nzb2JqLnNsb2dhbkJveH0+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2Nzc29iai50ZXh0fT7nvZHnvZflpKnkuIvlm77kuaY8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj7kvKDmib/kuK3ljY7mlofmmI48L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17W2Nzc29iai51c2VyaW5mb2JveCwgY3Nzb2JqLmNsZWFyZml4XS5qb2luKFwiIFwiKX0+XHJcbiAgICAgICAgICAgICAgey8qIDEgKi99XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nzc29iai5pdGVtSW5mb30+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2Nzc29iai5pbmZvTm9ybWFsfT5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjc3NvYmouaW5mb1RleHR9PueZu+W9lTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjc3NvYmouaW5mb1RleHR9Pi88L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y3Nzb2JqLmluZm9UZXh0fT7ms6jlhow8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICB7LyogXHJcbiAgICAgICAgICAgICAgICAgPERyb3Bkb3duIG92ZXJsYXk9e21lbnV9PlxyXG4gICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYW50LWRyb3Bkb3duLWxpbmtcIiBvbkNsaWNrPXtlID0+IGUucHJldmVudERlZmF1bHQoKX0+XHJcbiAgICAgIEhvdmVyIG1lIDxEb3duT3V0bGluZWQgLz5cclxuICAgIDwvYT5cclxuICA8L0Ryb3Bkb3duPlxyXG4gICAgICAgICAgICAgICAgKi99XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nzc29iai5pdGVtSW5mb30+XHJcbiAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cDovL2NhcnQua29uZ2Z6LmNvbS9saXN0XCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjc3NvYmouaW5mb0xpbmt9XHJcbiAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICAgICAgICAgIHJlbD1cIm5vZm9sbG93XCJcclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgY29sb3I6IFwiI2ZmZlwiIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtbXCJmYVwiLCBcImZhLXNob3BwaW5nLWNhcnRcIiwgY3Nzb2JqLnR1Ymlhb10uam9pbihcclxuICAgICAgICAgICAgICAgICAgICAgIFwiIFwiXHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjc3NvYmouaW5mb1RleHR9Pui0reeJqei9pjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8RHJvcGRvd24gb3ZlcmxheT17bWVudTF9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nzc29iai5pdGVtSW5mb30+XHJcbiAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHA6Ly9zaG9wLmtvbmdmei5jb20vYnV5ZXIvb3JkZXIvb3JkZXJfbGlzdC5odG1sXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1tjc3NvYmouaW5mb0xpbmssIFwiYW50LWRyb3Bkb3duLWxpbmtcIl0uam9pbihcIiBcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgICAgICAgICByZWw9XCJub2ZvbGxvd1wiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IGUucHJldmVudERlZmF1bHQoKX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y3Nzb2JqLmluZm9UZXh0fT7kuKrkurrkuK3lv4M8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvRHJvcGRvd24+XHJcbiAgICAgICAgICAgICAgey8qICAqL31cclxuICAgICAgICAgICAgICB7LyogMiAqL31cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3Nzb2JqLml0ZW1JbmZvfT5cclxuICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwOi8vc2hvcC5rb25nZnouY29tL2J1eWVyL29yZGVyL29yZGVyX2xpc3QuaHRtbFwiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y3Nzb2JqLmluZm9MaW5rfVxyXG4gICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgICAgICAgICByZWw9XCJub2ZvbGxvd1wiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y3Nzb2JqLmluZm9UZXh0fT7miJHnmoTorqLljZU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPERyb3Bkb3duIG92ZXJsYXk9e21lbnUyfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjc3NvYmouaXRlbUluZm99PlxyXG4gICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwOi8vc2hvcC5rb25nZnouY29tL2J1eWVyL29yZGVyL29yZGVyX2xpc3QuaHRtbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtbY3Nzb2JqLmluZm9MaW5rLCBcImFudC1kcm9wZG93bi1saW5rXCJdLmpvaW4oXCIgXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICAgICAgICAgICAgcmVsPVwibm9mb2xsb3dcIlxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjc3NvYmouaW5mb1RleHR9PuWNluWutuS4reW/gzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9Ecm9wZG93bj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3Nzb2JqLml0ZW1JbmZvfT5cclxuICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwOi8vc2hvcC5rb25nZnouY29tL2J1eWVyL29yZGVyL29yZGVyX2xpc3QuaHRtbFwiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17W2Nzc29iai5pbmZvTGluaywgXCJhbnQtZHJvcGRvd24tbGlua1wiXS5qb2luKFwiIFwiKX1cclxuICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgICAgICAgcmVsPVwibm9mb2xsb3dcIlxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gZS5wcmV2ZW50RGVmYXVsdCgpfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2Nzc29iai5pbmZvVGV4dH0+5a6i5pyNPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIHsvKiAzICovfVxyXG4gICAgICAgICAgICAgIDxEcm9wZG93biBvdmVybGF5PXttZW51M30+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3Nzb2JqLml0ZW1JbmZvfT5cclxuICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cDovL3Nob3Aua29uZ2Z6LmNvbS9idXllci9vcmRlci9vcmRlcl9saXN0Lmh0bWxcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17W2Nzc29iai5pbmZvTGluaywgXCJhbnQtZHJvcGRvd24tbGlua1wiXS5qb2luKFwiIFwiKX1cclxuICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgICAgICAgICAgIHJlbD1cIm5vZm9sbG93XCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gZS5wcmV2ZW50RGVmYXVsdCgpfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjc3NvYmouaW5mb1RleHR9PuaJi+acuueJiDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9Ecm9wZG93bj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3Nzb2JqLml0ZW1JbmZvfT48L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3Nzb2JqLml0ZW1JbmZvfT48L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3Nzb2JqLml0ZW1JbmZvfT48L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3Nzb2JqLml0ZW1JbmZvfT48L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3Nzb2JqLml0ZW1JbmZvfT48L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3Nzb2JqLml0ZW1JbmZvfT48L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3Nzb2JqLml0ZW1JbmZvfT48L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2hlYWRlcj5cclxuICAgICAgICB7LyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi99XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgY2xlYXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibm92LWZpciBjbGVhclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvZGVcIj48L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkYmdcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJub3YtcHJpbWFyeSBjbGVhclwiPuaWsOS5pui1hOiurzwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5vdi1zZWNcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5vdmVsXCI+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiL25vdmVsXCI+5bCP6K+0PC9hPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXNzYXlcIj5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvZXNzYXlcIj7mlaPmloc8L2E+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb2V0cnlcIj5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvcHJvc2VcIj7pmo/nrJQ8L2E+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3b3JrXCI+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiL2xpdGVyYXR1cmVcIj7mloflraY8L2E+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICB7LyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi99XHJcbiAgICAgICAgICB7LyogPEx1bkJvQ29tcG9uZW50IGx1bmJvT2JqZWN0PXtkYXRhLmx1bmJvT2JqZWN0fSBpbWdBcnJheT17ZGF0YS5pbWdBcnJheX0gbGlua0FycmF5PXtkYXRhLmxpbmtBcnJheX0vPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dyYXBwZXInKSAqL31cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8Q2Fyb3VzZWwgYXV0b3BsYXk+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgey8qIDxoMyBjbGFzc05hbWU9XCJjb250ZW50U3R5bGVcIj4xPC9oMz4gKi99XHJcbiAgICAgICAgICAgICAgPGltZyBzcmM9XCIuLi9zdGF0aWMvbHVuYm8vbHVuMC5qcGdcIiB3aWR0aD1cIjEyMDBcIiBoZWlnaHQ9XCIyNzBcIiAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8aW1nIHNyYz1cIi4uL3N0YXRpYy9sdW5iby9sdW4xMS5qcGdcIiB3aWR0aD1cIjEyMDBcIiBoZWlnaHQ9XCIyNzBcIiAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8aW1nIHNyYz1cIi4uL3N0YXRpYy9sdW5iby9sdW4yLmpwZ1wiIHdpZHRoPVwiMTIwMFwiIGhlaWdodD1cIjI3MFwiIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxpbWcgc3JjPVwiLi4vc3RhdGljL2x1bmJvL2x1bjMuanBnXCIgd2lkdGg9XCIxMjAwXCIgaGVpZ2h0PVwiMjcwXCIgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPGltZyBzcmM9XCIuLi9zdGF0aWMvbHVuYm8vbHVuNC5qcGdcIiB3aWR0aD1cIjEyMDBcIiBoZWlnaHQ9XCIyNzBcIiAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvQ2Fyb3VzZWw+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIHsvKiAsIG1vdW50Tm9kZSwgKi99XHJcbiAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJub3YtdGhpIGNsZWFyXCI+ICovfVxyXG4gICAgICAgICAgey8qIDxpbWcgc3JjPVwiLi4vc3RhdGljL2ltYWdlcy9pbWFnZS8yLmpwZ1wiPjwvaW1nPiAqL31cclxuICAgICAgICAgIHsvKiA8L2Rpdj4gKi99XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5vdi1mb3IgY2xlYXJcIj5cclxuICAgICAgICAgICAgPGRpdj7mlrDkuabpgJ/pgJI8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj7mm7TlpJrCuzwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICB7LyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi99XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5vdi1maWYgY2xlYXJcIj5cclxuICAgICAgICAgICAge3RoaXMucHJvcHMuc2hvdy5tYXAoKGl0ZW06IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgIGltZ251bWJlcisrO1xyXG4gICAgICAgICAgICAgIGlmIChpbWdudW1iZXIgPCAyMikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2l0ZW0uYm9va0lkfT5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICBzcmM9e2AuLi9zdGF0aWMvaW1hZ2VzL2ltYWdlLyR7aXRlbS5pbWdQYXRofWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjExNVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIxNzJcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAge2l0ZW0uYm9va05hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj7kvZzogIU6e2l0ZW0uYXV0aG9yfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgey8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovfVxyXG4gICAgICAgICAgey8qIDwlLS3osYbnk6Pml6XljoYtLSU+ICovfVxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJub3YtY2FsIGNsZWFyXCI+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiLi4vc3RhdGljL2ltYWdlcy9tdWx1LmpwZ1wiIHdpZHRoPVwiNjc1XCIgaGVpZ2h0PVwiMTIwXCIgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib29rLW5ld3MgY2xlYXJcIj7lm77kuabotYTorq88L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib29rLW5ld3MtY29udGVudCBjbGVhclwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmx1ZXRleHRcIj5cclxuICAgICAgICAgICAgICAgIOWtlOe9keS4gOWRqOaWsOS5pumAn+mAku+9nOmZiOaYpeaIkOmmlumDqOefreevh+Wwj+ivtOmbhu+8jOWRiOeOsOaxieivreWwj+ivtOeahOS4gOenjemjjuW6puS4juaWsOeahOWPr+iDveaAp1xyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JheXRleHRcIj7or7vkuabmjqjojZA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsYWNrdGV4dFwiPlxyXG4gICAgICAgICAgICAgICAg6Jma5p6E57G7XHJcbiAgICAgICAgICAgICAgICAq54m55Yir5o6o6I2Q5Lu/5L2b6bif5qCW5qCR77yM6bG85r2c5riK77yM5LiA5YiH56iz5aal5Y+I5a6J5a6B77yM5aSc5pma6L+Z5omN55yf5q2j5Zyw6ZmN5Li044CCXHJcbiAgICAgICAgICAgICAgICDjgIrlpJzmmZrnmoTmvZzmsLToiYfjgIvmmK/kvZzlrrbpmYjmmKXmiJDnmoTpppbpg6jnn63nr4flsI/or7Tpm4bjgILkuZ3kuKrmlYXkuovvvIznrJTplIvmuLjotbDkuo7ml6flsbHmsrPkuI7mnKrnn6Xlroflrpnpl7TvvIzku6XnkbDlpYfpo5jmiaznmoTmg7PosaHjgIHmuKnljprmuIXlub3nmoTnrJTms5XvvIxcclxuICAgICAgICAgICAgICAgIOWcqOeOsOWunuS4juW5u+Wig+mXtOi+n+W8gOiLpeW5suadoeenmOWvhueahOmAmumBk++8mua1t+W6lea8q+a4uOeahOWwkeW5tOOAgea3seWxsemBl+iQveeahOWPpOeikeOAgeW8peaVo+WFpeS4h+eJqeeahOWtl+WPpeOAgeS6keW9qeS/ruWJquermeOAgemTuOWJkeS4jumFv+mFkuOAgemTgeW5leS4i+eahOiQqOWFi+aWr+OAgeiTnemyuOWGheeahOa8lOWlj+WOheKApuKAplxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIHsvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi99XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9zdC1saWtlXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlrZVwiIHN0eWxlPXt7IG1hcmdpbkxlZnQ6IDE2OCB9fT5cclxuICAgICAgICAgICAgICDmnIDlj5flhbPms6jlm77kuabmppxcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlrZTFcIj5cclxuICAgICAgICAgICAgICA8ZGl2PuiZmuaehOexu8K7PC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdj7pnZ7omZrmnoTnsbvCuzwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaWtlLWNvbnRlbnQgY2xlYXJcIiBzdHlsZT17eyBtYXJnaW5MZWZ0OiAyNTAgfX0+XHJcbiAgICAgICAgICAgIHt0aGlzLnByb3BzLnNob3cubWFwKChpdGVtOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAvLyBsZXQgZ3JhZGUgPSBpdGVtLmdyYWRlO1xyXG4gICAgICAgICAgICAgIGlmIChpdGVtLmJvb2tJZCA8IDMyICYmIGl0ZW0uYm9va0lkID4gMjIpIHtcclxuICAgICAgICAgICAgICAgIGlmIChpdGVtLmdyYWRlIDwgOSkge1xyXG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpdGVtLmJvb2tJZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17YC4uL3N0YXRpYy9pbWFnZXMvaW1hZ2UvJHtpdGVtLmltZ1BhdGh9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCI4NVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjEyMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICA+PC9pbWc+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YnI+PC9icj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmsgY2xlYXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib29rbmFtZVwiPntpdGVtLmJvb2tOYW1lfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnI+PC9icj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkYmdyYWRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj7or4TliIbvvJo8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JhZGVcIj57aXRlbS5ncmFkZX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi4uL3N0YXRpYy9pbWFnZXMvaW1hZ2Uvc3RhcjEucG5nXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIxMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIxMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L2ltZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi4uL3N0YXRpYy9pbWFnZXMvaW1hZ2Uvc3RhcjEucG5nXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIxMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIxMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L2ltZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi4uL3N0YXRpYy9pbWFnZXMvaW1hZ2Uvc3RhcjEucG5nXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIxMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIxMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L2ltZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi4uL3N0YXRpYy9pbWFnZXMvaW1hZ2Uvc3RhcjEucG5nXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIxMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIxMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L2ltZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvb2thdVwiPuS9nOiAhTp7aXRlbS5hdXRob3J9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpdGVtLmJvb2tJZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17YC4uL3N0YXRpYy9pbWFnZXMvaW1hZ2UvJHtpdGVtLmltZ1BhdGh9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCI4NVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjEyMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICA+PC9pbWc+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YnI+PC9icj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmsgY2xlYXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib29rbmFtZVwiPntpdGVtLmJvb2tOYW1lfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnI+PC9icj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkYmdyYWRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj7or4TliIbvvJo8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JhZGVcIj57aXRlbS5ncmFkZX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi4uL3N0YXRpYy9pbWFnZXMvaW1hZ2Uvc3RhcjEucG5nXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIxMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIxMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L2ltZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi4uL3N0YXRpYy9pbWFnZXMvaW1hZ2Uvc3RhcjEucG5nXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIxMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIxMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L2ltZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi4uL3N0YXRpYy9pbWFnZXMvaW1hZ2Uvc3RhcjEucG5nXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIxMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIxMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L2ltZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi4uL3N0YXRpYy9pbWFnZXMvaW1hZ2Uvc3RhcjEucG5nXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIxMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIxMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L2ltZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi4uL3N0YXRpYy9pbWFnZXMvaW1hZ2Uvc3RhcjEucG5nXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIxMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIxMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L2ltZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvb2thdVwiPuS9nOiAhTp7aXRlbS5hdXRob3J9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIHsvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi99XHJcbiAgICAgICAgPGZvb3Rlcj5cclxuICAgICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgICAgPGJyPjwvYnI+XHJcbiAgICAgICAgICA8YnI+PC9icj5cclxuICAgICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZnJpZW5kX2xpbmtfYm94XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmcmllbmRfbGlua190aXQgY2xlYXJmaXhcIj5cclxuICAgICAgICAgICAgICAgIDxhIHN0eWxlPXt7IHRleHREZWNvcmF0aW9uOiBcIm5vbmVcIiB9fSBjbGFzc05hbWU9XCJub3dcIj5cclxuICAgICAgICAgICAgICAgICAgey8qIDxhIGhyZWY9XCJcIiBjbGFzc05hbWU9e1tcIlwiLCB0aGlzLnN0YXRlLnNlbGVjdGVkID8gXCJub3dcIjpudWxsXS5qb2luKCcgJyl9IHN0eWxlPXt7IHRleHREZWNvcmF0aW9uOiBcIm5vbmVcIiB9fSBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrLmJpbmQodGhpcyl9PiAqL31cclxuICAgICAgICAgICAgICAgICAg5ZCI5L2c5LyZ5Ly0XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8YSBzdHlsZT17eyB0ZXh0RGVjb3JhdGlvbjogXCJub25lXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgIHsvKiA8YSBocmVmPVwiXCIgY2xhc3NOYW1lPXtbXCJcIiwgdGhpcy5zdGF0ZS5zZWxlY3RlZCA/IFwibm93XCI6bnVsbF0uam9pbignICcpfSBzdHlsZT17eyB0ZXh0RGVjb3JhdGlvbjogXCJub25lXCIgfX0gb25DbGljaz17dGhpcy5oYW5kbGVDbGljay5iaW5kKHRoaXMpfT4gKi99XHJcbiAgICAgICAgICAgICAgICAgIOWPi+aDhemTvuaOpVxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPGEgc3R5bGU9e3sgdGV4dERlY29yYXRpb246IFwibm9uZVwiIH19PlxyXG4gICAgICAgICAgICAgICAgICB7LyogPGEgaHJlZj1cIlwiIGNsYXNzTmFtZT17W1wiXCIsIHRoaXMuc3RhdGUuc2VsZWN0ZWQgPyBcIm5vd1wiOm51bGxdLmpvaW4oJyAnKX0gc3R5bGU9e3sgdGV4dERlY29yYXRpb246IFwibm9uZVwiIH19ID4gKi99XHJcbiAgICAgICAgICAgICAgICAgIOaOqOiNkOS4k+mimFxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZnJpZW5kX2xpbmtfbGlzdCBjbGVhcmZpeCBtX3QxMFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmX2JveFwiIHN0eWxlPXt7IGRpc3BsYXk6IFwibm9uZVwiIH19PlxyXG4gICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHA6Ly9oaXN0b3J5LnNvaHUuY29tL1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsYWNrMzMzXCJcclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAg5pCc54uQ5Y6G5Y+yXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cDovL3d3dy54aWx1LmNvbS9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibGFjazMzM1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIOilv+mZhuWGm+S6i+e9kVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vd3d3Lmtvb2xlYXJuLmNvbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsYWNrMzMzXCJcclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAg5paw5Lic5pa55Zyo57q/XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cDovL3d3dy5rYW95YW4uY29tL1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsYWNrMzMzXCJcclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAg6ICD56CU5biuXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cDovL3d3dy5iYW5iaWppYW5nLmNvbS9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibGFjazMzM1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIOWNiuWjgeaxn+S4reaWh+e9kVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vd3d3LnRpYW55YW5jaGEuY29tL1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsYWNrMzMzXCJcclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAg5aSp55y85p+lXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cDovL3d3dy56amd1amkuY29tL1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsYWNrMzMzXCJcclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAg5rWZ5rGf5Y+k57GN5Ye654mI56S+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cDovL3d3dy50dW5pdS5jb20vXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxhY2szMzNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICDpgJTniZvml4XmuLjnvZFcclxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwOi8vd3d3LmNtci5jb20uY24vXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxhY2szMzNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICDnvZHnu5zmlZnogrJcclxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwOi8vd3d3LnJvbmdiYW96aGFpLmNuL1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsYWNrMzMzXCJcclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAg6I2j5a6d5paLXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly93d3cub29vcGljLmNvbS9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibGFjazMzM1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIOaIkeWbvue9kVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vd3d3LmhqZW5nbGlzaC5jb20vXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxhY2szMzNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICDmsqrmsZ/oi7Hor61cclxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL3d3dy54aW1hbGF5YS5jb20vXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxhY2szMzNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICDmnInlo7DlsI/or7RcclxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwOi8vYm9vay5rb25nZnouY29tL25ld2Jvb2svXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxhY2szMzNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICDmr4/ml6XkuIrkuaZcclxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwOi8vd3d3Lnphc2h1Z3Vhbi5jbi9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibGFjazMzM1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIOadguS5pummhlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHA6Ly93d3cua29uZ2Z6LmNvbS9jb21tdW5pdHkvbGlua3MucGhwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxhY2szMzNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICDmm7TlpJrlj4vpk74gJmd0OyZndDtcclxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZfYm94XCIgc3R5bGU9e3sgZGlzcGxheTogXCJub25lXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cDovL3d3dy5rb25nZnouY24vXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIOaLjeWNlue9keermVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9hPntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5zbXpkbS5jb20vXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIOS7gOS5iOWAvOW+l+S5sFxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9hPntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5xY2MuY29tL1wiIHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICDkvIHmn6Xmn6VcclxuICAgICAgICAgICAgICAgICAgICAgIDwvYT57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9ib29rLnRpZXh1ZS5uZXQvXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIOWGm+S6i+ivu+S5plxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9hPntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwOi8vd3d3LmNhbmV0LmNvbS5jbi9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAg5Lit5Zu95Lya6K6h572RXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2E+e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHA6Ly93d3cuaHVhdHUuY29tL1wiIHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICDlhazliqHlkZjogIPor5XnvZFcclxuICAgICAgICAgICAgICAgICAgICAgIDwvYT57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cDovL3d3dy5rZWtlbmV0LmNvbS9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAg5Y+v5Y+v6Iux6K+tXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2E+e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHA6Ly93d3cuMDI1MTYuY29tL1wiIHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICDnvZHlnYDlr7zoiKpcclxuICAgICAgICAgICAgICAgICAgICAgIDwvYT57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cDovL3d3dy5ib29rc2NoaW5hLmNvbS9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAg5Lit5Zu95Zu+5Lmm572RXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2E+e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHA6Ly93d3cuNjMyNDMuY29tL1wiIHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICDnvZHlnYDlpKflhahcclxuICAgICAgICAgICAgICAgICAgICAgIDwvYT57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cuemhpcGluLmNvbS9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAg5oub6IGY572RXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2E+e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHA6Ly93d3cuam13LmNvbS5jbi9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAg5Yqg55ufXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2E+e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHA6Ly93d3cucWlhbmxpbWEuY29tL1wiIHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICDljYPph4zpqazmi5vmipXmoIdcclxuICAgICAgICAgICAgICAgICAgICAgIDwvYT57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cDovL3d3dy5jaGV4dW4uY29tL1wiIHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICDovaborq/nvZFcclxuICAgICAgICAgICAgICAgICAgICAgIDwvYT57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cDovL3d3dy5jaWZuZXdzLmNvbS9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAg6Leo5aKD55S15ZWGXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2E+e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHA6Ly93d3cuZWJydW4uY29tXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIOS6v+mCpuWKqOWKm+e9kVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9hPntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwOi8vd3d3LmFvc2h1LmNvbVwiIHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICDlpaXmlbBcclxuICAgICAgICAgICAgICAgICAgICAgIDwvYT57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cDovL3d3dy45NTkuY24vXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDk1OeWTgeeJjOWVhuacuue9kVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9hPntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwOi8vd3d3LjUxYmkuY29tL1wiIHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICDov5TliKnnvZFcclxuICAgICAgICAgICAgICAgICAgICAgIDwvYT57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cDovL3d3dy5zb3V0aG1vbmV5LmNvbS9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAg6IKh56WoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2E+e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHA6Ly93d3cubHZ5ZS5jbi9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAg57u/6YeO572RXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2E+e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3LndlZDExNC5jbi9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgd2VkMTE057uT5ama572RXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2E+e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHA6Ly93d3cuemJpcmQuY29tL1wiIHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICDpkrvnn7PlsI/puJ9cclxuICAgICAgICAgICAgICAgICAgICAgIDwvYT57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cuemhpZmFuZy5jb20vXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIOaZuuaIv+aXhea4uOWcsOS6p1xyXG4gICAgICAgICAgICAgICAgICAgICAgPC9hPntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwOi8vd3d3LnpodWxvbmcuY29tL1wiIHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICDlu7rnrZFcclxuICAgICAgICAgICAgICAgICAgICAgIDwvYT57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cDovL3d3dy5hbnpoaS5jb20vXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIOWuieWNk+W4guWculxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9hPntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL29mZmljZS5mYW5nLmNvbS9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAg5YyX5Lqs5YaZ5a2X5qW8572RXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2E+e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3LmthbnpodW4uY29tL1wiIHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICDnnIvlh4bnvZFcclxuICAgICAgICAgICAgICAgICAgICAgIDwvYT57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cDovL3d3dy5yYnoxNjcyLmNvbS9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAg6I2j5a6d5paL5Zyo57q/XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2E+e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZl9ib3hcIiBzdHlsZT17eyBkaXNwbGF5OiBcImJsb2NrXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cDovL2JxLmtvbmdmei5jb20vXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIOWbvuS5puWkp+WFqFxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9hPntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwOi8vd3d3Lmtvbmdmei5jb20vdG9waWMvXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIOeDreaQnOS4k+mimFxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9hPntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwOi8vd3d3Lmtvbmdmei5jb20vcHVibGlzaGVyL1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIOWHuueJiOekvuWkp+WFqFxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9hPntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwOi8vd3d3Lmtvbmdmei5jb20vd3JpdGVyL1wiIHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICDkvZzlrrblpKflhahcclxuICAgICAgICAgICAgICAgICAgICAgIDwvYT57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9zaG91c2h1Lmtvbmdmei5jb20vXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIOS4iumXqOaUtuS5plxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9hPntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwOi8vd3d3Lmtvbmdmei5jb20vcHVibGlzaGVyL2tleHVlY2h1YmFuc2hlL1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIOenkeWtpuWHuueJiOekvlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9hPntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwOi8vd3d3Lmtvbmdmei5jb20vcHVibGlzaGVyL3FpbmdodWFkYXh1ZS9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICDmuIXljY7lpKflrablh7rniYjnpL5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvYT57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cDovL3d3dy5rb25nZnouY29tL3B1Ymxpc2hlci96aG9uZ2d1b2JpYW96aHVuL1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIOS4reWbveagh+WHhuWHuueJiOekvlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9hPntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwOi8vd3d3Lmtvbmdmei5jb20vcHVibGlzaGVyL2RpYW56aWdvbmd5ZS9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICDnlLXlrZDlt6XkuJrlh7rniYjnpL5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvYT57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cDovL3d3dy5rb25nZnouY29tL3B1Ymxpc2hlci9odWF4dWVnb25neWUvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAg5YyW5a2m5bel5Lia5Ye654mI56S+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2E+e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHA6Ly93d3cua29uZ2Z6LmNvbS9wdWJsaXNoZXIvYmVpamluZ2RheHVlY2h1YmFuc2hlL1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIOWMl+S6rOWkp+WtpuWHuueJiOekvlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9hPntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwOi8vd3d3Lmtvbmdmei5jb20vcHVibGlzaGVyL3Jlbm1pbndlaXNoZW5nL1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIOS6uuawkeWNq+eUn+WHuueJiOekvlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9hPntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwOi8vd3d3Lmtvbmdmei5jb20vcHVibGlzaGVyL3pob25nZ3VvamlhbnpodWdvbmd5ZS9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICDkuK3lm73lu7rnrZHlt6XkuJrlh7rniYjnpL5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvYT57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cDovL3d3dy5rb25nZnouY29tL3B1Ymxpc2hlci96aG9uZ2d1b3Jlbm1pbmRheHVlL1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIOS4reWbveS6uuawkeWkp+WtpuWHuueJiOekvlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9hPntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwOi8vd3d3Lmtvbmdmei5jb20vcHVibGlzaGVyL3NoYW5nd3V5aW5zaHVndWFuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAg5ZWG5Yqh5Y2w5Lmm6aaGXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2E+e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHA6Ly93d3cua29uZ2Z6LmNvbS9wdWJsaXNoZXIvemhvbmdndW90aWVkYW8vXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAg5Lit5Zu96ZOB6YGT5Ye654mI56S+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2E+e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHA6Ly93d3cua29uZ2Z6LmNvbS9wdWJsaXNoZXIvcmVubWluY2h1YmFuc2hlL1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIOS6uuawkeWHuueJiOekvlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9hPntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwOi8vd3d3Lmtvbmdmei5jb20vcHVibGlzaGVyL3pob25nZ3VvZGlhbmxpL1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIOS4reWbveeUteWKm+WHuueJiOekvlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9hPntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwOi8vd3d3Lmtvbmdmei5jb20vcHVibGlzaGVyL3pob25naHVhc2h1anUvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAg5Lit5Y2O5Lmm5bGAXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2E+e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHA6Ly93d3cua29uZ2Z6LmNvbS9wdWJsaXNoZXIvZmFsdmNodWJhbnNoZS9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICDms5Xlvovlh7rniYjnpL5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvYT57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cDovL3d3dy5rb25nZnouY29tL3B1Ymxpc2hlci9nYW9kZW5namlhb3l1L1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIOmrmOetieaVmeiCsuWHuueJiOekvlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9hPntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwOi8vd3d3Lmtvbmdmei5jb20vcHVibGlzaGVyL2ppeGllZ29uZ3llL1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIOacuuaisOW3peS4muWHuueJiOekvlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9hPntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwOi8vd3d3Lmtvbmdmei5jb20vd3JpdGVyL2ppbnlvbmcvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAg6YeR5bq4XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2E+e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHA6Ly93d3cua29uZ2Z6LmNvbS93cml0ZXIvY3Vuc2hhbmdjaHVuc2h1L1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIOadkeS4iuaYpeagkVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9hPntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwOi8vd3d3Lmtvbmdmei5jb20vd3JpdGVyL21hb2R1bi9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICDojIXnm75cclxuICAgICAgICAgICAgICAgICAgICAgIDwvYT57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cDovL3d3dy5rb25nZnouY29tL3dyaXRlci96aGFuZ3hpYW94aWFuL1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIOW8oOWwj+WotFxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9hPntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwOi8vd3d3Lmtvbmdmei5jb20vd3JpdGVyL3dhbmd4aWFvYm8vXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAg546L5bCP5rOiXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2E+e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHA6Ly93d3cua29uZ2Z6LmNvbS93cml0ZXIvbGFvc2hlL1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIOiAgeiIjVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9hPntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwOi8vd3d3Lmtvbmdmei5jb20vd3JpdGVyL21veWFuL1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIOiOq+iogFxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9hPntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwOi8vd3d3Lmtvbmdmei5jb20vd3JpdGVyL2x1eHVuL1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIOmygei/hVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9hPntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwOi8vd3d3Lmtvbmdmei5jb20vd3JpdGVyL2otay1sdW9saW4vXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgSi5LLue9l+eQs1xyXG4gICAgICAgICAgICAgICAgICAgICAgPC9hPntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwOi8vd3d3Lmtvbmdmei5jb20vd3JpdGVyL3poYW5nYWlsaW5nL1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIOW8oOeIseeOslxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9hPntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwOi8vd3d3Lmtvbmdmei5jb20vd3JpdGVyL3l1aHVhL1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIOS9meWNjlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9hPntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwOi8vd3d3Lmtvbmdmei5jb20vd3JpdGVyL3Fpb25neWFvL1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIOeQvOeRtlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9hPntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwOi8vd3d3Lmtvbmdmei5jb20vd3JpdGVyL3poYW5nZGFxaWFuL1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIOW8oOWkp+WNg1xyXG4gICAgICAgICAgICAgICAgICAgICAgPC9hPntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwOi8vd3d3Lmtvbmdmei5jb20vd3JpdGVyL3h1YmVpaG9uZy9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICDlvpDmgrLpuL9cclxuICAgICAgICAgICAgICAgICAgICAgIDwvYT57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cDovL3d3dy5rb25nZnouY29tL3dyaXRlci9kYWZlbnFpL1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIOi+vuiKrOWlh1xyXG4gICAgICAgICAgICAgICAgICAgICAgPC9hPntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwOi8vd3d3Lmtvbmdmei5jb20vd3JpdGVyL2FubmliYW9iZWkvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAg5a6J5aau5a6d6LSdXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2E+e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHA6Ly93d3cua29uZ2Z6LmNvbS93cml0ZXIvYmluZ3hpbi9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICDlhrDlv4NcclxuICAgICAgICAgICAgICAgICAgICAgIDwvYT57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cDovL3d3dy5rb25nZnouY29tL3dyaXRlci9oYWl5YW4vXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAg5rW35bKpXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2E+e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxzcGFuPsKpIDIwMjDvvI0yMDIwIGJhb2Z1LmNvbSwgYWxsIHJpZ2h0cyByZXNlcnZlZCDlrZTlrZDml6fkuabnvZE8L3NwYW4+XHJcbiAgICAgICAgICA8YnI+PC9icj5cclxuICAgICAgICAgIDxzcGFuPuiBlOezu+aIkeS7rCB4aW5ndWFuQHdlaWJvLmNvbTwvc3Bhbj5cclxuICAgICAgICA8L2Zvb3Rlcj5cclxuICAgICAgICB7LyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovfVxyXG4gICAgICA8L0xheW91dD5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbi8vIGNvbnN0IEluZGV4UGFnZSA9IChwcm9wczogYW55KSA9PiB7XHJcbi8vICAgbGV0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4vLyAgbGV0IGhhbmRsZUNsaWNrID0gKGU6YW55KSA9PiB7XHJcblxyXG4vLyB9XHJcbi8vICAgLy8gY29uc29sZS5sb2cocHJvcHMpO1xyXG4vLyAgIHJldHVybiAoXHJcbi8vXHJcblxyXG4vLyAgICk7XHJcbi8vIH07XHJcblxyXG4vL2dldEluaXRpYWxQcm9wcyDmlrnms5Xml6Llj6/ku6XlnKjmnI3liqHlmajov5DooYzvvIzlj4jlj6/ku6XlnKjlrqLmiLfnq6/ov5DooYwo57uE5Lu25Yib5bu65LmL5YmN5omn6KGM55qEKVxyXG4vL+W9k+WIt+aWsOmhtemdoijliJ3mrKHovb3lhaXpobXpnaIp77yM6K+l5pa55rOV5Lya5Zyo5pyN5Yqh5Zmo5omn6KGMXHJcbi8v5b2T6YCa6L+HPExpbms+6Lez6L2s6Lev55Sx55qE5pe25YCZ77yM6K+l5pa55rOV5Lya5Zyo5a6i5oi356uv5omn6KGMXHJcbi8vIEluZGV4UGFnZS5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoKSA9PiB7XHJcbi8vICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjMwMDEvYXBpL2Vzc2F5dGFibGVcIik7XHJcbi8vICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbi8vICAgLy/ov5novrnov5Tlm57nmoTmlbDmja7kvJrooqvmjILovb3liLDnu4Tku7bnmoRwcm9wc+S4rVxyXG4vLyAgIHJldHVybiB7IHNob3c6IGRhdGEgfTtcclxuLy8gfTtcclxuXHJcbi8vIGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9hcGkvbm92ZWx0YWJsZVxyXG5cclxuLy8gSW5kZXhQYWdlLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICgpID0+IHtcclxuLy8gICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9hcGkvbm92ZWx0YWJsZVwiKTtcclxuLy8gICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuLy8gICAvL+i/mei+uei/lOWbnueahOaVsOaNruS8muiiq+aMgui9veWIsOe7hOS7tueahHByb3Bz5LitXHJcbi8vICAgbGV0IG5vdmVsc2hvdztcclxuLy8gICByZXR1cm4geyBzaG93OiBkYXRhIH07XHJcbi8vIH07XHJcblxyXG4vLyBleHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKEluZGV4UGFnZSk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=