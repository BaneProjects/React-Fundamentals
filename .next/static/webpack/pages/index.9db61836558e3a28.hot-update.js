/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/app.js":
/*!***************************!*\
  !*** ./components/app.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"navigationContext\": function() { return /* binding */ navigationContext; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _banner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./banner */ \"./components/banner.js\");\n/* harmony import */ var _helpers_navValues__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/navValues */ \"./helpers/navValues.js\");\n/* harmony import */ var _helpers_navValues__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_helpers_navValues__WEBPACK_IMPORTED_MODULE_3__);\nvar _this = undefined;\n\n// import { useState } from \"react\";\n\n\n// import HouseList from \"./houseList\";\n// import House from \"./house\";\n\nvar _s = $RefreshSig$();\nvar navigationContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createContext((_helpers_navValues__WEBPACK_IMPORTED_MODULE_3___default().home));\nvar App = function() {\n    _s();\n    var navigate = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function(navTo) {\n        setNav(navTo);\n    }, []);\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)((_helpers_navValues__WEBPACK_IMPORTED_MODULE_3___default().home)), nav = ref[0], setNav = ref[1];\n    //  const [selectedHouse, setSelectedHouse] = useState();\n    //  const setSelectedHouseWrapper = (house) => {\n    //   if(house instanceof Object)setSelectedHouse(house)\n    //  }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(navigationContext.Provider, {\n        value: nav,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_banner__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: \"Providing houses all over the world\"\n            }, void 0, false, {\n                fileName: \"C:\\\\React\\\\NewReactApp\\\\ps-react-fundamentals\\\\components\\\\app.js\",\n                lineNumber: 23,\n                columnNumber: 9\n            }, _this)\n        }, void 0, false, {\n            fileName: \"C:\\\\React\\\\NewReactApp\\\\ps-react-fundamentals\\\\components\\\\app.js\",\n            lineNumber: 22,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"C:\\\\React\\\\NewReactApp\\\\ps-react-fundamentals\\\\components\\\\app.js\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, _this);\n};\n_s(App, \"h+L59nSczR2GD8x7GTPw2gPi35A=\");\n_c = App;\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\nvar _c;\n$RefreshReg$(_c, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2FwcC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUNBOztBQURBLG9DQUFvQztBQUNpQjtBQUN2QjtBQUM5Qix1Q0FBdUM7QUFDdkMsK0JBQStCO0FBQ2M7O0FBQzdDLElBQU1LLGlCQUFpQixpQkFBR0wsMERBQW1CLENBQUNJLGdFQUFjLENBQUM7QUFDN0QsSUFBTUksR0FBRyxHQUFHLFdBQU07O0lBQ2hCLElBQU1DLFFBQVEsR0FBRVIsa0RBQVcsQ0FBQyxTQUFDUyxLQUFLLEVBQUs7UUFDckNDLE1BQU0sQ0FBQ0QsS0FBSyxDQUFDLENBQUM7S0FDZixFQUFDLEVBQUUsQ0FBQztJQUNOLElBQW9CUixHQUF3QixHQUF4QkEsK0NBQVEsQ0FBQ0UsZ0VBQWMsQ0FBQyxFQUFyQ1EsR0FBRyxHQUFVVixHQUF3QixHQUFsQyxFQUFFUyxNQUFNLEdBQUVULEdBQXdCLEdBQTFCO0lBQ2pCLHlEQUF5RDtJQUN6RCxnREFBZ0Q7SUFDaEQsdURBQXVEO0lBQ3ZELEtBQUs7SUFHTCxxQkFFRSw4REFBQ0csaUJBQWlCLENBQUNRLFFBQVE7UUFBQ0MsS0FBSyxFQUFFRixHQUFHO2tCQUNwQyw0RUFBQ1QsK0NBQU07c0JBQ0wsNEVBQUNZLEtBQUc7MEJBQUMscUNBQW1DOzs7OztxQkFBTTs7Ozs7aUJBQ3ZDOzs7OzthQUNvQixDQUUvQjtDQUNIO0dBcEJLUCxHQUFHO0FBQUhBLEtBQUFBLEdBQUc7QUFxQmtCO0FBQzNCLCtEQUFlQSxHQUFHLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hcHAuanM/YWE3YSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBCYW5uZXIgZnJvbSBcIi4vYmFubmVyXCI7XHJcbi8vIGltcG9ydCBIb3VzZUxpc3QgZnJvbSBcIi4vaG91c2VMaXN0XCI7XHJcbi8vIGltcG9ydCBIb3VzZSBmcm9tIFwiLi9ob3VzZVwiO1xyXG5pbXBvcnQgbmF2VmFsdWVzIGZyb20gXCIuLi9oZWxwZXJzL25hdlZhbHVlc1wiO1xyXG5jb25zdCBuYXZpZ2F0aW9uQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQobmF2VmFsdWVzLmhvbWUpXHJcbmNvbnN0IEFwcCA9ICgpID0+IHtcclxuICBjb25zdCBuYXZpZ2F0ZSA9dXNlQ2FsbGJhY2soKG5hdlRvKSA9PiB7XHJcbiAgICBzZXROYXYobmF2VG8pO1xyXG4gIH0sW10pXHJcbiBjb25zdCBbbmF2LCBzZXROYXZdPXVzZVN0YXRlKG5hdlZhbHVlcy5ob21lKVxyXG4gIC8vICBjb25zdCBbc2VsZWN0ZWRIb3VzZSwgc2V0U2VsZWN0ZWRIb3VzZV0gPSB1c2VTdGF0ZSgpO1xyXG4gIC8vICBjb25zdCBzZXRTZWxlY3RlZEhvdXNlV3JhcHBlciA9IChob3VzZSkgPT4ge1xyXG4gIC8vICAgaWYoaG91c2UgaW5zdGFuY2VvZiBPYmplY3Qpc2V0U2VsZWN0ZWRIb3VzZShob3VzZSlcclxuICAvLyAgfVxyXG5cclxuICBcclxuICByZXR1cm4gKFxyXG4gICAgXHJcbiAgICA8bmF2aWdhdGlvbkNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e25hdn0+XHJcbiAgICAgIDxCYW5uZXI+XHJcbiAgICAgICAgPGRpdj5Qcm92aWRpbmcgaG91c2VzIGFsbCBvdmVyIHRoZSB3b3JsZDwvZGl2PlxyXG4gICAgICA8L0Jhbm5lcj5cclxuICAgICAgPC9uYXZpZ2F0aW9uQ29udGV4dC5Qcm92aWRlcj5cclxuICAgIFxyXG4gICk7XHJcbn07XHJcbmV4cG9ydCB7bmF2aWdhdGlvbkNvbnRleHR9O1xyXG5leHBvcnQgZGVmYXVsdCBBcHA7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUNhbGxiYWNrIiwidXNlU3RhdGUiLCJCYW5uZXIiLCJuYXZWYWx1ZXMiLCJuYXZpZ2F0aW9uQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJob21lIiwiQXBwIiwibmF2aWdhdGUiLCJuYXZUbyIsInNldE5hdiIsIm5hdiIsIlByb3ZpZGVyIiwidmFsdWUiLCJkaXYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/app.js\n"));

