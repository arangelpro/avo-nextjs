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
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_CartItemList_CartItemList__WEBPACK_IMPORTED_MODULE_3__["default"], {
      items: items,
      removeFromCart: removeFromCart
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Divider"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_CartSummary_CartSummary__WEBPACK_IMPORTED_MODULE_4__["default"], {
      totalAmount: count
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 13,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2FydC50c3giXSwibmFtZXMiOlsiQ2FydFBhZ2UiLCJ1c2VDYXJ0IiwiaXRlbXMiLCJjb3VudCIsInVzZUNhcnRNdXRhdGlvbnMiLCJyZW1vdmVGcm9tQ2FydCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUFBOztBQUFBLGlCQUNJQywyREFBTyxFQURYO0FBQUEsTUFDYkMsS0FEYSxZQUNiQSxLQURhO0FBQUEsTUFDTkMsS0FETSxZQUNOQSxLQURNOztBQUFBLDBCQUVNQyxvRUFBZ0IsRUFGdEI7QUFBQSxNQUViQyxjQUZhLHFCQUViQSxjQUZhOztBQUlyQixzQkFDRTtBQUFBLDRCQUNFLHFFQUFDLDZFQUFEO0FBQWMsV0FBSyxFQUFFSCxLQUFyQjtBQUE0QixvQkFBYyxFQUFFRztBQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFFRSxxRUFBQyx5REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkYsZUFHRSxxRUFBQywyRUFBRDtBQUFhLGlCQUFXLEVBQUVGO0FBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQU9ELENBWEQ7O0dBQU1ILFE7VUFDcUJDLG1ELEVBQ0VHLDREOzs7S0FGdkJKLFE7QUFhU0EsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY2FydC4xNTI4ZGU3Mzk4ZjI3Y2NmMzUxNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgRGl2aWRlciB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0J1xuaW1wb3J0IExheW91dCBmcm9tICdAY29tcG9uZW50cy9MYXlvdXQvTGF5b3V0J1xuaW1wb3J0IENhcnRJdGVtTGlzdCBmcm9tICdAY29tcG9uZW50cy9DYXJ0SXRlbUxpc3QvQ2FydEl0ZW1MaXN0J1xuaW1wb3J0IENhcnRTdW1tYXJ5IGZyb20gJ0Bjb21wb25lbnRzL0NhcnRTdW1tYXJ5L0NhcnRTdW1tYXJ5J1xuaW1wb3J0IHsgdXNlQ2FydCwgdXNlQ2FydE11dGF0aW9ucyB9IGZyb20gJ0BzdG9yZS9DYXJ0J1xuXG5jb25zdCBDYXJ0UGFnZSA9ICgpID0+IHtcbiAgY29uc3QgeyBpdGVtcywgY291bnQgfSA9IHVzZUNhcnQoKVxuICBjb25zdCB7IHJlbW92ZUZyb21DYXJ0IH0gPSB1c2VDYXJ0TXV0YXRpb25zKClcblxuICByZXR1cm4gKFxuICAgIDxtYWluPlxuICAgICAgPENhcnRJdGVtTGlzdCBpdGVtcz17aXRlbXN9IHJlbW92ZUZyb21DYXJ0PXtyZW1vdmVGcm9tQ2FydH0gLz5cbiAgICAgIDxEaXZpZGVyIC8+XG4gICAgICA8Q2FydFN1bW1hcnkgdG90YWxBbW91bnQ9e2NvdW50fSAvPlxuICAgIDwvbWFpbj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBDYXJ0UGFnZVxuIl0sInNvdXJjZVJvb3QiOiIifQ==