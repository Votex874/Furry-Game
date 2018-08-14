/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/app.js":
/*!*******************!*\
  !*** ./js/app.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _game = __webpack_require__(/*! ./partials/game */ \"./js/partials/game.js\");\n\nvar game1 = new _game.Game(); // function Furry() {\n//     this.x = 0;\n//     this.y = 0;\n//     this.direction = \"right\";\n// }\n//\n// function Coin() {\n//     this.x = Math.floor(Math.random() * (10));\n//     this.y = Math.floor(Math.random() * (10));\n// }\n\n\n// function Game() {\n//     this.board = document.querySelectorAll(\"#board div\");\n//     this.furry = new Furry();\n//     this.coin = new Coin();\n//     this.score = 0;\n//     this.index = function(x,y) {\n//         return x + (y * 10);\n//     };\n//     this.showFurry = function () {\n//\n//         this.board[ this.index(this.furry.x,this.furry.y) ].classList.add('furry');\n//     };\n//     this.hideVisibleFurry = function () {\n//         var actuallDiv = document.querySelector(\".furry\");\n//         actuallDiv.classList.remove(\"furry\");\n//     }\n//     this.showCoin = function () {\n//         this.board[ this.index(this.coin.x, this.coin.y)].classList.add(\"coin\");\n//     }\n//     this.moveFurry = function () {\n//         this.gameOver();\n//\n//\n//         if(this.furry.direction === \"right\") {\n//             this.furry.x = this.furry.x + 1;\n//         } else if(this.furry.direction === \"down\"){\n//             this.furry.y = this.furry.y + 1;\n//         }else if(this.furry.direction === \"left\"){\n//             this.furry.x = this.furry.x -1;\n//         }else{\n//             this.furry.y = this.furry.y - 1;\n//         }\n//\n//         this.hideVisibleFurry();\n//         this.showFurry();\n//         this.checkCoinCollision()\n//         return this.gameOver();\n//     }\n//\n//     this.turnFurry = function (event) {\n//         switch (event.which) {\n//             case 37:\n//                 this.furry.direction = \"left\";\n//                 break;\n//             case 39:\n//                 this.furry.direction = \"right\";\n//                 break;\n//             case 38:\n//                 this.furry.direction = \"up\";\n//                 break;\n//             case 40:\n//                 this.furry.direction = \"down\";\n//         }\n//     };\n//     this.checkCoinCollision = function () {\n//         if(this.furry.x === this.coin.x && this.furry.y === this.coin.y){\n//             var actuallCoin = document.querySelector(\".coin\");\n//             actuallCoin.classList.remove(\"coin\");\n//\n//             this.score = this.score +1;\n//             var scoreHTML = document.querySelector(\"#score strong\");\n//             scoreHTML.innerText = this.score;\n//             this.coin = new Coin();\n//             this.showCoin();\n//         }\n//     };\n//     this.gameOver = function () {\n//         if (this.furry.x < 0 || this.furry.y < 0 || this.furry.x > 9 || this.furry.y > 9) {\n//             clearInterval(this.idSetInterval);\n//             var endDiv = document.querySelector('#over');\n//             var endBox = document.createElement(\"div\");\n//             var endText = document.createElement(\"div\");\n//             endDiv.classList.remove(\"invisible\");\n//             endDiv.appendChild(endBox);\n//             endDiv.appendChild(endText);\n//             endDiv.style.display = \"flex\";\n//             endDiv.style.justifyContent = \"center\";\n//             endDiv.style.alignItems = \"center\";\n//             endDiv.style.flexDirection = \"column\";\n//             endBox.innerText = \"Game Over \\n\";\n//             endBox.style.fontSize = \"50px\";\n//             endBox.style.color = \"white\";\n//             endText.innerText = \"You collected \" + this.score+\" points\";\n//             endText.style.color = \"white\";\n//             endText.style.fontSize = \"26px\";\n//\n//         }\n//     };\n//\n//     this.startGame = function() {\n//         var self = this;\n//         this.idSetInterval = setInterval( function() {\n//             self.moveFurry();\n//         }, 250);\n//     };\n// }\n\n\ngame1.showFurry();\ngame1.showCoin();\ngame1.startGame();\n\ndocument.addEventListener('keydown', function (event) {\n    game1.turnFurry(event);\n});\n\n//# sourceURL=webpack:///./js/app.js?");

/***/ }),

