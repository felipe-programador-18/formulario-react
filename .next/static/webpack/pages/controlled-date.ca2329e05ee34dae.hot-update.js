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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _this = undefined;\n\n\nvar _s = $RefreshSig$();\nvar uf = [\n    \"MG\",\n    \"RS\",\n    \"SC\"\n];\n// now about controlled form!!!\nvar controlledFor = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        name: \"\",\n        email: \"\",\n        uf: \"\"\n    }), form = ref[0], setform = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true), show = ref1[0], setshow = ref1[1];\n    var getValue = function() {\n        console.log(form);\n    };\n    var onChange = function(event) {\n        var formFielt = event.target.name;\n        //now i am set value how object!!\n        setform(function(curr) {\n            return _objectSpread({}, curr, _defineProperty({}, formFielt, event.target.value));\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Controlled!\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\macha\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\formu\\\\pages\\\\controlled-date.js\",\n                lineNumber: 34,\n                columnNumber: 5\n            }, _this),\n            \"Name:\",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                name: \"name\",\n                value: form.name,\n                onChange: onChange\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\macha\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\formu\\\\pages\\\\controlled-date.js\",\n                lineNumber: 36,\n                columnNumber: 10\n            }, _this),\n            \" \",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\macha\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\formu\\\\pages\\\\controlled-date.js\",\n                lineNumber: 36,\n                columnNumber: 84\n            }, _this),\n            \"Email:\",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                name: \"email\",\n                value: form.email,\n                onChange: onChange\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\macha\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\formu\\\\pages\\\\controlled-date.js\",\n                lineNumber: 38,\n                columnNumber: 10\n            }, _this),\n            \" \",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\macha\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\formu\\\\pages\\\\controlled-date.js\",\n                lineNumber: 38,\n                columnNumber: 86\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                type: \"button\",\n                onClick: getValue,\n                children: \"get value!\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\macha\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\formu\\\\pages\\\\controlled-date.js\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                type: \"button\",\n                onClick: function() {\n                    return setshow(function(curr) {\n                        return !curr;\n                    });\n                },\n                children: \"Hide input!\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\macha\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\formu\\\\pages\\\\controlled-date.js\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"pre\", {\n                children: [\n                    \" \",\n                    JSON.stringify(form, null, 2)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\macha\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\formu\\\\pages\\\\controlled-date.js\",\n                lineNumber: 43,\n                columnNumber: 8\n            }, _this),\n            form === \"PJ\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Please adding your date here!\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\macha\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\formu\\\\pages\\\\controlled-date.js\",\n                lineNumber: 45,\n                columnNumber: 26\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_s(controlledFor, \"20CFA43rZnw2kR7xDMhkZDjAo9M=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (controlledFor);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb250cm9sbGVkLWRhdGUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXFDOztBQUlyQyxJQUFNRSxFQUFFLEdBQUc7SUFBQyxJQUFJO0lBQUMsSUFBSTtJQUFDLElBQUk7Q0FBQztBQUUzQiwrQkFBK0I7QUFDL0IsSUFBTUMsYUFBYSxHQUFHLFdBQU07O0lBQ3hCLElBQXdCRixHQUl0QixHQUpzQkEsK0NBQVEsQ0FBQztRQUM3QkcsSUFBSSxFQUFDLEVBQUU7UUFDUEMsS0FBSyxFQUFDLEVBQUU7UUFDUkgsRUFBRSxFQUFDLEVBQUU7S0FDUixDQUFDLEVBWk4sSUFRZSxHQUFhRCxHQUl0QixHQUpTLEVBUmYsT0FRd0IsR0FBSUEsR0FJdEIsR0FKa0I7SUFNcEIsSUFBd0JBLElBQWMsR0FBZEEsK0NBQVEsQ0FBQyxJQUFJLENBQUMsRUFkMUMsSUFjZSxHQUFhQSxJQUFjLEdBQTNCLEVBZGYsT0Fjd0IsR0FBSUEsSUFBYyxHQUFsQjtJQUNwQixJQUFNUyxRQUFRLEdBQUcsV0FBSztRQUNuQkMsT0FBTyxDQUFDQyxHQUFHLENBQUNOLElBQUksQ0FBQztLQUNuQjtJQUVELElBQU1PLFFBQVEsR0FBR0MsU0FBQUEsS0FBSyxFQUFHO1FBQ3JCLElBQU1DLFNBQVMsR0FBR0QsS0FBSyxDQUFDRSxNQUFNLENBQUNaLElBQUk7UUFFbkMsaUNBQWlDO1FBQ2pDRyxPQUFPLENBQUVVLFNBQUFBLElBQUksRUFBRztZQUNaLE9BQU8sa0JBQ0FBLElBQUksRUFDUCxvQkFBQ0YsU0FBUyxFQUFHRCxLQUFLLENBQUNFLE1BQU0sQ0FBQ0UsS0FBSyxFQUNsQztTQUNKLENBQUM7S0FFTDtJQUVELHFCQUFTOzswQkFDVCw4REFBQ0MsSUFBRTswQkFBQyxhQUFXOzs7OztxQkFBSztZQUFBLE9BRWY7MEJBQUEsOERBQUNDLE9BQUs7Z0JBQUNDLElBQUksRUFBQyxNQUFNO2dCQUFDakIsSUFBSSxFQUFDLE1BQU07Z0JBQUNjLEtBQUssRUFBRVosSUFBSSxDQUFDRixJQUFJO2dCQUFHUyxRQUFRLEVBQUVBLFFBQVE7Ozs7O3FCQUFLO1lBQUEsR0FBQzswQkFBQSw4REFBQ1MsSUFBRTs7OztxQkFBRTtZQUFBLFFBRS9FOzBCQUFBLDhEQUFDRixPQUFLO2dCQUFDQyxJQUFJLEVBQUMsTUFBTTtnQkFBQ2pCLElBQUksRUFBQyxPQUFPO2dCQUFDYyxLQUFLLEVBQUVaLElBQUksQ0FBQ0QsS0FBSztnQkFBR1EsUUFBUSxFQUFFQSxRQUFROzs7OztxQkFBSztZQUFBLEdBQUM7MEJBQUEsOERBQUNTLElBQUU7Ozs7cUJBQUU7MEJBR3BGLDhEQUFDQyxRQUFNO2dCQUFDRixJQUFJLEVBQUMsUUFBUTtnQkFBQ0csT0FBTyxFQUFFZCxRQUFROzBCQUFHLFlBQVU7Ozs7O3FCQUFTOzBCQUM3RCw4REFBQ2EsUUFBTTtnQkFBQ0YsSUFBSSxFQUFDLFFBQVE7Z0JBQUNHLE9BQU8sRUFBRTsyQkFBTWYsT0FBTyxDQUFDUSxTQUFBQSxJQUFJOytCQUFJLENBQUNBLElBQUk7cUJBQUEsQ0FBQztpQkFBQTswQkFBRyxhQUFXOzs7OztxQkFBUzswQkFDakYsOERBQUNRLEtBQUc7O29CQUFDLEdBQUM7b0JBQUVDLElBQUksQ0FBQ0MsU0FBUyxDQUFDckIsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7Ozs7OztxQkFBTztZQUUzQ0EsSUFBSSxLQUFLLElBQUksa0JBQUksOERBQUNzQixHQUFDOzBCQUFDLCtCQUE2Qjs7Ozs7cUJBQUk7O29CQUN4RCxDQUNBO0NBQ0o7R0F4Q0t6QixhQUFhO0FBMENuQiwrREFBZUEsYUFBYSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9jb250cm9sbGVkLWRhdGUuanM/MGNiOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXHJcblxyXG5cclxuXHJcbmNvbnN0IHVmID0gWydNRycsJ1JTJywnU0MnXVxyXG5cclxuLy8gbm93IGFib3V0IGNvbnRyb2xsZWQgZm9ybSEhIVxyXG5jb25zdCBjb250cm9sbGVkRm9yID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW2Zvcm0sIHNldGZvcm1dID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIG5hbWU6JycsXHJcbiAgICAgICAgZW1haWw6JycsXHJcbiAgICAgICAgdWY6JydcclxuICAgIH0pXHJcbiAgICBcclxuICAgIGNvbnN0IFtzaG93LCBzZXRzaG93XSA9IHVzZVN0YXRlKHRydWUpXHJcbiAgICBjb25zdCBnZXRWYWx1ZSA9ICgpID0+e1xyXG4gICAgICAgY29uc29sZS5sb2coZm9ybSkgXHJcbiAgICB9ICBcclxuICAgIFxyXG4gICAgY29uc3Qgb25DaGFuZ2UgPSBldmVudCA9PntcclxuICAgICAgICBjb25zdCBmb3JtRmllbHQgPSBldmVudC50YXJnZXQubmFtZVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vbm93IGkgYW0gc2V0IHZhbHVlIGhvdyBvYmplY3QhIVxyXG4gICAgICAgIHNldGZvcm0oIGN1cnIgPT57XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5jdXJyLFxyXG4gICAgICAgICAgICAgICAgW2Zvcm1GaWVsdF06IGV2ZW50LnRhcmdldC52YWx1ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIFxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoIDw+XHJcbiAgICA8aDE+Q29udHJvbGxlZCE8L2gxPlxyXG4gICAgICAgICBOYW1lOlxyXG4gICAgICAgICA8aW5wdXQgdHlwZT0ndGV4dCcgbmFtZT0nbmFtZScgdmFsdWU9e2Zvcm0ubmFtZX0gIG9uQ2hhbmdlPXtvbkNoYW5nZX0gIC8+IDxici8+XHJcbiAgICAgICAgIEVtYWlsOlxyXG4gICAgICAgICA8aW5wdXQgdHlwZT0ndGV4dCcgbmFtZT0nZW1haWwnIHZhbHVlPXtmb3JtLmVtYWlsfSAgb25DaGFuZ2U9e29uQ2hhbmdlfSAgLz4gPGJyLz5cclxuICAgICAgICAgICAgXHJcblxyXG4gICAgICA8YnV0dG9uIHR5cGU9J2J1dHRvbicgb25DbGljaz17Z2V0VmFsdWV9ID5nZXQgdmFsdWUhPC9idXR0b24+XHJcbiAgICAgIDxidXR0b24gdHlwZT0nYnV0dG9uJyBvbkNsaWNrPXsoKSA9PiBzZXRzaG93KGN1cnIgPT4gIWN1cnIpfSA+SGlkZSBpbnB1dCE8L2J1dHRvbj5cclxuICAgICAgIDxwcmU+IHsgSlNPTi5zdHJpbmdpZnkoZm9ybSwgbnVsbCwgMil9PC9wcmU+XHJcblxyXG4gICAgICAge2Zvcm0gPT09ICdQSicgJiYgPHA+UGxlYXNlIGFkZGluZyB5b3VyIGRhdGUgaGVyZSE8L3A+fVxyXG4gIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb250cm9sbGVkRm9yIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1ZiIsImNvbnRyb2xsZWRGb3IiLCJuYW1lIiwiZW1haWwiLCJmb3JtIiwic2V0Zm9ybSIsInNob3ciLCJzZXRzaG93IiwiZ2V0VmFsdWUiLCJjb25zb2xlIiwibG9nIiwib25DaGFuZ2UiLCJldmVudCIsImZvcm1GaWVsdCIsInRhcmdldCIsImN1cnIiLCJ2YWx1ZSIsImgxIiwiaW5wdXQiLCJ0eXBlIiwiYnIiLCJidXR0b24iLCJvbkNsaWNrIiwicHJlIiwiSlNPTiIsInN0cmluZ2lmeSIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/controlled-date.js\n");

/***/ })

});