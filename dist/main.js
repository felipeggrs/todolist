/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `/* Below is the reset https://andy-bell.co.uk/a-modern-css-reset/ */\n/* Box sizing rules */\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\n/* Remove default margin */\nbody,\nh1,\nh2,\nh3,\nh4,\np,\nfigure,\nblockquote,\ndl,\ndd {\n  margin: 0;\n}\n\n/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */\nul[role=\"list\"],\nol[role=\"list\"] {\n  list-style: none;\n}\n\n/* Set core root defaults */\nhtml:focus-within {\n  scroll-behavior: smooth;\n}\n\n/* Set core body defaults */\nbody {\n  min-height: 100vh;\n  text-rendering: optimizeSpeed;\n  line-height: 1.5;\n}\n\n/* A elements that don't have a class get default styles */\na:not([class]) {\n  text-decoration-skip-ink: auto;\n}\n\n/* Make images easier to work with */\nimg,\npicture {\n  max-width: 100%;\n  display: block;\n}\n\n/* Inherit fonts for inputs and buttons */\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n}\n\n/* Remove all animations, transitions and smooth scroll for people that prefer not to see them */\n@media (prefers-reduced-motion: reduce) {\n  html:focus-within {\n    scroll-behavior: auto;\n  }\n\n  *,\n  *::before,\n  *::after {\n    animation-duration: 0.01ms !important;\n    animation-iteration-count: 1 !important;\n    transition-duration: 0.01ms !important;\n    scroll-behavior: auto !important;\n  }\n}\n/* Above is the reset https://andy-bell.co.uk/a-modern-css-reset/ */\n\nbody {\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto,\n    Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n}\n\n#mainContainer {\n  display: grid;\n  width: 100%;\n  height: 100vh;\n  grid-template-columns: 1fr 5fr;\n  grid-template-rows: 1fr 9fr;\n}\n\n#headerContainer {\n  grid-column: 1 / 3;\n  background-color: #3498db;\n  color: #fff;\n  padding: 20px;\n  text-align: center;\n  border-bottom: 2px solid #2980b9;\n  font-size: 50px;\n\n  display: flex;\n  align-items: center;\n  justify-content: start;\n}\n\n#sideContainer {\n  grid-row: 2 / 3;\n  grid-column: 1 / 2;\n  background-color: #2c3e50;\n  color: #fff;\n  padding: 20px;\n  border-right: 2px solid #1f2c38;\n\n  display: flex;\n  flex-direction: column;\n  gap: 50px;\n  font-size: 20px;\n}\n\n.projectContainer {\n  display: flex;\n  flex-direction: column;\n\n  gap: 5px;\n}\n\n.project {\n  max-width: 200px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n#userForm,\n#submitButton {\n  width: 200px;\n}\n\n.sideItem,\n.project,\n#addProjectBtn {\n  transition: transform 0.2s;\n  transform-origin: left;\n}\n\n.sideItem:hover,\n.project:hover,\n#addProjectBtn:hover {\n  transform: scale(1.2);\n  color: #2980b9;\n}\n\n#contentContainer {\n  grid-row: 2 / 3;\n  grid-column: 2 / 3;\n  flex-grow: 1;\n  padding: 20px;\n  background-color: #ecf0f1;\n  border-left: 2px solid #d5d8dc;\n}\n\nli {\n  background-color: #fff;\n  border: 1px solid #d5d8dc;\n  border-radius: 5px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n  padding: 10px;\n  margin: 5px;\n  font-size: 15px;\n}\n\n#addItemBtn {\n  font-size: 15px;\n  display: inline-block;\n  padding: 5px 10px;\n  background-color: #3498db;\n  color: #fff;\n  border: none;\n  border-radius: 5px;\n  cursor: pointer;\n  margin: 5px;\n\n  grid-row: 2 / 3;\n  grid-column: 1 / -1;\n}\n\n#itemProperty {\n  margin: 5px 0px;\n  /* color: red; */\n}\n\nul {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  font-size: 30px;\n}\n\ntextarea {\n  resize: none;\n  width: 100%;\n  height: 100px;\n}\n\n.individualContainer {\n  display: flex;\n  justify-content: space-between;\n  background-color: #2980b9;\n  padding: 0px 10px;\n  border-radius: 4px;\n}\n\n.iconContainer {\n  display: flex;\n  align-items: center;\n}\n\nul[role=\"list\"] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n  grid-template-rows: 100px 1fr repeat(2, 400px);\n}\n\n#domListTitle {\n  grid-row: 1 / 2;\n  grid-column: 1 / -1;\n  display: flex;\n  justify-content: center;\n}\n\n.domItemTitleValue {\n  font-size: 25px;\n  align-self: center;\n  text-align: center;\n  overflow-x: auto;\n  white-space: nowrap;\n  width: 250px;\n  margin: 3px;\n}\n\n.todoCard {\n  display: flex;\n  flex-flow: column wrap;\n  width: 280px;\n}\n\n.itemDeleteBtn {\n  align-self: flex-end;\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://project-template/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://project-template/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://project-template/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://project-template/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://project-template/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://project-template/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://project-template/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://project-template/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://project-template/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://project-template/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/display.js":
/*!************************!*\
  !*** ./src/display.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   completedList: () => (/* binding */ completedList),\n/* harmony export */   displayTodoList: () => (/* binding */ displayTodoList)\n/* harmony export */ });\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _engine__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./engine */ \"./src/engine.js\");\n/* harmony import */ var _img_trash_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/trash.svg */ \"./src/img/trash.svg\");\n/* eslint-disable no-use-before-define */\n\n\n\n\n// module to handle DOM elements\n\nconst completedList = (0,_engine__WEBPACK_IMPORTED_MODULE_1__.createList)(\"completed\");\n\nfunction displayTodoList(todoList, defaultList) {\n  // display list title\n  const listTitle = todoList.title;\n  const domList = document.createElement(\"ul\");\n  domList.setAttribute(\"role\", \"list\"); // css reset custom property\n\n  // modify first char to uppercase to display as list title on the page\n  if (listTitle.length > 0) {\n    const upperListTitle =\n      listTitle.charAt(0).toUpperCase() + listTitle.slice(1);\n    const domListTitle = document.createElement(\"div\");\n    domListTitle.textContent = `${upperListTitle} List`;\n    domListTitle.id = \"domListTitle\";\n    domList.appendChild(domListTitle);\n    // domList.textContent = `${upperListTitle} List`;\n  }\n\n  const contentContainer = document.getElementById(\"contentContainer\");\n  contentContainer.innerHTML = \"\"; // so it doesn't show multiple lists\n  contentContainer.appendChild(domList);\n\n  // add todo item button\n  const addItemBtn = document.createElement(\"button\");\n  addItemBtn.id = \"addItemBtn\";\n  addItemBtn.textContent = \"Add New Item\";\n\n  if (todoList !== defaultList && todoList !== completedList) {\n    domList.appendChild(addItemBtn);\n  }\n\n  function addNewItemToDom(item) {\n    // Update the existing list with the new item\n    const domItem = document.createElement(\"li\");\n    domItem.setAttribute(\"class\", \"todoCard\");\n\n    // title\n    const domItemTitle = document.createElement(\"span\");\n    domItemTitle.id = \"itemProperty\";\n    // domItemTitle.textContent = \"Title: \";\n    const domItemTitleValue = document.createElement(\"span\");\n    domItemTitleValue.className = \"domItemTitleValue\";\n    domItemTitleValue.textContent = \"Task name\";\n    domItemTitleValue.contentEditable = true;\n    if (item.title !== \"-\") {\n      domItemTitleValue.textContent = item.title;\n    }\n\n    // description\n    const domItemDescription = document.createElement(\"span\");\n    domItemDescription.id = \"itemProperty\";\n    domItemDescription.textContent = \" Description: \";\n    const domItemDescriptionValue = document.createElement(\"textarea\");\n    domItemDescriptionValue.placeholder = \"Describe your task here\";\n    if (item.description !== \"-\") {\n      domItemDescriptionValue.textContent = item.description;\n    }\n\n    // date\n    const domItemDueDate = document.createElement(\"span\");\n    domItemDueDate.id = \"itemProperty\";\n    domItemDueDate.textContent = \" Due Date: \";\n\n    const domItemDueDateValue = document.createElement(\"input\");\n    domItemDueDateValue.type = \"date\";\n    // maintains the selected date displayed correctly after page changes\n    domItemDueDateValue.value = item.dueDate;\n\n    // priority\n    const domItemPriority = document.createElement(\"span\");\n    domItemPriority.id = \"itemProperty\";\n    domItemPriority.textContent = \" Priority: \";\n    const domItemPriorityValue = document.createElement(\"select\");\n    domItemPriorityValue.setAttribute(\"id\", \"mySelect\");\n    const options = [\"-\", \"Low\", \"Medium\", \"High\"];\n    options.forEach((option) => {\n      const optionTag = document.createElement(\"option\");\n      optionTag.value = option;\n      optionTag.text = option;\n      domItemPriorityValue.appendChild(optionTag);\n    });\n    // maintains the selected priority displayed correctly after page changes\n    const selectedPriority = options.indexOf(item.priority);\n    domItemPriorityValue.selectedIndex = selectedPriority;\n\n    // change BG color based on selected priority\n    // low / green\n    if (selectedPriority === 1) {\n      domItem.setAttribute(\"style\", \"background-color: rgb(192, 255, 192);\");\n    }\n    // medium / yellow\n    if (selectedPriority === 2) {\n      domItem.setAttribute(\"style\", \"background-color: rgb(255, 255, 192);\");\n    }\n    // high / red\n    if (selectedPriority === 3) {\n      domItem.setAttribute(\"style\", \"background-color: rgb(255, 192, 192);\");\n    }\n\n    // delete todoList button\n    const itemDeleteBtn = document.createElement(\"img\");\n    itemDeleteBtn.className = \"itemDeleteBtn\";\n    itemDeleteBtn.src = _img_trash_svg__WEBPACK_IMPORTED_MODULE_2__;\n    itemDeleteBtn.alt = \"Delete item\";\n    let itemIndex = todoList.items.indexOf(item);\n    let defaultIndex = defaultList.items.indexOf(item);\n\n    itemDeleteBtn.addEventListener(\"click\", () => {\n      // update item index before deleting\n      itemIndex = todoList.items.indexOf(item);\n      defaultIndex = defaultList.items.indexOf(item);\n      (0,_engine__WEBPACK_IMPORTED_MODULE_1__.deleteItem)(itemIndex, todoList, defaultList, defaultIndex);\n      domList.removeChild(domItem);\n    });\n\n    // complete todoItem button\n    const itemCompleteBtn = document.createElement(\"button\");\n    itemCompleteBtn.textContent = \"Completed\";\n\n    itemCompleteBtn.addEventListener(\"click\", () => {\n      // update item index before deleting\n      itemIndex = todoList.items.indexOf(item);\n      defaultIndex = defaultList.items.indexOf(item);\n      (0,_engine__WEBPACK_IMPORTED_MODULE_1__.deleteItem)(itemIndex, todoList, defaultList, defaultIndex, completedList);\n      domList.removeChild(domItem);\n    });\n\n    // append all the todo item properties to the li tag\n    domItem.appendChild(domItemTitle);\n    domItem.appendChild(domItemTitleValue);\n    domItem.appendChild(domItemDueDate);\n    domItem.appendChild(domItemDueDateValue);\n    domItem.appendChild(domItemPriority);\n    domItem.appendChild(domItemPriorityValue);\n    domItem.appendChild(domItemDescription);\n    domItem.appendChild(domItemDescriptionValue);\n\n    // hide remove button from home page\n    if (todoList !== defaultList && todoList !== completedList) {\n      domItem.insertBefore(itemDeleteBtn, domItem.firstChild);\n      domItem.appendChild(itemCompleteBtn);\n      // put the item before the add button on project lists\n      domList.insertBefore(domItem, addItemBtn);\n    }\n\n    if (todoList === defaultList || todoList === completedList) {\n      // add the item to the defautlist\n      domList.appendChild(domItem);\n\n      // show each item's original project in the default list\n      // const originalList = document.createElement(\"div\");\n      // originalList.textContent = `Project: `;\n      // domItem.appendChild(originalList);\n    }\n\n    return {\n      domItemTitleValue,\n      domItemDescriptionValue,\n      domItemDueDateValue,\n      domItemPriorityValue,\n      itemDeleteBtn,\n      domItem,\n    };\n  }\n\n  // add todo item button behavior\n  addItemBtn.addEventListener(\"click\", () => {\n    const newItem = (0,_engine__WEBPACK_IMPORTED_MODULE_1__.createItem)(\"-\", \"-\", \"-\", \"-\");\n    (0,_engine__WEBPACK_IMPORTED_MODULE_1__.assignItemToList)(newItem, todoList, defaultList);\n\n    const item = addNewItemToDom(newItem);\n    (0,_engine__WEBPACK_IMPORTED_MODULE_1__.updateListValues)(\n      newItem,\n      item.domItemTitleValue,\n      item.domItemDescriptionValue,\n      item.domItemDueDateValue,\n      item.domItemPriorityValue\n    );\n  });\n\n  return { addNewItemToDom, addItemBtn, domList };\n}\n\n\n\n\n//# sourceURL=webpack://project-template/./src/display.js?");

/***/ }),

/***/ "./src/engine.js":
/*!***********************!*\
  !*** ./src/engine.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   assignItemToList: () => (/* binding */ assignItemToList),\n/* harmony export */   createItem: () => (/* binding */ createItem),\n/* harmony export */   createList: () => (/* binding */ createList),\n/* harmony export */   deleteItem: () => (/* binding */ deleteItem),\n/* harmony export */   deleteList: () => (/* binding */ deleteList),\n/* harmony export */   updateListValues: () => (/* binding */ updateListValues)\n/* harmony export */ });\n/* eslint-disable no-param-reassign */\n// create todo list\n\nconst allLists = [];\n\nfunction createList(title) {\n  const newList = { title, items: [] };\n  console.log(allLists);\n\n  // Push the newly created list into the 'allLists' array\n  allLists.push(newList);\n  return newList;\n}\n\nfunction deleteList(title, transformedUserInput) {\n  const indexToDelete = allLists.findIndex((list) => list.title === title);\n  console.log(allLists);\n  console.log(indexToDelete);\n\n  if (indexToDelete !== -1) {\n    if (allLists[indexToDelete].items.length === 0) {\n      // Delete the list itself\n      console.log(allLists[indexToDelete]);\n      allLists.splice(indexToDelete, 1);\n\n      const projectContainer = document.getElementById(\"projectContainer\");\n      const individualContainer = document.getElementById(\n        `${transformedUserInput}Container`\n      );\n      projectContainer.removeChild(individualContainer);\n\n      return;\n    }\n    alert(\"Please clear the list before deleting it\");\n  }\n}\n\n// create todo item\nfunction createItem(title, description, dueDate, priority) {\n  return {\n    title,\n    description,\n    dueDate,\n    priority,\n    status: \"Pending\",\n  };\n}\n\n// delete todoitem\nfunction deleteItem(\n  todoItemIndex,\n  todoList,\n  defaultList,\n  defaultIndex,\n  completedList\n) {\n  defaultList.items.splice(defaultIndex, 1);\n  const [todoItem] = todoList.items.splice(todoItemIndex, 1);\n\n  if (completedList) {\n    completedList.items.push(todoItem);\n  }\n}\n\n// put the item inside the chosen list\nfunction assignItemToList(todoItem, list, defaultList) {\n  defaultList.items.push(todoItem);\n  if (list !== defaultList) {\n    list.items.push(todoItem);\n  }\n}\n\n// Update the title, description, due date and priority when the user edits it\nfunction updateListValues(\n  todoItem,\n  titleValue,\n  descValue,\n  dateValue,\n  priorityValue\n) {\n  titleValue.addEventListener(\"input\", () => {\n    todoItem.title = titleValue.textContent;\n  });\n\n  descValue.addEventListener(\"input\", () => {\n    todoItem.description = descValue.value;\n  });\n\n  dateValue.addEventListener(\"input\", () => {\n    todoItem.dueDate = dateValue.value;\n  });\n\n  priorityValue.addEventListener(\"change\", () => {\n    todoItem.priority = priorityValue.value;\n  });\n}\n\n\n\n\n//# sourceURL=webpack://project-template/./src/engine.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _display__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./display */ \"./src/display.js\");\n/* harmony import */ var _engine__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./engine */ \"./src/engine.js\");\n/* harmony import */ var _img_x_square_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/x-square.svg */ \"./src/img/x-square.svg\");\n/* eslint-disable no-alert */\n\n\n\n\n\n// default list and items to populate the page\nconst defaultList = (0,_engine__WEBPACK_IMPORTED_MODULE_2__.createList)(\"All Projects\");\n(0,_display__WEBPACK_IMPORTED_MODULE_1__.displayTodoList)(defaultList, defaultList);\n\n// HOME\nfunction displayHome() {\n  const display = (0,_display__WEBPACK_IMPORTED_MODULE_1__.displayTodoList)(defaultList, defaultList);\n\n  // display each item of the list\n  defaultList.items.forEach((item) => {\n    const newItem = display.addNewItemToDom(item);\n    (0,_engine__WEBPACK_IMPORTED_MODULE_2__.updateListValues)(\n      item,\n      newItem.domItemTitleValue,\n      newItem.domItemDescriptionValue,\n      newItem.domItemDueDateValue,\n      newItem.domItemPriorityValue\n    );\n  });\n}\n\nconst homeBtn = document.getElementById(\"homeBtn\");\nhomeBtn.addEventListener(\"click\", displayHome);\n\n// COMPLETED\nconst completedBtn = document.getElementById(\"completedBtn\");\ncompletedBtn.addEventListener(\"click\", () => {\n  const display = (0,_display__WEBPACK_IMPORTED_MODULE_1__.displayTodoList)(_display__WEBPACK_IMPORTED_MODULE_1__.completedList, defaultList);\n\n  _display__WEBPACK_IMPORTED_MODULE_1__.completedList.items.forEach((item) => {\n    const newItem = display.addNewItemToDom(item);\n    // eslint-disable-next-line no-param-reassign\n    item.status = \"Completed\";\n    newItem.domItemTitleValue.contentEditable = false;\n    newItem.domItemDescriptionValue.setAttribute(\"readonly\", true);\n    newItem.domItemDueDateValue.setAttribute(\"readonly\", true);\n    newItem.domItemPriorityValue.setAttribute(\"disabled\", true);\n    (0,_engine__WEBPACK_IMPORTED_MODULE_2__.updateListValues)(\n      item,\n      newItem.domItemTitleValue,\n      newItem.domItemDescriptionValue,\n      newItem.domItemDueDateValue,\n      newItem.domItemPriorityValue\n    );\n  });\n});\n\n// ADD PROJECTS\nconst addProjectBtn = document.getElementById(\"addProjectBtn\");\naddProjectBtn.addEventListener(\"click\", () => {\n  let userInput;\n  const projectContainer = document.getElementById(\"projectContainer\");\n\n  // input for the user to type the title for the new project\n  const userForm = document.createElement(\"input\");\n  userForm.setAttribute(\"type\", \"text\");\n  userForm.id = \"userForm\";\n\n  // button to submit the user value above and create the new project\n  const submitButton = document.createElement(\"button\");\n  submitButton.id = \"submitButton\";\n  submitButton.textContent = \"Add new Project\";\n\n  projectContainer.appendChild(userForm);\n  projectContainer.appendChild(submitButton);\n\n  submitButton.addEventListener(\"click\", () => {\n    userInput = userForm.value;\n\n    projectContainer.removeChild(userForm);\n    projectContainer.removeChild(submitButton);\n\n    if (userInput !== \"\") {\n      // add new project to the sidebar\n      const individualContainer = document.createElement(\"div\");\n      individualContainer.className = \"individualContainer\";\n\n      const newProject = document.createElement(\"span\");\n      const deleteProject = document.createElement(\"span\");\n      const deleteIcon = document.createElement(\"img\");\n      deleteProject.setAttribute(\"class\", \"iconContainer\");\n\n      deleteIcon.src = _img_x_square_svg__WEBPACK_IMPORTED_MODULE_3__;\n      deleteIcon.alt = \"Delete project button\";\n      newProject.textContent = userInput;\n\n      projectContainer.appendChild(individualContainer);\n      individualContainer.appendChild(newProject);\n      individualContainer.appendChild(deleteProject);\n      deleteProject.appendChild(deleteIcon);\n\n      // modify user input to assign manageable IDs\n      const transformedUserInput = userInput.toLowerCase().replace(/\\s+/g, \"-\");\n      newProject.id = transformedUserInput;\n      newProject.className = \"project\";\n\n      individualContainer.id = `${transformedUserInput}Container`;\n\n      // make list for the new project\n      const newList = (0,_engine__WEBPACK_IMPORTED_MODULE_2__.createList)(transformedUserInput);\n\n      // make each project display their list when clicked\n      const projectBtn = document.getElementById(`${transformedUserInput}`);\n      projectBtn.addEventListener(\"click\", () => {\n        const display = (0,_display__WEBPACK_IMPORTED_MODULE_1__.displayTodoList)(newList, defaultList);\n        newList.items.forEach((item) => {\n          const newItem = display.addNewItemToDom(item);\n          (0,_engine__WEBPACK_IMPORTED_MODULE_2__.updateListValues)(\n            item,\n            newItem.domItemTitleValue,\n            newItem.domItemDescriptionValue,\n            newItem.domItemDueDateValue,\n            newItem.domItemPriorityValue\n          );\n        });\n      });\n\n      deleteIcon.addEventListener(\"click\", () => {\n        console.log(newList.title);\n        (0,_engine__WEBPACK_IMPORTED_MODULE_2__.deleteList)(newList.title, transformedUserInput);\n\n        if (newList.items.length === 0) {\n          displayHome();\n        }\n      });\n      return;\n    }\n    alert(\"Please specify the new Project's name\");\n  });\n});\n\n\n//# sourceURL=webpack://project-template/./src/index.js?");

/***/ }),

/***/ "./src/img/trash.svg":
/*!***************************!*\
  !*** ./src/img/trash.svg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"bba7f8a90befcbd8f9c0.svg\";\n\n//# sourceURL=webpack://project-template/./src/img/trash.svg?");

/***/ }),

/***/ "./src/img/x-square.svg":
/*!******************************!*\
  !*** ./src/img/x-square.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"b8dd0ce607bca97aa45c.svg\";\n\n//# sourceURL=webpack://project-template/./src/img/x-square.svg?");

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;