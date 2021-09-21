System.register(["single-spa"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE_single_spa__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_single_spa__, "__esModule", { value: true });
	return {
		setters: [
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_single_spa__[key] = module[key];
				});
			}
		],
		execute: function() {
			__WEBPACK_DYNAMIC_EXPORT__(
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/systemjs-webpack-interop/auto-public-path/auto-public-path.js":
/*!************************************************************************************!*\
  !*** ./node_modules/systemjs-webpack-interop/auto-public-path/auto-public-path.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

const resolveDirectory = __webpack_require__(/*! ../public-path */ "./node_modules/systemjs-webpack-interop/public-path.js").resolveDirectory;

exports.autoPublicPath = function autoPublicPath(rootDirLevel) {
  if (!rootDirLevel) {
    rootDirLevel = 1;
  }

  if (true) {
    if (false) {}

    if (!__webpack_require__.y.meta || !__webpack_require__.y.meta.url) {
      console.error("__system_context__", __webpack_require__.y);
      throw Error(
        "systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided"
      );
    }

    __webpack_require__.p = resolveDirectory(
      __webpack_require__.y.meta.url,
      rootDirLevel
    );
  }
};


/***/ }),

/***/ "./node_modules/systemjs-webpack-interop/public-path.js":
/*!**************************************************************!*\
  !*** ./node_modules/systemjs-webpack-interop/public-path.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

exports.setPublicPath = function setPublicPath(
  systemjsModuleName,
  rootDirectoryLevel
) {
  if (!rootDirectoryLevel) {
    rootDirectoryLevel = 1;
  }
  if (
    typeof systemjsModuleName !== "string" ||
    systemjsModuleName.trim().length === 0
  ) {
    throw Error(
      "systemjs-webpack-interop: setPublicPath(systemjsModuleName) must be called with a non-empty string 'systemjsModuleName'"
    );
  }

  if (
    typeof rootDirectoryLevel !== "number" ||
    rootDirectoryLevel <= 0 ||
    isNaN(rootDirectoryLevel) ||
    !isInteger(rootDirectoryLevel)
  ) {
    throw Error(
      "systemjs-webpack-interop: setPublicPath(systemjsModuleName, rootDirectoryLevel) must be called with a positive integer 'rootDirectoryLevel'"
    );
  }

  var moduleUrl;
  try {
    moduleUrl = window.System.resolve(systemjsModuleName);
    if (!moduleUrl) {
      throw Error();
    }
  } catch (err) {
    throw Error(
      "systemjs-webpack-interop: There is no such module '" +
        systemjsModuleName +
        "' in the SystemJS registry. Did you misspell the name of your module?"
    );
  }

  __webpack_require__.p = resolveDirectory(moduleUrl, rootDirectoryLevel);
};

function resolveDirectory(urlString, rootDirectoryLevel) {
  // Our friend IE11 doesn't support new URL()
  // https://github.com/single-spa/single-spa/issues/612
  // https://gist.github.com/jlong/2428561

  var a = document.createElement("a");
  a.href = urlString;

  var pathname = a.pathname[0] === "/" ? a.pathname : "/" + a.pathname;
  var numDirsProcessed = 0,
    index = pathname.length;
  while (numDirsProcessed !== rootDirectoryLevel && index >= 0) {
    var char = pathname[--index];
    if (char === "/") {
      numDirsProcessed++;
    }
  }

  if (numDirsProcessed !== rootDirectoryLevel) {
    throw Error(
      "systemjs-webpack-interop: rootDirectoryLevel (" +
        rootDirectoryLevel +
        ") is greater than the number of directories (" +
        numDirsProcessed +
        ") in the URL path " +
        urlString
    );
  }

  var finalPath = pathname.slice(0, index + 1);

  return a.protocol + "//" + a.host + finalPath;
}

exports.resolveDirectory = resolveDirectory;

// borrowed from https://github.com/parshap/js-is-integer/blob/master/index.js
var isInteger =
  Number.isInteger ||
  function isInteger(val) {
    return typeof val === "number" && isFinite(val) && Math.floor(val) === val;
  };


/***/ }),

/***/ "single-spa":
/*!*****************************!*\
  !*** external "single-spa" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_single_spa__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/__system_context__ */
/******/ 	(() => {
/******/ 		__webpack_require__.y = __system_context__;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
/*!*********************************************************************!*\
  !*** ./node_modules/systemjs-webpack-interop/auto-public-path/1.js ***!
  \*********************************************************************/
const autoPublicPath = __webpack_require__(/*! ./auto-public-path */ "./node_modules/systemjs-webpack-interop/auto-public-path/auto-public-path.js").autoPublicPath;

autoPublicPath(1);

})();

// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*********************************!*\
  !*** ./src/zuri-root-config.js ***!
  \*********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var single_spa__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! single-spa */ "single-spa");

(0,single_spa__WEBPACK_IMPORTED_MODULE_0__.registerApplication)({
  name: '@zuri/zuri-plugin-company-files',
  app: function app() {
    return System["import"]("@zuri/zuri-plugin-company-files");
  },
  activeWhen: ["/"]
});
(0,single_spa__WEBPACK_IMPORTED_MODULE_0__.start)({
  urlRerouteOnly: true
});
})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=zuri-root-config.js.map