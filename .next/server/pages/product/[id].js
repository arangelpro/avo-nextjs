module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/product/[id].tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Loading/Loading.tsx":
/*!****************************************!*\
  !*** ./components/Loading/Loading.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "/home/anthonyrangel/projects/platzi/avo-nextjs/components/Loading/Loading.tsx";



const Loading = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Loader"], {
      active: true,
      inline: "centered",
      children: "Loading..."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 4
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 3
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Loading);

/***/ }),

/***/ "./components/ProductSummary/AddToCart.tsx":
/*!*************************************************!*\
  !*** ./components/ProductSummary/AddToCart.tsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store_Cart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @store/Cart */ "./store/Cart.tsx");


var _jsxFileName = "/home/anthonyrangel/projects/platzi/avo-nextjs/components/ProductSummary/AddToCart.tsx";




// Fake a server Response, we don't care on this project
// about data persistency, but you may add it :)
const addToCartRequest = () => new Promise((resolve, reject) => {
  window.setTimeout(resolve, 600);
});

const validate = quantity => {
  let error = '';
  if (quantity < 1) error = "Can't be blank";
  return error;
};

const AddToCart = ({
  product
}) => {
  const {
    0: loading,
    1: setLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: error,
    1: setError
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('');
  const {
    0: quantity,
    1: setQuantity
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(1);
  const {
    0: visible,
    1: setVisible
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    addToCart
  } = Object(_store_Cart__WEBPACK_IMPORTED_MODULE_3__["useCartMutations"])();

  const toggleMessage = () => {
    setTimeout(() => {
      setVisible(false);
    }, 1000);
  };

  const handleSubmit = async () => {
    const error = validate(quantity);
    setError(error);

    if (!error) {
      setLoading(true);
      addToCartRequest().then(() => {
        addToCart(product, quantity);
        setLoading(false);
        setQuantity(quantity);
        setVisible(true);
        toggleMessage();
      }).catch(err => {
        setError(`Error: ${err}` || 'Something went wrong');
        setLoading(false);
      });
    }
  };

  const handleChange = ({
    target
  }) => setQuantity(parseInt(target.value, 10));

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Input"], {
      type: "number",
      placeholder: "Quantity",
      value: quantity,
      min: 1,
      step: 1,
      error: !!error,
      onChange: handleChange,
      action: {
        color: 'green',
        content: 'Add to Cart',
        icon: 'plus cart',
        onClick: handleSubmit,
        loading,
        disabled: loading
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 7
    }, undefined), error && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      style: {
        color: 'red',
        position: 'absolute'
      },
      children: error
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 9
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Transition"], {
      duration: {
        hide: 500,
        show: 500
      },
      visible: visible,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        style: {
          color: 'green',
          position: 'absolute'
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
          name: "check"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 11
        }, undefined), "Added to cart"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 7
    }, undefined)]
  }, void 0, true);
};

/* harmony default export */ __webpack_exports__["default"] = (AddToCart);

/***/ }),

