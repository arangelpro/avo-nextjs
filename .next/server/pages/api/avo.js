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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/avo/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./database/data.ts":
/*!**************************!*\
  !*** ./database/data.ts ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const data = {
  '2zd33b8c': {
    name: 'Maluma Hass Avocado',
    id: '2zd33b8c',
    sku: 'NUR72KCM',
    price: 1.15,
    image: '/images/maluma.jpg',
    attributes: {
      description: 'A relatively new cultivar, it was, the pretty boy baby, discovered in South Africa in the early 1990s by Mr. A.G. (Dries) Joubert. Maluma Babyy. It is a chance seedling of unknown parentage',
      shape: 'Oval',
      hardiness: '1 °C',
      taste: 'Catchy, is an avocado'
    }
  },
  '6trfgkkj': {
    name: 'Fuerte Avocado',
    id: '6trfgkkj',
    sku: 'AX4M8SJV',
    price: 1.21,
    image: '/images/fuerte.jpg',
    attributes: {
      description: 'The Fuerte avocado is the second largest commercial variety behind Hass. It is a long time California commercial variety valued for its winter season ripening and its B-Type blossom type which most growers plant adjacent to the Hass for a more consistent production cycle. This avocado tends to produce heavily in alternate years.',
      shape: 'Pear',
      hardiness: '-1 °C',
      taste: 'Magnificent, is a strong avocado'
    }
  },
  '7bcr49em': {
    name: 'Gwen Hass Avocado',
    id: '7bcr49em',
    sku: 'HYA78F6J',
    price: 1.25,
    image: '/images/gwen.jpg',
    attributes: {
      description: "A seedling bred from 'Hass' x 'Thille' in 1982, 'Gwen' is higher yielding and more dwarfing than 'Hass' in California. The fruit has an oval shape, slightly smaller than 'Hass' (100–200 g or 3.5–7.1 oz), with a rich, nutty flavor. The skin texture is more finely pebbled than 'Hass', and is dull green when ripe. It is frost-hardy down to −1 °C (30 °F)",
      shape: 'Plump',
      hardiness: '−1 °C',
      taste: 'Superb, is an avocado'
    }
  },
  '098323ks': {
    name: 'Bacon Avocado',
    id: '098323ks',
    sku: 'BXD100BLK',
    price: 1.51,
    image: '/images/bacon.jpg',
    attributes: {
      description: 'Developed by a farmer, James Bacon, in 1954, Bacon has medium-sized fruit with smooth, green skin with yellow-green, light-tasting flesh. When ripe, the skin remains green, but darkens slightly, and fruit yields to gentle pressure. It is cold-hardy down to −5 °C (23 °F)',
      shape: 'Oval',
      hardiness: '−5 °C',
      taste: 'Creamy, is an avocado'
    }
  },
  b8uthe2y: {
    name: 'Hass Avocado',
    id: 'b8uthe2y',
    sku: 'RMRCZN7E',
    price: 1.39,
    image: '/images/hass.jpg',
    attributes: {
      description: "The 'Hass' is the most common cultivar of avocado. It produces fruit year-round and accounts for 80% of cultivated avocados in the world.[21][55] All 'Hass' trees are descended from a single 'mother tree' raised by a mail carrier named Rudolph Hass, of La Habra Heights, California.[20][55] Hass patented the productive tree in 1935. The 'mother tree', of uncertain subspecies, died of root rot and was cut down in September 2002.[21][55][56] 'Hass' trees have medium-sized (150–250 g or 5.3–8.8 oz), ovate fruit with a black, pebbled skin. The flesh has a nutty, rich flavor with 19% oil. A hybrid Guatemalan type can withstand temperatures to −1 °C (30 °F)",
      shape: 'Oval',
      hardiness: '−1 °C',
      taste: 'Gorgeous, is an avocado'
    }
  },
  ewxsd6xb: {
    name: 'Lamb Hass Avocado',
    id: 'ewxsd6xb',
    sku: 'N55229ZA',
    price: 1.34,
    image: '/images/lamb.jpg',
    attributes: {
      description: 'The Lamb Hass avocado is a cross between a Hass and Gwen avocado. The fruits are larger in size and later maturing than Hass. It is gaining in popularity as a commercial and backyard variety due to its exceptional flavor and easy peeling qualities. The tree has an upright, compact habit.',
      shape: 'Obovate',
      hardiness: '-2 °C',
      taste: 'Great, is an avocado'
    }
  },
  fpr72m9k: {
    name: 'Pinkerton Avocado',
    id: 'fpr72m9k',
    sku: 'B4HZ42TM',
    price: 1.27,
    image: '/images/pinkerton.jpg',
    attributes: {
      description: "First grown on the Pinkerton Ranch in Saticoy, California, in the early 1970s, 'Pinkerton' is a seedling of 'Hass' x 'Rincon'. The large fruit has a small seed, and its green skin deepens in color as it ripens. The thick flesh has a smooth, creamy texture, pale green color, good flavor, and high oil content. It shows some cold tolerance, to −1 °C (30 °F) and bears consistently heavy crops. A hybrid Guatemalan type, it has excellent peeling characteristics",
      shape: 'Long pear',
      hardiness: '−1 °C',
      taste: 'Marvelous, is an avocado'
    }
  },
  t9dv25gs: {
    name: 'Reed Avocado',
    id: 't9dv25gs',
    sku: 'ZY3T9XXC',
    price: 1.18,
    image: '/images/reed.jpg',
    attributes: {
      description: 'Developed from a chance seedling found in 1948 by James S. Reed in California, this cultivar has large, round, green fruit with a smooth texture and dark, thick, glossy skin. Smooth and delicate, the flesh has a slightly nutty flavor. The skin ripens green. A Guatemalan type, it is hardy to −1 °C (30 °F). Tree size is about 5 by 4 m (16.4 by 13.1 ft)',
      shape: 'Round',
      hardiness: '−1 °C',
      taste: 'Exquisite, is an avocado'
    }
  },
  t345w48y: {
    name: 'Zutano Avocado',
    id: 't345w48y',
    sku: 'MW79ZZ6Y',
    price: 1.25,
    image: '/images/zutano.jpg',
    attributes: {
      description: 'The Zutano avocado is a cold hardy, consistent producing avocado variety. It resembles the Fuerte in appearance but is less flavorful but more cold hardy. The green fruits are obovate in shape with waxy bumps on the skin. The flesh has a low oil but high water content which causes it to have a more fibrous texture.',
      shape: 'Pear',
      hardiness: '-5 °C',
      taste: 'Splendid, is an avocado'
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (data);

/***/ }),

