"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/controlled-date",{

/***/ "./pages/controlled-date.js":
/*!**********************************!*\
  !*** ./pages/controlled-date.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nvar _this = undefined;\n\n\nvar _s = $RefreshSig$();\n// now about controlled form!!!\nvar controlledFor = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        name: \"\",\n        email: \"\"\n    }), form = ref[0], setform = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true), show = ref1[0], setshow = ref1[1];\n    var getValue = function() {\n        console.log(form);\n    };\n    var onChange = function(event) {\n        var formFielt = event.target.name;\n        //now i am set value how object!!\n        setform(_defineProperty({}, formFielt, event.target.value));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Controlled!\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\macha\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\formu\\\\pages\\\\controlled-date.js\",\n                lineNumber: 23,\n                columnNumber: 5\n            }, _this),\n            \"Name:\",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                name: \"name\",\n                value: form.name,\n                onChange: onChange\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\macha\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\formu\\\\pages\\\\controlled-date.js\",\n                lineNumber: 25,\n                columnNumber: 10\n            }, _this),\n            \"Email:\",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                name: \"name\",\n                value: form.name,\n                onChange: onChange\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\macha\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\formu\\\\pages\\\\controlled-date.js\",\n                lineNumber: 27,\n                columnNumber: 10\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                type: \"button\",\n                onClick: getValue,\n                children: \"get value!\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\macha\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\formu\\\\pages\\\\controlled-date.js\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                type: \"button\",\n                onClick: function() {\n                    return setshow(function(curr) {\n                        return !curr;\n                    });\n                },\n                children: \"Hide input!\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\macha\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\formu\\\\pages\\\\controlled-date.js\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"pre\", {\n                children: [\n                    \" \",\n                    JSON.stringify(form, null, 2)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\macha\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\formu\\\\pages\\\\controlled-date.js\",\n                lineNumber: 30,\n                columnNumber: 8\n            }, _this),\n            form === \"PJ\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Please adding your date here!\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\macha\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\formu\\\\pages\\\\controlled-date.js\",\n                lineNumber: 32,\n                columnNumber: 26\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_s(controlledFor, \"O24YRSBO6sl9r4vCgiD3F+JlDOM=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (controlledFor);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb250cm9sbGVkLWRhdGUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7O0FBQXFDOztBQUNyQywrQkFBK0I7QUFDL0IsSUFBTUUsYUFBYSxHQUFHLFdBQU07O0lBQ3hCLElBQXdCRCxHQUd0QixHQUhzQkEsK0NBQVEsQ0FBQztRQUM3QkUsSUFBSSxFQUFDLEVBQUU7UUFDUEMsS0FBSyxFQUFDLEVBQUU7S0FDWCxDQUFDLEVBTk4sSUFHZSxHQUFhSCxHQUd0QixHQUhTLEVBSGYsT0FHd0IsR0FBSUEsR0FHdEIsR0FIa0I7SUFLcEIsSUFBd0JBLElBQWMsR0FBZEEsK0NBQVEsQ0FBQyxJQUFJLENBQUMsRUFSMUMsSUFRZSxHQUFhQSxJQUFjLEdBQTNCLEVBUmYsT0FRd0IsR0FBSUEsSUFBYyxHQUFsQjtJQUNwQixJQUFNUSxRQUFRLEdBQUcsV0FBSztRQUNuQkMsT0FBTyxDQUFDQyxHQUFHLENBQUNOLElBQUksQ0FBQztLQUNuQjtJQUVELElBQU1PLFFBQVEsR0FBR0MsU0FBQUEsS0FBSyxFQUFHO1FBQ3JCLElBQU1DLFNBQVMsR0FBR0QsS0FBSyxDQUFDRSxNQUFNLENBQUNaLElBQUk7UUFDbkMsaUNBQWlDO1FBQ2pDRyxPQUFPLENBQ1Asb0JBQUNRLFNBQVMsRUFBR0QsS0FBSyxDQUFDRSxNQUFNLENBQUNDLEtBQUssRUFDakM7S0FDRDtJQUVELHFCQUFTOzswQkFDVCw4REFBQ0MsSUFBRTswQkFBQyxhQUFXOzs7OztxQkFBSztZQUFBLE9BRWY7MEJBQUEsOERBQUNDLE9BQUs7Z0JBQUNDLElBQUksRUFBQyxNQUFNO2dCQUFDaEIsSUFBSSxFQUFDLE1BQU07Z0JBQUNhLEtBQUssRUFBRVgsSUFBSSxDQUFDRixJQUFJO2dCQUFHUyxRQUFRLEVBQUVBLFFBQVE7Ozs7O3FCQUFLO1lBQUEsUUFFekU7MEJBQUEsOERBQUNNLE9BQUs7Z0JBQUNDLElBQUksRUFBQyxNQUFNO2dCQUFDaEIsSUFBSSxFQUFDLE1BQU07Z0JBQUNhLEtBQUssRUFBRVgsSUFBSSxDQUFDRixJQUFJO2dCQUFHUyxRQUFRLEVBQUVBLFFBQVE7Ozs7O3FCQUFLOzBCQUM1RSw4REFBQ1EsUUFBTTtnQkFBQ0QsSUFBSSxFQUFDLFFBQVE7Z0JBQUNFLE9BQU8sRUFBRVosUUFBUTswQkFBRyxZQUFVOzs7OztxQkFBUzswQkFDN0QsOERBQUNXLFFBQU07Z0JBQUNELElBQUksRUFBQyxRQUFRO2dCQUFDRSxPQUFPLEVBQUU7MkJBQU1iLE9BQU8sQ0FBQ2MsU0FBQUEsSUFBSTsrQkFBSSxDQUFDQSxJQUFJO3FCQUFBLENBQUM7aUJBQUE7MEJBQUcsYUFBVzs7Ozs7cUJBQVM7MEJBQ2pGLDhEQUFDQyxLQUFHOztvQkFBQyxHQUFDO29CQUFFQyxJQUFJLENBQUNDLFNBQVMsQ0FBQ3BCLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDOzs7Ozs7cUJBQU87WUFFM0NBLElBQUksS0FBSyxJQUFJLGtCQUFJLDhEQUFDcUIsR0FBQzswQkFBQywrQkFBNkI7Ozs7O3FCQUFJOztvQkFDeEQsQ0FDQTtDQUNKO0dBaENLeEIsYUFBYTtBQWtDbkIsK0RBQWVBLGFBQWEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29udHJvbGxlZC1kYXRlLmpzPzBjYjgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xyXG4vLyBub3cgYWJvdXQgY29udHJvbGxlZCBmb3JtISEhXHJcbmNvbnN0IGNvbnRyb2xsZWRGb3IgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbZm9ybSwgc2V0Zm9ybV0gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgbmFtZTonJyxcclxuICAgICAgICBlbWFpbDonJ1xyXG4gICAgfSlcclxuICAgIFxyXG4gICAgY29uc3QgW3Nob3csIHNldHNob3ddID0gdXNlU3RhdGUodHJ1ZSlcclxuICAgIGNvbnN0IGdldFZhbHVlID0gKCkgPT57XHJcbiAgICAgICBjb25zb2xlLmxvZyhmb3JtKSBcclxuICAgIH0gIFxyXG4gICAgXHJcbiAgICBjb25zdCBvbkNoYW5nZSA9IGV2ZW50ID0+e1xyXG4gICAgICAgIGNvbnN0IGZvcm1GaWVsdCA9IGV2ZW50LnRhcmdldC5uYW1lXHJcbiAgICAgICAgLy9ub3cgaSBhbSBzZXQgdmFsdWUgaG93IG9iamVjdCEhXHJcbiAgICAgICAgc2V0Zm9ybSh7XHJcbiAgICAgICAgW2Zvcm1GaWVsdF06IGV2ZW50LnRhcmdldC52YWx1ZVxyXG4gICAgfSlcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKCA8PlxyXG4gICAgPGgxPkNvbnRyb2xsZWQhPC9oMT5cclxuICAgICAgICAgTmFtZTpcclxuICAgICAgICAgPGlucHV0IHR5cGU9J3RleHQnIG5hbWU9J25hbWUnIHZhbHVlPXtmb3JtLm5hbWV9ICBvbkNoYW5nZT17b25DaGFuZ2V9ICAvPlxyXG4gICAgICAgICBFbWFpbDpcclxuICAgICAgICAgPGlucHV0IHR5cGU9J3RleHQnIG5hbWU9J25hbWUnIHZhbHVlPXtmb3JtLm5hbWV9ICBvbkNoYW5nZT17b25DaGFuZ2V9ICAvPlxyXG4gICAgICA8YnV0dG9uIHR5cGU9J2J1dHRvbicgb25DbGljaz17Z2V0VmFsdWV9ID5nZXQgdmFsdWUhPC9idXR0b24+XHJcbiAgICAgIDxidXR0b24gdHlwZT0nYnV0dG9uJyBvbkNsaWNrPXsoKSA9PiBzZXRzaG93KGN1cnIgPT4gIWN1cnIpfSA+SGlkZSBpbnB1dCE8L2J1dHRvbj5cclxuICAgICAgIDxwcmU+IHsgSlNPTi5zdHJpbmdpZnkoZm9ybSwgbnVsbCwgMil9PC9wcmU+XHJcblxyXG4gICAgICAge2Zvcm0gPT09ICdQSicgJiYgPHA+UGxlYXNlIGFkZGluZyB5b3VyIGRhdGUgaGVyZSE8L3A+fVxyXG4gIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb250cm9sbGVkRm9yIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJjb250cm9sbGVkRm9yIiwibmFtZSIsImVtYWlsIiwiZm9ybSIsInNldGZvcm0iLCJzaG93Iiwic2V0c2hvdyIsImdldFZhbHVlIiwiY29uc29sZSIsImxvZyIsIm9uQ2hhbmdlIiwiZXZlbnQiLCJmb3JtRmllbHQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImgxIiwiaW5wdXQiLCJ0eXBlIiwiYnV0dG9uIiwib25DbGljayIsImN1cnIiLCJwcmUiLCJKU09OIiwic3RyaW5naWZ5IiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/controlled-date.js\n");

/***/ })

});