"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkto_do_list"] = self["webpackChunkto_do_list"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\r\\n  font-family: 'Open Sans', sans-serif;\\r\\n}\\r\\n\\r\\n.margin {\\r\\n  margin-left: 2%;\\r\\n  margin-right: 2%;\\r\\n}\\r\\n\\r\\n.to-do-section {\\r\\n  box-shadow: 0 0 20px 0 #cccbcbb8;\\r\\n  width: 500px;\\r\\n  position: absolute;\\r\\n  top: 50%;\\r\\n  left: 50%;\\r\\n  transform: translate(-50%, -50%);\\r\\n  border-radius: 3px;\\r\\n}\\r\\n\\r\\n.completed {\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  background-color: rgb(249 245 245 / 75%);\\r\\n}\\r\\n\\r\\ninput::placeholder {\\r\\n  font-style: italic;\\r\\n}\\r\\n\\r\\np,\\r\\nh4 {\\r\\n  margin: 0;\\r\\n}\\r\\n\\r\\np {\\r\\n  color: grey;\\r\\n}\\r\\n\\r\\ninput[type=text] {\\r\\n  border: none;\\r\\n  width: 99%;\\r\\n  font-style: italic;\\r\\n  height: 36px;\\r\\n}\\r\\n\\r\\ninput:focus {\\r\\n  border: none;\\r\\n  outline: none;\\r\\n}\\r\\n\\r\\n.completed,\\r\\n.title {\\r\\n  height: 36px;\\r\\n}\\r\\n\\r\\n.title {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  justify-content: space-between;\\r\\n  border-bottom: 1px solid #d8d4d4;\\r\\n}\\r\\n\\r\\nspan {\\r\\n  color: rgb(94, 94, 94);\\r\\n}\\r\\n\\r\\n.input {\\r\\n  display: flex;\\r\\n  border-bottom: 1px solid #d8d4d4;\\r\\n}\\r\\n\\r\\n.input span {\\r\\n  padding-top: 3px;\\r\\n}\\r\\n\\r\\n.task {\\r\\n  height: 36px;\\r\\n  padding: 0;\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  justify-content: space-between;\\r\\n  border-bottom: 1px solid #d8d4d4;\\r\\n}\\r\\n\\r\\n.task-check {\\r\\n  padding: 0;\\r\\n}\\r\\n\\r\\n.yellow {\\r\\n  background-color: yellow;\\r\\n}\\r\\n\\r\\nbutton {\\r\\n  font-family: 'Open Sans', sans-serif;\\r\\n  background-color: transparent;\\r\\n  border: none;\\r\\n  outline: none;\\r\\n}\\r\\n\\r\\n.complete{\\r\\n  width: 100%;\\r\\n  height: 100%;\\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://to-do-list/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://to-do-list/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_addTask_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/addTask.js */ \"./src/modules/addTask.js\");\n/* harmony import */ var _modules_deletetask_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/deletetask.js */ \"./src/modules/deletetask.js\");\n/* harmony import */ var _modules_edittask_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/edittask.js */ \"./src/modules/edittask.js\");\n/* harmony import */ var _modules_entertask_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/entertask.js */ \"./src/modules/entertask.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_selector_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/selector.js */ \"./src/modules/selector.js\");\n/* harmony import */ var _modules_clearComplete_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/clearComplete.js */ \"./src/modules/clearComplete.js\");\n\n\n\n\n\n\n\n\n_modules_selector_js__WEBPACK_IMPORTED_MODULE_5__.enterTask.addEventListener('keyup', (e) => {\n  (0,_modules_entertask_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(e);\n});\n\n_modules_selector_js__WEBPACK_IMPORTED_MODULE_5__.tasks.forEach((task) => {\n  (0,_modules_addTask_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(task);\n});\n\n_modules_selector_js__WEBPACK_IMPORTED_MODULE_5__.divtasks.addEventListener('click', (e) => {\n  if (e.target.nodeName === 'BUTTON') {\n    const taskDivs = document.querySelectorAll('.task');\n    const { id } = e.target;\n    if (e.target.textContent === 'delete') {\n      (0,_modules_deletetask_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(id, taskDivs);\n    }\n    taskDivs.forEach((div) => {\n      const bt = div.querySelector('.dot');\n      bt.textContent = 'more_vert';\n      e.target.textContent = 'delete';\n      div.style.backgroundColor = 'white';\n    });\n    const taskDiv = e.target.closest('.task');\n    taskDiv.style.backgroundColor = 'yellow';\n  }\n});\n\n_modules_selector_js__WEBPACK_IMPORTED_MODULE_5__.divtasks.addEventListener('blur', () => {\n  const taskDivs = document.querySelectorAll('.task');\n  taskDivs.forEach((div) => {\n    const bt = div.querySelector('.dot');\n    bt.textContent = 'more_vert';\n    div.style.backgroundColor = 'white';\n  });\n}, true);\n\n_modules_selector_js__WEBPACK_IMPORTED_MODULE_5__.divtasks.addEventListener('click', (e) => {\n  (0,_modules_edittask_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(e);\n});\n\n_modules_selector_js__WEBPACK_IMPORTED_MODULE_5__.divtasks.addEventListener('click', (e) => {\n  (0,_modules_clearComplete_js__WEBPACK_IMPORTED_MODULE_6__.checked)(e);\n});\n\n_modules_selector_js__WEBPACK_IMPORTED_MODULE_5__.clearCompleted.addEventListener('click', () => {\n  (0,_modules_clearComplete_js__WEBPACK_IMPORTED_MODULE_6__.buttonClear)();\n});\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

/***/ }),

