module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/avo/[id].ts");
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

/***/ "./pages/api/avo/[id].ts":
/*!*******************************!*\
  !*** ./pages/api/avo/[id].ts ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _database__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @database */ "./database/db.ts");


const allAvos = async (request, response) => {
  const db = new _database__WEBPACK_IMPORTED_MODULE_0__["default"]();
  const id = request.query.id;
  const avo = await db.getById(id); // response.statusCode = 200;
  // response.setHeader('Content-type', 'application/json');
  // response.end(JSON.stringify({data: entry}));

  response.status(200).json(avo);
};

/* harmony default export */ __webpack_exports__["default"] = (allAvos);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZGF0YWJhc2UvZGF0YS50cyIsIndlYnBhY2s6Ly8vLi9kYXRhYmFzZS9kYi50cyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvYXZvLy50cyJdLCJuYW1lcyI6WyJkYXRhIiwibmFtZSIsImlkIiwic2t1IiwicHJpY2UiLCJpbWFnZSIsImF0dHJpYnV0ZXMiLCJkZXNjcmlwdGlvbiIsInNoYXBlIiwiaGFyZGluZXNzIiwidGFzdGUiLCJiOHV0aGUyeSIsImV3eHNkNnhiIiwiZnByNzJtOWsiLCJ0OWR2MjVncyIsInQzNDV3NDh5IiwiRGF0YWJhc2UiLCJjb25zdHJ1Y3RvciIsImdldEFsbCIsImFzQXJyYXkiLCJPYmplY3QiLCJ2YWx1ZXMiLCJhbGxEYXRhIiwicmFuZG9tRGVsYXkiLCJnZXRCeUlkIiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiZW50cnkiLCJQcm9taXNlIiwicmVzb2x2ZSIsIm1heCIsIm1pbiIsImRlbGF5IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwic2V0VGltZW91dCIsImFsbEF2b3MiLCJyZXF1ZXN0IiwicmVzcG9uc2UiLCJkYiIsIkRCIiwicXVlcnkiLCJhdm8iLCJzdGF0dXMiLCJqc29uIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDeEZBO0FBQUEsTUFBTUEsSUFBa0MsR0FBRztBQUN6QyxjQUFZO0FBQ1ZDLFFBQUksRUFBRSxxQkFESTtBQUVWQyxNQUFFLEVBQUUsVUFGTTtBQUdWQyxPQUFHLEVBQUUsVUFISztBQUlWQyxTQUFLLEVBQUUsSUFKRztBQUtWQyxTQUFLLEVBQUUsb0JBTEc7QUFNVkMsY0FBVSxFQUFFO0FBQ1ZDLGlCQUFXLEVBQ1QsK0xBRlE7QUFHVkMsV0FBSyxFQUFFLE1BSEc7QUFJVkMsZUFBUyxFQUFFLE1BSkQ7QUFLVkMsV0FBSyxFQUFFO0FBTEc7QUFORixHQUQ2QjtBQWV6QyxjQUFZO0FBQ1ZULFFBQUksRUFBRSxnQkFESTtBQUVWQyxNQUFFLEVBQUUsVUFGTTtBQUdWQyxPQUFHLEVBQUUsVUFISztBQUlWQyxTQUFLLEVBQUUsSUFKRztBQUtWQyxTQUFLLEVBQUUsb0JBTEc7QUFNVkMsY0FBVSxFQUFFO0FBQ1ZDLGlCQUFXLEVBQ1QsNFVBRlE7QUFHVkMsV0FBSyxFQUFFLE1BSEc7QUFJVkMsZUFBUyxFQUFFLE9BSkQ7QUFLVkMsV0FBSyxFQUFFO0FBTEc7QUFORixHQWY2QjtBQTZCekMsY0FBWTtBQUNWVCxRQUFJLEVBQUUsbUJBREk7QUFFVkMsTUFBRSxFQUFFLFVBRk07QUFHVkMsT0FBRyxFQUFFLFVBSEs7QUFJVkMsU0FBSyxFQUFFLElBSkc7QUFLVkMsU0FBSyxFQUFFLGtCQUxHO0FBTVZDLGNBQVUsRUFBRTtBQUNWQyxpQkFBVyxFQUNULGtXQUZRO0FBR1ZDLFdBQUssRUFBRSxPQUhHO0FBSVZDLGVBQVMsRUFBRSxPQUpEO0FBS1ZDLFdBQUssRUFBRTtBQUxHO0FBTkYsR0E3QjZCO0FBMkN6QyxjQUFZO0FBQ1ZULFFBQUksRUFBRSxlQURJO0FBRVZDLE1BQUUsRUFBRSxVQUZNO0FBR1ZDLE9BQUcsRUFBRSxXQUhLO0FBSVZDLFNBQUssRUFBRSxJQUpHO0FBS1ZDLFNBQUssRUFBRSxtQkFMRztBQU1WQyxjQUFVLEVBQUU7QUFDVkMsaUJBQVcsRUFDVCxnUkFGUTtBQUdWQyxXQUFLLEVBQUUsTUFIRztBQUlWQyxlQUFTLEVBQUUsT0FKRDtBQUtWQyxXQUFLLEVBQUU7QUFMRztBQU5GLEdBM0M2QjtBQXlEekNDLFVBQVEsRUFBRTtBQUNSVixRQUFJLEVBQUUsY0FERTtBQUVSQyxNQUFFLEVBQUUsVUFGSTtBQUdSQyxPQUFHLEVBQUUsVUFIRztBQUlSQyxTQUFLLEVBQUUsSUFKQztBQUtSQyxTQUFLLEVBQUUsa0JBTEM7QUFNUkMsY0FBVSxFQUFFO0FBQ1ZDLGlCQUFXLEVBQ1Qsb3BCQUZRO0FBR1ZDLFdBQUssRUFBRSxNQUhHO0FBSVZDLGVBQVMsRUFBRSxPQUpEO0FBS1ZDLFdBQUssRUFBRTtBQUxHO0FBTkosR0F6RCtCO0FBdUV6Q0UsVUFBUSxFQUFFO0FBQ1JYLFFBQUksRUFBRSxtQkFERTtBQUVSQyxNQUFFLEVBQUUsVUFGSTtBQUdSQyxPQUFHLEVBQUUsVUFIRztBQUlSQyxTQUFLLEVBQUUsSUFKQztBQUtSQyxTQUFLLEVBQUUsa0JBTEM7QUFNUkMsY0FBVSxFQUFFO0FBQ1ZDLGlCQUFXLEVBQ1Qsa1NBRlE7QUFHVkMsV0FBSyxFQUFFLFNBSEc7QUFJVkMsZUFBUyxFQUFFLE9BSkQ7QUFLVkMsV0FBSyxFQUFFO0FBTEc7QUFOSixHQXZFK0I7QUFxRnpDRyxVQUFRLEVBQUU7QUFDUlosUUFBSSxFQUFFLG1CQURFO0FBRVJDLE1BQUUsRUFBRSxVQUZJO0FBR1JDLE9BQUcsRUFBRSxVQUhHO0FBSVJDLFNBQUssRUFBRSxJQUpDO0FBS1JDLFNBQUssRUFBRSx1QkFMQztBQU1SQyxjQUFVLEVBQUU7QUFDVkMsaUJBQVcsRUFDVCw2Y0FGUTtBQUdWQyxXQUFLLEVBQUUsV0FIRztBQUlWQyxlQUFTLEVBQUUsT0FKRDtBQUtWQyxXQUFLLEVBQUU7QUFMRztBQU5KLEdBckYrQjtBQW1HekNJLFVBQVEsRUFBRTtBQUNSYixRQUFJLEVBQUUsY0FERTtBQUVSQyxNQUFFLEVBQUUsVUFGSTtBQUdSQyxPQUFHLEVBQUUsVUFIRztBQUlSQyxTQUFLLEVBQUUsSUFKQztBQUtSQyxTQUFLLEVBQUUsa0JBTEM7QUFNUkMsY0FBVSxFQUFFO0FBQ1ZDLGlCQUFXLEVBQ1Qsa1dBRlE7QUFHVkMsV0FBSyxFQUFFLE9BSEc7QUFJVkMsZUFBUyxFQUFFLE9BSkQ7QUFLVkMsV0FBSyxFQUFFO0FBTEc7QUFOSixHQW5HK0I7QUFpSHpDSyxVQUFRLEVBQUU7QUFDUmQsUUFBSSxFQUFFLGdCQURFO0FBRVJDLE1BQUUsRUFBRSxVQUZJO0FBR1JDLE9BQUcsRUFBRSxVQUhHO0FBSVJDLFNBQUssRUFBRSxJQUpDO0FBS1JDLFNBQUssRUFBRSxvQkFMQztBQU1SQyxjQUFVLEVBQUU7QUFDVkMsaUJBQVcsRUFDVCw4VEFGUTtBQUdWQyxXQUFLLEVBQUUsTUFIRztBQUlWQyxlQUFTLEVBQUUsT0FKRDtBQUtWQyxXQUFLLEVBQUU7QUFMRztBQU5KO0FBakgrQixDQUEzQztBQWlJZVYsbUVBQWYsRTs7Ozs7Ozs7Ozs7O0FDaklBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNZ0IsUUFBTixDQUFlO0FBQ2JDLGFBQVcsR0FBRyxDQUFFOztBQUVoQixRQUFNQyxNQUFOLEdBQW9DO0FBQ2xDLFVBQU1DLE9BQU8sR0FBR0MsTUFBTSxDQUFDQyxNQUFQLENBQWNDLDZDQUFkLENBQWhCO0FBQ0EsVUFBTUMsV0FBVyxFQUFqQjtBQUNBLFdBQU9KLE9BQVA7QUFDRDs7QUFFRCxRQUFNSyxPQUFOLENBQWN0QixFQUFkLEVBQW9EO0FBQ2xELFFBQUksQ0FBQ2tCLE1BQU0sQ0FBQ0ssU0FBUCxDQUFpQkMsY0FBakIsQ0FBZ0NDLElBQWhDLENBQXFDTCw2Q0FBckMsRUFBOENwQixFQUE5QyxDQUFMLEVBQXdEO0FBQ3RELGFBQU8sSUFBUDtBQUNEOztBQUVELFVBQU0wQixLQUFLLEdBQUdOLDZDQUFPLENBQUNwQixFQUFELENBQXJCO0FBQ0EsVUFBTXFCLFdBQVcsRUFBakI7QUFDQSxXQUFPSyxLQUFQO0FBQ0Q7O0FBakJZLEMsQ0FvQmY7OztBQUNBLE1BQU1MLFdBQVcsR0FBRyxNQUNsQixJQUFJTSxPQUFKLENBQWFDLE9BQUQsSUFBYTtBQUN2QixRQUFNQyxHQUFHLEdBQUcsR0FBWjtBQUNBLFFBQU1DLEdBQUcsR0FBRyxHQUFaO0FBQ0EsUUFBTUMsS0FBSyxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFBSSxDQUFDRSxNQUFMLE1BQWlCTCxHQUFHLEdBQUdDLEdBQU4sR0FBWSxDQUE3QixDQUFYLElBQThDQSxHQUE1RDtBQUVBSyxZQUFVLENBQUNQLE9BQUQsRUFBVUcsS0FBVixDQUFWO0FBQ0QsQ0FORCxDQURGOztBQVNlakIsdUVBQWYsRTs7Ozs7Ozs7Ozs7O0FDbENBO0FBQUE7QUFBQTs7QUFFQSxNQUFNc0IsT0FBTyxHQUFHLE9BQU9DLE9BQVAsRUFBZ0NDLFFBQWhDLEtBQThEO0FBQzdFLFFBQU1DLEVBQUUsR0FBRyxJQUFJQyxpREFBSixFQUFYO0FBRUEsUUFBTXhDLEVBQUUsR0FBR3FDLE9BQU8sQ0FBQ0ksS0FBUixDQUFjekMsRUFBekI7QUFFQSxRQUFNMEMsR0FBRyxHQUFHLE1BQU1ILEVBQUUsQ0FBQ2pCLE9BQUgsQ0FBV3RCLEVBQVgsQ0FBbEIsQ0FMNkUsQ0FNN0U7QUFDQTtBQUNBOztBQUNBc0MsVUFBUSxDQUFDSyxNQUFULENBQWdCLEdBQWhCLEVBQXFCQyxJQUFyQixDQUEwQkYsR0FBMUI7QUFDQSxDQVZEOztBQVllTixzRUFBZixFIiwiZmlsZSI6InBhZ2VzL2FwaS9hdm8vW2lkXS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvYXBpL2F2by9baWRdLnRzXCIpO1xuIiwiY29uc3QgZGF0YTogUmVjb3JkPFRQcm9kdWN0SWQsIFRQcm9kdWN0PiA9IHtcbiAgJzJ6ZDMzYjhjJzoge1xuICAgIG5hbWU6ICdNYWx1bWEgSGFzcyBBdm9jYWRvJyxcbiAgICBpZDogJzJ6ZDMzYjhjJyxcbiAgICBza3U6ICdOVVI3MktDTScsXG4gICAgcHJpY2U6IDEuMTUsXG4gICAgaW1hZ2U6ICcvaW1hZ2VzL21hbHVtYS5qcGcnLFxuICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAnQSByZWxhdGl2ZWx5IG5ldyBjdWx0aXZhciwgaXQgd2FzLCB0aGUgcHJldHR5IGJveSBiYWJ5LCBkaXNjb3ZlcmVkIGluIFNvdXRoIEFmcmljYSBpbiB0aGUgZWFybHkgMTk5MHMgYnkgTXIuIEEuRy4gKERyaWVzKSBKb3ViZXJ0LiBNYWx1bWEgQmFieXkuIEl0IGlzIGEgY2hhbmNlIHNlZWRsaW5nIG9mIHVua25vd24gcGFyZW50YWdlJyxcbiAgICAgIHNoYXBlOiAnT3ZhbCcsXG4gICAgICBoYXJkaW5lc3M6ICcxIMKwQycsXG4gICAgICB0YXN0ZTogJ0NhdGNoeSwgaXMgYW4gYXZvY2FkbycsXG4gICAgfSxcbiAgfSxcbiAgJzZ0cmZna2tqJzoge1xuICAgIG5hbWU6ICdGdWVydGUgQXZvY2FkbycsXG4gICAgaWQ6ICc2dHJmZ2traicsXG4gICAgc2t1OiAnQVg0TThTSlYnLFxuICAgIHByaWNlOiAxLjIxLFxuICAgIGltYWdlOiAnL2ltYWdlcy9mdWVydGUuanBnJyxcbiAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgJ1RoZSBGdWVydGUgYXZvY2FkbyBpcyB0aGUgc2Vjb25kIGxhcmdlc3QgY29tbWVyY2lhbCB2YXJpZXR5IGJlaGluZCBIYXNzLiBJdCBpcyBhIGxvbmcgdGltZSBDYWxpZm9ybmlhIGNvbW1lcmNpYWwgdmFyaWV0eSB2YWx1ZWQgZm9yIGl0cyB3aW50ZXIgc2Vhc29uIHJpcGVuaW5nIGFuZCBpdHMgQi1UeXBlIGJsb3Nzb20gdHlwZSB3aGljaCBtb3N0IGdyb3dlcnMgcGxhbnQgYWRqYWNlbnQgdG8gdGhlIEhhc3MgZm9yIGEgbW9yZSBjb25zaXN0ZW50IHByb2R1Y3Rpb24gY3ljbGUuIFRoaXMgYXZvY2FkbyB0ZW5kcyB0byBwcm9kdWNlIGhlYXZpbHkgaW4gYWx0ZXJuYXRlIHllYXJzLicsXG4gICAgICBzaGFwZTogJ1BlYXInLFxuICAgICAgaGFyZGluZXNzOiAnLTEgwrBDJyxcbiAgICAgIHRhc3RlOiAnTWFnbmlmaWNlbnQsIGlzIGEgc3Ryb25nIGF2b2NhZG8nLFxuICAgIH0sXG4gIH0sXG4gICc3YmNyNDllbSc6IHtcbiAgICBuYW1lOiAnR3dlbiBIYXNzIEF2b2NhZG8nLFxuICAgIGlkOiAnN2JjcjQ5ZW0nLFxuICAgIHNrdTogJ0hZQTc4RjZKJyxcbiAgICBwcmljZTogMS4yNSxcbiAgICBpbWFnZTogJy9pbWFnZXMvZ3dlbi5qcGcnLFxuICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICBcIkEgc2VlZGxpbmcgYnJlZCBmcm9tICdIYXNzJyB4ICdUaGlsbGUnIGluIDE5ODIsICdHd2VuJyBpcyBoaWdoZXIgeWllbGRpbmcgYW5kIG1vcmUgZHdhcmZpbmcgdGhhbiAnSGFzcycgaW4gQ2FsaWZvcm5pYS4gVGhlIGZydWl0IGhhcyBhbiBvdmFsIHNoYXBlLCBzbGlnaHRseSBzbWFsbGVyIHRoYW4gJ0hhc3MnICgxMDDigJMyMDAgZyBvciAzLjXigJM3LjEgb3opLCB3aXRoIGEgcmljaCwgbnV0dHkgZmxhdm9yLiBUaGUgc2tpbiB0ZXh0dXJlIGlzIG1vcmUgZmluZWx5IHBlYmJsZWQgdGhhbiAnSGFzcycsIGFuZCBpcyBkdWxsIGdyZWVuIHdoZW4gcmlwZS4gSXQgaXMgZnJvc3QtaGFyZHkgZG93biB0byDiiJIxIMKwQyAoMzAgwrBGKVwiLFxuICAgICAgc2hhcGU6ICdQbHVtcCcsXG4gICAgICBoYXJkaW5lc3M6ICfiiJIxIMKwQycsXG4gICAgICB0YXN0ZTogJ1N1cGVyYiwgaXMgYW4gYXZvY2FkbycsXG4gICAgfSxcbiAgfSxcbiAgJzA5ODMyM2tzJzoge1xuICAgIG5hbWU6ICdCYWNvbiBBdm9jYWRvJyxcbiAgICBpZDogJzA5ODMyM2tzJyxcbiAgICBza3U6ICdCWEQxMDBCTEsnLFxuICAgIHByaWNlOiAxLjUxLFxuICAgIGltYWdlOiAnL2ltYWdlcy9iYWNvbi5qcGcnLFxuICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAnRGV2ZWxvcGVkIGJ5IGEgZmFybWVyLCBKYW1lcyBCYWNvbiwgaW4gMTk1NCwgQmFjb24gaGFzIG1lZGl1bS1zaXplZCBmcnVpdCB3aXRoIHNtb290aCwgZ3JlZW4gc2tpbiB3aXRoIHllbGxvdy1ncmVlbiwgbGlnaHQtdGFzdGluZyBmbGVzaC4gV2hlbiByaXBlLCB0aGUgc2tpbiByZW1haW5zIGdyZWVuLCBidXQgZGFya2VucyBzbGlnaHRseSwgYW5kIGZydWl0IHlpZWxkcyB0byBnZW50bGUgcHJlc3N1cmUuIEl0IGlzIGNvbGQtaGFyZHkgZG93biB0byDiiJI1IMKwQyAoMjMgwrBGKScsXG4gICAgICBzaGFwZTogJ092YWwnLFxuICAgICAgaGFyZGluZXNzOiAn4oiSNSDCsEMnLFxuICAgICAgdGFzdGU6ICdDcmVhbXksIGlzIGFuIGF2b2NhZG8nLFxuICAgIH0sXG4gIH0sXG4gIGI4dXRoZTJ5OiB7XG4gICAgbmFtZTogJ0hhc3MgQXZvY2FkbycsXG4gICAgaWQ6ICdiOHV0aGUyeScsXG4gICAgc2t1OiAnUk1SQ1pON0UnLFxuICAgIHByaWNlOiAxLjM5LFxuICAgIGltYWdlOiAnL2ltYWdlcy9oYXNzLmpwZycsXG4gICAgYXR0cmlidXRlczoge1xuICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgIFwiVGhlICdIYXNzJyBpcyB0aGUgbW9zdCBjb21tb24gY3VsdGl2YXIgb2YgYXZvY2Fkby4gSXQgcHJvZHVjZXMgZnJ1aXQgeWVhci1yb3VuZCBhbmQgYWNjb3VudHMgZm9yIDgwJSBvZiBjdWx0aXZhdGVkIGF2b2NhZG9zIGluIHRoZSB3b3JsZC5bMjFdWzU1XSBBbGwgJ0hhc3MnIHRyZWVzIGFyZSBkZXNjZW5kZWQgZnJvbSBhIHNpbmdsZSAnbW90aGVyIHRyZWUnIHJhaXNlZCBieSBhIG1haWwgY2FycmllciBuYW1lZCBSdWRvbHBoIEhhc3MsIG9mIExhIEhhYnJhIEhlaWdodHMsIENhbGlmb3JuaWEuWzIwXVs1NV0gSGFzcyBwYXRlbnRlZCB0aGUgcHJvZHVjdGl2ZSB0cmVlIGluIDE5MzUuIFRoZSAnbW90aGVyIHRyZWUnLCBvZiB1bmNlcnRhaW4gc3Vic3BlY2llcywgZGllZCBvZiByb290IHJvdCBhbmQgd2FzIGN1dCBkb3duIGluIFNlcHRlbWJlciAyMDAyLlsyMV1bNTVdWzU2XSAnSGFzcycgdHJlZXMgaGF2ZSBtZWRpdW0tc2l6ZWQgKDE1MOKAkzI1MCBnIG9yIDUuM+KAkzguOCBveiksIG92YXRlIGZydWl0IHdpdGggYSBibGFjaywgcGViYmxlZCBza2luLiBUaGUgZmxlc2ggaGFzIGEgbnV0dHksIHJpY2ggZmxhdm9yIHdpdGggMTklIG9pbC4gQSBoeWJyaWQgR3VhdGVtYWxhbiB0eXBlIGNhbiB3aXRoc3RhbmQgdGVtcGVyYXR1cmVzIHRvIOKIkjEgwrBDICgzMCDCsEYpXCIsXG4gICAgICBzaGFwZTogJ092YWwnLFxuICAgICAgaGFyZGluZXNzOiAn4oiSMSDCsEMnLFxuICAgICAgdGFzdGU6ICdHb3JnZW91cywgaXMgYW4gYXZvY2FkbycsXG4gICAgfSxcbiAgfSxcbiAgZXd4c2Q2eGI6IHtcbiAgICBuYW1lOiAnTGFtYiBIYXNzIEF2b2NhZG8nLFxuICAgIGlkOiAnZXd4c2Q2eGInLFxuICAgIHNrdTogJ041NTIyOVpBJyxcbiAgICBwcmljZTogMS4zNCxcbiAgICBpbWFnZTogJy9pbWFnZXMvbGFtYi5qcGcnLFxuICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAnVGhlIExhbWIgSGFzcyBhdm9jYWRvIGlzIGEgY3Jvc3MgYmV0d2VlbiBhIEhhc3MgYW5kIEd3ZW4gYXZvY2Fkby4gVGhlIGZydWl0cyBhcmUgbGFyZ2VyIGluIHNpemUgYW5kIGxhdGVyIG1hdHVyaW5nIHRoYW4gSGFzcy4gSXQgaXMgZ2FpbmluZyBpbiBwb3B1bGFyaXR5IGFzIGEgY29tbWVyY2lhbCBhbmQgYmFja3lhcmQgdmFyaWV0eSBkdWUgdG8gaXRzIGV4Y2VwdGlvbmFsIGZsYXZvciBhbmQgZWFzeSBwZWVsaW5nIHF1YWxpdGllcy4gVGhlIHRyZWUgaGFzIGFuIHVwcmlnaHQsIGNvbXBhY3QgaGFiaXQuJyxcbiAgICAgIHNoYXBlOiAnT2JvdmF0ZScsXG4gICAgICBoYXJkaW5lc3M6ICctMiDCsEMnLFxuICAgICAgdGFzdGU6ICdHcmVhdCwgaXMgYW4gYXZvY2FkbycsXG4gICAgfSxcbiAgfSxcbiAgZnByNzJtOWs6IHtcbiAgICBuYW1lOiAnUGlua2VydG9uIEF2b2NhZG8nLFxuICAgIGlkOiAnZnByNzJtOWsnLFxuICAgIHNrdTogJ0I0SFo0MlRNJyxcbiAgICBwcmljZTogMS4yNyxcbiAgICBpbWFnZTogJy9pbWFnZXMvcGlua2VydG9uLmpwZycsXG4gICAgYXR0cmlidXRlczoge1xuICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgIFwiRmlyc3QgZ3Jvd24gb24gdGhlIFBpbmtlcnRvbiBSYW5jaCBpbiBTYXRpY295LCBDYWxpZm9ybmlhLCBpbiB0aGUgZWFybHkgMTk3MHMsICdQaW5rZXJ0b24nIGlzIGEgc2VlZGxpbmcgb2YgJ0hhc3MnIHggJ1JpbmNvbicuIFRoZSBsYXJnZSBmcnVpdCBoYXMgYSBzbWFsbCBzZWVkLCBhbmQgaXRzIGdyZWVuIHNraW4gZGVlcGVucyBpbiBjb2xvciBhcyBpdCByaXBlbnMuIFRoZSB0aGljayBmbGVzaCBoYXMgYSBzbW9vdGgsIGNyZWFteSB0ZXh0dXJlLCBwYWxlIGdyZWVuIGNvbG9yLCBnb29kIGZsYXZvciwgYW5kIGhpZ2ggb2lsIGNvbnRlbnQuIEl0IHNob3dzIHNvbWUgY29sZCB0b2xlcmFuY2UsIHRvIOKIkjEgwrBDICgzMCDCsEYpIGFuZCBiZWFycyBjb25zaXN0ZW50bHkgaGVhdnkgY3JvcHMuIEEgaHlicmlkIEd1YXRlbWFsYW4gdHlwZSwgaXQgaGFzIGV4Y2VsbGVudCBwZWVsaW5nIGNoYXJhY3RlcmlzdGljc1wiLFxuICAgICAgc2hhcGU6ICdMb25nIHBlYXInLFxuICAgICAgaGFyZGluZXNzOiAn4oiSMSDCsEMnLFxuICAgICAgdGFzdGU6ICdNYXJ2ZWxvdXMsIGlzIGFuIGF2b2NhZG8nLFxuICAgIH0sXG4gIH0sXG4gIHQ5ZHYyNWdzOiB7XG4gICAgbmFtZTogJ1JlZWQgQXZvY2FkbycsXG4gICAgaWQ6ICd0OWR2MjVncycsXG4gICAgc2t1OiAnWlkzVDlYWEMnLFxuICAgIHByaWNlOiAxLjE4LFxuICAgIGltYWdlOiAnL2ltYWdlcy9yZWVkLmpwZycsXG4gICAgYXR0cmlidXRlczoge1xuICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICdEZXZlbG9wZWQgZnJvbSBhIGNoYW5jZSBzZWVkbGluZyBmb3VuZCBpbiAxOTQ4IGJ5IEphbWVzIFMuIFJlZWQgaW4gQ2FsaWZvcm5pYSwgdGhpcyBjdWx0aXZhciBoYXMgbGFyZ2UsIHJvdW5kLCBncmVlbiBmcnVpdCB3aXRoIGEgc21vb3RoIHRleHR1cmUgYW5kIGRhcmssIHRoaWNrLCBnbG9zc3kgc2tpbi4gU21vb3RoIGFuZCBkZWxpY2F0ZSwgdGhlIGZsZXNoIGhhcyBhIHNsaWdodGx5IG51dHR5IGZsYXZvci4gVGhlIHNraW4gcmlwZW5zIGdyZWVuLiBBIEd1YXRlbWFsYW4gdHlwZSwgaXQgaXMgaGFyZHkgdG8g4oiSMSDCsEMgKDMwIMKwRikuIFRyZWUgc2l6ZSBpcyBhYm91dCA1IGJ5IDQgbSAoMTYuNCBieSAxMy4xIGZ0KScsXG4gICAgICBzaGFwZTogJ1JvdW5kJyxcbiAgICAgIGhhcmRpbmVzczogJ+KIkjEgwrBDJyxcbiAgICAgIHRhc3RlOiAnRXhxdWlzaXRlLCBpcyBhbiBhdm9jYWRvJyxcbiAgICB9LFxuICB9LFxuICB0MzQ1dzQ4eToge1xuICAgIG5hbWU6ICdadXRhbm8gQXZvY2FkbycsXG4gICAgaWQ6ICd0MzQ1dzQ4eScsXG4gICAgc2t1OiAnTVc3OVpaNlknLFxuICAgIHByaWNlOiAxLjI1LFxuICAgIGltYWdlOiAnL2ltYWdlcy96dXRhbm8uanBnJyxcbiAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgJ1RoZSBadXRhbm8gYXZvY2FkbyBpcyBhIGNvbGQgaGFyZHksIGNvbnNpc3RlbnQgcHJvZHVjaW5nIGF2b2NhZG8gdmFyaWV0eS4gSXQgcmVzZW1ibGVzIHRoZSBGdWVydGUgaW4gYXBwZWFyYW5jZSBidXQgaXMgbGVzcyBmbGF2b3JmdWwgYnV0IG1vcmUgY29sZCBoYXJkeS4gVGhlIGdyZWVuIGZydWl0cyBhcmUgb2JvdmF0ZSBpbiBzaGFwZSB3aXRoIHdheHkgYnVtcHMgb24gdGhlIHNraW4uIFRoZSBmbGVzaCBoYXMgYSBsb3cgb2lsIGJ1dCBoaWdoIHdhdGVyIGNvbnRlbnQgd2hpY2ggY2F1c2VzIGl0IHRvIGhhdmUgYSBtb3JlIGZpYnJvdXMgdGV4dHVyZS4nLFxuICAgICAgc2hhcGU6ICdQZWFyJyxcbiAgICAgIGhhcmRpbmVzczogJy01IMKwQycsXG4gICAgICB0YXN0ZTogJ1NwbGVuZGlkLCBpcyBhbiBhdm9jYWRvJyxcbiAgICB9LFxuICB9LFxufVxuXG5leHBvcnQgZGVmYXVsdCBkYXRhXG4iLCIvLyBPaCB5b3UgY3VyaW91cy4uLlxuLy8gVGhpcyBpcyBub3QgYSByZWFsIGRhdGFiYXNlLFxuLy8gQnV0IGxldCdzIGltYWdpbmUgaXQgaXMgb25lIDopXG5pbXBvcnQgYWxsRGF0YSBmcm9tICcuL2RhdGEnXG5cbmNsYXNzIERhdGFiYXNlIHtcbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIGFzeW5jIGdldEFsbCgpOiBQcm9taXNlPFRQcm9kdWN0W10+IHtcbiAgICBjb25zdCBhc0FycmF5ID0gT2JqZWN0LnZhbHVlcyhhbGxEYXRhKVxuICAgIGF3YWl0IHJhbmRvbURlbGF5KClcbiAgICByZXR1cm4gYXNBcnJheVxuICB9XG5cbiAgYXN5bmMgZ2V0QnlJZChpZDogc3RyaW5nKTogUHJvbWlzZTxUUHJvZHVjdCB8IG51bGw+IHtcbiAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChhbGxEYXRhLCBpZCkpIHtcbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuXG4gICAgY29uc3QgZW50cnkgPSBhbGxEYXRhW2lkXVxuICAgIGF3YWl0IHJhbmRvbURlbGF5KClcbiAgICByZXR1cm4gZW50cnlcbiAgfVxufVxuXG4vLyBMZXQncyBhbHNvIGFkZCBhIGRlbGF5IHRvIG1ha2UgaXQgYSBiaXQgY2xvc2VyIHRvIHJlYWxpdHlcbmNvbnN0IHJhbmRvbURlbGF5ID0gKCkgPT5cbiAgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICBjb25zdCBtYXggPSAzNTBcbiAgICBjb25zdCBtaW4gPSAxMDBcbiAgICBjb25zdCBkZWxheSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSkgKyBtaW5cblxuICAgIHNldFRpbWVvdXQocmVzb2x2ZSwgZGVsYXkpXG4gIH0pXG5cbmV4cG9ydCBkZWZhdWx0IERhdGFiYXNlXG4iLCJpbXBvcnQge05leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2V9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgREIgZnJvbSAnQGRhdGFiYXNlJztcblxuY29uc3QgYWxsQXZvcyA9IGFzeW5jIChyZXF1ZXN0OiBOZXh0QXBpUmVxdWVzdCwgcmVzcG9uc2U6IE5leHRBcGlSZXNwb25zZSkgPT4ge1xuXHRjb25zdCBkYiA9IG5ldyBEQigpO1xuXG5cdGNvbnN0IGlkID0gcmVxdWVzdC5xdWVyeS5pZDtcblxuXHRjb25zdCBhdm8gPSBhd2FpdCBkYi5nZXRCeUlkKGlkIGFzIHN0cmluZyk7XG5cdC8vIHJlc3BvbnNlLnN0YXR1c0NvZGUgPSAyMDA7XG5cdC8vIHJlc3BvbnNlLnNldEhlYWRlcignQ29udGVudC10eXBlJywgJ2FwcGxpY2F0aW9uL2pzb24nKTtcblx0Ly8gcmVzcG9uc2UuZW5kKEpTT04uc3RyaW5naWZ5KHtkYXRhOiBlbnRyeX0pKTtcblx0cmVzcG9uc2Uuc3RhdHVzKDIwMCkuanNvbihhdm8pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBhbGxBdm9zOyJdLCJzb3VyY2VSb290IjoiIn0=