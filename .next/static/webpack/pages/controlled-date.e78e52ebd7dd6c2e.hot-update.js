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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _this = undefined;\n\n\nvar _s = $RefreshSig$();\nvar uf = [\n    \"MG\",\n    \"RS\",\n    \"SC\"\n];\n// now about controlled form!!!\nvar controlledFor = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        name: \"\",\n        email: \"\",\n        uf: \"\"\n    }), form = ref[0], setform = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true), show = ref1[0], setshow = ref1[1];\n    var getValue = function() {\n        console.log(form);\n    };\n    var onChange = function(event) {\n        var formFielt = event.target.name;\n        //now i am set value how object!!\n        setform(function(curr) {\n            return _objectSpread({}, curr, _defineProperty({}, formFielt, event.target.value));\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Controlled!\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\macha\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\formu\\\\pages\\\\controlled-date.js\",\n                lineNumber: 34,\n                columnNumber: 5\n            }, _this),\n            \"Name:\",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                name: \"name\",\n                value: form.name,\n                onChange: onChange\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\macha\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\formu\\\\pages\\\\controlled-date.js\",\n                lineNumber: 36,\n                columnNumber: 10\n            }, _this),\n            \" \",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\macha\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\formu\\\\pages\\\\controlled-date.js\",\n                lineNumber: 36,\n                columnNumber: 84\n            }, _this),\n            \"Email:\",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                name: \"email\",\n                value: form.email,\n                onChange: onChange\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\macha\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\formu\\\\pages\\\\controlled-date.js\",\n                lineNumber: 38,\n                columnNumber: 10\n            }, _this),\n            \" \",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\macha\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\formu\\\\pages\\\\controlled-date.js\",\n                lineNumber: 38,\n                columnNumber: 86\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\macha\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\formu\\\\pages\\\\controlled-date.js\",\n                lineNumber: 39,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                type: \"button\",\n                onClick: getValue,\n                children: \"get value!\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\macha\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\formu\\\\pages\\\\controlled-date.js\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                type: \"button\",\n                onClick: function() {\n                    return setshow(function(curr) {\n                        return !curr;\n                    });\n                },\n                children: \"Hide input!\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\macha\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\formu\\\\pages\\\\controlled-date.js\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"pre\", {\n                children: [\n                    \" \",\n                    JSON.stringify(form, null, 2)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\macha\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\formu\\\\pages\\\\controlled-date.js\",\n                lineNumber: 45,\n                columnNumber: 8\n            }, _this),\n            form === \"PJ\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Please adding your date here!\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\macha\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\formu\\\\pages\\\\controlled-date.js\",\n                lineNumber: 47,\n                columnNumber: 26\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_s(controlledFor, \"20CFA43rZnw2kR7xDMhkZDjAo9M=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (controlledFor);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb250cm9sbGVkLWRhdGUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXFDOztBQUlyQyxJQUFNRSxFQUFFLEdBQUc7SUFBQyxJQUFJO0lBQUMsSUFBSTtJQUFDLElBQUk7Q0FBQztBQUUzQiwrQkFBK0I7QUFDL0IsSUFBTUMsYUFBYSxHQUFHLFdBQU07O0lBQ3hCLElBQXdCRixHQUl0QixHQUpzQkEsK0NBQVEsQ0FBQztRQUM3QkcsSUFBSSxFQUFDLEVBQUU7UUFDUEMsS0FBSyxFQUFDLEVBQUU7UUFDUkgsRUFBRSxFQUFDLEVBQUU7S0FDUixDQUFDLEVBWk4sSUFRZSxHQUFhRCxHQUl0QixHQUpTLEVBUmYsT0FRd0IsR0FBSUEsR0FJdEIsR0FKa0I7SUFNcEIsSUFBd0JBLElBQWMsR0FBZEEsK0NBQVEsQ0FBQyxJQUFJLENBQUMsRUFkMUMsSUFjZSxHQUFhQSxJQUFjLEdBQTNCLEVBZGYsT0Fjd0IsR0FBSUEsSUFBYyxHQUFsQjtJQUNwQixJQUFNUyxRQUFRLEdBQUcsV0FBSztRQUNuQkMsT0FBTyxDQUFDQyxHQUFHLENBQUNOLElBQUksQ0FBQztLQUNuQjtJQUVELElBQU1PLFFBQVEsR0FBR0MsU0FBQUEsS0FBSyxFQUFHO1FBQ3JCLElBQU1DLFNBQVMsR0FBR0QsS0FBSyxDQUFDRSxNQUFNLENBQUNaLElBQUk7UUFFbkMsaUNBQWlDO1FBQ2pDRyxPQUFPLENBQUVVLFNBQUFBLElBQUksRUFBRztZQUNaLE9BQU8sa0JBQ0FBLElBQUksRUFDUCxvQkFBQ0YsU0FBUyxFQUFHRCxLQUFLLENBQUNFLE1BQU0sQ0FBQ0UsS0FBSyxFQUNsQztTQUNKLENBQUM7S0FFTDtJQUVELHFCQUFTOzswQkFDVCw4REFBQ0MsSUFBRTswQkFBQyxhQUFXOzs7OztxQkFBSztZQUFBLE9BRWY7MEJBQUEsOERBQUNDLE9BQUs7Z0JBQUNDLElBQUksRUFBQyxNQUFNO2dCQUFDakIsSUFBSSxFQUFDLE1BQU07Z0JBQUNjLEtBQUssRUFBRVosSUFBSSxDQUFDRixJQUFJO2dCQUFHUyxRQUFRLEVBQUVBLFFBQVE7Ozs7O3FCQUFLO1lBQUEsR0FBQzswQkFBQSw4REFBQ1MsSUFBRTs7OztxQkFBRTtZQUFBLFFBRS9FOzBCQUFBLDhEQUFDRixPQUFLO2dCQUFDQyxJQUFJLEVBQUMsTUFBTTtnQkFBQ2pCLElBQUksRUFBQyxPQUFPO2dCQUFDYyxLQUFLLEVBQUVaLElBQUksQ0FBQ0QsS0FBSztnQkFBR1EsUUFBUSxFQUFFQSxRQUFROzs7OztxQkFBSztZQUFBLEdBQUM7MEJBQUEsOERBQUNTLElBQUU7Ozs7cUJBQUU7MEJBQ2xGLDhEQUFDQyxRQUFNOzs7O3FCQUVFOzBCQUVYLDhEQUFDQyxRQUFNO2dCQUFDSCxJQUFJLEVBQUMsUUFBUTtnQkFBQ0ksT0FBTyxFQUFFZixRQUFROzBCQUFHLFlBQVU7Ozs7O3FCQUFTOzBCQUM3RCw4REFBQ2MsUUFBTTtnQkFBQ0gsSUFBSSxFQUFDLFFBQVE7Z0JBQUNJLE9BQU8sRUFBRTsyQkFBTWhCLE9BQU8sQ0FBQ1EsU0FBQUEsSUFBSTsrQkFBSSxDQUFDQSxJQUFJO3FCQUFBLENBQUM7aUJBQUE7MEJBQUcsYUFBVzs7Ozs7cUJBQVM7MEJBQ2pGLDhEQUFDUyxLQUFHOztvQkFBQyxHQUFDO29CQUFFQyxJQUFJLENBQUNDLFNBQVMsQ0FBQ3RCLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDOzs7Ozs7cUJBQU87WUFFM0NBLElBQUksS0FBSyxJQUFJLGtCQUFJLDhEQUFDdUIsR0FBQzswQkFBQywrQkFBNkI7Ozs7O3FCQUFJOztvQkFDeEQsQ0FDQTtDQUNKO0dBMUNLMUIsYUFBYTtBQTRDbkIsK0RBQWVBLGFBQWEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29udHJvbGxlZC1kYXRlLmpzPzBjYjgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xyXG5cclxuXHJcblxyXG5jb25zdCB1ZiA9IFsnTUcnLCdSUycsJ1NDJ11cclxuXHJcbi8vIG5vdyBhYm91dCBjb250cm9sbGVkIGZvcm0hISFcclxuY29uc3QgY29udHJvbGxlZEZvciA9ICgpID0+IHtcclxuICAgIGNvbnN0IFtmb3JtLCBzZXRmb3JtXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBuYW1lOicnLFxyXG4gICAgICAgIGVtYWlsOicnLFxyXG4gICAgICAgIHVmOicnXHJcbiAgICB9KVxyXG4gICAgXHJcbiAgICBjb25zdCBbc2hvdywgc2V0c2hvd10gPSB1c2VTdGF0ZSh0cnVlKVxyXG4gICAgY29uc3QgZ2V0VmFsdWUgPSAoKSA9PntcclxuICAgICAgIGNvbnNvbGUubG9nKGZvcm0pIFxyXG4gICAgfSAgXHJcbiAgICBcclxuICAgIGNvbnN0IG9uQ2hhbmdlID0gZXZlbnQgPT57XHJcbiAgICAgICAgY29uc3QgZm9ybUZpZWx0ID0gZXZlbnQudGFyZ2V0Lm5hbWVcclxuICAgICAgICBcclxuICAgICAgICAvL25vdyBpIGFtIHNldCB2YWx1ZSBob3cgb2JqZWN0ISFcclxuICAgICAgICBzZXRmb3JtKCBjdXJyID0+e1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uY3VycixcclxuICAgICAgICAgICAgICAgIFtmb3JtRmllbHRdOiBldmVudC50YXJnZXQudmFsdWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICBcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKCA8PlxyXG4gICAgPGgxPkNvbnRyb2xsZWQhPC9oMT5cclxuICAgICAgICAgTmFtZTpcclxuICAgICAgICAgPGlucHV0IHR5cGU9J3RleHQnIG5hbWU9J25hbWUnIHZhbHVlPXtmb3JtLm5hbWV9ICBvbkNoYW5nZT17b25DaGFuZ2V9ICAvPiA8YnIvPlxyXG4gICAgICAgICBFbWFpbDpcclxuICAgICAgICAgPGlucHV0IHR5cGU9J3RleHQnIG5hbWU9J2VtYWlsJyB2YWx1ZT17Zm9ybS5lbWFpbH0gIG9uQ2hhbmdlPXtvbkNoYW5nZX0gIC8+IDxici8+XHJcbiAgICAgICAgPHNlbGVjdD5cclxuICAgICAgICAgICAgIFxyXG4gICAgICAgIDwvc2VsZWN0PiAgICBcclxuICAgICAgICBcclxuICAgICAgPGJ1dHRvbiB0eXBlPSdidXR0b24nIG9uQ2xpY2s9e2dldFZhbHVlfSA+Z2V0IHZhbHVlITwvYnV0dG9uPlxyXG4gICAgICA8YnV0dG9uIHR5cGU9J2J1dHRvbicgb25DbGljaz17KCkgPT4gc2V0c2hvdyhjdXJyID0+ICFjdXJyKX0gPkhpZGUgaW5wdXQhPC9idXR0b24+XHJcbiAgICAgICA8cHJlPiB7IEpTT04uc3RyaW5naWZ5KGZvcm0sIG51bGwsIDIpfTwvcHJlPlxyXG5cclxuICAgICAgIHtmb3JtID09PSAnUEonICYmIDxwPlBsZWFzZSBhZGRpbmcgeW91ciBkYXRlIGhlcmUhPC9wPn1cclxuICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29udHJvbGxlZEZvciJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidWYiLCJjb250cm9sbGVkRm9yIiwibmFtZSIsImVtYWlsIiwiZm9ybSIsInNldGZvcm0iLCJzaG93Iiwic2V0c2hvdyIsImdldFZhbHVlIiwiY29uc29sZSIsImxvZyIsIm9uQ2hhbmdlIiwiZXZlbnQiLCJmb3JtRmllbHQiLCJ0YXJnZXQiLCJjdXJyIiwidmFsdWUiLCJoMSIsImlucHV0IiwidHlwZSIsImJyIiwic2VsZWN0IiwiYnV0dG9uIiwib25DbGljayIsInByZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/controlled-date.js\n");

/***/ })

});