/***/ "./src/modules/addTask.js":
/*!********************************!*\
  !*** ./src/modules/addTask.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _selector_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./selector.js */ \"./src/modules/selector.js\");\n\n\nconst addTask = (task) => {\n  const div = document.createElement('div');\n  div.classList.add('task');\n  div.setAttribute('id', task.index);\n  div.innerHTML = `<div class = \"task-check margin\" id=\"${task.index}\">\n                    <input type=\"checkbox\" id=\"${task.index}\" ${task.completed ? 'checked' : ''}>\n                    <label for=\"${task.index}\">${task.description}</label>\n                    </div>\n                    <button class=\"material-symbols-outlined margin dot\" id=\"${task.index}\">more_vert</button>`;\n  _selector_js__WEBPACK_IMPORTED_MODULE_0__.divtasks.appendChild(div);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addTask);\n\n//# sourceURL=webpack://to-do-list/./src/modules/addTask.js?");

/***/ }),

/***/ "./src/modules/clearComplete.js":
/*!**************************************!*\
  !*** ./src/modules/clearComplete.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"buttonClear\": () => (/* binding */ buttonClear),\n/* harmony export */   \"checked\": () => (/* binding */ checked)\n/* harmony export */ });\n/* harmony import */ var _selector_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./selector.js */ \"./src/modules/selector.js\");\n/* harmony import */ var _storetask_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storetask.js */ \"./src/modules/storetask.js\");\n/* harmony import */ var _addTask_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addTask.js */ \"./src/modules/addTask.js\");\n\n\n\n\nconst checked = (e) => {\n  if (e.target.matches('input[type=\"checkbox\"]')) {\n    const taskDiv = e.target.closest('.task');\n    const task = _selector_js__WEBPACK_IMPORTED_MODULE_0__.tasks[taskDiv.getAttribute('id') - 1];\n    if (e.target.checked) {\n      task.completed = true;\n    } else {\n      task.completed = false;\n    }\n    (0,_storetask_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  }\n};\n\nconst buttonClear = () => {\n  const taskDivs = document.querySelectorAll('.task');\n  taskDivs.forEach((taskDiv) => {\n    taskDiv.parentNode.removeChild(taskDiv);\n  });\n  const newTasks = _selector_js__WEBPACK_IMPORTED_MODULE_0__.tasks.filter((task) => task.completed === false);\n  _selector_js__WEBPACK_IMPORTED_MODULE_0__.tasks.splice(0);\n  let i = 1;\n  newTasks.forEach((task) => {\n    task.index = i;\n    i += 1;\n    _selector_js__WEBPACK_IMPORTED_MODULE_0__.tasks.push(task);\n  });\n  _selector_js__WEBPACK_IMPORTED_MODULE_0__.tasks.forEach((task) => {\n    (0,_addTask_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(task);\n  });\n  (0,_storetask_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n};\n\n\n\n//# sourceURL=webpack://to-do-list/./src/modules/clearComplete.js?");

/***/ }),

/***/ "./src/modules/deletetask.js":
/*!***********************************!*\
  !*** ./src/modules/deletetask.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _storetask_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storetask.js */ \"./src/modules/storetask.js\");\n/* harmony import */ var _selector_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./selector.js */ \"./src/modules/selector.js\");\n/* harmony import */ var _addTask_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addTask.js */ \"./src/modules/addTask.js\");\n\n\n\n\nconst deleteTask = (id, taskDivs) => {\n  if (_selector_js__WEBPACK_IMPORTED_MODULE_1__.tasks.length === 1) {\n    _selector_js__WEBPACK_IMPORTED_MODULE_1__.tasks.pop();\n  }\n  _selector_js__WEBPACK_IMPORTED_MODULE_1__.tasks.splice(id - 1, 1);\n  (0,_storetask_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  taskDivs.forEach((taskDiv) => {\n    taskDiv.parentNode.removeChild(taskDiv);\n  });\n  let i = 1;\n  _selector_js__WEBPACK_IMPORTED_MODULE_1__.tasks.forEach((task) => {\n    task.index = i;\n    i += 1;\n    (0,_addTask_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(task);\n    (0,_storetask_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (deleteTask);\n\n//# sourceURL=webpack://to-do-list/./src/modules/deletetask.js?");

