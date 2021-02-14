webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/components/lunbo.jsx":
/*!************************************!*\
  !*** ./pages/components/lunbo.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _lunbo_less__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lunbo.less */ "./pages/components/lunbo.less");
/* harmony import */ var _lunbo_less__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_lunbo_less__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _static_data_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../static/data.json */ "./static/data.json");
var _static_data_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../static/data.json */ "./static/data.json", 1);
var _jsxFileName = "D:\\react\u6BD5\u4E1A\u8BBE\u8BA1\\\u5B9E\u8DF5\u8D44\u6599\\20210201\\20210201\\code\\next-ts\u6A21\u677F\\my-app\\pages\\components\\lunbo.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;
// var style = require('./lunbo.less');
// var ReactDOM = require('react-dom');
// var React = require('react');
// var data = require('../../static/data.json');




type;
var LunBoControl = react__WEBPACK_IMPORTED_MODULE_2___default.a.createClass({
  displayName: "LunBoControl",

  /*对出入的props进行验证*/
  propsTypes: {
    defaultActiveIndex: react__WEBPACK_IMPORTED_MODULE_2___default.a.PropTypes.number,
    interval: react__WEBPACK_IMPORTED_MODULE_2___default.a.PropTypes.number,
    direction: react__WEBPACK_IMPORTED_MODULE_2___default.a.PropTypes.oneOf[('right', 'left', 'top', 'bottom')],
    number: react__WEBPACK_IMPORTED_MODULE_2___default.a.PropTypes.number,
    boxStyle: react__WEBPACK_IMPORTED_MODULE_2___default.a.PropTypes.string,
    imgWidth: react__WEBPACK_IMPORTED_MODULE_2___default.a.PropTypes.number.isRequired,
    imgHeight: react__WEBPACK_IMPORTED_MODULE_2___default.a.PropTypes.number.isRequired
  },

  /*设置默认的props值*/
  getDefaultProps: function getDefaultProps() {
    return {
      direction: 'right',
      interval: 1000,
      boxStyle: 'content'
    };
  },

  /*初始化state值*/
  getInitialState: function getInitialState() {
    return {
      activeIndex: 1,
      offsetDistance: this.props.direction == 'right' || this.props.direction == 'left' ? -this.props.imgWidth : -this.props.imgHeight,
      pause: false,
      flag: true
    };
  },

  /*生命周期函数 在首次渲染之前*/
  componentWillMount: function componentWillMount() {
    this.direction = this.props.direction === 'left' || this.props.direction === 'right' ? 'x' : 'y';
  },

  /*在真实的DOM被渲染出来后*/
  componentDidMount: function componentDidMount() {
    this.autoPlay();
  },

  /*组件被移除之前*/
  componentWillUnmount: function componentWillUnmount() {
    clearTimeout(this.timeOuter);
    clearInterval(this.timer);
  },
  autoPlay: function autoPlay() {
    switch (this.props.direction) {
      case 'right':
        this.timerOuter = setTimeout(this.playRight, this.props.interval);
        this.direction = 'x';
        break;

      case 'left':
        this.timerOuter = setTimeout(this.playLeft, this.props.interval);
        this.direction = 'x';
        break;

      case 'top':
        this.timerOuter = setTimeout(this.playLeft, this.props.interval);
        this.direction = 'y';
        break;

      case 'bottom':
        this.timerOuter = setTimeout(this.playRight, this.props.interval);
        this.direction = 'y';
        break;
    }

    ;
  },

  /*对不同方向做的相应模板上样式的处理*/
  directionHandle: function directionHandle() {
    if (this.direction === 'y') {
      return {
        top: this.state.offsetDistance + 'px',
        width: this.props.imgWidth,
        height: this.props.imgHeight * (this.props.number + 2)
      };
    } else {
      return {
        left: this.state.offsetDistance + 'px',
        width: this.props.imgWidth * (this.props.number + 2),
        height: this.props.imgHeight
      };
    }
  },

  /*鼠标滑入，滑出*/
  mouseHandle: function mouseHandle(e) {
    if (e.type === 'mouseover') {
      this.setState({
        pause: true
      });
    } else if (e.type === 'mouseleave') {
      this.setState({
        pause: false
      });
      this.autoPlay();
    }
  },

  /*圆点显示效果*/
  checkDots: function checkDots(index) {
    var activeIndex;

    if (this.state.activeIndex === this.props.number + 1) {
      activeIndex = 1;
    } else if (this.state.activeIndex === 0) {
      activeIndex = this.props.number;
    } else {
      activeIndex = this.state.activeIndex;
    }

    return index + 1 === activeIndex ? 'dots active' : 'dots';
  },

  /*鼠标滑入圆点*/
  dotsHover: function dotsHover(index) {
    clearInterval(this.timer);
    this.setState({
      activeIndex: index + 1
    });
    this.position();
  },

  /*向右或向下*/
  playRight: function playRight(indexIn) {
    if (this.state.flag) {
      var index = indexIn ? indexIn : this.state.activeIndex + 1;
      this.setState({
        activeIndex: index
      });
      this.position();
    }
  },

  /*向左或向上*/
  playLeft: function playLeft(indexIn) {
    if (this.state.flag) {
      var index = indexIn ? indexIn : this.state.activeIndex - 1;
      this.setState({
        activeIndex: index
      });
      this.position();
    }
  },

  /*运动效果*/
  position: function position() {
    this.setState({
      flag: false
    });
    this.timer = setInterval(function () {
      if (this.direction === 'x') {
        var boxDistance = this.props.imgWidth;
      } else {
        var boxDistance = this.props.imgHeight;
      }

      var offsetDistance = this.state.offsetDistance;

      if (Math.abs(offsetDistance - -boxDistance * this.state.activeIndex) <= 0.09) {
        offsetDistance = -boxDistance * this.state.activeIndex;
        clearInterval(this.timer);
        this.setState({
          flag: true
        });

        if (this.state.activeIndex > this.props.number) {
          offsetDistance = -boxDistance;
          this.setState({
            activeIndex: 1
          });
        } else if (this.state.activeIndex === 0) {
          offsetDistance = -boxDistance * this.props.number;
          this.setState({
            activeIndex: this.props.number
          });
        }

        this.setState({
          offsetDistance: offsetDistance
        });

        if (!this.state.pause) {
          this.autoPlay();
        }
      } else {
        offsetDistance = offsetDistance - (boxDistance * this.state.activeIndex - Math.abs(offsetDistance)) / 30;
        this.setState({
          offsetDistance: offsetDistance
        });
      }
    }.bind(this), 10);
  },

  /*点击向左按钮*/
  left: function left() {
    var oldIndex = this.state.activeIndex;
    this.playLeft(oldIndex - 1);
  },

  /*点击向右按钮*/
  right: function right() {
    var oldIndex = this.state.activeIndex;
    this.playRight(oldIndex + 1);
  },
  render: function render() {
    var _this = this;

    return __jsx("div", {
      className: this.props.boxStyle,
      style: {
        width: this.props.imgWidth,
        height: this.props.imgHeight
      },
      onMouseOver: this.mouseHandle,
      onMouseLeave: this.mouseHandle,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 168,
        columnNumber: 17
      }
    }, __jsx("span", {
      className: "leftIcon",
      onClick: this.left,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 169,
        columnNumber: 13
      }
    }), __jsx("span", {
      className: "rightIcon",
      onClick: this.right,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 170,
        columnNumber: 13
      }
    }), __jsx("div", {
      className: "dots-wrap",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 171,
        columnNumber: 13
      }
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.Children.map(this.props.children, function (elem, index) {
      return __jsx("span", {
        className: _this.checkDots(index),
        onMouseOver: _this.dotsHover.bind(_this, index),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 174,
          columnNumber: 33
        }
      });
    })), __jsx("ul", {
      style: this.directionHandle(),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 178,
        columnNumber: 13
      }
    }, this.props.children[this.props.number - 1], this.props.children, this.props.children[0]));
  }
});
_c = LunBoControl;
var LunBoComponent = react__WEBPACK_IMPORTED_MODULE_2___default.a.createClass({
  displayName: "LunBoComponent",
  propsTypes: {
    lunboObject: react__WEBPACK_IMPORTED_MODULE_2___default.a.PropTypes.object.isRequired,
    imgArray: react__WEBPACK_IMPORTED_MODULE_2___default.a.PropTypes.array.isRequired,
    linkArray: react__WEBPACK_IMPORTED_MODULE_2___default.a.PropTypes.array
  },
  render: function render() {
    return __jsx(LunBoControl, {
      interval: this.props.lunboObject.interval,
      number: this.props.lunboObject.number,
      boxStyle: this.props.lunboObject.boxStyle,
      imgWidth: this.props.lunboObject.imgWidth,
      imgHeight: this.props.lunboObject.imgHeight,
      direction: this.props.lunboObject.direction,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 194,
        columnNumber: 17
      }
    }, this.props.imgArray.map(function (item, index) {
      return __jsx("li", {
        key: index,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 197,
          columnNumber: 36
        }
      }, __jsx("a", {
        href: this.props.linkArray[index],
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 197,
          columnNumber: 52
        }
      }, __jsx("img", {
        width: this.props.lunboObject.imgWidth,
        height: this.props.lunboObject.imgHeight,
        src: item,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 197,
          columnNumber: 90
        }
      })));
    }.bind(this)));
  }
});
/* harmony default export */ __webpack_exports__["default"] = (LunBoComponent);

