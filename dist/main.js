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

#textInput[type=textInput], #dateInput[type=date] {
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
}`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n    font-family: 'Roboto';\n    src: url('./fonts/Roboto-Regular.ttf') format('ttf'),\n        url('./fonts/Roboto-Regular.ttf') format('ttf');\n    font-weight: 600;\n    font-style: normal;\n  }\n\n* {\n    padding: 0px;\n    margin: 0px;\n}\n\nbody {\n    display: grid;\n    font-family: \"Roboto\", sans-serif;\n    font-weight: 500;\n}\n\n/* Header */\n#header {\n    position: relative;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: flex-start;\n    background-color: black;\n    grid-column: span 2;\n    height: 12vh;\n    z-index: 2;\n    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.25);\n}\n\n#headerLogo {\n    width: 80px;\n    height: 80px;\n}\n\n#headerTitle {\n    color: white;\n    font-size: 42px;\n    font-family: Arial, Helvetica, sans-serif;\n}\n\n/* Sidebar */\n#sidebar {\n    display: flex;\n    flex-direction: column;\n    background-color: darkslategray;\n    width: 22vw;\n    height: 88vh;\n    z-index: 1;\n    padding: 25px;\n    gap: 25px;\n    box-sizing: border-box;\n}\n\n.sidebarSection {\n    display: flex;\n    flex-direction: column;\n}\n\n.sectionTitle {\n    color: whitesmoke;\n    font-family: Arial, Helvetica, sans-serif;\n    font-size: 32px;\n    font-weight: bold;\n}\n\n.sectionItem {\n    display: flex;\n    align-items: center;\n    color: whitesmoke;\n    font-family: Arial, Helvetica, sans-serif;\n    font-size: 18px;\n    text-indent: 10px;\n    height: 40px;\n    transition: all .2s ease-out;\n}\n\n.sectionItem:hover {\n    background-color: rgba(0, 0, 0, 0.20);\n    border-radius: 10px;\n    cursor: pointer;\n    transition: all .2s ease-out;\n}\n\n/* Content General */\n#content {\n    display: flex;\n    flex-direction: column;\n    background-color: whitesmoke;\n    width: 78vw;\n    height: 88vh;\n    z-index: 1;\n}\n\n#titleContainer {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    align-self: center;\n    width: 65vw;\n    height: 50px;\n    margin: 25px;\n    margin-bottom: 10px;\n}\n\n#removeProjectBtn {\n    width: 50px;\n    height: 50px;\n    margin-right: 10px;\n    transition: all .2s ease-out;\n}\n\n#removeProjectBtn:hover {\n    transform: scale(1.1);\n    cursor: pointer;\n    transform-origin: 50% 50%;\n    transition: all .2s ease-out;\n}\n\n#listTitle {\n    font-size: 36px;\n    font-family: Arial, Helvetica, sans-serif;\n    font-weight: bold;\n}\n\n#addTaskBtn {\n    display: block;\n    width: 50px;\n    height: 50px;\n    margin-left: auto;\n    transition: all .2s ease-out;\n}\n\n#addTaskBtn:hover {\n    transform: scale(1.1);\n    cursor: pointer;\n    transform-origin: 50% 50%;\n    transition: all .2s ease-out;\n}\n\n#line {\n    align-self: center;\n    background: black;\n    width: 70vw;\n    height: 4px;\n    border-radius: 50px;\n}\n\n#allTasksContainer {\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    flex-wrap: wrap;\n    margin: 25px 50px 25px 50px;\n    gap: 15px;\n    overflow: auto;\n}\n\n#addTaskMsg{\n    font-size: 25px;\n    color: darkgray;\n}\n\n.taskContainer {\n    display: grid;\n    grid-template-columns: 88% 1fr 1fr;\n    grid-template-rows: 50% 50%;\n    align-items: flex-start;\n    justify-content: center;\n    text-align: center;\n    background-color: black;\n    color: white;\n    border-radius: 10px;\n    width: 700px;\n    overflow: hidden;\n}\n\n.dateContainer {\n    display: flex;\n    align-self: flex-start;\n    grid-column: span 3;\n    margin-bottom: 0px;\n    background-color: darkslategray;\n}\n\n.taskDate {\n    margin: 5px;\n    margin-left: 10px;\n}\n\n.taskDesc {\n    display: inline-block;\n    text-align: left;\n    min-height: 22.5px;\n    max-height: 75px;\n    resize: vertical;\n    overflow-y: auto;\n    overflow-x: hidden;\n    word-wrap: break-word;\n    margin: 10px 10px 10px 10px;\n}\n\n.taskBtns {\n    display: flex;\n    align-self: center;\n    width: 30px;\n    height: 30px;\n    filter: invert(100%);\n    transition: all .2s ease-out;\n}\n\n.taskBtns:hover {\n    transform: scale(1.1);\n    cursor: pointer;\n    transform-origin: 50% 50%;\n    transition: all .2s ease-out;\n}\n\n/* Modal */\n#modalContainer {\n    display: none;\n    position: fixed;\n    z-index: 3;\n    padding-top: 100px;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    background-color: rgb(0,0,0);\n    background-color: rgba(0,0,0,0.4);\n}\n\n#modalContent {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    background-color: whitesmoke;\n    margin: auto;\n    border: 1px solid #888;\n    width: 30%;\n    border-radius: 10px;\n    overflow: hidden;\n}\n\n#modalHeader {\n    display: flex;\n    width: 100%;\n    height: 100%;\n    align-items: center;\n    justify-content: flex-start;\n    background-color: darkslategray;\n    font-size: 30px;\n    color: white;\n}\n\n#actionName {\n    margin-left: 10px;\n    font-size: 20px;\n}\n\n#closeModal {\n    margin-right: 10px;\n    cursor: pointer;\n    margin-left: auto;\n    font-size: 30px;\n}\n\n#modalInputContainer {\n    display: grid;\n    grid-template-columns: 1fr;\n    padding: 20px;\n}\n\n#textLabel, #dateLabel {\n\n}\n\n#textInput, #dateInput {\n    margin-bottom: 10px;\n    border: 1px solid silver;\n    border-radius: 10px;\n}\n\n#textInput[type=textInput], #dateInput[type=date] {\n    padding: 5px;\n  }\n\n#submitBtn {\n    display: flex;\n    justify-self: flex-end;\n    width: 50px;\n    background-color: darkslategray;\n    color: white;\n    border-radius: 10px;\n    border: 1px solid #787878;\n    padding: 5px;\n    width: auto;\n    transition: all .2s ease-out;\n}\n\n#submitBtn:hover {\n    transform: scale(1.025);\n    cursor: pointer;\n    transform-origin: 50% 50%;\n    transition: all .2s ease-out;\n}"],"sourceRoot":""}]);
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
/* harmony export */   makeUI: () => (/* binding */ makeUI)
/* harmony export */ });
/* harmony import */ var _images_logo_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/logo.svg */ "./src/images/logo.svg");
/* harmony import */ var _images_plus_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/plus.png */ "./src/images/plus.png");
/* harmony import */ var _images_minus_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/minus.png */ "./src/images/minus.png");
/* harmony import */ var _tasks_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tasks.js */ "./src/tasks.js");





const plannerObjects = [
    { title: "Inbox" },
    { title: "Today" },
    { title: "This Month"},
];

let projectObjects = localStorage.getItem("projectObjects");
projectObjects = JSON.parse(projectObjects) || [];

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

        const dateLabel = document.getElementById("dateLabel");
        dateLabel.style.display = "none";

        const dateInput = document.getElementById("dateInput");
        dateInput.style.display = "none";

        const submitBtn = document.getElementById("submitBtn");

        submitBtn.onclick = function() {
            let projectTitle = (0,_tasks_js__WEBPACK_IMPORTED_MODULE_3__.submitDesc)("project");
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

        const dateInput = document.getElementById("dateInput");
        dateInput.value = "";

        const submitBtn = document.getElementById("submitBtn");
        submitBtn.onclick = function() {
            let currentList = localStorage.getItem("currentList");
            let taskDesc = (0,_tasks_js__WEBPACK_IMPORTED_MODULE_3__.submitDesc)("add");
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
    content.appendChild((0,_tasks_js__WEBPACK_IMPORTED_MODULE_3__.modal)());

    (0,_tasks_js__WEBPACK_IMPORTED_MODULE_3__.addAllTasks)();
}

function removeProject(projectName) {
    const projectIndex = projectObjects.findIndex(project => project.title.trim() === projectName.trim());

    if (projectIndex !== -1) {
        projectObjects.splice(projectIndex, 1);

        localStorage.setItem("projectObjects", JSON.stringify(projectObjects));
        localStorage.setItem("currentList", "Inbox");
        
        makeSidebar();
        makeContent();
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
/* harmony export */   modal: () => (/* binding */ modal),
/* harmony export */   removeTask: () => (/* binding */ removeTask),
/* harmony export */   submitDesc: () => (/* binding */ submitDesc)
/* harmony export */ });
/* harmony import */ var _images_pencil_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/pencil.png */ "./src/images/pencil.png");
/* harmony import */ var _images_minus_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/minus.png */ "./src/images/minus.png");



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

        const dateInput = document.getElementById("dateInput");
        dateInput.value = task.date;

        const submitBtn = document.getElementById("submitBtn");
        submitBtn.onclick = function() {
            let currentList = localStorage.getItem("currentList");
            let newTask = submitDesc("edit");

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
    textInput.type = "textInput";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLGlJQUE2QztBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0EsZUFBZSxtQ0FBbUM7QUFDbEQsY0FBYyxtQ0FBbUM7QUFDakQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLGlGQUFpRixZQUFZLE1BQU0sT0FBTyxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxVQUFVLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLFVBQVUsS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxZQUFZLE1BQU0sVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLFVBQVUsS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVB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Q0E7QUFDQTs7QUFFQTtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlDQUFpQzs7QUFFakM7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQzVRQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7O0FDQXNCO0FBQ1k7O0FBRWxDLDhDQUE4QywyQ0FBTSxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2RpbnByb2plY3QtdG9kb2xpc3QvLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly9vZGlucHJvamVjdC10b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vb2RpbnByb2plY3QtdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL29kaW5wcm9qZWN0LXRvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vb2RpbnByb2plY3QtdG9kb2xpc3QvLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL29kaW5wcm9qZWN0LXRvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL29kaW5wcm9qZWN0LXRvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9vZGlucHJvamVjdC10b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9vZGlucHJvamVjdC10b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9vZGlucHJvamVjdC10b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL29kaW5wcm9qZWN0LXRvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vb2RpbnByb2plY3QtdG9kb2xpc3QvLi9zcmMvbWFpblVJLmpzIiwid2VicGFjazovL29kaW5wcm9qZWN0LXRvZG9saXN0Ly4vc3JjL3Rhc2tzLmpzIiwid2VicGFjazovL29kaW5wcm9qZWN0LXRvZG9saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW5wcm9qZWN0LXRvZG9saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL29kaW5wcm9qZWN0LXRvZG9saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGlucHJvamVjdC10b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL29kaW5wcm9qZWN0LXRvZG9saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2RpbnByb2plY3QtdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGlucHJvamVjdC10b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9vZGlucHJvamVjdC10b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9vZGlucHJvamVjdC10b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vb2RpbnByb2plY3QtdG9kb2xpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vZm9udHMvUm9ib3RvLVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ1JvYm90byc7XG4gICAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSkgZm9ybWF0KCd0dGYnKSxcbiAgICAgICAgdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pIGZvcm1hdCgndHRmJyk7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gIH1cblxuKiB7XG4gICAgcGFkZGluZzogMHB4O1xuICAgIG1hcmdpbjogMHB4O1xufVxuXG5ib2R5IHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi8qIEhlYWRlciAqL1xuI2hlYWRlciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICBncmlkLWNvbHVtbjogc3BhbiAyO1xuICAgIGhlaWdodDogMTJ2aDtcbiAgICB6LWluZGV4OiAyO1xuICAgIGJveC1zaGFkb3c6IDBweCA4cHggMTZweCAwcHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcbn1cblxuI2hlYWRlckxvZ28ge1xuICAgIHdpZHRoOiA4MHB4O1xuICAgIGhlaWdodDogODBweDtcbn1cblxuI2hlYWRlclRpdGxlIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiA0MnB4O1xuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xufVxuXG4vKiBTaWRlYmFyICovXG4jc2lkZWJhciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtzbGF0ZWdyYXk7XG4gICAgd2lkdGg6IDIydnc7XG4gICAgaGVpZ2h0OiA4OHZoO1xuICAgIHotaW5kZXg6IDE7XG4gICAgcGFkZGluZzogMjVweDtcbiAgICBnYXA6IDI1cHg7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLnNpZGViYXJTZWN0aW9uIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5zZWN0aW9uVGl0bGUge1xuICAgIGNvbG9yOiB3aGl0ZXNtb2tlO1xuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMzJweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnNlY3Rpb25JdGVtIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgY29sb3I6IHdoaXRlc21va2U7XG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIHRleHQtaW5kZW50OiAxMHB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2Utb3V0O1xufVxuXG4uc2VjdGlvbkl0ZW06aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yMCk7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlLW91dDtcbn1cblxuLyogQ29udGVudCBHZW5lcmFsICovXG4jY29udGVudCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XG4gICAgd2lkdGg6IDc4dnc7XG4gICAgaGVpZ2h0OiA4OHZoO1xuICAgIHotaW5kZXg6IDE7XG59XG5cbiN0aXRsZUNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgIHdpZHRoOiA2NXZ3O1xuICAgIGhlaWdodDogNTBweDtcbiAgICBtYXJnaW46IDI1cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuI3JlbW92ZVByb2plY3RCdG4ge1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGhlaWdodDogNTBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlLW91dDtcbn1cblxuI3JlbW92ZVByb2plY3RCdG46aG92ZXIge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDUwJTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2Utb3V0O1xufVxuXG4jbGlzdFRpdGxlIHtcbiAgICBmb250LXNpemU6IDM2cHg7XG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbiNhZGRUYXNrQnRuIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogNTBweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlLW91dDtcbn1cblxuI2FkZFRhc2tCdG46aG92ZXIge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDUwJTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2Utb3V0O1xufVxuXG4jbGluZSB7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgIGJhY2tncm91bmQ6IGJsYWNrO1xuICAgIHdpZHRoOiA3MHZ3O1xuICAgIGhlaWdodDogNHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG59XG5cbiNhbGxUYXNrc0NvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBtYXJnaW46IDI1cHggNTBweCAyNXB4IDUwcHg7XG4gICAgZ2FwOiAxNXB4O1xuICAgIG92ZXJmbG93OiBhdXRvO1xufVxuXG4jYWRkVGFza01zZ3tcbiAgICBmb250LXNpemU6IDI1cHg7XG4gICAgY29sb3I6IGRhcmtncmF5O1xufVxuXG4udGFza0NvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDg4JSAxZnIgMWZyO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogNTAlIDUwJTtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgd2lkdGg6IDcwMHB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5kYXRlQ29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XG4gICAgZ3JpZC1jb2x1bW46IHNwYW4gMztcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGFya3NsYXRlZ3JheTtcbn1cblxuLnRhc2tEYXRlIHtcbiAgICBtYXJnaW46IDVweDtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbn1cblxuLnRhc2tEZXNjIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBtaW4taGVpZ2h0OiAyMi41cHg7XG4gICAgbWF4LWhlaWdodDogNzVweDtcbiAgICByZXNpemU6IHZlcnRpY2FsO1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgICBtYXJnaW46IDEwcHggMTBweCAxMHB4IDEwcHg7XG59XG5cbi50YXNrQnRucyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgd2lkdGg6IDMwcHg7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIGZpbHRlcjogaW52ZXJ0KDEwMCUpO1xuICAgIHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZS1vdXQ7XG59XG5cbi50YXNrQnRuczpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgNTAlO1xuICAgIHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZS1vdXQ7XG59XG5cbi8qIE1vZGFsICovXG4jbW9kYWxDb250YWluZXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHotaW5kZXg6IDM7XG4gICAgcGFkZGluZy10b3A6IDEwMHB4O1xuICAgIGxlZnQ6IDA7XG4gICAgdG9wOiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwwLDApO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC40KTtcbn1cblxuI21vZGFsQ29udGVudCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzg4ODtcbiAgICB3aWR0aDogMzAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuI21vZGFsSGVhZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrc2xhdGVncmF5O1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbiNhY3Rpb25OYW1lIHtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICBmb250LXNpemU6IDIwcHg7XG59XG5cbiNjbG9zZU1vZGFsIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbn1cblxuI21vZGFsSW5wdXRDb250YWluZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgcGFkZGluZzogMjBweDtcbn1cblxuI3RleHRMYWJlbCwgI2RhdGVMYWJlbCB7XG5cbn1cblxuI3RleHRJbnB1dCwgI2RhdGVJbnB1dCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBzaWx2ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuI3RleHRJbnB1dFt0eXBlPXRleHRJbnB1dF0sICNkYXRlSW5wdXRbdHlwZT1kYXRlXSB7XG4gICAgcGFkZGluZzogNXB4O1xuICB9XG5cbiNzdWJtaXRCdG4ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1zZWxmOiBmbGV4LWVuZDtcbiAgICB3aWR0aDogNTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrc2xhdGVncmF5O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICM3ODc4Nzg7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZS1vdXQ7XG59XG5cbiNzdWJtaXRCdG46aG92ZXIge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMjUpO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgNTAlO1xuICAgIHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZS1vdXQ7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHFCQUFxQjtJQUNyQjs2REFDbUQ7SUFDbkQsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtFQUNwQjs7QUFFRjtJQUNJLFlBQVk7SUFDWixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsaUNBQWlDO0lBQ2pDLGdCQUFnQjtBQUNwQjs7QUFFQSxXQUFXO0FBQ1g7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsMkJBQTJCO0lBQzNCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLFVBQVU7SUFDVixnREFBZ0Q7QUFDcEQ7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlB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QVk7SUFDWixzQkFBc0I7SUFDdEIsVUFBVTtJQUNWLG1CQUFtQjtJQUNuQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsV0FBVztJQUNYLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsMkJBQTJCO0lBQzNCLCtCQUErQjtJQUMvQixlQUFlO0lBQ2YsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiwwQkFBMEI7SUFDMUIsYUFBYTtBQUNqQjs7QUFFQTs7QUFFQTs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQix3QkFBd0I7SUFDeEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksWUFBWTtFQUNkOztBQUVGO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gsK0JBQStCO0lBQy9CLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixXQUFXO0lBQ1gsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGVBQWU7SUFDZix5QkFBeUI7SUFDekIsNEJBQTRCO0FBQ2hDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90byc7XFxuICAgIHNyYzogdXJsKCcuL2ZvbnRzL1JvYm90by1SZWd1bGFyLnR0ZicpIGZvcm1hdCgndHRmJyksXFxuICAgICAgICB1cmwoJy4vZm9udHMvUm9ib3RvLVJlZ3VsYXIudHRmJykgZm9ybWF0KCd0dGYnKTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgfVxcblxcbioge1xcbiAgICBwYWRkaW5nOiAwcHg7XFxuICAgIG1hcmdpbjogMHB4O1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbn1cXG5cXG4vKiBIZWFkZXIgKi9cXG4jaGVhZGVyIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBncmlkLWNvbHVtbjogc3BhbiAyO1xcbiAgICBoZWlnaHQ6IDEydmg7XFxuICAgIHotaW5kZXg6IDI7XFxuICAgIGJveC1zaGFkb3c6IDBweCA4cHggMTZweCAwcHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcXG59XFxuXFxuI2hlYWRlckxvZ28ge1xcbiAgICB3aWR0aDogODBweDtcXG4gICAgaGVpZ2h0OiA4MHB4O1xcbn1cXG5cXG4jaGVhZGVyVGl0bGUge1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogNDJweDtcXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxufVxcblxcbi8qIFNpZGViYXIgKi9cXG4jc2lkZWJhciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtzbGF0ZWdyYXk7XFxuICAgIHdpZHRoOiAyMnZ3O1xcbiAgICBoZWlnaHQ6IDg4dmg7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIHBhZGRpbmc6IDI1cHg7XFxuICAgIGdhcDogMjVweDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuLnNpZGViYXJTZWN0aW9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLnNlY3Rpb25UaXRsZSB7XFxuICAgIGNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAzMnB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLnNlY3Rpb25JdGVtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgY29sb3I6IHdoaXRlc21va2U7XFxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIHRleHQtaW5kZW50OiAxMHB4O1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZS1vdXQ7XFxufVxcblxcbi5zZWN0aW9uSXRlbTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yMCk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlLW91dDtcXG59XFxuXFxuLyogQ29udGVudCBHZW5lcmFsICovXFxuI2NvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgICB3aWR0aDogNzh2dztcXG4gICAgaGVpZ2h0OiA4OHZoO1xcbiAgICB6LWluZGV4OiAxO1xcbn1cXG5cXG4jdGl0bGVDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIHdpZHRoOiA2NXZ3O1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIG1hcmdpbjogMjVweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuXFxuI3JlbW92ZVByb2plY3RCdG4ge1xcbiAgICB3aWR0aDogNTBweDtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxuICAgIHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZS1vdXQ7XFxufVxcblxcbiNyZW1vdmVQcm9qZWN0QnRuOmhvdmVyIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRyYW5zZm9ybS1vcmlnaW46IDUwJSA1MCU7XFxuICAgIHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZS1vdXQ7XFxufVxcblxcbiNsaXN0VGl0bGUge1xcbiAgICBmb250LXNpemU6IDM2cHg7XFxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuI2FkZFRhc2tCdG4ge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgd2lkdGg6IDUwcHg7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgIHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZS1vdXQ7XFxufVxcblxcbiNhZGRUYXNrQnRuOmhvdmVyIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRyYW5zZm9ybS1vcmlnaW46IDUwJSA1MCU7XFxuICAgIHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZS1vdXQ7XFxufVxcblxcbiNsaW5lIHtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kOiBibGFjaztcXG4gICAgd2lkdGg6IDcwdnc7XFxuICAgIGhlaWdodDogNHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xcbn1cXG5cXG4jYWxsVGFza3NDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBtYXJnaW46IDI1cHggNTBweCAyNXB4IDUwcHg7XFxuICAgIGdhcDogMTVweDtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxufVxcblxcbiNhZGRUYXNrTXNne1xcbiAgICBmb250LXNpemU6IDI1cHg7XFxuICAgIGNvbG9yOiBkYXJrZ3JheTtcXG59XFxuXFxuLnRhc2tDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDg4JSAxZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDUwJSA1MCU7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICB3aWR0aDogNzAwcHg7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi5kYXRlQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG4gICAgZ3JpZC1jb2x1bW46IHNwYW4gMztcXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrc2xhdGVncmF5O1xcbn1cXG5cXG4udGFza0RhdGUge1xcbiAgICBtYXJnaW46IDVweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxufVxcblxcbi50YXNrRGVzYyB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgbWluLWhlaWdodDogMjIuNXB4O1xcbiAgICBtYXgtaGVpZ2h0OiA3NXB4O1xcbiAgICByZXNpemU6IHZlcnRpY2FsO1xcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XFxuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcXG4gICAgbWFyZ2luOiAxMHB4IDEwcHggMTBweCAxMHB4O1xcbn1cXG5cXG4udGFza0J0bnMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAzMHB4O1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIGZpbHRlcjogaW52ZXJ0KDEwMCUpO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2Utb3V0O1xcbn1cXG5cXG4udGFza0J0bnM6aG92ZXIge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDUwJTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlLW91dDtcXG59XFxuXFxuLyogTW9kYWwgKi9cXG4jbW9kYWxDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHotaW5kZXg6IDM7XFxuICAgIHBhZGRpbmctdG9wOiAxMDBweDtcXG4gICAgbGVmdDogMDtcXG4gICAgdG9wOiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwwLDApO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNCk7XFxufVxcblxcbiNtb2RhbENvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM4ODg7XFxuICAgIHdpZHRoOiAzMCU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbiNtb2RhbEhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGFya3NsYXRlZ3JheTtcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbiNhY3Rpb25OYW1lIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuXFxuI2Nsb3NlTW9kYWwge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG59XFxuXFxuI21vZGFsSW5wdXRDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gICAgcGFkZGluZzogMjBweDtcXG59XFxuXFxuI3RleHRMYWJlbCwgI2RhdGVMYWJlbCB7XFxuXFxufVxcblxcbiN0ZXh0SW5wdXQsICNkYXRlSW5wdXQge1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBzaWx2ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbiN0ZXh0SW5wdXRbdHlwZT10ZXh0SW5wdXRdLCAjZGF0ZUlucHV0W3R5cGU9ZGF0ZV0ge1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICB9XFxuXFxuI3N1Ym1pdEJ0biB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktc2VsZjogZmxleC1lbmQ7XFxuICAgIHdpZHRoOiA1MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrc2xhdGVncmF5O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM3ODc4Nzg7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgd2lkdGg6IGF1dG87XFxuICAgIHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZS1vdXQ7XFxufVxcblxcbiNzdWJtaXRCdG46aG92ZXIge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDI1KTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgNTAlO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2Utb3V0O1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IGxvZ28gZnJvbSBcIi4vaW1hZ2VzL2xvZ28uc3ZnXCI7XG5pbXBvcnQgYWRkSWNvbiBmcm9tIFwiLi9pbWFnZXMvcGx1cy5wbmdcIjtcbmltcG9ydCBtaW51c0ljb24gZnJvbSBcIi4vaW1hZ2VzL21pbnVzLnBuZ1wiO1xuaW1wb3J0IHthZGRBbGxUYXNrcywgbW9kYWwsIHN1Ym1pdERlc2N9IGZyb20gXCIuL3Rhc2tzLmpzXCI7XG5cbmNvbnN0IHBsYW5uZXJPYmplY3RzID0gW1xuICAgIHsgdGl0bGU6IFwiSW5ib3hcIiB9LFxuICAgIHsgdGl0bGU6IFwiVG9kYXlcIiB9LFxuICAgIHsgdGl0bGU6IFwiVGhpcyBNb250aFwifSxcbl07XG5cbmxldCBwcm9qZWN0T2JqZWN0cyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdE9iamVjdHNcIik7XG5wcm9qZWN0T2JqZWN0cyA9IEpTT04ucGFyc2UocHJvamVjdE9iamVjdHMpIHx8IFtdO1xuXG5jb25zdCBzZWN0aW9uTGlzdHMgPSBbXG4gICAgeyB0aXRsZTogXCJQbGFubmVyXCIsIGxpc3Q6IHBsYW5uZXJPYmplY3RzIH0sXG4gICAgeyB0aXRsZTogXCJQcm9qZWN0c1wiLCBsaXN0OiBwcm9qZWN0T2JqZWN0c31cbl1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VVSSgpIHtcbiAgICBpZiAoIWxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY3VycmVudExpc3RcIikpIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJjdXJyZW50TGlzdFwiLCBcIkluYm94XCIpO1xuICAgIH1cblxuICAgIG1ha2VIZWFkZXIoKTtcbiAgICBtYWtlU2lkZWJhcigpO1xuICAgIG1ha2VDb250ZW50KCk7XG59XG5cbmZ1bmN0aW9uIG1ha2VIZWFkZXIoKSB7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJoZWFkZXJcIik7XG5cbiAgICBjb25zdCBoZWFkZXJMb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBoZWFkZXJMb2dvLmlkID0gXCJoZWFkZXJMb2dvXCI7XG4gICAgaGVhZGVyTG9nby5zcmMgPSBsb2dvO1xuXG4gICAgY29uc3QgaGVhZGVyVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKVxuICAgIGhlYWRlclRpdGxlLmlkID0gXCJoZWFkZXJUaXRsZVwiO1xuICAgIGhlYWRlclRpdGxlLnRleHRDb250ZW50ID0gXCJVbm9yZ2FuaXplZFwiO1xuXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGhlYWRlckxvZ28pO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZChoZWFkZXJUaXRsZSk7XG59XG5cbmZ1bmN0aW9uIG1ha2VTaWRlYmFyKCkge1xuICAgIGNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNpZGViYXJcIik7XG4gICAgc2lkZWJhci5pbm5lckhUTUwgPSBcIlwiO1xuXG4gICAgc2VjdGlvbkxpc3RzLmZvckVhY2goKHt0aXRsZSwgbGlzdH0pID0+IHtcbiAgICAgICAgc2lkZWJhci5hcHBlbmRDaGlsZChtYWtlU2lkZWJhclNlY3Rpb24odGl0bGUsIGxpc3QpKTtcbiAgICB9KVxufVxuXG5mdW5jdGlvbiBtYWtlU2lkZWJhclNlY3Rpb24odGl0bGUsIGxpc3QpIHtcbiAgICBjb25zdCBzZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBzZWN0aW9uLmNsYXNzTGlzdC5hZGQoXCJzaWRlYmFyU2VjdGlvblwiKVxuXG4gICAgY29uc3Qgc2VjdGlvblRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIilcbiAgICBzZWN0aW9uVGl0bGUuY2xhc3NMaXN0LmFkZChcInNlY3Rpb25UaXRsZVwiKVxuICAgIHNlY3Rpb25UaXRsZS50ZXh0Q29udGVudCA9IHRpdGxlO1xuXG4gICAgY29uc3QgYWRkUHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpXG4gICAgYWRkUHJvamVjdC5jbGFzc0xpc3QuYWRkKFwic2VjdGlvbkl0ZW1cIilcbiAgICBhZGRQcm9qZWN0LnRleHRDb250ZW50ID0gXCIrIEFkZCBQcm9qZWN0XCI7XG5cbiAgICBhZGRQcm9qZWN0Lm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc3QgbW9kYWxDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1vZGFsQ29udGFpbmVyXCIpO1xuICAgICAgICBtb2RhbENvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuXG4gICAgICAgIGNvbnN0IGFjdGlvbk5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFjdGlvbk5hbWVcIik7XG4gICAgICAgIGFjdGlvbk5hbWUudGV4dENvbnRlbnQgPSBcIkFkZCBQcm9qZWN0XCJcblxuICAgICAgICBjb25zdCB0ZXh0TGFiZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRleHRMYWJlbFwiKTtcbiAgICAgICAgdGV4dExhYmVsLnRleHRDb250ZW50ID0gXCJFbnRlciBQcm9qZWN0IE5hbWU6IFwiO1xuXG4gICAgICAgIGNvbnN0IHRleHRJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGV4dElucHV0XCIpO1xuICAgICAgICB0ZXh0SW5wdXQudmFsdWUgPSBcIlwiO1xuXG4gICAgICAgIGNvbnN0IGRhdGVMYWJlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGF0ZUxhYmVsXCIpO1xuICAgICAgICBkYXRlTGFiZWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXG4gICAgICAgIGNvbnN0IGRhdGVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGF0ZUlucHV0XCIpO1xuICAgICAgICBkYXRlSW5wdXQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXG4gICAgICAgIGNvbnN0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3VibWl0QnRuXCIpO1xuXG4gICAgICAgIHN1Ym1pdEJ0bi5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBsZXQgcHJvamVjdFRpdGxlID0gc3VibWl0RGVzYyhcInByb2plY3RcIik7XG4gICAgICAgICAgICBsZXQgcHJvamVjdFByZXNlbnQgPSBwcm9qZWN0T2JqZWN0cy5zb21lKHByb2plY3QgPT4gcHJvamVjdC50aXRsZS50cmltKCkgPT09IHByb2plY3RUaXRsZS50cmltKCkpO1xuXG4gICAgICAgICAgICBpZiAoIXByb2plY3RUaXRsZSkge1xuICAgICAgICAgICAgICAgIGFsZXJ0KFwiUGxlYXNlIGVudGVyIGEgcHJvamVjdCBuYW1lOiBcIik7XG4gICAgICAgICAgICAgICAgbW9kYWxDb250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgICAgIH0gZWxzZSBpZihwcm9qZWN0UHJlc2VudCkge1xuICAgICAgICAgICAgICAgIGFsZXJ0KFwiUGxlYXNlIGVudGVyIGEgdW5pcXVlIHByb2plY3QgbmFtZVwiKTtcbiAgICAgICAgICAgICAgICBtb2RhbENvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChwcm9qZWN0VGl0bGUgJiYgIXByb2plY3RQcmVzZW50KSB7XG4gICAgICAgICAgICAgICAgcHJvamVjdE9iamVjdHMucHVzaCh7IHRpdGxlOiBwcm9qZWN0VGl0bGUgfSk7XG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0T2JqZWN0c1wiLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0T2JqZWN0cykpO1xuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY3VycmVudExpc3RcIixwcm9qZWN0VGl0bGUpO1xuXG4gICAgICAgICAgICAgICAgbWFrZVNpZGViYXIoKTtcbiAgICAgICAgICAgICAgICBtYWtlQ29udGVudCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHNlY3Rpb24uYXBwZW5kQ2hpbGQoc2VjdGlvblRpdGxlKTtcblxuICAgIGlmICh0aXRsZSA9PSBcIlByb2plY3RzXCIpIHtzZWN0aW9uLmFwcGVuZENoaWxkKGFkZFByb2plY3QpfTtcblxuICAgIGxpc3QuZm9yRWFjaCgoe3RpdGxlfSkgPT4ge1xuICAgICAgICBjb25zdCBzZWN0aW9uSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpXG4gICAgICAgIHNlY3Rpb25JdGVtLmNsYXNzTGlzdC5hZGQoXCJzZWN0aW9uSXRlbVwiKVxuICAgICAgICBzZWN0aW9uSXRlbS50ZXh0Q29udGVudCA9IHRpdGxlO1xuXG4gICAgICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImN1cnJlbnRMaXN0XCIpID09PSB0aXRsZSkge1xuICAgICAgICAgICAgc2VjdGlvbkl0ZW0uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZ2JhKDAsIDAsIDAsIDAuMjApXCI7XG4gICAgICAgICAgICBzZWN0aW9uSXRlbS5zdHlsZS5ib3JkZXJSYWRpdXMgPSBcIjEwcHhcIjtcbiAgICAgICAgfTtcblxuICAgICAgICBzZWN0aW9uSXRlbS5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImN1cnJlbnRMaXN0XCIsdGl0bGUpO1xuXG4gICAgICAgICAgICBtYWtlU2lkZWJhcigpO1xuICAgICAgICAgICAgbWFrZUNvbnRlbnQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNlY3Rpb24uYXBwZW5kQ2hpbGQoc2VjdGlvbkl0ZW0pO1xuICAgIH0pXG5cbiAgICByZXR1cm4gc2VjdGlvbjtcbn1cblxuZnVuY3Rpb24gbWFrZUNvbnRlbnQoKSB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKVxuICAgIGNvbnRlbnQuaW5uZXJIVE1MID0gXCJcIjtcblxuICAgIGNvbnN0IHRpdGxlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0aXRsZUNvbnRhaW5lci5pZCA9IFwidGl0bGVDb250YWluZXJcIjtcblxuICAgIGNvbnN0IHJlbW92ZVByb2plY3RCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIHJlbW92ZVByb2plY3RCdG4uaWQgPSBcInJlbW92ZVByb2plY3RCdG5cIjtcbiAgICByZW1vdmVQcm9qZWN0QnRuLnNyYyA9IG1pbnVzSWNvbjtcbiAgICByZW1vdmVQcm9qZWN0QnRuLm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc3QgY29uZmlybVJlbW92ZSA9IHdpbmRvdy5jb25maXJtKFwiQXJlIHlvdSBzdXJlIHdhbnQgdG8gcmVtb3ZlIFwiICsgbGlzdFRpdGxlLnRleHRDb250ZW50ICsgXCI/XCIpO1xuXG4gICAgICAgIGlmIChjb25maXJtUmVtb3ZlKSB7XG4gICAgICAgICAgICByZW1vdmVQcm9qZWN0KGxpc3RUaXRsZS50ZXh0Q29udGVudCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBsaXN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBsaXN0VGl0bGUuaWQgPSBcImxpc3RUaXRsZVwiO1xuICAgIGxpc3RUaXRsZS50ZXh0Q29udGVudCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY3VycmVudExpc3RcIik7XG5cbiAgICBjb25zdCBhZGRUYXNrQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBhZGRUYXNrQnRuLmlkID0gXCJhZGRUYXNrQnRuXCI7XG4gICAgYWRkVGFza0J0bi5zcmMgPSBhZGRJY29uO1xuICAgIFxuICAgIGFkZFRhc2tCdG4ub25jbGljayA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zdCBtb2RhbENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW9kYWxDb250YWluZXJcIik7XG4gICAgICAgIG1vZGFsQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG5cbiAgICAgICAgY29uc3QgYWN0aW9uTmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWN0aW9uTmFtZVwiKTtcbiAgICAgICAgYWN0aW9uTmFtZS50ZXh0Q29udGVudCA9IFwiQWRkIFRhc2tcIlxuXG4gICAgICAgIGNvbnN0IHRleHRMYWJlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGV4dExhYmVsXCIpO1xuICAgICAgICB0ZXh0TGFiZWwudGV4dENvbnRlbnQgPSBcIkVudGVyIERlc2NyaXB0aW9uOiBcIjtcblxuICAgICAgICBjb25zdCB0ZXh0SW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRleHRJbnB1dFwiKTtcbiAgICAgICAgdGV4dElucHV0LnZhbHVlID0gXCJcIjtcblxuICAgICAgICBjb25zdCBkYXRlSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRhdGVJbnB1dFwiKTtcbiAgICAgICAgZGF0ZUlucHV0LnZhbHVlID0gXCJcIjtcblxuICAgICAgICBjb25zdCBzdWJtaXRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN1Ym1pdEJ0blwiKTtcbiAgICAgICAgc3VibWl0QnRuLm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGxldCBjdXJyZW50TGlzdCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY3VycmVudExpc3RcIik7XG4gICAgICAgICAgICBsZXQgdGFza0Rlc2MgPSBzdWJtaXREZXNjKFwiYWRkXCIpO1xuICAgICAgICAgICAgbGV0IHRhc2tzU3RvcmFnZSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oY3VycmVudExpc3QgKyBcIlRhc2tzXCIpKSB8fCBbXTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKHRhc2tEZXNjKSB7XG4gICAgICAgICAgICAgICAgdGFza3NTdG9yYWdlLnB1c2godGFza0Rlc2MpO1xuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGN1cnJlbnRMaXN0ICsgXCJUYXNrc1wiLCBKU09OLnN0cmluZ2lmeSh0YXNrc1N0b3JhZ2UpKTtcbiAgICBcbiAgICAgICAgICAgICAgICBhZGRBbGxUYXNrcygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbGluZS5pZCA9IFwibGluZVwiO1xuXG4gICAgY29uc3QgYWxsVGFza3NDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGFsbFRhc2tzQ29udGFpbmVyLmlkID0gXCJhbGxUYXNrc0NvbnRhaW5lclwiO1xuXG4gICAgdGl0bGVDb250YWluZXIuYXBwZW5kQ2hpbGQocmVtb3ZlUHJvamVjdEJ0bik7XG4gICAgdGl0bGVDb250YWluZXIuYXBwZW5kQ2hpbGQobGlzdFRpdGxlKTtcbiAgICB0aXRsZUNvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRUYXNrQnRuKTtcblxuICAgIGlmIChsaXN0VGl0bGUudGV4dENvbnRlbnQgPT09IFwiVG9kYXlcIiB8fCBsaXN0VGl0bGUudGV4dENvbnRlbnQgPT09IFwiVGhpcyBNb250aFwiKSB7XG4gICAgICAgIGFkZFRhc2tCdG4uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGFkZFRhc2tCdG4uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICB9XG5cbiAgICBpZiAobGlzdFRpdGxlLnRleHRDb250ZW50ID09PSBcIkluYm94XCIgfHwgbGlzdFRpdGxlLnRleHRDb250ZW50ID09PSBcIlRvZGF5XCIgfHwgbGlzdFRpdGxlLnRleHRDb250ZW50ID09PSBcIlRoaXMgTW9udGhcIikge1xuICAgICAgICByZW1vdmVQcm9qZWN0QnRuLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZW1vdmVQcm9qZWN0QnRuLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgfVxuICAgIFxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQodGl0bGVDb250YWluZXIpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobGluZSk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChhbGxUYXNrc0NvbnRhaW5lcik7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChtb2RhbCgpKTtcblxuICAgIGFkZEFsbFRhc2tzKCk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVByb2plY3QocHJvamVjdE5hbWUpIHtcbiAgICBjb25zdCBwcm9qZWN0SW5kZXggPSBwcm9qZWN0T2JqZWN0cy5maW5kSW5kZXgocHJvamVjdCA9PiBwcm9qZWN0LnRpdGxlLnRyaW0oKSA9PT0gcHJvamVjdE5hbWUudHJpbSgpKTtcblxuICAgIGlmIChwcm9qZWN0SW5kZXggIT09IC0xKSB7XG4gICAgICAgIHByb2plY3RPYmplY3RzLnNwbGljZShwcm9qZWN0SW5kZXgsIDEpO1xuXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJvamVjdE9iamVjdHNcIiwgSlNPTi5zdHJpbmdpZnkocHJvamVjdE9iamVjdHMpKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJjdXJyZW50TGlzdFwiLCBcIkluYm94XCIpO1xuICAgICAgICBcbiAgICAgICAgbWFrZVNpZGViYXIoKTtcbiAgICAgICAgbWFrZUNvbnRlbnQoKTtcbiAgICB9XG59IiwiaW1wb3J0IHBlbkljb24gZnJvbSBcIi4vaW1hZ2VzL3BlbmNpbC5wbmdcIlxuaW1wb3J0IG1pbnVzSWNvbiBmcm9tIFwiLi9pbWFnZXMvbWludXMucG5nXCI7XG5cbmZ1bmN0aW9uIG1ha2VUYXNrKHRhc2spIHtcbiAgICBjb25zdCB0YXNrQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0YXNrQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ0YXNrQ29udGFpbmVyXCIpO1xuICAgIFxuICAgIGNvbnN0IHRhc2tEZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgdGFza0Rlc2MuY2xhc3NMaXN0LmFkZChcInRhc2tEZXNjXCIpO1xuICAgIHRhc2tEZXNjLnRleHRDb250ZW50ID0gdGFzay50ZXh0O1xuXG4gICAgY29uc3QgZWRpdFRhc2tCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIGVkaXRUYXNrQnRuLmNsYXNzTGlzdC5hZGQoXCJ0YXNrQnRuc1wiKTtcbiAgICBlZGl0VGFza0J0bi5zcmMgPSBwZW5JY29uO1xuXG4gICAgZWRpdFRhc2tCdG4ub25jbGljayA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zdCBtb2RhbENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW9kYWxDb250YWluZXJcIik7XG4gICAgICAgIG1vZGFsQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG5cbiAgICAgICAgY29uc3QgYWN0aW9uTmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWN0aW9uTmFtZVwiKTtcbiAgICAgICAgYWN0aW9uTmFtZS50ZXh0Q29udGVudCA9IFwiRWRpdCBUYXNrXCJcblxuICAgICAgICBjb25zdCB0ZXh0TGFiZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRleHRMYWJlbFwiKTtcbiAgICAgICAgdGV4dExhYmVsLnRleHRDb250ZW50ID0gXCJFbnRlciBOZXcgRGVzY3JpcHRpb246IFwiO1xuXG4gICAgICAgIGNvbnN0IHRleHRJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGV4dElucHV0XCIpO1xuICAgICAgICB0ZXh0SW5wdXQudmFsdWUgPSB0YXNrLnRleHQ7XG5cbiAgICAgICAgY29uc3QgZGF0ZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkYXRlSW5wdXRcIik7XG4gICAgICAgIGRhdGVJbnB1dC52YWx1ZSA9IHRhc2suZGF0ZTtcblxuICAgICAgICBjb25zdCBzdWJtaXRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN1Ym1pdEJ0blwiKTtcbiAgICAgICAgc3VibWl0QnRuLm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGxldCBjdXJyZW50TGlzdCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY3VycmVudExpc3RcIik7XG4gICAgICAgICAgICBsZXQgbmV3VGFzayA9IHN1Ym1pdERlc2MoXCJlZGl0XCIpO1xuXG4gICAgICAgICAgICBpZiAobmV3VGFzaykge1xuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50TGlzdCA9PT0gXCJUb2RheVwiIHx8IGN1cnJlbnRMaXN0ID09PSBcIlRoaXMgTW9udGhcIikge1xuICAgICAgICAgICAgICAgICAgICBzYXZlTmV3VGFza0Rlc2ModGFzaywgbmV3VGFzaywgY3VycmVudExpc3QpXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc2F2ZU5ld1Rhc2tEZXNjKHRhc2ssIG5ld1Rhc2ssIGN1cnJlbnRMaXN0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCByZW1vdmVUYXNrQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICByZW1vdmVUYXNrQnRuLmNsYXNzTGlzdC5hZGQoXCJ0YXNrQnRuc1wiKTtcbiAgICByZW1vdmVUYXNrQnRuLnNyYyA9IG1pbnVzSWNvbjtcblxuICAgIHJlbW92ZVRhc2tCdG4ub25jbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmVtb3ZlVGFzayh0YXNrLnRleHQsIHRhc2suZGF0ZSk7XG4gICAgfVxuXG4gICAgY29uc3QgZGF0ZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGF0ZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZGF0ZUNvbnRhaW5lclwiKTtcblxuICAgIGNvbnN0IGRhdGVQYXJ0cyA9IHRhc2suZGF0ZS5zcGxpdChcIi1cIik7XG4gICAgY29uc3QgZHVlRGF0ZSA9IG5ldyBEYXRlKGRhdGVQYXJ0c1swXSwgZGF0ZVBhcnRzWzFdIC0gMSwgZGF0ZVBhcnRzWzJdKTtcbiAgICBjb25zdCBvcHRpb25zID0geyBkYXk6ICdudW1lcmljJywgbW9udGg6ICdsb25nJywgeWVhcjogJ251bWVyaWMnIH07XG4gICAgY29uc3QgZm9ybWF0dGVkRGF0ZSA9IGR1ZURhdGUudG9Mb2NhbGVEYXRlU3RyaW5nKCdlbi1VUycsIG9wdGlvbnMpO1xuXG4gICAgY29uc3QgdGFza0RhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICB0YXNrRGF0ZS5jbGFzc0xpc3QuYWRkKFwidGFza0RhdGVcIik7XG4gICAgdGFza0RhdGUudGV4dENvbnRlbnQgPSBmb3JtYXR0ZWREYXRlO1xuXG4gICAgZGF0ZUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrRGF0ZSk7XG4gICAgdGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZChkYXRlQ29udGFpbmVyKTtcbiAgICB0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tEZXNjKTtcbiAgICB0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKGVkaXRUYXNrQnRuKTtcbiAgICB0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKHJlbW92ZVRhc2tCdG4pO1xuXG4gICAgcmV0dXJuIHRhc2tDb250YWluZXI7XG59XG5cbmZ1bmN0aW9uIGdldFNhdmVkVGFza3MoKSB7XG4gICAgbGV0IGN1cnJlbnRMaXN0ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjdXJyZW50TGlzdFwiKTtcbiAgICBsZXQgdGFza3NTdG9yYWdlID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShjdXJyZW50TGlzdCArIFwiVGFza3NcIikpIHx8IFtdO1xuXG4gICAgaWYgKHRhc2tzU3RvcmFnZS5sZW5ndGggPiAxICYmIHRhc2tzU3RvcmFnZS5ldmVyeSh0YXNrID0+IHRhc2suZGF0ZSkpIHtcbiAgICAgICAgdGFza3NTdG9yYWdlLnNvcnQoKGEsIGIpID0+IG5ldyBEYXRlKGEuZGF0ZSkgLSBuZXcgRGF0ZShiLmRhdGUpKTtcbiAgICB9XG5cbiAgICBjb25zdCB0YXNrRWxlbWVudHMgPSBbXTtcblxuICAgIHRhc2tzU3RvcmFnZS5mb3JFYWNoKHRhc2sgPT4ge1xuICAgICAgICBjb25zdCB0YXNrRWxlbWVudCA9IG1ha2VUYXNrKHRhc2spO1xuICAgICAgICB0YXNrRWxlbWVudHMucHVzaCh0YXNrRWxlbWVudCk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdGFza0VsZW1lbnRzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkQWxsVGFza3MoKSB7XG4gICAgY29uc3QgYWxsVGFza3NDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFsbFRhc2tzQ29udGFpbmVyXCIpO1xuICAgIGFsbFRhc2tzQ29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XG5cbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIlRvZGF5VGFza3NcIiwgSlNPTi5zdHJpbmdpZnkodG9kYXlUYXNrcygpKSk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJUaGlzIE1vbnRoVGFza3NcIiwgSlNPTi5zdHJpbmdpZnkobW9udGhUYXNrcygpKSk7XG5cbiAgICBpZiAoZ2V0U2F2ZWRUYXNrcygpLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICBnZXRTYXZlZFRhc2tzKCkuZm9yRWFjaCh0YXNrID0+IHtcbiAgICAgICAgICAgIGFsbFRhc2tzQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2spO1xuICAgICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBhZGRUYXNrTXNnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIilcbiAgICAgICAgYWRkVGFza01zZy5pZCA9IFwiYWRkVGFza01zZ1wiXG4gICAgICAgIGFkZFRhc2tNc2cudGV4dENvbnRlbnQgPSBcIkFkZCBhIHRhc2sgdG8gZ2V0IHN0YXJ0ZWQhXCI7XG5cbiAgICAgICAgYWxsVGFza3NDb250YWluZXIuYXBwZW5kQ2hpbGQoYWRkVGFza01zZyk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBzYXZlTmV3VGFza0Rlc2Mob2xkVGFzaywgbmV3VGFzaywgY3VycmVudExpc3QpIHtcbiAgICBpZiAoY3VycmVudExpc3QgPT09IFwiVG9kYXlcIiB8fCBjdXJyZW50TGlzdCA9PT0gXCJUaGlzIE1vbnRoXCIpIHtcbiAgICAgICAgY3VycmVudExpc3QgPSBcIkluYm94XCJcbiAgICB9XG5cbiAgICBsZXQgdGFza3NTdG9yYWdlID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShjdXJyZW50TGlzdCArIFwiVGFza3NcIikpIHx8IFtdO1xuICAgIFxuICAgIGxldCBpbmRleCA9IHRhc2tzU3RvcmFnZS5maW5kSW5kZXgodGFzayA9PiB0YXNrLnRleHQgPT09IG9sZFRhc2sudGV4dCAmJiB0YXNrLmRhdGUgPT09IG9sZFRhc2suZGF0ZSk7XG5cbiAgICBpZiAobmV3VGFzayA9PT0gbnVsbCB8fCBuZXdUYXNrLnRleHQudHJpbSgpID09PSBcIlwiKSB7XG4gICAgICAgIG5ld1Rhc2sgPSBvbGRUYXNrO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRhc2tzU3RvcmFnZVtpbmRleF0gPSBuZXdUYXNrO1xuICAgIH1cblxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGN1cnJlbnRMaXN0ICsgXCJUYXNrc1wiLCBKU09OLnN0cmluZ2lmeSh0YXNrc1N0b3JhZ2UpKTtcblxuICAgIGFkZEFsbFRhc2tzKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVUYXNrKHRleHQsIGRhdGUpIHtcbiAgICBsZXQgY3VycmVudExpc3QgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImN1cnJlbnRMaXN0XCIpO1xuXG4gICAgaWYgKGN1cnJlbnRMaXN0ID09PSBcIlRvZGF5XCIgfHwgY3VycmVudExpc3QgPT09IFwiVGhpcyBNb250aFwiKSB7XG4gICAgICAgIGxldCB0YXNrc1N0b3JhZ2UgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiSW5ib3hUYXNrc1wiKSkgfHwgW107XG4gICAgICAgIHRhc2tzU3RvcmFnZSA9IHRhc2tzU3RvcmFnZS5maWx0ZXIodGFzayA9PiB0YXNrLnRleHQgIT09IHRleHQgfHwgdGFzay5kYXRlICE9PSBkYXRlKTtcblxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIkluYm94VGFza3NcIiwgSlNPTi5zdHJpbmdpZnkodGFza3NTdG9yYWdlKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgbGV0IHRhc2tzU3RvcmFnZSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oY3VycmVudExpc3QgKyBcIlRhc2tzXCIpKSB8fCBbXTtcbiAgICAgICAgdGFza3NTdG9yYWdlID0gdGFza3NTdG9yYWdlLmZpbHRlcih0YXNrID0+IHRhc2sudGV4dCAhPT0gdGV4dCB8fCB0YXNrLmRhdGUgIT09IGRhdGUpO1xuXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGN1cnJlbnRMaXN0ICsgXCJUYXNrc1wiLCBKU09OLnN0cmluZ2lmeSh0YXNrc1N0b3JhZ2UpKTtcbiAgICB9XG5cbiAgICBhZGRBbGxUYXNrcygpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbW9kYWwoKSB7XG4gICAgY29uc3QgbW9kYWxDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1vZGFsQ29udGFpbmVyLmlkID0gXCJtb2RhbENvbnRhaW5lclwiO1xuXG4gICAgY29uc3QgbW9kYWxIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1vZGFsSGVhZGVyLmlkID0gXCJtb2RhbEhlYWRlclwiO1xuXG4gICAgY29uc3QgYWN0aW9uTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGFjdGlvbk5hbWUuaWQgPSBcImFjdGlvbk5hbWVcIjtcbiAgICBhY3Rpb25OYW1lLnRleHRDb250ZW50ID0gXCJBZGQgdGFza1wiO1xuXG4gICAgY29uc3QgY2xvc2VCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNsb3NlQnRuLmlkID0gXCJjbG9zZU1vZGFsXCI7XG4gICAgY2xvc2VCdG4uaW5uZXJIVE1MID0gXCImdGltZXM7XCI7XG5cbiAgICBjb25zdCBtb2RhbENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1vZGFsQ29udGVudC5pZCA9IFwibW9kYWxDb250ZW50XCI7XG5cbiAgICBjb25zdCBtb2RhbElucHV0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtb2RhbElucHV0Q29udGFpbmVyLmlkID0gXCJtb2RhbElucHV0Q29udGFpbmVyXCI7XG5cbiAgICBjb25zdCB0ZXh0TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgdGV4dExhYmVsLmlkID0gXCJ0ZXh0TGFiZWxcIjtcbiAgICB0ZXh0TGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwidGV4dElucHV0XCIpO1xuICAgIHRleHRMYWJlbC50ZXh0Q29udGVudCA9IFwiRW50ZXIgRGVzY3JpcHRpb25cIjtcblxuICAgIGNvbnN0IHRleHRJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICB0ZXh0SW5wdXQudHlwZSA9IFwidGV4dElucHV0XCI7XG4gICAgdGV4dElucHV0LmlkID0gXCJ0ZXh0SW5wdXRcIjtcblxuICAgIGNvbnN0IGRhdGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICBkYXRlTGFiZWwuaWQgPSBcImRhdGVMYWJlbFwiO1xuICAgIGRhdGVMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJkYXRlSW5wdXRcIik7XG4gICAgZGF0ZUxhYmVsLnRleHRDb250ZW50ID0gXCJTZWxlY3QgRGF0ZTogXCI7XG5cbiAgICBjb25zdCBkYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgZGF0ZUlucHV0LnR5cGUgPSBcImRhdGVcIjtcbiAgICBkYXRlSW5wdXQuaWQgPSBcImRhdGVJbnB1dFwiO1xuXG4gICAgY29uc3Qgc3VibWl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBzdWJtaXRCdG4uaWQgPSBcInN1Ym1pdEJ0blwiO1xuICAgIHN1Ym1pdEJ0bi50ZXh0Q29udGVudCA9IFwiU3VibWl0XCI7XG5cbiAgICBjbG9zZUJ0bi5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIG1vZGFsQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgdGV4dElucHV0LnZhbHVlID0gXCJcIjtcbiAgICAgICAgZGF0ZUlucHV0LnZhbHVlID0gXCJcIjtcbiAgICAgICAgZGF0ZUxhYmVsLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgIGRhdGVJbnB1dC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgIH1cbiAgICBcbiAgICB3aW5kb3cub25jbGljayA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgIGlmIChldmVudC50YXJnZXQgPT0gbW9kYWxDb250YWluZXIpIHtcbiAgICAgICAgICAgIG1vZGFsQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgIHRleHRJbnB1dC52YWx1ZSA9IFwiXCI7XG4gICAgICAgICAgICBkYXRlSW5wdXQudmFsdWUgPSBcIlwiO1xuICAgICAgICAgICAgZGF0ZUxhYmVsLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7ICAgIFxuICAgICAgICAgICAgZGF0ZUlucHV0LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBtb2RhbEhlYWRlci5hcHBlbmRDaGlsZChhY3Rpb25OYW1lKTtcbiAgICBtb2RhbEhlYWRlci5hcHBlbmRDaGlsZChjbG9zZUJ0bik7XG4gICAgbW9kYWxJbnB1dENvbnRhaW5lci5hcHBlbmRDaGlsZCh0ZXh0TGFiZWwpO1xuICAgIG1vZGFsSW5wdXRDb250YWluZXIuYXBwZW5kQ2hpbGQodGV4dElucHV0KTtcbiAgICBtb2RhbElucHV0Q29udGFpbmVyLmFwcGVuZENoaWxkKGRhdGVMYWJlbCk7XG4gICAgbW9kYWxJbnB1dENvbnRhaW5lci5hcHBlbmRDaGlsZChkYXRlSW5wdXQpO1xuICAgIG1vZGFsSW5wdXRDb250YWluZXIuYXBwZW5kQ2hpbGQoc3VibWl0QnRuKTtcbiAgICBtb2RhbENvbnRlbnQuYXBwZW5kQ2hpbGQobW9kYWxIZWFkZXIpO1xuICAgIG1vZGFsQ29udGVudC5hcHBlbmRDaGlsZChtb2RhbElucHV0Q29udGFpbmVyKTtcbiAgICBtb2RhbENvbnRhaW5lci5hcHBlbmRDaGlsZChtb2RhbENvbnRlbnQpO1xuXG4gICAgcmV0dXJuIG1vZGFsQ29udGFpbmVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3VibWl0RGVzYyh0eXBlKSB7XG4gICAgY29uc3QgbW9kYWxDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1vZGFsQ29udGFpbmVyXCIpO1xuICAgIGNvbnN0IHRleHRJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGV4dElucHV0XCIpLnZhbHVlO1xuICAgIGNvbnN0IGRhdGVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGF0ZUlucHV0XCIpLnZhbHVlO1xuICAgIFxuICAgIGxldCBzZWxlY3RlZERhdGUgPSBuZXcgRGF0ZShkYXRlSW5wdXQpO1xuICAgIGxldCBjdXJyZW50TGlzdCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY3VycmVudExpc3RcIik7XG4gICAgbGV0IHRhc2tzU3RvcmFnZSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oY3VycmVudExpc3QgKyBcIlRhc2tzXCIpKSB8fCBbXTtcbiAgICBsZXQgdGFza1ByZXNlbnQgPSB0YXNrc1N0b3JhZ2Uuc29tZSh0YXNrID0+IHRhc2sudGV4dCA9PT0gdGV4dElucHV0LnRyaW0oKSAmJiB0YXNrLmRhdGUgPT09IHNlbGVjdGVkRGF0ZS50b0pTT04oKS5zdWJzdHJpbmcoMCwgMTApKTtcblxuICAgIGlmICghdGV4dElucHV0IHx8ICFkYXRlSW5wdXQgJiYgdHlwZSAhPT0gXCJwcm9qZWN0XCIpIHtcbiAgICAgICAgYWxlcnQoXCJQbGVhc2UgZG8gbm90IGxlYXZlIGZpZWxkcyBibGFuay5cIik7XG4gICAgfSBlbHNlIGlmICh0YXNrUHJlc2VudCAmJiB0eXBlICE9PSBcInByb2plY3RcIikge1xuICAgICAgICBhbGVydChcIlBsZWFzZSBlbnRlciBhIHVuaXF1ZSBkZXNjcmlwdGlvbiBhbmQgZGF0ZS5cIik7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgbW9kYWxDb250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXG4gICAgICAgIGlmICh0eXBlID09PSBcImFkZFwiIHx8IHR5cGUgPT09IFwiZWRpdFwiKSB7XG4gICAgICAgICAgICByZXR1cm4gKHtcbiAgICAgICAgICAgICAgICB0ZXh0OiB0ZXh0SW5wdXQudHJpbSgpLFxuICAgICAgICAgICAgICAgIGRhdGU6IHNlbGVjdGVkRGF0ZS50b0pTT04oKS5zdWJzdHJpbmcoMCwgMTApXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlID09PSBcInByb2plY3RcIikge1xuICAgICAgICAgICAgcmV0dXJuIHRleHRJbnB1dDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZnVuY3Rpb24gdG9kYXlUYXNrcygpIHtcbiAgICBsZXQgaW5ib3hMaXN0ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIkluYm94VGFza3NcIikpIHx8IFtdO1xuICAgIGxldCB0b2RheURhdGUgPSBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkuc3Vic3RyaW5nKDAsIDEwKTtcbiAgICBsZXQgdG9kYXlUYXNrcyA9IGluYm94TGlzdC5maWx0ZXIodGFzayA9PiB0YXNrLmRhdGUgPT09IHRvZGF5RGF0ZSk7XG5cbiAgICByZXR1cm4gdG9kYXlUYXNrcztcbn1cblxuZnVuY3Rpb24gbW9udGhUYXNrcygpIHtcbiAgICBsZXQgaW5ib3hMaXN0ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIkluYm94VGFza3NcIikpIHx8IFtdO1xuICAgIGxldCBjdXJyZW50TW9udGhZZWFyID0gbmV3IERhdGUoKS50b0lTT1N0cmluZygpLnN1YnN0cmluZygwLCA3KTtcbiAgICBsZXQgdGhpc01vbnRoVGFza3MgPSBpbmJveExpc3QuZmlsdGVyKHRhc2sgPT4gdGFzay5kYXRlLnN0YXJ0c1dpdGgoY3VycmVudE1vbnRoWWVhcikpO1xuXG4gICAgcmV0dXJuIHRoaXNNb250aFRhc2tzO1xufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZXMuY3NzXCI7XG5pbXBvcnQgeyBtYWtlVUkgfSBmcm9tIFwiLi9tYWluVUlcIjtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIG1ha2VVSSk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9