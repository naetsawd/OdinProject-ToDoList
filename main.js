/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Roboto-Regular.ttf */ "./src/fonts/Roboto-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
    font-family: 'Roboto';
    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format('ttf'),
        url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format('ttf');
    font-weight: 600;
    font-style: normal;
  }

* {
    padding: 0px;
    margin: 0px;
}

body {
    display: grid;
    font-family: "Roboto", sans-serif;
    font-weight: 500;
}

/* Header */
#header {
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    background-color: black;
    grid-column: span 2;
    height: 12vh;
    z-index: 2;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.25);
}

#headerLogo {
    width: 80px;
    height: 80px;
}

#headerTitle {
    color: white;
    font-size: 42px;
    font-family: Arial, Helvetica, sans-serif;
}

/* Sidebar */
#sidebar {
    display: flex;
    flex-direction: column;
    background-color: darkslategray;
    width: 22vw;
    height: 88vh;
    z-index: 1;
    padding: 25px;
    gap: 25px;
    box-sizing: border-box;
    overflow: auto;
}

.sidebarSection {
    display: flex;
    flex-direction: column;
}

.sectionTitle {
    color: whitesmoke;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 32px;
    font-weight: bold;
}

.sectionItem {
    display: flex;
    align-items: center;
    color: whitesmoke;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 18px;
    text-indent: 10px;
    height: 40px;
    transition: all .2s ease-out;
    overflow: hidden;
}

.sectionItem:hover {
    background-color: rgba(0, 0, 0, 0.20);
    border-radius: 10px;
    cursor: pointer;
    transition: all .2s ease-out;
}

/* Content General */
#content {
    display: flex;
    flex-direction: column;
    background-color: whitesmoke;
    width: 78vw;
    height: 88vh;
    z-index: 1;
}

#titleContainer {
    display: flex;
    flex-direction: row;
    align-items: center;
    align-self: center;
    width: 65vw;
    height: 50px;
    margin: 25px;
    margin-bottom: 10px;
}

#removeProjectBtn {
    width: 50px;
    height: 50px;
    margin-right: 10px;
    transition: all .2s ease-out;
}

#removeProjectBtn:hover {
    transform: scale(1.1);
    cursor: pointer;
    transform-origin: 50% 50%;
    transition: all .2s ease-out;
}

#listTitle {
    font-size: 36px;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
    overflow: hidden;
}

#addTaskBtn {
    display: block;
    width: 50px;
    height: 50px;
    margin-left: auto;
    transition: all .2s ease-out;
}

#addTaskBtn:hover {
    transform: scale(1.1);
    cursor: pointer;
    transform-origin: 50% 50%;
    transition: all .2s ease-out;
}

#line {
    align-self: center;
    background: black;
    width: 70vw;
    height: 4px;
    border-radius: 50px;
}

#allTasksContainer {
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    margin: 25px 50px 25px 50px;
    gap: 15px;
    overflow: auto;
}

#addTaskMsg{
    font-size: 25px;
    color: darkgray;
}

.taskContainer {
    display: grid;
    grid-template-columns: 88% 1fr 1fr;
    grid-template-rows: 50% 50%;
    align-items: flex-start;
    justify-content: center;
    text-align: center;
    background-color: black;
    color: white;
    border-radius: 10px;
    width: 700px;
    overflow: hidden;
}

.dateContainer {
    display: flex;
    align-self: flex-start;
    grid-column: span 3;
    margin-bottom: 0px;
    background-color: darkslategray;
}

.taskDate {
    margin: 5px;
    margin-left: 10px;
}

.taskDesc {
    display: inline-block;
    text-align: left;
    min-height: 22.5px;
    max-height: 75px;
    resize: vertical;
    overflow-y: auto;
    overflow-x: hidden;
    word-wrap: break-word;
    margin: 10px 10px 10px 10px;
}

.taskBtns {
    display: flex;
    align-self: center;
    width: 30px;
    height: 30px;
    filter: invert(100%);
    transition: all .2s ease-out;
}

.taskBtns:hover {
    transform: scale(1.1);
    cursor: pointer;
    transform-origin: 50% 50%;
    transition: all .2s ease-out;
}

/* Modal */
#modalContainer {
    display: none;
    position: fixed;
    z-index: 3;
    padding-top: 100px;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgb(0,0,0);
    background-color: rgba(0,0,0,0.4);
}

#modalContent {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: whitesmoke;
    margin: auto;
    border: 1px solid #888;
    width: 30%;
    border-radius: 10px;
    overflow: hidden;
}

#modalHeader {
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: flex-start;
    background-color: darkslategray;
    font-size: 30px;
    color: white;
}

#actionName {
    margin-left: 10px;
    font-size: 20px;
}

#closeModal {
    margin-right: 10px;
    cursor: pointer;
    margin-left: auto;
    font-size: 30px;
}

#modalInputContainer {
    display: grid;
    grid-template-columns: 1fr;
    padding: 20px;
}

#textLabel, #dateLabel {

}

#textInput, #dateInput {
    margin-bottom: 10px;
    border: 1px solid silver;
    border-radius: 10px;
}

#textInput[type=text], #dateInput[type=date] {
    padding: 5px;
  }

#submitBtn {
    display: flex;
    justify-self: flex-end;
    width: 50px;
    background-color: darkslategray;
    color: white;
    border-radius: 10px;
    border: 1px solid #787878;
    padding: 5px;
    width: auto;
    transition: all .2s ease-out;
}

