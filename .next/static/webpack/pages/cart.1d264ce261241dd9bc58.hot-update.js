webpackHotUpdate_N_E("pages/cart",{

/***/ "./pages/cart.tsx":
/*!************************!*\
  !*** ./pages/cart.tsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _components_CartItemList_CartItemList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/CartItemList/CartItemList */ "./components/CartItemList/CartItemList.tsx");
/* harmony import */ var _components_CartSummary_CartSummary__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/CartSummary/CartSummary */ "./components/CartSummary/CartSummary.tsx");
/* harmony import */ var _store_Cart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @store/Cart */ "./store/Cart.tsx");


var _jsxFileName = "/home/anthonyrangel/projects/platzi/avo-nextjs/pages/cart.tsx",
    _this = undefined,
    _s = $RefreshSig$();







var CartPage = function CartPage() {
  _s();

  var _useCart = Object(_store_Cart__WEBPACK_IMPORTED_MODULE_5__["useCart"])(),
      items = _useCart.items,
      count = _useCart.count;

  var _useCartMutations = Object(_store_Cart__WEBPACK_IMPORTED_MODULE_5__["useCartMutations"])(),
      removeFromCart = _useCartMutations.removeFromCart;

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "container",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_CartItemList_CartItemList__WEBPACK_IMPORTED_MODULE_3__["default"], {
        items: items,
        removeFromCart: removeFromCart
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Divider"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_CartSummary_CartSummary__WEBPACK_IMPORTED_MODULE_4__["default"], {
        totalAmount: count
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 5
  }, _this);
};

_s(CartPage, "KXqahP77gwPKbFZCEZBkUzMH7VI=", false, function () {
  return [_store_Cart__WEBPACK_IMPORTED_MODULE_5__["useCart"], _store_Cart__WEBPACK_IMPORTED_MODULE_5__["useCartMutations"]];
});

_c = CartPage;
/* harmony default export */ __webpack_exports__["default"] = (CartPage);

var _c;

$RefreshReg$(_c, "CartPage");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2FydC50c3giXSwibmFtZXMiOlsiQ2FydFBhZ2UiLCJ1c2VDYXJ0IiwiaXRlbXMiLCJjb3VudCIsInVzZUNhcnRNdXRhdGlvbnMiLCJyZW1vdmVGcm9tQ2FydCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUFBOztBQUFBLGlCQUNJQywyREFBTyxFQURYO0FBQUEsTUFDYkMsS0FEYSxZQUNiQSxLQURhO0FBQUEsTUFDTkMsS0FETSxZQUNOQSxLQURNOztBQUFBLDBCQUVNQyxvRUFBZ0IsRUFGdEI7QUFBQSxNQUViQyxjQUZhLHFCQUViQSxjQUZhOztBQUlyQixzQkFDRTtBQUFBLDJCQUNFO0FBQUssZUFBUyxFQUFDLFdBQWY7QUFBQSw4QkFDRSxxRUFBQyw2RUFBRDtBQUFjLGFBQUssRUFBRUgsS0FBckI7QUFBNEIsc0JBQWMsRUFBRUc7QUFBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBRUUscUVBQUMseURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGLGVBR0UscUVBQUMsMkVBQUQ7QUFBYSxtQkFBVyxFQUFFRjtBQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBU0QsQ0FiRDs7R0FBTUgsUTtVQUNxQkMsbUQsRUFDRUcsNEQ7OztLQUZ2QkosUTtBQWVTQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jYXJ0LjFkMjY0Y2UyNjEyNDFkZDliYzU4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBEaXZpZGVyIH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnXG5pbXBvcnQgQ2FydEl0ZW1MaXN0IGZyb20gJ0Bjb21wb25lbnRzL0NhcnRJdGVtTGlzdC9DYXJ0SXRlbUxpc3QnXG5pbXBvcnQgQ2FydFN1bW1hcnkgZnJvbSAnQGNvbXBvbmVudHMvQ2FydFN1bW1hcnkvQ2FydFN1bW1hcnknXG5pbXBvcnQgeyB1c2VDYXJ0LCB1c2VDYXJ0TXV0YXRpb25zIH0gZnJvbSAnQHN0b3JlL0NhcnQnXG5cbmNvbnN0IENhcnRQYWdlID0gKCkgPT4ge1xuICBjb25zdCB7IGl0ZW1zLCBjb3VudCB9ID0gdXNlQ2FydCgpXG4gIGNvbnN0IHsgcmVtb3ZlRnJvbUNhcnQgfSA9IHVzZUNhcnRNdXRhdGlvbnMoKVxuXG4gIHJldHVybiAoXG4gICAgPG1haW4+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICA8Q2FydEl0ZW1MaXN0IGl0ZW1zPXtpdGVtc30gcmVtb3ZlRnJvbUNhcnQ9e3JlbW92ZUZyb21DYXJ0fSAvPlxuICAgICAgICA8RGl2aWRlciAvPlxuICAgICAgICA8Q2FydFN1bW1hcnkgdG90YWxBbW91bnQ9e2NvdW50fSAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9tYWluPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IENhcnRQYWdlXG4iXSwic291cmNlUm9vdCI6IiJ9