/***/ }),

/***/ "./helpers/navValues.js":
/*!******************************!*\
  !*** ./helpers/navValues.js ***!
  \******************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {



;
    // Wrapped in an IIFE to avoid polluting the global scope
    ;
    (function () {
        var _a, _b;
        // Legacy CSS implementations will `eval` browser code in a Node.js context
        // to extract CSS. For backwards compatibility, we need to check we're in a
        // browser context before continuing.
        if (typeof self !== 'undefined' &&
            // AMP / No-JS mode does not inject these helpers:
            '$RefreshHelpers$' in self) {
            // @ts-ignore __webpack_module__ is global
            var currentExports = module.exports;
            // @ts-ignore __webpack_module__ is global
            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
            // This cannot happen in MainTemplate because the exports mismatch between
            // templating and execution.
            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
            // A module can be accepted automatically based on its exports, e.g. when
            // it is a Refresh Boundary.
            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
                // Save the previous exports on update so we can compare the boundary
                // signatures.
                module.hot.dispose(function (data) {
                    data.prevExports = currentExports;
                });
                // Unconditionally accept an update to this module, we'll check if it's
                // still a Refresh Boundary later.
                // @ts-ignore importMeta is replaced in the loader
                module.hot.accept();
                // This field is set when the previous version of this module was a
                // Refresh Boundary, letting us know we need to check for invalidation or
                // enqueue an update.
                if (prevExports !== null) {
                    // A boundary can become ineligible if its exports are incompatible
                    // with the previous exports.
                    //
                    // For example, if you add/remove/change exports, we'll want to
                    // re-execute the importing modules, and force those components to
                    // re-render. Similarly, if you convert a class component to a
                    // function, we want to invalidate the boundary.
                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                        module.hot.invalidate();
                    }
                    else {
                        self.$RefreshHelpers$.scheduleUpdate();
                    }
                }
            }
            else {
                // Since we just executed the code for the module, it's possible that the
                // new exports made it ineligible for being a boundary.
                // We only care about the case when we were _previously_ a boundary,
                // because we already accepted this update (accidental side effect).
                var isNoLongerABoundary = prevExports !== null;
                if (isNoLongerABoundary) {
                    module.hot.invalidate();
                }
            }
        }
    })();


/***/ })

});