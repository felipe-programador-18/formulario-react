"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/controlled",{

/***/ "./pages/controlled.js":
/*!*****************************!*\
  !*** ./pages/controlled.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined;\n\n\nvar _s = $RefreshSig$();\n// now about controlled form!!!\nvar controlledFor = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), value = ref[0], setvalue = ref[1];\n    // about value is value inside state, because i am passed it value inside input\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true), show = ref1[0], setshow = ref1[1];\n    var getValue = function() {\n        console.log(value);\n    };\n    var onChange = function(event) {\n        setvalue(event.target.value);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Controlled!\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\macha\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\formu\\\\pages\\\\controlled.js\",\n                lineNumber: 17,\n                columnNumber: 5\n            }, _this),\n            show && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                placeholder: \"Controlled\",\n                value: value,\n                onChange: onChange\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\macha\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\formu\\\\pages\\\\controlled.js\",\n                lineNumber: 18,\n                columnNumber: 19\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                type: \"button\",\n                onClick: getValue,\n                children: \"get value!\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\macha\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\formu\\\\pages\\\\controlled.js\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                type: \"button\",\n                onClick: function() {\n                    return setshow(function(curr) {\n                        return !curr;\n                    });\n                },\n                children: \"Hide input!\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\macha\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\formu\\\\pages\\\\controlled.js\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_s(controlledFor, \"THPOt514uOZyMZGnEhMZbkuOIaE=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (controlledFor);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb250cm9sbGVkLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7O0FBQXFDOztBQUNyQywrQkFBK0I7QUFDL0IsSUFBTUUsYUFBYSxHQUFHLFdBQU07O0lBQ3hCLElBQTBCRCxHQUFZLEdBQVpBLCtDQUFRLENBQUMsRUFBRSxDQUFDLEVBSDFDLEtBR2dCLEdBQWNBLEdBQVksR0FBMUIsRUFIaEIsUUFHMEIsR0FBSUEsR0FBWSxHQUFoQjtJQUN0QiwrRUFBK0U7SUFDL0UsSUFBd0JBLElBQWMsR0FBZEEsK0NBQVEsQ0FBQyxJQUFJLENBQUMsRUFMMUMsSUFLZSxHQUFhQSxJQUFjLEdBQTNCLEVBTGYsT0FLd0IsR0FBSUEsSUFBYyxHQUFsQjtJQUNwQixJQUFNTSxRQUFRLEdBQUcsV0FBSztRQUNuQkMsT0FBTyxDQUFDQyxHQUFHLENBQUNOLEtBQUssQ0FBQztLQUNwQjtJQUVELElBQU1PLFFBQVEsR0FBR0MsU0FBQUEsS0FBSyxFQUFHO1FBRXJCUCxRQUFRLENBQUNPLEtBQUssQ0FBQ0MsTUFBTSxDQUFDVCxLQUFLLENBQUM7S0FDL0I7SUFFRCxxQkFBUzs7MEJBQ1QsOERBQUNVLElBQUU7MEJBQUMsYUFBVzs7Ozs7cUJBQUs7WUFDZFIsSUFBSSxrQkFBSSw4REFBQ1MsT0FBSztnQkFBQ0MsSUFBSSxFQUFDLE1BQU07Z0JBQUNDLFdBQVcsRUFBQyxZQUFZO2dCQUFDYixLQUFLLEVBQUVBLEtBQUs7Z0JBQUdPLFFBQVEsRUFBRUEsUUFBUTs7Ozs7cUJBQUs7MEJBQzlGLDhEQUFDTyxRQUFNO2dCQUFDRixJQUFJLEVBQUMsUUFBUTtnQkFBQ0csT0FBTyxFQUFFWCxRQUFROzBCQUFHLFlBQVU7Ozs7O3FCQUFTOzBCQUM3RCw4REFBQ1UsUUFBTTtnQkFBQ0YsSUFBSSxFQUFDLFFBQVE7Z0JBQUNHLE9BQU8sRUFBRTsyQkFBTVosT0FBTyxDQUFDYSxTQUFBQSxJQUFJOytCQUFJLENBQUNBLElBQUk7cUJBQUEsQ0FBQztpQkFBQTswQkFBRyxhQUFXOzs7OztxQkFBUzs7b0JBQ25GLENBQ0E7Q0FDSjtHQXBCS2pCLGFBQWE7QUFzQm5CLCtEQUFlQSxhQUFhIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2NvbnRyb2xsZWQuanM/OTM2YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXHJcbi8vIG5vdyBhYm91dCBjb250cm9sbGVkIGZvcm0hISFcclxuY29uc3QgY29udHJvbGxlZEZvciA9ICgpID0+IHtcclxuICAgIGNvbnN0IFt2YWx1ZSwgc2V0dmFsdWVdID0gdXNlU3RhdGUoJycpXHJcbiAgICAvLyBhYm91dCB2YWx1ZSBpcyB2YWx1ZSBpbnNpZGUgc3RhdGUsIGJlY2F1c2UgaSBhbSBwYXNzZWQgaXQgdmFsdWUgaW5zaWRlIGlucHV0XHJcbiAgICBjb25zdCBbc2hvdywgc2V0c2hvd10gPSB1c2VTdGF0ZSh0cnVlKVxyXG4gICAgY29uc3QgZ2V0VmFsdWUgPSAoKSA9PntcclxuICAgICAgIGNvbnNvbGUubG9nKHZhbHVlKSBcclxuICAgIH0gIFxyXG4gICAgXHJcbiAgICBjb25zdCBvbkNoYW5nZSA9IGV2ZW50ID0+e1xyXG4gICAgICAgIFxyXG4gICAgICAgIHNldHZhbHVlKGV2ZW50LnRhcmdldC52YWx1ZSlcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKCA8PlxyXG4gICAgPGgxPkNvbnRyb2xsZWQhPC9oMT5cclxuICAgICAgICB7IHNob3cgJiYgPGlucHV0IHR5cGU9J3RleHQnIHBsYWNlaG9sZGVyPSdDb250cm9sbGVkJyB2YWx1ZT17dmFsdWV9ICBvbkNoYW5nZT17b25DaGFuZ2V9ICAvPiAgfVxyXG4gICAgICA8YnV0dG9uIHR5cGU9J2J1dHRvbicgb25DbGljaz17Z2V0VmFsdWV9ID5nZXQgdmFsdWUhPC9idXR0b24+XHJcbiAgICAgIDxidXR0b24gdHlwZT0nYnV0dG9uJyBvbkNsaWNrPXsoKSA9PiBzZXRzaG93KGN1cnIgPT4gIWN1cnIpfSA+SGlkZSBpbnB1dCE8L2J1dHRvbj5cclxuICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29udHJvbGxlZEZvciJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiY29udHJvbGxlZEZvciIsInZhbHVlIiwic2V0dmFsdWUiLCJzaG93Iiwic2V0c2hvdyIsImdldFZhbHVlIiwiY29uc29sZSIsImxvZyIsIm9uQ2hhbmdlIiwiZXZlbnQiLCJ0YXJnZXQiLCJoMSIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwiYnV0dG9uIiwib25DbGljayIsImN1cnIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/controlled.js\n");

/***/ })

});