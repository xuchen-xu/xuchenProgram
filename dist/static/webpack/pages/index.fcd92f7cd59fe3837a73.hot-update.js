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
        lineNumber: 167,
        columnNumber: 17
      }
    }, __jsx("span", {
      className: "leftIcon",
      onClick: this.left,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 168,
        columnNumber: 13
      }
    }), __jsx("span", {
      className: "rightIcon",
      onClick: this.right,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 169,
        columnNumber: 13
      }
    }), __jsx("div", {
      className: "dots-wrap",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 170,
        columnNumber: 13
      }
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.Children.map(this.props.children, function (elem, index) {
      return __jsx("span", {
        className: _this.checkDots(index),
        onMouseOver: _this.dotsHover.bind(_this, index),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 173,
          columnNumber: 33
        }
      });
    })), __jsx("ul", {
      style: this.directionHandle(),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 177,
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
        lineNumber: 193,
        columnNumber: 17
      }
    }, this.props.imgArray.map(function (item, index) {
      return __jsx("li", {
        key: index,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 196,
          columnNumber: 36
        }
      }, __jsx("a", {
        href: this.props.linkArray[index],
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 196,
          columnNumber: 52
        }
      }, __jsx("img", {
        width: this.props.lunboObject.imgWidth,
        height: this.props.lunboObject.imgHeight,
        src: item,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 196,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29tcG9uZW50cy9sdW5iby5qc3giXSwibmFtZXMiOlsiTHVuQm9Db250cm9sIiwiUmVhY3QiLCJjcmVhdGVDbGFzcyIsInByb3BzVHlwZXMiLCJkZWZhdWx0QWN0aXZlSW5kZXgiLCJQcm9wVHlwZXMiLCJudW1iZXIiLCJpbnRlcnZhbCIsImRpcmVjdGlvbiIsIm9uZU9mIiwiYm94U3R5bGUiLCJzdHJpbmciLCJpbWdXaWR0aCIsImlzUmVxdWlyZWQiLCJpbWdIZWlnaHQiLCJnZXREZWZhdWx0UHJvcHMiLCJnZXRJbml0aWFsU3RhdGUiLCJhY3RpdmVJbmRleCIsIm9mZnNldERpc3RhbmNlIiwicHJvcHMiLCJwYXVzZSIsImZsYWciLCJjb21wb25lbnRXaWxsTW91bnQiLCJjb21wb25lbnREaWRNb3VudCIsImF1dG9QbGF5IiwiY29tcG9uZW50V2lsbFVubW91bnQiLCJjbGVhclRpbWVvdXQiLCJ0aW1lT3V0ZXIiLCJjbGVhckludGVydmFsIiwidGltZXIiLCJ0aW1lck91dGVyIiwic2V0VGltZW91dCIsInBsYXlSaWdodCIsInBsYXlMZWZ0IiwiZGlyZWN0aW9uSGFuZGxlIiwidG9wIiwic3RhdGUiLCJ3aWR0aCIsImhlaWdodCIsImxlZnQiLCJtb3VzZUhhbmRsZSIsImUiLCJ0eXBlIiwic2V0U3RhdGUiLCJjaGVja0RvdHMiLCJpbmRleCIsImRvdHNIb3ZlciIsInBvc2l0aW9uIiwiaW5kZXhJbiIsInNldEludGVydmFsIiwiYm94RGlzdGFuY2UiLCJNYXRoIiwiYWJzIiwiYmluZCIsIm9sZEluZGV4IiwicmlnaHQiLCJyZW5kZXIiLCJfdGhpcyIsIkNoaWxkcmVuIiwibWFwIiwiY2hpbGRyZW4iLCJlbGVtIiwiTHVuQm9Db21wb25lbnQiLCJsdW5ib09iamVjdCIsIm9iamVjdCIsImltZ0FycmF5IiwiYXJyYXkiLCJsaW5rQXJyYXkiLCJpdGVtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBR0EsSUFBSUEsWUFBWSxHQUFHQyw0Q0FBSyxDQUFDQyxXQUFOLENBQWtCO0FBQUE7O0FBQ2pDO0FBQ0FDLFlBQVUsRUFBRztBQUNUQyxzQkFBa0IsRUFBQ0gsNENBQUssQ0FBQ0ksU0FBTixDQUFnQkMsTUFEMUI7QUFFVEMsWUFBUSxFQUFDTiw0Q0FBSyxDQUFDSSxTQUFOLENBQWdCQyxNQUZoQjtBQUdURSxhQUFTLEVBQUNQLDRDQUFLLENBQUNJLFNBQU4sQ0FBZ0JJLEtBQWhCLEVBQXNCLFNBQVEsTUFBUixFQUFlLEtBQWYsRUFBcUIsUUFBM0MsRUFIRDtBQUlUSCxVQUFNLEVBQUNMLDRDQUFLLENBQUNJLFNBQU4sQ0FBZ0JDLE1BSmQ7QUFLVEksWUFBUSxFQUFDVCw0Q0FBSyxDQUFDSSxTQUFOLENBQWdCTSxNQUxoQjtBQU1UQyxZQUFRLEVBQUNYLDRDQUFLLENBQUNJLFNBQU4sQ0FBZ0JDLE1BQWhCLENBQXVCTyxVQU52QjtBQU9UQyxhQUFTLEVBQUNiLDRDQUFLLENBQUNJLFNBQU4sQ0FBZ0JDLE1BQWhCLENBQXVCTztBQVB4QixHQUZvQjs7QUFXakM7QUFDQUUsaUJBQWUsRUFBRSwyQkFBVTtBQUN2QixXQUFPO0FBQ0hQLGVBQVMsRUFBQyxPQURQO0FBRUhELGNBQVEsRUFBRSxJQUZQO0FBR0hHLGNBQVEsRUFBQztBQUhOLEtBQVA7QUFLSCxHQWxCZ0M7O0FBbUJqQztBQUNBTSxpQkFBZSxFQUFHLDJCQUFVO0FBQ3hCLFdBQU07QUFDRkMsaUJBQVcsRUFBQyxDQURWO0FBRUZDLG9CQUFjLEVBQUMsS0FBS0MsS0FBTCxDQUFXWCxTQUFYLElBQXdCLE9BQXhCLElBQW1DLEtBQUtXLEtBQUwsQ0FBV1gsU0FBWCxJQUF3QixNQUEzRCxHQUFvRSxDQUFDLEtBQUtXLEtBQUwsQ0FBV1AsUUFBaEYsR0FBMkYsQ0FBQyxLQUFLTyxLQUFMLENBQVdMLFNBRnBIO0FBR0ZNLFdBQUssRUFBQyxLQUhKO0FBSUZDLFVBQUksRUFBQztBQUpILEtBQU47QUFNSCxHQTNCZ0M7O0FBNEJqQztBQUNBQyxvQkFBa0IsRUFBRyw4QkFBVTtBQUMzQixTQUFLZCxTQUFMLEdBQWlCLEtBQUtXLEtBQUwsQ0FBV1gsU0FBWCxLQUF5QixNQUF6QixJQUFtQyxLQUFLVyxLQUFMLENBQVdYLFNBQVgsS0FBeUIsT0FBNUQsR0FBcUUsR0FBckUsR0FBMkUsR0FBNUY7QUFDSCxHQS9CZ0M7O0FBZ0NqQztBQUNBZSxtQkFBaUIsRUFBRyw2QkFBVTtBQUMxQixTQUFLQyxRQUFMO0FBQ0gsR0FuQ2dDOztBQW9DakM7QUFDQUMsc0JBQW9CLEVBQUcsZ0NBQVU7QUFDN0JDLGdCQUFZLENBQUMsS0FBS0MsU0FBTixDQUFaO0FBQ0FDLGlCQUFhLENBQUMsS0FBS0MsS0FBTixDQUFiO0FBQ0gsR0F4Q2dDO0FBeUNqQ0wsVUFBUSxFQUFHLG9CQUFVO0FBQ2pCLFlBQU8sS0FBS0wsS0FBTCxDQUFXWCxTQUFsQjtBQUNBLFdBQUssT0FBTDtBQUNJLGFBQUtzQixVQUFMLEdBQWdCQyxVQUFVLENBQUMsS0FBS0MsU0FBTixFQUFnQixLQUFLYixLQUFMLENBQVdaLFFBQTNCLENBQTFCO0FBQ0EsYUFBS0MsU0FBTCxHQUFlLEdBQWY7QUFDQTs7QUFDSixXQUFLLE1BQUw7QUFDSSxhQUFLc0IsVUFBTCxHQUFnQkMsVUFBVSxDQUFDLEtBQUtFLFFBQU4sRUFBZSxLQUFLZCxLQUFMLENBQVdaLFFBQTFCLENBQTFCO0FBQ0EsYUFBS0MsU0FBTCxHQUFlLEdBQWY7QUFDQTs7QUFDSixXQUFLLEtBQUw7QUFDSSxhQUFLc0IsVUFBTCxHQUFnQkMsVUFBVSxDQUFDLEtBQUtFLFFBQU4sRUFBZSxLQUFLZCxLQUFMLENBQVdaLFFBQTFCLENBQTFCO0FBQ0EsYUFBS0MsU0FBTCxHQUFlLEdBQWY7QUFDQTs7QUFDSixXQUFLLFFBQUw7QUFDSSxhQUFLc0IsVUFBTCxHQUFnQkMsVUFBVSxDQUFDLEtBQUtDLFNBQU4sRUFBZ0IsS0FBS2IsS0FBTCxDQUFXWixRQUEzQixDQUExQjtBQUNBLGFBQUtDLFNBQUwsR0FBZSxHQUFmO0FBQ0E7QUFoQko7O0FBaUJDO0FBQ0osR0E1RGdDOztBQTZEakM7QUFDQTBCLGlCQUFlLEVBQUcsMkJBQVU7QUFDeEIsUUFBRyxLQUFLMUIsU0FBTCxLQUFtQixHQUF0QixFQUEwQjtBQUN0QixhQUFPO0FBQUMyQixXQUFHLEVBQUcsS0FBS0MsS0FBTCxDQUFXbEIsY0FBWCxHQUEwQixJQUFqQztBQUFzQ21CLGFBQUssRUFBRyxLQUFLbEIsS0FBTCxDQUFXUCxRQUF6RDtBQUFrRTBCLGNBQU0sRUFBRyxLQUFLbkIsS0FBTCxDQUFXTCxTQUFYLElBQXNCLEtBQUtLLEtBQUwsQ0FBV2IsTUFBWCxHQUFrQixDQUF4QztBQUEzRSxPQUFQO0FBQ0gsS0FGRCxNQUVNO0FBQ0YsYUFBTztBQUFDaUMsWUFBSSxFQUFHLEtBQUtILEtBQUwsQ0FBV2xCLGNBQVgsR0FBMEIsSUFBbEM7QUFBdUNtQixhQUFLLEVBQUcsS0FBS2xCLEtBQUwsQ0FBV1AsUUFBWCxJQUFxQixLQUFLTyxLQUFMLENBQVdiLE1BQVgsR0FBa0IsQ0FBdkMsQ0FBL0M7QUFBeUZnQyxjQUFNLEVBQUcsS0FBS25CLEtBQUwsQ0FBV0w7QUFBN0csT0FBUDtBQUNIO0FBQ0osR0FwRWdDOztBQXFFakM7QUFDQTBCLGFBQVcsRUFBRyxxQkFBU0MsQ0FBVCxFQUFXO0FBQ3JCLFFBQUdBLENBQUMsQ0FBQ0MsSUFBRixLQUFXLFdBQWQsRUFBMEI7QUFDdEIsV0FBS0MsUUFBTCxDQUFjO0FBQUN2QixhQUFLLEVBQUc7QUFBVCxPQUFkO0FBQ0gsS0FGRCxNQUVNLElBQUdxQixDQUFDLENBQUNDLElBQUYsS0FBVyxZQUFkLEVBQTJCO0FBQzdCLFdBQUtDLFFBQUwsQ0FBYztBQUFDdkIsYUFBSyxFQUFHO0FBQVQsT0FBZDtBQUNBLFdBQUtJLFFBQUw7QUFDSDtBQUNKLEdBN0VnQzs7QUE4RWpDO0FBQ0FvQixXQUFTLEVBQUcsbUJBQVNDLEtBQVQsRUFBZTtBQUN2QixRQUFJNUIsV0FBSjs7QUFDQSxRQUFHLEtBQUttQixLQUFMLENBQVduQixXQUFYLEtBQTJCLEtBQUtFLEtBQUwsQ0FBV2IsTUFBWCxHQUFrQixDQUFoRCxFQUFrRDtBQUM5Q1csaUJBQVcsR0FBRyxDQUFkO0FBQ0gsS0FGRCxNQUVNLElBQUcsS0FBS21CLEtBQUwsQ0FBV25CLFdBQVgsS0FBMkIsQ0FBOUIsRUFBZ0M7QUFDbENBLGlCQUFXLEdBQUcsS0FBS0UsS0FBTCxDQUFXYixNQUF6QjtBQUNILEtBRkssTUFFQTtBQUNGVyxpQkFBVyxHQUFHLEtBQUttQixLQUFMLENBQVduQixXQUF6QjtBQUNIOztBQUNELFdBQU80QixLQUFLLEdBQUMsQ0FBTixLQUFZNUIsV0FBWixHQUF5QixhQUF6QixHQUF5QyxNQUFoRDtBQUNILEdBekZnQzs7QUEwRmpDO0FBQ0E2QixXQUFTLEVBQUcsbUJBQVNELEtBQVQsRUFBZTtBQUN2QmpCLGlCQUFhLENBQUMsS0FBS0MsS0FBTixDQUFiO0FBQ0EsU0FBS2MsUUFBTCxDQUFjO0FBQUMxQixpQkFBVyxFQUFDNEIsS0FBSyxHQUFDO0FBQW5CLEtBQWQ7QUFDQSxTQUFLRSxRQUFMO0FBQ0gsR0EvRmdDOztBQWdHakM7QUFDQWYsV0FBUyxFQUFFLG1CQUFTZ0IsT0FBVCxFQUFpQjtBQUN4QixRQUFHLEtBQUtaLEtBQUwsQ0FBV2YsSUFBZCxFQUFtQjtBQUNmLFVBQUl3QixLQUFLLEdBQUNHLE9BQU8sR0FBQ0EsT0FBRCxHQUFTLEtBQUtaLEtBQUwsQ0FBV25CLFdBQVgsR0FBdUIsQ0FBakQ7QUFDQSxXQUFLMEIsUUFBTCxDQUFjO0FBQUMxQixtQkFBVyxFQUFDNEI7QUFBYixPQUFkO0FBQ0EsV0FBS0UsUUFBTDtBQUNIO0FBQ0osR0F2R2dDOztBQXdHakM7QUFDQWQsVUFBUSxFQUFFLGtCQUFTZSxPQUFULEVBQWlCO0FBQ3ZCLFFBQUcsS0FBS1osS0FBTCxDQUFXZixJQUFkLEVBQW1CO0FBQ2YsVUFBSXdCLEtBQUssR0FBQ0csT0FBTyxHQUFDQSxPQUFELEdBQVMsS0FBS1osS0FBTCxDQUFXbkIsV0FBWCxHQUF1QixDQUFqRDtBQUNBLFdBQUswQixRQUFMLENBQWM7QUFBQzFCLG1CQUFXLEVBQUM0QjtBQUFiLE9BQWQ7QUFDQSxXQUFLRSxRQUFMO0FBQ0g7QUFDSixHQS9HZ0M7O0FBZ0hqQztBQUNBQSxVQUFRLEVBQUUsb0JBQVU7QUFDaEIsU0FBS0osUUFBTCxDQUFjO0FBQUN0QixVQUFJLEVBQUM7QUFBTixLQUFkO0FBQ0EsU0FBS1EsS0FBTCxHQUFhb0IsV0FBVyxDQUFDLFlBQVU7QUFDL0IsVUFBRyxLQUFLekMsU0FBTCxLQUFtQixHQUF0QixFQUEwQjtBQUN0QixZQUFJMEMsV0FBVyxHQUFHLEtBQUsvQixLQUFMLENBQVdQLFFBQTdCO0FBQ0gsT0FGRCxNQUVNO0FBQ0YsWUFBSXNDLFdBQVcsR0FBRyxLQUFLL0IsS0FBTCxDQUFXTCxTQUE3QjtBQUNIOztBQUNELFVBQUlJLGNBQWMsR0FBRyxLQUFLa0IsS0FBTCxDQUFXbEIsY0FBaEM7O0FBQ0EsVUFBR2lDLElBQUksQ0FBQ0MsR0FBTCxDQUFTbEMsY0FBYyxHQUFFLENBQUNnQyxXQUFELEdBQWEsS0FBS2QsS0FBTCxDQUFXbkIsV0FBakQsS0FBa0UsSUFBckUsRUFBMEU7QUFDdEVDLHNCQUFjLEdBQUcsQ0FBQ2dDLFdBQUQsR0FBYSxLQUFLZCxLQUFMLENBQVduQixXQUF6QztBQUNBVyxxQkFBYSxDQUFDLEtBQUtDLEtBQU4sQ0FBYjtBQUNBLGFBQUtjLFFBQUwsQ0FBYztBQUFDdEIsY0FBSSxFQUFDO0FBQU4sU0FBZDs7QUFDQSxZQUFHLEtBQUtlLEtBQUwsQ0FBV25CLFdBQVgsR0FBeUIsS0FBS0UsS0FBTCxDQUFXYixNQUF2QyxFQUE4QztBQUMxQ1ksd0JBQWMsR0FBRyxDQUFDZ0MsV0FBbEI7QUFDQSxlQUFLUCxRQUFMLENBQWM7QUFBQzFCLHVCQUFXLEVBQUc7QUFBZixXQUFkO0FBQ0gsU0FIRCxNQUdNLElBQUcsS0FBS21CLEtBQUwsQ0FBV25CLFdBQVgsS0FBMkIsQ0FBOUIsRUFBZ0M7QUFDbENDLHdCQUFjLEdBQUcsQ0FBQ2dDLFdBQUQsR0FBYSxLQUFLL0IsS0FBTCxDQUFXYixNQUF6QztBQUNBLGVBQUtxQyxRQUFMLENBQWM7QUFBQzFCLHVCQUFXLEVBQUcsS0FBS0UsS0FBTCxDQUFXYjtBQUExQixXQUFkO0FBQ0g7O0FBQ0QsYUFBS3FDLFFBQUwsQ0FBYztBQUFDekIsd0JBQWMsRUFBQ0E7QUFBaEIsU0FBZDs7QUFDQSxZQUFHLENBQUMsS0FBS2tCLEtBQUwsQ0FBV2hCLEtBQWYsRUFBcUI7QUFDakIsZUFBS0ksUUFBTDtBQUNIO0FBQ0osT0FmRCxNQWVLO0FBQ0ROLHNCQUFjLEdBQUdBLGNBQWMsR0FBQyxDQUFDZ0MsV0FBVyxHQUFDLEtBQUtkLEtBQUwsQ0FBV25CLFdBQXZCLEdBQW1Da0MsSUFBSSxDQUFDQyxHQUFMLENBQVNsQyxjQUFULENBQXBDLElBQThELEVBQTlGO0FBQ0EsYUFBS3lCLFFBQUwsQ0FBYztBQUFDekIsd0JBQWMsRUFBQ0E7QUFBaEIsU0FBZDtBQUNIO0FBQ0osS0ExQndCLENBMEJ2Qm1DLElBMUJ1QixDQTBCbEIsSUExQmtCLENBQUQsRUEwQlgsRUExQlcsQ0FBeEI7QUEyQkgsR0E5SWdDOztBQStJakM7QUFDQWQsTUFBSSxFQUFFLGdCQUFVO0FBQ1osUUFBSWUsUUFBUSxHQUFDLEtBQUtsQixLQUFMLENBQVduQixXQUF4QjtBQUNBLFNBQUtnQixRQUFMLENBQWNxQixRQUFRLEdBQUMsQ0FBdkI7QUFDSCxHQW5KZ0M7O0FBb0pqQztBQUNBQyxPQUFLLEVBQUUsaUJBQVU7QUFDYixRQUFJRCxRQUFRLEdBQUMsS0FBS2xCLEtBQUwsQ0FBV25CLFdBQXhCO0FBQ0EsU0FBS2UsU0FBTCxDQUFlc0IsUUFBUSxHQUFDLENBQXhCO0FBQ0gsR0F4SmdDO0FBeUpqQ0UsUUFBTSxFQUFHLGtCQUFVO0FBQ2YsUUFBSUMsS0FBSyxHQUFHLElBQVo7O0FBQ0EsV0FBUTtBQUFLLGVBQVMsRUFBRSxLQUFLdEMsS0FBTCxDQUFXVCxRQUEzQjtBQUFxQyxXQUFLLEVBQUU7QUFBQzJCLGFBQUssRUFBQyxLQUFLbEIsS0FBTCxDQUFXUCxRQUFsQjtBQUE0QjBCLGNBQU0sRUFBQyxLQUFLbkIsS0FBTCxDQUFXTDtBQUE5QyxPQUE1QztBQUFzRyxpQkFBVyxFQUFFLEtBQUswQixXQUF4SDtBQUFxSSxrQkFBWSxFQUFFLEtBQUtBLFdBQXhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSjtBQUFNLGVBQVMsRUFBQyxVQUFoQjtBQUEyQixhQUFPLEVBQUUsS0FBS0QsSUFBekM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURJLEVBRUo7QUFBTSxlQUFTLEVBQUMsV0FBaEI7QUFBNEIsYUFBTyxFQUFFLEtBQUtnQixLQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRkksRUFHSjtBQUFLLGVBQVMsRUFBQyxXQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FFUXRELDRDQUFLLENBQUN5RCxRQUFOLENBQWVDLEdBQWYsQ0FBbUIsS0FBS3hDLEtBQUwsQ0FBV3lDLFFBQTlCLEVBQXVDLFVBQVNDLElBQVQsRUFBY2hCLEtBQWQsRUFBb0I7QUFDdkQsYUFBUTtBQUFNLGlCQUFTLEVBQUVZLEtBQUssQ0FBQ2IsU0FBTixDQUFnQkMsS0FBaEIsQ0FBakI7QUFBeUMsbUJBQVcsRUFBRVksS0FBSyxDQUFDWCxTQUFOLENBQWdCTyxJQUFoQixDQUFxQkksS0FBckIsRUFBMkJaLEtBQTNCLENBQXREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFBUjtBQUNILEtBRkQsQ0FGUixDQUhJLEVBVUo7QUFBSSxXQUFLLEVBQUUsS0FBS1gsZUFBTCxFQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSyxLQUFLZixLQUFMLENBQVd5QyxRQUFYLENBQW9CLEtBQUt6QyxLQUFMLENBQVdiLE1BQVgsR0FBa0IsQ0FBdEMsQ0FETCxFQUVLLEtBQUthLEtBQUwsQ0FBV3lDLFFBRmhCLEVBR0ssS0FBS3pDLEtBQUwsQ0FBV3lDLFFBQVgsQ0FBb0IsQ0FBcEIsQ0FITCxDQVZJLENBQVI7QUFnQkg7QUEzS2dDLENBQWxCLENBQW5CO0tBQUk1RCxZO0FBNktKLElBQUk4RCxjQUFjLEdBQUc3RCw0Q0FBSyxDQUFDQyxXQUFOLENBQWtCO0FBQUE7QUFDbkNDLFlBQVUsRUFBRztBQUNUNEQsZUFBVyxFQUFHOUQsNENBQUssQ0FBQ0ksU0FBTixDQUFnQjJELE1BQWhCLENBQXVCbkQsVUFENUI7QUFFVG9ELFlBQVEsRUFBR2hFLDRDQUFLLENBQUNJLFNBQU4sQ0FBZ0I2RCxLQUFoQixDQUFzQnJELFVBRnhCO0FBR1RzRCxhQUFTLEVBQUdsRSw0Q0FBSyxDQUFDSSxTQUFOLENBQWdCNkQ7QUFIbkIsR0FEc0I7QUFNbkNWLFFBQU0sRUFBRyxrQkFBVTtBQUNmLFdBQ1EsTUFBQyxZQUFEO0FBQWMsY0FBUSxFQUFFLEtBQUtyQyxLQUFMLENBQVc0QyxXQUFYLENBQXVCeEQsUUFBL0M7QUFBeUQsWUFBTSxFQUFFLEtBQUtZLEtBQUwsQ0FBVzRDLFdBQVgsQ0FBdUJ6RCxNQUF4RjtBQUFnRyxjQUFRLEVBQUUsS0FBS2EsS0FBTCxDQUFXNEMsV0FBWCxDQUF1QnJELFFBQWpJO0FBQTJJLGNBQVEsRUFBRSxLQUFLUyxLQUFMLENBQVc0QyxXQUFYLENBQXVCbkQsUUFBNUs7QUFBc0wsZUFBUyxFQUFFLEtBQUtPLEtBQUwsQ0FBVzRDLFdBQVgsQ0FBdUJqRCxTQUF4TjtBQUFtTyxlQUFTLEVBQUUsS0FBS0ssS0FBTCxDQUFXNEMsV0FBWCxDQUF1QnZELFNBQXJRO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FFUSxLQUFLVyxLQUFMLENBQVc4QyxRQUFYLENBQW9CTixHQUFwQixDQUF3QixVQUFTUyxJQUFULEVBQWN2QixLQUFkLEVBQW9CO0FBQ3hDLGFBQU87QUFBSSxXQUFHLEVBQUVBLEtBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFnQjtBQUFHLFlBQUksRUFBRSxLQUFLMUIsS0FBTCxDQUFXZ0QsU0FBWCxDQUFxQnRCLEtBQXJCLENBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFzQztBQUFLLGFBQUssRUFBRSxLQUFLMUIsS0FBTCxDQUFXNEMsV0FBWCxDQUF1Qm5ELFFBQW5DO0FBQTZDLGNBQU0sRUFBRSxLQUFLTyxLQUFMLENBQVc0QyxXQUFYLENBQXVCakQsU0FBNUU7QUFBdUYsV0FBRyxFQUFFc0QsSUFBNUY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUF0QyxDQUFoQixDQUFQO0FBQ0gsS0FGdUIsQ0FFdEJmLElBRnNCLENBRWpCLElBRmlCLENBQXhCLENBRlIsQ0FEUjtBQVNIO0FBaEJrQyxDQUFsQixDQUFyQjtBQW1CZVMsNkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZmNkOTJmN2NkNTlmZTM4MzdhNzMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIHZhciBzdHlsZSA9IHJlcXVpcmUoJy4vbHVuYm8ubGVzcycpO1xyXG4vLyB2YXIgUmVhY3RET00gPSByZXF1aXJlKCdyZWFjdC1kb20nKTtcclxuLy8gdmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcclxuLy8gdmFyIGRhdGEgPSByZXF1aXJlKCcuLi8uLi9zdGF0aWMvZGF0YS5qc29uJyk7XHJcblxyXG5pbXBvcnQgc3R5bGUgZnJvbSBcIi4vbHVuYm8ubGVzc1wiXHJcbmltcG9ydCBSZWFjdERPTSBmcm9tIFwicmVhY3QtZG9tXCJcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCBkYXRhIGZyb20gXCIuLi8uLi9zdGF0aWMvZGF0YS5qc29uXCJcclxuXHJcblxyXG52YXIgTHVuQm9Db250cm9sID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xyXG4gICAgLyrlr7nlh7rlhaXnmoRwcm9wc+i/m+ihjOmqjOivgSovXHJcbiAgICBwcm9wc1R5cGVzIDoge1xyXG4gICAgICAgIGRlZmF1bHRBY3RpdmVJbmRleDpSZWFjdC5Qcm9wVHlwZXMubnVtYmVyLFxyXG4gICAgICAgIGludGVydmFsOlJlYWN0LlByb3BUeXBlcy5udW1iZXIsXHJcbiAgICAgICAgZGlyZWN0aW9uOlJlYWN0LlByb3BUeXBlcy5vbmVPZlsncmlnaHQnLCdsZWZ0JywndG9wJywnYm90dG9tJ10sXHJcbiAgICAgICAgbnVtYmVyOlJlYWN0LlByb3BUeXBlcy5udW1iZXIsXHJcbiAgICAgICAgYm94U3R5bGU6UmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcclxuICAgICAgICBpbWdXaWR0aDpSZWFjdC5Qcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXHJcbiAgICAgICAgaW1nSGVpZ2h0OlJlYWN0LlByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZFxyXG4gICAgfSxcclxuICAgIC8q6K6+572u6buY6K6k55qEcHJvcHPlgLwqL1xyXG4gICAgZ2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGRpcmVjdGlvbjoncmlnaHQnLFxyXG4gICAgICAgICAgICBpbnRlcnZhbDogMTAwMCxcclxuICAgICAgICAgICAgYm94U3R5bGU6J2NvbnRlbnQnXHJcbiAgICAgICAgfTtcclxuICAgIH0sXHJcbiAgICAvKuWIneWni+WMlnN0YXRl5YC8Ki9cclxuICAgIGdldEluaXRpYWxTdGF0ZSA6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgcmV0dXJue1xyXG4gICAgICAgICAgICBhY3RpdmVJbmRleDoxLFxyXG4gICAgICAgICAgICBvZmZzZXREaXN0YW5jZTp0aGlzLnByb3BzLmRpcmVjdGlvbiA9PSAncmlnaHQnIHx8IHRoaXMucHJvcHMuZGlyZWN0aW9uID09ICdsZWZ0JyA/IC10aGlzLnByb3BzLmltZ1dpZHRoIDogLXRoaXMucHJvcHMuaW1nSGVpZ2h0LFxyXG4gICAgICAgICAgICBwYXVzZTpmYWxzZSxcclxuICAgICAgICAgICAgZmxhZzp0cnVlXHJcbiAgICAgICAgfTtcclxuICAgIH0sXHJcbiAgICAvKueUn+WRveWRqOacn+WHveaVsCDlnKjpppbmrKHmuLLmn5PkuYvliY0qL1xyXG4gICAgY29tcG9uZW50V2lsbE1vdW50IDogZnVuY3Rpb24oKXtcclxuICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IHRoaXMucHJvcHMuZGlyZWN0aW9uID09PSAnbGVmdCcgfHwgdGhpcy5wcm9wcy5kaXJlY3Rpb24gPT09ICdyaWdodCc/ICd4JyA6ICd5JztcclxuICAgIH0sXHJcbiAgICAvKuWcqOecn+WunueahERPTeiiq+a4suafk+WHuuadpeWQjiovXHJcbiAgICBjb21wb25lbnREaWRNb3VudCA6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdGhpcy5hdXRvUGxheSgpO1xyXG4gICAgfSxcclxuICAgIC8q57uE5Lu26KKr56e76Zmk5LmL5YmNKi9cclxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50IDogZnVuY3Rpb24oKXtcclxuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lT3V0ZXIpO1xyXG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy50aW1lcik7XHJcbiAgICB9LFxyXG4gICAgYXV0b1BsYXkgOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIHN3aXRjaCh0aGlzLnByb3BzLmRpcmVjdGlvbil7XHJcbiAgICAgICAgY2FzZSAncmlnaHQnIDogXHJcbiAgICAgICAgICAgIHRoaXMudGltZXJPdXRlcj1zZXRUaW1lb3V0KHRoaXMucGxheVJpZ2h0LHRoaXMucHJvcHMuaW50ZXJ2YWwpO1xyXG4gICAgICAgICAgICB0aGlzLmRpcmVjdGlvbj0neCc7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ2xlZnQnICA6IFxyXG4gICAgICAgICAgICB0aGlzLnRpbWVyT3V0ZXI9c2V0VGltZW91dCh0aGlzLnBsYXlMZWZ0LHRoaXMucHJvcHMuaW50ZXJ2YWwpO1xyXG4gICAgICAgICAgICB0aGlzLmRpcmVjdGlvbj0neCc7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ3RvcCcgICA6IFxyXG4gICAgICAgICAgICB0aGlzLnRpbWVyT3V0ZXI9c2V0VGltZW91dCh0aGlzLnBsYXlMZWZ0LHRoaXMucHJvcHMuaW50ZXJ2YWwpO1xyXG4gICAgICAgICAgICB0aGlzLmRpcmVjdGlvbj0neSc7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ2JvdHRvbSc6IFxyXG4gICAgICAgICAgICB0aGlzLnRpbWVyT3V0ZXI9c2V0VGltZW91dCh0aGlzLnBsYXlSaWdodCx0aGlzLnByb3BzLmludGVydmFsKTtcclxuICAgICAgICAgICAgdGhpcy5kaXJlY3Rpb249J3knO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9O1xyXG4gICAgfSxcclxuICAgIC8q5a+55LiN5ZCM5pa55ZCR5YGa55qE55u45bqU5qih5p2/5LiK5qC35byP55qE5aSE55CGKi9cclxuICAgIGRpcmVjdGlvbkhhbmRsZSA6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgaWYodGhpcy5kaXJlY3Rpb24gPT09ICd5Jyl7XHJcbiAgICAgICAgICAgIHJldHVybiB7dG9wIDogdGhpcy5zdGF0ZS5vZmZzZXREaXN0YW5jZSsncHgnLHdpZHRoIDogdGhpcy5wcm9wcy5pbWdXaWR0aCxoZWlnaHQgOiB0aGlzLnByb3BzLmltZ0hlaWdodCoodGhpcy5wcm9wcy5udW1iZXIrMil9O1xyXG4gICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtsZWZ0IDogdGhpcy5zdGF0ZS5vZmZzZXREaXN0YW5jZSsncHgnLHdpZHRoIDogdGhpcy5wcm9wcy5pbWdXaWR0aCoodGhpcy5wcm9wcy5udW1iZXIrMiksaGVpZ2h0IDogdGhpcy5wcm9wcy5pbWdIZWlnaHR9O1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICAvKum8oOagh+a7keWFpe+8jOa7keWHuiovXHJcbiAgICBtb3VzZUhhbmRsZSA6IGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgIGlmKGUudHlwZSA9PT0gJ21vdXNlb3Zlcicpe1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtwYXVzZSA6IHRydWV9KTtcclxuICAgICAgICB9ZWxzZSBpZihlLnR5cGUgPT09ICdtb3VzZWxlYXZlJyl7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3BhdXNlIDogZmFsc2V9KTtcclxuICAgICAgICAgICAgdGhpcy5hdXRvUGxheSgpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICAvKuWchueCueaYvuekuuaViOaenCovXHJcbiAgICBjaGVja0RvdHMgOiBmdW5jdGlvbihpbmRleCl7XHJcbiAgICAgICAgdmFyIGFjdGl2ZUluZGV4O1xyXG4gICAgICAgIGlmKHRoaXMuc3RhdGUuYWN0aXZlSW5kZXggPT09IHRoaXMucHJvcHMubnVtYmVyKzEpe1xyXG4gICAgICAgICAgICBhY3RpdmVJbmRleCA9IDE7XHJcbiAgICAgICAgfWVsc2UgaWYodGhpcy5zdGF0ZS5hY3RpdmVJbmRleCA9PT0gMCl7XHJcbiAgICAgICAgICAgIGFjdGl2ZUluZGV4ID0gdGhpcy5wcm9wcy5udW1iZXI7XHJcbiAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICBhY3RpdmVJbmRleCA9IHRoaXMuc3RhdGUuYWN0aXZlSW5kZXg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBpbmRleCsxID09PSBhY3RpdmVJbmRleD8gJ2RvdHMgYWN0aXZlJyA6ICdkb3RzJztcclxuICAgIH0sXHJcbiAgICAvKum8oOagh+a7keWFpeWchueCuSovXHJcbiAgICBkb3RzSG92ZXIgOiBmdW5jdGlvbihpbmRleCl7XHJcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLnRpbWVyKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHthY3RpdmVJbmRleDppbmRleCsxfSk7XHJcbiAgICAgICAgdGhpcy5wb3NpdGlvbigpO1xyXG4gICAgfSxcclxuICAgIC8q5ZCR5Y+z5oiW5ZCR5LiLKi9cclxuICAgIHBsYXlSaWdodDogZnVuY3Rpb24oaW5kZXhJbil7XHJcbiAgICAgICAgaWYodGhpcy5zdGF0ZS5mbGFnKXtcclxuICAgICAgICAgICAgdmFyIGluZGV4PWluZGV4SW4/aW5kZXhJbjp0aGlzLnN0YXRlLmFjdGl2ZUluZGV4KzE7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2FjdGl2ZUluZGV4OmluZGV4fSk7XHJcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24oKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgLyrlkJHlt6bmiJblkJHkuIoqL1xyXG4gICAgcGxheUxlZnQ6IGZ1bmN0aW9uKGluZGV4SW4pe1xyXG4gICAgICAgIGlmKHRoaXMuc3RhdGUuZmxhZyl7XHJcbiAgICAgICAgICAgIHZhciBpbmRleD1pbmRleEluP2luZGV4SW46dGhpcy5zdGF0ZS5hY3RpdmVJbmRleC0xO1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHthY3RpdmVJbmRleDppbmRleH0pO1xyXG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIC8q6L+Q5Yqo5pWI5p6cKi9cclxuICAgIHBvc2l0aW9uOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2ZsYWc6ZmFsc2V9KTtcclxuICAgICAgICB0aGlzLnRpbWVyID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgaWYodGhpcy5kaXJlY3Rpb24gPT09ICd4Jyl7XHJcbiAgICAgICAgICAgICAgICB2YXIgYm94RGlzdGFuY2UgPSB0aGlzLnByb3BzLmltZ1dpZHRoO1xyXG4gICAgICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgYm94RGlzdGFuY2UgPSB0aGlzLnByb3BzLmltZ0hlaWdodDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YXIgb2Zmc2V0RGlzdGFuY2UgPSB0aGlzLnN0YXRlLm9mZnNldERpc3RhbmNlO1xyXG4gICAgICAgICAgICBpZihNYXRoLmFicyhvZmZzZXREaXN0YW5jZS0oLWJveERpc3RhbmNlKnRoaXMuc3RhdGUuYWN0aXZlSW5kZXgpKSA8PSAwLjA5KXtcclxuICAgICAgICAgICAgICAgIG9mZnNldERpc3RhbmNlID0gLWJveERpc3RhbmNlKnRoaXMuc3RhdGUuYWN0aXZlSW5kZXg7XHJcbiAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKHRoaXMudGltZXIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZmxhZzp0cnVlfSk7XHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLnN0YXRlLmFjdGl2ZUluZGV4ID4gdGhpcy5wcm9wcy5udW1iZXIpe1xyXG4gICAgICAgICAgICAgICAgICAgIG9mZnNldERpc3RhbmNlID0gLWJveERpc3RhbmNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2FjdGl2ZUluZGV4IDogMX0pO1xyXG4gICAgICAgICAgICAgICAgfWVsc2UgaWYodGhpcy5zdGF0ZS5hY3RpdmVJbmRleCA9PT0gMCl7XHJcbiAgICAgICAgICAgICAgICAgICAgb2Zmc2V0RGlzdGFuY2UgPSAtYm94RGlzdGFuY2UqdGhpcy5wcm9wcy5udW1iZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7YWN0aXZlSW5kZXggOiB0aGlzLnByb3BzLm51bWJlcn0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7b2Zmc2V0RGlzdGFuY2U6b2Zmc2V0RGlzdGFuY2V9KTtcclxuICAgICAgICAgICAgICAgIGlmKCF0aGlzLnN0YXRlLnBhdXNlKXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmF1dG9QbGF5KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgb2Zmc2V0RGlzdGFuY2UgPSBvZmZzZXREaXN0YW5jZS0oYm94RGlzdGFuY2UqdGhpcy5zdGF0ZS5hY3RpdmVJbmRleC1NYXRoLmFicyhvZmZzZXREaXN0YW5jZSkpLzMwO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7b2Zmc2V0RGlzdGFuY2U6b2Zmc2V0RGlzdGFuY2V9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0uYmluZCh0aGlzKSwxMCk7XHJcbiAgICB9LFxyXG4gICAgLyrngrnlh7vlkJHlt6bmjInpkq4qL1xyXG4gICAgbGVmdDogZnVuY3Rpb24oKXtcclxuICAgICAgICB2YXIgb2xkSW5kZXg9dGhpcy5zdGF0ZS5hY3RpdmVJbmRleDtcclxuICAgICAgICB0aGlzLnBsYXlMZWZ0KG9sZEluZGV4LTEpO1xyXG4gICAgfSxcclxuICAgIC8q54K55Ye75ZCR5Y+z5oyJ6ZKuKi9cclxuICAgIHJpZ2h0OiBmdW5jdGlvbigpe1xyXG4gICAgICAgIHZhciBvbGRJbmRleD10aGlzLnN0YXRlLmFjdGl2ZUluZGV4O1xyXG4gICAgICAgIHRoaXMucGxheVJpZ2h0KG9sZEluZGV4KzEpO1xyXG4gICAgfSxcclxuICAgIHJlbmRlciA6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICByZXR1cm4gKDxkaXYgY2xhc3NOYW1lPXt0aGlzLnByb3BzLmJveFN0eWxlfSBzdHlsZT17e3dpZHRoOnRoaXMucHJvcHMuaW1nV2lkdGgsIGhlaWdodDp0aGlzLnByb3BzLmltZ0hlaWdodH19IG9uTW91c2VPdmVyPXt0aGlzLm1vdXNlSGFuZGxlfSBvbk1vdXNlTGVhdmU9e3RoaXMubW91c2VIYW5kbGV9PlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsZWZ0SWNvblwiIG9uQ2xpY2s9e3RoaXMubGVmdH0+PC9zcGFuPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJyaWdodEljb25cIiBvbkNsaWNrPXt0aGlzLnJpZ2h0fT48L3NwYW4+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZG90cy13cmFwXCI+XHJcbiAgICAgICAgICAgICAgICB7ICAgXHJcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuQ2hpbGRyZW4ubWFwKHRoaXMucHJvcHMuY2hpbGRyZW4sZnVuY3Rpb24oZWxlbSxpbmRleCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoPHNwYW4gY2xhc3NOYW1lPXtfdGhpcy5jaGVja0RvdHMoaW5kZXgpfSBvbk1vdXNlT3Zlcj17X3RoaXMuZG90c0hvdmVyLmJpbmQoX3RoaXMsaW5kZXgpfT48L3NwYW4+KTtcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPHVsIHN0eWxlPXt0aGlzLmRpcmVjdGlvbkhhbmRsZSgpfT5cclxuICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVuW3RoaXMucHJvcHMubnVtYmVyLTFdfVxyXG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XHJcbiAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlblswXX1cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICA8L2Rpdj4pO1xyXG4gICAgfVxyXG59KTtcclxudmFyIEx1bkJvQ29tcG9uZW50ID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xyXG4gICAgcHJvcHNUeXBlcyA6IHtcclxuICAgICAgICBsdW5ib09iamVjdCA6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcclxuICAgICAgICBpbWdBcnJheSA6IFJlYWN0LlByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkLFxyXG4gICAgICAgIGxpbmtBcnJheSA6IFJlYWN0LlByb3BUeXBlcy5hcnJheVxyXG4gICAgfSxcclxuICAgIHJlbmRlciA6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxMdW5Cb0NvbnRyb2wgaW50ZXJ2YWw9e3RoaXMucHJvcHMubHVuYm9PYmplY3QuaW50ZXJ2YWx9IG51bWJlcj17dGhpcy5wcm9wcy5sdW5ib09iamVjdC5udW1iZXJ9IGJveFN0eWxlPXt0aGlzLnByb3BzLmx1bmJvT2JqZWN0LmJveFN0eWxlfSBpbWdXaWR0aD17dGhpcy5wcm9wcy5sdW5ib09iamVjdC5pbWdXaWR0aH0gaW1nSGVpZ2h0PXt0aGlzLnByb3BzLmx1bmJvT2JqZWN0LmltZ0hlaWdodH0gZGlyZWN0aW9uPXt0aGlzLnByb3BzLmx1bmJvT2JqZWN0LmRpcmVjdGlvbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgeyAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5pbWdBcnJheS5tYXAoZnVuY3Rpb24oaXRlbSxpbmRleCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGxpIGtleT17aW5kZXh9PjxhIGhyZWY9e3RoaXMucHJvcHMubGlua0FycmF5W2luZGV4XX0+PGltZyB3aWR0aD17dGhpcy5wcm9wcy5sdW5ib09iamVjdC5pbWdXaWR0aH0gaGVpZ2h0PXt0aGlzLnByb3BzLmx1bmJvT2JqZWN0LmltZ0hlaWdodH0gc3JjPXtpdGVtfS8+PC9hPjwvbGk+O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LmJpbmQodGhpcykpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9MdW5Cb0NvbnRyb2w+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMdW5Cb0NvbXBvbmVudDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==