/***/ "./components/ProductSummary/ProductAttributes.tsx":
/*!*********************************************************!*\
  !*** ./components/ProductSummary/ProductAttributes.tsx ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "/home/anthonyrangel/projects/platzi/avo-nextjs/components/ProductSummary/ProductAttributes.tsx";


function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const ProductAttributes = (_ref) => {
  let {
    description
  } = _ref,
      otherAttributes = _objectWithoutProperties(_ref, ["description"]);

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
    className: "jsx-4249965129" + " " + "container",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Header"], {
      as: "h3",
      children: "About this avocado"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      className: "jsx-4249965129",
      children: description
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Divider"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 5
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Table"], {
      celled: true,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Table"].Header, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Table"].Row, {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Table"].HeaderCell, {
            colSpan: "2",
            children: "Attributes"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 17,
            columnNumber: 11
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 9
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 7
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Table"].Body, {
        children: Object.keys(otherAttributes).map(key => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Table"].Row, {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Table"].Cell, {
            className: "attr-name",
            children: key
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Table"].Cell, {
            children: otherAttributes[key]
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 25,
            columnNumber: 13
          }, undefined)]
        }, key, true, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 11
        }, undefined))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 7
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 5
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
      id: "4249965129",
      children: ".container.jsx-4249965129 .attr-name{text-transform:capitalize;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FudGhvbnlyYW5nZWwvcHJvamVjdHMvcGxhdHppL2F2by1uZXh0anMvY29tcG9uZW50cy9Qcm9kdWN0U3VtbWFyeS9Qcm9kdWN0QXR0cmlidXRlcy50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0NnQixBQUdtQywwQkFDNUIiLCJmaWxlIjoiL2hvbWUvYW50aG9ueXJhbmdlbC9wcm9qZWN0cy9wbGF0emkvYXZvLW5leHRqcy9jb21wb25lbnRzL1Byb2R1Y3RTdW1tYXJ5L1Byb2R1Y3RBdHRyaWJ1dGVzLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEhlYWRlciwgRGl2aWRlciwgVGFibGUgfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCdcblxuY29uc3QgUHJvZHVjdEF0dHJpYnV0ZXMgPSAoe1xuICBkZXNjcmlwdGlvbixcbiAgLi4ub3RoZXJBdHRyaWJ1dGVzXG59OiBUUHJvZHVjdEF0dHJpYnV0ZXMpID0+IChcbiAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgPEhlYWRlciBhcz1cImgzXCI+QWJvdXQgdGhpcyBhdm9jYWRvPC9IZWFkZXI+XG4gICAgPHA+e2Rlc2NyaXB0aW9ufTwvcD5cblxuICAgIDxEaXZpZGVyIC8+XG5cbiAgICA8VGFibGUgY2VsbGVkPlxuICAgICAgPFRhYmxlLkhlYWRlcj5cbiAgICAgICAgPFRhYmxlLlJvdz5cbiAgICAgICAgICA8VGFibGUuSGVhZGVyQ2VsbCBjb2xTcGFuPVwiMlwiPkF0dHJpYnV0ZXM8L1RhYmxlLkhlYWRlckNlbGw+XG4gICAgICAgIDwvVGFibGUuUm93PlxuICAgICAgPC9UYWJsZS5IZWFkZXI+XG5cbiAgICAgIDxUYWJsZS5Cb2R5PlxuICAgICAgICB7T2JqZWN0LmtleXMob3RoZXJBdHRyaWJ1dGVzKS5tYXAoKGtleSkgPT4gKFxuICAgICAgICAgIDxUYWJsZS5Sb3cga2V5PXtrZXl9PlxuICAgICAgICAgICAgPFRhYmxlLkNlbGwgY2xhc3NOYW1lPVwiYXR0ci1uYW1lXCI+e2tleX08L1RhYmxlLkNlbGw+XG4gICAgICAgICAgICA8VGFibGUuQ2VsbD5cbiAgICAgICAgICAgICAge290aGVyQXR0cmlidXRlc1trZXkgYXMga2V5b2YgdHlwZW9mIG90aGVyQXR0cmlidXRlc119XG4gICAgICAgICAgICA8L1RhYmxlLkNlbGw+XG4gICAgICAgICAgPC9UYWJsZS5Sb3c+XG4gICAgICAgICkpfVxuICAgICAgPC9UYWJsZS5Cb2R5PlxuICAgIDwvVGFibGU+XG5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAuY29udGFpbmVyIDpnbG9iYWwoLmF0dHItbmFtZSkge1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvc2VjdGlvbj5cbilcblxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdEF0dHJpYnV0ZXNcbiJdfQ== */\n/*@ sourceURL=/home/anthonyrangel/projects/platzi/avo-nextjs/components/ProductSummary/ProductAttributes.tsx */"
    }, void 0, false, void 0, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 3
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (ProductAttributes);

/***/ }),

/***/ "./components/ProductSummary/ProductSummary.tsx":
/*!******************************************************!*\
  !*** ./components/ProductSummary/ProductSummary.tsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _AddToCart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AddToCart */ "./components/ProductSummary/AddToCart.tsx");
/* harmony import */ var _ProductAttributes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ProductAttributes */ "./components/ProductSummary/ProductAttributes.tsx");


var _jsxFileName = "/home/anthonyrangel/projects/platzi/avo-nextjs/components/ProductSummary/ProductSummary.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const ProductSummary = ({
  product
}) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Item"].Group, {
    as: "section",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Item"], {
      style: {
        alignItems: 'center'
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Item"].Image, {
        size: "medium",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: product.image,
          alt: product.name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Item"].Content, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Item"].Header, {
          as: "h1",
          children: product.name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Item"].Description, {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: product.price
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 21,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Label"], {
            children: `SKU: ${product.sku}`
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Item"].Extra, {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_AddToCart__WEBPACK_IMPORTED_MODULE_3__["default"], {
            product: product
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 25,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 5
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ProductAttributes__WEBPACK_IMPORTED_MODULE_4__["default"], _objectSpread({}, product.attributes), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 5
  }, undefined)]
}, void 0, true);

/* harmony default export */ __webpack_exports__["default"] = (ProductSummary);

/***/ }),

/***/ "./pages/product/[id].tsx":
/*!********************************!*\
  !*** ./pages/product/[id].tsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_ProductSummary_ProductSummary__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/ProductSummary/ProductSummary */ "./components/ProductSummary/ProductSummary.tsx");
/* harmony import */ var _components_Loading_Loading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/Loading/Loading */ "./components/Loading/Loading.tsx");

var _jsxFileName = "/home/anthonyrangel/projects/platzi/avo-nextjs/pages/product/[id].tsx";