#submitBtn:hover {
    transform: scale(1.025);
    cursor: pointer;
    transform-origin: 50% 50%;
    transition: all .2s ease-out;
}`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n    font-family: 'Roboto';\n    src: url('./fonts/Roboto-Regular.ttf') format('ttf'),\n        url('./fonts/Roboto-Regular.ttf') format('ttf');\n    font-weight: 600;\n    font-style: normal;\n  }\n\n* {\n    padding: 0px;\n    margin: 0px;\n}\n\nbody {\n    display: grid;\n    font-family: \"Roboto\", sans-serif;\n    font-weight: 500;\n}\n\n/* Header */\n#header {\n    position: relative;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: flex-start;\n    background-color: black;\n    grid-column: span 2;\n    height: 12vh;\n    z-index: 2;\n    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.25);\n}\n\n#headerLogo {\n    width: 80px;\n    height: 80px;\n}\n\n#headerTitle {\n    color: white;\n    font-size: 42px;\n    font-family: Arial, Helvetica, sans-serif;\n}\n\n/* Sidebar */\n#sidebar {\n    display: flex;\n    flex-direction: column;\n    background-color: darkslategray;\n    width: 22vw;\n    height: 88vh;\n    z-index: 1;\n    padding: 25px;\n    gap: 25px;\n    box-sizing: border-box;\n    overflow: auto;\n}\n\n.sidebarSection {\n    display: flex;\n    flex-direction: column;\n}\n\n.sectionTitle {\n    color: whitesmoke;\n    font-family: Arial, Helvetica, sans-serif;\n    font-size: 32px;\n    font-weight: bold;\n}\n\n.sectionItem {\n    display: flex;\n    align-items: center;\n    color: whitesmoke;\n    font-family: Arial, Helvetica, sans-serif;\n    font-size: 18px;\n    text-indent: 10px;\n    height: 40px;\n    transition: all .2s ease-out;\n    overflow: hidden;\n}\n\n.sectionItem:hover {\n    background-color: rgba(0, 0, 0, 0.20);\n    border-radius: 10px;\n    cursor: pointer;\n    transition: all .2s ease-out;\n}\n\n/* Content General */\n#content {\n    display: flex;\n    flex-direction: column;\n    background-color: whitesmoke;\n    width: 78vw;\n    height: 88vh;\n    z-index: 1;\n}\n\n#titleContainer {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    align-self: center;\n    width: 65vw;\n    height: 50px;\n    margin: 25px;\n    margin-bottom: 10px;\n}\n\n#removeProjectBtn {\n    width: 50px;\n    height: 50px;\n    margin-right: 10px;\n    transition: all .2s ease-out;\n}\n\n#removeProjectBtn:hover {\n    transform: scale(1.1);\n    cursor: pointer;\n    transform-origin: 50% 50%;\n    transition: all .2s ease-out;\n}\n\n#listTitle {\n    font-size: 36px;\n    font-family: Arial, Helvetica, sans-serif;\n    font-weight: bold;\n    overflow: hidden;\n}\n\n#addTaskBtn {\n    display: block;\n    width: 50px;\n    height: 50px;\n    margin-left: auto;\n    transition: all .2s ease-out;\n}\n\n#addTaskBtn:hover {\n    transform: scale(1.1);\n    cursor: pointer;\n    transform-origin: 50% 50%;\n    transition: all .2s ease-out;\n}\n\n#line {\n    align-self: center;\n    background: black;\n    width: 70vw;\n    height: 4px;\n    border-radius: 50px;\n}\n\n#allTasksContainer {\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    flex-wrap: wrap;\n    margin: 25px 50px 25px 50px;\n    gap: 15px;\n    overflow: auto;\n}\n\n#addTaskMsg{\n    font-size: 25px;\n    color: darkgray;\n}\n\n.taskContainer {\n    display: grid;\n    grid-template-columns: 88% 1fr 1fr;\n    grid-template-rows: 50% 50%;\n    align-items: flex-start;\n    justify-content: center;\n    text-align: center;\n    background-color: black;\n    color: white;\n    border-radius: 10px;\n    width: 700px;\n    overflow: hidden;\n}\n\n.dateContainer {\n    display: flex;\n    align-self: flex-start;\n    grid-column: span 3;\n    margin-bottom: 0px;\n    background-color: darkslategray;\n}\n\n.taskDate {\n    margin: 5px;\n    margin-left: 10px;\n}\n\n.taskDesc {\n    display: inline-block;\n    text-align: left;\n    min-height: 22.5px;\n    max-height: 75px;\n    resize: vertical;\n    overflow-y: auto;\n    overflow-x: hidden;\n    word-wrap: break-word;\n    margin: 10px 10px 10px 10px;\n}\n\n.taskBtns {\n    display: flex;\n    align-self: center;\n    width: 30px;\n    height: 30px;\n    filter: invert(100%);\n    transition: all .2s ease-out;\n}\n\n.taskBtns:hover {\n    transform: scale(1.1);\n    cursor: pointer;\n    transform-origin: 50% 50%;\n    transition: all .2s ease-out;\n}\n\n/* Modal */\n#modalContainer {\n    display: none;\n    position: fixed;\n    z-index: 3;\n    padding-top: 100px;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    background-color: rgb(0,0,0);\n    background-color: rgba(0,0,0,0.4);\n}\n\n#modalContent {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    background-color: whitesmoke;\n    margin: auto;\n    border: 1px solid #888;\n    width: 30%;\n    border-radius: 10px;\n    overflow: hidden;\n}\n\n#modalHeader {\n    display: flex;\n    width: 100%;\n    height: 100%;\n    align-items: center;\n    justify-content: flex-start;\n    background-color: darkslategray;\n    font-size: 30px;\n    color: white;\n}\n\n#actionName {\n    margin-left: 10px;\n    font-size: 20px;\n}\n\n#closeModal {\n    margin-right: 10px;\n    cursor: pointer;\n    margin-left: auto;\n    font-size: 30px;\n}\n\n#modalInputContainer {\n    display: grid;\n    grid-template-columns: 1fr;\n    padding: 20px;\n}\n\n#textLabel, #dateLabel {\n\n}\n\n#textInput, #dateInput {\n    margin-bottom: 10px;\n    border: 1px solid silver;\n    border-radius: 10px;\n}\n\n#textInput[type=text], #dateInput[type=date] {\n    padding: 5px;\n  }\n\n#submitBtn {\n    display: flex;\n    justify-self: flex-end;\n    width: 50px;\n    background-color: darkslategray;\n    color: white;\n    border-radius: 10px;\n    border: 1px solid #787878;\n    padding: 5px;\n    width: auto;\n    transition: all .2s ease-out;\n}\n\n#submitBtn:hover {\n    transform: scale(1.025);\n    cursor: pointer;\n    transform-origin: 50% 50%;\n    transition: all .2s ease-out;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/mainUI.js":
/*!***********************!*\
  !*** ./src/mainUI.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   makeContent: () => (/* binding */ makeContent),
/* harmony export */   makeSidebar: () => (/* binding */ makeSidebar),
/* harmony export */   makeUI: () => (/* binding */ makeUI),
/* harmony export */   removeProject: () => (/* binding */ removeProject)
/* harmony export */ });
/* harmony import */ var _images_logo_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/logo.svg */ "./src/images/logo.svg");
/* harmony import */ var _images_plus_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/plus.png */ "./src/images/plus.png");
/* harmony import */ var _images_minus_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/minus.png */ "./src/images/minus.png");
/* harmony import */ var _tasks_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tasks.js */ "./src/tasks.js");
/* harmony import */ var _modal_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modal.js */ "./src/modal.js");





// import {removeProject} from "./buttons.js";

let projectObjects = localStorage.getItem("projectObjects");
projectObjects = JSON.parse(projectObjects) || [];

const plannerObjects = [
    { title: "Inbox" },
    { title: "Today" },
    { title: "This Month"},
];

const sectionLists = [
    { title: "Planner", list: plannerObjects },
    { title: "Projects", list: projectObjects}
]

function makeUI() {
    if (!localStorage.getItem("currentList")) {
        localStorage.setItem("currentList", "Inbox");
    }

    makeHeader();
    makeSidebar();
    makeContent();
}

function makeHeader() {
    const header = document.getElementById("header");

    const headerLogo = document.createElement("img");
    headerLogo.id = "headerLogo";
    headerLogo.src = _images_logo_svg__WEBPACK_IMPORTED_MODULE_0__;

    const headerTitle = document.createElement("p")
    headerTitle.id = "headerTitle";
    headerTitle.textContent = "Unorganized";

    header.appendChild(headerLogo);
    header.appendChild(headerTitle);
}

function makeSidebar() {
    const sidebar = document.getElementById("sidebar");
    sidebar.innerHTML = "";

    sectionLists.forEach(({title, list}) => {
        sidebar.appendChild(makeSidebarSection(title, list));
    })
}

function makeSidebarSection(title, list) {
    const section = document.createElement("div");
    section.classList.add("sidebarSection")

    const sectionTitle = document.createElement("p")
    sectionTitle.classList.add("sectionTitle")
    sectionTitle.textContent = title;

    const addProject = document.createElement("p")
    addProject.classList.add("sectionItem")
    addProject.textContent = "+ Add Project";

    addProject.onclick = function() {
        const modalContainer = document.getElementById("modalContainer");
        modalContainer.style.display = "block";

        const actionName = document.getElementById("actionName");
        actionName.textContent = "Add Project"

        const textLabel = document.getElementById("textLabel");
        textLabel.textContent = "Enter Project Name: ";

        const textInput = document.getElementById("textInput");
        textInput.value = "";
        textInput.maxLength = 35;

        const dateLabel = document.getElementById("dateLabel");
        dateLabel.style.display = "none";

        const dateInput = document.getElementById("dateInput");
        dateInput.style.display = "none";

        const submitBtn = document.getElementById("submitBtn");

        submitBtn.onclick = function() {
            let projectTitle = (0,_modal_js__WEBPACK_IMPORTED_MODULE_4__.submitDesc)("project");
            let projectPresent = projectObjects.some(project => project.title.trim() === projectTitle.trim());

            if (!projectTitle) {
                alert("Please enter a project name: ");
                modalContainer.style.display = "block";
            } else if(projectPresent) {
                alert("Please enter a unique project name");
                modalContainer.style.display = "block";
            } else if (projectTitle && !projectPresent) {
                projectObjects.push({ title: projectTitle });
                localStorage.setItem("projectObjects", JSON.stringify(projectObjects));
                localStorage.setItem("currentList",projectTitle);

                makeSidebar();
                makeContent();
            }
        };
    }

    section.appendChild(sectionTitle);

    if (title == "Projects") {section.appendChild(addProject)};

    list.forEach(({title}) => {
        const sectionItem = document.createElement("p")
        sectionItem.classList.add("sectionItem")
        sectionItem.textContent = title;

        if (localStorage.getItem("currentList") === title) {
            sectionItem.style.backgroundColor = "rgba(0, 0, 0, 0.20)";
            sectionItem.style.borderRadius = "10px";
        };

        sectionItem.onclick = function() {
            localStorage.setItem("currentList",title);

            makeSidebar();
            makeContent();
        }

        section.appendChild(sectionItem);
    })

    return section;
}

function makeContent() {
    const content = document.getElementById("content")
    content.innerHTML = "";

    const titleContainer = document.createElement("div");
    titleContainer.id = "titleContainer";

    const removeProjectBtn = document.createElement("img");
    removeProjectBtn.id = "removeProjectBtn";
    removeProjectBtn.src = _images_minus_png__WEBPACK_IMPORTED_MODULE_2__;
    removeProjectBtn.onclick = function() {
        const confirmRemove = window.confirm("Are you sure want to remove " + listTitle.textContent + "?");

        if (confirmRemove) {
            removeProject(listTitle.textContent);
        }
    }

    const listTitle = document.createElement("p");
    listTitle.id = "listTitle";
    listTitle.textContent = localStorage.getItem("currentList");

    const addTaskBtn = document.createElement("img");
    addTaskBtn.id = "addTaskBtn";
    addTaskBtn.src = _images_plus_png__WEBPACK_IMPORTED_MODULE_1__;
    
    addTaskBtn.onclick = function() {
        const modalContainer = document.getElementById("modalContainer");
        modalContainer.style.display = "block";

        const actionName = document.getElementById("actionName");
        actionName.textContent = "Add Task"

        const textLabel = document.getElementById("textLabel");
        textLabel.textContent = "Enter Description: ";

        const textInput = document.getElementById("textInput");
        textInput.value = "";
        textInput.maxLength = 200;

        const dateInput = document.getElementById("dateInput");
        dateInput.value = "";

        const submitBtn = document.getElementById("submitBtn");
        submitBtn.onclick = function() {
            let currentList = localStorage.getItem("currentList");
            let taskDesc = (0,_modal_js__WEBPACK_IMPORTED_MODULE_4__.submitDesc)("add");
            let tasksStorage = JSON.parse(localStorage.getItem(currentList + "Tasks")) || [];
            
            if (taskDesc) {
                tasksStorage.push(taskDesc);
                localStorage.setItem(currentList + "Tasks", JSON.stringify(tasksStorage));
    
                (0,_tasks_js__WEBPACK_IMPORTED_MODULE_3__.addAllTasks)();
            }
        }
    }

    const line = document.createElement("div");
    line.id = "line";

    const allTasksContainer = document.createElement("div");
    allTasksContainer.id = "allTasksContainer";

    titleContainer.appendChild(removeProjectBtn);
    titleContainer.appendChild(listTitle);
    titleContainer.appendChild(addTaskBtn);

    if (listTitle.textContent === "Today" || listTitle.textContent === "This Month") {
        addTaskBtn.style.display = "none";
    } else {
        addTaskBtn.style.display = "block";
    }

    if (listTitle.textContent === "Inbox" || listTitle.textContent === "Today" || listTitle.textContent === "This Month") {
        removeProjectBtn.style.display = "none";
    } else {
        removeProjectBtn.style.display = "block";
    }
    
    content.appendChild(titleContainer);
    content.appendChild(line);
    content.appendChild(allTasksContainer);
    content.appendChild((0,_modal_js__WEBPACK_IMPORTED_MODULE_4__.modal)());

    (0,_tasks_js__WEBPACK_IMPORTED_MODULE_3__.addAllTasks)();
}

function removeProject(projectName) {
    let currentList = localStorage.getItem("currentList");
    
    const projectIndex = projectObjects.findIndex(project => project.title.trim() === projectName.trim());

    if (projectIndex !== -1) {
        projectObjects.splice(projectIndex, 1);

        localStorage.removeItem(currentList + "Tasks");
        localStorage.setItem("projectObjects", JSON.stringify(projectObjects));
        localStorage.setItem("currentList", "Inbox");

        makeSidebar();
        makeContent();
    }
}

/***/ }),

/***/ "./src/modal.js":
/*!**********************!*\
  !*** ./src/modal.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   modal: () => (/* binding */ modal),
/* harmony export */   submitDesc: () => (/* binding */ submitDesc)
/* harmony export */ });
function modal() {
    const modalContainer = document.createElement("div");
    modalContainer.id = "modalContainer";

    const modalHeader = document.createElement("div");
    modalHeader.id = "modalHeader";

    const actionName = document.createElement("p");
    actionName.id = "actionName";
    actionName.textContent = "Add task";

    const closeBtn = document.createElement("div");
    closeBtn.id = "closeModal";
    closeBtn.innerHTML = "&times;";

    const modalContent = document.createElement("div");
    modalContent.id = "modalContent";

    const modalInputContainer = document.createElement("div");
    modalInputContainer.id = "modalInputContainer";

    const textLabel = document.createElement("label");
    textLabel.id = "textLabel";
    textLabel.setAttribute("for", "textInput");
    textLabel.textContent = "Enter Description";

    const textInput = document.createElement("input");
    textInput.type = "text";
    textInput.id = "textInput";

    const dateLabel = document.createElement("label");
    dateLabel.id = "dateLabel";
    dateLabel.setAttribute("for", "dateInput");
    dateLabel.textContent = "Select Date: ";

    const dateInput = document.createElement("input");
    dateInput.type = "date";
    dateInput.id = "dateInput";

    const submitBtn = document.createElement("button");
    submitBtn.id = "submitBtn";
    submitBtn.textContent = "Submit";

    closeBtn.onclick = function() {
        modalContainer.style.display = "none";
        textInput.value = "";
        dateInput.value = "";
        dateLabel.style.display = "block";
        dateInput.style.display = "block";
    }
    
    window.onclick = function(event) {
        if (event.target == modalContainer) {
            modalContainer.style.display = "none";
            textInput.value = "";
            dateInput.value = "";
            dateLabel.style.display = "block";    
            dateInput.style.display = "block";
        }
    }

    modalHeader.appendChild(actionName);
    modalHeader.appendChild(closeBtn);
    modalInputContainer.appendChild(textLabel);
    modalInputContainer.appendChild(textInput);
    modalInputContainer.appendChild(dateLabel);
    modalInputContainer.appendChild(dateInput);
    modalInputContainer.appendChild(submitBtn);
    modalContent.appendChild(modalHeader);
    modalContent.appendChild(modalInputContainer);
    modalContainer.appendChild(modalContent);

    return modalContainer;
}

function submitDesc(type) {
    const modalContainer = document.getElementById("modalContainer");
    const textInput = document.getElementById("textInput").value;
    const dateInput = document.getElementById("dateInput").value;
    
    let selectedDate = new Date(dateInput);
    let currentList = localStorage.getItem("currentList");
    let tasksStorage = JSON.parse(localStorage.getItem(currentList + "Tasks")) || [];
    let taskPresent = tasksStorage.some(task => task.text === textInput.trim() && task.date === selectedDate.toJSON().substring(0, 10));

    if (!textInput || !dateInput && type !== "project") {
        alert("Please do not leave fields blank.");
    } else if (taskPresent && type !== "project") {
        alert("Please enter a unique description and date.");
    } else {
        modalContainer.style.display = "none";

        if (type === "add" || type === "edit") {
            return ({
                text: textInput.trim(),
                date: selectedDate.toJSON().substring(0, 10)
            });
        } else if (type === "project") {
            return textInput;
        }
    }
}

/***/ }),

/***/ "./src/tasks.js":
/*!**********************!*\
  !*** ./src/tasks.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addAllTasks: () => (/* binding */ addAllTasks),
/* harmony export */   removeTask: () => (/* binding */ removeTask)
/* harmony export */ });
/* harmony import */ var _images_pencil_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/pencil.png */ "./src/images/pencil.png");
/* harmony import */ var _images_minus_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/minus.png */ "./src/images/minus.png");
/* harmony import */ var _modal_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal.js */ "./src/modal.js");




function makeTask(task) {
    const taskContainer = document.createElement("div");
    taskContainer.classList.add("taskContainer");
    
    const taskDesc = document.createElement("p");
    taskDesc.classList.add("taskDesc");
    taskDesc.textContent = task.text;

    const editTaskBtn = document.createElement("img");
    editTaskBtn.classList.add("taskBtns");
    editTaskBtn.src = _images_pencil_png__WEBPACK_IMPORTED_MODULE_0__;

    editTaskBtn.onclick = function() {
        const modalContainer = document.getElementById("modalContainer");
        modalContainer.style.display = "block";

        const actionName = document.getElementById("actionName");
        actionName.textContent = "Edit Task"

        const textLabel = document.getElementById("textLabel");
        textLabel.textContent = "Enter New Description: ";

        const textInput = document.getElementById("textInput");
        textInput.value = task.text;
        textInput.maxLength = 500;

        const dateInput = document.getElementById("dateInput");
        dateInput.value = task.date;

        const submitBtn = document.getElementById("submitBtn");
        submitBtn.onclick = function() {
            let currentList = localStorage.getItem("currentList");
            let newTask = (0,_modal_js__WEBPACK_IMPORTED_MODULE_2__.submitDesc)("edit");

            if (newTask) {
                if (currentList === "Today" || currentList === "This Month") {
                    saveNewTaskDesc(task, newTask, currentList)
                } else {
                    saveNewTaskDesc(task, newTask, currentList);
                }
            }
        }
    }

    const removeTaskBtn = document.createElement("img");
    removeTaskBtn.classList.add("taskBtns");
    removeTaskBtn.src = _images_minus_png__WEBPACK_IMPORTED_MODULE_1__;

    removeTaskBtn.onclick = function () {
        removeTask(task.text, task.date);
    }

    const dateContainer = document.createElement("div");
    dateContainer.classList.add("dateContainer");

    const dateParts = task.date.split("-");
    const dueDate = new Date(dateParts[0], dateParts[1] - 1, dateParts[2]);
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    const formattedDate = dueDate.toLocaleDateString('en-US', options);

    const taskDate = document.createElement("p");
    taskDate.classList.add("taskDate");
    taskDate.textContent = formattedDate;

    dateContainer.appendChild(taskDate);
    taskContainer.appendChild(dateContainer);
    taskContainer.appendChild(taskDesc);
    taskContainer.appendChild(editTaskBtn);
    taskContainer.appendChild(removeTaskBtn);

    return taskContainer;
}

function getSavedTasks() {
    let currentList = localStorage.getItem("currentList");
    let tasksStorage = JSON.parse(localStorage.getItem(currentList + "Tasks")) || [];

    if (tasksStorage.length > 1 && tasksStorage.every(task => task.date)) {
        tasksStorage.sort((a, b) => new Date(a.date) - new Date(b.date));
    }

    const taskElements = [];

    tasksStorage.forEach(task => {
        const taskElement = makeTask(task);
        taskElements.push(taskElement);
    });

    return taskElements;
}

function addAllTasks() {
    const allTasksContainer = document.getElementById("allTasksContainer");
    allTasksContainer.innerHTML = "";

    localStorage.setItem("TodayTasks", JSON.stringify(todayTasks()));
    localStorage.setItem("This MonthTasks", JSON.stringify(monthTasks()));

    if (getSavedTasks().length !== 0) {
        getSavedTasks().forEach(task => {
            allTasksContainer.appendChild(task);
        });
    } else {
        const addTaskMsg = document.createElement("p")
        addTaskMsg.id = "addTaskMsg"
        addTaskMsg.textContent = "Add a task to get started!";

        allTasksContainer.appendChild(addTaskMsg);
    }
}

function saveNewTaskDesc(oldTask, newTask, currentList) {
    if (currentList === "Today" || currentList === "This Month") {
        currentList = "Inbox"
    }

    let tasksStorage = JSON.parse(localStorage.getItem(currentList + "Tasks")) || [];
    
    let index = tasksStorage.findIndex(task => task.text === oldTask.text && task.date === oldTask.date);

    if (newTask === null || newTask.text.trim() === "") {
        newTask = oldTask;
    } else {
        tasksStorage[index] = newTask;
    }

    localStorage.setItem(currentList + "Tasks", JSON.stringify(tasksStorage));

    addAllTasks();
}

function removeTask(text, date) {
    let currentList = localStorage.getItem("currentList");

    if (currentList === "Today" || currentList === "This Month") {
        let tasksStorage = JSON.parse(localStorage.getItem("InboxTasks")) || [];
        tasksStorage = tasksStorage.filter(task => task.text !== text || task.date !== date);

        localStorage.setItem("InboxTasks", JSON.stringify(tasksStorage));
    } else {
        let tasksStorage = JSON.parse(localStorage.getItem(currentList + "Tasks")) || [];
        tasksStorage = tasksStorage.filter(task => task.text !== text || task.date !== date);

        localStorage.setItem(currentList + "Tasks", JSON.stringify(tasksStorage));
    }

    addAllTasks();
}

function todayTasks() {
    let inboxList = JSON.parse(localStorage.getItem("InboxTasks")) || [];
    let todayDate = new Date().toISOString().substring(0, 10);
    let todayTasks = inboxList.filter(task => task.date === todayDate);

    return todayTasks;
}

function monthTasks() {
    let inboxList = JSON.parse(localStorage.getItem("InboxTasks")) || [];
    let currentMonthYear = new Date().toISOString().substring(0, 7);
    let thisMonthTasks = inboxList.filter(task => task.date.startsWith(currentMonthYear));

    return thisMonthTasks;
}

/***/ }),

/***/ "./src/fonts/Roboto-Regular.ttf":
/*!**************************************!*\
  !*** ./src/fonts/Roboto-Regular.ttf ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fc2b5060f7accec5cf74.ttf";

/***/ }),

/***/ "./src/images/logo.svg":
/*!*****************************!*\
  !*** ./src/images/logo.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3025cbce74372d4ace28.svg";

/***/ }),

/***/ "./src/images/minus.png":
/*!******************************!*\
  !*** ./src/images/minus.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b95276154783bcf785f0.png";

/***/ }),

/***/ "./src/images/pencil.png":
/*!*******************************!*\
  !*** ./src/images/pencil.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "90388c014f4c89881449.png";

/***/ }),

/***/ "./src/images/plus.png":
/*!*****************************!*\
  !*** ./src/images/plus.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "174a0147071c43be66d4.png";

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _mainUI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mainUI */ "./src/mainUI.js");



document.addEventListener('DOMContentLoaded', _mainUI__WEBPACK_IMPORTED_MODULE_1__.makeUI);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLGlJQUE2QztBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0EsZUFBZSxtQ0FBbUM7QUFDbEQsY0FBYyxtQ0FBbUM7QUFDakQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLGlGQUFpRixZQUFZLE1BQU0sT0FBTyxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxVQUFVLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLFVBQVUsS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sWUFBWSxNQUFNLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLFVBQVUsS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlB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Q0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzQkFBc0IsK0NBQU87O0FBRTdCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLHFEQUFVOztBQUVwQztBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esd0JBQXdCLDhDQUFTOztBQUVqQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFTztBQUNQOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDdktBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7QUNBc0I7QUFDWTs7QUFFbEMsOENBQThDLDJDQUFNLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGlucHJvamVjdC10b2RvbGlzdC8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL29kaW5wcm9qZWN0LXRvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9vZGlucHJvamVjdC10b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vb2RpbnByb2plY3QtdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9vZGlucHJvamVjdC10b2RvbGlzdC8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vb2RpbnByb2plY3QtdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vb2RpbnByb2plY3QtdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL29kaW5wcm9qZWN0LXRvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL29kaW5wcm9qZWN0LXRvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL29kaW5wcm9qZWN0LXRvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vb2RpbnByb2plY3QtdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9vZGlucHJvamVjdC10b2RvbGlzdC8uL3NyYy9tYWluVUkuanMiLCJ3ZWJwYWNrOi8vb2RpbnByb2plY3QtdG9kb2xpc3QvLi9zcmMvbW9kYWwuanMiLCJ3ZWJwYWNrOi8vb2RpbnByb2plY3QtdG9kb2xpc3QvLi9zcmMvdGFza3MuanMiLCJ3ZWJwYWNrOi8vb2RpbnByb2plY3QtdG9kb2xpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2RpbnByb2plY3QtdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vb2RpbnByb2plY3QtdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW5wcm9qZWN0LXRvZG9saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vb2RpbnByb2plY3QtdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGlucHJvamVjdC10b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW5wcm9qZWN0LXRvZG9saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL29kaW5wcm9qZWN0LXRvZG9saXN0L3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL29kaW5wcm9qZWN0LXRvZG9saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9vZGlucHJvamVjdC10b2RvbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9mb250cy9Sb2JvdG8tUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcbiAgICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KSBmb3JtYXQoJ3R0ZicpLFxuICAgICAgICB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSkgZm9ybWF0KCd0dGYnKTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgfVxuXG4qIHtcbiAgICBwYWRkaW5nOiAwcHg7XG4gICAgbWFyZ2luOiAwcHg7XG59XG5cbmJvZHkge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLyogSGVhZGVyICovXG4jaGVhZGVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgIGdyaWQtY29sdW1uOiBzcGFuIDI7XG4gICAgaGVpZ2h0OiAxMnZoO1xuICAgIHotaW5kZXg6IDI7XG4gICAgYm94LXNoYWRvdzogMHB4IDhweCAxNnB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xufVxuXG4jaGVhZGVyTG9nbyB7XG4gICAgd2lkdGg6IDgwcHg7XG4gICAgaGVpZ2h0OiA4MHB4O1xufVxuXG4jaGVhZGVyVGl0bGUge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDQycHg7XG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG59XG5cbi8qIFNpZGViYXIgKi9cbiNzaWRlYmFyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGFya3NsYXRlZ3JheTtcbiAgICB3aWR0aDogMjJ2dztcbiAgICBoZWlnaHQ6IDg4dmg7XG4gICAgei1pbmRleDogMTtcbiAgICBwYWRkaW5nOiAyNXB4O1xuICAgIGdhcDogMjVweDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIG92ZXJmbG93OiBhdXRvO1xufVxuXG4uc2lkZWJhclNlY3Rpb24ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLnNlY3Rpb25UaXRsZSB7XG4gICAgY29sb3I6IHdoaXRlc21va2U7XG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAzMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uc2VjdGlvbkl0ZW0ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBjb2xvcjogd2hpdGVzbW9rZTtcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgdGV4dC1pbmRlbnQ6IDEwcHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZS1vdXQ7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLnNlY3Rpb25JdGVtOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMjApO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZS1vdXQ7XG59XG5cbi8qIENvbnRlbnQgR2VuZXJhbCAqL1xuI2NvbnRlbnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xuICAgIHdpZHRoOiA3OHZ3O1xuICAgIGhlaWdodDogODh2aDtcbiAgICB6LWluZGV4OiAxO1xufVxuXG4jdGl0bGVDb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICB3aWR0aDogNjV2dztcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgbWFyZ2luOiAyNXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbiNyZW1vdmVQcm9qZWN0QnRuIHtcbiAgICB3aWR0aDogNTBweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgIHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZS1vdXQ7XG59XG5cbiNyZW1vdmVQcm9qZWN0QnRuOmhvdmVyIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IDUwJSA1MCU7XG4gICAgdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlLW91dDtcbn1cblxuI2xpc3RUaXRsZSB7XG4gICAgZm9udC1zaXplOiAzNnB4O1xuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbiNhZGRUYXNrQnRuIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogNTBweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlLW91dDtcbn1cblxuI2FkZFRhc2tCdG46aG92ZXIge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDUwJTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2Utb3V0O1xufVxuXG4jbGluZSB7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgIGJhY2tncm91bmQ6IGJsYWNrO1xuICAgIHdpZHRoOiA3MHZ3O1xuICAgIGhlaWdodDogNHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG59XG5cbiNhbGxUYXNrc0NvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBtYXJnaW46IDI1cHggNTBweCAyNXB4IDUwcHg7XG4gICAgZ2FwOiAxNXB4O1xuICAgIG92ZXJmbG93OiBhdXRvO1xufVxuXG4jYWRkVGFza01zZ3tcbiAgICBmb250LXNpemU6IDI1cHg7XG4gICAgY29sb3I6IGRhcmtncmF5O1xufVxuXG4udGFza0NvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDg4JSAxZnIgMWZyO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogNTAlIDUwJTtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgd2lkdGg6IDcwMHB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5kYXRlQ29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XG4gICAgZ3JpZC1jb2x1bW46IHNwYW4gMztcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGFya3NsYXRlZ3JheTtcbn1cblxuLnRhc2tEYXRlIHtcbiAgICBtYXJnaW46IDVweDtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbn1cblxuLnRhc2tEZXNjIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBtaW4taGVpZ2h0OiAyMi41cHg7XG4gICAgbWF4LWhlaWdodDogNzVweDtcbiAgICByZXNpemU6IHZlcnRpY2FsO1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgICBtYXJnaW46IDEwcHggMTBweCAxMHB4IDEwcHg7XG59XG5cbi50YXNrQnRucyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgd2lkdGg6IDMwcHg7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIGZpbHRlcjogaW52ZXJ0KDEwMCUpO1xuICAgIHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZS1vdXQ7XG59XG5cbi50YXNrQnRuczpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgNTAlO1xuICAgIHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZS1vdXQ7XG59XG5cbi8qIE1vZGFsICovXG4jbW9kYWxDb250YWluZXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHotaW5kZXg6IDM7XG4gICAgcGFkZGluZy10b3A6IDEwMHB4O1xuICAgIGxlZnQ6IDA7XG4gICAgdG9wOiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwwLDApO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC40KTtcbn1cblxuI21vZGFsQ29udGVudCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzg4ODtcbiAgICB3aWR0aDogMzAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuI21vZGFsSGVhZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrc2xhdGVncmF5O1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbiNhY3Rpb25OYW1lIHtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICBmb250LXNpemU6IDIwcHg7XG59XG5cbiNjbG9zZU1vZGFsIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbn1cblxuI21vZGFsSW5wdXRDb250YWluZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgcGFkZGluZzogMjBweDtcbn1cblxuI3RleHRMYWJlbCwgI2RhdGVMYWJlbCB7XG5cbn1cblxuI3RleHRJbnB1dCwgI2RhdGVJbnB1dCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBzaWx2ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuI3RleHRJbnB1dFt0eXBlPXRleHRdLCAjZGF0ZUlucHV0W3R5cGU9ZGF0ZV0ge1xuICAgIHBhZGRpbmc6IDVweDtcbiAgfVxuXG4jc3VibWl0QnRuIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktc2VsZjogZmxleC1lbmQ7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGFya3NsYXRlZ3JheTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNzg3ODc4O1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICB3aWR0aDogYXV0bztcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2Utb3V0O1xufVxuXG4jc3VibWl0QnRuOmhvdmVyIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDI1KTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDUwJTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2Utb3V0O1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxxQkFBcUI7SUFDckI7NkRBQ21EO0lBQ25ELGdCQUFnQjtJQUNoQixrQkFBa0I7RUFDcEI7O0FBRUY7SUFDSSxZQUFZO0lBQ1os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OiAnUm9ib3RvJztcXG4gICAgc3JjOiB1cmwoJy4vZm9udHMvUm9ib3RvLVJlZ3VsYXIudHRmJykgZm9ybWF0KCd0dGYnKSxcXG4gICAgICAgIHVybCgnLi9mb250cy9Sb2JvdG8tUmVndWxhci50dGYnKSBmb3JtYXQoJ3R0ZicpO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICB9XFxuXFxuKiB7XFxuICAgIHBhZGRpbmc6IDBweDtcXG4gICAgbWFyZ2luOiAwcHg7XFxufVxcblxcbmJvZHkge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCIsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcblxcbi8qIEhlYWRlciAqL1xcbiNoZWFkZXIge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIGdyaWQtY29sdW1uOiBzcGFuIDI7XFxuICAgIGhlaWdodDogMTJ2aDtcXG4gICAgei1pbmRleDogMjtcXG4gICAgYm94LXNoYWRvdzogMHB4IDhweCAxNnB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xcbn1cXG5cXG4jaGVhZGVyTG9nbyB7XFxuICAgIHdpZHRoOiA4MHB4O1xcbiAgICBoZWlnaHQ6IDgwcHg7XFxufVxcblxcbiNoZWFkZXJUaXRsZSB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiA0MnB4O1xcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG59XFxuXFxuLyogU2lkZWJhciAqL1xcbiNzaWRlYmFyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGFya3NsYXRlZ3JheTtcXG4gICAgd2lkdGg6IDIydnc7XFxuICAgIGhlaWdodDogODh2aDtcXG4gICAgei1pbmRleDogMTtcXG4gICAgcGFkZGluZzogMjVweDtcXG4gICAgZ2FwOiAyNXB4O1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG59XFxuXFxuLnNpZGViYXJTZWN0aW9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLnNlY3Rpb25UaXRsZSB7XFxuICAgIGNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAzMnB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLnNlY3Rpb25JdGVtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgY29sb3I6IHdoaXRlc21va2U7XFxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIHRleHQtaW5kZW50OiAxMHB4O1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZS1vdXQ7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi5zZWN0aW9uSXRlbTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yMCk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlLW91dDtcXG59XFxuXFxuLyogQ29udGVudCBHZW5lcmFsICovXFxuI2NvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgICB3aWR0aDogNzh2dztcXG4gICAgaGVpZ2h0OiA4OHZoO1xcbiAgICB6LWluZGV4OiAxO1xcbn1cXG5cXG4jdGl0bGVDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIHdpZHRoOiA2NXZ3O1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIG1hcmdpbjogMjVweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuXFxuI3JlbW92ZVByb2plY3RCdG4ge1xcbiAgICB3aWR0aDogNTBweDtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxuICAgIHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZS1vdXQ7XFxufVxcblxcbiNyZW1vdmVQcm9qZWN0QnRuOmhvdmVyIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRyYW5zZm9ybS1vcmlnaW46IDUwJSA1MCU7XFxuICAgIHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZS1vdXQ7XFxufVxcblxcbiNsaXN0VGl0bGUge1xcbiAgICBmb250LXNpemU6IDM2cHg7XFxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuI2FkZFRhc2tCdG4ge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgd2lkdGg6IDUwcHg7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgIHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZS1vdXQ7XFxufVxcblxcbiNhZGRUYXNrQnRuOmhvdmVyIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRyYW5zZm9ybS1vcmlnaW46IDUwJSA1MCU7XFxuICAgIHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZS1vdXQ7XFxufVxcblxcbiNsaW5lIHtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kOiBibGFjaztcXG4gICAgd2lkdGg6IDcwdnc7XFxuICAgIGhlaWdodDogNHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xcbn1cXG5cXG4jYWxsVGFza3NDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBtYXJnaW46IDI1cHggNTBweCAyNXB4IDUwcHg7XFxuICAgIGdhcDogMTVweDtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxufVxcblxcbiNhZGRUYXNrTXNne1xcbiAgICBmb250LXNpemU6IDI1cHg7XFxuICAgIGNvbG9yOiBkYXJrZ3JheTtcXG59XFxuXFxuLnRhc2tDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDg4JSAxZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDUwJSA1MCU7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICB3aWR0aDogNzAwcHg7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi5kYXRlQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG4gICAgZ3JpZC1jb2x1bW46IHNwYW4gMztcXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrc2xhdGVncmF5O1xcbn1cXG5cXG4udGFza0RhdGUge1xcbiAgICBtYXJnaW46IDVweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxufVxcblxcbi50YXNrRGVzYyB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgbWluLWhlaWdodDogMjIuNXB4O1xcbiAgICBtYXgtaGVpZ2h0OiA3NXB4O1xcbiAgICByZXNpemU6IHZlcnRpY2FsO1xcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XFxuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcXG4gICAgbWFyZ2luOiAxMHB4IDEwcHggMTBweCAxMHB4O1xcbn1cXG5cXG4udGFza0J0bnMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAzMHB4O1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIGZpbHRlcjogaW52ZXJ0KDEwMCUpO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2Utb3V0O1xcbn1cXG5cXG4udGFza0J0bnM6aG92ZXIge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDUwJTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlLW91dDtcXG59XFxuXFxuLyogTW9kYWwgKi9cXG4jbW9kYWxDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHotaW5kZXg6IDM7XFxuICAgIHBhZGRpbmctdG9wOiAxMDBweDtcXG4gICAgbGVmdDogMDtcXG4gICAgdG9wOiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwwLDApO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNCk7XFxufVxcblxcbiNtb2RhbENvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM4ODg7XFxuICAgIHdpZHRoOiAzMCU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbiNtb2RhbEhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGFya3NsYXRlZ3JheTtcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbiNhY3Rpb25OYW1lIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuXFxuI2Nsb3NlTW9kYWwge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG59XFxuXFxuI21vZGFsSW5wdXRDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gICAgcGFkZGluZzogMjBweDtcXG59XFxuXFxuI3RleHRMYWJlbCwgI2RhdGVMYWJlbCB7XFxuXFxufVxcblxcbiN0ZXh0SW5wdXQsICNkYXRlSW5wdXQge1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBzaWx2ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbiN0ZXh0SW5wdXRbdHlwZT10ZXh0XSwgI2RhdGVJbnB1dFt0eXBlPWRhdGVdIHtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgfVxcblxcbiNzdWJtaXRCdG4ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LXNlbGY6IGZsZXgtZW5kO1xcbiAgICB3aWR0aDogNTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGFya3NsYXRlZ3JheTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNzg3ODc4O1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIHdpZHRoOiBhdXRvO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2Utb3V0O1xcbn1cXG5cXG4jc3VibWl0QnRuOmhvdmVyIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAyNSk7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDUwJTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlLW91dDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBsb2dvIGZyb20gXCIuL2ltYWdlcy9sb2dvLnN2Z1wiO1xuaW1wb3J0IGFkZEljb24gZnJvbSBcIi4vaW1hZ2VzL3BsdXMucG5nXCI7XG5pbXBvcnQgbWludXNJY29uIGZyb20gXCIuL2ltYWdlcy9taW51cy5wbmdcIjtcbmltcG9ydCB7YWRkQWxsVGFza3N9IGZyb20gXCIuL3Rhc2tzLmpzXCI7XG5pbXBvcnQge21vZGFsLCBzdWJtaXREZXNjfSBmcm9tIFwiLi9tb2RhbC5qc1wiO1xuLy8gaW1wb3J0IHtyZW1vdmVQcm9qZWN0fSBmcm9tIFwiLi9idXR0b25zLmpzXCI7XG5cbmxldCBwcm9qZWN0T2JqZWN0cyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdE9iamVjdHNcIik7XG5wcm9qZWN0T2JqZWN0cyA9IEpTT04ucGFyc2UocHJvamVjdE9iamVjdHMpIHx8IFtdO1xuXG5jb25zdCBwbGFubmVyT2JqZWN0cyA9IFtcbiAgICB7IHRpdGxlOiBcIkluYm94XCIgfSxcbiAgICB7IHRpdGxlOiBcIlRvZGF5XCIgfSxcbiAgICB7IHRpdGxlOiBcIlRoaXMgTW9udGhcIn0sXG5dO1xuXG5jb25zdCBzZWN0aW9uTGlzdHMgPSBbXG4gICAgeyB0aXRsZTogXCJQbGFubmVyXCIsIGxpc3Q6IHBsYW5uZXJPYmplY3RzIH0sXG4gICAgeyB0aXRsZTogXCJQcm9qZWN0c1wiLCBsaXN0OiBwcm9qZWN0T2JqZWN0c31cbl1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VVSSgpIHtcbiAgICBpZiAoIWxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY3VycmVudExpc3RcIikpIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJjdXJyZW50TGlzdFwiLCBcIkluYm94XCIpO1xuICAgIH1cblxuICAgIG1ha2VIZWFkZXIoKTtcbiAgICBtYWtlU2lkZWJhcigpO1xuICAgIG1ha2VDb250ZW50KCk7XG59XG5cbmZ1bmN0aW9uIG1ha2VIZWFkZXIoKSB7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJoZWFkZXJcIik7XG5cbiAgICBjb25zdCBoZWFkZXJMb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBoZWFkZXJMb2dvLmlkID0gXCJoZWFkZXJMb2dvXCI7XG4gICAgaGVhZGVyTG9nby5zcmMgPSBsb2dvO1xuXG4gICAgY29uc3QgaGVhZGVyVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKVxuICAgIGhlYWRlclRpdGxlLmlkID0gXCJoZWFkZXJUaXRsZVwiO1xuICAgIGhlYWRlclRpdGxlLnRleHRDb250ZW50ID0gXCJVbm9yZ2FuaXplZFwiO1xuXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGhlYWRlckxvZ28pO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZChoZWFkZXJUaXRsZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtYWtlU2lkZWJhcigpIHtcbiAgICBjb25zdCBzaWRlYmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaWRlYmFyXCIpO1xuICAgIHNpZGViYXIuaW5uZXJIVE1MID0gXCJcIjtcblxuICAgIHNlY3Rpb25MaXN0cy5mb3JFYWNoKCh7dGl0bGUsIGxpc3R9KSA9PiB7XG4gICAgICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQobWFrZVNpZGViYXJTZWN0aW9uKHRpdGxlLCBsaXN0KSk7XG4gICAgfSlcbn1cblxuZnVuY3Rpb24gbWFrZVNpZGViYXJTZWN0aW9uKHRpdGxlLCBsaXN0KSB7XG4gICAgY29uc3Qgc2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgc2VjdGlvbi5jbGFzc0xpc3QuYWRkKFwic2lkZWJhclNlY3Rpb25cIilcblxuICAgIGNvbnN0IHNlY3Rpb25UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpXG4gICAgc2VjdGlvblRpdGxlLmNsYXNzTGlzdC5hZGQoXCJzZWN0aW9uVGl0bGVcIilcbiAgICBzZWN0aW9uVGl0bGUudGV4dENvbnRlbnQgPSB0aXRsZTtcblxuICAgIGNvbnN0IGFkZFByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKVxuICAgIGFkZFByb2plY3QuY2xhc3NMaXN0LmFkZChcInNlY3Rpb25JdGVtXCIpXG4gICAgYWRkUHJvamVjdC50ZXh0Q29udGVudCA9IFwiKyBBZGQgUHJvamVjdFwiO1xuXG4gICAgYWRkUHJvamVjdC5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnN0IG1vZGFsQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtb2RhbENvbnRhaW5lclwiKTtcbiAgICAgICAgbW9kYWxDb250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcblxuICAgICAgICBjb25zdCBhY3Rpb25OYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhY3Rpb25OYW1lXCIpO1xuICAgICAgICBhY3Rpb25OYW1lLnRleHRDb250ZW50ID0gXCJBZGQgUHJvamVjdFwiXG5cbiAgICAgICAgY29uc3QgdGV4dExhYmVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0ZXh0TGFiZWxcIik7XG4gICAgICAgIHRleHRMYWJlbC50ZXh0Q29udGVudCA9IFwiRW50ZXIgUHJvamVjdCBOYW1lOiBcIjtcblxuICAgICAgICBjb25zdCB0ZXh0SW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRleHRJbnB1dFwiKTtcbiAgICAgICAgdGV4dElucHV0LnZhbHVlID0gXCJcIjtcbiAgICAgICAgdGV4dElucHV0Lm1heExlbmd0aCA9IDM1O1xuXG4gICAgICAgIGNvbnN0IGRhdGVMYWJlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGF0ZUxhYmVsXCIpO1xuICAgICAgICBkYXRlTGFiZWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXG4gICAgICAgIGNvbnN0IGRhdGVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGF0ZUlucHV0XCIpO1xuICAgICAgICBkYXRlSW5wdXQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXG4gICAgICAgIGNvbnN0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3VibWl0QnRuXCIpO1xuXG4gICAgICAgIHN1Ym1pdEJ0bi5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBsZXQgcHJvamVjdFRpdGxlID0gc3VibWl0RGVzYyhcInByb2plY3RcIik7XG4gICAgICAgICAgICBsZXQgcHJvamVjdFByZXNlbnQgPSBwcm9qZWN0T2JqZWN0cy5zb21lKHByb2plY3QgPT4gcHJvamVjdC50aXRsZS50cmltKCkgPT09IHByb2plY3RUaXRsZS50cmltKCkpO1xuXG4gICAgICAgICAgICBpZiAoIXByb2plY3RUaXRsZSkge1xuICAgICAgICAgICAgICAgIGFsZXJ0KFwiUGxlYXNlIGVudGVyIGEgcHJvamVjdCBuYW1lOiBcIik7XG4gICAgICAgICAgICAgICAgbW9kYWxDb250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgICAgIH0gZWxzZSBpZihwcm9qZWN0UHJlc2VudCkge1xuICAgICAgICAgICAgICAgIGFsZXJ0KFwiUGxlYXNlIGVudGVyIGEgdW5pcXVlIHByb2plY3QgbmFtZVwiKTtcbiAgICAgICAgICAgICAgICBtb2RhbENvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChwcm9qZWN0VGl0bGUgJiYgIXByb2plY3RQcmVzZW50KSB7XG4gICAgICAgICAgICAgICAgcHJvamVjdE9iamVjdHMucHVzaCh7IHRpdGxlOiBwcm9qZWN0VGl0bGUgfSk7XG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0T2JqZWN0c1wiLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0T2JqZWN0cykpO1xuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY3VycmVudExpc3RcIixwcm9qZWN0VGl0bGUpO1xuXG4gICAgICAgICAgICAgICAgbWFrZVNpZGViYXIoKTtcbiAgICAgICAgICAgICAgICBtYWtlQ29udGVudCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHNlY3Rpb24uYXBwZW5kQ2hpbGQoc2VjdGlvblRpdGxlKTtcblxuICAgIGlmICh0aXRsZSA9PSBcIlByb2plY3RzXCIpIHtzZWN0aW9uLmFwcGVuZENoaWxkKGFkZFByb2plY3QpfTtcblxuICAgIGxpc3QuZm9yRWFjaCgoe3RpdGxlfSkgPT4ge1xuICAgICAgICBjb25zdCBzZWN0aW9uSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpXG4gICAgICAgIHNlY3Rpb25JdGVtLmNsYXNzTGlzdC5hZGQoXCJzZWN0aW9uSXRlbVwiKVxuICAgICAgICBzZWN0aW9uSXRlbS50ZXh0Q29udGVudCA9IHRpdGxlO1xuXG4gICAgICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImN1cnJlbnRMaXN0XCIpID09PSB0aXRsZSkge1xuICAgICAgICAgICAgc2VjdGlvbkl0ZW0uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZ2JhKDAsIDAsIDAsIDAuMjApXCI7XG4gICAgICAgICAgICBzZWN0aW9uSXRlbS5zdHlsZS5ib3JkZXJSYWRpdXMgPSBcIjEwcHhcIjtcbiAgICAgICAgfTtcblxuICAgICAgICBzZWN0aW9uSXRlbS5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImN1cnJlbnRMaXN0XCIsdGl0bGUpO1xuXG4gICAgICAgICAgICBtYWtlU2lkZWJhcigpO1xuICAgICAgICAgICAgbWFrZUNvbnRlbnQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNlY3Rpb24uYXBwZW5kQ2hpbGQoc2VjdGlvbkl0ZW0pO1xuICAgIH0pXG5cbiAgICByZXR1cm4gc2VjdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VDb250ZW50KCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIilcbiAgICBjb250ZW50LmlubmVySFRNTCA9IFwiXCI7XG5cbiAgICBjb25zdCB0aXRsZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGl0bGVDb250YWluZXIuaWQgPSBcInRpdGxlQ29udGFpbmVyXCI7XG5cbiAgICBjb25zdCByZW1vdmVQcm9qZWN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICByZW1vdmVQcm9qZWN0QnRuLmlkID0gXCJyZW1vdmVQcm9qZWN0QnRuXCI7XG4gICAgcmVtb3ZlUHJvamVjdEJ0bi5zcmMgPSBtaW51c0ljb247XG4gICAgcmVtb3ZlUHJvamVjdEJ0bi5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnN0IGNvbmZpcm1SZW1vdmUgPSB3aW5kb3cuY29uZmlybShcIkFyZSB5b3Ugc3VyZSB3YW50IHRvIHJlbW92ZSBcIiArIGxpc3RUaXRsZS50ZXh0Q29udGVudCArIFwiP1wiKTtcblxuICAgICAgICBpZiAoY29uZmlybVJlbW92ZSkge1xuICAgICAgICAgICAgcmVtb3ZlUHJvamVjdChsaXN0VGl0bGUudGV4dENvbnRlbnQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgbGlzdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgbGlzdFRpdGxlLmlkID0gXCJsaXN0VGl0bGVcIjtcbiAgICBsaXN0VGl0bGUudGV4dENvbnRlbnQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImN1cnJlbnRMaXN0XCIpO1xuXG4gICAgY29uc3QgYWRkVGFza0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgYWRkVGFza0J0bi5pZCA9IFwiYWRkVGFza0J0blwiO1xuICAgIGFkZFRhc2tCdG4uc3JjID0gYWRkSWNvbjtcbiAgICBcbiAgICBhZGRUYXNrQnRuLm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc3QgbW9kYWxDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1vZGFsQ29udGFpbmVyXCIpO1xuICAgICAgICBtb2RhbENvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuXG4gICAgICAgIGNvbnN0IGFjdGlvbk5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFjdGlvbk5hbWVcIik7XG4gICAgICAgIGFjdGlvbk5hbWUudGV4dENvbnRlbnQgPSBcIkFkZCBUYXNrXCJcblxuICAgICAgICBjb25zdCB0ZXh0TGFiZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRleHRMYWJlbFwiKTtcbiAgICAgICAgdGV4dExhYmVsLnRleHRDb250ZW50ID0gXCJFbnRlciBEZXNjcmlwdGlvbjogXCI7XG5cbiAgICAgICAgY29uc3QgdGV4dElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0ZXh0SW5wdXRcIik7XG4gICAgICAgIHRleHRJbnB1dC52YWx1ZSA9IFwiXCI7XG4gICAgICAgIHRleHRJbnB1dC5tYXhMZW5ndGggPSAyMDA7XG5cbiAgICAgICAgY29uc3QgZGF0ZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkYXRlSW5wdXRcIik7XG4gICAgICAgIGRhdGVJbnB1dC52YWx1ZSA9IFwiXCI7XG5cbiAgICAgICAgY29uc3Qgc3VibWl0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdWJtaXRCdG5cIik7XG4gICAgICAgIHN1Ym1pdEJ0bi5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBsZXQgY3VycmVudExpc3QgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImN1cnJlbnRMaXN0XCIpO1xuICAgICAgICAgICAgbGV0IHRhc2tEZXNjID0gc3VibWl0RGVzYyhcImFkZFwiKTtcbiAgICAgICAgICAgIGxldCB0YXNrc1N0b3JhZ2UgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGN1cnJlbnRMaXN0ICsgXCJUYXNrc1wiKSkgfHwgW107XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmICh0YXNrRGVzYykge1xuICAgICAgICAgICAgICAgIHRhc2tzU3RvcmFnZS5wdXNoKHRhc2tEZXNjKTtcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShjdXJyZW50TGlzdCArIFwiVGFza3NcIiwgSlNPTi5zdHJpbmdpZnkodGFza3NTdG9yYWdlKSk7XG4gICAgXG4gICAgICAgICAgICAgICAgYWRkQWxsVGFza3MoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGxpbmUuaWQgPSBcImxpbmVcIjtcblxuICAgIGNvbnN0IGFsbFRhc2tzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBhbGxUYXNrc0NvbnRhaW5lci5pZCA9IFwiYWxsVGFza3NDb250YWluZXJcIjtcblxuICAgIHRpdGxlQ29udGFpbmVyLmFwcGVuZENoaWxkKHJlbW92ZVByb2plY3RCdG4pO1xuICAgIHRpdGxlQ29udGFpbmVyLmFwcGVuZENoaWxkKGxpc3RUaXRsZSk7XG4gICAgdGl0bGVDb250YWluZXIuYXBwZW5kQ2hpbGQoYWRkVGFza0J0bik7XG5cbiAgICBpZiAobGlzdFRpdGxlLnRleHRDb250ZW50ID09PSBcIlRvZGF5XCIgfHwgbGlzdFRpdGxlLnRleHRDb250ZW50ID09PSBcIlRoaXMgTW9udGhcIikge1xuICAgICAgICBhZGRUYXNrQnRuLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgICBhZGRUYXNrQnRuLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgfVxuXG4gICAgaWYgKGxpc3RUaXRsZS50ZXh0Q29udGVudCA9PT0gXCJJbmJveFwiIHx8IGxpc3RUaXRsZS50ZXh0Q29udGVudCA9PT0gXCJUb2RheVwiIHx8IGxpc3RUaXRsZS50ZXh0Q29udGVudCA9PT0gXCJUaGlzIE1vbnRoXCIpIHtcbiAgICAgICAgcmVtb3ZlUHJvamVjdEJ0bi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmVtb3ZlUHJvamVjdEJ0bi5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgIH1cbiAgICBcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHRpdGxlQ29udGFpbmVyKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGxpbmUpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYWxsVGFza3NDb250YWluZXIpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobW9kYWwoKSk7XG5cbiAgICBhZGRBbGxUYXNrcygpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlUHJvamVjdChwcm9qZWN0TmFtZSkge1xuICAgIGxldCBjdXJyZW50TGlzdCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY3VycmVudExpc3RcIik7XG4gICAgXG4gICAgY29uc3QgcHJvamVjdEluZGV4ID0gcHJvamVjdE9iamVjdHMuZmluZEluZGV4KHByb2plY3QgPT4gcHJvamVjdC50aXRsZS50cmltKCkgPT09IHByb2plY3ROYW1lLnRyaW0oKSk7XG5cbiAgICBpZiAocHJvamVjdEluZGV4ICE9PSAtMSkge1xuICAgICAgICBwcm9qZWN0T2JqZWN0cy5zcGxpY2UocHJvamVjdEluZGV4LCAxKTtcblxuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShjdXJyZW50TGlzdCArIFwiVGFza3NcIik7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJvamVjdE9iamVjdHNcIiwgSlNPTi5zdHJpbmdpZnkocHJvamVjdE9iamVjdHMpKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJjdXJyZW50TGlzdFwiLCBcIkluYm94XCIpO1xuXG4gICAgICAgIG1ha2VTaWRlYmFyKCk7XG4gICAgICAgIG1ha2VDb250ZW50KCk7XG4gICAgfVxufSIsImV4cG9ydCBmdW5jdGlvbiBtb2RhbCgpIHtcbiAgICBjb25zdCBtb2RhbENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbW9kYWxDb250YWluZXIuaWQgPSBcIm1vZGFsQ29udGFpbmVyXCI7XG5cbiAgICBjb25zdCBtb2RhbEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbW9kYWxIZWFkZXIuaWQgPSBcIm1vZGFsSGVhZGVyXCI7XG5cbiAgICBjb25zdCBhY3Rpb25OYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgYWN0aW9uTmFtZS5pZCA9IFwiYWN0aW9uTmFtZVwiO1xuICAgIGFjdGlvbk5hbWUudGV4dENvbnRlbnQgPSBcIkFkZCB0YXNrXCI7XG5cbiAgICBjb25zdCBjbG9zZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY2xvc2VCdG4uaWQgPSBcImNsb3NlTW9kYWxcIjtcbiAgICBjbG9zZUJ0bi5pbm5lckhUTUwgPSBcIiZ0aW1lcztcIjtcblxuICAgIGNvbnN0IG1vZGFsQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbW9kYWxDb250ZW50LmlkID0gXCJtb2RhbENvbnRlbnRcIjtcblxuICAgIGNvbnN0IG1vZGFsSW5wdXRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1vZGFsSW5wdXRDb250YWluZXIuaWQgPSBcIm1vZGFsSW5wdXRDb250YWluZXJcIjtcblxuICAgIGNvbnN0IHRleHRMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICB0ZXh0TGFiZWwuaWQgPSBcInRleHRMYWJlbFwiO1xuICAgIHRleHRMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJ0ZXh0SW5wdXRcIik7XG4gICAgdGV4dExhYmVsLnRleHRDb250ZW50ID0gXCJFbnRlciBEZXNjcmlwdGlvblwiO1xuXG4gICAgY29uc3QgdGV4dElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIHRleHRJbnB1dC50eXBlID0gXCJ0ZXh0XCI7XG4gICAgdGV4dElucHV0LmlkID0gXCJ0ZXh0SW5wdXRcIjtcblxuICAgIGNvbnN0IGRhdGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICBkYXRlTGFiZWwuaWQgPSBcImRhdGVMYWJlbFwiO1xuICAgIGRhdGVMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJkYXRlSW5wdXRcIik7XG4gICAgZGF0ZUxhYmVsLnRleHRDb250ZW50ID0gXCJTZWxlY3QgRGF0ZTogXCI7XG5cbiAgICBjb25zdCBkYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgZGF0ZUlucHV0LnR5cGUgPSBcImRhdGVcIjtcbiAgICBkYXRlSW5wdXQuaWQgPSBcImRhdGVJbnB1dFwiO1xuXG4gICAgY29uc3Qgc3VibWl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBzdWJtaXRCdG4uaWQgPSBcInN1Ym1pdEJ0blwiO1xuICAgIHN1Ym1pdEJ0bi50ZXh0Q29udGVudCA9IFwiU3VibWl0XCI7XG5cbiAgICBjbG9zZUJ0bi5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIG1vZGFsQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgdGV4dElucHV0LnZhbHVlID0gXCJcIjtcbiAgICAgICAgZGF0ZUlucHV0LnZhbHVlID0gXCJcIjtcbiAgICAgICAgZGF0ZUxhYmVsLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgIGRhdGVJbnB1dC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgIH1cbiAgICBcbiAgICB3aW5kb3cub25jbGljayA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgIGlmIChldmVudC50YXJnZXQgPT0gbW9kYWxDb250YWluZXIpIHtcbiAgICAgICAgICAgIG1vZGFsQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgIHRleHRJbnB1dC52YWx1ZSA9IFwiXCI7XG4gICAgICAgICAgICBkYXRlSW5wdXQudmFsdWUgPSBcIlwiO1xuICAgICAgICAgICAgZGF0ZUxhYmVsLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7ICAgIFxuICAgICAgICAgICAgZGF0ZUlucHV0LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBtb2RhbEhlYWRlci5hcHBlbmRDaGlsZChhY3Rpb25OYW1lKTtcbiAgICBtb2RhbEhlYWRlci5hcHBlbmRDaGlsZChjbG9zZUJ0bik7XG4gICAgbW9kYWxJbnB1dENvbnRhaW5lci5hcHBlbmRDaGlsZCh0ZXh0TGFiZWwpO1xuICAgIG1vZGFsSW5wdXRDb250YWluZXIuYXBwZW5kQ2hpbGQodGV4dElucHV0KTtcbiAgICBtb2RhbElucHV0Q29udGFpbmVyLmFwcGVuZENoaWxkKGRhdGVMYWJlbCk7XG4gICAgbW9kYWxJbnB1dENvbnRhaW5lci5hcHBlbmRDaGlsZChkYXRlSW5wdXQpO1xuICAgIG1vZGFsSW5wdXRDb250YWluZXIuYXBwZW5kQ2hpbGQoc3VibWl0QnRuKTtcbiAgICBtb2RhbENvbnRlbnQuYXBwZW5kQ2hpbGQobW9kYWxIZWFkZXIpO1xuICAgIG1vZGFsQ29udGVudC5hcHBlbmRDaGlsZChtb2RhbElucHV0Q29udGFpbmVyKTtcbiAgICBtb2RhbENvbnRhaW5lci5hcHBlbmRDaGlsZChtb2RhbENvbnRlbnQpO1xuXG4gICAgcmV0dXJuIG1vZGFsQ29udGFpbmVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3VibWl0RGVzYyh0eXBlKSB7XG4gICAgY29uc3QgbW9kYWxDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1vZGFsQ29udGFpbmVyXCIpO1xuICAgIGNvbnN0IHRleHRJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGV4dElucHV0XCIpLnZhbHVlO1xuICAgIGNvbnN0IGRhdGVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGF0ZUlucHV0XCIpLnZhbHVlO1xuICAgIFxuICAgIGxldCBzZWxlY3RlZERhdGUgPSBuZXcgRGF0ZShkYXRlSW5wdXQpO1xuICAgIGxldCBjdXJyZW50TGlzdCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY3VycmVudExpc3RcIik7XG4gICAgbGV0IHRhc2tzU3RvcmFnZSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oY3VycmVudExpc3QgKyBcIlRhc2tzXCIpKSB8fCBbXTtcbiAgICBsZXQgdGFza1ByZXNlbnQgPSB0YXNrc1N0b3JhZ2Uuc29tZSh0YXNrID0+IHRhc2sudGV4dCA9PT0gdGV4dElucHV0LnRyaW0oKSAmJiB0YXNrLmRhdGUgPT09IHNlbGVjdGVkRGF0ZS50b0pTT04oKS5zdWJzdHJpbmcoMCwgMTApKTtcblxuICAgIGlmICghdGV4dElucHV0IHx8ICFkYXRlSW5wdXQgJiYgdHlwZSAhPT0gXCJwcm9qZWN0XCIpIHtcbiAgICAgICAgYWxlcnQoXCJQbGVhc2UgZG8gbm90IGxlYXZlIGZpZWxkcyBibGFuay5cIik7XG4gICAgfSBlbHNlIGlmICh0YXNrUHJlc2VudCAmJiB0eXBlICE9PSBcInByb2plY3RcIikge1xuICAgICAgICBhbGVydChcIlBsZWFzZSBlbnRlciBhIHVuaXF1ZSBkZXNjcmlwdGlvbiBhbmQgZGF0ZS5cIik7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgbW9kYWxDb250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXG4gICAgICAgIGlmICh0eXBlID09PSBcImFkZFwiIHx8IHR5cGUgPT09IFwiZWRpdFwiKSB7XG4gICAgICAgICAgICByZXR1cm4gKHtcbiAgICAgICAgICAgICAgICB0ZXh0OiB0ZXh0SW5wdXQudHJpbSgpLFxuICAgICAgICAgICAgICAgIGRhdGU6IHNlbGVjdGVkRGF0ZS50b0pTT04oKS5zdWJzdHJpbmcoMCwgMTApXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlID09PSBcInByb2plY3RcIikge1xuICAgICAgICAgICAgcmV0dXJuIHRleHRJbnB1dDtcbiAgICAgICAgfVxuICAgIH1cbn0iLCJpbXBvcnQgcGVuSWNvbiBmcm9tIFwiLi9pbWFnZXMvcGVuY2lsLnBuZ1wiXG5pbXBvcnQgbWludXNJY29uIGZyb20gXCIuL2ltYWdlcy9taW51cy5wbmdcIjtcbmltcG9ydCB7bW9kYWwsIHN1Ym1pdERlc2N9IGZyb20gXCIuL21vZGFsLmpzXCI7XG5cbmZ1bmN0aW9uIG1ha2VUYXNrKHRhc2spIHtcbiAgICBjb25zdCB0YXNrQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0YXNrQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ0YXNrQ29udGFpbmVyXCIpO1xuICAgIFxuICAgIGNvbnN0IHRhc2tEZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgdGFza0Rlc2MuY2xhc3NMaXN0LmFkZChcInRhc2tEZXNjXCIpO1xuICAgIHRhc2tEZXNjLnRleHRDb250ZW50ID0gdGFzay50ZXh0O1xuXG4gICAgY29uc3QgZWRpdFRhc2tCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIGVkaXRUYXNrQnRuLmNsYXNzTGlzdC5hZGQoXCJ0YXNrQnRuc1wiKTtcbiAgICBlZGl0VGFza0J0bi5zcmMgPSBwZW5JY29uO1xuXG4gICAgZWRpdFRhc2tCdG4ub25jbGljayA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zdCBtb2RhbENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW9kYWxDb250YWluZXJcIik7XG4gICAgICAgIG1vZGFsQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG5cbiAgICAgICAgY29uc3QgYWN0aW9uTmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWN0aW9uTmFtZVwiKTtcbiAgICAgICAgYWN0aW9uTmFtZS50ZXh0Q29udGVudCA9IFwiRWRpdCBUYXNrXCJcblxuICAgICAgICBjb25zdCB0ZXh0TGFiZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRleHRMYWJlbFwiKTtcbiAgICAgICAgdGV4dExhYmVsLnRleHRDb250ZW50ID0gXCJFbnRlciBOZXcgRGVzY3JpcHRpb246IFwiO1xuXG4gICAgICAgIGNvbnN0IHRleHRJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGV4dElucHV0XCIpO1xuICAgICAgICB0ZXh0SW5wdXQudmFsdWUgPSB0YXNrLnRleHQ7XG4gICAgICAgIHRleHRJbnB1dC5tYXhMZW5ndGggPSA1MDA7XG5cbiAgICAgICAgY29uc3QgZGF0ZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkYXRlSW5wdXRcIik7XG4gICAgICAgIGRhdGVJbnB1dC52YWx1ZSA9IHRhc2suZGF0ZTtcblxuICAgICAgICBjb25zdCBzdWJtaXRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN1Ym1pdEJ0blwiKTtcbiAgICAgICAgc3VibWl0QnRuLm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGxldCBjdXJyZW50TGlzdCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY3VycmVudExpc3RcIik7XG4gICAgICAgICAgICBsZXQgbmV3VGFzayA9IHN1Ym1pdERlc2MoXCJlZGl0XCIpO1xuXG4gICAgICAgICAgICBpZiAobmV3VGFzaykge1xuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50TGlzdCA9PT0gXCJUb2RheVwiIHx8IGN1cnJlbnRMaXN0ID09PSBcIlRoaXMgTW9udGhcIikge1xuICAgICAgICAgICAgICAgICAgICBzYXZlTmV3VGFza0Rlc2ModGFzaywgbmV3VGFzaywgY3VycmVudExpc3QpXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc2F2ZU5ld1Rhc2tEZXNjKHRhc2ssIG5ld1Rhc2ssIGN1cnJlbnRMaXN0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCByZW1vdmVUYXNrQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICByZW1vdmVUYXNrQnRuLmNsYXNzTGlzdC5hZGQoXCJ0YXNrQnRuc1wiKTtcbiAgICByZW1vdmVUYXNrQnRuLnNyYyA9IG1pbnVzSWNvbjtcblxuICAgIHJlbW92ZVRhc2tCdG4ub25jbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmVtb3ZlVGFzayh0YXNrLnRleHQsIHRhc2suZGF0ZSk7XG4gICAgfVxuXG4gICAgY29uc3QgZGF0ZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGF0ZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZGF0ZUNvbnRhaW5lclwiKTtcblxuICAgIGNvbnN0IGRhdGVQYXJ0cyA9IHRhc2suZGF0ZS5zcGxpdChcIi1cIik7XG4gICAgY29uc3QgZHVlRGF0ZSA9IG5ldyBEYXRlKGRhdGVQYXJ0c1swXSwgZGF0ZVBhcnRzWzFdIC0gMSwgZGF0ZVBhcnRzWzJdKTtcbiAgICBjb25zdCBvcHRpb25zID0geyBkYXk6ICdudW1lcmljJywgbW9udGg6ICdsb25nJywgeWVhcjogJ251bWVyaWMnIH07XG4gICAgY29uc3QgZm9ybWF0dGVkRGF0ZSA9IGR1ZURhdGUudG9Mb2NhbGVEYXRlU3RyaW5nKCdlbi1VUycsIG9wdGlvbnMpO1xuXG4gICAgY29uc3QgdGFza0RhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICB0YXNrRGF0ZS5jbGFzc0xpc3QuYWRkKFwidGFza0RhdGVcIik7XG4gICAgdGFza0RhdGUudGV4dENvbnRlbnQgPSBmb3JtYXR0ZWREYXRlO1xuXG4gICAgZGF0ZUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrRGF0ZSk7XG4gICAgdGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZChkYXRlQ29udGFpbmVyKTtcbiAgICB0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tEZXNjKTtcbiAgICB0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKGVkaXRUYXNrQnRuKTtcbiAgICB0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKHJlbW92ZVRhc2tCdG4pO1xuXG4gICAgcmV0dXJuIHRhc2tDb250YWluZXI7XG59XG5cbmZ1bmN0aW9uIGdldFNhdmVkVGFza3MoKSB7XG4gICAgbGV0IGN1cnJlbnRMaXN0ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjdXJyZW50TGlzdFwiKTtcbiAgICBsZXQgdGFza3NTdG9yYWdlID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShjdXJyZW50TGlzdCArIFwiVGFza3NcIikpIHx8IFtdO1xuXG4gICAgaWYgKHRhc2tzU3RvcmFnZS5sZW5ndGggPiAxICYmIHRhc2tzU3RvcmFnZS5ldmVyeSh0YXNrID0+IHRhc2suZGF0ZSkpIHtcbiAgICAgICAgdGFza3NTdG9yYWdlLnNvcnQoKGEsIGIpID0+IG5ldyBEYXRlKGEuZGF0ZSkgLSBuZXcgRGF0ZShiLmRhdGUpKTtcbiAgICB9XG5cbiAgICBjb25zdCB0YXNrRWxlbWVudHMgPSBbXTtcblxuICAgIHRhc2tzU3RvcmFnZS5mb3JFYWNoKHRhc2sgPT4ge1xuICAgICAgICBjb25zdCB0YXNrRWxlbWVudCA9IG1ha2VUYXNrKHRhc2spO1xuICAgICAgICB0YXNrRWxlbWVudHMucHVzaCh0YXNrRWxlbWVudCk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdGFza0VsZW1lbnRzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkQWxsVGFza3MoKSB7XG4gICAgY29uc3QgYWxsVGFza3NDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFsbFRhc2tzQ29udGFpbmVyXCIpO1xuICAgIGFsbFRhc2tzQ29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XG5cbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIlRvZGF5VGFza3NcIiwgSlNPTi5zdHJpbmdpZnkodG9kYXlUYXNrcygpKSk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJUaGlzIE1vbnRoVGFza3NcIiwgSlNPTi5zdHJpbmdpZnkobW9udGhUYXNrcygpKSk7XG5cbiAgICBpZiAoZ2V0U2F2ZWRUYXNrcygpLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICBnZXRTYXZlZFRhc2tzKCkuZm9yRWFjaCh0YXNrID0+IHtcbiAgICAgICAgICAgIGFsbFRhc2tzQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2spO1xuICAgICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBhZGRUYXNrTXNnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIilcbiAgICAgICAgYWRkVGFza01zZy5pZCA9IFwiYWRkVGFza01zZ1wiXG4gICAgICAgIGFkZFRhc2tNc2cudGV4dENvbnRlbnQgPSBcIkFkZCBhIHRhc2sgdG8gZ2V0IHN0YXJ0ZWQhXCI7XG5cbiAgICAgICAgYWxsVGFza3NDb250YWluZXIuYXBwZW5kQ2hpbGQoYWRkVGFza01zZyk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBzYXZlTmV3VGFza0Rlc2Mob2xkVGFzaywgbmV3VGFzaywgY3VycmVudExpc3QpIHtcbiAgICBpZiAoY3VycmVudExpc3QgPT09IFwiVG9kYXlcIiB8fCBjdXJyZW50TGlzdCA9PT0gXCJUaGlzIE1vbnRoXCIpIHtcbiAgICAgICAgY3VycmVudExpc3QgPSBcIkluYm94XCJcbiAgICB9XG5cbiAgICBsZXQgdGFza3NTdG9yYWdlID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShjdXJyZW50TGlzdCArIFwiVGFza3NcIikpIHx8IFtdO1xuICAgIFxuICAgIGxldCBpbmRleCA9IHRhc2tzU3RvcmFnZS5maW5kSW5kZXgodGFzayA9PiB0YXNrLnRleHQgPT09IG9sZFRhc2sudGV4dCAmJiB0YXNrLmRhdGUgPT09IG9sZFRhc2suZGF0ZSk7XG5cbiAgICBpZiAobmV3VGFzayA9PT0gbnVsbCB8fCBuZXdUYXNrLnRleHQudHJpbSgpID09PSBcIlwiKSB7XG4gICAgICAgIG5ld1Rhc2sgPSBvbGRUYXNrO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRhc2tzU3RvcmFnZVtpbmRleF0gPSBuZXdUYXNrO1xuICAgIH1cblxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGN1cnJlbnRMaXN0ICsgXCJUYXNrc1wiLCBKU09OLnN0cmluZ2lmeSh0YXNrc1N0b3JhZ2UpKTtcblxuICAgIGFkZEFsbFRhc2tzKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVUYXNrKHRleHQsIGRhdGUpIHtcbiAgICBsZXQgY3VycmVudExpc3QgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImN1cnJlbnRMaXN0XCIpO1xuXG4gICAgaWYgKGN1cnJlbnRMaXN0ID09PSBcIlRvZGF5XCIgfHwgY3VycmVudExpc3QgPT09IFwiVGhpcyBNb250aFwiKSB7XG4gICAgICAgIGxldCB0YXNrc1N0b3JhZ2UgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiSW5ib3hUYXNrc1wiKSkgfHwgW107XG4gICAgICAgIHRhc2tzU3RvcmFnZSA9IHRhc2tzU3RvcmFnZS5maWx0ZXIodGFzayA9PiB0YXNrLnRleHQgIT09IHRleHQgfHwgdGFzay5kYXRlICE9PSBkYXRlKTtcblxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIkluYm94VGFza3NcIiwgSlNPTi5zdHJpbmdpZnkodGFza3NTdG9yYWdlKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgbGV0IHRhc2tzU3RvcmFnZSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oY3VycmVudExpc3QgKyBcIlRhc2tzXCIpKSB8fCBbXTtcbiAgICAgICAgdGFza3NTdG9yYWdlID0gdGFza3NTdG9yYWdlLmZpbHRlcih0YXNrID0+IHRhc2sudGV4dCAhPT0gdGV4dCB8fCB0YXNrLmRhdGUgIT09IGRhdGUpO1xuXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGN1cnJlbnRMaXN0ICsgXCJUYXNrc1wiLCBKU09OLnN0cmluZ2lmeSh0YXNrc1N0b3JhZ2UpKTtcbiAgICB9XG5cbiAgICBhZGRBbGxUYXNrcygpO1xufVxuXG5mdW5jdGlvbiB0b2RheVRhc2tzKCkge1xuICAgIGxldCBpbmJveExpc3QgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiSW5ib3hUYXNrc1wiKSkgfHwgW107XG4gICAgbGV0IHRvZGF5RGF0ZSA9IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKS5zdWJzdHJpbmcoMCwgMTApO1xuICAgIGxldCB0b2RheVRhc2tzID0gaW5ib3hMaXN0LmZpbHRlcih0YXNrID0+IHRhc2suZGF0ZSA9PT0gdG9kYXlEYXRlKTtcblxuICAgIHJldHVybiB0b2RheVRhc2tzO1xufVxuXG5mdW5jdGlvbiBtb250aFRhc2tzKCkge1xuICAgIGxldCBpbmJveExpc3QgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiSW5ib3hUYXNrc1wiKSkgfHwgW107XG4gICAgbGV0IGN1cnJlbnRNb250aFllYXIgPSBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkuc3Vic3RyaW5nKDAsIDcpO1xuICAgIGxldCB0aGlzTW9udGhUYXNrcyA9IGluYm94TGlzdC5maWx0ZXIodGFzayA9PiB0YXNrLmRhdGUuc3RhcnRzV2l0aChjdXJyZW50TW9udGhZZWFyKSk7XG5cbiAgICByZXR1cm4gdGhpc01vbnRoVGFza3M7XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlcy5jc3NcIjtcbmltcG9ydCB7IG1ha2VVSSB9IGZyb20gXCIuL21haW5VSVwiO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgbWFrZVVJKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=