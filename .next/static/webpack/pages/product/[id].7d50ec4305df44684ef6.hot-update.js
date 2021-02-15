webpackHotUpdate_N_E("pages/product/[id]",{

/***/ "./components/Footer/Footer.tsx":
false,

/***/ "./components/Header/Header.tsx":
false,

/***/ "./components/Layout/Layout.tsx":
false,

/***/ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js":
false,

/***/ "./node_modules/next/dist/client/link.js":
false,

/***/ "./node_modules/next/dist/client/use-intersection.js":
false,

/***/ "./node_modules/next/dist/compiled/css-loader/api.js":
false,

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./styles/components/Header.module.scss":
false,

/***/ "./node_modules/next/link.js":
false,

/***/ "./pages/product/[id].tsx":
/*!********************************!*\
  !*** ./pages/product/[id].tsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_ProductSummary_ProductSummary__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/ProductSummary/ProductSummary */ "./components/ProductSummary/ProductSummary.tsx");



var _jsxFileName = "/home/anthonyrangel/projects/platzi/avo-nextjs/pages/product/[id].tsx",
    _this = undefined,
    _s = $RefreshSig$();





var ProductPage = function ProductPage() {
  _s();

  var _useRouter = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])(),
      query = _useRouter.query;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      product = _useState[0],
      setProduct = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (query.id) {
      window.fetch("/api/avo/".concat(query.id)).then(function (response) {
        return response.json();
      }).then(function (data) {
        setProduct(data);
      });
    }
  }, [query.id]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: product == null ? null : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_ProductSummary_ProductSummary__WEBPACK_IMPORTED_MODULE_3__["default"], {
      product: product
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 33
    }, _this)
  }, void 0, false);
};

_s(ProductPage, "HaLw+FSgmaxuMih0UOQiqXlS8ok=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"]];
});

_c = ProductPage;
/* harmony default export */ __webpack_exports__["default"] = (ProductPage);

var _c;

$RefreshReg$(_c, "ProductPage");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./styles/components/Header.module.scss":
false

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZHVjdC8udHN4Il0sIm5hbWVzIjpbIlByb2R1Y3RQYWdlIiwidXNlUm91dGVyIiwicXVlcnkiLCJ1c2VTdGF0ZSIsInByb2R1Y3QiLCJzZXRQcm9kdWN0IiwidXNlRWZmZWN0IiwiaWQiLCJ3aW5kb3ciLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUdBOztBQUVBLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFBQTs7QUFBQSxtQkFDTkMsNkRBQVMsRUFESDtBQUFBLE1BQ2hCQyxLQURnQixjQUNoQkEsS0FEZ0I7O0FBQUEsa0JBRU1DLHNEQUFRLENBQWtCLElBQWxCLENBRmQ7QUFBQSxNQUVqQkMsT0FGaUI7QUFBQSxNQUVSQyxVQUZROztBQUl4QkMseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBSUosS0FBSyxDQUFDSyxFQUFWLEVBQWM7QUFDWkMsWUFBTSxDQUNIQyxLQURILG9CQUNxQlAsS0FBSyxDQUFDSyxFQUQzQixHQUVHRyxJQUZILENBRVEsVUFBQ0MsUUFBRDtBQUFBLGVBQWNBLFFBQVEsQ0FBQ0MsSUFBVCxFQUFkO0FBQUEsT0FGUixFQUdHRixJQUhILENBR1EsVUFBQ0csSUFBRCxFQUFvQjtBQUN4QlIsa0JBQVUsQ0FBQ1EsSUFBRCxDQUFWO0FBQ0QsT0FMSDtBQU1EO0FBQ0YsR0FUUSxFQVNOLENBQUNYLEtBQUssQ0FBQ0ssRUFBUCxDQVRNLENBQVQ7QUFXQSxzQkFDRTtBQUFBLGNBQ0dILE9BQU8sSUFBSSxJQUFYLEdBQWtCLElBQWxCLGdCQUF5QixxRUFBQyxpRkFBRDtBQUFnQixhQUFPLEVBQUVBO0FBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFENUIsbUJBREY7QUFLRCxDQXBCRDs7R0FBTUosVztVQUNjQyxxRDs7O0tBRGRELFc7QUFzQlNBLDBFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2R1Y3QvW2lkXS43ZDUwZWM0MzA1ZGY0NDY4NGVmNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuXG5pbXBvcnQgTGF5b3V0IGZyb20gJ0Bjb21wb25lbnRzL0xheW91dC9MYXlvdXQnXG5pbXBvcnQgUHJvZHVjdFN1bW1hcnkgZnJvbSAnQGNvbXBvbmVudHMvUHJvZHVjdFN1bW1hcnkvUHJvZHVjdFN1bW1hcnknXG5cbmNvbnN0IFByb2R1Y3RQYWdlID0gKCkgPT4ge1xuICBjb25zdCB7IHF1ZXJ5IH0gPSB1c2VSb3V0ZXIoKVxuICBjb25zdCBbcHJvZHVjdCwgc2V0UHJvZHVjdF0gPSB1c2VTdGF0ZTxUUHJvZHVjdCB8IG51bGw+KG51bGwpXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAocXVlcnkuaWQpIHtcbiAgICAgIHdpbmRvd1xuICAgICAgICAuZmV0Y2goYC9hcGkvYXZvLyR7cXVlcnkuaWR9YClcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgIC50aGVuKChkYXRhOiBUUHJvZHVjdCkgPT4ge1xuICAgICAgICAgIHNldFByb2R1Y3QoZGF0YSlcbiAgICAgICAgfSlcbiAgICB9XG4gIH0sIFtxdWVyeS5pZF0pXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge3Byb2R1Y3QgPT0gbnVsbCA/IG51bGwgOiA8UHJvZHVjdFN1bW1hcnkgcHJvZHVjdD17cHJvZHVjdH0gLz59XG4gICAgPC8+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdFBhZ2VcbiJdLCJzb3VyY2VSb290IjoiIn0=