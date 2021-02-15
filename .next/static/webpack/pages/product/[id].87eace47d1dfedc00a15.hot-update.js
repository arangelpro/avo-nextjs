webpackHotUpdate_N_E("pages/product/[id]",{

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
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "container",
      children: product == null ? null : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_ProductSummary_ProductSummary__WEBPACK_IMPORTED_MODULE_3__["default"], {
        product: product
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 35
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 5
  }, _this);
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZHVjdC8udHN4Il0sIm5hbWVzIjpbIlByb2R1Y3RQYWdlIiwidXNlUm91dGVyIiwicXVlcnkiLCJ1c2VTdGF0ZSIsInByb2R1Y3QiLCJzZXRQcm9kdWN0IiwidXNlRWZmZWN0IiwiaWQiLCJ3aW5kb3ciLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7O0FBRUEsSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUFBOztBQUFBLG1CQUNOQyw2REFBUyxFQURIO0FBQUEsTUFDaEJDLEtBRGdCLGNBQ2hCQSxLQURnQjs7QUFBQSxrQkFFTUMsc0RBQVEsQ0FBa0IsSUFBbEIsQ0FGZDtBQUFBLE1BRWpCQyxPQUZpQjtBQUFBLE1BRVJDLFVBRlE7O0FBSXhCQyx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFJSixLQUFLLENBQUNLLEVBQVYsRUFBYztBQUNaQyxZQUFNLENBQ0hDLEtBREgsb0JBQ3FCUCxLQUFLLENBQUNLLEVBRDNCLEdBRUdHLElBRkgsQ0FFUSxVQUFDQyxRQUFEO0FBQUEsZUFBY0EsUUFBUSxDQUFDQyxJQUFULEVBQWQ7QUFBQSxPQUZSLEVBR0dGLElBSEgsQ0FHUSxVQUFDRyxJQUFELEVBQW9CO0FBQ3hCUixrQkFBVSxDQUFDUSxJQUFELENBQVY7QUFDRCxPQUxIO0FBTUQ7QUFDRixHQVRRLEVBU04sQ0FBQ1gsS0FBSyxDQUFDSyxFQUFQLENBVE0sQ0FBVDtBQVdBLHNCQUNFO0FBQUEsMkJBQ0U7QUFBSyxlQUFTLEVBQUMsV0FBZjtBQUFBLGdCQUNHSCxPQUFPLElBQUksSUFBWCxHQUFrQixJQUFsQixnQkFBeUIscUVBQUMsaUZBQUQ7QUFBZ0IsZUFBTyxFQUFFQTtBQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRDVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFPRCxDQXRCRDs7R0FBTUosVztVQUNjQyxxRDs7O0tBRGRELFc7QUF3QlNBLDBFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2R1Y3QvW2lkXS44N2VhY2U0N2QxZGZlZGMwMGExNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuXG5pbXBvcnQgUHJvZHVjdFN1bW1hcnkgZnJvbSAnQGNvbXBvbmVudHMvUHJvZHVjdFN1bW1hcnkvUHJvZHVjdFN1bW1hcnknXG5cbmNvbnN0IFByb2R1Y3RQYWdlID0gKCkgPT4ge1xuICBjb25zdCB7IHF1ZXJ5IH0gPSB1c2VSb3V0ZXIoKVxuICBjb25zdCBbcHJvZHVjdCwgc2V0UHJvZHVjdF0gPSB1c2VTdGF0ZTxUUHJvZHVjdCB8IG51bGw+KG51bGwpXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAocXVlcnkuaWQpIHtcbiAgICAgIHdpbmRvd1xuICAgICAgICAuZmV0Y2goYC9hcGkvYXZvLyR7cXVlcnkuaWR9YClcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgIC50aGVuKChkYXRhOiBUUHJvZHVjdCkgPT4ge1xuICAgICAgICAgIHNldFByb2R1Y3QoZGF0YSlcbiAgICAgICAgfSlcbiAgICB9XG4gIH0sIFtxdWVyeS5pZF0pXG5cbiAgcmV0dXJuIChcbiAgICA8bWFpbj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgIHtwcm9kdWN0ID09IG51bGwgPyBudWxsIDogPFByb2R1Y3RTdW1tYXJ5IHByb2R1Y3Q9e3Byb2R1Y3R9IC8+fVxuICAgICAgPC9kaXY+XG4gICAgPC9tYWluPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RQYWdlXG4iXSwic291cmNlUm9vdCI6IiJ9