const ProductPage = () => {
  const {
    query
  } = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  const {
    0: product,
    1: setProduct
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (query.id) {
      window.fetch(`/api/avo/${query.id}`).then(response => response.json()).then(data => {
        setProduct(data);
      });
    }
  }, [query.id]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "container",
      children: product == null ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Loading_Loading__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 28
      }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_ProductSummary_ProductSummary__WEBPACK_IMPORTED_MODULE_3__["default"], {
        product: product
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 42
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (ProductPage);

/***/ }),

/***/ "./store/Cart.tsx":
/*!************************!*\
  !*** ./store/Cart.tsx ***!
  \************************/
/*! exports provided: useCart, useCartMutations, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useCart", function() { return useCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useCartMutations", function() { return useCartMutations; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "/home/anthonyrangel/projects/platzi/avo-nextjs/store/Cart.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const defaultState = {};
const CartItemsContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createContext(defaultState);
const CartDispatchContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createContext(() => {});

const CartProvider = ({
  children
}) => {
  const {
    0: state,
    1: dispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useReducer"])(cartReducers, defaultState);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(CartItemsContext.Provider, {
    value: state,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(CartDispatchContext.Provider, {
      value: dispatch,
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 5
  }, undefined);
};

function cartReducers(state, {
  item,
  type,
  quantity: qtyToAdd = 1
}) {
  const existingCartItem = state[item.id];

  switch (type) {
    case 'add':
      {
        if (existingCartItem != undefined) {
          const quantity = existingCartItem.quantity + qtyToAdd;
          return _objectSpread(_objectSpread({}, state), {}, {
            [item.id]: _objectSpread(_objectSpread({}, existingCartItem), {}, {
              quantity
            })
          });
        }

        return _objectSpread(_objectSpread({}, state), {}, {
          [item.id]: _objectSpread(_objectSpread({}, item), {}, {
            quantity: qtyToAdd
          })
        });
      }

    case 'remove':
      {
        if (existingCartItem == undefined) {
          return state;
        }

        const quantity = existingCartItem.quantity - 1;

        if (quantity > 0) {
          return _objectSpread(_objectSpread({}, state), {}, {
            [item.id]: _objectSpread(_objectSpread({}, existingCartItem), {}, {
              quantity
            })
          });
        }

        const newCartItems = _objectSpread({}, state);

        delete newCartItems[item.id];
        return newCartItems;
      }

    default:
      {
        throw new Error(`Unhandled action type: ${type}`);
      }
  }
}

const getCartSubTotal = (sum, item) => {
  sum += item.price * item.quantity;
  return sum;
};

const getCartCount = (sum, item) => sum + item.quantity;
/**
 * Hey there insatiably brain,
 * Are you interested in this pattern where the Context values are
 * exposed without actually provinding access to the Context itself :)
 * https://kentcdodds.com/blog/how-to-use-react-context-effectively
 */