/***/ }),

/***/ "./src/modules/edittask.js":
/*!*********************************!*\
  !*** ./src/modules/edittask.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _storetask_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storetask.js */ \"./src/modules/storetask.js\");\n/* harmony import */ var _selector_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./selector.js */ \"./src/modules/selector.js\");\n\n\n\nconst editTask = (e) => {\n  if (e.target.nodeName === 'LABEL') {\n    const taskDiv = e.target.closest('.task');\n    const task = _selector_js__WEBPACK_IMPORTED_MODULE_1__.tasks[taskDiv.getAttribute('id')];\n    const editInput = document.createElement('input');\n    editInput.value = task.description;\n    e.target.parentNode.replaceChild(editInput, e.target);\n    editInput.focus();\n\n    editInput.addEventListener('keypress', (e) => {\n      if (e.key === 'Enter') {\n        task.description = editInput.value;\n        (0,_storetask_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n        const newLabel = document.createElement('label');\n        newLabel.setAttribute('for', task.index);\n        newLabel.textContent = task.description;\n        editInput.parentNode.replaceChild(newLabel, editInput);\n      }\n    });\n    editInput.addEventListener('blur', () => {\n      task.description = editInput.value;\n      (0,_storetask_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n      const newLabel = document.createElement('label');\n      newLabel.setAttribute('for', task.index);\n      newLabel.textContent = task.description;\n      editInput.parentNode.replaceChild(newLabel, editInput);\n    });\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (editTask);\n\n//# sourceURL=webpack://to-do-list/./src/modules/edittask.js?");

/***/ }),

/***/ "./src/modules/entertask.js":
/*!**********************************!*\
  !*** ./src/modules/entertask.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _addTask_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addTask.js */ \"./src/modules/addTask.js\");\n/* harmony import */ var _selector_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./selector.js */ \"./src/modules/selector.js\");\n/* harmony import */ var _storetask_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storetask.js */ \"./src/modules/storetask.js\");\n\n\n\n\nconst enterATask = (e) => {\n  if (e.key === 'Enter') {\n    const task = {\n      index: _selector_js__WEBPACK_IMPORTED_MODULE_1__.tasks.length + 1,\n      description: _selector_js__WEBPACK_IMPORTED_MODULE_1__.enterTask.value,\n      completed: false,\n    };\n    const taskDivs = document.querySelectorAll('.task');\n    taskDivs.forEach((taskDiv) => {\n      taskDiv.parentNode.removeChild(taskDiv);\n    });\n    _selector_js__WEBPACK_IMPORTED_MODULE_1__.tasks.push(task);\n    _selector_js__WEBPACK_IMPORTED_MODULE_1__.tasks.forEach((task) => {\n      (0,_addTask_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(task);\n    });\n    _selector_js__WEBPACK_IMPORTED_MODULE_1__.enterTask.value = '';\n    (0,_storetask_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (enterATask);\n\n\n//# sourceURL=webpack://to-do-list/./src/modules/entertask.js?");

/***/ }),

/***/ "./src/modules/selector.js":
/*!*********************************!*\
  !*** ./src/modules/selector.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"clearCompleted\": () => (/* binding */ clearCompleted),\n/* harmony export */   \"divtasks\": () => (/* binding */ divtasks),\n/* harmony export */   \"enterTask\": () => (/* binding */ enterTask),\n/* harmony export */   \"tasks\": () => (/* binding */ tasks)\n/* harmony export */ });\nconst tasks = JSON.parse(localStorage.getItem('tasks')) || [];\nconst divtasks = document.querySelector('.tasks');\nconst enterTask = document.querySelector('input');\nconst clearCompleted = document.querySelector('.complete');\n\n//# sourceURL=webpack://to-do-list/./src/modules/selector.js?");

/***/ }),

/***/ "./src/modules/storetask.js":
/*!**********************************!*\
  !*** ./src/modules/storetask.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _selector_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./selector.js */ \"./src/modules/selector.js\");\n\n\nconst storeTask = () => {\n  localStorage.setItem('tasks', JSON.stringify(_selector_js__WEBPACK_IMPORTED_MODULE_0__.tasks));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (storeTask);\n\n//# sourceURL=webpack://to-do-list/./src/modules/storetask.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);