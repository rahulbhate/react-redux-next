webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_actions_actionTypes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../redux/actions/actionTypes */ "./redux/actions/actionTypes.js");


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
// pages/index




var Index = function Index(props) {
  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Index Page"
  }, __jsx("div", null, __jsx("h2", {
    className: "title is-2"
  }, "Authentication with Next.js and JWT"), __jsx("p", null, "A proof of concept app, demonstrating the authentication of Next.js application using JWT."), __jsx("span", null, _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(props.count)), __jsx("button", {
    onClick: function onClick() {
      props.incrementCounter();
    }
  }, "Increment"), __jsx("button", {
    onClick: function onClick() {
      props.decrementCounter();
    }
  }, "Increment")));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(function (state) {
  return state.count;
}, {
  incrementCounter: _redux_actions_actionTypes__WEBPACK_IMPORTED_MODULE_4__["incrementCounter"],
  decrementCounter: _redux_actions_actionTypes__WEBPACK_IMPORTED_MODULE_4__["decrementCounter"]
})(Index));

/***/ })

})
//# sourceMappingURL=index.js.eecc9dc72b45abe79e7c.hot-update.js.map