const useCart = () => {
  const itemsById = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(CartItemsContext);
  const items = Object.values(itemsById); // Not familiar with Array.reduce? :)
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce

  const count = items.reduce(getCartCount, 0);
  const subTotal = items.reduce(getCartSubTotal, 0);
  return {
    items,
    itemsById,
    count,
    subTotal
  };
};
const useCartMutations = () => {
  const dispatch = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(CartDispatchContext);

  const addToCart = (product, quantity) => dispatch({
    type: 'add',
    item: product,
    quantity
  });

  const removeFromCart = product => dispatch({
    type: 'remove',
    item: product
  });

  return {
    addToCart,
    removeFromCart
  };
};
/* harmony default export */ __webpack_exports__["default"] = (CartProvider);

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

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "semantic-ui-react":
/*!************************************!*\
  !*** external "semantic-ui-react" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Mb2FkaW5nL0xvYWRpbmcudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvUHJvZHVjdFN1bW1hcnkvQWRkVG9DYXJ0LnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Byb2R1Y3RTdW1tYXJ5L1Byb2R1Y3RBdHRyaWJ1dGVzLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Byb2R1Y3RTdW1tYXJ5L1Byb2R1Y3RTdW1tYXJ5LnRzeCIsIndlYnBhY2s6Ly8vLi9wYWdlcy9wcm9kdWN0Ly50c3giLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvQ2FydC50c3giLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInNlbWFudGljLXVpLXJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3R5bGVkLWpzeC9zdHlsZVwiIl0sIm5hbWVzIjpbIkxvYWRpbmciLCJhZGRUb0NhcnRSZXF1ZXN0IiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJ3aW5kb3ciLCJzZXRUaW1lb3V0IiwidmFsaWRhdGUiLCJxdWFudGl0eSIsImVycm9yIiwiQWRkVG9DYXJ0IiwicHJvZHVjdCIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwidXNlU3RhdGUiLCJzZXRFcnJvciIsInNldFF1YW50aXR5IiwidmlzaWJsZSIsInNldFZpc2libGUiLCJhZGRUb0NhcnQiLCJ1c2VDYXJ0TXV0YXRpb25zIiwidG9nZ2xlTWVzc2FnZSIsImhhbmRsZVN1Ym1pdCIsInRoZW4iLCJjYXRjaCIsImVyciIsImhhbmRsZUNoYW5nZSIsInRhcmdldCIsInBhcnNlSW50IiwidmFsdWUiLCJjb2xvciIsImNvbnRlbnQiLCJpY29uIiwib25DbGljayIsImRpc2FibGVkIiwicG9zaXRpb24iLCJoaWRlIiwic2hvdyIsIlByb2R1Y3RBdHRyaWJ1dGVzIiwiZGVzY3JpcHRpb24iLCJvdGhlckF0dHJpYnV0ZXMiLCJPYmplY3QiLCJrZXlzIiwibWFwIiwia2V5IiwiUHJvZHVjdFN1bW1hcnkiLCJhbGlnbkl0ZW1zIiwiaW1hZ2UiLCJuYW1lIiwicHJpY2UiLCJza3UiLCJhdHRyaWJ1dGVzIiwiUHJvZHVjdFBhZ2UiLCJxdWVyeSIsInVzZVJvdXRlciIsInNldFByb2R1Y3QiLCJ1c2VFZmZlY3QiLCJpZCIsImZldGNoIiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSIsImRlZmF1bHRTdGF0ZSIsIkNhcnRJdGVtc0NvbnRleHQiLCJSZWFjdCIsImNyZWF0ZUNvbnRleHQiLCJDYXJ0RGlzcGF0Y2hDb250ZXh0IiwiQ2FydFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJzdGF0ZSIsImRpc3BhdGNoIiwidXNlUmVkdWNlciIsImNhcnRSZWR1Y2VycyIsIml0ZW0iLCJ0eXBlIiwicXR5VG9BZGQiLCJleGlzdGluZ0NhcnRJdGVtIiwidW5kZWZpbmVkIiwibmV3Q2FydEl0ZW1zIiwiRXJyb3IiLCJnZXRDYXJ0U3ViVG90YWwiLCJzdW0iLCJnZXRDYXJ0Q291bnQiLCJ1c2VDYXJ0IiwiaXRlbXNCeUlkIiwidXNlQ29udGV4dCIsIml0ZW1zIiwidmFsdWVzIiwiY291bnQiLCJyZWR1Y2UiLCJzdWJUb3RhbCIsInJlbW92ZUZyb21DYXJ0Il0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NB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LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9wcm9kdWN0L1tpZF0udHN4XCIpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExvYWRlciB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0J1xuXG5jb25zdCBMb2FkaW5nID0gKCkgPT4ge1xuXHRyZXR1cm4gKFxuXHRcdDxkaXY+XG5cdFx0XHQ8TG9hZGVyIGFjdGl2ZSBpbmxpbmU9J2NlbnRlcmVkJz5Mb2FkaW5nLi4uPC9Mb2FkZXI+XG5cdFx0PC9kaXY+XG5cdCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMb2FkaW5nO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBJbnB1dCwgSWNvbiwgVHJhbnNpdGlvbiB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0J1xuaW1wb3J0IHsgdXNlQ2FydE11dGF0aW9ucyB9IGZyb20gJ0BzdG9yZS9DYXJ0J1xuXG50eXBlIEFkZFRvQ2FydFByb3BzID0ge1xuICBwcm9kdWN0OiBUUHJvZHVjdFxufVxuXG4vLyBGYWtlIGEgc2VydmVyIFJlc3BvbnNlLCB3ZSBkb24ndCBjYXJlIG9uIHRoaXMgcHJvamVjdFxuLy8gYWJvdXQgZGF0YSBwZXJzaXN0ZW5jeSwgYnV0IHlvdSBtYXkgYWRkIGl0IDopXG5jb25zdCBhZGRUb0NhcnRSZXF1ZXN0ID0gKCkgPT5cbiAgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIHdpbmRvdy5zZXRUaW1lb3V0KHJlc29sdmUsIDYwMClcbiAgfSlcblxuY29uc3QgdmFsaWRhdGUgPSAocXVhbnRpdHk6IG51bWJlcikgPT4ge1xuICBsZXQgZXJyb3IgPSAnJ1xuICBpZiAocXVhbnRpdHkgPCAxKSBlcnJvciA9IFwiQ2FuJ3QgYmUgYmxhbmtcIlxuXG4gIHJldHVybiBlcnJvclxufVxuXG5jb25zdCBBZGRUb0NhcnQgPSAoeyBwcm9kdWN0IH06IEFkZFRvQ2FydFByb3BzKSA9PiB7XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKCcnKVxuICBjb25zdCBbcXVhbnRpdHksIHNldFF1YW50aXR5XSA9IHVzZVN0YXRlKDEpXG4gIGNvbnN0IFt2aXNpYmxlLCBzZXRWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCB7IGFkZFRvQ2FydCB9ID0gdXNlQ2FydE11dGF0aW9ucygpXG5cbiAgY29uc3QgdG9nZ2xlTWVzc2FnZSA9ICgpID0+IHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHNldFZpc2libGUoZmFsc2UpXG4gICAgfSwgMTAwMClcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBlcnJvciA9IHZhbGlkYXRlKHF1YW50aXR5KVxuICAgIHNldEVycm9yKGVycm9yKVxuXG4gICAgaWYgKCFlcnJvcikge1xuICAgICAgc2V0TG9hZGluZyh0cnVlKVxuICAgICAgYWRkVG9DYXJ0UmVxdWVzdCgpXG4gICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICBhZGRUb0NhcnQocHJvZHVjdCwgcXVhbnRpdHkpXG4gICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSlcbiAgICAgICAgICBzZXRRdWFudGl0eShxdWFudGl0eSlcbiAgICAgICAgICBzZXRWaXNpYmxlKHRydWUpXG4gICAgICAgICAgdG9nZ2xlTWVzc2FnZSgpXG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyOiBFcnJvcikgPT4ge1xuICAgICAgICAgIHNldEVycm9yKGBFcnJvcjogJHtlcnJ9YCB8fCAnU29tZXRoaW5nIHdlbnQgd3JvbmcnKVxuICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpXG4gICAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKHsgdGFyZ2V0IH06IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PlxuICAgIHNldFF1YW50aXR5KHBhcnNlSW50KHRhcmdldC52YWx1ZSwgMTApKVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxJbnB1dFxuICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJRdWFudGl0eVwiXG4gICAgICAgIHZhbHVlPXtxdWFudGl0eX1cbiAgICAgICAgbWluPXsxfVxuICAgICAgICBzdGVwPXsxfVxuICAgICAgICBlcnJvcj17ISFlcnJvcn1cbiAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgYWN0aW9uPXt7XG4gICAgICAgICAgY29sb3I6ICdncmVlbicsXG4gICAgICAgICAgY29udGVudDogJ0FkZCB0byBDYXJ0JyxcbiAgICAgICAgICBpY29uOiAncGx1cyBjYXJ0JyxcbiAgICAgICAgICBvbkNsaWNrOiBoYW5kbGVTdWJtaXQsXG4gICAgICAgICAgbG9hZGluZyxcbiAgICAgICAgICBkaXNhYmxlZDogbG9hZGluZyxcbiAgICAgICAgfX1cbiAgICAgIC8+XG4gICAgICB7ZXJyb3IgJiYgKFxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGNvbG9yOiAncmVkJywgcG9zaXRpb246ICdhYnNvbHV0ZScgfX0+e2Vycm9yfTwvZGl2PlxuICAgICAgKX1cbiAgICAgIDxUcmFuc2l0aW9uIGR1cmF0aW9uPXt7IGhpZGU6IDUwMCwgc2hvdzogNTAwIH19IHZpc2libGU9e3Zpc2libGV9PlxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGNvbG9yOiAnZ3JlZW4nLCBwb3NpdGlvbjogJ2Fic29sdXRlJyB9fT5cbiAgICAgICAgICA8SWNvbiBuYW1lPVwiY2hlY2tcIiAvPlxuICAgICAgICAgIEFkZGVkIHRvIGNhcnRcbiAgICAgICAgPC9kaXY+XG4gICAgICA8L1RyYW5zaXRpb24+XG4gICAgPC8+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQWRkVG9DYXJ0XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBIZWFkZXIsIERpdmlkZXIsIFRhYmxlIH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnXG5cbmNvbnN0IFByb2R1Y3RBdHRyaWJ1dGVzID0gKHtcbiAgZGVzY3JpcHRpb24sXG4gIC4uLm90aGVyQXR0cmlidXRlc1xufTogVFByb2R1Y3RBdHRyaWJ1dGVzKSA9PiAoXG4gIDxzZWN0aW9uIGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgIDxIZWFkZXIgYXM9XCJoM1wiPkFib3V0IHRoaXMgYXZvY2FkbzwvSGVhZGVyPlxuICAgIDxwPntkZXNjcmlwdGlvbn08L3A+XG5cbiAgICA8RGl2aWRlciAvPlxuXG4gICAgPFRhYmxlIGNlbGxlZD5cbiAgICAgIDxUYWJsZS5IZWFkZXI+XG4gICAgICAgIDxUYWJsZS5Sb3c+XG4gICAgICAgICAgPFRhYmxlLkhlYWRlckNlbGwgY29sU3Bhbj1cIjJcIj5BdHRyaWJ1dGVzPC9UYWJsZS5IZWFkZXJDZWxsPlxuICAgICAgICA8L1RhYmxlLlJvdz5cbiAgICAgIDwvVGFibGUuSGVhZGVyPlxuXG4gICAgICA8VGFibGUuQm9keT5cbiAgICAgICAge09iamVjdC5rZXlzKG90aGVyQXR0cmlidXRlcykubWFwKChrZXkpID0+IChcbiAgICAgICAgICA8VGFibGUuUm93IGtleT17a2V5fT5cbiAgICAgICAgICAgIDxUYWJsZS5DZWxsIGNsYXNzTmFtZT1cImF0dHItbmFtZVwiPntrZXl9PC9UYWJsZS5DZWxsPlxuICAgICAgICAgICAgPFRhYmxlLkNlbGw+XG4gICAgICAgICAgICAgIHtvdGhlckF0dHJpYnV0ZXNba2V5IGFzIGtleW9mIHR5cGVvZiBvdGhlckF0dHJpYnV0ZXNdfVxuICAgICAgICAgICAgPC9UYWJsZS5DZWxsPlxuICAgICAgICAgIDwvVGFibGUuUm93PlxuICAgICAgICApKX1cbiAgICAgIDwvVGFibGUuQm9keT5cbiAgICA8L1RhYmxlPlxuXG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLmNvbnRhaW5lciA6Z2xvYmFsKC5hdHRyLW5hbWUpIHtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L3NlY3Rpb24+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RBdHRyaWJ1dGVzXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBJdGVtLCBMYWJlbCB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0J1xuXG5pbXBvcnQgQWRkVG9DYXJ0IGZyb20gJy4vQWRkVG9DYXJ0J1xuaW1wb3J0IFByb2R1Y3RBdHRyaWJ1dGVzIGZyb20gJy4vUHJvZHVjdEF0dHJpYnV0ZXMnXG5cbnR5cGUgUHJvZHVjdFN1bW1hcnlQcm9wcyA9IHtcbiAgcHJvZHVjdDogVFByb2R1Y3Rcbn1cblxuY29uc3QgUHJvZHVjdFN1bW1hcnkgPSAoeyBwcm9kdWN0IH06IFByb2R1Y3RTdW1tYXJ5UHJvcHMpID0+IChcbiAgPD5cbiAgICA8SXRlbS5Hcm91cCBhcz1cInNlY3Rpb25cIj5cbiAgICAgIDxJdGVtIHN0eWxlPXt7IGFsaWduSXRlbXM6ICdjZW50ZXInIH19PlxuICAgICAgICA8SXRlbS5JbWFnZSBzaXplPVwibWVkaXVtXCI+XG4gICAgICAgICAgPGltZyBzcmM9e3Byb2R1Y3QuaW1hZ2V9IGFsdD17cHJvZHVjdC5uYW1lfSAvPlxuICAgICAgICA8L0l0ZW0uSW1hZ2U+XG4gICAgICAgIDxJdGVtLkNvbnRlbnQ+XG4gICAgICAgICAgPEl0ZW0uSGVhZGVyIGFzPVwiaDFcIj57cHJvZHVjdC5uYW1lfTwvSXRlbS5IZWFkZXI+XG4gICAgICAgICAgPEl0ZW0uRGVzY3JpcHRpb24+XG4gICAgICAgICAgICA8cD57cHJvZHVjdC5wcmljZX08L3A+XG4gICAgICAgICAgICA8TGFiZWw+e2BTS1U6ICR7cHJvZHVjdC5za3V9YH08L0xhYmVsPlxuICAgICAgICAgIDwvSXRlbS5EZXNjcmlwdGlvbj5cbiAgICAgICAgICA8SXRlbS5FeHRyYT5cbiAgICAgICAgICAgIDxBZGRUb0NhcnQgcHJvZHVjdD17cHJvZHVjdH0gLz5cbiAgICAgICAgICA8L0l0ZW0uRXh0cmE+XG4gICAgICAgIDwvSXRlbS5Db250ZW50PlxuICAgICAgPC9JdGVtPlxuICAgIDwvSXRlbS5Hcm91cD5cbiAgICA8UHJvZHVjdEF0dHJpYnV0ZXMgey4uLnByb2R1Y3QuYXR0cmlidXRlc30gLz5cbiAgPC8+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RTdW1tYXJ5XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5cbmltcG9ydCBQcm9kdWN0U3VtbWFyeSBmcm9tICdAY29tcG9uZW50cy9Qcm9kdWN0U3VtbWFyeS9Qcm9kdWN0U3VtbWFyeSdcbmltcG9ydCBMb2FkaW5nIGZyb20gJ0Bjb21wb25lbnRzL0xvYWRpbmcvTG9hZGluZydcblxuY29uc3QgUHJvZHVjdFBhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IHsgcXVlcnkgfSA9IHVzZVJvdXRlcigpXG4gIGNvbnN0IFtwcm9kdWN0LCBzZXRQcm9kdWN0XSA9IHVzZVN0YXRlPFRQcm9kdWN0IHwgbnVsbD4obnVsbClcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChxdWVyeS5pZCkge1xuICAgICAgd2luZG93XG4gICAgICAgIC5mZXRjaChgL2FwaS9hdm8vJHtxdWVyeS5pZH1gKVxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgLnRoZW4oKGRhdGE6IFRQcm9kdWN0KSA9PiB7XG4gICAgICAgICAgc2V0UHJvZHVjdChkYXRhKVxuICAgICAgICB9KVxuICAgIH1cbiAgfSwgW3F1ZXJ5LmlkXSlcblxuICByZXR1cm4gKFxuICAgIDxtYWluPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAge3Byb2R1Y3QgPT0gbnVsbCA/IDxMb2FkaW5nIC8+IDogPFByb2R1Y3RTdW1tYXJ5IHByb2R1Y3Q9e3Byb2R1Y3R9IC8+fVxuICAgICAgPC9kaXY+XG4gICAgPC9tYWluPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RQYWdlXG4iLCJpbXBvcnQgUmVhY3QsIHsgRGlzcGF0Y2gsIHVzZUNvbnRleHQsIHVzZVJlZHVjZXIgfSBmcm9tICdyZWFjdCdcblxuZXhwb3J0IHR5cGUgQ2FydEl0ZW1UeXBlID0gVFByb2R1Y3QgJiB7IHF1YW50aXR5OiBudW1iZXIgfVxuXG5leHBvcnQgdHlwZSBDYXJ0U3RhdGUgPSB7XG4gIFtrZXk6IHN0cmluZ106IENhcnRJdGVtVHlwZVxufVxuXG5leHBvcnQgdHlwZSBDYXJ0QWN0aW9uID0ge1xuICB0eXBlOiAnYWRkJyB8ICdyZW1vdmUnXG4gIGl0ZW06IFRQcm9kdWN0XG4gIHF1YW50aXR5PzogbnVtYmVyXG59XG5cbmNvbnN0IGRlZmF1bHRTdGF0ZSA9IHt9IGFzIENhcnRTdGF0ZVxuXG5jb25zdCBDYXJ0SXRlbXNDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dChkZWZhdWx0U3RhdGUpXG5jb25zdCBDYXJ0RGlzcGF0Y2hDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dCgoKCkgPT4ge30pIGFzIERpc3BhdGNoPFxuICBDYXJ0QWN0aW9uXG4+KVxuXG5jb25zdCBDYXJ0UHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9OiB7IGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGUgfSkgPT4ge1xuICBjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IHVzZVJlZHVjZXIoY2FydFJlZHVjZXJzLCBkZWZhdWx0U3RhdGUpXG5cbiAgcmV0dXJuIChcbiAgICA8Q2FydEl0ZW1zQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17c3RhdGV9PlxuICAgICAgPENhcnREaXNwYXRjaENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e2Rpc3BhdGNofT5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9DYXJ0RGlzcGF0Y2hDb250ZXh0LlByb3ZpZGVyPlxuICAgIDwvQ2FydEl0ZW1zQ29udGV4dC5Qcm92aWRlcj5cbiAgKVxufVxuXG5mdW5jdGlvbiBjYXJ0UmVkdWNlcnMoXG4gIHN0YXRlOiBDYXJ0U3RhdGUsXG4gIHsgaXRlbSwgdHlwZSwgcXVhbnRpdHk6IHF0eVRvQWRkID0gMSB9OiBDYXJ0QWN0aW9uXG4pIHtcbiAgY29uc3QgZXhpc3RpbmdDYXJ0SXRlbSA9IHN0YXRlW2l0ZW0uaWRdXG5cbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSAnYWRkJzoge1xuICAgICAgaWYgKGV4aXN0aW5nQ2FydEl0ZW0gIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNvbnN0IHF1YW50aXR5ID0gZXhpc3RpbmdDYXJ0SXRlbS5xdWFudGl0eSArIHF0eVRvQWRkXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgW2l0ZW0uaWRdOiB7XG4gICAgICAgICAgICAuLi5leGlzdGluZ0NhcnRJdGVtLFxuICAgICAgICAgICAgcXVhbnRpdHksXG4gICAgICAgICAgfSxcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgW2l0ZW0uaWRdOiB7XG4gICAgICAgICAgLi4uaXRlbSxcbiAgICAgICAgICBxdWFudGl0eTogcXR5VG9BZGQsXG4gICAgICAgIH0sXG4gICAgICB9XG4gICAgfVxuXG4gICAgY2FzZSAncmVtb3ZlJzoge1xuICAgICAgaWYgKGV4aXN0aW5nQ2FydEl0ZW0gPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiBzdGF0ZVxuICAgICAgfVxuXG4gICAgICBjb25zdCBxdWFudGl0eSA9IGV4aXN0aW5nQ2FydEl0ZW0ucXVhbnRpdHkgLSAxXG4gICAgICBpZiAocXVhbnRpdHkgPiAwKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgW2l0ZW0uaWRdOiB7XG4gICAgICAgICAgICAuLi5leGlzdGluZ0NhcnRJdGVtLFxuICAgICAgICAgICAgcXVhbnRpdHksXG4gICAgICAgICAgfSxcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjb25zdCBuZXdDYXJ0SXRlbXMgPSB7IC4uLnN0YXRlIH1cbiAgICAgIGRlbGV0ZSBuZXdDYXJ0SXRlbXNbaXRlbS5pZF1cbiAgICAgIHJldHVybiBuZXdDYXJ0SXRlbXNcbiAgICB9XG5cbiAgICBkZWZhdWx0OiB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFVuaGFuZGxlZCBhY3Rpb24gdHlwZTogJHt0eXBlfWApXG4gICAgfVxuICB9XG59XG5cbmNvbnN0IGdldENhcnRTdWJUb3RhbCA9IChzdW06IG51bWJlciwgaXRlbTogQ2FydEl0ZW1UeXBlKSA9PiB7XG4gIHN1bSArPSBpdGVtLnByaWNlICogaXRlbS5xdWFudGl0eVxuICByZXR1cm4gc3VtXG59XG5jb25zdCBnZXRDYXJ0Q291bnQgPSAoc3VtOiBudW1iZXIsIGl0ZW06IENhcnRJdGVtVHlwZSkgPT4gc3VtICsgaXRlbS5xdWFudGl0eVxuLyoqXG4gKiBIZXkgdGhlcmUgaW5zYXRpYWJseSBicmFpbixcbiAqIEFyZSB5b3UgaW50ZXJlc3RlZCBpbiB0aGlzIHBhdHRlcm4gd2hlcmUgdGhlIENvbnRleHQgdmFsdWVzIGFyZVxuICogZXhwb3NlZCB3aXRob3V0IGFjdHVhbGx5IHByb3ZpbmRpbmcgYWNjZXNzIHRvIHRoZSBDb250ZXh0IGl0c2VsZiA6KVxuICogaHR0cHM6Ly9rZW50Y2RvZGRzLmNvbS9ibG9nL2hvdy10by11c2UtcmVhY3QtY29udGV4dC1lZmZlY3RpdmVseVxuICovXG5leHBvcnQgY29uc3QgdXNlQ2FydCA9ICgpID0+IHtcbiAgY29uc3QgaXRlbXNCeUlkID0gdXNlQ29udGV4dChDYXJ0SXRlbXNDb250ZXh0KVxuICBjb25zdCBpdGVtcyA9IE9iamVjdC52YWx1ZXMoaXRlbXNCeUlkKVxuICAvLyBOb3QgZmFtaWxpYXIgd2l0aCBBcnJheS5yZWR1Y2U/IDopXG4gIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL0FycmF5L1JlZHVjZVxuICBjb25zdCBjb3VudCA9IGl0ZW1zLnJlZHVjZShnZXRDYXJ0Q291bnQsIDApXG4gIGNvbnN0IHN1YlRvdGFsID0gaXRlbXMucmVkdWNlKGdldENhcnRTdWJUb3RhbCwgMClcblxuICByZXR1cm4ge1xuICAgIGl0ZW1zLFxuICAgIGl0ZW1zQnlJZCxcbiAgICBjb3VudCxcbiAgICBzdWJUb3RhbCxcbiAgfVxufVxuZXhwb3J0IGNvbnN0IHVzZUNhcnRNdXRhdGlvbnMgPSAoKSA9PiB7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlQ29udGV4dChDYXJ0RGlzcGF0Y2hDb250ZXh0KVxuXG4gIGNvbnN0IGFkZFRvQ2FydCA9IChwcm9kdWN0OiBUUHJvZHVjdCwgcXVhbnRpdHk/OiBudW1iZXIpID0+XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogJ2FkZCcsXG4gICAgICBpdGVtOiBwcm9kdWN0LFxuICAgICAgcXVhbnRpdHksXG4gICAgfSlcblxuICBjb25zdCByZW1vdmVGcm9tQ2FydCA9IChwcm9kdWN0OiBUUHJvZHVjdCkgPT5cbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiAncmVtb3ZlJyxcbiAgICAgIGl0ZW06IHByb2R1Y3QsXG4gICAgfSlcblxuICByZXR1cm4ge1xuICAgIGFkZFRvQ2FydCxcbiAgICByZW1vdmVGcm9tQ2FydCxcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDYXJ0UHJvdmlkZXJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzZW1hbnRpYy11aS1yZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtanN4L3N0eWxlXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=