/***/ "./database/db.ts":
/*!************************!*\
  !*** ./database/db.ts ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ "./database/data.ts");
// Oh you curious...
// This is not a real database,
// But let's imagine it is one :)


class Database {
  constructor() {}

  async getAll() {
    const asArray = Object.values(_data__WEBPACK_IMPORTED_MODULE_0__["default"]);
    await randomDelay();
    return asArray;
  }

  async getById(id) {
    if (!Object.prototype.hasOwnProperty.call(_data__WEBPACK_IMPORTED_MODULE_0__["default"], id)) {
      return null;
    }

    const entry = _data__WEBPACK_IMPORTED_MODULE_0__["default"][id];
    await randomDelay();
    return entry;
  }

} // Let's also add a delay to make it a bit closer to reality


const randomDelay = () => new Promise(resolve => {
  const max = 350;
  const min = 100;
  const delay = Math.floor(Math.random() * (max - min + 1)) + min;
  setTimeout(resolve, delay);
});

/* harmony default export */ __webpack_exports__["default"] = (Database);

/***/ }),

/***/ "./pages/api/avo/index.ts":
/*!********************************!*\
  !*** ./pages/api/avo/index.ts ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _database__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @database */ "./database/db.ts");


const allAvos = async (request, response) => {
  const db = new _database__WEBPACK_IMPORTED_MODULE_0__["default"]();
  const allEntries = await db.getAll();
  const length = allEntries.length;
  response.statusCode = 200;
  response.setHeader('Content-type', 'application/json');
  response.end(JSON.stringify({
    data: allEntries,
    length
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (allAvos);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZGF0YWJhc2UvZGF0YS50cyIsIndlYnBhY2s6Ly8vLi9kYXRhYmFzZS9kYi50cyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvYXZvL2luZGV4LnRzIl0sIm5hbWVzIjpbImRhdGEiLCJuYW1lIiwiaWQiLCJza3UiLCJwcmljZSIsImltYWdlIiwiYXR0cmlidXRlcyIsImRlc2NyaXB0aW9uIiwic2hhcGUiLCJoYXJkaW5lc3MiLCJ0YXN0ZSIsImI4dXRoZTJ5IiwiZXd4c2Q2eGIiLCJmcHI3Mm05ayIsInQ5ZHYyNWdzIiwidDM0NXc0OHkiLCJEYXRhYmFzZSIsImNvbnN0cnVjdG9yIiwiZ2V0QWxsIiwiYXNBcnJheSIsIk9iamVjdCIsInZhbHVlcyIsImFsbERhdGEiLCJyYW5kb21EZWxheSIsImdldEJ5SWQiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJlbnRyeSIsIlByb21pc2UiLCJyZXNvbHZlIiwibWF4IiwibWluIiwiZGVsYXkiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJzZXRUaW1lb3V0IiwiYWxsQXZvcyIsInJlcXVlc3QiLCJyZXNwb25zZSIsImRiIiwiREIiLCJhbGxFbnRyaWVzIiwibGVuZ3RoIiwic3RhdHVzQ29kZSIsInNldEhlYWRlciIsImVuZCIsIkpTT04iLCJzdHJpbmdpZnkiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFB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QWI7QUFDQSxDQVBEOztBQVNlTixzRUFBZixFIiwiZmlsZSI6InBhZ2VzL2FwaS9hdm8uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2FwaS9hdm8vaW5kZXgudHNcIik7XG4iLCJjb25zdCBkYXRhOiBSZWNvcmQ8VFByb2R1Y3RJZCwgVFByb2R1Y3Q+ID0ge1xuICAnMnpkMzNiOGMnOiB7XG4gICAgbmFtZTogJ01hbHVtYSBIYXNzIEF2b2NhZG8nLFxuICAgIGlkOiAnMnpkMzNiOGMnLFxuICAgIHNrdTogJ05VUjcyS0NNJyxcbiAgICBwcmljZTogMS4xNSxcbiAgICBpbWFnZTogJy9pbWFnZXMvbWFsdW1hLmpwZycsXG4gICAgYXR0cmlidXRlczoge1xuICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICdBIHJlbGF0aXZlbHkgbmV3IGN1bHRpdmFyLCBpdCB3YXMsIHRoZSBwcmV0dHkgYm95IGJhYnksIGRpc2NvdmVyZWQgaW4gU291dGggQWZyaWNhIGluIHRoZSBlYXJseSAxOTkwcyBieSBNci4gQS5HLiAoRHJpZXMpIEpvdWJlcnQuIE1hbHVtYSBCYWJ5eS4gSXQgaXMgYSBjaGFuY2Ugc2VlZGxpbmcgb2YgdW5rbm93biBwYXJlbnRhZ2UnLFxuICAgICAgc2hhcGU6ICdPdmFsJyxcbiAgICAgIGhhcmRpbmVzczogJzEgwrBDJyxcbiAgICAgIHRhc3RlOiAnQ2F0Y2h5LCBpcyBhbiBhdm9jYWRvJyxcbiAgICB9LFxuICB9LFxuICAnNnRyZmdra2onOiB7XG4gICAgbmFtZTogJ0Z1ZXJ0ZSBBdm9jYWRvJyxcbiAgICBpZDogJzZ0cmZna2tqJyxcbiAgICBza3U6ICdBWDRNOFNKVicsXG4gICAgcHJpY2U6IDEuMjEsXG4gICAgaW1hZ2U6ICcvaW1hZ2VzL2Z1ZXJ0ZS5qcGcnLFxuICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAnVGhlIEZ1ZXJ0ZSBhdm9jYWRvIGlzIHRoZSBzZWNvbmQgbGFyZ2VzdCBjb21tZXJjaWFsIHZhcmlldHkgYmVoaW5kIEhhc3MuIEl0IGlzIGEgbG9uZyB0aW1lIENhbGlmb3JuaWEgY29tbWVyY2lhbCB2YXJpZXR5IHZhbHVlZCBmb3IgaXRzIHdpbnRlciBzZWFzb24gcmlwZW5pbmcgYW5kIGl0cyBCLVR5cGUgYmxvc3NvbSB0eXBlIHdoaWNoIG1vc3QgZ3Jvd2VycyBwbGFudCBhZGphY2VudCB0byB0aGUgSGFzcyBmb3IgYSBtb3JlIGNvbnNpc3RlbnQgcHJvZHVjdGlvbiBjeWNsZS4gVGhpcyBhdm9jYWRvIHRlbmRzIHRvIHByb2R1Y2UgaGVhdmlseSBpbiBhbHRlcm5hdGUgeWVhcnMuJyxcbiAgICAgIHNoYXBlOiAnUGVhcicsXG4gICAgICBoYXJkaW5lc3M6ICctMSDCsEMnLFxuICAgICAgdGFzdGU6ICdNYWduaWZpY2VudCwgaXMgYSBzdHJvbmcgYXZvY2FkbycsXG4gICAgfSxcbiAgfSxcbiAgJzdiY3I0OWVtJzoge1xuICAgIG5hbWU6ICdHd2VuIEhhc3MgQXZvY2FkbycsXG4gICAgaWQ6ICc3YmNyNDllbScsXG4gICAgc2t1OiAnSFlBNzhGNkonLFxuICAgIHByaWNlOiAxLjI1LFxuICAgIGltYWdlOiAnL2ltYWdlcy9nd2VuLmpwZycsXG4gICAgYXR0cmlidXRlczoge1xuICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgIFwiQSBzZWVkbGluZyBicmVkIGZyb20gJ0hhc3MnIHggJ1RoaWxsZScgaW4gMTk4MiwgJ0d3ZW4nIGlzIGhpZ2hlciB5aWVsZGluZyBhbmQgbW9yZSBkd2FyZmluZyB0aGFuICdIYXNzJyBpbiBDYWxpZm9ybmlhLiBUaGUgZnJ1aXQgaGFzIGFuIG92YWwgc2hhcGUsIHNsaWdodGx5IHNtYWxsZXIgdGhhbiAnSGFzcycgKDEwMOKAkzIwMCBnIG9yIDMuNeKAkzcuMSBveiksIHdpdGggYSByaWNoLCBudXR0eSBmbGF2b3IuIFRoZSBza2luIHRleHR1cmUgaXMgbW9yZSBmaW5lbHkgcGViYmxlZCB0aGFuICdIYXNzJywgYW5kIGlzIGR1bGwgZ3JlZW4gd2hlbiByaXBlLiBJdCBpcyBmcm9zdC1oYXJkeSBkb3duIHRvIOKIkjEgwrBDICgzMCDCsEYpXCIsXG4gICAgICBzaGFwZTogJ1BsdW1wJyxcbiAgICAgIGhhcmRpbmVzczogJ+KIkjEgwrBDJyxcbiAgICAgIHRhc3RlOiAnU3VwZXJiLCBpcyBhbiBhdm9jYWRvJyxcbiAgICB9LFxuICB9LFxuICAnMDk4MzIza3MnOiB7XG4gICAgbmFtZTogJ0JhY29uIEF2b2NhZG8nLFxuICAgIGlkOiAnMDk4MzIza3MnLFxuICAgIHNrdTogJ0JYRDEwMEJMSycsXG4gICAgcHJpY2U6IDEuNTEsXG4gICAgaW1hZ2U6ICcvaW1hZ2VzL2JhY29uLmpwZycsXG4gICAgYXR0cmlidXRlczoge1xuICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICdEZXZlbG9wZWQgYnkgYSBmYXJtZXIsIEphbWVzIEJhY29uLCBpbiAxOTU0LCBCYWNvbiBoYXMgbWVkaXVtLXNpemVkIGZydWl0IHdpdGggc21vb3RoLCBncmVlbiBza2luIHdpdGggeWVsbG93LWdyZWVuLCBsaWdodC10YXN0aW5nIGZsZXNoLiBXaGVuIHJpcGUsIHRoZSBza2luIHJlbWFpbnMgZ3JlZW4sIGJ1dCBkYXJrZW5zIHNsaWdodGx5LCBhbmQgZnJ1aXQgeWllbGRzIHRvIGdlbnRsZSBwcmVzc3VyZS4gSXQgaXMgY29sZC1oYXJkeSBkb3duIHRvIOKIkjUgwrBDICgyMyDCsEYpJyxcbiAgICAgIHNoYXBlOiAnT3ZhbCcsXG4gICAgICBoYXJkaW5lc3M6ICfiiJI1IMKwQycsXG4gICAgICB0YXN0ZTogJ0NyZWFteSwgaXMgYW4gYXZvY2FkbycsXG4gICAgfSxcbiAgfSxcbiAgYjh1dGhlMnk6IHtcbiAgICBuYW1lOiAnSGFzcyBBdm9jYWRvJyxcbiAgICBpZDogJ2I4dXRoZTJ5JyxcbiAgICBza3U6ICdSTVJDWk43RScsXG4gICAgcHJpY2U6IDEuMzksXG4gICAgaW1hZ2U6ICcvaW1hZ2VzL2hhc3MuanBnJyxcbiAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgXCJUaGUgJ0hhc3MnIGlzIHRoZSBtb3N0IGNvbW1vbiBjdWx0aXZhciBvZiBhdm9jYWRvLiBJdCBwcm9kdWNlcyBmcnVpdCB5ZWFyLXJvdW5kIGFuZCBhY2NvdW50cyBmb3IgODAlIG9mIGN1bHRpdmF0ZWQgYXZvY2Fkb3MgaW4gdGhlIHdvcmxkLlsyMV1bNTVdIEFsbCAnSGFzcycgdHJlZXMgYXJlIGRlc2NlbmRlZCBmcm9tIGEgc2luZ2xlICdtb3RoZXIgdHJlZScgcmFpc2VkIGJ5IGEgbWFpbCBjYXJyaWVyIG5hbWVkIFJ1ZG9scGggSGFzcywgb2YgTGEgSGFicmEgSGVpZ2h0cywgQ2FsaWZvcm5pYS5bMjBdWzU1XSBIYXNzIHBhdGVudGVkIHRoZSBwcm9kdWN0aXZlIHRyZWUgaW4gMTkzNS4gVGhlICdtb3RoZXIgdHJlZScsIG9mIHVuY2VydGFpbiBzdWJzcGVjaWVzLCBkaWVkIG9mIHJvb3Qgcm90IGFuZCB3YXMgY3V0IGRvd24gaW4gU2VwdGVtYmVyIDIwMDIuWzIxXVs1NV1bNTZdICdIYXNzJyB0cmVlcyBoYXZlIG1lZGl1bS1zaXplZCAoMTUw4oCTMjUwIGcgb3IgNS4z4oCTOC44IG96KSwgb3ZhdGUgZnJ1aXQgd2l0aCBhIGJsYWNrLCBwZWJibGVkIHNraW4uIFRoZSBmbGVzaCBoYXMgYSBudXR0eSwgcmljaCBmbGF2b3Igd2l0aCAxOSUgb2lsLiBBIGh5YnJpZCBHdWF0ZW1hbGFuIHR5cGUgY2FuIHdpdGhzdGFuZCB0ZW1wZXJhdHVyZXMgdG8g4oiSMSDCsEMgKDMwIMKwRilcIixcbiAgICAgIHNoYXBlOiAnT3ZhbCcsXG4gICAgICBoYXJkaW5lc3M6ICfiiJIxIMKwQycsXG4gICAgICB0YXN0ZTogJ0dvcmdlb3VzLCBpcyBhbiBhdm9jYWRvJyxcbiAgICB9LFxuICB9LFxuICBld3hzZDZ4Yjoge1xuICAgIG5hbWU6ICdMYW1iIEhhc3MgQXZvY2FkbycsXG4gICAgaWQ6ICdld3hzZDZ4YicsXG4gICAgc2t1OiAnTjU1MjI5WkEnLFxuICAgIHByaWNlOiAxLjM0LFxuICAgIGltYWdlOiAnL2ltYWdlcy9sYW1iLmpwZycsXG4gICAgYXR0cmlidXRlczoge1xuICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICdUaGUgTGFtYiBIYXNzIGF2b2NhZG8gaXMgYSBjcm9zcyBiZXR3ZWVuIGEgSGFzcyBhbmQgR3dlbiBhdm9jYWRvLiBUaGUgZnJ1aXRzIGFyZSBsYXJnZXIgaW4gc2l6ZSBhbmQgbGF0ZXIgbWF0dXJpbmcgdGhhbiBIYXNzLiBJdCBpcyBnYWluaW5nIGluIHBvcHVsYXJpdHkgYXMgYSBjb21tZXJjaWFsIGFuZCBiYWNreWFyZCB2YXJpZXR5IGR1ZSB0byBpdHMgZXhjZXB0aW9uYWwgZmxhdm9yIGFuZCBlYXN5IHBlZWxpbmcgcXVhbGl0aWVzLiBUaGUgdHJlZSBoYXMgYW4gdXByaWdodCwgY29tcGFjdCBoYWJpdC4nLFxuICAgICAgc2hhcGU6ICdPYm92YXRlJyxcbiAgICAgIGhhcmRpbmVzczogJy0yIMKwQycsXG4gICAgICB0YXN0ZTogJ0dyZWF0LCBpcyBhbiBhdm9jYWRvJyxcbiAgICB9LFxuICB9LFxuICBmcHI3Mm05azoge1xuICAgIG5hbWU6ICdQaW5rZXJ0b24gQXZvY2FkbycsXG4gICAgaWQ6ICdmcHI3Mm05aycsXG4gICAgc2t1OiAnQjRIWjQyVE0nLFxuICAgIHByaWNlOiAxLjI3LFxuICAgIGltYWdlOiAnL2ltYWdlcy9waW5rZXJ0b24uanBnJyxcbiAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgXCJGaXJzdCBncm93biBvbiB0aGUgUGlua2VydG9uIFJhbmNoIGluIFNhdGljb3ksIENhbGlmb3JuaWEsIGluIHRoZSBlYXJseSAxOTcwcywgJ1BpbmtlcnRvbicgaXMgYSBzZWVkbGluZyBvZiAnSGFzcycgeCAnUmluY29uJy4gVGhlIGxhcmdlIGZydWl0IGhhcyBhIHNtYWxsIHNlZWQsIGFuZCBpdHMgZ3JlZW4gc2tpbiBkZWVwZW5zIGluIGNvbG9yIGFzIGl0IHJpcGVucy4gVGhlIHRoaWNrIGZsZXNoIGhhcyBhIHNtb290aCwgY3JlYW15IHRleHR1cmUsIHBhbGUgZ3JlZW4gY29sb3IsIGdvb2QgZmxhdm9yLCBhbmQgaGlnaCBvaWwgY29udGVudC4gSXQgc2hvd3Mgc29tZSBjb2xkIHRvbGVyYW5jZSwgdG8g4oiSMSDCsEMgKDMwIMKwRikgYW5kIGJlYXJzIGNvbnNpc3RlbnRseSBoZWF2eSBjcm9wcy4gQSBoeWJyaWQgR3VhdGVtYWxhbiB0eXBlLCBpdCBoYXMgZXhjZWxsZW50IHBlZWxpbmcgY2hhcmFjdGVyaXN0aWNzXCIsXG4gICAgICBzaGFwZTogJ0xvbmcgcGVhcicsXG4gICAgICBoYXJkaW5lc3M6ICfiiJIxIMKwQycsXG4gICAgICB0YXN0ZTogJ01hcnZlbG91cywgaXMgYW4gYXZvY2FkbycsXG4gICAgfSxcbiAgfSxcbiAgdDlkdjI1Z3M6IHtcbiAgICBuYW1lOiAnUmVlZCBBdm9jYWRvJyxcbiAgICBpZDogJ3Q5ZHYyNWdzJyxcbiAgICBza3U6ICdaWTNUOVhYQycsXG4gICAgcHJpY2U6IDEuMTgsXG4gICAgaW1hZ2U6ICcvaW1hZ2VzL3JlZWQuanBnJyxcbiAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgJ0RldmVsb3BlZCBmcm9tIGEgY2hhbmNlIHNlZWRsaW5nIGZvdW5kIGluIDE5NDggYnkgSmFtZXMgUy4gUmVlZCBpbiBDYWxpZm9ybmlhLCB0aGlzIGN1bHRpdmFyIGhhcyBsYXJnZSwgcm91bmQsIGdyZWVuIGZydWl0IHdpdGggYSBzbW9vdGggdGV4dHVyZSBhbmQgZGFyaywgdGhpY2ssIGdsb3NzeSBza2luLiBTbW9vdGggYW5kIGRlbGljYXRlLCB0aGUgZmxlc2ggaGFzIGEgc2xpZ2h0bHkgbnV0dHkgZmxhdm9yLiBUaGUgc2tpbiByaXBlbnMgZ3JlZW4uIEEgR3VhdGVtYWxhbiB0eXBlLCBpdCBpcyBoYXJkeSB0byDiiJIxIMKwQyAoMzAgwrBGKS4gVHJlZSBzaXplIGlzIGFib3V0IDUgYnkgNCBtICgxNi40IGJ5IDEzLjEgZnQpJyxcbiAgICAgIHNoYXBlOiAnUm91bmQnLFxuICAgICAgaGFyZGluZXNzOiAn4oiSMSDCsEMnLFxuICAgICAgdGFzdGU6ICdFeHF1aXNpdGUsIGlzIGFuIGF2b2NhZG8nLFxuICAgIH0sXG4gIH0sXG4gIHQzNDV3NDh5OiB7XG4gICAgbmFtZTogJ1p1dGFubyBBdm9jYWRvJyxcbiAgICBpZDogJ3QzNDV3NDh5JyxcbiAgICBza3U6ICdNVzc5Wlo2WScsXG4gICAgcHJpY2U6IDEuMjUsXG4gICAgaW1hZ2U6ICcvaW1hZ2VzL3p1dGFuby5qcGcnLFxuICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAnVGhlIFp1dGFubyBhdm9jYWRvIGlzIGEgY29sZCBoYXJkeSwgY29uc2lzdGVudCBwcm9kdWNpbmcgYXZvY2FkbyB2YXJpZXR5LiBJdCByZXNlbWJsZXMgdGhlIEZ1ZXJ0ZSBpbiBhcHBlYXJhbmNlIGJ1dCBpcyBsZXNzIGZsYXZvcmZ1bCBidXQgbW9yZSBjb2xkIGhhcmR5LiBUaGUgZ3JlZW4gZnJ1aXRzIGFyZSBvYm92YXRlIGluIHNoYXBlIHdpdGggd2F4eSBidW1wcyBvbiB0aGUgc2tpbi4gVGhlIGZsZXNoIGhhcyBhIGxvdyBvaWwgYnV0IGhpZ2ggd2F0ZXIgY29udGVudCB3aGljaCBjYXVzZXMgaXQgdG8gaGF2ZSBhIG1vcmUgZmlicm91cyB0ZXh0dXJlLicsXG4gICAgICBzaGFwZTogJ1BlYXInLFxuICAgICAgaGFyZGluZXNzOiAnLTUgwrBDJyxcbiAgICAgIHRhc3RlOiAnU3BsZW5kaWQsIGlzIGFuIGF2b2NhZG8nLFxuICAgIH0sXG4gIH0sXG59XG5cbmV4cG9ydCBkZWZhdWx0IGRhdGFcbiIsIi8vIE9oIHlvdSBjdXJpb3VzLi4uXG4vLyBUaGlzIGlzIG5vdCBhIHJlYWwgZGF0YWJhc2UsXG4vLyBCdXQgbGV0J3MgaW1hZ2luZSBpdCBpcyBvbmUgOilcbmltcG9ydCBhbGxEYXRhIGZyb20gJy4vZGF0YSdcblxuY2xhc3MgRGF0YWJhc2Uge1xuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgYXN5bmMgZ2V0QWxsKCk6IFByb21pc2U8VFByb2R1Y3RbXT4ge1xuICAgIGNvbnN0IGFzQXJyYXkgPSBPYmplY3QudmFsdWVzKGFsbERhdGEpXG4gICAgYXdhaXQgcmFuZG9tRGVsYXkoKVxuICAgIHJldHVybiBhc0FycmF5XG4gIH1cblxuICBhc3luYyBnZXRCeUlkKGlkOiBzdHJpbmcpOiBQcm9taXNlPFRQcm9kdWN0IHwgbnVsbD4ge1xuICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGFsbERhdGEsIGlkKSkge1xuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG5cbiAgICBjb25zdCBlbnRyeSA9IGFsbERhdGFbaWRdXG4gICAgYXdhaXQgcmFuZG9tRGVsYXkoKVxuICAgIHJldHVybiBlbnRyeVxuICB9XG59XG5cbi8vIExldCdzIGFsc28gYWRkIGEgZGVsYXkgdG8gbWFrZSBpdCBhIGJpdCBjbG9zZXIgdG8gcmVhbGl0eVxuY29uc3QgcmFuZG9tRGVsYXkgPSAoKSA9PlxuICBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgIGNvbnN0IG1heCA9IDM1MFxuICAgIGNvbnN0IG1pbiA9IDEwMFxuICAgIGNvbnN0IGRlbGF5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpKSArIG1pblxuXG4gICAgc2V0VGltZW91dChyZXNvbHZlLCBkZWxheSlcbiAgfSlcblxuZXhwb3J0IGRlZmF1bHQgRGF0YWJhc2VcbiIsImltcG9ydCB7SW5jb21pbmdNZXNzYWdlLCBTZXJ2ZXJSZXNwb25zZX0gZnJvbSBcImh0dHBcIjtcbmltcG9ydCBEQiBmcm9tICdAZGF0YWJhc2UnO1xuXG5jb25zdCBhbGxBdm9zID0gYXN5bmMgKHJlcXVlc3Q6IEluY29taW5nTWVzc2FnZSwgcmVzcG9uc2U6IFNlcnZlclJlc3BvbnNlKSA9PiB7XG5cdGNvbnN0IGRiID0gbmV3IERCKCk7XG5cdGNvbnN0IGFsbEVudHJpZXMgPSBhd2FpdCBkYi5nZXRBbGwoKTtcblx0Y29uc3QgbGVuZ3RoID0gYWxsRW50cmllcy5sZW5ndGg7XG5cdHJlc3BvbnNlLnN0YXR1c0NvZGUgPSAyMDA7XG5cdHJlc3BvbnNlLnNldEhlYWRlcignQ29udGVudC10eXBlJywgJ2FwcGxpY2F0aW9uL2pzb24nKTtcblx0cmVzcG9uc2UuZW5kKEpTT04uc3RyaW5naWZ5KHtkYXRhOiBhbGxFbnRyaWVzLCBsZW5ndGh9KSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGFsbEF2b3M7Il0sInNvdXJjZVJvb3QiOiIifQ==