var _c;

$RefreshReg$(_c, "LunBoControl");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29tcG9uZW50cy9sdW5iby5qc3giXSwibmFtZXMiOlsidHlwZSIsIkx1bkJvQ29udHJvbCIsIlJlYWN0IiwiY3JlYXRlQ2xhc3MiLCJwcm9wc1R5cGVzIiwiZGVmYXVsdEFjdGl2ZUluZGV4IiwiUHJvcFR5cGVzIiwibnVtYmVyIiwiaW50ZXJ2YWwiLCJkaXJlY3Rpb24iLCJvbmVPZiIsImJveFN0eWxlIiwic3RyaW5nIiwiaW1nV2lkdGgiLCJpc1JlcXVpcmVkIiwiaW1nSGVpZ2h0IiwiZ2V0RGVmYXVsdFByb3BzIiwiZ2V0SW5pdGlhbFN0YXRlIiwiYWN0aXZlSW5kZXgiLCJvZmZzZXREaXN0YW5jZSIsInByb3BzIiwicGF1c2UiLCJmbGFnIiwiY29tcG9uZW50V2lsbE1vdW50IiwiY29tcG9uZW50RGlkTW91bnQiLCJhdXRvUGxheSIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwiY2xlYXJUaW1lb3V0IiwidGltZU91dGVyIiwiY2xlYXJJbnRlcnZhbCIsInRpbWVyIiwidGltZXJPdXRlciIsInNldFRpbWVvdXQiLCJwbGF5UmlnaHQiLCJwbGF5TGVmdCIsImRpcmVjdGlvbkhhbmRsZSIsInRvcCIsInN0YXRlIiwid2lkdGgiLCJoZWlnaHQiLCJsZWZ0IiwibW91c2VIYW5kbGUiLCJlIiwic2V0U3RhdGUiLCJjaGVja0RvdHMiLCJpbmRleCIsImRvdHNIb3ZlciIsInBvc2l0aW9uIiwiaW5kZXhJbiIsInNldEludGVydmFsIiwiYm94RGlzdGFuY2UiLCJNYXRoIiwiYWJzIiwiYmluZCIsIm9sZEluZGV4IiwicmlnaHQiLCJyZW5kZXIiLCJfdGhpcyIsIkNoaWxkcmVuIiwibWFwIiwiY2hpbGRyZW4iLCJlbGVtIiwiTHVuQm9Db21wb25lbnQiLCJsdW5ib09iamVjdCIsIm9iamVjdCIsImltZ0FycmF5IiwiYXJyYXkiLCJsaW5rQXJyYXkiLCJpdGVtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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Q0FBcUJ0QixLQUFyQixDQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBc0M7QUFBSyxhQUFLLEVBQUUsS0FBS3pCLEtBQUwsQ0FBVzJDLFdBQVgsQ0FBdUJsRCxRQUFuQztBQUE2QyxjQUFNLEVBQUUsS0FBS08sS0FBTCxDQUFXMkMsV0FBWCxDQUF1QmhELFNBQTVFO0FBQXVGLFdBQUcsRUFBRXFELElBQTVGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFBdEMsQ0FBaEIsQ0FBUDtBQUNILEtBRnVCLENBRXRCZixJQUZzQixDQUVqQixJQUZpQixDQUF4QixDQUZSLENBRFI7QUFTSDtBQWhCa0MsQ0FBbEIsQ0FBckI7QUFtQmVTLDZFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmQ3ODhhY2VkNTk2Y2RiNWE5ZTBjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyB2YXIgc3R5bGUgPSByZXF1aXJlKCcuL2x1bmJvLmxlc3MnKTtcclxuLy8gdmFyIFJlYWN0RE9NID0gcmVxdWlyZSgncmVhY3QtZG9tJyk7XHJcbi8vIHZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XHJcbi8vIHZhciBkYXRhID0gcmVxdWlyZSgnLi4vLi4vc3RhdGljL2RhdGEuanNvbicpO1xyXG5cclxuaW1wb3J0IHN0eWxlIGZyb20gXCIuL2x1bmJvLmxlc3NcIlxyXG5pbXBvcnQgUmVhY3RET00gZnJvbSBcInJlYWN0LWRvbVwiXHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgZGF0YSBmcm9tIFwiLi4vLi4vc3RhdGljL2RhdGEuanNvblwiXHJcblxyXG50eXBlIFxyXG5cclxudmFyIEx1bkJvQ29udHJvbCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcclxuICAgIC8q5a+55Ye65YWl55qEcHJvcHPov5vooYzpqozor4EqL1xyXG4gICAgcHJvcHNUeXBlcyA6IHtcclxuICAgICAgICBkZWZhdWx0QWN0aXZlSW5kZXg6UmVhY3QuUHJvcFR5cGVzLm51bWJlcixcclxuICAgICAgICBpbnRlcnZhbDpSZWFjdC5Qcm9wVHlwZXMubnVtYmVyLFxyXG4gICAgICAgIGRpcmVjdGlvbjpSZWFjdC5Qcm9wVHlwZXMub25lT2ZbJ3JpZ2h0JywnbGVmdCcsJ3RvcCcsJ2JvdHRvbSddLFxyXG4gICAgICAgIG51bWJlcjpSZWFjdC5Qcm9wVHlwZXMubnVtYmVyLFxyXG4gICAgICAgIGJveFN0eWxlOlJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICAgICAgaW1nV2lkdGg6UmVhY3QuUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxyXG4gICAgICAgIGltZ0hlaWdodDpSZWFjdC5Qcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWRcclxuICAgIH0sXHJcbiAgICAvKuiuvue9rum7mOiupOeahHByb3Bz5YC8Ki9cclxuICAgIGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24oKXtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBkaXJlY3Rpb246J3JpZ2h0JyxcclxuICAgICAgICAgICAgaW50ZXJ2YWw6IDEwMDAsXHJcbiAgICAgICAgICAgIGJveFN0eWxlOidjb250ZW50J1xyXG4gICAgICAgIH07XHJcbiAgICB9LFxyXG4gICAgLyrliJ3lp4vljJZzdGF0ZeWAvCovXHJcbiAgICBnZXRJbml0aWFsU3RhdGUgOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIHJldHVybntcclxuICAgICAgICAgICAgYWN0aXZlSW5kZXg6MSxcclxuICAgICAgICAgICAgb2Zmc2V0RGlzdGFuY2U6dGhpcy5wcm9wcy5kaXJlY3Rpb24gPT0gJ3JpZ2h0JyB8fCB0aGlzLnByb3BzLmRpcmVjdGlvbiA9PSAnbGVmdCcgPyAtdGhpcy5wcm9wcy5pbWdXaWR0aCA6IC10aGlzLnByb3BzLmltZ0hlaWdodCxcclxuICAgICAgICAgICAgcGF1c2U6ZmFsc2UsXHJcbiAgICAgICAgICAgIGZsYWc6dHJ1ZVxyXG4gICAgICAgIH07XHJcbiAgICB9LFxyXG4gICAgLyrnlJ/lkb3lkajmnJ/lh73mlbAg5Zyo6aaW5qyh5riy5p+T5LmL5YmNKi9cclxuICAgIGNvbXBvbmVudFdpbGxNb3VudCA6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSB0aGlzLnByb3BzLmRpcmVjdGlvbiA9PT0gJ2xlZnQnIHx8IHRoaXMucHJvcHMuZGlyZWN0aW9uID09PSAncmlnaHQnPyAneCcgOiAneSc7XHJcbiAgICB9LFxyXG4gICAgLyrlnKjnnJ/lrp7nmoRET03ooqvmuLLmn5Plh7rmnaXlkI4qL1xyXG4gICAgY29tcG9uZW50RGlkTW91bnQgOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIHRoaXMuYXV0b1BsYXkoKTtcclxuICAgIH0sXHJcbiAgICAvKue7hOS7tuiiq+enu+mZpOS5i+WJjSovXHJcbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCA6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZU91dGVyKTtcclxuICAgICAgICBjbGVhckludGVydmFsKHRoaXMudGltZXIpO1xyXG4gICAgfSxcclxuICAgIGF1dG9QbGF5IDogZnVuY3Rpb24oKXtcclxuICAgICAgICBzd2l0Y2godGhpcy5wcm9wcy5kaXJlY3Rpb24pe1xyXG4gICAgICAgIGNhc2UgJ3JpZ2h0JyA6IFxyXG4gICAgICAgICAgICB0aGlzLnRpbWVyT3V0ZXI9c2V0VGltZW91dCh0aGlzLnBsYXlSaWdodCx0aGlzLnByb3BzLmludGVydmFsKTtcclxuICAgICAgICAgICAgdGhpcy5kaXJlY3Rpb249J3gnO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdsZWZ0JyAgOiBcclxuICAgICAgICAgICAgdGhpcy50aW1lck91dGVyPXNldFRpbWVvdXQodGhpcy5wbGF5TGVmdCx0aGlzLnByb3BzLmludGVydmFsKTtcclxuICAgICAgICAgICAgdGhpcy5kaXJlY3Rpb249J3gnO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICd0b3AnICAgOiBcclxuICAgICAgICAgICAgdGhpcy50aW1lck91dGVyPXNldFRpbWVvdXQodGhpcy5wbGF5TGVmdCx0aGlzLnByb3BzLmludGVydmFsKTtcclxuICAgICAgICAgICAgdGhpcy5kaXJlY3Rpb249J3knO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdib3R0b20nOiBcclxuICAgICAgICAgICAgdGhpcy50aW1lck91dGVyPXNldFRpbWVvdXQodGhpcy5wbGF5UmlnaHQsdGhpcy5wcm9wcy5pbnRlcnZhbCk7XHJcbiAgICAgICAgICAgIHRoaXMuZGlyZWN0aW9uPSd5JztcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfTtcclxuICAgIH0sXHJcbiAgICAvKuWvueS4jeWQjOaWueWQkeWBmueahOebuOW6lOaooeadv+S4iuagt+W8j+eahOWkhOeQhiovXHJcbiAgICBkaXJlY3Rpb25IYW5kbGUgOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIGlmKHRoaXMuZGlyZWN0aW9uID09PSAneScpe1xyXG4gICAgICAgICAgICByZXR1cm4ge3RvcCA6IHRoaXMuc3RhdGUub2Zmc2V0RGlzdGFuY2UrJ3B4Jyx3aWR0aCA6IHRoaXMucHJvcHMuaW1nV2lkdGgsaGVpZ2h0IDogdGhpcy5wcm9wcy5pbWdIZWlnaHQqKHRoaXMucHJvcHMubnVtYmVyKzIpfTtcclxuICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7bGVmdCA6IHRoaXMuc3RhdGUub2Zmc2V0RGlzdGFuY2UrJ3B4Jyx3aWR0aCA6IHRoaXMucHJvcHMuaW1nV2lkdGgqKHRoaXMucHJvcHMubnVtYmVyKzIpLGhlaWdodCA6IHRoaXMucHJvcHMuaW1nSGVpZ2h0fTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgLyrpvKDmoIfmu5HlhaXvvIzmu5Hlh7oqL1xyXG4gICAgbW91c2VIYW5kbGUgOiBmdW5jdGlvbihlKXtcclxuICAgICAgICBpZihlLnR5cGUgPT09ICdtb3VzZW92ZXInKXtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7cGF1c2UgOiB0cnVlfSk7XHJcbiAgICAgICAgfWVsc2UgaWYoZS50eXBlID09PSAnbW91c2VsZWF2ZScpe1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtwYXVzZSA6IGZhbHNlfSk7XHJcbiAgICAgICAgICAgIHRoaXMuYXV0b1BsYXkoKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgLyrlnIbngrnmmL7npLrmlYjmnpwqL1xyXG4gICAgY2hlY2tEb3RzIDogZnVuY3Rpb24oaW5kZXgpe1xyXG4gICAgICAgIHZhciBhY3RpdmVJbmRleDtcclxuICAgICAgICBpZih0aGlzLnN0YXRlLmFjdGl2ZUluZGV4ID09PSB0aGlzLnByb3BzLm51bWJlcisxKXtcclxuICAgICAgICAgICAgYWN0aXZlSW5kZXggPSAxO1xyXG4gICAgICAgIH1lbHNlIGlmKHRoaXMuc3RhdGUuYWN0aXZlSW5kZXggPT09IDApe1xyXG4gICAgICAgICAgICBhY3RpdmVJbmRleCA9IHRoaXMucHJvcHMubnVtYmVyO1xyXG4gICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgYWN0aXZlSW5kZXggPSB0aGlzLnN0YXRlLmFjdGl2ZUluZGV4O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gaW5kZXgrMSA9PT0gYWN0aXZlSW5kZXg/ICdkb3RzIGFjdGl2ZScgOiAnZG90cyc7XHJcbiAgICB9LFxyXG4gICAgLyrpvKDmoIfmu5HlhaXlnIbngrkqL1xyXG4gICAgZG90c0hvdmVyIDogZnVuY3Rpb24oaW5kZXgpe1xyXG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy50aW1lcik7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7YWN0aXZlSW5kZXg6aW5kZXgrMX0pO1xyXG4gICAgICAgIHRoaXMucG9zaXRpb24oKTtcclxuICAgIH0sXHJcbiAgICAvKuWQkeWPs+aIluWQkeS4iyovXHJcbiAgICBwbGF5UmlnaHQ6IGZ1bmN0aW9uKGluZGV4SW4pe1xyXG4gICAgICAgIGlmKHRoaXMuc3RhdGUuZmxhZyl7XHJcbiAgICAgICAgICAgIHZhciBpbmRleD1pbmRleEluP2luZGV4SW46dGhpcy5zdGF0ZS5hY3RpdmVJbmRleCsxO1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHthY3RpdmVJbmRleDppbmRleH0pO1xyXG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIC8q5ZCR5bem5oiW5ZCR5LiKKi9cclxuICAgIHBsYXlMZWZ0OiBmdW5jdGlvbihpbmRleEluKXtcclxuICAgICAgICBpZih0aGlzLnN0YXRlLmZsYWcpe1xyXG4gICAgICAgICAgICB2YXIgaW5kZXg9aW5kZXhJbj9pbmRleEluOnRoaXMuc3RhdGUuYWN0aXZlSW5kZXgtMTtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7YWN0aXZlSW5kZXg6aW5kZXh9KTtcclxuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbigpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICAvKui/kOWKqOaViOaenCovXHJcbiAgICBwb3NpdGlvbjogZnVuY3Rpb24oKXtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtmbGFnOmZhbHNlfSk7XHJcbiAgICAgICAgdGhpcy50aW1lciA9IHNldEludGVydmFsKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIGlmKHRoaXMuZGlyZWN0aW9uID09PSAneCcpe1xyXG4gICAgICAgICAgICAgICAgdmFyIGJveERpc3RhbmNlID0gdGhpcy5wcm9wcy5pbWdXaWR0aDtcclxuICAgICAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdmFyIGJveERpc3RhbmNlID0gdGhpcy5wcm9wcy5pbWdIZWlnaHQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFyIG9mZnNldERpc3RhbmNlID0gdGhpcy5zdGF0ZS5vZmZzZXREaXN0YW5jZTtcclxuICAgICAgICAgICAgaWYoTWF0aC5hYnMob2Zmc2V0RGlzdGFuY2UtKC1ib3hEaXN0YW5jZSp0aGlzLnN0YXRlLmFjdGl2ZUluZGV4KSkgPD0gMC4wOSl7XHJcbiAgICAgICAgICAgICAgICBvZmZzZXREaXN0YW5jZSA9IC1ib3hEaXN0YW5jZSp0aGlzLnN0YXRlLmFjdGl2ZUluZGV4O1xyXG4gICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLnRpbWVyKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2ZsYWc6dHJ1ZX0pO1xyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5zdGF0ZS5hY3RpdmVJbmRleCA+IHRoaXMucHJvcHMubnVtYmVyKXtcclxuICAgICAgICAgICAgICAgICAgICBvZmZzZXREaXN0YW5jZSA9IC1ib3hEaXN0YW5jZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHthY3RpdmVJbmRleCA6IDF9KTtcclxuICAgICAgICAgICAgICAgIH1lbHNlIGlmKHRoaXMuc3RhdGUuYWN0aXZlSW5kZXggPT09IDApe1xyXG4gICAgICAgICAgICAgICAgICAgIG9mZnNldERpc3RhbmNlID0gLWJveERpc3RhbmNlKnRoaXMucHJvcHMubnVtYmVyO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2FjdGl2ZUluZGV4IDogdGhpcy5wcm9wcy5udW1iZXJ9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe29mZnNldERpc3RhbmNlOm9mZnNldERpc3RhbmNlfSk7XHJcbiAgICAgICAgICAgICAgICBpZighdGhpcy5zdGF0ZS5wYXVzZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hdXRvUGxheSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIG9mZnNldERpc3RhbmNlID0gb2Zmc2V0RGlzdGFuY2UtKGJveERpc3RhbmNlKnRoaXMuc3RhdGUuYWN0aXZlSW5kZXgtTWF0aC5hYnMob2Zmc2V0RGlzdGFuY2UpKS8zMDtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe29mZnNldERpc3RhbmNlOm9mZnNldERpc3RhbmNlfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LmJpbmQodGhpcyksMTApO1xyXG4gICAgfSxcclxuICAgIC8q54K55Ye75ZCR5bem5oyJ6ZKuKi9cclxuICAgIGxlZnQ6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdmFyIG9sZEluZGV4PXRoaXMuc3RhdGUuYWN0aXZlSW5kZXg7XHJcbiAgICAgICAgdGhpcy5wbGF5TGVmdChvbGRJbmRleC0xKTtcclxuICAgIH0sXHJcbiAgICAvKueCueWHu+WQkeWPs+aMiemSriovXHJcbiAgICByaWdodDogZnVuY3Rpb24oKXtcclxuICAgICAgICB2YXIgb2xkSW5kZXg9dGhpcy5zdGF0ZS5hY3RpdmVJbmRleDtcclxuICAgICAgICB0aGlzLnBsYXlSaWdodChvbGRJbmRleCsxKTtcclxuICAgIH0sXHJcbiAgICByZW5kZXIgOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgcmV0dXJuICg8ZGl2IGNsYXNzTmFtZT17dGhpcy5wcm9wcy5ib3hTdHlsZX0gc3R5bGU9e3t3aWR0aDp0aGlzLnByb3BzLmltZ1dpZHRoLCBoZWlnaHQ6dGhpcy5wcm9wcy5pbWdIZWlnaHR9fSBvbk1vdXNlT3Zlcj17dGhpcy5tb3VzZUhhbmRsZX0gb25Nb3VzZUxlYXZlPXt0aGlzLm1vdXNlSGFuZGxlfT5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibGVmdEljb25cIiBvbkNsaWNrPXt0aGlzLmxlZnR9Pjwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicmlnaHRJY29uXCIgb25DbGljaz17dGhpcy5yaWdodH0+PC9zcGFuPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRvdHMtd3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgeyAgIFxyXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LkNoaWxkcmVuLm1hcCh0aGlzLnByb3BzLmNoaWxkcmVuLGZ1bmN0aW9uKGVsZW0saW5kZXgpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKDxzcGFuIGNsYXNzTmFtZT17X3RoaXMuY2hlY2tEb3RzKGluZGV4KX0gb25Nb3VzZU92ZXI9e190aGlzLmRvdHNIb3Zlci5iaW5kKF90aGlzLGluZGV4KX0+PC9zcGFuPik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDx1bCBzdHlsZT17dGhpcy5kaXJlY3Rpb25IYW5kbGUoKX0+XHJcbiAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlblt0aGlzLnByb3BzLm51bWJlci0xXX1cclxuICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxyXG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW5bMF19XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9kaXY+KTtcclxuICAgIH1cclxufSk7XHJcbnZhciBMdW5Cb0NvbXBvbmVudCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcclxuICAgIHByb3BzVHlwZXMgOiB7XHJcbiAgICAgICAgbHVuYm9PYmplY3QgOiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXHJcbiAgICAgICAgaW1nQXJyYXkgOiBSZWFjdC5Qcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZCxcclxuICAgICAgICBsaW5rQXJyYXkgOiBSZWFjdC5Qcm9wVHlwZXMuYXJyYXlcclxuICAgIH0sXHJcbiAgICByZW5kZXIgOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8THVuQm9Db250cm9sIGludGVydmFsPXt0aGlzLnByb3BzLmx1bmJvT2JqZWN0LmludGVydmFsfSBudW1iZXI9e3RoaXMucHJvcHMubHVuYm9PYmplY3QubnVtYmVyfSBib3hTdHlsZT17dGhpcy5wcm9wcy5sdW5ib09iamVjdC5ib3hTdHlsZX0gaW1nV2lkdGg9e3RoaXMucHJvcHMubHVuYm9PYmplY3QuaW1nV2lkdGh9IGltZ0hlaWdodD17dGhpcy5wcm9wcy5sdW5ib09iamVjdC5pbWdIZWlnaHR9IGRpcmVjdGlvbj17dGhpcy5wcm9wcy5sdW5ib09iamVjdC5kaXJlY3Rpb259PlxyXG4gICAgICAgICAgICAgICAgICAgIHsgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaW1nQXJyYXkubWFwKGZ1bmN0aW9uKGl0ZW0saW5kZXgpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxsaSBrZXk9e2luZGV4fT48YSBocmVmPXt0aGlzLnByb3BzLmxpbmtBcnJheVtpbmRleF19PjxpbWcgd2lkdGg9e3RoaXMucHJvcHMubHVuYm9PYmplY3QuaW1nV2lkdGh9IGhlaWdodD17dGhpcy5wcm9wcy5sdW5ib09iamVjdC5pbWdIZWlnaHR9IHNyYz17aXRlbX0vPjwvYT48L2xpPjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfS5iaW5kKHRoaXMpKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvTHVuQm9Db250cm9sPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTHVuQm9Db21wb25lbnQ7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=