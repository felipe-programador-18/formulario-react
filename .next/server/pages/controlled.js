"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/controlled";
exports.ids = ["pages/controlled"];
exports.modules = {

/***/ "./pages/controlled.js":
/*!*****************************!*\
  !*** ./pages/controlled.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\n// now about controlled form!!!\nconst controlledFor = ()=>{\n    const { 0: value , 1: setvalue  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    // about value is value inside state, because i am passed it value inside input\n    const { 0: show , 1: setshow  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const getValue = ()=>{\n        console.log(value);\n    };\n    const onChange = (event)=>{\n        setvalue(event.target.value);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Controlled!\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\macha\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\formu\\\\pages\\\\controlled.js\",\n                lineNumber: 17,\n                columnNumber: 5\n            }, undefined),\n            show && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                placeholder: \"Controlled\",\n                value: value,\n                onChange: onChange\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\macha\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\formu\\\\pages\\\\controlled.js\",\n                lineNumber: 18,\n                columnNumber: 19\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                type: \"button\",\n                onClick: getValue,\n                children: \"get value!\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\macha\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\formu\\\\pages\\\\controlled.js\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                type: \"button\",\n                onClick: ()=>setshow((curr)=>!curr\n                    )\n                ,\n                children: \"Hide input!\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\macha\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\formu\\\\pages\\\\controlled.js\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, undefined),\n            value,\n            value === \"PJ\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Adding your Pj:\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\macha\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\formu\\\\pages\\\\controlled.js\",\n                lineNumber: 22,\n                columnNumber: 25\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (controlledFor);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb250cm9sbGVkLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFBcUM7QUFDckMsK0JBQStCO0FBQy9CLE1BQU1FLGFBQWEsR0FBRyxJQUFNO0lBQ3hCLE1BQU0sRUFIVixHQUdXQyxLQUFLLEdBSGhCLEdBR2tCQyxRQUFRLE1BQUlILCtDQUFRLENBQUMsRUFBRSxDQUFDO0lBQ3RDLCtFQUErRTtJQUMvRSxNQUFNLEVBTFYsR0FLV0ksSUFBSSxHQUxmLEdBS2lCQyxPQUFPLE1BQUlMLCtDQUFRLENBQUMsSUFBSSxDQUFDO0lBQ3RDLE1BQU1NLFFBQVEsR0FBRyxJQUFLO1FBQ25CQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ04sS0FBSyxDQUFDO0tBQ3BCO0lBRUQsTUFBTU8sUUFBUSxHQUFHQyxDQUFBQSxLQUFLLEdBQUc7UUFFckJQLFFBQVEsQ0FBQ08sS0FBSyxDQUFDQyxNQUFNLENBQUNULEtBQUssQ0FBQztLQUMvQjtJQUVELHFCQUFTOzswQkFDVCw4REFBQ1UsSUFBRTswQkFBQyxhQUFXOzs7Ozt5QkFBSztZQUNkUixJQUFJLGtCQUFJLDhEQUFDUyxPQUFLO2dCQUFDQyxJQUFJLEVBQUMsTUFBTTtnQkFBQ0MsV0FBVyxFQUFDLFlBQVk7Z0JBQUNiLEtBQUssRUFBRUEsS0FBSztnQkFBR08sUUFBUSxFQUFFQSxRQUFROzs7Ozt5QkFBSzswQkFDOUYsOERBQUNPLFFBQU07Z0JBQUNGLElBQUksRUFBQyxRQUFRO2dCQUFDRyxPQUFPLEVBQUVYLFFBQVE7MEJBQUcsWUFBVTs7Ozs7eUJBQVM7MEJBQzdELDhEQUFDVSxRQUFNO2dCQUFDRixJQUFJLEVBQUMsUUFBUTtnQkFBQ0csT0FBTyxFQUFFLElBQU1aLE9BQU8sQ0FBQ2EsQ0FBQUEsSUFBSSxHQUFJLENBQUNBLElBQUk7b0JBQUEsQ0FBQztnQkFBQTswQkFBRyxhQUFXOzs7Ozt5QkFBUztZQUNsRmhCLEtBQUs7WUFDTEEsS0FBSyxLQUFLLElBQUksa0JBQUksOERBQUNpQixHQUFDOzBCQUFDLGlCQUFlOzs7Ozt5QkFBSTs7b0JBQ3pDLENBQ0E7Q0FDSjtBQUVELGlFQUFlbEIsYUFBYSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zvcm11Ly4vcGFnZXMvY29udHJvbGxlZC5qcz85MzZiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tICdyZWFjdCdcclxuLy8gbm93IGFib3V0IGNvbnRyb2xsZWQgZm9ybSEhIVxyXG5jb25zdCBjb250cm9sbGVkRm9yID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW3ZhbHVlLCBzZXR2YWx1ZV0gPSB1c2VTdGF0ZSgnJylcclxuICAgIC8vIGFib3V0IHZhbHVlIGlzIHZhbHVlIGluc2lkZSBzdGF0ZSwgYmVjYXVzZSBpIGFtIHBhc3NlZCBpdCB2YWx1ZSBpbnNpZGUgaW5wdXRcclxuICAgIGNvbnN0IFtzaG93LCBzZXRzaG93XSA9IHVzZVN0YXRlKHRydWUpXHJcbiAgICBjb25zdCBnZXRWYWx1ZSA9ICgpID0+e1xyXG4gICAgICAgY29uc29sZS5sb2codmFsdWUpIFxyXG4gICAgfSAgXHJcbiAgICBcclxuICAgIGNvbnN0IG9uQ2hhbmdlID0gZXZlbnQgPT57XHJcbiAgICAgICAgXHJcbiAgICAgICAgc2V0dmFsdWUoZXZlbnQudGFyZ2V0LnZhbHVlKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoIDw+XHJcbiAgICA8aDE+Q29udHJvbGxlZCE8L2gxPlxyXG4gICAgICAgIHsgc2hvdyAmJiA8aW5wdXQgdHlwZT0ndGV4dCcgcGxhY2Vob2xkZXI9J0NvbnRyb2xsZWQnIHZhbHVlPXt2YWx1ZX0gIG9uQ2hhbmdlPXtvbkNoYW5nZX0gIC8+ICB9XHJcbiAgICAgIDxidXR0b24gdHlwZT0nYnV0dG9uJyBvbkNsaWNrPXtnZXRWYWx1ZX0gPmdldCB2YWx1ZSE8L2J1dHRvbj5cclxuICAgICAgPGJ1dHRvbiB0eXBlPSdidXR0b24nIG9uQ2xpY2s9eygpID0+IHNldHNob3coY3VyciA9PiAhY3Vycil9ID5IaWRlIGlucHV0ITwvYnV0dG9uPlxyXG4gICAgIHt2YWx1ZX1cclxuICAgICB7dmFsdWUgPT09IFwiUEpcIiAmJiA8cD5BZGRpbmcgeW91ciBQajo8L3A+fVxyXG4gIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb250cm9sbGVkRm9yIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJjb250cm9sbGVkRm9yIiwidmFsdWUiLCJzZXR2YWx1ZSIsInNob3ciLCJzZXRzaG93IiwiZ2V0VmFsdWUiLCJjb25zb2xlIiwibG9nIiwib25DaGFuZ2UiLCJldmVudCIsInRhcmdldCIsImgxIiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJidXR0b24iLCJvbkNsaWNrIiwiY3VyciIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/controlled.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/controlled.js"));
module.exports = __webpack_exports__;

})();