/***/ "./js/partials/coin.js":
/*!*****************************!*\
  !*** ./js/partials/coin.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nfunction Coin() {\n    this.x = Math.floor(Math.random() * 10);\n    this.y = Math.floor(Math.random() * 10);\n}\nexports.Coin = Coin;\n\n//# sourceURL=webpack:///./js/partials/coin.js?");

/***/ }),

/***/ "./js/partials/furry.js":
/*!******************************!*\
  !*** ./js/partials/furry.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nfunction Furry() {\n    this.x = 0;\n    this.y = 0;\n    this.direction = \"right\";\n}\n\nexports.Furry = Furry;\n\n//# sourceURL=webpack:///./js/partials/furry.js?");

/***/ }),

/***/ "./js/partials/game.js":
/*!*****************************!*\
  !*** ./js/partials/game.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.Game = undefined;\n\nvar _furry = __webpack_require__(/*! ./furry */ \"./js/partials/furry.js\");\n\nvar _coin = __webpack_require__(/*! ./coin */ \"./js/partials/coin.js\");\n\nfunction Game() {\n    this.board = document.querySelectorAll(\"#board div\");\n    this.furry = new _furry.Furry();\n    this.coin = new _coin.Coin();\n    this.score = 0;\n    this.index = function (x, y) {\n        return x + y * 10;\n    };\n    this.showFurry = function () {\n\n        this.board[this.index(this.furry.x, this.furry.y)].classList.add('furry');\n    };\n    this.hideVisibleFurry = function () {\n        var actuallDiv = document.querySelector(\".furry\");\n        actuallDiv.classList.remove(\"furry\");\n    };\n    this.showCoin = function () {\n        this.board[this.index(this.coin.x, this.coin.y)].classList.add(\"coin\");\n    };\n    this.moveFurry = function () {\n        this.gameOver();\n\n        if (this.furry.direction === \"right\") {\n            this.furry.x = this.furry.x + 1;\n        } else if (this.furry.direction === \"down\") {\n            this.furry.y = this.furry.y + 1;\n        } else if (this.furry.direction === \"left\") {\n            this.furry.x = this.furry.x - 1;\n        } else {\n            this.furry.y = this.furry.y - 1;\n        }\n\n        this.hideVisibleFurry();\n        this.showFurry();\n        this.checkCoinCollision();\n        return this.gameOver();\n    };\n\n    this.turnFurry = function (event) {\n        switch (event.which) {\n            case 37:\n                this.furry.direction = \"left\";\n                break;\n            case 39:\n                this.furry.direction = \"right\";\n                break;\n            case 38:\n                this.furry.direction = \"up\";\n                break;\n            case 40:\n                this.furry.direction = \"down\";\n        }\n    };\n    this.checkCoinCollision = function () {\n        if (this.furry.x === this.coin.x && this.furry.y === this.coin.y) {\n            var actuallCoin = document.querySelector(\".coin\");\n            actuallCoin.classList.remove(\"coin\");\n\n            this.score = this.score + 1;\n            var scoreHTML = document.querySelector(\"#score strong\");\n            scoreHTML.innerText = this.score;\n            this.coin = new _coin.Coin();\n            this.showCoin();\n        }\n    };\n    this.gameOver = function () {\n        if (this.furry.x < 0 || this.furry.y < 0 || this.furry.x > 9 || this.furry.y > 9) {\n            clearInterval(this.idSetInterval);\n            var endDiv = document.querySelector('#over');\n            var endBox = document.createElement(\"div\");\n            var endText = document.createElement(\"div\");\n            endDiv.classList.remove(\"invisible\");\n            endDiv.appendChild(endBox);\n            endDiv.appendChild(endText);\n            endDiv.style.display = \"flex\";\n            endDiv.style.justifyContent = \"center\";\n            endDiv.style.alignItems = \"center\";\n            endDiv.style.flexDirection = \"column\";\n            endBox.innerText = \"Game Over \\n\";\n            endBox.style.fontSize = \"50px\";\n            endBox.style.color = \"white\";\n            endText.innerText = \"You collected \" + this.score + \" points\";\n            endText.style.color = \"white\";\n            endText.style.fontSize = \"26px\";\n        }\n    };\n\n    this.startGame = function () {\n        var self = this;\n        this.idSetInterval = setInterval(function () {\n            self.moveFurry();\n        }, 250);\n    };\n}\n\nexports.Game = Game;\n\n//# sourceURL=webpack:///./js/partials/game.js?");

/***/ })

/******/ });