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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined;\n\n\nvar _s = $RefreshSig$();\n// now about controlled form!!!\nvar controlledFor = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        name: \"\",\n        email: \"\"\n    }), form = ref[0], setform = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true), show = ref1[0], setshow = ref1[1];\n    var getValue = function() {\n        console.log(form);\n    };\n    var onChange = function(event) {\n        console.log(event.target.name);\n        //now i am set value how object!!\n        setform({\n            name: event.target.value\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Controlled!\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\macha\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\formu\\\\pages\\\\controlled-date.js\",\n                lineNumber: 23,\n                columnNumber: 5\n            }, _this),\n            \"Name:\",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                name: \"name\",\n                value: form.name,\n                onChange: onChange\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\macha\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\formu\\\\pages\\\\controlled-date.js\",\n                lineNumber: 25,\n                columnNumber: 10\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                type: \"button\",\n                onClick: getValue,\n                children: \"get value!\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\macha\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\formu\\\\pages\\\\controlled-date.js\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                type: \"button\",\n                onClick: function() {\n                    return setshow(function(curr) {\n                        return !curr;\n                    });\n                },\n                children: \"Hide input!\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\macha\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\formu\\\\pages\\\\controlled-date.js\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"pre\", {\n                children: [\n                    \" \",\n                    JSON.stringify(form, null, 2)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\macha\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\formu\\\\pages\\\\controlled-date.js\",\n                lineNumber: 28,\n                columnNumber: 8\n            }, _this),\n            form === \"PJ\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Please adding your date here!\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\macha\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\formu\\\\pages\\\\controlled-date.js\",\n                lineNumber: 30,\n                columnNumber: 26\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_s(controlledFor, \"O24YRSBO6sl9r4vCgiD3F+JlDOM=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (controlledFor);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb250cm9sbGVkLWRhdGUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7QUFBcUM7O0FBQ3JDLCtCQUErQjtBQUMvQixJQUFNRSxhQUFhLEdBQUcsV0FBTTs7SUFDeEIsSUFBd0JELEdBR3RCLEdBSHNCQSwrQ0FBUSxDQUFDO1FBQzdCRSxJQUFJLEVBQUMsRUFBRTtRQUNQQyxLQUFLLEVBQUMsRUFBRTtLQUNYLENBQUMsRUFOTixJQUdlLEdBQWFILEdBR3RCLEdBSFMsRUFIZixPQUd3QixHQUFJQSxHQUd0QixHQUhrQjtJQUtwQixJQUF3QkEsSUFBYyxHQUFkQSwrQ0FBUSxDQUFDLElBQUksQ0FBQyxFQVIxQyxJQVFlLEdBQWFBLElBQWMsR0FBM0IsRUFSZixPQVF3QixHQUFJQSxJQUFjLEdBQWxCO0lBQ3BCLElBQU1RLFFBQVEsR0FBRyxXQUFLO1FBQ25CQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ04sSUFBSSxDQUFDO0tBQ25CO0lBRUQsSUFBTU8sUUFBUSxHQUFHQyxTQUFBQSxLQUFLLEVBQUc7UUFDbkJILE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRSxLQUFLLENBQUNDLE1BQU0sQ0FBQ1gsSUFBSSxDQUFDO1FBQ2hDLGlDQUFpQztRQUNqQ0csT0FBTyxDQUFDO1lBQ1JILElBQUksRUFBRVUsS0FBSyxDQUFDQyxNQUFNLENBQUNDLEtBQUs7U0FDM0IsQ0FBQztLQUNEO0lBRUQscUJBQVM7OzBCQUNULDhEQUFDQyxJQUFFOzBCQUFDLGFBQVc7Ozs7O3FCQUFLO1lBQUEsT0FFZjswQkFBQSw4REFBQ0MsT0FBSztnQkFBQ0MsSUFBSSxFQUFDLE1BQU07Z0JBQUNmLElBQUksRUFBQyxNQUFNO2dCQUFDWSxLQUFLLEVBQUVWLElBQUksQ0FBQ0YsSUFBSTtnQkFBR1MsUUFBUSxFQUFFQSxRQUFROzs7OztxQkFBSzswQkFDNUUsOERBQUNPLFFBQU07Z0JBQUNELElBQUksRUFBQyxRQUFRO2dCQUFDRSxPQUFPLEVBQUVYLFFBQVE7MEJBQUcsWUFBVTs7Ozs7cUJBQVM7MEJBQzdELDhEQUFDVSxRQUFNO2dCQUFDRCxJQUFJLEVBQUMsUUFBUTtnQkFBQ0UsT0FBTyxFQUFFOzJCQUFNWixPQUFPLENBQUNhLFNBQUFBLElBQUk7K0JBQUksQ0FBQ0EsSUFBSTtxQkFBQSxDQUFDO2lCQUFBOzBCQUFHLGFBQVc7Ozs7O3FCQUFTOzBCQUNqRiw4REFBQ0MsS0FBRzs7b0JBQUMsR0FBQztvQkFBRUMsSUFBSSxDQUFDQyxTQUFTLENBQUNuQixJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQzs7Ozs7O3FCQUFPO1lBRTNDQSxJQUFJLEtBQUssSUFBSSxrQkFBSSw4REFBQ29CLEdBQUM7MEJBQUMsK0JBQTZCOzs7OztxQkFBSTs7b0JBQ3hELENBQ0E7Q0FDSjtHQTlCS3ZCLGFBQWE7QUFnQ25CLCtEQUFlQSxhQUFhIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2NvbnRyb2xsZWQtZGF0ZS5qcz8wY2I4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tICdyZWFjdCdcclxuLy8gbm93IGFib3V0IGNvbnRyb2xsZWQgZm9ybSEhIVxyXG5jb25zdCBjb250cm9sbGVkRm9yID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW2Zvcm0sIHNldGZvcm1dID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIG5hbWU6JycsXHJcbiAgICAgICAgZW1haWw6JydcclxuICAgIH0pXHJcbiAgICBcclxuICAgIGNvbnN0IFtzaG93LCBzZXRzaG93XSA9IHVzZVN0YXRlKHRydWUpXHJcbiAgICBjb25zdCBnZXRWYWx1ZSA9ICgpID0+e1xyXG4gICAgICAgY29uc29sZS5sb2coZm9ybSkgXHJcbiAgICB9ICBcclxuICAgIFxyXG4gICAgY29uc3Qgb25DaGFuZ2UgPSBldmVudCA9PntcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGV2ZW50LnRhcmdldC5uYW1lKVxyXG4gICAgICAgIC8vbm93IGkgYW0gc2V0IHZhbHVlIGhvdyBvYmplY3QhIVxyXG4gICAgICAgIHNldGZvcm0oe1xyXG4gICAgICAgIG5hbWU6IGV2ZW50LnRhcmdldC52YWx1ZVxyXG4gICAgfSlcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKCA8PlxyXG4gICAgPGgxPkNvbnRyb2xsZWQhPC9oMT5cclxuICAgICAgICAgTmFtZTpcclxuICAgICAgICAgPGlucHV0IHR5cGU9J3RleHQnIG5hbWU9J25hbWUnIHZhbHVlPXtmb3JtLm5hbWV9ICBvbkNoYW5nZT17b25DaGFuZ2V9ICAvPlxyXG4gICAgICA8YnV0dG9uIHR5cGU9J2J1dHRvbicgb25DbGljaz17Z2V0VmFsdWV9ID5nZXQgdmFsdWUhPC9idXR0b24+XHJcbiAgICAgIDxidXR0b24gdHlwZT0nYnV0dG9uJyBvbkNsaWNrPXsoKSA9PiBzZXRzaG93KGN1cnIgPT4gIWN1cnIpfSA+SGlkZSBpbnB1dCE8L2J1dHRvbj5cclxuICAgICAgIDxwcmU+IHsgSlNPTi5zdHJpbmdpZnkoZm9ybSwgbnVsbCwgMil9PC9wcmU+XHJcblxyXG4gICAgICAge2Zvcm0gPT09ICdQSicgJiYgPHA+UGxlYXNlIGFkZGluZyB5b3VyIGRhdGUgaGVyZSE8L3A+fVxyXG4gIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb250cm9sbGVkRm9yIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJjb250cm9sbGVkRm9yIiwibmFtZSIsImVtYWlsIiwiZm9ybSIsInNldGZvcm0iLCJzaG93Iiwic2V0c2hvdyIsImdldFZhbHVlIiwiY29uc29sZSIsImxvZyIsIm9uQ2hhbmdlIiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImgxIiwiaW5wdXQiLCJ0eXBlIiwiYnV0dG9uIiwib25DbGljayIsImN1cnIiLCJwcmUiLCJKU09OIiwic3RyaW5naWZ5IiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/controlled-date.js\n");

/***/ })

});