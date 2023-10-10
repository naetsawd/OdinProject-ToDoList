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
    grid-template-columns: 22vw 78vw;
    grid-template-rows: 12vh 84vh 4vh;
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

/* Footer */
#footer {
    background-color: rgb(0, 0, 0);
    display: flex;
    align-items: center;
    justify-content: center;
    grid-column: span 2;
}

#footerText {
    color: white;
    font-size: 15px;
}

#githubIcon {
    display: block;
    width: 20px;
    height: 20px;
    margin-right: 2px;
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
}`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n    font-family: 'Roboto';\n    src: url('./fonts/Roboto-Regular.ttf') format('ttf'),\n        url('./fonts/Roboto-Regular.ttf') format('ttf');\n    font-weight: 600;\n    font-style: normal;\n  }\n\n* {\n    padding: 0px;\n    margin: 0px;\n}\n\nbody {\n    display: grid;\n    grid-template-columns: 22vw 78vw;\n    grid-template-rows: 12vh 84vh 4vh;\n    font-family: \"Roboto\", sans-serif;\n    font-weight: 500;\n}\n\n/* Header */\n#header {\n    position: relative;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: flex-start;\n    background-color: black;\n    grid-column: span 2;\n    z-index: 2;\n    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.25);\n}\n\n#headerLogo {\n    width: 80px;\n    height: 80px;\n}\n\n#headerTitle {\n    color: white;\n    font-size: 42px;\n    font-family: Arial, Helvetica, sans-serif;\n}\n\n/* Sidebar */\n#sidebar {\n    display: flex;\n    flex-direction: column;\n    background-color: darkslategray;\n    z-index: 1;\n    padding: 25px;\n    gap: 25px;\n    box-sizing: border-box;\n    overflow: auto;\n}\n\n.sidebarSection {\n    display: flex;\n    flex-direction: column;\n}\n\n.sectionTitle {\n    color: whitesmoke;\n    font-family: Arial, Helvetica, sans-serif;\n    font-size: 32px;\n    font-weight: bold;\n}\n\n.sectionItem {\n    display: flex;\n    align-items: center;\n    color: whitesmoke;\n    font-family: Arial, Helvetica, sans-serif;\n    font-size: 18px;\n    text-indent: 10px;\n    height: 40px;\n    transition: all .2s ease-out;\n    overflow: hidden;\n}\n\n.sectionItem:hover {\n    background-color: rgba(0, 0, 0, 0.20);\n    border-radius: 10px;\n    cursor: pointer;\n    transition: all .2s ease-out;\n}\n\n/* Content General */\n#content {\n    display: flex;\n    flex-direction: column;\n    background-color: whitesmoke;\n    z-index: 1;\n}\n\n#titleContainer {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    align-self: center;\n    width: 65vw;\n    height: 50px;\n    margin: 25px;\n    margin-bottom: 10px;\n}\n\n#removeProjectBtn {\n    width: 50px;\n    height: 50px;\n    margin-right: 10px;\n    transition: all .2s ease-out;\n}\n\n#removeProjectBtn:hover {\n    transform: scale(1.1);\n    cursor: pointer;\n    transform-origin: 50% 50%;\n    transition: all .2s ease-out;\n}\n\n#listTitle {\n    font-size: 36px;\n    font-family: Arial, Helvetica, sans-serif;\n    font-weight: bold;\n    overflow: hidden;\n}\n\n#addTaskBtn {\n    display: block;\n    width: 50px;\n    height: 50px;\n    margin-left: auto;\n    transition: all .2s ease-out;\n}\n\n#addTaskBtn:hover {\n    transform: scale(1.1);\n    cursor: pointer;\n    transform-origin: 50% 50%;\n    transition: all .2s ease-out;\n}\n\n#line {\n    align-self: center;\n    background: black;\n    width: 70vw;\n    height: 4px;\n    border-radius: 50px;\n}\n\n#allTasksContainer {\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    flex-wrap: wrap;\n    margin: 25px 50px 25px 50px;\n    gap: 15px;\n    overflow: auto;\n}\n\n#addTaskMsg{\n    font-size: 25px;\n    color: darkgray;\n}\n\n.taskContainer {\n    display: grid;\n    grid-template-columns: 88% 1fr 1fr;\n    grid-template-rows: 50% 50%;\n    align-items: flex-start;\n    justify-content: center;\n    text-align: center;\n    background-color: black;\n    color: white;\n    border-radius: 10px;\n    width: 700px;\n    overflow: hidden;\n}\n\n.dateContainer {\n    display: flex;\n    align-self: flex-start;\n    grid-column: span 3;\n    margin-bottom: 0px;\n    background-color: darkslategray;\n}\n\n.taskDate {\n    margin: 5px;\n    margin-left: 10px;\n}\n\n.taskDesc {\n    display: inline-block;\n    text-align: left;\n    min-height: 22.5px;\n    max-height: 75px;\n    resize: vertical;\n    overflow-y: auto;\n    overflow-x: hidden;\n    word-wrap: break-word;\n    margin: 10px 10px 10px 10px;\n}\n\n.taskBtns {\n    display: flex;\n    align-self: center;\n    width: 30px;\n    height: 30px;\n    filter: invert(100%);\n    transition: all .2s ease-out;\n}\n\n.taskBtns:hover {\n    transform: scale(1.1);\n    cursor: pointer;\n    transform-origin: 50% 50%;\n    transition: all .2s ease-out;\n}\n\n/* Footer */\n#footer {\n    background-color: rgb(0, 0, 0);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    grid-column: span 2;\n}\n\n#footerText {\n    color: white;\n    font-size: 15px;\n}\n\n#githubIcon {\n    display: block;\n    width: 20px;\n    height: 20px;\n    margin-right: 2px;\n}\n\n/* Modal */\n#modalContainer {\n    display: none;\n    position: fixed;\n    z-index: 3;\n    padding-top: 100px;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    background-color: rgb(0,0,0);\n    background-color: rgba(0,0,0,0.4);\n}\n\n#modalContent {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    background-color: whitesmoke;\n    margin: auto;\n    border: 1px solid #888;\n    width: 30%;\n    border-radius: 10px;\n    overflow: hidden;\n}\n\n#modalHeader {\n    display: flex;\n    width: 100%;\n    height: 100%;\n    align-items: center;\n    justify-content: flex-start;\n    background-color: darkslategray;\n    font-size: 30px;\n    color: white;\n}\n\n#actionName {\n    margin-left: 10px;\n    font-size: 20px;\n}\n\n#closeModal {\n    margin-right: 10px;\n    cursor: pointer;\n    margin-left: auto;\n    font-size: 30px;\n}\n\n#modalInputContainer {\n    display: grid;\n    grid-template-columns: 1fr;\n    padding: 20px;\n}\n\n#textLabel, #dateLabel {\n\n}\n\n#textInput, #dateInput {\n    margin-bottom: 10px;\n    border: 1px solid silver;\n    border-radius: 10px;\n}\n\n#textInput[type=text], #dateInput[type=date] {\n    padding: 5px;\n  }\n\n#submitBtn {\n    display: flex;\n    justify-self: flex-end;\n    width: 50px;\n    background-color: darkslategray;\n    color: white;\n    border-radius: 10px;\n    border: 1px solid #787878;\n    padding: 5px;\n    width: auto;\n    transition: all .2s ease-out;\n}\n\n#submitBtn:hover {\n    transform: scale(1.025);\n    cursor: pointer;\n    transform-origin: 50% 50%;\n    transition: all .2s ease-out;\n}"],"sourceRoot":""}]);
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
/* harmony import */ var _images_githubLogo_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/githubLogo.svg */ "./src/images/githubLogo.svg");
/* harmony import */ var _tasks_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tasks.js */ "./src/tasks.js");
/* harmony import */ var _modal_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modal.js */ "./src/modal.js");







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
    makeFooter();
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
            let projectTitle = (0,_modal_js__WEBPACK_IMPORTED_MODULE_5__.submitDesc)("project");
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
            let taskDesc = (0,_modal_js__WEBPACK_IMPORTED_MODULE_5__.submitDesc)("add");
            let tasksStorage = JSON.parse(localStorage.getItem(currentList + "Tasks")) || [];
            
            if (taskDesc) {
                tasksStorage.push(taskDesc);
                localStorage.setItem(currentList + "Tasks", JSON.stringify(tasksStorage));
    
                (0,_tasks_js__WEBPACK_IMPORTED_MODULE_4__.addAllTasks)();
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
    content.appendChild((0,_modal_js__WEBPACK_IMPORTED_MODULE_5__.modal)());

    (0,_tasks_js__WEBPACK_IMPORTED_MODULE_4__.addAllTasks)();
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

function makeFooter() {
    const footer = document.getElementById("footer");
    footer.id = "footer";

    const footerText = document.createElement("p");
    footerText.id = "footerText";
    footerText.textContent = "Designed & Built by Dechsit Naetsawan";

    const link = document.createElement("a");
    link.href = "https://github.com/naetsawd/OdinProject-ToDoList";
    link.target = "_blank";

    const icon = document.createElement("img");
    icon.id = ("githubIcon");
    icon.src = (_images_githubLogo_svg__WEBPACK_IMPORTED_MODULE_3__);

    link.appendChild(icon);

    footer.appendChild(link);
    footer.appendChild(footerText);

    return footer;
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

/***/ "./src/images/githubLogo.svg":
/*!***********************************!*\
  !*** ./src/images/githubLogo.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d4577cfbb9306cfe891b.svg";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLGlJQUE2QztBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0EsZUFBZSxtQ0FBbUM7QUFDbEQsY0FBYyxtQ0FBbUM7QUFDakQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLGlGQUFpRixZQUFZLE1BQU0sT0FBTyxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sVUFBVSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sVUFBVSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLFlBQVksTUFBTSxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLFVBQVUsS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFL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QUNBLE1BQU07QUFDTjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN2S0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7OztBQ0FzQjtBQUNZOztBQUVsQyw4Q0FBOEMsMkNBQU0sRSIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW5wcm9qZWN0LXRvZG9saXN0Ly4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vb2RpbnByb2plY3QtdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL29kaW5wcm9qZWN0LXRvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9vZGlucHJvamVjdC10b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL29kaW5wcm9qZWN0LXRvZG9saXN0Ly4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly9vZGlucHJvamVjdC10b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9vZGlucHJvamVjdC10b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vb2RpbnByb2plY3QtdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vb2RpbnByb2plY3QtdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vb2RpbnByb2plY3QtdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9vZGlucHJvamVjdC10b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL29kaW5wcm9qZWN0LXRvZG9saXN0Ly4vc3JjL21haW5VSS5qcyIsIndlYnBhY2s6Ly9vZGlucHJvamVjdC10b2RvbGlzdC8uL3NyYy9tb2RhbC5qcyIsIndlYnBhY2s6Ly9vZGlucHJvamVjdC10b2RvbGlzdC8uL3NyYy90YXNrcy5qcyIsIndlYnBhY2s6Ly9vZGlucHJvamVjdC10b2RvbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGlucHJvamVjdC10b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9vZGlucHJvamVjdC10b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2RpbnByb2plY3QtdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9vZGlucHJvamVjdC10b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW5wcm9qZWN0LXRvZG9saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2RpbnByb2plY3QtdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vb2RpbnByb2plY3QtdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vb2RpbnByb2plY3QtdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL29kaW5wcm9qZWN0LXRvZG9saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ZvbnRzL1JvYm90by1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xuICAgIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pIGZvcm1hdCgndHRmJyksXG4gICAgICAgIHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KSBmb3JtYXQoJ3R0ZicpO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICB9XG5cbioge1xuICAgIHBhZGRpbmc6IDBweDtcbiAgICBtYXJnaW46IDBweDtcbn1cblxuYm9keSB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIydncgNzh2dztcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDEydmggODR2aCA0dmg7XG4gICAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLyogSGVhZGVyICovXG4jaGVhZGVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgIGdyaWQtY29sdW1uOiBzcGFuIDI7XG4gICAgei1pbmRleDogMjtcbiAgICBib3gtc2hhZG93OiAwcHggOHB4IDE2cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG59XG5cbiNoZWFkZXJMb2dvIHtcbiAgICB3aWR0aDogODBweDtcbiAgICBoZWlnaHQ6IDgwcHg7XG59XG5cbiNoZWFkZXJUaXRsZSB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogNDJweDtcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbn1cblxuLyogU2lkZWJhciAqL1xuI3NpZGViYXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrc2xhdGVncmF5O1xuICAgIHotaW5kZXg6IDE7XG4gICAgcGFkZGluZzogMjVweDtcbiAgICBnYXA6IDI1cHg7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBvdmVyZmxvdzogYXV0bztcbn1cblxuLnNpZGViYXJTZWN0aW9uIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5zZWN0aW9uVGl0bGUge1xuICAgIGNvbG9yOiB3aGl0ZXNtb2tlO1xuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMzJweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnNlY3Rpb25JdGVtIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgY29sb3I6IHdoaXRlc21va2U7XG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIHRleHQtaW5kZW50OiAxMHB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2Utb3V0O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5zZWN0aW9uSXRlbTpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIwKTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2Utb3V0O1xufVxuXG4vKiBDb250ZW50IEdlbmVyYWwgKi9cbiNjb250ZW50IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcbiAgICB6LWluZGV4OiAxO1xufVxuXG4jdGl0bGVDb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICB3aWR0aDogNjV2dztcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgbWFyZ2luOiAyNXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbiNyZW1vdmVQcm9qZWN0QnRuIHtcbiAgICB3aWR0aDogNTBweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgIHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZS1vdXQ7XG59XG5cbiNyZW1vdmVQcm9qZWN0QnRuOmhvdmVyIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IDUwJSA1MCU7XG4gICAgdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlLW91dDtcbn1cblxuI2xpc3RUaXRsZSB7XG4gICAgZm9udC1zaXplOiAzNnB4O1xuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbiNhZGRUYXNrQnRuIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogNTBweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlLW91dDtcbn1cblxuI2FkZFRhc2tCdG46aG92ZXIge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDUwJTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2Utb3V0O1xufVxuXG4jbGluZSB7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgIGJhY2tncm91bmQ6IGJsYWNrO1xuICAgIHdpZHRoOiA3MHZ3O1xuICAgIGhlaWdodDogNHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG59XG5cbiNhbGxUYXNrc0NvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBtYXJnaW46IDI1cHggNTBweCAyNXB4IDUwcHg7XG4gICAgZ2FwOiAxNXB4O1xuICAgIG92ZXJmbG93OiBhdXRvO1xufVxuXG4jYWRkVGFza01zZ3tcbiAgICBmb250LXNpemU6IDI1cHg7XG4gICAgY29sb3I6IGRhcmtncmF5O1xufVxuXG4udGFza0NvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDg4JSAxZnIgMWZyO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogNTAlIDUwJTtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgd2lkdGg6IDcwMHB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5kYXRlQ29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XG4gICAgZ3JpZC1jb2x1bW46IHNwYW4gMztcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGFya3NsYXRlZ3JheTtcbn1cblxuLnRhc2tEYXRlIHtcbiAgICBtYXJnaW46IDVweDtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbn1cblxuLnRhc2tEZXNjIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBtaW4taGVpZ2h0OiAyMi41cHg7XG4gICAgbWF4LWhlaWdodDogNzVweDtcbiAgICByZXNpemU6IHZlcnRpY2FsO1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgICBtYXJnaW46IDEwcHggMTBweCAxMHB4IDEwcHg7XG59XG5cbi50YXNrQnRucyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgd2lkdGg6IDMwcHg7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIGZpbHRlcjogaW52ZXJ0KDEwMCUpO1xuICAgIHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZS1vdXQ7XG59XG5cbi50YXNrQnRuczpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgNTAlO1xuICAgIHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZS1vdXQ7XG59XG5cbi8qIEZvb3RlciAqL1xuI2Zvb3RlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDApO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBncmlkLWNvbHVtbjogc3BhbiAyO1xufVxuXG4jZm9vdGVyVGV4dCB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbn1cblxuI2dpdGh1Ykljb24ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIGhlaWdodDogMjBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDJweDtcbn1cblxuLyogTW9kYWwgKi9cbiNtb2RhbENvbnRhaW5lciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgei1pbmRleDogMztcbiAgICBwYWRkaW5nLXRvcDogMTAwcHg7XG4gICAgbGVmdDogMDtcbiAgICB0b3A6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLDAsMCk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjQpO1xufVxuXG4jbW9kYWxDb250ZW50IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjODg4O1xuICAgIHdpZHRoOiAzMCU7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4jbW9kYWxIZWFkZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtzbGF0ZWdyYXk7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuI2FjdGlvbk5hbWUge1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuI2Nsb3NlTW9kYWwge1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgZm9udC1zaXplOiAzMHB4O1xufVxuXG4jbW9kYWxJbnB1dENvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICBwYWRkaW5nOiAyMHB4O1xufVxuXG4jdGV4dExhYmVsLCAjZGF0ZUxhYmVsIHtcblxufVxuXG4jdGV4dElucHV0LCAjZGF0ZUlucHV0IHtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHNpbHZlcjtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4jdGV4dElucHV0W3R5cGU9dGV4dF0sICNkYXRlSW5wdXRbdHlwZT1kYXRlXSB7XG4gICAgcGFkZGluZzogNXB4O1xuICB9XG5cbiNzdWJtaXRCdG4ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1zZWxmOiBmbGV4LWVuZDtcbiAgICB3aWR0aDogNTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrc2xhdGVncmF5O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICM3ODc4Nzg7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZS1vdXQ7XG59XG5cbiNzdWJtaXRCdG46aG92ZXIge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMjUpO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgNTAlO1xuICAgIHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZS1vdXQ7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHFCQUFxQjtJQUNyQjs2REFDbUQ7SUFDbkQsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtFQUNwQjs7QUFFRjtJQUNJLFlBQVk7SUFDWixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZ0NBQWdDO0lBQ2hDLGlDQUFpQztJQUNqQyxpQ0FBaUM7SUFDakMsZ0JBQWdCO0FBQ3BCOztBQUVBLFdBQVc7QUFDWDtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQiwyQkFBMkI7SUFDM0IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixVQUFVO0lBQ1YsZ0RBQWdEO0FBQ3BEOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osZUFBZTtJQUNmLHlDQUF5QztBQUM3Qzs7QUFFQSxZQUFZO0FBQ1o7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLCtCQUErQjtJQUMvQixVQUFVO0lBQ1YsYUFBYTtJQUNiLFNBQVM7SUFDVCxzQkFBc0I7SUFDdEIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIseUNBQXlDO0lBQ3pDLGVBQWU7SUFDZixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQix5Q0FBeUM7SUFDekMsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osNEJBQTRCO0lBQzVCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHFDQUFxQztJQUNyQyxtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLDRCQUE0QjtBQUNoQzs7QUFFQSxvQkFBb0I7QUFDcEI7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLDRCQUE0QjtJQUM1QixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7SUFDWixZQUFZO0lBQ1osbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZix5QkFBeUI7SUFDekIsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksZUFBZTtJQUNmLHlDQUF5QztJQUN6QyxpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksY0FBYztJQUNkLFdBQVc7SUFDWCxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YseUJBQXlCO0lBQ3pCLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsV0FBVztJQUNYLFdBQVc7SUFDWCxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixlQUFlO0lBQ2YsMkJBQTJCO0lBQzNCLFNBQVM7SUFDVCxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isa0NBQWtDO0lBQ2xDLDJCQUEyQjtJQUMzQix1QkFBdUI7SUFDdkIsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQix1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLCtCQUErQjtBQUNuQzs7QUFFQTtJQUNJLFdBQVc7SUFDWCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7SUFDWixvQkFBb0I7SUFDcEIsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZix5QkFBeUI7SUFDekIsNEJBQTRCO0FBQ2hDOztBQUVBLFdBQVc7QUFDWDtJQUNJLDhCQUE4QjtJQUM5QixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxXQUFXO0lBQ1gsWUFBWTtJQUNaLGlCQUFpQjtBQUNyQjs7QUFFQSxVQUFVO0FBQ1Y7SUFDSSxhQUFhO0lBQ2IsZUFBZTtJQUNmLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsT0FBTztJQUNQLE1BQU07SUFDTixXQUFXO0lBQ1gsWUFBWTtJQUNaLDRCQUE0QjtJQUM1QixpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQiw0QkFBNEI7SUFDNUIsWUFBWTtJQUNaLHNCQUFzQjtJQUN0QixVQUFVO0lBQ1YsbUJBQW1CO0lBQ25CLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixXQUFXO0lBQ1gsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQiwyQkFBMkI7SUFDM0IsK0JBQStCO0lBQy9CLGVBQWU7SUFDZixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtJQUNiLDBCQUEwQjtJQUMxQixhQUFhO0FBQ2pCOztBQUVBOztBQUVBOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLHdCQUF3QjtJQUN4QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxZQUFZO0VBQ2Q7O0FBRUY7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCwrQkFBK0I7SUFDL0IsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsWUFBWTtJQUNaLFdBQVc7SUFDWCw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsZUFBZTtJQUNmLHlCQUF5QjtJQUN6Qiw0QkFBNEI7QUFDaENcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcXG4gICAgc3JjOiB1cmwoJy4vZm9udHMvUm9ib3RvLVJlZ3VsYXIudHRmJykgZm9ybWF0KCd0dGYnKSxcXG4gICAgICAgIHVybCgnLi9mb250cy9Sb2JvdG8tUmVndWxhci50dGYnKSBmb3JtYXQoJ3R0ZicpO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICB9XFxuXFxuKiB7XFxuICAgIHBhZGRpbmc6IDBweDtcXG4gICAgbWFyZ2luOiAwcHg7XFxufVxcblxcbmJvZHkge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIydncgNzh2dztcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMnZoIDg0dmggNHZoO1xcbiAgICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCIsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcblxcbi8qIEhlYWRlciAqL1xcbiNoZWFkZXIge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIGdyaWQtY29sdW1uOiBzcGFuIDI7XFxuICAgIHotaW5kZXg6IDI7XFxuICAgIGJveC1zaGFkb3c6IDBweCA4cHggMTZweCAwcHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcXG59XFxuXFxuI2hlYWRlckxvZ28ge1xcbiAgICB3aWR0aDogODBweDtcXG4gICAgaGVpZ2h0OiA4MHB4O1xcbn1cXG5cXG4jaGVhZGVyVGl0bGUge1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogNDJweDtcXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxufVxcblxcbi8qIFNpZGViYXIgKi9cXG4jc2lkZWJhciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtzbGF0ZWdyYXk7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIHBhZGRpbmc6IDI1cHg7XFxuICAgIGdhcDogMjVweDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxufVxcblxcbi5zaWRlYmFyU2VjdGlvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5zZWN0aW9uVGl0bGUge1xcbiAgICBjb2xvcjogd2hpdGVzbW9rZTtcXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMzJweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5zZWN0aW9uSXRlbSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICB0ZXh0LWluZGVudDogMTBweDtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2Utb3V0O1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4uc2VjdGlvbkl0ZW06aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMjApO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZS1vdXQ7XFxufVxcblxcbi8qIENvbnRlbnQgR2VuZXJhbCAqL1xcbiNjb250ZW50IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcXG4gICAgei1pbmRleDogMTtcXG59XFxuXFxuI3RpdGxlQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICB3aWR0aDogNjV2dztcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICBtYXJnaW46IDI1cHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcblxcbiNyZW1vdmVQcm9qZWN0QnRuIHtcXG4gICAgd2lkdGg6IDUwcHg7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2Utb3V0O1xcbn1cXG5cXG4jcmVtb3ZlUHJvamVjdEJ0bjpob3ZlciB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgNTAlO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2Utb3V0O1xcbn1cXG5cXG4jbGlzdFRpdGxlIHtcXG4gICAgZm9udC1zaXplOiAzNnB4O1xcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbiNhZGRUYXNrQnRuIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiA1MHB4O1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2Utb3V0O1xcbn1cXG5cXG4jYWRkVGFza0J0bjpob3ZlciB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgNTAlO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2Utb3V0O1xcbn1cXG5cXG4jbGluZSB7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZDogYmxhY2s7XFxuICAgIHdpZHRoOiA3MHZ3O1xcbiAgICBoZWlnaHQ6IDRweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcXG59XFxuXFxuI2FsbFRhc2tzQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgbWFyZ2luOiAyNXB4IDUwcHggMjVweCA1MHB4O1xcbiAgICBnYXA6IDE1cHg7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG4jYWRkVGFza01zZ3tcXG4gICAgZm9udC1zaXplOiAyNXB4O1xcbiAgICBjb2xvcjogZGFya2dyYXk7XFxufVxcblxcbi50YXNrQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA4OCUgMWZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA1MCUgNTAlO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgd2lkdGg6IDcwMHB4O1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4uZGF0ZUNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxuICAgIGdyaWQtY29sdW1uOiBzcGFuIDM7XFxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGFya3NsYXRlZ3JheTtcXG59XFxuXFxuLnRhc2tEYXRlIHtcXG4gICAgbWFyZ2luOiA1cHg7XFxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbn1cXG5cXG4udGFza0Rlc2Mge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIG1pbi1oZWlnaHQ6IDIyLjVweDtcXG4gICAgbWF4LWhlaWdodDogNzVweDtcXG4gICAgcmVzaXplOiB2ZXJ0aWNhbDtcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XFxuICAgIG1hcmdpbjogMTBweCAxMHB4IDEwcHggMTBweDtcXG59XFxuXFxuLnRhc2tCdG5zIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICB3aWR0aDogMzBweDtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICBmaWx0ZXI6IGludmVydCgxMDAlKTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlLW91dDtcXG59XFxuXFxuLnRhc2tCdG5zOmhvdmVyIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRyYW5zZm9ybS1vcmlnaW46IDUwJSA1MCU7XFxuICAgIHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZS1vdXQ7XFxufVxcblxcbi8qIEZvb3RlciAqL1xcbiNmb290ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBncmlkLWNvbHVtbjogc3BhbiAyO1xcbn1cXG5cXG4jZm9vdGVyVGV4dCB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcbn1cXG5cXG4jZ2l0aHViSWNvbiB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB3aWR0aDogMjBweDtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDJweDtcXG59XFxuXFxuLyogTW9kYWwgKi9cXG4jbW9kYWxDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHotaW5kZXg6IDM7XFxuICAgIHBhZGRpbmctdG9wOiAxMDBweDtcXG4gICAgbGVmdDogMDtcXG4gICAgdG9wOiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwwLDApO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNCk7XFxufVxcblxcbiNtb2RhbENvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM4ODg7XFxuICAgIHdpZHRoOiAzMCU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbiNtb2RhbEhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGFya3NsYXRlZ3JheTtcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbiNhY3Rpb25OYW1lIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuXFxuI2Nsb3NlTW9kYWwge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG59XFxuXFxuI21vZGFsSW5wdXRDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gICAgcGFkZGluZzogMjBweDtcXG59XFxuXFxuI3RleHRMYWJlbCwgI2RhdGVMYWJlbCB7XFxuXFxufVxcblxcbiN0ZXh0SW5wdXQsICNkYXRlSW5wdXQge1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBzaWx2ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbiN0ZXh0SW5wdXRbdHlwZT10ZXh0XSwgI2RhdGVJbnB1dFt0eXBlPWRhdGVdIHtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgfVxcblxcbiNzdWJtaXRCdG4ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LXNlbGY6IGZsZXgtZW5kO1xcbiAgICB3aWR0aDogNTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGFya3NsYXRlZ3JheTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNzg3ODc4O1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIHdpZHRoOiBhdXRvO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2Utb3V0O1xcbn1cXG5cXG4jc3VibWl0QnRuOmhvdmVyIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAyNSk7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDUwJTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlLW91dDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBsb2dvIGZyb20gXCIuL2ltYWdlcy9sb2dvLnN2Z1wiO1xuaW1wb3J0IGFkZEljb24gZnJvbSBcIi4vaW1hZ2VzL3BsdXMucG5nXCI7XG5pbXBvcnQgbWludXNJY29uIGZyb20gXCIuL2ltYWdlcy9taW51cy5wbmdcIjtcbmltcG9ydCBnaXRodWJMb2dvIGZyb20gXCIuL2ltYWdlcy9naXRodWJMb2dvLnN2Z1wiO1xuaW1wb3J0IHthZGRBbGxUYXNrc30gZnJvbSBcIi4vdGFza3MuanNcIjtcbmltcG9ydCB7bW9kYWwsIHN1Ym1pdERlc2N9IGZyb20gXCIuL21vZGFsLmpzXCI7XG5cbmxldCBwcm9qZWN0T2JqZWN0cyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdE9iamVjdHNcIik7XG5wcm9qZWN0T2JqZWN0cyA9IEpTT04ucGFyc2UocHJvamVjdE9iamVjdHMpIHx8IFtdO1xuXG5jb25zdCBwbGFubmVyT2JqZWN0cyA9IFtcbiAgICB7IHRpdGxlOiBcIkluYm94XCIgfSxcbiAgICB7IHRpdGxlOiBcIlRvZGF5XCIgfSxcbiAgICB7IHRpdGxlOiBcIlRoaXMgTW9udGhcIn0sXG5dO1xuXG5jb25zdCBzZWN0aW9uTGlzdHMgPSBbXG4gICAgeyB0aXRsZTogXCJQbGFubmVyXCIsIGxpc3Q6IHBsYW5uZXJPYmplY3RzIH0sXG4gICAgeyB0aXRsZTogXCJQcm9qZWN0c1wiLCBsaXN0OiBwcm9qZWN0T2JqZWN0c31cbl1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VVSSgpIHtcbiAgICBpZiAoIWxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY3VycmVudExpc3RcIikpIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJjdXJyZW50TGlzdFwiLCBcIkluYm94XCIpO1xuICAgIH1cblxuICAgIG1ha2VIZWFkZXIoKTtcbiAgICBtYWtlU2lkZWJhcigpO1xuICAgIG1ha2VDb250ZW50KCk7XG4gICAgbWFrZUZvb3RlcigpO1xufVxuXG5mdW5jdGlvbiBtYWtlSGVhZGVyKCkge1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaGVhZGVyXCIpO1xuXG4gICAgY29uc3QgaGVhZGVyTG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgaGVhZGVyTG9nby5pZCA9IFwiaGVhZGVyTG9nb1wiO1xuICAgIGhlYWRlckxvZ28uc3JjID0gbG9nbztcblxuICAgIGNvbnN0IGhlYWRlclRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIilcbiAgICBoZWFkZXJUaXRsZS5pZCA9IFwiaGVhZGVyVGl0bGVcIjtcbiAgICBoZWFkZXJUaXRsZS50ZXh0Q29udGVudCA9IFwiVW5vcmdhbml6ZWRcIjtcblxuICAgIGhlYWRlci5hcHBlbmRDaGlsZChoZWFkZXJMb2dvKTtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoaGVhZGVyVGl0bGUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWFrZVNpZGViYXIoKSB7XG4gICAgY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2lkZWJhclwiKTtcbiAgICBzaWRlYmFyLmlubmVySFRNTCA9IFwiXCI7XG5cbiAgICBzZWN0aW9uTGlzdHMuZm9yRWFjaCgoe3RpdGxlLCBsaXN0fSkgPT4ge1xuICAgICAgICBzaWRlYmFyLmFwcGVuZENoaWxkKG1ha2VTaWRlYmFyU2VjdGlvbih0aXRsZSwgbGlzdCkpO1xuICAgIH0pXG59XG5cbmZ1bmN0aW9uIG1ha2VTaWRlYmFyU2VjdGlvbih0aXRsZSwgbGlzdCkge1xuICAgIGNvbnN0IHNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHNlY3Rpb24uY2xhc3NMaXN0LmFkZChcInNpZGViYXJTZWN0aW9uXCIpXG5cbiAgICBjb25zdCBzZWN0aW9uVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKVxuICAgIHNlY3Rpb25UaXRsZS5jbGFzc0xpc3QuYWRkKFwic2VjdGlvblRpdGxlXCIpXG4gICAgc2VjdGlvblRpdGxlLnRleHRDb250ZW50ID0gdGl0bGU7XG5cbiAgICBjb25zdCBhZGRQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIilcbiAgICBhZGRQcm9qZWN0LmNsYXNzTGlzdC5hZGQoXCJzZWN0aW9uSXRlbVwiKVxuICAgIGFkZFByb2plY3QudGV4dENvbnRlbnQgPSBcIisgQWRkIFByb2plY3RcIjtcblxuICAgIGFkZFByb2plY3Qub25jbGljayA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zdCBtb2RhbENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW9kYWxDb250YWluZXJcIik7XG4gICAgICAgIG1vZGFsQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG5cbiAgICAgICAgY29uc3QgYWN0aW9uTmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWN0aW9uTmFtZVwiKTtcbiAgICAgICAgYWN0aW9uTmFtZS50ZXh0Q29udGVudCA9IFwiQWRkIFByb2plY3RcIlxuXG4gICAgICAgIGNvbnN0IHRleHRMYWJlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGV4dExhYmVsXCIpO1xuICAgICAgICB0ZXh0TGFiZWwudGV4dENvbnRlbnQgPSBcIkVudGVyIFByb2plY3QgTmFtZTogXCI7XG5cbiAgICAgICAgY29uc3QgdGV4dElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0ZXh0SW5wdXRcIik7XG4gICAgICAgIHRleHRJbnB1dC52YWx1ZSA9IFwiXCI7XG4gICAgICAgIHRleHRJbnB1dC5tYXhMZW5ndGggPSAzNTtcblxuICAgICAgICBjb25zdCBkYXRlTGFiZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRhdGVMYWJlbFwiKTtcbiAgICAgICAgZGF0ZUxhYmVsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblxuICAgICAgICBjb25zdCBkYXRlSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRhdGVJbnB1dFwiKTtcbiAgICAgICAgZGF0ZUlucHV0LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblxuICAgICAgICBjb25zdCBzdWJtaXRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN1Ym1pdEJ0blwiKTtcblxuICAgICAgICBzdWJtaXRCdG4ub25jbGljayA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgbGV0IHByb2plY3RUaXRsZSA9IHN1Ym1pdERlc2MoXCJwcm9qZWN0XCIpO1xuICAgICAgICAgICAgbGV0IHByb2plY3RQcmVzZW50ID0gcHJvamVjdE9iamVjdHMuc29tZShwcm9qZWN0ID0+IHByb2plY3QudGl0bGUudHJpbSgpID09PSBwcm9qZWN0VGl0bGUudHJpbSgpKTtcblxuICAgICAgICAgICAgaWYgKCFwcm9qZWN0VGl0bGUpIHtcbiAgICAgICAgICAgICAgICBhbGVydChcIlBsZWFzZSBlbnRlciBhIHByb2plY3QgbmFtZTogXCIpO1xuICAgICAgICAgICAgICAgIG1vZGFsQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgICAgICB9IGVsc2UgaWYocHJvamVjdFByZXNlbnQpIHtcbiAgICAgICAgICAgICAgICBhbGVydChcIlBsZWFzZSBlbnRlciBhIHVuaXF1ZSBwcm9qZWN0IG5hbWVcIik7XG4gICAgICAgICAgICAgICAgbW9kYWxDb250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocHJvamVjdFRpdGxlICYmICFwcm9qZWN0UHJlc2VudCkge1xuICAgICAgICAgICAgICAgIHByb2plY3RPYmplY3RzLnB1c2goeyB0aXRsZTogcHJvamVjdFRpdGxlIH0pO1xuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJvamVjdE9iamVjdHNcIiwgSlNPTi5zdHJpbmdpZnkocHJvamVjdE9iamVjdHMpKTtcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImN1cnJlbnRMaXN0XCIscHJvamVjdFRpdGxlKTtcblxuICAgICAgICAgICAgICAgIG1ha2VTaWRlYmFyKCk7XG4gICAgICAgICAgICAgICAgbWFrZUNvbnRlbnQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBzZWN0aW9uLmFwcGVuZENoaWxkKHNlY3Rpb25UaXRsZSk7XG5cbiAgICBpZiAodGl0bGUgPT0gXCJQcm9qZWN0c1wiKSB7c2VjdGlvbi5hcHBlbmRDaGlsZChhZGRQcm9qZWN0KX07XG5cbiAgICBsaXN0LmZvckVhY2goKHt0aXRsZX0pID0+IHtcbiAgICAgICAgY29uc3Qgc2VjdGlvbkl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKVxuICAgICAgICBzZWN0aW9uSXRlbS5jbGFzc0xpc3QuYWRkKFwic2VjdGlvbkl0ZW1cIilcbiAgICAgICAgc2VjdGlvbkl0ZW0udGV4dENvbnRlbnQgPSB0aXRsZTtcblxuICAgICAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjdXJyZW50TGlzdFwiKSA9PT0gdGl0bGUpIHtcbiAgICAgICAgICAgIHNlY3Rpb25JdGVtLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmdiYSgwLCAwLCAwLCAwLjIwKVwiO1xuICAgICAgICAgICAgc2VjdGlvbkl0ZW0uc3R5bGUuYm9yZGVyUmFkaXVzID0gXCIxMHB4XCI7XG4gICAgICAgIH07XG5cbiAgICAgICAgc2VjdGlvbkl0ZW0ub25jbGljayA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJjdXJyZW50TGlzdFwiLHRpdGxlKTtcblxuICAgICAgICAgICAgbWFrZVNpZGViYXIoKTtcbiAgICAgICAgICAgIG1ha2VDb250ZW50KCk7XG4gICAgICAgIH1cblxuICAgICAgICBzZWN0aW9uLmFwcGVuZENoaWxkKHNlY3Rpb25JdGVtKTtcbiAgICB9KVxuXG4gICAgcmV0dXJuIHNlY3Rpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtYWtlQ29udGVudCgpIHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpXG4gICAgY29udGVudC5pbm5lckhUTUwgPSBcIlwiO1xuXG4gICAgY29uc3QgdGl0bGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRpdGxlQ29udGFpbmVyLmlkID0gXCJ0aXRsZUNvbnRhaW5lclwiO1xuXG4gICAgY29uc3QgcmVtb3ZlUHJvamVjdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgcmVtb3ZlUHJvamVjdEJ0bi5pZCA9IFwicmVtb3ZlUHJvamVjdEJ0blwiO1xuICAgIHJlbW92ZVByb2plY3RCdG4uc3JjID0gbWludXNJY29uO1xuICAgIHJlbW92ZVByb2plY3RCdG4ub25jbGljayA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zdCBjb25maXJtUmVtb3ZlID0gd2luZG93LmNvbmZpcm0oXCJBcmUgeW91IHN1cmUgd2FudCB0byByZW1vdmUgXCIgKyBsaXN0VGl0bGUudGV4dENvbnRlbnQgKyBcIj9cIik7XG5cbiAgICAgICAgaWYgKGNvbmZpcm1SZW1vdmUpIHtcbiAgICAgICAgICAgIHJlbW92ZVByb2plY3QobGlzdFRpdGxlLnRleHRDb250ZW50KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGxpc3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGxpc3RUaXRsZS5pZCA9IFwibGlzdFRpdGxlXCI7XG4gICAgbGlzdFRpdGxlLnRleHRDb250ZW50ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjdXJyZW50TGlzdFwiKTtcblxuICAgIGNvbnN0IGFkZFRhc2tCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIGFkZFRhc2tCdG4uaWQgPSBcImFkZFRhc2tCdG5cIjtcbiAgICBhZGRUYXNrQnRuLnNyYyA9IGFkZEljb247XG4gICAgXG4gICAgYWRkVGFza0J0bi5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnN0IG1vZGFsQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtb2RhbENvbnRhaW5lclwiKTtcbiAgICAgICAgbW9kYWxDb250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcblxuICAgICAgICBjb25zdCBhY3Rpb25OYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhY3Rpb25OYW1lXCIpO1xuICAgICAgICBhY3Rpb25OYW1lLnRleHRDb250ZW50ID0gXCJBZGQgVGFza1wiXG5cbiAgICAgICAgY29uc3QgdGV4dExhYmVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0ZXh0TGFiZWxcIik7XG4gICAgICAgIHRleHRMYWJlbC50ZXh0Q29udGVudCA9IFwiRW50ZXIgRGVzY3JpcHRpb246IFwiO1xuXG4gICAgICAgIGNvbnN0IHRleHRJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGV4dElucHV0XCIpO1xuICAgICAgICB0ZXh0SW5wdXQudmFsdWUgPSBcIlwiO1xuICAgICAgICB0ZXh0SW5wdXQubWF4TGVuZ3RoID0gMjAwO1xuXG4gICAgICAgIGNvbnN0IGRhdGVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGF0ZUlucHV0XCIpO1xuICAgICAgICBkYXRlSW5wdXQudmFsdWUgPSBcIlwiO1xuXG4gICAgICAgIGNvbnN0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3VibWl0QnRuXCIpO1xuICAgICAgICBzdWJtaXRCdG4ub25jbGljayA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgbGV0IGN1cnJlbnRMaXN0ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjdXJyZW50TGlzdFwiKTtcbiAgICAgICAgICAgIGxldCB0YXNrRGVzYyA9IHN1Ym1pdERlc2MoXCJhZGRcIik7XG4gICAgICAgICAgICBsZXQgdGFza3NTdG9yYWdlID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShjdXJyZW50TGlzdCArIFwiVGFza3NcIikpIHx8IFtdO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAodGFza0Rlc2MpIHtcbiAgICAgICAgICAgICAgICB0YXNrc1N0b3JhZ2UucHVzaCh0YXNrRGVzYyk7XG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oY3VycmVudExpc3QgKyBcIlRhc2tzXCIsIEpTT04uc3RyaW5naWZ5KHRhc2tzU3RvcmFnZSkpO1xuICAgIFxuICAgICAgICAgICAgICAgIGFkZEFsbFRhc2tzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBsaW5lLmlkID0gXCJsaW5lXCI7XG5cbiAgICBjb25zdCBhbGxUYXNrc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYWxsVGFza3NDb250YWluZXIuaWQgPSBcImFsbFRhc2tzQ29udGFpbmVyXCI7XG5cbiAgICB0aXRsZUNvbnRhaW5lci5hcHBlbmRDaGlsZChyZW1vdmVQcm9qZWN0QnRuKTtcbiAgICB0aXRsZUNvbnRhaW5lci5hcHBlbmRDaGlsZChsaXN0VGl0bGUpO1xuICAgIHRpdGxlQ29udGFpbmVyLmFwcGVuZENoaWxkKGFkZFRhc2tCdG4pO1xuXG4gICAgaWYgKGxpc3RUaXRsZS50ZXh0Q29udGVudCA9PT0gXCJUb2RheVwiIHx8IGxpc3RUaXRsZS50ZXh0Q29udGVudCA9PT0gXCJUaGlzIE1vbnRoXCIpIHtcbiAgICAgICAgYWRkVGFza0J0bi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgYWRkVGFza0J0bi5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgIH1cblxuICAgIGlmIChsaXN0VGl0bGUudGV4dENvbnRlbnQgPT09IFwiSW5ib3hcIiB8fCBsaXN0VGl0bGUudGV4dENvbnRlbnQgPT09IFwiVG9kYXlcIiB8fCBsaXN0VGl0bGUudGV4dENvbnRlbnQgPT09IFwiVGhpcyBNb250aFwiKSB7XG4gICAgICAgIHJlbW92ZVByb2plY3RCdG4uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJlbW92ZVByb2plY3RCdG4uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICB9XG4gICAgXG4gICAgY29udGVudC5hcHBlbmRDaGlsZCh0aXRsZUNvbnRhaW5lcik7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChsaW5lKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGFsbFRhc2tzQ29udGFpbmVyKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKG1vZGFsKCkpO1xuXG4gICAgYWRkQWxsVGFza3MoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVByb2plY3QocHJvamVjdE5hbWUpIHtcbiAgICBsZXQgY3VycmVudExpc3QgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImN1cnJlbnRMaXN0XCIpO1xuICAgIFxuICAgIGNvbnN0IHByb2plY3RJbmRleCA9IHByb2plY3RPYmplY3RzLmZpbmRJbmRleChwcm9qZWN0ID0+IHByb2plY3QudGl0bGUudHJpbSgpID09PSBwcm9qZWN0TmFtZS50cmltKCkpO1xuXG4gICAgaWYgKHByb2plY3RJbmRleCAhPT0gLTEpIHtcbiAgICAgICAgcHJvamVjdE9iamVjdHMuc3BsaWNlKHByb2plY3RJbmRleCwgMSk7XG5cbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oY3VycmVudExpc3QgKyBcIlRhc2tzXCIpO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3RPYmplY3RzXCIsIEpTT04uc3RyaW5naWZ5KHByb2plY3RPYmplY3RzKSk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY3VycmVudExpc3RcIiwgXCJJbmJveFwiKTtcblxuICAgICAgICBtYWtlU2lkZWJhcigpO1xuICAgICAgICBtYWtlQ29udGVudCgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gbWFrZUZvb3RlcigpIHtcbiAgICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvb3RlclwiKTtcbiAgICBmb290ZXIuaWQgPSBcImZvb3RlclwiO1xuXG4gICAgY29uc3QgZm9vdGVyVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGZvb3RlclRleHQuaWQgPSBcImZvb3RlclRleHRcIjtcbiAgICBmb290ZXJUZXh0LnRleHRDb250ZW50ID0gXCJEZXNpZ25lZCAmIEJ1aWx0IGJ5IERlY2hzaXQgTmFldHNhd2FuXCI7XG5cbiAgICBjb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgbGluay5ocmVmID0gXCJodHRwczovL2dpdGh1Yi5jb20vbmFldHNhd2QvT2RpblByb2plY3QtVG9Eb0xpc3RcIjtcbiAgICBsaW5rLnRhcmdldCA9IFwiX2JsYW5rXCI7XG5cbiAgICBjb25zdCBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBpY29uLmlkID0gKFwiZ2l0aHViSWNvblwiKTtcbiAgICBpY29uLnNyYyA9IChnaXRodWJMb2dvKTtcblxuICAgIGxpbmsuYXBwZW5kQ2hpbGQoaWNvbik7XG5cbiAgICBmb290ZXIuYXBwZW5kQ2hpbGQobGluayk7XG4gICAgZm9vdGVyLmFwcGVuZENoaWxkKGZvb3RlclRleHQpO1xuXG4gICAgcmV0dXJuIGZvb3Rlcjtcbn0iLCJleHBvcnQgZnVuY3Rpb24gbW9kYWwoKSB7XG4gICAgY29uc3QgbW9kYWxDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1vZGFsQ29udGFpbmVyLmlkID0gXCJtb2RhbENvbnRhaW5lclwiO1xuXG4gICAgY29uc3QgbW9kYWxIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1vZGFsSGVhZGVyLmlkID0gXCJtb2RhbEhlYWRlclwiO1xuXG4gICAgY29uc3QgYWN0aW9uTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGFjdGlvbk5hbWUuaWQgPSBcImFjdGlvbk5hbWVcIjtcbiAgICBhY3Rpb25OYW1lLnRleHRDb250ZW50ID0gXCJBZGQgdGFza1wiO1xuXG4gICAgY29uc3QgY2xvc2VCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNsb3NlQnRuLmlkID0gXCJjbG9zZU1vZGFsXCI7XG4gICAgY2xvc2VCdG4uaW5uZXJIVE1MID0gXCImdGltZXM7XCI7XG5cbiAgICBjb25zdCBtb2RhbENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1vZGFsQ29udGVudC5pZCA9IFwibW9kYWxDb250ZW50XCI7XG5cbiAgICBjb25zdCBtb2RhbElucHV0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtb2RhbElucHV0Q29udGFpbmVyLmlkID0gXCJtb2RhbElucHV0Q29udGFpbmVyXCI7XG5cbiAgICBjb25zdCB0ZXh0TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgdGV4dExhYmVsLmlkID0gXCJ0ZXh0TGFiZWxcIjtcbiAgICB0ZXh0TGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwidGV4dElucHV0XCIpO1xuICAgIHRleHRMYWJlbC50ZXh0Q29udGVudCA9IFwiRW50ZXIgRGVzY3JpcHRpb25cIjtcblxuICAgIGNvbnN0IHRleHRJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICB0ZXh0SW5wdXQudHlwZSA9IFwidGV4dFwiO1xuICAgIHRleHRJbnB1dC5pZCA9IFwidGV4dElucHV0XCI7XG5cbiAgICBjb25zdCBkYXRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgZGF0ZUxhYmVsLmlkID0gXCJkYXRlTGFiZWxcIjtcbiAgICBkYXRlTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwiZGF0ZUlucHV0XCIpO1xuICAgIGRhdGVMYWJlbC50ZXh0Q29udGVudCA9IFwiU2VsZWN0IERhdGU6IFwiO1xuXG4gICAgY29uc3QgZGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGRhdGVJbnB1dC50eXBlID0gXCJkYXRlXCI7XG4gICAgZGF0ZUlucHV0LmlkID0gXCJkYXRlSW5wdXRcIjtcblxuICAgIGNvbnN0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgc3VibWl0QnRuLmlkID0gXCJzdWJtaXRCdG5cIjtcbiAgICBzdWJtaXRCdG4udGV4dENvbnRlbnQgPSBcIlN1Ym1pdFwiO1xuXG4gICAgY2xvc2VCdG4ub25jbGljayA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBtb2RhbENvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIHRleHRJbnB1dC52YWx1ZSA9IFwiXCI7XG4gICAgICAgIGRhdGVJbnB1dC52YWx1ZSA9IFwiXCI7XG4gICAgICAgIGRhdGVMYWJlbC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgICBkYXRlSW5wdXQuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICB9XG4gICAgXG4gICAgd2luZG93Lm9uY2xpY2sgPSBmdW5jdGlvbihldmVudCkge1xuICAgICAgICBpZiAoZXZlbnQudGFyZ2V0ID09IG1vZGFsQ29udGFpbmVyKSB7XG4gICAgICAgICAgICBtb2RhbENvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgICB0ZXh0SW5wdXQudmFsdWUgPSBcIlwiO1xuICAgICAgICAgICAgZGF0ZUlucHV0LnZhbHVlID0gXCJcIjtcbiAgICAgICAgICAgIGRhdGVMYWJlbC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiOyAgICBcbiAgICAgICAgICAgIGRhdGVJbnB1dC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbW9kYWxIZWFkZXIuYXBwZW5kQ2hpbGQoYWN0aW9uTmFtZSk7XG4gICAgbW9kYWxIZWFkZXIuYXBwZW5kQ2hpbGQoY2xvc2VCdG4pO1xuICAgIG1vZGFsSW5wdXRDb250YWluZXIuYXBwZW5kQ2hpbGQodGV4dExhYmVsKTtcbiAgICBtb2RhbElucHV0Q29udGFpbmVyLmFwcGVuZENoaWxkKHRleHRJbnB1dCk7XG4gICAgbW9kYWxJbnB1dENvbnRhaW5lci5hcHBlbmRDaGlsZChkYXRlTGFiZWwpO1xuICAgIG1vZGFsSW5wdXRDb250YWluZXIuYXBwZW5kQ2hpbGQoZGF0ZUlucHV0KTtcbiAgICBtb2RhbElucHV0Q29udGFpbmVyLmFwcGVuZENoaWxkKHN1Ym1pdEJ0bik7XG4gICAgbW9kYWxDb250ZW50LmFwcGVuZENoaWxkKG1vZGFsSGVhZGVyKTtcbiAgICBtb2RhbENvbnRlbnQuYXBwZW5kQ2hpbGQobW9kYWxJbnB1dENvbnRhaW5lcik7XG4gICAgbW9kYWxDb250YWluZXIuYXBwZW5kQ2hpbGQobW9kYWxDb250ZW50KTtcblxuICAgIHJldHVybiBtb2RhbENvbnRhaW5lcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1Ym1pdERlc2ModHlwZSkge1xuICAgIGNvbnN0IG1vZGFsQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtb2RhbENvbnRhaW5lclwiKTtcbiAgICBjb25zdCB0ZXh0SW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRleHRJbnB1dFwiKS52YWx1ZTtcbiAgICBjb25zdCBkYXRlSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRhdGVJbnB1dFwiKS52YWx1ZTtcbiAgICBcbiAgICBsZXQgc2VsZWN0ZWREYXRlID0gbmV3IERhdGUoZGF0ZUlucHV0KTtcbiAgICBsZXQgY3VycmVudExpc3QgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImN1cnJlbnRMaXN0XCIpO1xuICAgIGxldCB0YXNrc1N0b3JhZ2UgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGN1cnJlbnRMaXN0ICsgXCJUYXNrc1wiKSkgfHwgW107XG4gICAgbGV0IHRhc2tQcmVzZW50ID0gdGFza3NTdG9yYWdlLnNvbWUodGFzayA9PiB0YXNrLnRleHQgPT09IHRleHRJbnB1dC50cmltKCkgJiYgdGFzay5kYXRlID09PSBzZWxlY3RlZERhdGUudG9KU09OKCkuc3Vic3RyaW5nKDAsIDEwKSk7XG5cbiAgICBpZiAoIXRleHRJbnB1dCB8fCAhZGF0ZUlucHV0ICYmIHR5cGUgIT09IFwicHJvamVjdFwiKSB7XG4gICAgICAgIGFsZXJ0KFwiUGxlYXNlIGRvIG5vdCBsZWF2ZSBmaWVsZHMgYmxhbmsuXCIpO1xuICAgIH0gZWxzZSBpZiAodGFza1ByZXNlbnQgJiYgdHlwZSAhPT0gXCJwcm9qZWN0XCIpIHtcbiAgICAgICAgYWxlcnQoXCJQbGVhc2UgZW50ZXIgYSB1bmlxdWUgZGVzY3JpcHRpb24gYW5kIGRhdGUuXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIG1vZGFsQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblxuICAgICAgICBpZiAodHlwZSA9PT0gXCJhZGRcIiB8fCB0eXBlID09PSBcImVkaXRcIikge1xuICAgICAgICAgICAgcmV0dXJuICh7XG4gICAgICAgICAgICAgICAgdGV4dDogdGV4dElucHV0LnRyaW0oKSxcbiAgICAgICAgICAgICAgICBkYXRlOiBzZWxlY3RlZERhdGUudG9KU09OKCkuc3Vic3RyaW5nKDAsIDEwKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJwcm9qZWN0XCIpIHtcbiAgICAgICAgICAgIHJldHVybiB0ZXh0SW5wdXQ7XG4gICAgICAgIH1cbiAgICB9XG59IiwiaW1wb3J0IHBlbkljb24gZnJvbSBcIi4vaW1hZ2VzL3BlbmNpbC5wbmdcIlxuaW1wb3J0IG1pbnVzSWNvbiBmcm9tIFwiLi9pbWFnZXMvbWludXMucG5nXCI7XG5pbXBvcnQge21vZGFsLCBzdWJtaXREZXNjfSBmcm9tIFwiLi9tb2RhbC5qc1wiO1xuXG5mdW5jdGlvbiBtYWtlVGFzayh0YXNrKSB7XG4gICAgY29uc3QgdGFza0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGFza0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidGFza0NvbnRhaW5lclwiKTtcbiAgICBcbiAgICBjb25zdCB0YXNrRGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHRhc2tEZXNjLmNsYXNzTGlzdC5hZGQoXCJ0YXNrRGVzY1wiKTtcbiAgICB0YXNrRGVzYy50ZXh0Q29udGVudCA9IHRhc2sudGV4dDtcblxuICAgIGNvbnN0IGVkaXRUYXNrQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBlZGl0VGFza0J0bi5jbGFzc0xpc3QuYWRkKFwidGFza0J0bnNcIik7XG4gICAgZWRpdFRhc2tCdG4uc3JjID0gcGVuSWNvbjtcblxuICAgIGVkaXRUYXNrQnRuLm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc3QgbW9kYWxDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1vZGFsQ29udGFpbmVyXCIpO1xuICAgICAgICBtb2RhbENvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuXG4gICAgICAgIGNvbnN0IGFjdGlvbk5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFjdGlvbk5hbWVcIik7XG4gICAgICAgIGFjdGlvbk5hbWUudGV4dENvbnRlbnQgPSBcIkVkaXQgVGFza1wiXG5cbiAgICAgICAgY29uc3QgdGV4dExhYmVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0ZXh0TGFiZWxcIik7XG4gICAgICAgIHRleHRMYWJlbC50ZXh0Q29udGVudCA9IFwiRW50ZXIgTmV3IERlc2NyaXB0aW9uOiBcIjtcblxuICAgICAgICBjb25zdCB0ZXh0SW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRleHRJbnB1dFwiKTtcbiAgICAgICAgdGV4dElucHV0LnZhbHVlID0gdGFzay50ZXh0O1xuICAgICAgICB0ZXh0SW5wdXQubWF4TGVuZ3RoID0gNTAwO1xuXG4gICAgICAgIGNvbnN0IGRhdGVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGF0ZUlucHV0XCIpO1xuICAgICAgICBkYXRlSW5wdXQudmFsdWUgPSB0YXNrLmRhdGU7XG5cbiAgICAgICAgY29uc3Qgc3VibWl0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdWJtaXRCdG5cIik7XG4gICAgICAgIHN1Ym1pdEJ0bi5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBsZXQgY3VycmVudExpc3QgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImN1cnJlbnRMaXN0XCIpO1xuICAgICAgICAgICAgbGV0IG5ld1Rhc2sgPSBzdWJtaXREZXNjKFwiZWRpdFwiKTtcblxuICAgICAgICAgICAgaWYgKG5ld1Rhc2spIHtcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudExpc3QgPT09IFwiVG9kYXlcIiB8fCBjdXJyZW50TGlzdCA9PT0gXCJUaGlzIE1vbnRoXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgc2F2ZU5ld1Rhc2tEZXNjKHRhc2ssIG5ld1Rhc2ssIGN1cnJlbnRMaXN0KVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHNhdmVOZXdUYXNrRGVzYyh0YXNrLCBuZXdUYXNrLCBjdXJyZW50TGlzdCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgcmVtb3ZlVGFza0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgcmVtb3ZlVGFza0J0bi5jbGFzc0xpc3QuYWRkKFwidGFza0J0bnNcIik7XG4gICAgcmVtb3ZlVGFza0J0bi5zcmMgPSBtaW51c0ljb247XG5cbiAgICByZW1vdmVUYXNrQnRuLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJlbW92ZVRhc2sodGFzay50ZXh0LCB0YXNrLmRhdGUpO1xuICAgIH1cblxuICAgIGNvbnN0IGRhdGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRhdGVDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImRhdGVDb250YWluZXJcIik7XG5cbiAgICBjb25zdCBkYXRlUGFydHMgPSB0YXNrLmRhdGUuc3BsaXQoXCItXCIpO1xuICAgIGNvbnN0IGR1ZURhdGUgPSBuZXcgRGF0ZShkYXRlUGFydHNbMF0sIGRhdGVQYXJ0c1sxXSAtIDEsIGRhdGVQYXJ0c1syXSk7XG4gICAgY29uc3Qgb3B0aW9ucyA9IHsgZGF5OiAnbnVtZXJpYycsIG1vbnRoOiAnbG9uZycsIHllYXI6ICdudW1lcmljJyB9O1xuICAgIGNvbnN0IGZvcm1hdHRlZERhdGUgPSBkdWVEYXRlLnRvTG9jYWxlRGF0ZVN0cmluZygnZW4tVVMnLCBvcHRpb25zKTtcblxuICAgIGNvbnN0IHRhc2tEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgdGFza0RhdGUuY2xhc3NMaXN0LmFkZChcInRhc2tEYXRlXCIpO1xuICAgIHRhc2tEYXRlLnRleHRDb250ZW50ID0gZm9ybWF0dGVkRGF0ZTtcblxuICAgIGRhdGVDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza0RhdGUpO1xuICAgIHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQoZGF0ZUNvbnRhaW5lcik7XG4gICAgdGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrRGVzYyk7XG4gICAgdGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZChlZGl0VGFza0J0bik7XG4gICAgdGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZChyZW1vdmVUYXNrQnRuKTtcblxuICAgIHJldHVybiB0YXNrQ29udGFpbmVyO1xufVxuXG5mdW5jdGlvbiBnZXRTYXZlZFRhc2tzKCkge1xuICAgIGxldCBjdXJyZW50TGlzdCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY3VycmVudExpc3RcIik7XG4gICAgbGV0IHRhc2tzU3RvcmFnZSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oY3VycmVudExpc3QgKyBcIlRhc2tzXCIpKSB8fCBbXTtcblxuICAgIGlmICh0YXNrc1N0b3JhZ2UubGVuZ3RoID4gMSAmJiB0YXNrc1N0b3JhZ2UuZXZlcnkodGFzayA9PiB0YXNrLmRhdGUpKSB7XG4gICAgICAgIHRhc2tzU3RvcmFnZS5zb3J0KChhLCBiKSA9PiBuZXcgRGF0ZShhLmRhdGUpIC0gbmV3IERhdGUoYi5kYXRlKSk7XG4gICAgfVxuXG4gICAgY29uc3QgdGFza0VsZW1lbnRzID0gW107XG5cbiAgICB0YXNrc1N0b3JhZ2UuZm9yRWFjaCh0YXNrID0+IHtcbiAgICAgICAgY29uc3QgdGFza0VsZW1lbnQgPSBtYWtlVGFzayh0YXNrKTtcbiAgICAgICAgdGFza0VsZW1lbnRzLnB1c2godGFza0VsZW1lbnQpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRhc2tFbGVtZW50cztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZEFsbFRhc2tzKCkge1xuICAgIGNvbnN0IGFsbFRhc2tzQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhbGxUYXNrc0NvbnRhaW5lclwiKTtcbiAgICBhbGxUYXNrc0NvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xuXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJUb2RheVRhc2tzXCIsIEpTT04uc3RyaW5naWZ5KHRvZGF5VGFza3MoKSkpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiVGhpcyBNb250aFRhc2tzXCIsIEpTT04uc3RyaW5naWZ5KG1vbnRoVGFza3MoKSkpO1xuXG4gICAgaWYgKGdldFNhdmVkVGFza3MoKS5sZW5ndGggIT09IDApIHtcbiAgICAgICAgZ2V0U2F2ZWRUYXNrcygpLmZvckVhY2godGFzayA9PiB7XG4gICAgICAgICAgICBhbGxUYXNrc0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrKTtcbiAgICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgYWRkVGFza01zZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpXG4gICAgICAgIGFkZFRhc2tNc2cuaWQgPSBcImFkZFRhc2tNc2dcIlxuICAgICAgICBhZGRUYXNrTXNnLnRleHRDb250ZW50ID0gXCJBZGQgYSB0YXNrIHRvIGdldCBzdGFydGVkIVwiO1xuXG4gICAgICAgIGFsbFRhc2tzQ29udGFpbmVyLmFwcGVuZENoaWxkKGFkZFRhc2tNc2cpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gc2F2ZU5ld1Rhc2tEZXNjKG9sZFRhc2ssIG5ld1Rhc2ssIGN1cnJlbnRMaXN0KSB7XG4gICAgaWYgKGN1cnJlbnRMaXN0ID09PSBcIlRvZGF5XCIgfHwgY3VycmVudExpc3QgPT09IFwiVGhpcyBNb250aFwiKSB7XG4gICAgICAgIGN1cnJlbnRMaXN0ID0gXCJJbmJveFwiXG4gICAgfVxuXG4gICAgbGV0IHRhc2tzU3RvcmFnZSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oY3VycmVudExpc3QgKyBcIlRhc2tzXCIpKSB8fCBbXTtcbiAgICBcbiAgICBsZXQgaW5kZXggPSB0YXNrc1N0b3JhZ2UuZmluZEluZGV4KHRhc2sgPT4gdGFzay50ZXh0ID09PSBvbGRUYXNrLnRleHQgJiYgdGFzay5kYXRlID09PSBvbGRUYXNrLmRhdGUpO1xuXG4gICAgaWYgKG5ld1Rhc2sgPT09IG51bGwgfHwgbmV3VGFzay50ZXh0LnRyaW0oKSA9PT0gXCJcIikge1xuICAgICAgICBuZXdUYXNrID0gb2xkVGFzaztcbiAgICB9IGVsc2Uge1xuICAgICAgICB0YXNrc1N0b3JhZ2VbaW5kZXhdID0gbmV3VGFzaztcbiAgICB9XG5cbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShjdXJyZW50TGlzdCArIFwiVGFza3NcIiwgSlNPTi5zdHJpbmdpZnkodGFza3NTdG9yYWdlKSk7XG5cbiAgICBhZGRBbGxUYXNrcygpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlVGFzayh0ZXh0LCBkYXRlKSB7XG4gICAgbGV0IGN1cnJlbnRMaXN0ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjdXJyZW50TGlzdFwiKTtcblxuICAgIGlmIChjdXJyZW50TGlzdCA9PT0gXCJUb2RheVwiIHx8IGN1cnJlbnRMaXN0ID09PSBcIlRoaXMgTW9udGhcIikge1xuICAgICAgICBsZXQgdGFza3NTdG9yYWdlID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIkluYm94VGFza3NcIikpIHx8IFtdO1xuICAgICAgICB0YXNrc1N0b3JhZ2UgPSB0YXNrc1N0b3JhZ2UuZmlsdGVyKHRhc2sgPT4gdGFzay50ZXh0ICE9PSB0ZXh0IHx8IHRhc2suZGF0ZSAhPT0gZGF0ZSk7XG5cbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJJbmJveFRhc2tzXCIsIEpTT04uc3RyaW5naWZ5KHRhc2tzU3RvcmFnZSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGxldCB0YXNrc1N0b3JhZ2UgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGN1cnJlbnRMaXN0ICsgXCJUYXNrc1wiKSkgfHwgW107XG4gICAgICAgIHRhc2tzU3RvcmFnZSA9IHRhc2tzU3RvcmFnZS5maWx0ZXIodGFzayA9PiB0YXNrLnRleHQgIT09IHRleHQgfHwgdGFzay5kYXRlICE9PSBkYXRlKTtcblxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShjdXJyZW50TGlzdCArIFwiVGFza3NcIiwgSlNPTi5zdHJpbmdpZnkodGFza3NTdG9yYWdlKSk7XG4gICAgfVxuXG4gICAgYWRkQWxsVGFza3MoKTtcbn1cblxuZnVuY3Rpb24gdG9kYXlUYXNrcygpIHtcbiAgICBsZXQgaW5ib3hMaXN0ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIkluYm94VGFza3NcIikpIHx8IFtdO1xuICAgIGxldCB0b2RheURhdGUgPSBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkuc3Vic3RyaW5nKDAsIDEwKTtcbiAgICBsZXQgdG9kYXlUYXNrcyA9IGluYm94TGlzdC5maWx0ZXIodGFzayA9PiB0YXNrLmRhdGUgPT09IHRvZGF5RGF0ZSk7XG5cbiAgICByZXR1cm4gdG9kYXlUYXNrcztcbn1cblxuZnVuY3Rpb24gbW9udGhUYXNrcygpIHtcbiAgICBsZXQgaW5ib3hMaXN0ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIkluYm94VGFza3NcIikpIHx8IFtdO1xuICAgIGxldCBjdXJyZW50TW9udGhZZWFyID0gbmV3IERhdGUoKS50b0lTT1N0cmluZygpLnN1YnN0cmluZygwLCA3KTtcbiAgICBsZXQgdGhpc01vbnRoVGFza3MgPSBpbmJveExpc3QuZmlsdGVyKHRhc2sgPT4gdGFzay5kYXRlLnN0YXJ0c1dpdGgoY3VycmVudE1vbnRoWWVhcikpO1xuXG4gICAgcmV0dXJuIHRoaXNNb250aFRhc2tzO1xufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZXMuY3NzXCI7XG5pbXBvcnQgeyBtYWtlVUkgfSBmcm9tIFwiLi9tYWluVUlcIjtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIG1ha2VVSSk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9