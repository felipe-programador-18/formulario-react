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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined;\n\n\nvar _s = $RefreshSig$();\n// now about controlled form!!!\nvar controlledFor = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        name: \"\"\n    }), form = ref[0], setform = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true), show = ref1[0], setshow = ref1[1];\n    var getValue = function() {\n        console.log(form);\n    };\n    var onChange = function(event) {\n        setform({\n            name: event.target.value\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Controlled!\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\macha\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\formu\\\\pages\\\\controlled-date.js\",\n                lineNumber: 19,\n                columnNumber: 5\n            }, _this),\n            \"Name:\",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                placeholder: \"Controlled\",\n                value: form.name,\n                onChange: onChange\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\macha\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\formu\\\\pages\\\\controlled-date.js\",\n                lineNumber: 21,\n                columnNumber: 10\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                type: \"button\",\n                onClick: getValue,\n                children: \"get value!\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\macha\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\formu\\\\pages\\\\controlled-date.js\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                type: \"button\",\n                onClick: function() {\n                    return setshow(function(curr) {\n                        return !curr;\n                    });\n                },\n                children: \"Hide input!\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\macha\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\formu\\\\pages\\\\controlled-date.js\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, _this),\n            value,\n            value === \"PJ\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Adding your Pj:\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\macha\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\formu\\\\pages\\\\controlled-date.js\",\n                lineNumber: 25,\n                columnNumber: 25\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_s(controlledFor, \"1I6YbMdU/C11W1uZ7PkjIDO7Dv4=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (controlledFor);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb250cm9sbGVkLWRhdGUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7QUFBcUM7O0FBQ3JDLCtCQUErQjtBQUMvQixJQUFNRSxhQUFhLEdBQUcsV0FBTTs7SUFDeEIsSUFBd0JELEdBRXRCLEdBRnNCQSwrQ0FBUSxDQUFDO1FBQzdCRSxJQUFJLEVBQUMsRUFBRTtLQUNWLENBQUMsRUFMTixJQUdlLEdBQWFGLEdBRXRCLEdBRlMsRUFIZixPQUd3QixHQUFJQSxHQUV0QixHQUZrQjtJQUlwQixJQUF3QkEsSUFBYyxHQUFkQSwrQ0FBUSxDQUFDLElBQUksQ0FBQyxFQVAxQyxJQU9lLEdBQWFBLElBQWMsR0FBM0IsRUFQZixPQU93QixHQUFJQSxJQUFjLEdBQWxCO0lBQ3BCLElBQU1PLFFBQVEsR0FBRyxXQUFLO1FBQ25CQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ04sSUFBSSxDQUFDO0tBQ25CO0lBRUQsSUFBTU8sUUFBUSxHQUFHQyxTQUFBQSxLQUFLLEVBQUc7UUFDckJQLE9BQU8sQ0FBQztZQUNSRixJQUFJLEVBQUVTLEtBQUssQ0FBQ0MsTUFBTSxDQUFDQyxLQUFLO1NBQUMsQ0FBQztLQUM3QjtJQUVELHFCQUFTOzswQkFDVCw4REFBQ0MsSUFBRTswQkFBQyxhQUFXOzs7OztxQkFBSztZQUFBLE9BRWY7MEJBQUEsOERBQUNDLE9BQUs7Z0JBQUNDLElBQUksRUFBQyxNQUFNO2dCQUFDQyxXQUFXLEVBQUMsWUFBWTtnQkFBQ0osS0FBSyxFQUFFVixJQUFJLENBQUNELElBQUk7Z0JBQUdRLFFBQVEsRUFBRUEsUUFBUTs7Ozs7cUJBQUs7MEJBQ3pGLDhEQUFDUSxRQUFNO2dCQUFDRixJQUFJLEVBQUMsUUFBUTtnQkFBQ0csT0FBTyxFQUFFWixRQUFROzBCQUFHLFlBQVU7Ozs7O3FCQUFTOzBCQUM3RCw4REFBQ1csUUFBTTtnQkFBQ0YsSUFBSSxFQUFDLFFBQVE7Z0JBQUNHLE9BQU8sRUFBRTsyQkFBTWIsT0FBTyxDQUFDYyxTQUFBQSxJQUFJOytCQUFJLENBQUNBLElBQUk7cUJBQUEsQ0FBQztpQkFBQTswQkFBRyxhQUFXOzs7OztxQkFBUztZQUNsRlAsS0FBSztZQUNMQSxLQUFLLEtBQUssSUFBSSxrQkFBSSw4REFBQ1EsR0FBQzswQkFBQyxpQkFBZTs7Ozs7cUJBQUk7O29CQUN6QyxDQUNBO0NBQ0o7R0F6QktwQixhQUFhO0FBMkJuQiwrREFBZUEsYUFBYSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9jb250cm9sbGVkLWRhdGUuanM/MGNiOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXHJcbi8vIG5vdyBhYm91dCBjb250cm9sbGVkIGZvcm0hISFcclxuY29uc3QgY29udHJvbGxlZEZvciA9ICgpID0+IHtcclxuICAgIGNvbnN0IFtmb3JtLCBzZXRmb3JtXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBuYW1lOicnXHJcbiAgICB9KVxyXG4gICAgXHJcbiAgICBjb25zdCBbc2hvdywgc2V0c2hvd10gPSB1c2VTdGF0ZSh0cnVlKVxyXG4gICAgY29uc3QgZ2V0VmFsdWUgPSAoKSA9PntcclxuICAgICAgIGNvbnNvbGUubG9nKGZvcm0pIFxyXG4gICAgfSAgXHJcbiAgICBcclxuICAgIGNvbnN0IG9uQ2hhbmdlID0gZXZlbnQgPT57XHJcbiAgICAgICAgc2V0Zm9ybSh7XHJcbiAgICAgICAgbmFtZTogZXZlbnQudGFyZ2V0LnZhbHVlfSlcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKCA8PlxyXG4gICAgPGgxPkNvbnRyb2xsZWQhPC9oMT5cclxuICAgICAgICAgTmFtZTpcclxuICAgICAgICAgPGlucHV0IHR5cGU9J3RleHQnIHBsYWNlaG9sZGVyPSdDb250cm9sbGVkJyB2YWx1ZT17Zm9ybS5uYW1lfSAgb25DaGFuZ2U9e29uQ2hhbmdlfSAgLz5cclxuICAgICAgPGJ1dHRvbiB0eXBlPSdidXR0b24nIG9uQ2xpY2s9e2dldFZhbHVlfSA+Z2V0IHZhbHVlITwvYnV0dG9uPlxyXG4gICAgICA8YnV0dG9uIHR5cGU9J2J1dHRvbicgb25DbGljaz17KCkgPT4gc2V0c2hvdyhjdXJyID0+ICFjdXJyKX0gPkhpZGUgaW5wdXQhPC9idXR0b24+XHJcbiAgICAge3ZhbHVlfVxyXG4gICAgIHt2YWx1ZSA9PT0gXCJQSlwiICYmIDxwPkFkZGluZyB5b3VyIFBqOjwvcD59XHJcbiAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbnRyb2xsZWRGb3IiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsImNvbnRyb2xsZWRGb3IiLCJuYW1lIiwiZm9ybSIsInNldGZvcm0iLCJzaG93Iiwic2V0c2hvdyIsImdldFZhbHVlIiwiY29uc29sZSIsImxvZyIsIm9uQ2hhbmdlIiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImgxIiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJidXR0b24iLCJvbkNsaWNrIiwiY3VyciIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/controlled-date.js\n");

/***/ })

});