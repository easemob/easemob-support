(this["webpackJsonp"] = this["webpackJsonp"] || []).push([["app-service"],[
/* 0 */
/*!************************************************************************!*\
  !*** /Users/hfp/Documents/HBuilderProjects/cunjin-socket-test/main.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 1);\nvar _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 2));\n__webpack_require__(/*! uni-pages */ 6);\nvar _App = _interopRequireDefault(__webpack_require__(/*! ./App */ 50));\nvar _store = _interopRequireDefault(__webpack_require__(/*! ./store */ 46));\nvar _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 26));\n__webpack_require__(/*! ./uni.promisify.adaptor */ 60);\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n_vue.default.config.productionTip = false;\n_vue.default.prototype.$store = _store.default;\n_App.default.mpType = 'app';\nvar app = new _vue.default(_objectSpread({}, _App.default));\napp.$mount();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vbWFpbi5qcyJdLCJuYW1lcyI6WyJWdWUiLCJjb25maWciLCJwcm9kdWN0aW9uVGlwIiwicHJvdG90eXBlIiwiJHN0b3JlIiwic3RvcmUiLCJBcHAiLCJtcFR5cGUiLCJhcHAiLCIkbW91bnQiXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUFtQjtBQUNuQjtBQUdBO0FBQ0E7QUFBZ0M7QUFBQTtBQUNoQ0EsWUFBRyxDQUFDQyxNQUFNLENBQUNDLGFBQWEsR0FBRyxLQUFLO0FBQ2hDRixZQUFHLENBQUNHLFNBQVMsQ0FBQ0MsTUFBTSxHQUFHQyxjQUFLO0FBQzVCQyxZQUFHLENBQUNDLE1BQU0sR0FBRyxLQUFLO0FBQ2xCLElBQU1DLEdBQUcsR0FBRyxJQUFJUixZQUFHLG1CQUNkTSxZQUFHLEVBQ047QUFDRkUsR0FBRyxDQUFDQyxNQUFNLEVBQUUiLCJmaWxlIjoiMC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAndW5pLXBhZ2VzJztpbXBvcnQgQXBwIGZyb20gJy4vQXBwJ1xuaW1wb3J0IHN0b3JlIGZyb20gJy4vc3RvcmUnO1xuXG5cbmltcG9ydCBWdWUgZnJvbSAndnVlJ1xuaW1wb3J0ICcuL3VuaS5wcm9taXNpZnkuYWRhcHRvcidcblZ1ZS5jb25maWcucHJvZHVjdGlvblRpcCA9IGZhbHNlXG5WdWUucHJvdG90eXBlLiRzdG9yZSA9IHN0b3JlO1xuQXBwLm1wVHlwZSA9ICdhcHAnXG5jb25zdCBhcHAgPSBuZXcgVnVlKHtcbiAgLi4uQXBwXG59KVxuYXBwLiRtb3VudCgpXG5cblxuXG5cblxuXG5cblxuXG5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}
module.exports = _interopRequireDefault, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 2 */
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toPropertyKey = __webpack_require__(/*! ./toPropertyKey.js */ 3);
function _defineProperty(obj, key, value) {
  key = toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
module.exports = _defineProperty, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 3 */
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toPropertyKey.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ./typeof.js */ 4)["default"];
var toPrimitive = __webpack_require__(/*! ./toPrimitive.js */ 5);
function _toPropertyKey(arg) {
  var key = toPrimitive(arg, "string");
  return _typeof(key) === "symbol" ? key : String(key);
}
module.exports = _toPropertyKey, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 4 */
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  return (module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports), _typeof(obj);
}
module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 5 */
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toPrimitive.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ./typeof.js */ 4)["default"];
function _toPrimitive(input, hint) {
  if (_typeof(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (_typeof(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
module.exports = _toPrimitive, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 6 */
/*!***************************************************************************!*\
  !*** /Users/hfp/Documents/HBuilderProjects/cunjin-socket-test/pages.json ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

if (typeof Promise !== 'undefined' && !Promise.prototype.finally) {
  Promise.prototype.finally = function (callback) {
    var promise = this.constructor;
    return this.then(function (value) {
      return promise.resolve(callback()).then(function () {
        return value;
      });
    }, function (reason) {
      return promise.resolve(callback()).then(function () {
        throw reason;
      });
    });
  };
}
if (typeof uni !== 'undefined' && uni && uni.requireGlobal) {
  var global = uni.requireGlobal();
  ArrayBuffer = global.ArrayBuffer;
  Int8Array = global.Int8Array;
  Uint8Array = global.Uint8Array;
  Uint8ClampedArray = global.Uint8ClampedArray;
  Int16Array = global.Int16Array;
  Uint16Array = global.Uint16Array;
  Int32Array = global.Int32Array;
  Uint32Array = global.Uint32Array;
  Float32Array = global.Float32Array;
  Float64Array = global.Float64Array;
  BigInt64Array = global.BigInt64Array;
  BigUint64Array = global.BigUint64Array;
}
if (uni.restoreGlobal) {
  uni.restoreGlobal(weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
__definePage('pages/index/index', function () {
  return Vue.extend(__webpack_require__(/*! pages/index/index.vue?mpType=page */ 7).default);
});

/***/ }),
/* 7 */
/*!**************************************************************************************************!*\
  !*** /Users/hfp/Documents/HBuilderProjects/cunjin-socket-test/pages/index/index.vue?mpType=page ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=2be84a3c&mpType=page */ 8);\n/* harmony import */ var _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js&mpType=page */ 10);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 49);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null,\n  false,\n  _index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"pages/index/index.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBNkg7QUFDN0g7QUFDb0U7QUFDTDs7O0FBRy9EO0FBQ2dOO0FBQ2hOLGdCQUFnQixpTkFBVTtBQUMxQixFQUFFLHNGQUFNO0FBQ1IsRUFBRSwyRkFBTTtBQUNSLEVBQUUsb0dBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsK0ZBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiNy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTJiZTg0YTNjJm1wVHlwZT1wYWdlXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZXhwb3J0ICogZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicGFnZXMvaW5kZXgvaW5kZXgudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///7\n");

/***/ }),
/* 8 */
/*!********************************************************************************************************************************!*\
  !*** /Users/hfp/Documents/HBuilderProjects/cunjin-socket-test/pages/index/index.vue?vue&type=template&id=2be84a3c&mpType=page ***!
  \********************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-0!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=2be84a3c&mpType=page */ 9);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 9 */
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/hfp/Documents/HBuilderProjects/cunjin-socket-test/pages/index/index.vue?vue&type=template&id=2be84a3c&mpType=page ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    { staticClass: _vm._$s(0, "sc", "content"), attrs: { _i: 0 } },
    [
      _c("image", { staticClass: _vm._$s(1, "sc", "logo"), attrs: { _i: 1 } }),
      _c(
        "view",
        { staticClass: _vm._$s(2, "sc", "text-area"), attrs: { _i: 2 } },
        [
          _c(
            "text",
            { staticClass: _vm._$s(3, "sc", "title"), attrs: { _i: 3 } },
            [_vm._v(_vm._$s(3, "t0-0", _vm._s(_vm.loginStatus)))]
          ),
        ]
      ),
      _c(
        "view",
        { staticClass: _vm._$s(4, "sc", "input_container"), attrs: { _i: 4 } },
        [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.loginId,
                expression: "loginId",
              },
            ],
            attrs: { _i: 5 },
            domProps: { value: _vm._$s(5, "v-model", _vm.loginId) },
            on: {
              input: function ($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.loginId = $event.target.value
              },
            },
          }),
        ]
      ),
      _c(
        "view",
        { staticClass: _vm._$s(6, "sc", "input_container"), attrs: { _i: 6 } },
        [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.loginPwd,
                expression: "loginPwd",
              },
            ],
            attrs: { _i: 7 },
            domProps: { value: _vm._$s(7, "v-model", _vm.loginPwd) },
            on: {
              input: function ($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.loginPwd = $event.target.value
              },
            },
          }),
        ]
      ),
      _c("view", [
        _c("button", { attrs: { _i: 9 }, on: { click: _vm.loginIM } }),
      ]),
      _c("view", [
        _c("button", { attrs: { _i: 11 }, on: { click: _vm.closeIM } }),
      ]),
      _c("view", [
        _c("button", { attrs: { _i: 13 }, on: { click: _vm.sendTextMessage } }),
      ]),
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 10 */
/*!**************************************************************************************************************************!*\
  !*** /Users/hfp/Documents/HBuilderProjects/cunjin-socket-test/pages/index/index.vue?vue&type=script&lang=js&mpType=page ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-1!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js&mpType=page */ 11);\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWd1QixDQUFnQixzdEJBQUcsRUFBQyIsImZpbGUiOiIxMC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNy0xIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTctMSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stdW5pLWFwcC1sb2FkZXIvdXNpbmctY29tcG9uZW50cy5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///10\n");

/***/ }),
/* 11 */
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/hfp/Documents/HBuilderProjects/cunjin-socket-test/pages/index/index.vue?vue&type=script&lang=js&mpType=page ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 1);\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\nvar _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ 13));\nvar _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 2));\nvar _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ 15));\nvar _index = __webpack_require__(/*! @/EaseIM/index.js */ 16);\nvar _emApis = __webpack_require__(/*! @/EaseIM/emApis */ 29);\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\nvar _emConnect = (0, _emApis.emConnect)(),\n  loginWithPassword = _emConnect.loginWithPassword,\n  loginWithAccessToken = _emConnect.loginWithAccessToken,\n  closeEaseIM = _emConnect.closeEaseIM;\nvar _emMessages = (0, _emApis.emMessages)(),\n  sendDisplayMessages = _emMessages.sendDisplayMessages;\nvar _default = {\n  data: function data() {\n    return {\n      title: 'Hello',\n      loginId: '17607928053',\n      loginPwd: '123456',\n      storageData: uni.getStorageSync('EM_TOKEN'),\n      sendMsgTimmer: null,\n      seddMsgMaxTimeout: 5000\n    };\n  },\n  onLoad: function onLoad() {},\n  computed: {\n    loginStatus: function loginStatus() {\n      return this.$store.getters.loginStatus;\n    }\n  },\n  methods: {\n    loginIM: function loginIM() {\n      var _this = this;\n      loginWithPassword(this.loginId, this.loginPwd).then(function (res) {\n        __f__(\"log\", '>>>>token获取成功', res, \" at pages/index/index.vue:51\");\n        _this.setUserAccessToken(_this.loginId, res.accessToken);\n      }).catch(function (err) {\n        __f__(\"log\", '>>>>>>fail', err, \" at pages/index/index.vue:55\");\n      });\n    },\n    closeIM: function closeIM() {\n      closeEaseIM();\n      this.$store.commit('SET_LOGIN_STATUS', false);\n    },\n    sendTextMessage: function sendTextMessage() {\n      var _this2 = this;\n      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {\n        var params, res;\n        return _regenerator.default.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                /*优化点二： 发送消息时，如果某条消息大于5s没有收到成功回调，则补充连接IM */\n                _this2.sendMsgTimmer && clearTimeout(_this2.sendMsgTimmer);\n                _this2.sendMsgTimmer = setTimeout(function () {\n                  __f__(\"log\", '>>>>>该条消息超时时间大于5s', _index.EMClient.sock.readyState, \" at pages/index/index.vue:66\");\n                  uni.showToast({\n                    icon: 'none',\n                    title: \"\\u8BE5\\u6D88\\u606F\\u8D85\\u65F6\\u672A\\u54CD\\u5E94\".concat(_index.EMClient.sock.readyState, \"\\u6267\\u884C\\u91CD\\u65B0\\u767B\\u5F55\")\n                  });\n                  closeEaseIM();\n                  _this2.compensationLoginIM();\n                }, _this2.seddMsgMaxTimeout);\n                params = {\n                  type: 'txt',\n                  msg: 'test message!',\n                  to: 'pfh',\n                  chatType: 'singleChat'\n                };\n                _context.prev = 3;\n                _context.next = 6;\n                return sendDisplayMessages(_objectSpread({}, params));\n              case 6:\n                res = _context.sent;\n                __f__(\"log\", '>>>>>>>>发送消息成功', res, \" at pages/index/index.vue:96\");\n                _this2.sendMsgTimmer && clearTimeout(_this2.sendMsgTimmer);\n                uni.showToast({\n                  icon: 'none',\n                  title: \"\\u53D1\\u9001\\u6210\\u529F\\uFF01\".concat(res.serverMsgId)\n                });\n                _context.next = 18;\n                break;\n              case 12:\n                _context.prev = 12;\n                _context.t0 = _context[\"catch\"](3);\n                _this2.sendMsgTimmer && clearTimeout(_this2.sendMsgTimmer);\n                __f__(\"log\", '>>>>>>>发送失败', _context.t0, \" at pages/index/index.vue:104\");\n                /*  优化点一：在catch到发送消息提示not login时 主动补偿连接IM */\n                if ((_context.t0 === null || _context.t0 === void 0 ? void 0 : _context.t0.type) === 39) {\n                  __f__(\"log\", '>>>>>IM 未连接 调用补偿登录', \" at pages/index/index.vue:107\");\n                  _this2.compensationLoginIM();\n                }\n                uni.showToast({\n                  icon: 'none',\n                  title: \"\\u53D1\\u9001\\u5931\\u8D25\\uFF1A\".concat(JSON.stringify(_context.t0))\n                });\n              case 18:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee, null, [[3, 12]]);\n      }))();\n    },\n    setUserAccessToken: function setUserAccessToken(userId, userAccessToken) {\n      var params = {\n        key: \"EM_TOKEN\",\n        data: {\n          userId: userId,\n          token: userAccessToken\n        }\n      };\n      uni.setStorageSync(params.key, params.data);\n      __f__(\"log\", '>>>>>token写入本地成功', \" at pages/index/index.vue:122\");\n    },\n    //补偿连接IM\n    compensationLoginIM: function compensationLoginIM() {\n      var _this3 = this;\n      //EMClient.sock.readyState 三种状态 1 连接中 2 连接中 3 未连接\n      __f__(\"log\", '当前SDK socket status', _index.EMClient.sock.readyState, \" at pages/index/index.vue:127\");\n      closeEaseIM();\n      setTimeout(function () {\n        var _this3$storageData, _this3$storageData2;\n        var userId = (_this3$storageData = _this3.storageData) === null || _this3$storageData === void 0 ? void 0 : _this3$storageData.userId;\n        var token = (_this3$storageData2 = _this3.storageData) === null || _this3$storageData2 === void 0 ? void 0 : _this3$storageData2.token;\n        __f__(\"log\", '>>>>>>>开始执行token登录', _this3.storageData, \" at pages/index/index.vue:132\");\n        loginWithAccessToken(userId, token);\n      }, 200);\n    }\n  }\n};\nexports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 12)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvaW5kZXgvaW5kZXgudnVlIl0sIm5hbWVzIjpbImVtQ29ubmVjdCIsImxvZ2luV2l0aFBhc3N3b3JkIiwibG9naW5XaXRoQWNjZXNzVG9rZW4iLCJjbG9zZUVhc2VJTSIsImVtTWVzc2FnZXMiLCJzZW5kRGlzcGxheU1lc3NhZ2VzIiwiZGF0YSIsInRpdGxlIiwibG9naW5JZCIsImxvZ2luUHdkIiwic3RvcmFnZURhdGEiLCJ1bmkiLCJnZXRTdG9yYWdlU3luYyIsInNlbmRNc2dUaW1tZXIiLCJzZWRkTXNnTWF4VGltZW91dCIsIm9uTG9hZCIsImNvbXB1dGVkIiwibG9naW5TdGF0dXMiLCIkc3RvcmUiLCJnZXR0ZXJzIiwibWV0aG9kcyIsImxvZ2luSU0iLCJ0aGVuIiwicmVzIiwic2V0VXNlckFjY2Vzc1Rva2VuIiwiYWNjZXNzVG9rZW4iLCJjYXRjaCIsImVyciIsImNsb3NlSU0iLCJjb21taXQiLCJzZW5kVGV4dE1lc3NhZ2UiLCJjbGVhclRpbWVvdXQiLCJzZXRUaW1lb3V0IiwiRU1DbGllbnQiLCJzb2NrIiwicmVhZHlTdGF0ZSIsInNob3dUb2FzdCIsImljb24iLCJjb21wZW5zYXRpb25Mb2dpbklNIiwicGFyYW1zIiwidHlwZSIsIm1zZyIsInRvIiwiY2hhdFR5cGUiLCJzZXJ2ZXJNc2dJZCIsIkpTT04iLCJzdHJpbmdpZnkiLCJ1c2VySWQiLCJ1c2VyQWNjZXNzVG9rZW4iLCJrZXkiLCJ0b2tlbiIsInNldFN0b3JhZ2VTeW5jIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBeUJBO0FBQ0E7QUFBd0Q7QUFBQTtBQUN4RCxpQkFBaUUsSUFBQUEsaUJBQVMsR0FBRTtFQUFwRUMsaUJBQWlCLGNBQWpCQSxpQkFBaUI7RUFBRUMsb0JBQW9CLGNBQXBCQSxvQkFBb0I7RUFBRUMsV0FBVyxjQUFYQSxXQUFXO0FBQzVELGtCQUFnQyxJQUFBQyxrQkFBVSxHQUFFO0VBQXBDQyxtQkFBbUIsZUFBbkJBLG1CQUFtQjtBQUFrQixl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eUIsU0FBUyxDQUFDO2tCQUNaQyxJQUFJLEVBQUUsTUFBTTtrQkFDWjlCLEtBQUssMENBQVVzQyxJQUFJLENBQUNDLFNBQVMsYUFBRztnQkFDbEMsQ0FBQyxDQUFDO2NBQUM7Y0FBQTtnQkFBQTtZQUFBO1VBQUE7UUFBQTtNQUFBO0lBRVAsQ0FBQztJQUNEdEIsa0JBQWtCLDhCQUFDdUIsTUFBTSxFQUFFQyxlQUFlLEVBQUU7TUFDMUMsSUFBTVQsTUFBTSxHQUFHO1FBQ2JVLEdBQUcsWUFBWTtRQUNmM0MsSUFBSSxFQUFFO1VBQUV5QyxNQUFNLEVBQUVBLE1BQU07VUFBRUcsS0FBSyxFQUFFRjtRQUFnQjtNQUNqRCxDQUFDO01BQ0RyQyxHQUFHLENBQUN3QyxjQUFjLENBQUNaLE1BQU0sQ0FBQ1UsR0FBRyxFQUFFVixNQUFNLENBQUNqQyxJQUFJLENBQUM7TUFDM0MsYUFBWSxrQkFBa0I7SUFDaEMsQ0FBQztJQUNEO0lBQ0FnQyxtQkFBbUIsaUNBQUc7TUFBQTtNQUNwQjtNQUNBLGFBQVkscUJBQXFCLEVBQUVMLGVBQVEsQ0FBQ0MsSUFBSSxDQUFDQyxVQUFVO01BQzNEaEMsV0FBVyxFQUFFO01BQ2I2QixVQUFVLENBQUMsWUFBTTtRQUFBO1FBQ2YsSUFBTWUsTUFBTSx5QkFBRyxNQUFJLENBQUNyQyxXQUFXLHVEQUFoQixtQkFBa0JxQyxNQUFNO1FBQ3ZDLElBQU1HLEtBQUssMEJBQUcsTUFBSSxDQUFDeEMsV0FBVyx3REFBaEIsb0JBQWtCd0MsS0FBSztRQUNyQyxhQUFZLG9CQUFvQixFQUFFLE1BQUksQ0FBQ3hDLFdBQVc7UUFDbERSLG9CQUFvQixDQUFDNkMsTUFBTSxFQUFFRyxLQUFLLENBQUM7TUFDckMsQ0FBQyxFQUFFLEdBQUcsQ0FBQztJQUNUO0VBQ0Y7QUFDRixDQUFDO0FBQUEsMkIiLCJmaWxlIjoiMTEuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG5cbmltcG9ydCB7IEVNQ2xpZW50IH0gZnJvbSAnQC9FYXNlSU0vaW5kZXguanMnO1xuaW1wb3J0IHsgZW1Db25uZWN0LCBlbU1lc3NhZ2VzIH0gZnJvbSAnQC9FYXNlSU0vZW1BcGlzJztcbmNvbnN0IHsgbG9naW5XaXRoUGFzc3dvcmQsIGxvZ2luV2l0aEFjY2Vzc1Rva2VuLCBjbG9zZUVhc2VJTSB9ID0gZW1Db25uZWN0KCk7XG5jb25zdCB7IHNlbmREaXNwbGF5TWVzc2FnZXMgfSA9IGVtTWVzc2FnZXMoKTtcbmV4cG9ydCBkZWZhdWx0IHtcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdGl0bGU6ICdIZWxsbycsXG4gICAgICBsb2dpbklkOiAnMTc2MDc5MjgwNTMnLFxuICAgICAgbG9naW5Qd2Q6ICcxMjM0NTYnLFxuICAgICAgc3RvcmFnZURhdGE6IHVuaS5nZXRTdG9yYWdlU3luYygnRU1fVE9LRU4nKSxcbiAgICAgIHNlbmRNc2dUaW1tZXI6IG51bGwsXG4gICAgICBzZWRkTXNnTWF4VGltZW91dDogNTAwMCxcbiAgICB9O1xuICB9LFxuICBvbkxvYWQoKSB7fSxcbiAgY29tcHV0ZWQ6IHtcbiAgICBsb2dpblN0YXR1cygpIHtcbiAgICAgIHJldHVybiB0aGlzLiRzdG9yZS5nZXR0ZXJzLmxvZ2luU3RhdHVzO1xuICAgIH0sXG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBsb2dpbklNKCkge1xuICAgICAgbG9naW5XaXRoUGFzc3dvcmQodGhpcy5sb2dpbklkLCB0aGlzLmxvZ2luUHdkKVxuICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coJz4+Pj50b2tlbuiOt+WPluaIkOWKnycsIHJlcyk7XG4gICAgICAgICAgdGhpcy5zZXRVc2VyQWNjZXNzVG9rZW4odGhpcy5sb2dpbklkLCByZXMuYWNjZXNzVG9rZW4pO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCc+Pj4+Pj5mYWlsJywgZXJyKTtcbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICBjbG9zZUlNKCkge1xuICAgICAgY2xvc2VFYXNlSU0oKTtcbiAgICAgIHRoaXMuJHN0b3JlLmNvbW1pdCgnU0VUX0xPR0lOX1NUQVRVUycsIGZhbHNlKTtcbiAgICB9LFxuICAgIGFzeW5jIHNlbmRUZXh0TWVzc2FnZSgpIHtcbiAgICAgIC8q5LyY5YyW54K55LqM77yaIOWPkemAgea2iOaBr+aXtu+8jOWmguaenOafkOadoea2iOaBr+Wkp+S6jjVz5rKh5pyJ5pS25Yiw5oiQ5Yqf5Zue6LCD77yM5YiZ6KGl5YWF6L+e5o6lSU0gKi9cbiAgICAgIHRoaXMuc2VuZE1zZ1RpbW1lciAmJiBjbGVhclRpbWVvdXQodGhpcy5zZW5kTXNnVGltbWVyKTtcbiAgICAgIHRoaXMuc2VuZE1zZ1RpbW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnPj4+Pj7or6XmnaHmtojmga/otoXml7bml7bpl7TlpKfkuo41cycsIEVNQ2xpZW50LnNvY2sucmVhZHlTdGF0ZSk7XG4gICAgICAgIHVuaS5zaG93VG9hc3Qoe1xuICAgICAgICAgIGljb246ICdub25lJyxcbiAgICAgICAgICB0aXRsZTogYOivpea2iOaBr+i2heaXtuacquWTjeW6lCR7RU1DbGllbnQuc29jay5yZWFkeVN0YXRlfeaJp+ihjOmHjeaWsOeZu+W9lWAsXG4gICAgICAgIH0pO1xuICAgICAgICBjbG9zZUVhc2VJTSgpO1xuICAgICAgICB0aGlzLmNvbXBlbnNhdGlvbkxvZ2luSU0oKTtcbiAgICAgIH0sIHRoaXMuc2VkZE1zZ01heFRpbWVvdXQpO1xuXG4gICAgICBjb25zdCBwYXJhbXMgPSB7XG4gICAgICAgIHR5cGU6ICd0eHQnLFxuICAgICAgICBtc2c6ICd0ZXN0IG1lc3NhZ2UhJyxcbiAgICAgICAgdG86ICdwZmgnLFxuICAgICAgICBjaGF0VHlwZTogJ3NpbmdsZUNoYXQnLFxuICAgICAgfTtcblxuICAgICAgdHJ5IHtcbiAgICAgICAgLyogICDmqKHmi5/lj5HpgIHmtojmga/otoXml7YgKi9cbiAgICAgICAgLy8gY29uc3Qgc2VuZFByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIC8vICAgc2V0VGltZW91dChhc3luYyAoKSA9PiB7XG4gICAgICAgIC8vICAgICB0cnkge1xuICAgICAgICAvLyAgICAgICBjb25zdCByZXMgPSBhd2FpdCBzZW5kRGlzcGxheU1lc3NhZ2VzKHsgLi4ucGFyYW1zIH0pO1xuICAgICAgICAvLyAgICAgICByZXNvbHZlKHJlcyk7XG4gICAgICAgIC8vICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAvLyAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyAgIH0sIDYwMDApO1xuICAgICAgICAvLyB9KTtcbiAgICAgICAgLy8gY29uc3QgcmVzID0gYXdhaXQgc2VuZFByb21pc2U7XG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IHNlbmREaXNwbGF5TWVzc2FnZXMoeyAuLi5wYXJhbXMgfSk7XG4gICAgICAgIGNvbnNvbGUubG9nKCc+Pj4+Pj4+PuWPkemAgea2iOaBr+aIkOWKnycsIHJlcyk7XG4gICAgICAgIHRoaXMuc2VuZE1zZ1RpbW1lciAmJiBjbGVhclRpbWVvdXQodGhpcy5zZW5kTXNnVGltbWVyKTtcbiAgICAgICAgdW5pLnNob3dUb2FzdCh7XG4gICAgICAgICAgaWNvbjogJ25vbmUnLFxuICAgICAgICAgIHRpdGxlOiBg5Y+R6YCB5oiQ5Yqf77yBJHtyZXMuc2VydmVyTXNnSWR9YCxcbiAgICAgICAgfSk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHRoaXMuc2VuZE1zZ1RpbW1lciAmJiBjbGVhclRpbWVvdXQodGhpcy5zZW5kTXNnVGltbWVyKTtcbiAgICAgICAgY29uc29sZS5sb2coJz4+Pj4+Pj7lj5HpgIHlpLHotKUnLCBlKTtcbiAgICAgICAgLyogIOS8mOWMlueCueS4gO+8muWcqGNhdGNo5Yiw5Y+R6YCB5raI5oGv5o+Q56S6bm90IGxvZ2lu5pe2IOS4u+WKqOihpeWBv+i/nuaOpUlNICovXG4gICAgICAgIGlmIChlPy50eXBlID09PSAzOSkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCc+Pj4+PklNIOacqui/nuaOpSDosIPnlKjooaXlgb/nmbvlvZUnKTtcbiAgICAgICAgICB0aGlzLmNvbXBlbnNhdGlvbkxvZ2luSU0oKTtcbiAgICAgICAgfVxuICAgICAgICB1bmkuc2hvd1RvYXN0KHtcbiAgICAgICAgICBpY29uOiAnbm9uZScsXG4gICAgICAgICAgdGl0bGU6IGDlj5HpgIHlpLHotKXvvJoke0pTT04uc3RyaW5naWZ5KGUpfWAsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0sXG4gICAgc2V0VXNlckFjY2Vzc1Rva2VuKHVzZXJJZCwgdXNlckFjY2Vzc1Rva2VuKSB7XG4gICAgICBjb25zdCBwYXJhbXMgPSB7XG4gICAgICAgIGtleTogYEVNX1RPS0VOYCxcbiAgICAgICAgZGF0YTogeyB1c2VySWQ6IHVzZXJJZCwgdG9rZW46IHVzZXJBY2Nlc3NUb2tlbiB9LFxuICAgICAgfTtcbiAgICAgIHVuaS5zZXRTdG9yYWdlU3luYyhwYXJhbXMua2V5LCBwYXJhbXMuZGF0YSk7XG4gICAgICBjb25zb2xlLmxvZygnPj4+Pj50b2tlbuWGmeWFpeacrOWcsOaIkOWKnycpO1xuICAgIH0sXG4gICAgLy/ooaXlgb/ov57mjqVJTVxuICAgIGNvbXBlbnNhdGlvbkxvZ2luSU0oKSB7XG4gICAgICAvL0VNQ2xpZW50LnNvY2sucmVhZHlTdGF0ZSDkuInnp43nirbmgIEgMSDov57mjqXkuK0gMiDov57mjqXkuK0gMyDmnKrov57mjqVcbiAgICAgIGNvbnNvbGUubG9nKCflvZPliY1TREsgc29ja2V0IHN0YXR1cycsIEVNQ2xpZW50LnNvY2sucmVhZHlTdGF0ZSk7XG4gICAgICBjbG9zZUVhc2VJTSgpO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IHVzZXJJZCA9IHRoaXMuc3RvcmFnZURhdGE/LnVzZXJJZDtcbiAgICAgICAgY29uc3QgdG9rZW4gPSB0aGlzLnN0b3JhZ2VEYXRhPy50b2tlbjtcbiAgICAgICAgY29uc29sZS5sb2coJz4+Pj4+Pj7lvIDlp4vmiafooYx0b2tlbueZu+W9lScsIHRoaXMuc3RvcmFnZURhdGEpO1xuICAgICAgICBsb2dpbldpdGhBY2Nlc3NUb2tlbih1c2VySWQsIHRva2VuKTtcbiAgICAgIH0sIDIwMCk7XG4gICAgfSxcbiAgfSxcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///11\n");

/***/ }),
/* 12 */
/*!*********************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js ***!
  \*********************************************************************/
/*! exports provided: log, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "log", function() { return log; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return formatLog; });
function typof (v) {
  var s = Object.prototype.toString.call(v)
  return s.substring(8, s.length - 1)
}

function isDebugMode () {
  /* eslint-disable no-undef */
  return typeof __channelId__ === 'string' && __channelId__
}

function jsonStringifyReplacer (k, p) {
  switch (typof(p)) {
    case 'Function':
      return 'function() { [native code] }'
    default :
      return p
  }
}

function log (type) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key]
  }
  console[type].apply(console, args)
}

function formatLog () {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key]
  }
  var type = args.shift()
  if (isDebugMode()) {
    args.push(args.pop().replace('at ', 'uni-app:///'))
    return console[type].apply(console, args)
  }

  var msgs = args.map(function (v) {
    var type = Object.prototype.toString.call(v).toLowerCase()

    if (type === '[object object]' || type === '[object array]') {
      try {
        v = '---BEGIN:JSON---' + JSON.stringify(v, jsonStringifyReplacer) + '---END:JSON---'
      } catch (e) {
        v = type
      }
    } else {
      if (v === null) {
        v = '---NULL---'
      } else if (v === undefined) {
        v = '---UNDEFINED---'
      } else {
        var vType = typof(v).toUpperCase()

        if (vType === 'NUMBER' || vType === 'BOOLEAN') {
          v = '---BEGIN:' + vType + '---' + v + '---END:' + vType + '---'
        } else {
          v = String(v)
        }
      }
    }

    return v
  })
  var msg = ''

  if (msgs.length > 1) {
    var lastMsg = msgs.pop()
    msg = msgs.join('---COMMA---')

    if (lastMsg.indexOf(' at ') === 0) {
      msg += lastMsg
    } else {
      msg += '---COMMA---' + lastMsg
    }
  } else {
    msg = msgs[0]
  }

  console[type](msg)
}


/***/ }),
/* 13 */
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ 4);
// TODO(Babel 8): Remove this file.

var runtime = __webpack_require__(/*! ../helpers/regeneratorRuntime */ 14)();
module.exports = runtime;

// Copied from https://github.com/facebook/regenerator/blob/main/packages/runtime/runtime.js#L736=
try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  if ((typeof globalThis === "undefined" ? "undefined" : _typeof(globalThis)) === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}

/***/ }),
/* 14 */
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/regeneratorRuntime.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ./typeof.js */ 4)["default"];
function _regeneratorRuntime() {
  "use strict";

  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
  module.exports = _regeneratorRuntime = function _regeneratorRuntime() {
    return exports;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  var exports = {},
    Op = Object.prototype,
    hasOwn = Op.hasOwnProperty,
    defineProperty = Object.defineProperty || function (obj, key, desc) {
      obj[key] = desc.value;
    },
    $Symbol = "function" == typeof Symbol ? Symbol : {},
    iteratorSymbol = $Symbol.iterator || "@@iterator",
    asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator",
    toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
  function define(obj, key, value) {
    return Object.defineProperty(obj, key, {
      value: value,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), obj[key];
  }
  try {
    define({}, "");
  } catch (err) {
    define = function define(obj, key, value) {
      return obj[key] = value;
    };
  }
  function wrap(innerFn, outerFn, self, tryLocsList) {
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator,
      generator = Object.create(protoGenerator.prototype),
      context = new Context(tryLocsList || []);
    return defineProperty(generator, "_invoke", {
      value: makeInvokeMethod(innerFn, self, context)
    }), generator;
  }
  function tryCatch(fn, obj, arg) {
    try {
      return {
        type: "normal",
        arg: fn.call(obj, arg)
      };
    } catch (err) {
      return {
        type: "throw",
        arg: err
      };
    }
  }
  exports.wrap = wrap;
  var ContinueSentinel = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });
  var getProto = Object.getPrototypeOf,
    NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);
  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      define(prototype, method, function (arg) {
        return this._invoke(method, arg);
      });
    });
  }
  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if ("throw" !== record.type) {
        var result = record.arg,
          value = result.value;
        return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) {
          invoke("next", value, resolve, reject);
        }, function (err) {
          invoke("throw", err, resolve, reject);
        }) : PromiseImpl.resolve(value).then(function (unwrapped) {
          result.value = unwrapped, resolve(result);
        }, function (error) {
          return invoke("throw", error, resolve, reject);
        });
      }
      reject(record.arg);
    }
    var previousPromise;
    defineProperty(this, "_invoke", {
      value: function value(method, arg) {
        function callInvokeWithMethodAndArg() {
          return new PromiseImpl(function (resolve, reject) {
            invoke(method, arg, resolve, reject);
          });
        }
        return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      }
    });
  }
  function makeInvokeMethod(innerFn, self, context) {
    var state = "suspendedStart";
    return function (method, arg) {
      if ("executing" === state) throw new Error("Generator is already running");
      if ("completed" === state) {
        if ("throw" === method) throw arg;
        return doneResult();
      }
      for (context.method = method, context.arg = arg;;) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }
        if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) {
          if ("suspendedStart" === state) throw state = "completed", context.arg;
          context.dispatchException(context.arg);
        } else "return" === context.method && context.abrupt("return", context.arg);
        state = "executing";
        var record = tryCatch(innerFn, self, context);
        if ("normal" === record.type) {
          if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue;
          return {
            value: record.arg,
            done: context.done
          };
        }
        "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg);
      }
    };
  }
  function maybeInvokeDelegate(delegate, context) {
    var methodName = context.method,
      method = delegate.iterator[methodName];
    if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel;
    var record = tryCatch(method, delegate.iterator, context.arg);
    if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel;
    var info = record.arg;
    return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel);
  }
  function pushTryEntry(locs) {
    var entry = {
      tryLoc: locs[0]
    };
    1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry);
  }
  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal", delete record.arg, entry.completion = record;
  }
  function Context(tryLocsList) {
    this.tryEntries = [{
      tryLoc: "root"
    }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0);
  }
  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) return iteratorMethod.call(iterable);
      if ("function" == typeof iterable.next) return iterable;
      if (!isNaN(iterable.length)) {
        var i = -1,
          next = function next() {
            for (; ++i < iterable.length;) {
              if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next;
            }
            return next.value = undefined, next.done = !0, next;
          };
        return next.next = next;
      }
    }
    return {
      next: doneResult
    };
  }
  function doneResult() {
    return {
      value: undefined,
      done: !0
    };
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", {
    value: GeneratorFunctionPrototype,
    configurable: !0
  }), defineProperty(GeneratorFunctionPrototype, "constructor", {
    value: GeneratorFunction,
    configurable: !0
  }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) {
    var ctor = "function" == typeof genFun && genFun.constructor;
    return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name));
  }, exports.mark = function (genFun) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun;
  }, exports.awrap = function (arg) {
    return {
      __await: arg
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    void 0 === PromiseImpl && (PromiseImpl = Promise);
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
    return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () {
    return this;
  }), define(Gp, "toString", function () {
    return "[object Generator]";
  }), exports.keys = function (val) {
    var object = Object(val),
      keys = [];
    for (var key in object) {
      keys.push(key);
    }
    return keys.reverse(), function next() {
      for (; keys.length;) {
        var key = keys.pop();
        if (key in object) return next.value = key, next.done = !1, next;
      }
      return next.done = !0, next;
    };
  }, exports.values = values, Context.prototype = {
    constructor: Context,
    reset: function reset(skipTempReset) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) {
        "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined);
      }
    },
    stop: function stop() {
      this.done = !0;
      var rootRecord = this.tryEntries[0].completion;
      if ("throw" === rootRecord.type) throw rootRecord.arg;
      return this.rval;
    },
    dispatchException: function dispatchException(exception) {
      if (this.done) throw exception;
      var context = this;
      function handle(loc, caught) {
        return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught;
      }
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i],
          record = entry.completion;
        if ("root" === entry.tryLoc) return handle("end");
        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc"),
            hasFinally = hasOwn.call(entry, "finallyLoc");
          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
          } else {
            if (!hasFinally) throw new Error("try statement without catch or finally");
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          }
        }
      }
    },
    abrupt: function abrupt(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }
      finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);
      var record = finallyEntry ? finallyEntry.completion : {};
      return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);
    },
    complete: function complete(record, afterLoc) {
      if ("throw" === record.type) throw record.arg;
      return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel;
    },
    finish: function finish(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;
      }
    },
    "catch": function _catch(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if ("throw" === record.type) {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }
      throw new Error("illegal catch attempt");
    },
    delegateYield: function delegateYield(iterable, resultName, nextLoc) {
      return this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      }, "next" === this.method && (this.arg = undefined), ContinueSentinel;
    }
  }, exports;
}
module.exports = _regeneratorRuntime, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 15 */
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/asyncToGenerator.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator(fn) {
  return function () {
    var self = this,
      args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(undefined);
    });
  };
}
module.exports = _asyncToGenerator, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 16 */
/*!********************************************************************************!*\
  !*** /Users/hfp/Documents/HBuilderProjects/cunjin-socket-test/EaseIM/index.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 1);\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.EMClient = void 0;\nObject.defineProperty(exports, \"EaseSDK\", {\n  enumerable: true,\n  get: function get() {\n    return _.default;\n  }\n});\nvar _ = _interopRequireDefault(__webpack_require__(/*! @/SDK/4.1.7-uniapp-log */ 17));\nvar _config = __webpack_require__(/*! ./config */ 28);\n// import EaseSDK from 'easemob-websdk/uniApp/Easemob-chat';\n\nvar EMClient = uni.EMClient = {};\nexports.EMClient = EMClient;\n_.default.logger.enableAll();\nexports.EMClient = EMClient = new _.default.connection({\n  appKey: '1187231127169058#demo',\n  apiUrl: _config.EM_API_URL,\n  url: _config.EM_WEB_SOCKET_URL\n});\nuni.EMClient = EMClient;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vRWFzZUlNL2luZGV4LmpzIl0sIm5hbWVzIjpbIkVNQ2xpZW50IiwidW5pIiwiRWFzZVNESyIsImxvZ2dlciIsImVuYWJsZUFsbCIsImNvbm5lY3Rpb24iLCJhcHBLZXkiLCJhcGlVcmwiLCJFTV9BUElfVVJMIiwidXJsIiwiRU1fV0VCX1NPQ0tFVF9VUkwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBRkE7O0FBR0EsSUFBSUEsUUFBUSxHQUFJQyxHQUFHLENBQUNELFFBQVEsR0FBRyxDQUFDLENBQUU7QUFBQztBQUNuQ0UsU0FBTyxDQUFDQyxNQUFNLENBQUNDLFNBQVMsRUFBRTtBQUMxQixtQkFBQUosUUFBUSxHQUFHLElBQUlFLFNBQU8sQ0FBQ0csVUFBVSxDQUFDO0VBQ2hDQyxNQUFNLEVBQUUsdUJBQXVCO0VBQy9CQyxNQUFNLEVBQUVDLGtCQUFVO0VBQ2xCQyxHQUFHLEVBQUVDO0FBQ1AsQ0FBQyxDQUFDO0FBQ0ZULEdBQUcsQ0FBQ0QsUUFBUSxHQUFHQSxRQUFRIiwiZmlsZSI6IjE2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IEVhc2VTREsgZnJvbSAnZWFzZW1vYi13ZWJzZGsvdW5pQXBwL0Vhc2Vtb2ItY2hhdCc7XG5pbXBvcnQgRWFzZVNESyBmcm9tICdAL1NESy80LjEuNy11bmlhcHAtbG9nJztcbmltcG9ydCB7IEVNX0FQUF9LRVksIEVNX0FQSV9VUkwsIEVNX1dFQl9TT0NLRVRfVVJMIH0gZnJvbSAnLi9jb25maWcnO1xubGV0IEVNQ2xpZW50ID0gKHVuaS5FTUNsaWVudCA9IHt9KTtcbkVhc2VTREsubG9nZ2VyLmVuYWJsZUFsbCgpO1xuRU1DbGllbnQgPSBuZXcgRWFzZVNESy5jb25uZWN0aW9uKHtcbiAgYXBwS2V5OiAnMTE4NzIzMTEyNzE2OTA1OCNkZW1vJyxcbiAgYXBpVXJsOiBFTV9BUElfVVJMLFxuICB1cmw6IEVNX1dFQl9TT0NLRVRfVVJMLFxufSk7XG51bmkuRU1DbGllbnQgPSBFTUNsaWVudDtcbmV4cG9ydCB7IEVhc2VTREssIEVNQ2xpZW50IH07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///16\n");

/***/ }),
/* 17 */
/*!****************************************************************************************!*\
  !*** /Users/hfp/Documents/HBuilderProjects/cunjin-socket-test/SDK/4.1.7-uniapp-log.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


/***/ }),
/* 18 */
/*!*********************************************************!*\
  !*** ./node_modules/@dcloudio/uni-mp-weixin/dist/mp.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 1);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Behavior = Behavior;
exports.Component = Component;
exports.Page = Page;
exports.nextTick = exports.default = void 0;
var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 2));
var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ 20));
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 26));
var _PROP_DEFAULT_VALUES;
function parseData(data, vueComponentOptions) {
  if (!data) {
    return;
  }
  vueComponentOptions.mpOptions.data = data;
}
function parseComponents(vueComponentOptions) {
  vueComponentOptions.components = global.__wxVueOptions.components;
}
var _toString = Object.prototype.toString;
var hasOwnProperty = Object.prototype.hasOwnProperty;
function isFn(fn) {
  return typeof fn === 'function';
}
function isPlainObject(obj) {
  return _toString.call(obj) === '[object Object]';
}
function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key);
}
function noop() {}

/**
 * Create a cached version of a pure function.
 */
function cached(fn) {
  var cache = Object.create(null);
  return function cachedFn(str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) {
    return c ? c.toUpperCase() : '';
  });
});
var SOURCE_KEY = '__data__';
var COMPONENT_LIFECYCLE = {
  created: 'onServiceCreated',
  attached: 'onServiceAttached',
  ready: 'mounted',
  moved: 'moved',
  detached: 'destroyed'
};
var COMPONENT_LIFECYCLE_KEYS = Object.keys(COMPONENT_LIFECYCLE);
var PAGE_LIFETIMES = {
  show: 'onPageShow',
  hide: 'onPageHide',
  resize: 'onPageResize'
};
var PAGE_LIFETIMES_KEYS = Object.keys(PAGE_LIFETIMES);
var PAGE_LIFECYCLE = ['onLoad', 'onShow', 'onReady', 'onHide', 'onUnload', 'onPullDownRefresh', 'onReachBottom', 'onShareAppMessage', 'onPageScroll', 'onResize', 'onTabItemTap'];
function parsePageMethods(mpComponentOptions, vueComponentOptions) {
  var methods = Object.create(null);
  Object.keys(mpComponentOptions).forEach(function (key) {
    var value = mpComponentOptions[key];
    if (isFn(value) && PAGE_LIFECYCLE.indexOf(key) === -1) {
      methods[key] = value;
    }
  });
  vueComponentOptions.methods = methods;
}
function parsePageLifecycle(mpComponentOptions, vueComponentOptions) {
  Object.keys(mpComponentOptions).forEach(function (key) {
    if (PAGE_LIFECYCLE.indexOf(key) !== -1) {
      vueComponentOptions[key] = mpComponentOptions[key];
    }
  });
}
function parsePage(mpComponentOptions) {
  var vueComponentOptions = {
    mixins: [],
    mpOptions: {}
  };
  parseComponents(vueComponentOptions);
  parseData(mpComponentOptions.data, vueComponentOptions);
  parsePageMethods(mpComponentOptions, vueComponentOptions);
  parsePageLifecycle(mpComponentOptions, vueComponentOptions);
  return vueComponentOptions;
}
function parseProperties(properties, vueComponentOptions) {
  if (!properties) {
    return;
  }
  vueComponentOptions.mpOptions.properties = properties;
}
function parseOptions(options, vueComponentOptions) {
  if (!options) {
    return;
  }
  vueComponentOptions.mpOptions.options = options;
}
function parseMethods(methods, vueComponentOptions) {
  if (!methods) {
    return;
  }
  if (methods.$emit) {
    console.warn('Method "$emit" conflicts with an existing Vue instance method');
    delete methods.$emit;
  }
  vueComponentOptions.methods = methods;
}
function parseLifecycle(mpComponentOptions, vueComponentOptions) {
  COMPONENT_LIFECYCLE_KEYS.forEach(function (name) {
    if (hasOwn(mpComponentOptions, name)) {
      (vueComponentOptions[COMPONENT_LIFECYCLE[name]] || (vueComponentOptions[COMPONENT_LIFECYCLE[name]] = [])).push(mpComponentOptions[name]);
    }
  });
}
var mpBehaviors = {
  'wx://form-field': {},
  'wx://component-export': {}
};
function callDefinitionFilter(mpComponentOptions) {
  var behaviors = mpComponentOptions.behaviors,
    definitionFilter = mpComponentOptions.definitionFilter;
  var behaviorDefinitionFilters = [];
  if (Array.isArray(behaviors)) {
    behaviors.forEach(function (behavior) {
      behavior = typeof behavior === 'string' ? mpBehaviors[behavior] : behavior;
      if (behavior.definitionFilter) {
        behaviorDefinitionFilters.push(behavior.definitionFilter);
        behavior.definitionFilter.call(null, mpComponentOptions, []);
      }
    });
  }
  if (isFn(definitionFilter)) {
    return function (defFields) {
      definitionFilter(defFields, behaviorDefinitionFilters);
    };
  }
}
function parseDefinitionFilter(mpComponentOptions, vueComponentOptions) {
  callDefinitionFilter(mpComponentOptions);
}
function parseBehavior(behavior) {
  var data = behavior.data,
    methods = behavior.methods,
    behaviors = behavior.behaviors,
    properties = behavior.properties;
  var vueComponentOptions = {
    watch: {},
    mpOptions: {
      mpObservers: []
    }
  };
  parseData(data, vueComponentOptions);
  parseMethods(methods, vueComponentOptions);
  parseBehaviors(behaviors, vueComponentOptions);
  parseProperties(properties, vueComponentOptions);
  parseLifecycle(behavior, vueComponentOptions);
  parseDefinitionFilter(behavior);
  return vueComponentOptions;
}
var BEHAVIORS = {
  'wx://form-field': {
    beforeCreate: function beforeCreate() {
      var mpOptions = this.$options.mpOptions;
      if (!mpOptions.properties) {
        mpOptions.properties = Object.create(null);
      }
      var props = mpOptions.properties;
      // TODO form submit,reset
      if (!hasOwn(props, 'name')) {
        props.name = {
          type: String
        };
      }
      if (!hasOwn(props, 'value')) {
        props.value = {
          type: String // 默认类型调整为 String,否则默认值为 null,导致一些自定义 input 显示不正确
        };
      }
    }
  }
};

function parseBehaviors(behaviors, vueComponentOptions) {
  if (!behaviors) {
    return;
  }
  behaviors.forEach(function (behavior) {
    if (typeof behavior === 'string') {
      BEHAVIORS[behavior] && vueComponentOptions.mixins.push(BEHAVIORS[behavior]);
    } else {
      vueComponentOptions.mixins.push(parseBehavior(behavior));
    }
  });
}
function parseSinglePath(path) {
  return path.split('.');
}
function parseMultiPaths(paths) {
  return paths.split(',').map(function (path) {
    return parseSinglePath(path);
  });
}
function parseObservers(observers, vueComponentOptions) {
  if (!observers) {
    return;
  }
  var mpObservers = vueComponentOptions.mpOptions.mpObservers;
  Object.keys(observers).forEach(function (path) {
    mpObservers.push({
      paths: parseMultiPaths(path),
      observer: observers[path]
    });
  });
}
function relative(from, to) {
  if (to.indexOf('/') === 0) {
    from = '';
  }
  var fromArr = from.split('/');
  var toArr = to.split('/');
  fromArr.pop();
  while (toArr.length) {
    var part = toArr.shift();
    if (part !== '' && part !== '.') {
      if (part !== '..') {
        fromArr.push(part);
      } else {
        fromArr.pop();
      }
    }
  }
  return fromArr.join('/');
}
function parseRelations(relations, vueComponentOptions) {
  if (!relations) {
    return;
  }
  Object.keys(relations).forEach(function (name) {
    var relation = relations[name];
    relation.name = name;
    relation.target = relation.target ? String(relation.target) : relative(global.__wxRoute, name);
  });
  vueComponentOptions.mpOptions.relations = relations;
}
function parseExternalClasses(externalClasses, vueComponentOptions) {
  if (!externalClasses) {
    return;
  }
  if (!Array.isArray(externalClasses)) {
    externalClasses = [externalClasses];
  }
  vueComponentOptions.mpOptions.externalClasses = externalClasses;
  if (!vueComponentOptions.mpOptions.properties) {
    vueComponentOptions.mpOptions.properties = Object.create(null);
  }
  externalClasses.forEach(function (externalClass) {
    vueComponentOptions.mpOptions.properties[camelize(externalClass)] = {
      type: String,
      value: ''
    };
  });
}
function parseLifetimes(lifetimes, vueComponentOptions) {
  if (!lifetimes) {
    return;
  }
  parseLifecycle(lifetimes, vueComponentOptions);
}
function parsePageLifetimes(pageLifetimes, vueComponentOptions) {
  if (!pageLifetimes) {
    return;
  }
  PAGE_LIFETIMES_KEYS.forEach(function (key) {
    var lifetimeFn = pageLifetimes[key];
    isFn(lifetimeFn) && (vueComponentOptions[PAGE_LIFETIMES[key]] = lifetimeFn);
  });
}
function parseComponent(mpComponentOptions) {
  var data = mpComponentOptions.data,
    options = mpComponentOptions.options,
    methods = mpComponentOptions.methods,
    behaviors = mpComponentOptions.behaviors,
    lifetimes = mpComponentOptions.lifetimes,
    observers = mpComponentOptions.observers,
    relations = mpComponentOptions.relations,
    properties = mpComponentOptions.properties,
    pageLifetimes = mpComponentOptions.pageLifetimes,
    externalClasses = mpComponentOptions.externalClasses;
  var vueComponentOptions = {
    mixins: [],
    props: {},
    watch: {},
    mpOptions: {
      mpObservers: []
    }
  };
  parseComponents(vueComponentOptions);
  parseData(data, vueComponentOptions);
  parseOptions(options, vueComponentOptions);
  parseMethods(methods, vueComponentOptions);
  parseBehaviors(behaviors, vueComponentOptions);
  parseLifetimes(lifetimes, vueComponentOptions);
  parseObservers(observers, vueComponentOptions);
  parseRelations(relations, vueComponentOptions);
  parseProperties(properties, vueComponentOptions);
  parsePageLifetimes(pageLifetimes, vueComponentOptions);
  parseExternalClasses(externalClasses, vueComponentOptions);
  parseLifecycle(mpComponentOptions, vueComponentOptions);
  parseDefinitionFilter(mpComponentOptions);
  return vueComponentOptions;
}
function initRelationHandlers(type, handler, target, ctx) {
  if (!handler) {
    return;
  }
  var name = "_$".concat(type, "Handlers");
  (ctx[name] || (ctx[name] = [])).push(function () {
    handler.call(ctx, target);
  });
}
function initLinkedHandlers(relation, target, ctx) {
  var type = 'linked';
  var name = relation.name;
  var relationNodes = ctx._$relationNodes || (ctx._$relationNodes = Object.create(null));
  (relationNodes[name] || (relationNodes[name] = [])).push(target);
  initRelationHandlers(type, relation[type], target, ctx);
}
function initUnlinkedHandlers(relation, target, ctx) {
  var type = 'unlinked';
  initRelationHandlers(type, relation[type], target, ctx);
}
function findParentRelation(parentVm, target, type) {
  var relations = parentVm && parentVm.$options.mpOptions && parentVm.$options.mpOptions.relations;
  if (!relations) {
    return [];
  }
  var name = Object.keys(relations).find(function (name) {
    var relation = relations[name];
    return relation.target === target && relation.type === type;
  });
  if (!name) {
    return [];
  }
  return [relations[name], parentVm];
}
function initParentRelation(vm, childRelation, match) {
  var _match = match(vm, vm.$options.mpOptions.path),
    _match2 = (0, _slicedToArray2.default)(_match, 2),
    parentRelation = _match2[0],
    parentVm = _match2[1];
  if (!parentRelation) {
    return;
  }
  initLinkedHandlers(parentRelation, vm, parentVm);
  initLinkedHandlers(childRelation, parentVm, vm);
  initUnlinkedHandlers(parentRelation, vm, parentVm);
  initUnlinkedHandlers(childRelation, parentVm, vm);
}
function initRelation(relation, vm) {
  var type = relation.type;
  if (type === 'parent') {
    initParentRelation(vm, relation, function matchParent(vm, target) {
      return findParentRelation(vm.$parent, target, 'child');
    });
  } else if (type === 'ancestor') {
    initParentRelation(vm, relation, function matchAncestor(vm, target) {
      var $parent = vm.$parent;
      while ($parent) {
        var ret = findParentRelation($parent, target, 'descendant');
        if (ret.length) {
          return ret;
        }
        $parent = $parent.$parent;
      }
      return [];
    });
  }
}
function initRelations(vm) {
  var _ref = vm.$options.mpOptions || {},
    relations = _ref.relations;
  if (!relations) {
    return;
  }
  Object.keys(relations).forEach(function (name) {
    initRelation(relations[name], vm);
  });
}
function handleRelations(vm, type) {
  // TODO 需要移除 relationNodes
  var handlers = vm["_$".concat(type, "Handlers")];
  if (!handlers) {
    return;
  }
  handlers.forEach(function (handler) {
    return handler();
  });
}
var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};
function proxy(target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter() {
    return this[sourceKey][key];
  };
  sharedPropertyDefinition.set = function proxySetter(val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}
function setDataByExprPath(exprPath, value, data) {
  var keys = exprPath.replace(/\[(\d+?)\]/g, '.$1').split('.');
  keys.reduce(function (obj, key, idx) {
    if (idx === keys.length - 1) {
      obj[key] = value;
    } else {
      if (typeof obj[key] === 'undefined') {
        obj[key] = {};
      }
      return obj[key];
    }
  }, data);
  return keys.length === 1;
}
function setData(data, callback) {
  var _this = this;
  if (!isPlainObject(data)) {
    return;
  }
  Object.keys(data).forEach(function (key) {
    if (setDataByExprPath(key, data[key], _this.data)) {
      !hasOwn(_this, key) && proxy(_this, SOURCE_KEY, key);
    }
  });
  this.$forceUpdate();
  isFn(callback) && this.$nextTick(callback);
}

/**
 * https://github.com/swan-team/swan-js/blob/61e2a63f7aa576b5daafbe77fdfa7c65b977060c/src/utils/index.js
 */

var _toString$1 = Object.prototype.toString;
/**
 * 深度assign的函数
 * @param {Object} targetObject 要被拷贝的目标对象
 * @param {Object} originObject 拷贝的源对象
 * @return {Object} merge后的对象
 */
var deepAssign = function deepAssign() {
  var targetObject = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var originObject = arguments.length > 1 ? arguments[1] : undefined;
  var originType = _toString$1.call(originObject);
  if (originType === '[object Array]') {
    targetObject = originObject.slice(0);
    return targetObject;
  } else if (originType === '[object Object]') {
    for (var key in originObject) {
      targetObject[key] = deepAssign(targetObject[key], originObject[key]);
    }
    return targetObject;
  } else if (originType === '[object Date]') {
    return new Date(originObject.getTime());
  } else if (originType === '[object RegExp]') {
    var target = String(originObject);
    var lastIndex = target.lastIndexOf('/');
    return new RegExp(target.slice(1, lastIndex), target.slice(lastIndex + 1));
  }
  return originObject;
};

/**
 * 深度拷贝逻辑，不同于lodash等库，但是与微信一致
 * @param {*} [originObj] 原对象
 * @return {Object|Array} 拷贝结果
 */
var deepClone = function deepClone(originObj) {
  return deepAssign(_toString$1.call(originObj) === '[object Array]' ? [] : {}, originObj);
};
var PROP_DEFAULT_VALUES = (_PROP_DEFAULT_VALUES = {}, (0, _defineProperty2.default)(_PROP_DEFAULT_VALUES, String, ''), (0, _defineProperty2.default)(_PROP_DEFAULT_VALUES, Number, 0), (0, _defineProperty2.default)(_PROP_DEFAULT_VALUES, Boolean, false), (0, _defineProperty2.default)(_PROP_DEFAULT_VALUES, Object, null), (0, _defineProperty2.default)(_PROP_DEFAULT_VALUES, Array, []), (0, _defineProperty2.default)(_PROP_DEFAULT_VALUES, null, null), _PROP_DEFAULT_VALUES);
function getDefaultVal(propType) {
  return PROP_DEFAULT_VALUES[propType];
}
function getPropertyVal(options) {
  if (isPlainObject(options)) {
    if (hasOwn(options, 'value')) {
      return options.value;
    }
    return getDefaultVal(options.type);
  }
  return getDefaultVal(options);
}
function getType(propOptions) {
  return isPlainObject(propOptions) ? propOptions.type : propOptions;
}
function validateProp(key, propsOptions, propsData, vm) {
  var value = propsData[key];
  if (value !== undefined) {
    var propOptions = propsOptions[key];
    var type = getType(propOptions);
    value = formatVal(value, type);
    var observer = propOptions && propOptions.observer;
    if (observer) {
      // 初始化时,异步触发 observer,否则 observer 中无法访问 methods 或其他
      setTimeout(function () {
        observe(observer, vm, value);
      }, 4);
    }
    return value;
  }
  return getPropertyVal(propsOptions[key]);
}
function formatVal(val, type) {
  if (type === Boolean) {
    return !!val;
  } else if (type === String) {
    return String(val);
  }
  return val;
}
function observe(observer, vm, newVal, oldVal) {
  try {
    if (typeof observer === 'function') {
      observer.call(vm, newVal, oldVal);
    } else if (typeof observer === 'string' && typeof vm[observer] === 'function') {
      vm[observer](newVal, oldVal);
    }
  } catch (err) {
    console.error("execute observer ".concat(observer, " callback fail! err: ").concat(err));
  }
}
function initProperties(vm, instanceData) {
  var properties = vm.$options.mpOptions.properties;
  if (!properties) {
    return;
  }
  var propsData = deepClone(vm.$options.propsData) || {};
  var _loop = function _loop(key) {
    var observer = isPlainObject(properties[key]) ? properties[key].observer : false;
    var value = validateProp(key, properties, propsData, vm);
    Object.defineProperty(instanceData, key, {
      enumerable: true,
      configurable: true,
      get: function get() {
        return value;
      },
      set: function set(newVal) {
        var oldVal = value;
        /* eslint-disable no-self-compare */
        if (newVal === value || newVal !== newVal && value !== value) {
          return;
        }
        // TODO 临时方案,clone array
        value = Array.isArray(newVal) ? newVal.slice(0) : newVal;
        if (observer) {
          observe(observer, vm, newVal, oldVal);
        }
        // 触发渲染
        vm.$forceUpdate();
      }
    });
  };
  for (var key in properties) {
    _loop(key);
  }
}
function updateProperties(vm) {
  var properties = vm.$options.mpOptions && vm.$options.mpOptions.properties;
  var propsData = vm.$options.propsData;
  if (propsData && properties) {
    Object.keys(properties).forEach(function (key) {
      if (hasOwn(propsData, key)) {
        vm[key] = formatVal(propsData[key], getType(properties[key]));
      }
    });
  }
}
function initState(vm) {
  var instanceData = JSON.parse(JSON.stringify(vm.$options.mpOptions.data || {}));
  vm[SOURCE_KEY] = instanceData;
  var propertyDefinition = {
    get: function get() {
      return vm[SOURCE_KEY];
    },
    set: function set(value) {
      vm[SOURCE_KEY] = value;
    }
  };
  Object.defineProperties(vm, {
    data: propertyDefinition,
    properties: propertyDefinition
  });
  vm.setData = setData;
  initProperties(vm, instanceData);
  Object.keys(instanceData).forEach(function (key) {
    proxy(vm, SOURCE_KEY, key);
  });
}
function initMethods(vm) {
  var oldEmit = vm.$emit;
  vm.triggerEvent = function (eventName, detail, options) {
    var target = {
      dataset: vm.$el.dataset
    };
    var event = {
      target: target,
      currentTarget: target,
      detail: detail,
      preventDefault: noop,
      stopPropagation: noop
    };
    oldEmit.call(vm, eventName, event);
  };
  // 主要是Vant 自己封装了 $emit,放到 methods 中会触发 Vue 的警告,索性,框架直接重写该方法
  vm.$emit = function () {
    vm.triggerEvent.apply(vm, arguments);
  };
  vm.getRelationNodes = function (relationKey) {
    // 需要过滤已被销毁的vm
    /* eslint-disable  no-mixed-operators */
    return (vm._$relationNodes && vm._$relationNodes[relationKey] || []).filter(function (vm) {
      return !vm._isDestroyed;
    });
  };
  vm._$updateProperties = updateProperties;
}
function handleObservers(vm) {
  var watch = vm.$options.watch;
  if (!watch) {
    return;
  }
  Object.keys(watch).forEach(function (name) {
    var observer = watch[name];
    if (observer.mounted) {
      var val = vm[name];
      var handler = observer.handler;
      if (typeof handler === 'string') {
        handler = vm[handler];
      }
      handler && handler.call(vm, val, val);
    }
  });
}
var polyfill = {
  beforeCreate: function beforeCreate() {
    // 取消 development 时的 Proxy,避免小程序组件模板中使用尚未定义的属性告警
    this._renderProxy = this;
    this._$self = this;
    this._$noop = noop;
  },
  created: function created() {
    // properties 中可能会访问 methods,故需要在 created 中初始化
    initState(this);
    initMethods(this);
    initRelations(this);
  },
  mounted: function mounted() {
    handleObservers(this);
  },
  destroyed: function destroyed() {
    handleRelations(this, 'unlinked');
  }
};
global.__wxRoute = '';
global.__wxComponents = Object.create(null);
global.__wxVueOptions = Object.create(null);
function Page(options) {
  var pageOptions = parsePage(options);
  pageOptions.mixins.unshift(polyfill);
  pageOptions.mpOptions.path = global.__wxRoute;
  global.__wxComponents[global.__wxRoute] = pageOptions;
}
function initRelationsHandler(vueComponentOptions) {
  // linked 需要在当前组件 attached 之后再执行
  if (!vueComponentOptions.onServiceAttached) {
    vueComponentOptions.onServiceAttached = [];
  }
  vueComponentOptions.onServiceAttached.push(function onServiceAttached() {
    handleRelations(this, 'linked');
  });
}
function Component(options) {
  var componentOptions = parseComponent(options);
  componentOptions.mixins.unshift(polyfill);
  componentOptions.mpOptions.path = global.__wxRoute;
  initRelationsHandler(componentOptions);
  global.__wxComponents[global.__wxRoute] = componentOptions;
}
function Behavior(options) {
  return options;
}
var nextTick = _vue.default.nextTick;
exports.nextTick = nextTick;
var index = uni.__$wx__;
var _default = index;
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ 19)))

/***/ }),
/* 19 */
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 20 */
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles.js */ 21);
var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit.js */ 22);
var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray.js */ 23);
var nonIterableRest = __webpack_require__(/*! ./nonIterableRest.js */ 25);
function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}
module.exports = _slicedToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 21 */
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
module.exports = _arrayWithHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 22 */
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
  if (null != _i) {
    var _s,
      _e,
      _x,
      _r,
      _arr = [],
      _n = !0,
      _d = !1;
    try {
      if (_x = (_i = _i.call(arr)).next, 0 === i) {
        if (Object(_i) !== _i) return;
        _n = !1;
      } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0) {
        ;
      }
    } catch (err) {
      _d = !0, _e = err;
    } finally {
      try {
        if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return;
      } finally {
        if (_d) throw _e;
      }
    }
    return _arr;
  }
}
module.exports = _iterableToArrayLimit, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 23 */
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ 24);
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}
module.exports = _unsupportedIterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 24 */
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
module.exports = _arrayLikeToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 25 */
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
module.exports = _nonIterableRest, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 26 */
/*!**********************!*\
  !*** external "Vue" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = Vue;

/***/ }),
/* 27 */
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 28 */
/*!***************************************************************************************!*\
  !*** /Users/hfp/Documents/HBuilderProjects/cunjin-socket-test/EaseIM/config/index.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.EM_WEB_SOCKET_URL = exports.EM_APP_KEY = exports.EM_API_URL = void 0;\nvar EM_API_URL = 'https://a1.easemob.com';\nexports.EM_API_URL = EM_API_URL;\nvar EM_WEB_SOCKET_URL = 'wss://im-api-wechat.easemob.com/websocket';\n// export const EM_APP_KEY = 'easemob#easeim';\nexports.EM_WEB_SOCKET_URL = EM_WEB_SOCKET_URL;\nvar EM_APP_KEY = 'easemob-demo#support';\nexports.EM_APP_KEY = EM_APP_KEY;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vRWFzZUlNL2NvbmZpZy9pbmRleC5qcyJdLCJuYW1lcyI6WyJFTV9BUElfVVJMIiwiRU1fV0VCX1NPQ0tFVF9VUkwiLCJFTV9BUFBfS0VZIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBTyxJQUFNQSxVQUFVLEdBQUcsd0JBQXdCO0FBQUM7QUFDNUMsSUFBTUMsaUJBQWlCLEdBQUcsMkNBQTJDO0FBQzVFO0FBQUE7QUFDTyxJQUFNQyxVQUFVLEdBQUcsc0JBQXNCO0FBQUMiLCJmaWxlIjoiMjguanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgRU1fQVBJX1VSTCA9ICdodHRwczovL2ExLmVhc2Vtb2IuY29tJztcbmV4cG9ydCBjb25zdCBFTV9XRUJfU09DS0VUX1VSTCA9ICd3c3M6Ly9pbS1hcGktd2VjaGF0LmVhc2Vtb2IuY29tL3dlYnNvY2tldCc7XG4vLyBleHBvcnQgY29uc3QgRU1fQVBQX0tFWSA9ICdlYXNlbW9iI2Vhc2VpbSc7XG5leHBvcnQgY29uc3QgRU1fQVBQX0tFWSA9ICdlYXNlbW9iLWRlbW8jc3VwcG9ydCc7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///28\n");

/***/ }),
/* 29 */
/*!***************************************************************************************!*\
  !*** /Users/hfp/Documents/HBuilderProjects/cunjin-socket-test/EaseIM/emApis/index.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 1);\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nObject.defineProperty(exports, \"emConnect\", {\n  enumerable: true,\n  get: function get() {\n    return _emConnect.default;\n  }\n});\nObject.defineProperty(exports, \"emContacts\", {\n  enumerable: true,\n  get: function get() {\n    return _emContacts.default;\n  }\n});\nObject.defineProperty(exports, \"emConversation\", {\n  enumerable: true,\n  get: function get() {\n    return _emConversation.default;\n  }\n});\nObject.defineProperty(exports, \"emGroups\", {\n  enumerable: true,\n  get: function get() {\n    return _emGroups.default;\n  }\n});\nObject.defineProperty(exports, \"emMessages\", {\n  enumerable: true,\n  get: function get() {\n    return _emMessages.default;\n  }\n});\nObject.defineProperty(exports, \"emSendReadAck\", {\n  enumerable: true,\n  get: function get() {\n    return _emReadAck.default;\n  }\n});\nObject.defineProperty(exports, \"emUserInfos\", {\n  enumerable: true,\n  get: function get() {\n    return _emUserInfos.default;\n  }\n});\nvar _emConnect = _interopRequireDefault(__webpack_require__(/*! ./emConnect */ 30));\nvar _emUserInfos = _interopRequireDefault(__webpack_require__(/*! ./emUserInfos */ 31));\nvar _emContacts = _interopRequireDefault(__webpack_require__(/*! ./emContacts */ 32));\nvar _emGroups = _interopRequireDefault(__webpack_require__(/*! ./emGroups */ 37));\nvar _emReadAck = _interopRequireDefault(__webpack_require__(/*! ./emReadAck */ 38));\nvar _emConversation = _interopRequireDefault(__webpack_require__(/*! ./emConversation */ 39));\nvar _emMessages = _interopRequireDefault(__webpack_require__(/*! ./emMessages */ 41));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vRWFzZUlNL2VtQXBpcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIyOS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBlbUNvbm5lY3QgZnJvbSAnLi9lbUNvbm5lY3QnO1xuaW1wb3J0IGVtVXNlckluZm9zIGZyb20gJy4vZW1Vc2VySW5mb3MnO1xuaW1wb3J0IGVtQ29udGFjdHMgZnJvbSAnLi9lbUNvbnRhY3RzJztcbmltcG9ydCBlbUdyb3VwcyBmcm9tICcuL2VtR3JvdXBzJztcbmltcG9ydCBlbVNlbmRSZWFkQWNrIGZyb20gJy4vZW1SZWFkQWNrJztcbmltcG9ydCBlbUNvbnZlcnNhdGlvbiBmcm9tICcuL2VtQ29udmVyc2F0aW9uJztcbmltcG9ydCBlbU1lc3NhZ2VzIGZyb20gJy4vZW1NZXNzYWdlcyc7XG5leHBvcnQge1xuICBlbUNvbm5lY3QsXG4gIGVtVXNlckluZm9zLFxuICBlbUNvbnRhY3RzLFxuICBlbUdyb3VwcyxcbiAgZW1TZW5kUmVhZEFjayxcbiAgZW1Db252ZXJzYXRpb24sXG4gIGVtTWVzc2FnZXNcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///29\n");

/***/ }),
/* 30 */
/*!*******************************************************************************************!*\
  !*** /Users/hfp/Documents/HBuilderProjects/cunjin-socket-test/EaseIM/emApis/emConnect.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\nvar _index = __webpack_require__(/*! ../index */ 16);\nvar emConnect = function emConnect() {\n  var loginWithPassword = function loginWithPassword(hxUserId, hxPassword) {\n    if (!hxUserId || !hxPassword) throw Error('empty params');\n    return new Promise(function (resolve, reject) {\n      _index.EMClient.open({\n        user: hxUserId,\n        pwd: hxPassword\n      }).then(function (res) {\n        resolve(res);\n      }).catch(function (err) {\n        return reject(err);\n      });\n    });\n  };\n  var loginWithAccessToken = function loginWithAccessToken(hxUserId, hxAccessToken) {\n    if (!hxUserId || !hxAccessToken) throw Error('empty params');\n    return new Promise(function (resolve, reject) {\n      _index.EMClient.open({\n        user: hxUserId,\n        accessToken: hxAccessToken\n      }).then(function (res) {\n        resolve(res);\n      }).catch(function (err) {\n        return reject(err);\n      });\n    });\n  };\n  var closeEaseIM = function closeEaseIM() {\n    _index.EMClient.close();\n  };\n  return {\n    loginWithPassword: loginWithPassword,\n    loginWithAccessToken: loginWithAccessToken,\n    closeEaseIM: closeEaseIM\n  };\n};\nvar _default = emConnect;\nexports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vRWFzZUlNL2VtQXBpcy9lbUNvbm5lY3QuanMiXSwibmFtZXMiOlsiZW1Db25uZWN0IiwibG9naW5XaXRoUGFzc3dvcmQiLCJoeFVzZXJJZCIsImh4UGFzc3dvcmQiLCJFcnJvciIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiRU1DbGllbnQiLCJvcGVuIiwidXNlciIsInB3ZCIsInRoZW4iLCJyZXMiLCJjYXRjaCIsImVyciIsImxvZ2luV2l0aEFjY2Vzc1Rva2VuIiwiaHhBY2Nlc3NUb2tlbiIsImFjY2Vzc1Rva2VuIiwiY2xvc2VFYXNlSU0iLCJjbG9zZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDQSxJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBUyxHQUFTO0VBQ3RCLElBQU1DLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBaUIsQ0FBSUMsUUFBUSxFQUFFQyxVQUFVLEVBQUs7SUFDbEQsSUFBSSxDQUFDRCxRQUFRLElBQUksQ0FBQ0MsVUFBVSxFQUFFLE1BQU1DLEtBQUssQ0FBQyxjQUFjLENBQUM7SUFDekQsT0FBTyxJQUFJQyxPQUFPLENBQUMsVUFBQ0MsT0FBTyxFQUFFQyxNQUFNLEVBQUs7TUFDdENDLGVBQVEsQ0FBQ0MsSUFBSSxDQUFDO1FBQ1pDLElBQUksRUFBRVIsUUFBUTtRQUNkUyxHQUFHLEVBQUVSO01BQ1AsQ0FBQyxDQUFDLENBQ0NTLElBQUksQ0FBQyxVQUFDQyxHQUFHLEVBQUs7UUFDYlAsT0FBTyxDQUFDTyxHQUFHLENBQUM7TUFDZCxDQUFDLENBQUMsQ0FDREMsS0FBSyxDQUFDLFVBQUNDLEdBQUc7UUFBQSxPQUFLUixNQUFNLENBQUNRLEdBQUcsQ0FBQztNQUFBLEVBQUM7SUFDaEMsQ0FBQyxDQUFDO0VBQ0osQ0FBQztFQUNELElBQU1DLG9CQUFvQixHQUFHLFNBQXZCQSxvQkFBb0IsQ0FBSWQsUUFBUSxFQUFFZSxhQUFhLEVBQUs7SUFDeEQsSUFBSSxDQUFDZixRQUFRLElBQUksQ0FBQ2UsYUFBYSxFQUFFLE1BQU1iLEtBQUssQ0FBQyxjQUFjLENBQUM7SUFDNUQsT0FBTyxJQUFJQyxPQUFPLENBQUMsVUFBQ0MsT0FBTyxFQUFFQyxNQUFNLEVBQUs7TUFDdENDLGVBQVEsQ0FBQ0MsSUFBSSxDQUFDO1FBQ1pDLElBQUksRUFBRVIsUUFBUTtRQUNkZ0IsV0FBVyxFQUFFRDtNQUNmLENBQUMsQ0FBQyxDQUNDTCxJQUFJLENBQUMsVUFBQ0MsR0FBRyxFQUFLO1FBQ2JQLE9BQU8sQ0FBQ08sR0FBRyxDQUFDO01BQ2QsQ0FBQyxDQUFDLENBQ0RDLEtBQUssQ0FBQyxVQUFDQyxHQUFHO1FBQUEsT0FBS1IsTUFBTSxDQUFDUSxHQUFHLENBQUM7TUFBQSxFQUFDO0lBQ2hDLENBQUMsQ0FBQztFQUNKLENBQUM7RUFDRCxJQUFNSSxXQUFXLEdBQUcsU0FBZEEsV0FBVyxHQUFTO0lBQ3hCWCxlQUFRLENBQUNZLEtBQUssRUFBRTtFQUNsQixDQUFDO0VBQ0QsT0FBTztJQUNMbkIsaUJBQWlCLEVBQWpCQSxpQkFBaUI7SUFDakJlLG9CQUFvQixFQUFwQkEsb0JBQW9CO0lBQ3BCRyxXQUFXLEVBQVhBO0VBQ0YsQ0FBQztBQUNILENBQUM7QUFBQyxlQUNhbkIsU0FBUztBQUFBIiwiZmlsZSI6IjMwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRU1DbGllbnQgfSBmcm9tICcuLi9pbmRleCc7XG5jb25zdCBlbUNvbm5lY3QgPSAoKSA9PiB7XG4gIGNvbnN0IGxvZ2luV2l0aFBhc3N3b3JkID0gKGh4VXNlcklkLCBoeFBhc3N3b3JkKSA9PiB7XG4gICAgaWYgKCFoeFVzZXJJZCB8fCAhaHhQYXNzd29yZCkgdGhyb3cgRXJyb3IoJ2VtcHR5IHBhcmFtcycpO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBFTUNsaWVudC5vcGVuKHtcbiAgICAgICAgdXNlcjogaHhVc2VySWQsXG4gICAgICAgIHB3ZDogaHhQYXNzd29yZCxcbiAgICAgIH0pXG4gICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICByZXNvbHZlKHJlcyk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiByZWplY3QoZXJyKSk7XG4gICAgfSk7XG4gIH07XG4gIGNvbnN0IGxvZ2luV2l0aEFjY2Vzc1Rva2VuID0gKGh4VXNlcklkLCBoeEFjY2Vzc1Rva2VuKSA9PiB7XG4gICAgaWYgKCFoeFVzZXJJZCB8fCAhaHhBY2Nlc3NUb2tlbikgdGhyb3cgRXJyb3IoJ2VtcHR5IHBhcmFtcycpO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBFTUNsaWVudC5vcGVuKHtcbiAgICAgICAgdXNlcjogaHhVc2VySWQsXG4gICAgICAgIGFjY2Vzc1Rva2VuOiBoeEFjY2Vzc1Rva2VuLFxuICAgICAgfSlcbiAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgIHJlc29sdmUocmVzKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IHJlamVjdChlcnIpKTtcbiAgICB9KTtcbiAgfTtcbiAgY29uc3QgY2xvc2VFYXNlSU0gPSAoKSA9PiB7XG4gICAgRU1DbGllbnQuY2xvc2UoKTtcbiAgfTtcbiAgcmV0dXJuIHtcbiAgICBsb2dpbldpdGhQYXNzd29yZCxcbiAgICBsb2dpbldpdGhBY2Nlc3NUb2tlbixcbiAgICBjbG9zZUVhc2VJTSxcbiAgfTtcbn07XG5leHBvcnQgZGVmYXVsdCBlbUNvbm5lY3Q7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///30\n");

/***/ }),
/* 31 */
/*!*********************************************************************************************!*\
  !*** /Users/hfp/Documents/HBuilderProjects/cunjin-socket-test/EaseIM/emApis/emUserInfos.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 1);\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\nvar _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 2));\nvar _index = __webpack_require__(/*! ../index */ 16);\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\nvar _chunkArr = function _chunkArr(oldArr, num) {\n  oldArr.sort(function (a, b) {\n    return a - b;\n  });\n  if (oldArr.length <= 0) return oldArr;\n  var newArr = [];\n  if (Math.ceil(oldArr.length / num) <= 1) {\n    newArr.push(oldArr);\n    return newArr;\n  }\n  for (var i = 0; i < oldArr.length; i = i + num) {\n    newArr.push(oldArr.slice(i, i + num));\n  }\n  return newArr;\n};\nvar emUserInofs = function emUserInofs() {\n  var fetchUserInfoWithLoginId = function fetchUserInfoWithLoginId() {\n    var userId = _index.EMClient.user;\n    return new Promise(function (resolve, reject) {\n      if (userId) {\n        _index.EMClient.fetchUserInfoById(userId).then(function (res) {\n          var data = res.data;\n          resolve(data);\n        }).catch(function (error) {\n          reject(error);\n        });\n      }\n    });\n  };\n  var fetchOtherInfoFromServer = function fetchOtherInfoFromServer(userList) {\n    var friendList = [];\n    friendList = Object.assign([], userList);\n    return new Promise(function (resolve, reject) {\n      if (friendList.length && friendList.length < 99) {\n        _index.EMClient.fetchUserInfoById(friendList).then(function (res) {\n          var data = res.data;\n          resolve(data);\n        }).catch(function (error) {\n          reject(error);\n        });\n      } else {\n        var newArr = _chunkArr(friendList, 99);\n        for (var i = 0; i < newArr.length; i++) {\n          _index.EMClient.fetchUserInfoById(newArr[i]).then(function (res) {\n            var data = res.data;\n            resolve(data);\n          }).catch(function (error) {\n            reject(error);\n          });\n        }\n      }\n    });\n  };\n  var updateUserInfosFromServer = function updateUserInfosFromServer(params) {\n    return new Promise(function (resolve, reject) {\n      _index.EMClient.updateUserInfo(_objectSpread({}, params)).then(function (res) {\n        var data = res.data;\n        resolve(data);\n      }).catch(function (error) {\n        reject(error);\n      });\n    });\n  };\n  return {\n    fetchUserInfoWithLoginId: fetchUserInfoWithLoginId,\n    fetchOtherInfoFromServer: fetchOtherInfoFromServer,\n    updateUserInfosFromServer: updateUserInfosFromServer\n  };\n};\nvar _default = emUserInofs;\nexports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vRWFzZUlNL2VtQXBpcy9lbVVzZXJJbmZvcy5qcyJdLCJuYW1lcyI6WyJfY2h1bmtBcnIiLCJvbGRBcnIiLCJudW0iLCJzb3J0IiwiYSIsImIiLCJsZW5ndGgiLCJuZXdBcnIiLCJNYXRoIiwiY2VpbCIsInB1c2giLCJpIiwic2xpY2UiLCJlbVVzZXJJbm9mcyIsImZldGNoVXNlckluZm9XaXRoTG9naW5JZCIsInVzZXJJZCIsIkVNQ2xpZW50IiwidXNlciIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiZmV0Y2hVc2VySW5mb0J5SWQiLCJ0aGVuIiwicmVzIiwiZGF0YSIsImNhdGNoIiwiZXJyb3IiLCJmZXRjaE90aGVySW5mb0Zyb21TZXJ2ZXIiLCJ1c2VyTGlzdCIsImZyaWVuZExpc3QiLCJPYmplY3QiLCJhc3NpZ24iLCJ1cGRhdGVVc2VySW5mb3NGcm9tU2VydmVyIiwicGFyYW1zIiwidXBkYXRlVXNlckluZm8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFBb0M7QUFBQTtBQUNwQyxJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBUyxDQUFJQyxNQUFNLEVBQUVDLEdBQUcsRUFBSztFQUNqQ0QsTUFBTSxDQUFDRSxJQUFJLENBQUMsVUFBQ0MsQ0FBQyxFQUFFQyxDQUFDLEVBQUs7SUFDcEIsT0FBT0QsQ0FBQyxHQUFHQyxDQUFDO0VBQ2QsQ0FBQyxDQUFDO0VBQ0YsSUFBSUosTUFBTSxDQUFDSyxNQUFNLElBQUksQ0FBQyxFQUFFLE9BQU9MLE1BQU07RUFDckMsSUFBSU0sTUFBTSxHQUFHLEVBQUU7RUFDZixJQUFJQyxJQUFJLENBQUNDLElBQUksQ0FBQ1IsTUFBTSxDQUFDSyxNQUFNLEdBQUdKLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRTtJQUN2Q0ssTUFBTSxDQUFDRyxJQUFJLENBQUNULE1BQU0sQ0FBQztJQUNuQixPQUFPTSxNQUFNO0VBQ2Y7RUFDQSxLQUFLLElBQUlJLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBR1YsTUFBTSxDQUFDSyxNQUFNLEVBQUVLLENBQUMsR0FBR0EsQ0FBQyxHQUFHVCxHQUFHLEVBQUU7SUFDOUNLLE1BQU0sQ0FBQ0csSUFBSSxDQUFDVCxNQUFNLENBQUNXLEtBQUssQ0FBQ0QsQ0FBQyxFQUFFQSxDQUFDLEdBQUdULEdBQUcsQ0FBQyxDQUFDO0VBQ3ZDO0VBQ0EsT0FBT0ssTUFBTTtBQUNmLENBQUM7QUFFRCxJQUFNTSxXQUFXLEdBQUcsU0FBZEEsV0FBVyxHQUFTO0VBQ3hCLElBQU1DLHdCQUF3QixHQUFHLFNBQTNCQSx3QkFBd0IsR0FBUztJQUNyQyxJQUFNQyxNQUFNLEdBQUdDLGVBQVEsQ0FBQ0MsSUFBSTtJQUM1QixPQUFPLElBQUlDLE9BQU8sQ0FBQyxVQUFDQyxPQUFPLEVBQUVDLE1BQU0sRUFBSztNQUN0QyxJQUFJTCxNQUFNLEVBQUU7UUFDVkMsZUFBUSxDQUFDSyxpQkFBaUIsQ0FBQ04sTUFBTSxDQUFDLENBQy9CTyxJQUFJLENBQUMsVUFBQ0MsR0FBRyxFQUFLO1VBQ2IsSUFBUUMsSUFBSSxHQUFLRCxHQUFHLENBQVpDLElBQUk7VUFDWkwsT0FBTyxDQUFDSyxJQUFJLENBQUM7UUFDZixDQUFDLENBQUMsQ0FDREMsS0FBSyxDQUFDLFVBQUNDLEtBQUssRUFBSztVQUNoQk4sTUFBTSxDQUFDTSxLQUFLLENBQUM7UUFDZixDQUFDLENBQUM7TUFDTjtJQUNGLENBQUMsQ0FBQztFQUNKLENBQUM7RUFDRCxJQUFNQyx3QkFBd0IsR0FBRyxTQUEzQkEsd0JBQXdCLENBQUlDLFFBQVEsRUFBSztJQUM3QyxJQUFJQyxVQUFVLEdBQUcsRUFBRTtJQUNuQkEsVUFBVSxHQUFHQyxNQUFNLENBQUNDLE1BQU0sQ0FBQyxFQUFFLEVBQUVILFFBQVEsQ0FBQztJQUN4QyxPQUFPLElBQUlWLE9BQU8sQ0FBQyxVQUFDQyxPQUFPLEVBQUVDLE1BQU0sRUFBSztNQUN0QyxJQUFJUyxVQUFVLENBQUN2QixNQUFNLElBQUl1QixVQUFVLENBQUN2QixNQUFNLEdBQUcsRUFBRSxFQUFFO1FBQy9DVSxlQUFRLENBQUNLLGlCQUFpQixDQUFDUSxVQUFVLENBQUMsQ0FDbkNQLElBQUksQ0FBQyxVQUFDQyxHQUFHLEVBQUs7VUFDYixJQUFRQyxJQUFJLEdBQUtELEdBQUcsQ0FBWkMsSUFBSTtVQUNaTCxPQUFPLENBQUNLLElBQUksQ0FBQztRQUNmLENBQUMsQ0FBQyxDQUNEQyxLQUFLLENBQUMsVUFBQ0MsS0FBSyxFQUFLO1VBQ2hCTixNQUFNLENBQUNNLEtBQUssQ0FBQztRQUNmLENBQUMsQ0FBQztNQUNOLENBQUMsTUFBTTtRQUNMLElBQUluQixNQUFNLEdBQUdQLFNBQVMsQ0FBQzZCLFVBQVUsRUFBRSxFQUFFLENBQUM7UUFDdEMsS0FBSyxJQUFJbEIsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHSixNQUFNLENBQUNELE1BQU0sRUFBRUssQ0FBQyxFQUFFLEVBQUU7VUFDdENLLGVBQVEsQ0FBQ0ssaUJBQWlCLENBQUNkLE1BQU0sQ0FBQ0ksQ0FBQyxDQUFDLENBQUMsQ0FDbENXLElBQUksQ0FBQyxVQUFDQyxHQUFHLEVBQUs7WUFDYixJQUFRQyxJQUFJLEdBQUtELEdBQUcsQ0FBWkMsSUFBSTtZQUNaTCxPQUFPLENBQUNLLElBQUksQ0FBQztVQUNmLENBQUMsQ0FBQyxDQUNEQyxLQUFLLENBQUMsVUFBQ0MsS0FBSyxFQUFLO1lBQ2hCTixNQUFNLENBQUNNLEtBQUssQ0FBQztVQUNmLENBQUMsQ0FBQztRQUNOO01BQ0Y7SUFDRixDQUFDLENBQUM7RUFDSixDQUFDO0VBQ0QsSUFBTU0seUJBQXlCLEdBQUcsU0FBNUJBLHlCQUF5QixDQUFJQyxNQUFNLEVBQUs7SUFDNUMsT0FBTyxJQUFJZixPQUFPLENBQUMsVUFBQ0MsT0FBTyxFQUFFQyxNQUFNLEVBQUs7TUFDdENKLGVBQVEsQ0FBQ2tCLGNBQWMsbUJBQU1ELE1BQU0sRUFBRyxDQUNuQ1gsSUFBSSxDQUFDLFVBQUNDLEdBQUcsRUFBSztRQUNiLElBQVFDLElBQUksR0FBS0QsR0FBRyxDQUFaQyxJQUFJO1FBQ1pMLE9BQU8sQ0FBQ0ssSUFBSSxDQUFDO01BQ2YsQ0FBQyxDQUFDLENBQ0RDLEtBQUssQ0FBQyxVQUFDQyxLQUFLLEVBQUs7UUFDaEJOLE1BQU0sQ0FBQ00sS0FBSyxDQUFDO01BQ2YsQ0FBQyxDQUFDO0lBQ04sQ0FBQyxDQUFDO0VBQ0osQ0FBQztFQUNELE9BQU87SUFDTFosd0JBQXdCLEVBQXhCQSx3QkFBd0I7SUFDeEJhLHdCQUF3QixFQUF4QkEsd0JBQXdCO0lBQ3hCSyx5QkFBeUIsRUFBekJBO0VBQ0YsQ0FBQztBQUNILENBQUM7QUFBQyxlQUNhbkIsV0FBVztBQUFBIiwiZmlsZSI6IjMxLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRU1DbGllbnQgfSBmcm9tICcuLi9pbmRleCc7XG5jb25zdCBfY2h1bmtBcnIgPSAob2xkQXJyLCBudW0pID0+IHtcbiAgb2xkQXJyLnNvcnQoKGEsIGIpID0+IHtcbiAgICByZXR1cm4gYSAtIGI7XG4gIH0pO1xuICBpZiAob2xkQXJyLmxlbmd0aCA8PSAwKSByZXR1cm4gb2xkQXJyO1xuICBsZXQgbmV3QXJyID0gW107XG4gIGlmIChNYXRoLmNlaWwob2xkQXJyLmxlbmd0aCAvIG51bSkgPD0gMSkge1xuICAgIG5ld0Fyci5wdXNoKG9sZEFycik7XG4gICAgcmV0dXJuIG5ld0FycjtcbiAgfVxuICBmb3IgKGxldCBpID0gMDsgaSA8IG9sZEFyci5sZW5ndGg7IGkgPSBpICsgbnVtKSB7XG4gICAgbmV3QXJyLnB1c2gob2xkQXJyLnNsaWNlKGksIGkgKyBudW0pKTtcbiAgfVxuICByZXR1cm4gbmV3QXJyO1xufTtcblxuY29uc3QgZW1Vc2VySW5vZnMgPSAoKSA9PiB7XG4gIGNvbnN0IGZldGNoVXNlckluZm9XaXRoTG9naW5JZCA9ICgpID0+IHtcbiAgICBjb25zdCB1c2VySWQgPSBFTUNsaWVudC51c2VyO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBpZiAodXNlcklkKSB7XG4gICAgICAgIEVNQ2xpZW50LmZldGNoVXNlckluZm9CeUlkKHVzZXJJZClcbiAgICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB7IGRhdGEgfSA9IHJlcztcbiAgICAgICAgICAgIHJlc29sdmUoZGF0YSk7XG4gICAgICAgICAgfSlcbiAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuICBjb25zdCBmZXRjaE90aGVySW5mb0Zyb21TZXJ2ZXIgPSAodXNlckxpc3QpID0+IHtcbiAgICBsZXQgZnJpZW5kTGlzdCA9IFtdO1xuICAgIGZyaWVuZExpc3QgPSBPYmplY3QuYXNzaWduKFtdLCB1c2VyTGlzdCk7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGlmIChmcmllbmRMaXN0Lmxlbmd0aCAmJiBmcmllbmRMaXN0Lmxlbmd0aCA8IDk5KSB7XG4gICAgICAgIEVNQ2xpZW50LmZldGNoVXNlckluZm9CeUlkKGZyaWVuZExpc3QpXG4gICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgY29uc3QgeyBkYXRhIH0gPSByZXM7XG4gICAgICAgICAgICByZXNvbHZlKGRhdGEpO1xuICAgICAgICAgIH0pXG4gICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxldCBuZXdBcnIgPSBfY2h1bmtBcnIoZnJpZW5kTGlzdCwgOTkpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5ld0Fyci5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIEVNQ2xpZW50LmZldGNoVXNlckluZm9CeUlkKG5ld0FycltpXSlcbiAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgeyBkYXRhIH0gPSByZXM7XG4gICAgICAgICAgICAgIHJlc29sdmUoZGF0YSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcbiAgY29uc3QgdXBkYXRlVXNlckluZm9zRnJvbVNlcnZlciA9IChwYXJhbXMpID0+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgRU1DbGllbnQudXBkYXRlVXNlckluZm8oeyAuLi5wYXJhbXMgfSlcbiAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gcmVzO1xuICAgICAgICAgIHJlc29sdmUoZGF0YSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbiAgfTtcbiAgcmV0dXJuIHtcbiAgICBmZXRjaFVzZXJJbmZvV2l0aExvZ2luSWQsXG4gICAgZmV0Y2hPdGhlckluZm9Gcm9tU2VydmVyLFxuICAgIHVwZGF0ZVVzZXJJbmZvc0Zyb21TZXJ2ZXIsXG4gIH07XG59O1xuZXhwb3J0IGRlZmF1bHQgZW1Vc2VySW5vZnM7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///31\n");

/***/ }),
/* 32 */
/*!********************************************************************************************!*\
  !*** /Users/hfp/Documents/HBuilderProjects/cunjin-socket-test/EaseIM/emApis/emContacts.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 1);\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\nvar _toConsumableArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ 33));\nvar _index = __webpack_require__(/*! ../index */ 16);\nvar emContacts = function emContacts() {\n  var fetchContactsListFromServer = function fetchContactsListFromServer() {\n    return new Promise(function (resolve, reject) {\n      _index.EMClient.getAllContacts().then(function (res) {\n        var data = res.data;\n        __f__(\"log\", '>>>>>获取全部好友列表', \" at EaseIM/emApis/emContacts.js:8\");\n        resolve(data);\n      }).catch(function (error) {\n        reject(error);\n      });\n    });\n  };\n  var removeContactFromServer = function removeContactFromServer(contactId) {\n    if (contactId) {\n      _index.EMClient.deleteContact(contactId);\n    }\n  };\n  var addContact = function addContact(contactId, applyMsg) {\n    if (contactId) {\n      _index.EMClient.addContact(contactId, applyMsg);\n    }\n  };\n  var acceptContactInvite = function acceptContactInvite(contactId) {\n    if (contactId) {\n      _index.EMClient.acceptContactInvite(contactId);\n    }\n  };\n  var declineContactInvite = function declineContactInvite(contactId) {\n    if (contactId) {\n      _index.EMClient.declineContactInvite(contactId);\n    }\n  };\n  var getBlocklistFromServer = function getBlocklistFromServer() {\n    return new Promise(function (resolve, reject) {\n      _index.EMClient.getBlocklist().then(function (res) {\n        var data = res.data;\n        resolve(data);\n      }).catch(function (error) {\n        reject(error);\n      });\n    });\n  };\n  var addUsersToBlocklist = function addUsersToBlocklist(userList) {\n    return new Promise(function (resolve, reject) {\n      _index.EMClient.addUsersToBlocklist({\n        name: (0, _toConsumableArray2.default)(userList)\n      }).then(function (res) {\n        var data = res.data;\n        resolve(data);\n      }).catch(function (error) {\n        reject(error);\n      });\n    });\n  };\n  var removeUsersFromBlocklist = function removeUsersFromBlocklist(userList) {\n    return new Promise(function (resolve, reject) {\n      _index.EMClient.removeUsersFromBlocklist({\n        name: (0, _toConsumableArray2.default)(userList)\n      }).then(function (res) {\n        var data = res.data;\n        resolve(data);\n      }).catch(function (error) {\n        reject(error);\n      });\n    });\n  };\n  return {\n    fetchContactsListFromServer: fetchContactsListFromServer,\n    removeContactFromServer: removeContactFromServer,\n    acceptContactInvite: acceptContactInvite,\n    declineContactInvite: declineContactInvite,\n    addContact: addContact,\n    getBlocklistFromServer: getBlocklistFromServer,\n    addUsersToBlocklist: addUsersToBlocklist,\n    removeUsersFromBlocklist: removeUsersFromBlocklist\n  };\n};\nvar _default = emContacts;\nexports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 12)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vRWFzZUlNL2VtQXBpcy9lbUNvbnRhY3RzLmpzIl0sIm5hbWVzIjpbImVtQ29udGFjdHMiLCJmZXRjaENvbnRhY3RzTGlzdEZyb21TZXJ2ZXIiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsIkVNQ2xpZW50IiwiZ2V0QWxsQ29udGFjdHMiLCJ0aGVuIiwicmVzIiwiZGF0YSIsImNhdGNoIiwiZXJyb3IiLCJyZW1vdmVDb250YWN0RnJvbVNlcnZlciIsImNvbnRhY3RJZCIsImRlbGV0ZUNvbnRhY3QiLCJhZGRDb250YWN0IiwiYXBwbHlNc2ciLCJhY2NlcHRDb250YWN0SW52aXRlIiwiZGVjbGluZUNvbnRhY3RJbnZpdGUiLCJnZXRCbG9ja2xpc3RGcm9tU2VydmVyIiwiZ2V0QmxvY2tsaXN0IiwiYWRkVXNlcnNUb0Jsb2NrbGlzdCIsInVzZXJMaXN0IiwibmFtZSIsInJlbW92ZVVzZXJzRnJvbUJsb2NrbGlzdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFVLEdBQVM7RUFDdkIsSUFBTUMsMkJBQTJCLEdBQUcsU0FBOUJBLDJCQUEyQixHQUFTO0lBQ3hDLE9BQU8sSUFBSUMsT0FBTyxDQUFDLFVBQUNDLE9BQU8sRUFBRUMsTUFBTSxFQUFLO01BQ3RDQyxlQUFRLENBQUNDLGNBQWMsRUFBRSxDQUN0QkMsSUFBSSxDQUFDLFVBQUNDLEdBQUcsRUFBSztRQUNiLElBQVFDLElBQUksR0FBS0QsR0FBRyxDQUFaQyxJQUFJO1FBQ1osYUFBWSxlQUFlO1FBQzNCTixPQUFPLENBQUNNLElBQUksQ0FBQztNQUNmLENBQUMsQ0FBQyxDQUNEQyxLQUFLLENBQUMsVUFBQ0MsS0FBSyxFQUFLO1FBQ2hCUCxNQUFNLENBQUNPLEtBQUssQ0FBQztNQUNmLENBQUMsQ0FBQztJQUNOLENBQUMsQ0FBQztFQUNKLENBQUM7RUFDRCxJQUFNQyx1QkFBdUIsR0FBRyxTQUExQkEsdUJBQXVCLENBQUlD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QW5CQSxtQkFBbUI7SUFDbkJHLHdCQUF3QixFQUF4QkE7RUFDRixDQUFDO0FBQ0gsQ0FBQztBQUFDLGVBQ2F4QixVQUFVO0FBQUEsMkIiLCJmaWxlIjoiMzIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFTUNsaWVudCB9IGZyb20gJy4uL2luZGV4JztcbmNvbnN0IGVtQ29udGFjdHMgPSAoKSA9PiB7XG4gIGNvbnN0IGZldGNoQ29udGFjdHNMaXN0RnJvbVNlcnZlciA9ICgpID0+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgRU1DbGllbnQuZ2V0QWxsQ29udGFjdHMoKVxuICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgY29uc3QgeyBkYXRhIH0gPSByZXM7XG4gICAgICAgICAgY29uc29sZS5sb2coJz4+Pj4+6I635Y+W5YWo6YOo5aW95Y+L5YiX6KGoJyk7XG4gICAgICAgICAgcmVzb2x2ZShkYXRhKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuICBjb25zdCByZW1vdmVDb250YWN0RnJvbVNlcnZlciA9IChjb250YWN0SWQpID0+IHtcbiAgICBpZiAoY29udGFjdElkKSB7XG4gICAgICBFTUNsaWVudC5kZWxldGVDb250YWN0KGNvbnRhY3RJZCk7XG4gICAgfVxuICB9O1xuICBjb25zdCBhZGRDb250YWN0ID0gKGNvbnRhY3RJZCwgYXBwbHlNc2cpID0+IHtcbiAgICBpZiAoY29udGFjdElkKSB7XG4gICAgICBFTUNsaWVudC5hZGRDb250YWN0KGNvbnRhY3RJZCwgYXBwbHlNc2cpO1xuICAgIH1cbiAgfTtcbiAgY29uc3QgYWNjZXB0Q29udGFjdEludml0ZSA9IChjb250YWN0SWQpID0+IHtcbiAgICBpZiAoY29udGFjdElkKSB7XG4gICAgICBFTUNsaWVudC5hY2NlcHRDb250YWN0SW52aXRlKGNvbnRhY3RJZCk7XG4gICAgfVxuICB9O1xuICBjb25zdCBkZWNsaW5lQ29udGFjdEludml0ZSA9IChjb250YWN0SWQpID0+IHtcbiAgICBpZiAoY29udGFjdElkKSB7XG4gICAgICBFTUNsaWVudC5kZWNsaW5lQ29udGFjdEludml0ZShjb250YWN0SWQpO1xuICAgIH1cbiAgfTtcbiAgY29uc3QgZ2V0QmxvY2tsaXN0RnJvbVNlcnZlciA9ICgpID0+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgRU1DbGllbnQuZ2V0QmxvY2tsaXN0KClcbiAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gcmVzO1xuICAgICAgICAgIHJlc29sdmUoZGF0YSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbiAgfTtcbiAgY29uc3QgYWRkVXNlcnNUb0Jsb2NrbGlzdCA9ICh1c2VyTGlzdCkgPT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBFTUNsaWVudC5hZGRVc2Vyc1RvQmxvY2tsaXN0KHsgbmFtZTogWy4uLnVzZXJMaXN0XSB9KVxuICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgY29uc3QgeyBkYXRhIH0gPSByZXM7XG4gICAgICAgICAgcmVzb2x2ZShkYXRhKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuICBjb25zdCByZW1vdmVVc2Vyc0Zyb21CbG9ja2xpc3QgPSAodXNlckxpc3QpID0+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgRU1DbGllbnQucmVtb3ZlVXNlcnNGcm9tQmxvY2tsaXN0KHsgbmFtZTogWy4uLnVzZXJMaXN0XSB9KVxuICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgY29uc3QgeyBkYXRhIH0gPSByZXM7XG4gICAgICAgICAgcmVzb2x2ZShkYXRhKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuICByZXR1cm4ge1xuICAgIGZldGNoQ29udGFjdHNMaXN0RnJvbVNlcnZlcixcbiAgICByZW1vdmVDb250YWN0RnJvbVNlcnZlcixcbiAgICBhY2NlcHRDb250YWN0SW52aXRlLFxuICAgIGRlY2xpbmVDb250YWN0SW52aXRlLFxuICAgIGFkZENvbnRhY3QsXG4gICAgZ2V0QmxvY2tsaXN0RnJvbVNlcnZlcixcbiAgICBhZGRVc2Vyc1RvQmxvY2tsaXN0LFxuICAgIHJlbW92ZVVzZXJzRnJvbUJsb2NrbGlzdCxcbiAgfTtcbn07XG5leHBvcnQgZGVmYXVsdCBlbUNvbnRhY3RzO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///32\n");

/***/ }),
/* 33 */
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles.js */ 34);
var iterableToArray = __webpack_require__(/*! ./iterableToArray.js */ 35);
var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray.js */ 23);
var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread.js */ 36);
function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}
module.exports = _toConsumableArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 34 */
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ 24);
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}
module.exports = _arrayWithoutHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 35 */
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
module.exports = _iterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 36 */
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
module.exports = _nonIterableSpread, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 37 */
/*!******************************************************************************************!*\
  !*** /Users/hfp/Documents/HBuilderProjects/cunjin-socket-test/EaseIM/emApis/emGroups.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 1);\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\nvar _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 2));\nvar _EaseIM = __webpack_require__(/*! @/EaseIM */ 16);\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\nvar emGroups = function emGroups() {\n  var fetchJoinedGroupListFromServer = function fetchJoinedGroupListFromServer() {\n    var pageNum = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;\n    var pageSize = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 20;\n    return new Promise(function (resolve, reject) {\n      __f__(\"log\", '>>>>开始获取加入的群组列表', \" at EaseIM/emApis/emGroups.js:5\");\n      _EaseIM.EMClient.getJoinedGroups({\n        pageNum: pageNum,\n        pageSize: pageSize,\n        needAffiliations: true,\n        needRole: true\n      }).then(function (res) {\n        resolve(res);\n      }).catch(function (error) {\n        reject(error);\n      });\n    });\n  };\n  var createNewGroup = function createNewGroup(params) {\n    return new Promise(function (resolve, reject) {\n      __f__(\"log\", '>>>>开始创建群组', \" at EaseIM/emApis/emGroups.js:22\");\n      _EaseIM.EMClient.createGroup({\n        data: _objectSpread({}, params)\n      }).then(function (res) {\n        resolve(res.data);\n      }).catch(function (error) {\n        reject(error);\n      });\n    });\n  };\n  var getGroupInfosFromServer = function getGroupInfosFromServer(groupId) {\n    return new Promise(function (resolve, reject) {\n      _EaseIM.EMClient.getGroupInfo({\n        groupId: groupId\n      }).then(function (res) {\n        resolve(res.data);\n      }).catch(function (error) {\n        reject(error);\n      });\n    });\n  };\n  var getGroupMembersFromServer = function getGroupMembersFromServer(groupId) {\n    //暂且仅取前100个群成员\n    var pageNum = 1,\n      pageSize = 100;\n    return new Promise(function (resolve, reject) {\n      _EaseIM.EMClient.listGroupMembers({\n        pageNum: pageNum,\n        pageSize: pageSize,\n        groupId: groupId\n      }).then(function (res) {\n        resolve(res.data);\n      }).catch(function (error) {\n        reject(error);\n      });\n    });\n  };\n  var inviteUsersToGroup = function inviteUsersToGroup(groupId, memberIdList) {\n    return new Promise(function (resolve, reject) {\n      _EaseIM.EMClient.inviteUsersToGroup({\n        groupId: groupId,\n        users: memberIdList\n      }).then(function (res) {\n        resolve(res.data);\n      }).catch(function (error) {\n        reject(error);\n      });\n    });\n  };\n  var leaveGroupFromServer = function leaveGroupFromServer(groupId) {\n    return new Promise(function (resolve, reject) {\n      _EaseIM.EMClient.leaveGroup({\n        groupId: groupId\n      }).then(function (res) {\n        resolve(res.data);\n      }).catch(function (error) {\n        reject(error);\n      });\n    });\n  };\n  var destroyGroupFromServer = function destroyGroupFromServer(groupId) {\n    return new Promise(function (resolve, reject) {\n      _EaseIM.EMClient.destroyGroup({\n        groupId: groupId\n      }).then(function (res) {\n        resolve(res.data);\n      }).catch(function (error) {\n        reject(error);\n      });\n    });\n  };\n  var acceptGroupInvite = function acceptGroupInvite(invitee, groupId) {\n    return new Promise(function (resolve, reject) {\n      _EaseIM.EMClient.acceptGroupInvite({\n        groupId: groupId,\n        invitee: invitee\n      }).then(function (res) {\n        resolve(res.data);\n      }).catch(function (error) {\n        reject(error);\n      });\n    });\n  };\n  var rejectGroupInvite = function rejectGroupInvite(invitee, groupId) {\n    return new Promise(function (resolve, reject) {\n      _EaseIM.EMClient.rejectGroupInvite({\n        groupId: groupId,\n        invitee: invitee\n      }).then(function (res) {\n        resolve(res.data);\n      }).catch(function (error) {\n        reject(error);\n      });\n    });\n  };\n  var joinPublicGroup = function joinPublicGroup(groupId) {\n    return new Promise(function (resolve, reject) {\n      _EaseIM.EMClient.joinGroup({\n        groupId: groupId,\n        message: 'I want to join the group'\n      }).then(function (res) {\n        resolve(res.data);\n      }).catch(function (error) {\n        reject(error);\n      });\n    });\n  };\n  var modifyGroupInfo = function modifyGroupInfo(groupId, params) {\n    return new Promise(function (resolve, reject) {\n      _EaseIM.EMClient.modifyGroup(_objectSpread({\n        groupId: groupId\n      }, params)).then(function (res) {\n        resolve(res);\n      }).catch(function (error) {\n        reject(error);\n      });\n    });\n  };\n  //分页获取群组列表\n  var listGroupMembersFromServer = function listGroupMembersFromServer(params) {\n    var _params$pageNum = params.pageNum,\n      pageNum = _params$pageNum === void 0 ? 1 : _params$pageNum,\n      _params$pageSize = params.pageSize,\n      pageSize = _params$pageSize === void 0 ? 100 : _params$pageSize,\n      groupId = params.groupId;\n    return new Promise(function (resolve, reject) {\n      _EaseIM.EMClient.listGroupMembers(_objectSpread({}, params)).then(function (res) {\n        resolve(res.data);\n      }).catch(function (error) {\n        reject(error);\n      });\n    });\n  };\n  /* 群组属性相关 */\n  //获取单个用户属性\n  var getSingleGroupAttributesFromServer = function getSingleGroupAttributesFromServer(groupId, userId) {\n    var options = {\n      groupId: groupId,\n      userId: userId\n    };\n    return new Promise(function (resolve, reject) {\n      _EaseIM.EMClient.getGroupMemberAttributes(_objectSpread({}, options)).then(function (res) {\n        resolve(res);\n      }).catch(function (error) {\n        reject(error);\n      });\n    });\n  };\n  //设置单个群组属性\n  var setSingleGroupAttributesFromServer = function setSingleGroupAttributesFromServer(params) {\n    var groupId = params.groupId,\n      userId = params.userId,\n      memberAttributes = params.memberAttributes;\n    return new Promise(function (resolve, reject) {\n      _EaseIM.EMClient.setGroupMemberAttributes({\n        groupId: groupId,\n        userId: userId,\n        memberAttributes: _objectSpread({}, memberAttributes)\n      }).then(function (res) {\n        resolve(res);\n      }).catch(function (error) {\n        reject(error);\n      });\n    });\n  };\n  //根据key获取多个群组成员自定义属性\n  var getMultiGroupAttributesFromServer = function getMultiGroupAttributesFromServer(params) {\n    var groupId = params.groupId,\n      userIds = params.userIds,\n      keys = params.keys;\n    return new Promise(function (resolve, reject) {\n      _EaseIM.EMClient.getGroupMembersAttributes({\n        groupId: groupId,\n        userIds: userIds,\n        keys: keys\n      }).then(function (res) {\n        resolve(res.data);\n      }).catch(function (error) {\n        reject(error);\n      });\n    });\n  };\n  return {\n    fetchJoinedGroupListFromServer: fetchJoinedGroupListFromServer,\n    createNewGroup: createNewGroup,\n    getGroupInfosFromServer: getGroupInfosFromServer,\n    getGroupMembersFromServer: getGroupMembersFromServer,\n    inviteUsersToGroup: inviteUsersToGroup,\n    leaveGroupFromServer: leaveGroupFromServer,\n    destroyGroupFromServer: destroyGroupFromServer,\n    acceptGroupInvite: acceptGroupInvite,\n    rejectGroupInvite: rejectGroupInvite,\n    joinPublicGroup: joinPublicGroup,\n    modifyGroupInfo: modifyGroupInfo,\n    listGroupMembersFromServer: listGroupMembersFromServer,\n    getSingleGroupAttributesFromServer: getSingleGroupAttributesFromServer,\n    getMultiGroupAttributesFromServer: getMultiGroupAttributesFromServer,\n    setSingleGroupAttributesFromServer: setSingleGroupAttributesFromServer\n  };\n};\nvar _default = emGroups;\nexports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 12)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vRWFzZUlNL2VtQXBpcy9lbUdyb3Vwcy5qcyJdLCJuYW1lcyI6WyJlbUdyb3VwcyIsImZldGNoSm9pbmVkR3JvdXBMaXN0RnJvbVNlcnZlciIsInBhZ2VOdW0iLCJwYWdlU2l6ZSIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiRU1DbGllbnQiLCJnZXRKb2luZWRHcm91cHMiLCJuZWVkQWZmaWxpYXRpb25zIiwibmVlZFJvbGUiLCJ0aGVuIiwicmVzIiwiY2F0Y2giLCJlcnJvciIsImNyZWF0ZU5ld0dyb3VwIiwicGFyYW1zIiwiY3JlYXRlR3JvdXAiLCJkYXRhIiwiZ2V0R3JvdXBJbmZvc0Zyb21TZXJ2ZXIiLCJncm91cElkIiwiZ2V0R3JvdXBJbmZvIiwiZ2V0R3JvdXBNZW1iZXJzRnJvbVNlcnZlciIsImxpc3RHcm91cE1lbWJlcnMiLCJpbnZpdGVVc2Vyc1RvR3JvdXAiLCJtZW1iZXJJZExpc3QiLCJ1c2VycyIsImxlYXZlR3JvdXBGcm9tU2VydmVyIiwibGVhdmVHcm91cCIsImRlc3Ryb3lHcm91cEZyb21TZXJ2ZXIiLCJkZXN0cm95R3JvdXAiLCJhY2NlcHRHcm91cEludml0ZSIsImludml0ZWUiLCJyZWplY3RHcm91cEludml0ZSIsImpvaW5QdWJsaWNHcm91cCIsImpvaW5Hcm91cCIsIm1lc3NhZ2UiLCJtb2RpZnlHcm91cEluZm8iLCJtb2RpZnlHcm91cCIsImxpc3RHcm91cE1lbWJlcnNGcm9tU2VydmVyIiwiZ2V0U2luZ2xlR3JvdXBBdHRyaWJ1dGVzRnJvbVNlcnZlciIsInVzZXJJZCIsIm9wdGlvbnMiLCJnZXRHcm91cE1lbWJlckF0dHJpYnV0ZXMiLCJzZXRTaW5nbGVHcm91cEF0dHJpYnV0ZXNGcm9tU2VydmVyIiwibWVtYmVyQXR0cmlidXRlcyIsInNldEdyb3VwTWVtYmVyQXR0cmlidXRlcyIsImdldE11bHRpR3JvdXBBdHRyaWJ1dGVzRnJvbVNlcnZlciIsInVzZXJJZHMiLCJrZXlzIiwiZ2V0R3JvdXBN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Q1EsS0FBSyxDQUFDO01BQ2YsQ0FBQyxDQUFDO0lBQ04sQ0FBQyxDQUFDO0VBQ0osQ0FBQztFQUVELE9BQU87SUFDTGIsOEJBQThCLEVBQTlCQSw4QkFBOEI7SUFDOUJjLGNBQWMsRUFBZEEsY0FBYztJQUNkSSx1QkFBdUIsRUFBdkJBLHVCQUF1QjtJQUN2QkcseUJBQXlCLEVBQXpCQSx5QkFBeUI7SUFDekJFLGtCQUFrQixFQUFsQkEsa0JBQWtCO0lBQ2xCRyxvQkFBb0IsRUFBcEJBLG9CQUFvQjtJQUNwQkUsc0JBQXNCLEVBQXRCQSxzQkFBc0I7SUFDdEJFLGlCQUFpQixFQUFqQkEsaUJBQWlCO0lBQ2pCRSxpQkFBaUIsRUFBakJBLGlCQUFpQjtJQUNqQkMsZUFBZSxFQUFmQSxlQUFlO0lBQ2ZHLGVBQWUsRUFBZkEsZUFBZTtJQUNmRSwwQkFBMEIsRUFBMUJBLDBCQUEwQjtJQUMxQkMsa0NBQWtDLEVBQWxDQSxrQ0FBa0M7SUFDbENPLGlDQUFpQyxFQUFqQ0EsaUNBQWlDO0lBQ2pDSCxrQ0FBa0MsRUFBbENBO0VBQ0YsQ0FBQztBQUNILENBQUM7QUFBQyxlQUVhNUMsUUFBUTtBQUFBLDJCIiwiZmlsZSI6IjM3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRU1DbGllbnQgfSBmcm9tICdAL0Vhc2VJTSc7XG5jb25zdCBlbUdyb3VwcyA9ICgpID0+IHtcbiAgY29uc3QgZmV0Y2hKb2luZWRHcm91cExpc3RGcm9tU2VydmVyID0gKHBhZ2VOdW0gPSAwLCBwYWdlU2l6ZSA9IDIwKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCc+Pj4+5byA5aeL6I635Y+W5Yqg5YWl55qE576k57uE5YiX6KGoJyk7XG4gICAgICBFTUNsaWVudC5nZXRKb2luZWRHcm91cHMoe1xuICAgICAgICBwYWdlTnVtLFxuICAgICAgICBwYWdlU2l6ZSxcbiAgICAgICAgbmVlZEFmZmlsaWF0aW9uczogdHJ1ZSxcbiAgICAgICAgbmVlZFJvbGU6IHRydWUsXG4gICAgICB9KVxuICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgcmVzb2x2ZShyZXMpO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG4gIGNvbnN0IGNyZWF0ZU5ld0dyb3VwID0gKHBhcmFtcykgPT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygnPj4+PuW8gOWni+WIm+W7uue+pOe7hCcpO1xuICAgICAgRU1DbGllbnQuY3JlYXRlR3JvdXAoeyBkYXRhOiB7IC4uLnBhcmFtcyB9IH0pXG4gICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICByZXNvbHZlKHJlcy5kYXRhKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuICBjb25zdCBnZXRHcm91cEluZm9zRnJvbVNlcnZlciA9IChncm91cElkKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIEVNQ2xpZW50LmdldEdyb3VwSW5mbyh7XG4gICAgICAgIGdyb3VwSWQsXG4gICAgICB9KVxuICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgcmVzb2x2ZShyZXMuZGF0YSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbiAgfTtcbiAgY29uc3QgZ2V0R3JvdXBNZW1iZXJzRnJvbVNlcnZlciA9IChncm91cElkKSA9PiB7XG4gICAgLy/mmoLkuJTku4Xlj5bliY0xMDDkuKrnvqTmiJDlkZhcbiAgICBjb25zdCBwYWdlTnVtID0gMSxcbiAgICAgIHBhZ2VTaXplID0gMTAwO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBFTUNsaWVudC5saXN0R3JvdXBNZW1iZXJzKHtcbiAgICAgICAgcGFnZU51bTogcGFnZU51bSxcbiAgICAgICAgcGFnZVNpemU6IHBhZ2VTaXplLFxuICAgICAgICBncm91cElkLFxuICAgICAgfSlcbiAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgIHJlc29sdmUocmVzLmRhdGEpO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG4gIGNvbnN0IGludml0ZVVzZXJzVG9Hcm91cCA9IChncm91cElkLCBtZW1iZXJJZExpc3QpID0+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgRU1DbGllbnQuaW52aXRlVXNlcnNUb0dyb3VwKHtcbiAgICAgICAgZ3JvdXBJZDogZ3JvdXBJZCxcbiAgICAgICAgdXNlcnM6IG1lbWJlcklkTGlzdCxcbiAgICAgIH0pXG4gICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICByZXNvbHZlKHJlcy5kYXRhKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuICBjb25zdCBsZWF2ZUdyb3VwRnJvbVNlcnZlciA9IChncm91cElkKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIEVNQ2xpZW50LmxlYXZlR3JvdXAoeyBncm91cElkIH0pXG4gICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICByZXNvbHZlKHJlcy5kYXRhKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuICBjb25zdCBkZXN0cm95R3JvdXBGcm9tU2VydmVyID0gKGdyb3VwSWQpID0+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgRU1DbGllbnQuZGVzdHJveUdyb3VwKHsgZ3JvdXBJZCB9KVxuICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgcmVzb2x2ZShyZXMuZGF0YSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbiAgfTtcbiAgY29uc3QgYWNjZXB0R3JvdXBJbnZpdGUgPSAoaW52aXRlZSwgZ3JvdXBJZCkgPT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBFTUNsaWVudC5hY2NlcHRHcm91cEludml0ZSh7XG4gICAgICAgIGdyb3VwSWQ6IGdyb3VwSWQsXG4gICAgICAgIGludml0ZWU6IGludml0ZWUsXG4gICAgICB9KVxuICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgcmVzb2x2ZShyZXMuZGF0YSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbiAgfTtcbiAgY29uc3QgcmVqZWN0R3JvdXBJbnZpdGUgPSAoaW52aXRlZSwgZ3JvdXBJZCkgPT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBFTUNsaWVudC5yZWplY3RHcm91cEludml0ZSh7XG4gICAgICAgIGdyb3VwSWQ6IGdyb3VwSWQsXG4gICAgICAgIGludml0ZWU6IGludml0ZWUsXG4gICAgICB9KVxuICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgcmVzb2x2ZShyZXMuZGF0YSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbiAgfTtcbiAgY29uc3Qgam9pblB1YmxpY0dyb3VwID0gKGdyb3VwSWQpID0+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgRU1DbGllbnQuam9pbkdyb3VwKHsgZ3JvdXBJZCwgbWVzc2FnZTogJ0kgd2FudCB0byBqb2luIHRoZSBncm91cCcgfSlcbiAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgIHJlc29sdmUocmVzLmRhdGEpO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG4gIGNvbnN0IG1vZGlmeUdyb3VwSW5mbyA9IChncm91cElkLCBwYXJhbXMpID0+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgRU1DbGllbnQubW9kaWZ5R3JvdXAoe1xuICAgICAgICBncm91cElkLFxuICAgICAgICAuLi5wYXJhbXMsXG4gICAgICB9KVxuICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgcmVzb2x2ZShyZXMpO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG4gIC8v5YiG6aG16I635Y+W576k57uE5YiX6KGoXG4gIGNvbnN0IGxpc3RHcm91cE1lbWJlcnNGcm9tU2VydmVyID0gKHBhcmFtcykgPT4ge1xuICAgIGNvbnN0IHsgcGFnZU51bSA9IDEsIHBhZ2VTaXplID0gMTAwLCBncm91cElkIH0gPSBwYXJhbXM7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIEVNQ2xpZW50Lmxpc3RHcm91cE1lbWJlcnMoe1xuICAgICAgICAuLi5wYXJhbXMsXG4gICAgICB9KVxuICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgcmVzb2x2ZShyZXMuZGF0YSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbiAgfTtcbiAgLyog576k57uE5bGe5oCn55u45YWzICovXG4gIC8v6I635Y+W5Y2V5Liq55So5oi35bGe5oCnXG4gIGNvbnN0IGdldFNpbmdsZUdyb3VwQXR0cmlidXRlc0Zyb21TZXJ2ZXIgPSAoZ3JvdXBJZCwgdXNlcklkKSA9PiB7XG4gICAgbGV0IG9wdGlvbnMgPSB7XG4gICAgICBncm91cElkLFxuICAgICAgdXNlcklkLFxuICAgIH07XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIEVNQ2xpZW50LmdldEdyb3VwTWVtYmVyQXR0cmlidXRlcyh7IC4uLm9wdGlvbnMgfSlcbiAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgIHJlc29sdmUocmVzKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuICAvL+iuvue9ruWNleS4que+pOe7hOWxnuaAp1xuICBjb25zdCBzZXRTaW5nbGVHcm91cEF0dHJpYnV0ZXNGcm9tU2VydmVyID0gKHBhcmFtcykgPT4ge1xuICAgIGNvbnN0IHsgZ3JvdXBJZCwgdXNlcklkLCBtZW1iZXJBdHRyaWJ1dGVzIH0gPSBwYXJhbXM7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIEVNQ2xpZW50LnNldEdyb3VwTWVtYmVyQXR0cmlidXRlcyh7XG4gICAgICAgIGdyb3VwSWQsXG4gICAgICAgIHVzZXJJZCxcbiAgICAgICAgbWVtYmVyQXR0cmlidXRlczogeyAuLi5tZW1iZXJBdHRyaWJ1dGVzIH0sXG4gICAgICB9KVxuICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgcmVzb2x2ZShyZXMpO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG4gIC8v5qC55o2ua2V56I635Y+W5aSa5Liq576k57uE5oiQ5ZGY6Ieq5a6a5LmJ5bGe5oCnXG4gIGNvbnN0IGdldE11bHRpR3JvdXBBdHRyaWJ1dGVzRnJvbVNlcnZlciA9IChwYXJhbXMpID0+IHtcbiAgICBjb25zdCB7IGdyb3VwSWQsIHVzZXJJZHMsIGtleXMgfSA9IHBhcmFtcztcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgRU1DbGllbnQuZ2V0R3JvdXBNZW1iZXJzQXR0cmlidXRlcyh7XG4gICAgICAgIGdyb3VwSWQsXG4gICAgICAgIHVzZXJJZHMsXG4gICAgICAgIGtleXMsXG4gICAgICB9KVxuICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgcmVzb2x2ZShyZXMuZGF0YSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGZldGNoSm9pbmVkR3JvdXBMaXN0RnJvbVNlcnZlcixcbiAgICBjcmVhdGVOZXdHcm91cCxcbiAgICBnZXRHcm91cEluZm9zRnJvbVNlcnZlcixcbiAgICBnZXRHcm91cE1lbWJlcnNGcm9tU2VydmVyLFxuICAgIGludml0ZVVzZXJzVG9Hcm91cCxcbiAgICBsZWF2ZUdyb3VwRnJvbVNlcnZlcixcbiAgICBkZXN0cm95R3JvdXBGcm9tU2VydmVyLFxuICAgIGFjY2VwdEdyb3VwSW52aXRlLFxuICAgIHJlamVjdEdyb3VwSW52aXRlLFxuICAgIGpvaW5QdWJsaWNHcm91cCxcbiAgICBtb2RpZnlHcm91cEluZm8sXG4gICAgbGlzdEdyb3VwTWVtYmVyc0Zyb21TZXJ2ZXIsXG4gICAgZ2V0U2luZ2xlR3JvdXBBdHRyaWJ1dGVzRnJvbVNlcnZlcixcbiAgICBnZXRNdWx0aUdyb3VwQXR0cmlidXRlc0Zyb21TZXJ2ZXIsXG4gICAgc2V0U2luZ2xlR3JvdXBBdHRyaWJ1dGVzRnJvbVNlcnZlcixcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGVtR3JvdXBzO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///37\n");

/***/ }),
/* 38 */
/*!*******************************************************************************************!*\
  !*** /Users/hfp/Documents/HBuilderProjects/cunjin-socket-test/EaseIM/emApis/emReadAck.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\nvar _index = __webpack_require__(/*! ../index */ 16);\nvar emSendReadAck = function emSendReadAck() {\n  // 处理未读消息回执\n  var sendReadAckMsg = function sendReadAckMsg(receivemsg) {\n    var chatType = receivemsg.chatType,\n      from = receivemsg.from,\n      id = receivemsg.id;\n    var option = {\n      type: 'read',\n      // 消息是否已读。\n      chatType: chatType,\n      // 会话类型，这里为单聊。\n      to: from,\n      // 消息接收方的用户 ID。\n      id: id // 需要发送已读回执的消息 ID。\n    };\n\n    var msg = _index.EaseSDK.message.create(option);\n    _index.EMClient.send(msg);\n  };\n  return {\n    sendReadAckMsg: sendReadAckMsg\n  };\n};\nvar _default = emSendReadAck;\nexports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vRWFzZUlNL2VtQXBpcy9lbVJlYWRBY2suanMiXSwibmFtZXMiOlsiZW1TZW5kUmVhZEFjayIsInNlbmRSZWFkQWNrTXNnIiwicmVjZWl2ZW1zZyIsImNoYXRUeXBlIiwiZnJvbSIsImlkIiwib3B0aW9uIiwidHlwZSIsInRvIiwibXNnIiwiRWFzZVNESyIsIm1lc3NhZ2UiLCJjcmVhdGUiLCJFTUNsaWVudCIsInNlbmQiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0EsSUFBTUEsYUFBYSxHQUFHLFNBQWhCQSxhQUFhLEdBQVM7RUFDMUI7RUFDQSxJQUFNQyxjQUFjLEdBQUcsU0FBakJBLGNBQWMsQ0FBSUMsVUFBVSxFQUFLO0lBQ3JDLElBQVFDLFFBQVEsR0FBZUQsVUFBVSxDQUFqQ0MsUUFBUTtNQUFFQyxJQUFJLEdBQVNGLFVBQVUsQ0FBdkJFLElBQUk7TUFBRUMsRUFBRSxHQUFLSCxVQUFVLENBQWpCRyxFQUFFO0lBQzFCLElBQUlDLE1BQU0sR0FBRztNQUNYQyxJQUFJLEVBQUUsTUFBTTtNQUFFO01BQ2RKLFFBQVEsRUFBRUEsUUFBUTtNQUFFO01BQ3BCSyxFQUFFLEVBQUVKLElBQUk7TUFBRTtNQUNWQyxFQUFFLEVBQUVBLEVBQUUsQ0FBRTtJQUNWLENBQUM7O0lBQ0QsSUFBSUksR0FBRyxHQUFHQyxjQUFPLENBQUNDLE9BQU8sQ0FBQ0MsTUFBTSxDQUFDTixNQUFNLENBQUM7SUFDeENPLGVBQVEsQ0FBQ0MsSUFBSSxDQUFDTCxHQUFHLENBQUM7RUFDcEIsQ0FBQztFQUNELE9BQU87SUFDTFIsY0FBYyxFQUFkQTtFQUNGLENBQUM7QUFDSCxDQUFDO0FBQUMsZUFFYUQsYUFBYTtBQUFBIiwiZmlsZSI6IjM4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRWFzZVNESywgRU1DbGllbnQgfSBmcm9tICcuLi9pbmRleCc7XG5jb25zdCBlbVNlbmRSZWFkQWNrID0gKCkgPT4ge1xuICAvLyDlpITnkIbmnKror7vmtojmga/lm57miadcbiAgY29uc3Qgc2VuZFJlYWRBY2tNc2cgPSAocmVjZWl2ZW1zZykgPT4ge1xuICAgIGNvbnN0IHsgY2hhdFR5cGUsIGZyb20sIGlkIH0gPSByZWNlaXZlbXNnO1xuICAgIGxldCBvcHRpb24gPSB7XG4gICAgICB0eXBlOiAncmVhZCcsIC8vIOa2iOaBr+aYr+WQpuW3suivu+OAglxuICAgICAgY2hhdFR5cGU6IGNoYXRUeXBlLCAvLyDkvJror53nsbvlnovvvIzov5nph4zkuLrljZXogYrjgIJcbiAgICAgIHRvOiBmcm9tLCAvLyDmtojmga/mjqXmlLbmlrnnmoTnlKjmiLcgSUTjgIJcbiAgICAgIGlkOiBpZCwgLy8g6ZyA6KaB5Y+R6YCB5bey6K+75Zue5omn55qE5raI5oGvIElE44CCXG4gICAgfTtcbiAgICBsZXQgbXNnID0gRWFzZVNESy5tZXNzYWdlLmNyZWF0ZShvcHRpb24pO1xuICAgIEVNQ2xpZW50LnNlbmQobXNnKTtcbiAgfTtcbiAgcmV0dXJuIHtcbiAgICBzZW5kUmVhZEFja01zZyxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGVtU2VuZFJlYWRBY2s7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///38\n");

/***/ }),
/* 39 */
/*!************************************************************************************************!*\
  !*** /Users/hfp/Documents/HBuilderProjects/cunjin-socket-test/EaseIM/emApis/emConversation.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 1);\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\nvar _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 2));\nvar _index = __webpack_require__(/*! ../index */ 16);\nvar _constant = __webpack_require__(/*! ../constant */ 40);\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\nvar emConversation = function emConversation() {\n  //从服务端获取置顶会话列表\n  var fetchPinConversationFromServer = function fetchPinConversationFromServer() {\n    var pageSize = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 50;\n    var cursor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';\n    return new Promise(function (resolve, reject) {\n      _index.EMClient.getServerPinnedConversations({\n        pageSize: pageSize,\n        cursor: cursor\n      }).then(function (res) {\n        __f__(\"log\", '>>>>置顶会话列表数据获取成功', \" at EaseIM/emApis/emConversation.js:9\");\n        resolve(res);\n      }).catch(function (error) {\n        reject(error);\n      });\n    });\n  };\n  //置顶会话列表\n  var pinConversationItem = function pinConversationItem(params) {\n    var conversationId = params.conversationId,\n      conversationType = params.conversationType,\n      isPinned = params.isPinned;\n    return new Promise(function (resolve, reject) {\n      _index.EMClient.pinConversation({\n        conversationId: conversationId,\n        conversationType: conversationType,\n        isPinned: isPinned\n      }).then(function (res) {\n        __f__(\"log\", '>>>>置顶会话列表添加成功', \" at EaseIM/emApis/emConversation.js:27\");\n        resolve(res);\n      }).catch(function (error) {\n        reject(error);\n      });\n    });\n  };\n  //从服务端获取会话列表\n  var fetchConversationFromServer = function fetchConversationFromServer() {\n    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {\n      pageSize: 20,\n      cursor: ''\n    };\n    return new Promise(function (resolve, reject) {\n      //支持分页这里写死只取二十条\n      _index.EMClient.getServerConversations(_objectSpread({}, options)).then(function (res) {\n        __f__(\"log\", '>>>>会话列表数据获取成功', \" at EaseIM/emApis/emConversation.js:43\");\n        var result = res.data.conversations;\n        resolve(result);\n      }).catch(function (error) {\n        reject(error);\n      });\n    });\n  };\n  //从服务端删除会话\n  var removeConversationFromServer = function removeConversationFromServer(channel) {\n    var chatType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _constant.CHAT_TYPE.SINGLE_CHAT;\n    var deleteRoam = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;\n    if (!channel) return;\n    return new Promise(function (resolve, reject) {\n      _index.EMClient.deleteConversation({\n        channel: channel,\n        chatType: chatType,\n        deleteRoam: deleteRoam\n      }).then(function (res) {\n        __f__(\"log\", '>>>>会话删除成功', \" at EaseIM/emApis/emConversation.js:62\");\n        resolve(res);\n      }).catch(function (error) {\n        reject(error);\n      });\n    });\n  };\n  //发送会话已读回执\n  var sendChannelAck = function sendChannelAck(targetId) {\n    var chatType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _constant.CHAT_TYPE.SINGLE_CHAT;\n    if (!targetId) return;\n    var option = {\n      chatType: chatType,\n      // 会话类型，设置为单聊。\n      type: 'channel',\n      // 消息类型。\n      to: targetId // 接收消息对象的用户 ID。\n    };\n\n    var msg = _index.EaseSDK.message.create(option);\n    _index.EMClient.send(msg);\n  };\n  return {\n    fetchPinConversationFromServer: fetchPinConversationFromServer,\n    pinConversationItem: pinConversationItem,\n    fetchConversationFromServer: fetchConversationFromServer,\n    removeConversationFromServer: removeConversationFromServer,\n    sendChannelAck: sendChannelAck\n  };\n};\nvar _default = emConversation;\nexports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 12)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vRWFzZUlNL2VtQXBpcy9lbUNvbnZlcnNhdGlvbi5qcyJdLCJuYW1lcyI6WyJlbUNvbnZlcnNhdGlvbiIsImZldGNoUGluQ29udmVyc2F0aW9uRnJvbVNlcnZlciIsInBhZ2VTaXplIiwiY3Vyc29yIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJFTUNsaWVudCIsImdldFNlcnZlclBpbm5lZENvbnZlcnNhdGlvbnMiLCJ0aGVuIiwicmVzIiwiY2F0Y2giLCJlcnJvciIsInBpbkNvbnZlcnNhdGlvbkl0ZW0iLCJwYXJhbXMiLCJjb252ZXJzYXRpb25JZCIsImNvbnZlcnNhdGlvblR5cGUiLCJpc1Bpbm5lZCIsInBpbkNvbnZlcnNhdGlvbiIsImZldGNoQ29udmVyc2F0aW9uRnJvbVNlcnZlciIsIm9wdGlvbnMiLCJnZXRTZXJ2ZXJDb252ZXJzYXRpb25zIiwicmVzdWx0IiwiZGF0YSIsImNvbnZlcnNhdGlvbnMiLCJyZW1vdmVDb252ZXJzYXRpb25Gcm9tU2VydmVyIiwiY2hhbm5lbCIsImNoYXRUeXBlIiwiQ0hBVF9UWVBFIiwiU0lOR0xFX0NIQVQiLCJkZWxldGVSb2FtIiwiZGVsZXRlQ29udmVyc2F0aW9uIiwic2VuZENoYW5uZWxBY2siLCJ0YXJnZXRJZCIsIm9wdGlvbiIsInR5cGUiLCJ0byIsIm1zZyIsIkVhc2VTREsiLCJtZXNzYWdlIiwiY3JlYXRlIiwic2VuZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBO0FBQXdDO0FBQUE7QUFDeEMsSUFBTUEsY0FBYyxHQUFHLFNBQWpCQSxjQUFjLEdBQVM7RUFDM0I7RUFDQSxJQUFNQyw4QkFBOEIsR0FBRyxTQUFqQ0EsOEJBQThCLEdBQW1DO0lBQUEsSUFBL0JDLFFBQVEsdUVBQUcsRUFBRTtJQUFBLElBQUVDLE1BQU0sdUVBQUcsRUFBRTtJQUNoRSxPQUFPLElBQUlDLE9BQU8sQ0FBQyxVQUFDQyxPQUFPLEVBQUVDLE1BQU0sRUFBSztNQUN0Q0MsZUFBUSxDQUFD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Q0FBSUMsUUFBUSxFQUF1QztJQUFBLElBQXJDTixRQUFRLHVFQUFHQyxtQkFBUyxDQUFDQyxXQUFXO0lBQ2hFLElBQUksQ0FBQ0ksUUFBUSxFQUFFO0lBQ2YsSUFBSUMsTUFBTSxHQUFHO01BQ1hQLFFBQVEsRUFBRUEsUUFBUTtNQUFFO01BQ3BCUSxJQUFJLEVBQUUsU0FBUztNQUFFO01BQ2pCQyxFQUFFLEVBQUVILFFBQVEsQ0FBRTtJQUNoQixDQUFDOztJQUNELElBQU1JLEdBQUcsR0FBR0MsY0FBTyxDQUFDQyxPQUFPLENBQUNDLE1BQU0sQ0FBQ04sTUFBTSxDQUFDO0lBQzFDM0IsZUFBUSxDQUFDa0MsSUFBSSxDQUFDSixHQUFHLENBQUM7RUFDcEIsQ0FBQztFQUNELE9BQU87SUFDTHBDLDhCQUE4QixFQUE5QkEsOEJBQThCO0lBQzlCWSxtQkFBbUIsRUFBbkJBLG1CQUFtQjtJQUNuQk0sMkJBQTJCLEVBQTNCQSwyQkFBMkI7SUFDM0JNLDRCQUE0QixFQUE1QkEsNEJBQTRCO0lBQzVCTyxjQUFjLEVBQWRBO0VBQ0YsQ0FBQztBQUNILENBQUM7QUFBQyxlQUVhaEMsY0FBYztBQUFBLDJCIiwiZmlsZSI6IjM5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRWFzZVNESywgRU1DbGllbnQgfSBmcm9tICcuLi9pbmRleCc7XG5pbXBvcnQgeyBDSEFUX1RZUEUgfSBmcm9tICcuLi9jb25zdGFudCc7XG5jb25zdCBlbUNvbnZlcnNhdGlvbiA9ICgpID0+IHtcbiAgLy/ku47mnI3liqHnq6/ojrflj5bnva7pobbkvJror53liJfooahcbiAgY29uc3QgZmV0Y2hQaW5Db252ZXJzYXRpb25Gcm9tU2VydmVyID0gKHBhZ2VTaXplID0gNTAsIGN1cnNvciA9ICcnKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIEVNQ2xpZW50LmdldFNlcnZlclBpbm5lZENvbnZlcnNhdGlvbnMoeyBwYWdlU2l6ZSwgY3Vyc29yIH0pXG4gICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZygnPj4+Pue9rumhtuS8muivneWIl+ihqOaVsOaNruiOt+WPluaIkOWKnycpO1xuICAgICAgICAgIHJlc29sdmUocmVzKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuICAvL+e9rumhtuS8muivneWIl+ihqFxuICBjb25zdCBwaW5Db252ZXJzYXRpb25JdGVtID0gKHBhcmFtcykgPT4ge1xuICAgIGNvbnN0IHsgY29udmVyc2F0aW9uSWQsIGNvbnZlcnNhdGlvblR5cGUsIGlzUGlubmVkIH0gPSBwYXJhbXM7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIEVNQ2xpZW50LnBpbkNvbnZlcnNhdGlvbih7XG4gICAgICAgIGNvbnZlcnNhdGlvbklkLFxuICAgICAgICBjb252ZXJzYXRpb25UeXBlLFxuICAgICAgICBpc1Bpbm5lZCxcbiAgICAgIH0pXG4gICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZygnPj4+Pue9rumhtuS8muivneWIl+ihqOa3u+WKoOaIkOWKnycpO1xuICAgICAgICAgIHJlc29sdmUocmVzKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuICAvL+S7juacjeWKoeerr+iOt+WPluS8muivneWIl+ihqFxuICBjb25zdCBmZXRjaENvbnZlcnNhdGlvbkZyb21TZXJ2ZXIgPSAoXG4gICAgb3B0aW9ucyA9IHsgcGFnZVNpemU6IDIwLCBjdXJzb3I6ICcnIH1cbiAgKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIC8v5pSv5oyB5YiG6aG16L+Z6YeM5YaZ5q275Y+q5Y+W5LqM5Y2B5p2hXG4gICAgICBFTUNsaWVudC5nZXRTZXJ2ZXJDb252ZXJzYXRpb25zKHsgLi4ub3B0aW9ucyB9KVxuICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coJz4+Pj7kvJror53liJfooajmlbDmja7ojrflj5bmiJDlip8nKTtcbiAgICAgICAgICBjb25zdCByZXN1bHQgPSByZXMuZGF0YS5jb252ZXJzYXRpb25zO1xuICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuICAvL+S7juacjeWKoeerr+WIoOmZpOS8muivnVxuICBjb25zdCByZW1vdmVDb252ZXJzYXRpb25Gcm9tU2VydmVyID0gKFxuICAgIGNoYW5uZWwsXG4gICAgY2hhdFR5cGUgPSBDSEFUX1RZUEUuU0lOR0xFX0NIQVQsXG4gICAgZGVsZXRlUm9hbSA9IGZhbHNlXG4gICkgPT4ge1xuICAgIGlmICghY2hhbm5lbCkgcmV0dXJuO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBFTUNsaWVudC5kZWxldGVDb252ZXJzYXRpb24oeyBjaGFubmVsLCBjaGF0VHlwZSwgZGVsZXRlUm9hbSB9KVxuICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coJz4+Pj7kvJror53liKDpmaTmiJDlip8nKTtcbiAgICAgICAgICByZXNvbHZlKHJlcyk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbiAgfTtcbiAgLy/lj5HpgIHkvJror53lt7Lor7vlm57miadcbiAgY29uc3Qgc2VuZENoYW5uZWxBY2sgPSAodGFyZ2V0SWQsIGNoYXRUeXBlID0gQ0hBVF9UWVBFLlNJTkdMRV9DSEFUKSA9PiB7XG4gICAgaWYgKCF0YXJnZXRJZCkgcmV0dXJuO1xuICAgIGxldCBvcHRpb24gPSB7XG4gICAgICBjaGF0VHlwZTogY2hhdFR5cGUsIC8vIOS8muivneexu+Wei++8jOiuvue9ruS4uuWNleiBiuOAglxuICAgICAgdHlwZTogJ2NoYW5uZWwnLCAvLyDmtojmga/nsbvlnovjgIJcbiAgICAgIHRvOiB0YXJnZXRJZCwgLy8g5o6l5pS25raI5oGv5a+56LGh55qE55So5oi3IElE44CCXG4gICAgfTtcbiAgICBjb25zdCBtc2cgPSBFYXNlU0RLLm1lc3NhZ2UuY3JlYXRlKG9wdGlvbik7XG4gICAgRU1DbGllbnQuc2VuZChtc2cpO1xuICB9O1xuICByZXR1cm4ge1xuICAgIGZldGNoUGluQ29udmVyc2F0aW9uRnJvbVNlcnZlcixcbiAgICBwaW5Db252ZXJzYXRpb25JdGVtLFxuICAgIGZldGNoQ29udmVyc2F0aW9uRnJvbVNlcnZlcixcbiAgICByZW1vdmVDb252ZXJzYXRpb25Gcm9tU2VydmVyLFxuICAgIHNlbmRDaGFubmVsQWNrLFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZW1Db252ZXJzYXRpb247XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///39\n");

/***/ }),
/* 40 */
/*!*****************************************************************************************!*\
  !*** /Users/hfp/Documents/HBuilderProjects/cunjin-socket-test/EaseIM/constant/index.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 1);\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.SESSION_MESSAGE_TYPE = exports.MESSAGE_TYPE = exports.INFORM_TYPE = exports.HANDLER_EVENT_NAME = exports.GROUP_ROLE_TYPE_NAME = exports.GROUP_ROLE_TYPE = exports.EMOJIOBJ = exports.EMOJI = exports.CUSTOM_TYPE = exports.CONNECT_CALLBACK_TYPE = exports.CHAT_TYPE = void 0;\nvar _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 2));\nvar _GROUP_ROLE_TYPE;\nvar CHAT_TYPE = {\n  SINGLE_CHAT: 'singleChat',\n  GROUP_CHAT: 'groupChat'\n};\nexports.CHAT_TYPE = CHAT_TYPE;\nvar INFORM_TYPE = {\n  CONTACTS: 'contacts',\n  GROUPS: 'groups'\n};\nexports.INFORM_TYPE = INFORM_TYPE;\nvar HANDLER_EVENT_NAME = {\n  CONNECT_EVENT: 'connectEvent',\n  MESSAGES_EVENT: 'messagesEvent',\n  CONTACTS_EVENT: 'contactsEvent',\n  GROUP_EVENT: 'groupEvent',\n  ERROR_EVENT: 'errorEvent'\n};\nexports.HANDLER_EVENT_NAME = HANDLER_EVENT_NAME;\nvar CONNECT_CALLBACK_TYPE = {\n  CONNECT_CALLBACK: 'connected',\n  DISCONNECT_CALLBACK: 'disconnected',\n  RECONNECTING_CALLBACK: 'reconnecting',\n  ERROR_CALLBACK: 'onerror'\n};\nexports.CONNECT_CALLBACK_TYPE = CONNECT_CALLBACK_TYPE;\nvar SESSION_MESSAGE_TYPE = {\n  img: '[图片]',\n  file: '[文件]',\n  audio: '[语音]',\n  loc: '[位置]'\n};\nexports.SESSION_MESSAGE_TYPE = SESSION_MESSAGE_TYPE;\nvar CUSTOM_TYPE = {\n  userCard: '个人名片'\n};\nexports.CUSTOM_TYPE = CUSTOM_TYPE;\nvar MESSAGE_TYPE = {\n  IMAGE: 'img',\n  TEXT: 'txt',\n  LOCATION: 'location',\n  VIDEO: 'video',\n  AUDIO: 'audio',\n  EMOJI: 'emoji',\n  FILE: 'file',\n  CUSTOM: 'custom'\n};\nexports.MESSAGE_TYPE = MESSAGE_TYPE;\nvar EMOJI = {\n  path: '@/static/images/faces',\n  map: {\n    '[):]': 'ee_1.png',\n    '[:D]': 'ee_2.png',\n    '[;)]': 'ee_3.png',\n    '[:-o]': 'ee_4.png',\n    '[:p]': 'ee_5.png',\n    '[(H)]': 'ee_6.png',\n    '[:@]': 'ee_7.png',\n    '[:s]': 'ee_8.png',\n    '[:$]': 'ee_9.png',\n    '[:(]': 'ee_10.png',\n    \"[:'(]\": 'ee_11.png',\n    '[<o)]': 'ee_12.png',\n    '[(a)]': 'ee_13.png',\n    '[8o|]': 'ee_14.png',\n    '[8-|]': 'ee_15.png',\n    '[+o(]': 'ee_16.png',\n    '[|-)]': 'ee_17.png',\n    '[:|]': 'ee_18.png',\n    '[*-)]': 'ee_19.png',\n    '[:-#]': 'ee_20.png',\n    '[^o)]': 'ee_21.png',\n    '[:-*]': 'ee_22.png',\n    '[8-)]': 'ee_23.png',\n    '[del]': 'btn_del.png',\n    '[(|)]': 'ee_24.png',\n    '[(u)]': 'ee_25.png',\n    '[(S)]': 'ee_26.png',\n    '[(*)]': 'ee_27.png',\n    '[(#)]': 'ee_28.png',\n    '[(R)]': 'ee_29.png',\n    '[({)]': 'ee_30.png',\n    '[(})]': 'ee_31.png',\n    '[(k)]': 'ee_32.png',\n    '[(F)]': 'ee_33.png',\n    '[(W)]': 'ee_34.png',\n    '[(D)]': 'ee_35.png'\n  }\n};\nexports.EMOJI = EMOJI;\nvar EMOJIOBJ = {\n  // 相对 emoji.js 路径\n  path: '/static/images/faces',\n  map1: {\n    '[):]': 'ee_1.png',\n    '[:D]': 'ee_2.png',\n    '[;)]': 'ee_3.png',\n    '[:-o]': 'ee_4.png',\n    '[:p]': 'ee_5.png',\n    '[(H)]': 'ee_6.png',\n    '[:@]': 'ee_7.png'\n  },\n  map2: {\n    '[:s]': 'ee_8.png',\n    '[:$]': 'ee_9.png',\n    '[:(]': 'ee_10.png',\n    \"[:'(]\": 'ee_11.png',\n    '[<o)]': 'ee_12.png',\n    '[(a)]': 'ee_13.png',\n    '[8o|]': 'ee_14.png'\n  },\n  map3: {\n    '[8-|]': 'ee_15.png',\n    '[+o(]': 'ee_16.png',\n    '[|-)]': 'ee_17.png',\n    '[:|]': 'ee_18.png',\n    '[*-)]': 'ee_19.png',\n    '[:-#]': 'ee_20.png',\n    '[del]': 'del.png'\n  },\n  map4: {\n    '[^o)]': 'ee_21.png',\n    '[:-*]': 'ee_22.png',\n    '[8-)]': 'ee_23.png',\n    '[(|)]': 'ee_24.png',\n    '[(u)]': 'ee_25.png',\n    '[(S)]': 'ee_26.png',\n    '[(*)]': 'ee_27.png'\n  },\n  map5: {\n    '[(#)]': 'ee_28.png',\n    '[(R)]': 'ee_29.png',\n    '[({)]': 'ee_30.png',\n    '[(})]': 'ee_31.png',\n    '[(k)]': 'ee_32.png',\n    '[(F)]': 'ee_33.png',\n    '[(W)]': 'ee_34.png',\n    '[(D)]': 'ee_35.png'\n  },\n  map6: {\n    '[del]': 'del.png'\n  }\n};\nexports.EMOJIOBJ = EMOJIOBJ;\nvar GROUP_ROLE_TYPE_NAME = {\n  OWNER: 'owner',\n  ADMIN: 'admin',\n  MEMBER: 'member'\n};\nexports.GROUP_ROLE_TYPE_NAME = GROUP_ROLE_TYPE_NAME;\nvar GROUP_ROLE_TYPE = (_GROUP_ROLE_TYPE = {}, (0, _defineProperty2.default)(_GROUP_ROLE_TYPE, GROUP_ROLE_TYPE_NAME.OWNER, 0), (0, _defineProperty2.default)(_GROUP_ROLE_TYPE, GROUP_ROLE_TYPE_NAME.ADMIN, 1), (0, _defineProperty2.default)(_GROUP_ROLE_TYPE, GROUP_ROLE_TYPE_NAME.MEMBER, 2), _GROUP_ROLE_TYPE);\nexports.GROUP_ROLE_TYPE = GROUP_ROLE_TYPE;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vRWFzZUlNL2NvbnN0YW50L2luZGV4LmpzIl0sIm5hbWVzIjpbIkNIQVRfVFlQRSIsIlNJTkdMRV9DSEFUIiwiR1JPVVBfQ0hBVCIsIklORk9STV9UWVBFIiwiQ09OVEFDVFMiLCJHUk9VUFMiLCJIQU5ETEVSX0VWRU5UX05BTUUiLCJDT05ORUNUX0VWRU5UIiwiTUVTU0FHRVNfRVZFTlQiLCJDT05UQUNUU19FVkVOVCIsIkdST1VQX0VWRU5UIiwiRVJST1JfRVZFTlQiLCJDT05ORUNUX0NBTExCQUNLX1RZUEUiLCJDT05ORUNUX0NBTExCQUNLIiwiRElTQ09OTkVDVF9DQUxMQkFDSyIsIlJFQ09OTkVDVElOR19DQUxMQkFDSyIsIkVSUk9SX0NBTExCQUNLIiwiU0VTU0lPTl9NRVNTQUdFX1RZUEUiLCJpbWciLCJmaWxlIiwiYXVkaW8iLCJsb2MiLCJDVVNUT01fVFlQRSIsInVzZXJDYXJkIiwiTUVTU0FHRV9UWVBFIiwiSU1BR0UiLCJURVhUIiwiTE9DQVRJT04iLCJWSURFTyIsIkFVRElPIiwiRU1PSkkiLCJGSUxFIiwiQ1VTVE9NIiwicGF0aCIsIm1hcCIsIkVNT0pJT0JKIiwibWFwMSIsIm1hcDIiLCJtYXAzIiwibWFwNCIsIm1hcDUiLCJtYXA2IiwiR1JPVVBfUk9MRV9UWVBFX05BTUUiLCJPV05FUiIsIkFETUlOIiwiTUVNQkVSIiwiR1JPVVBfUk9MRV9UWVBFIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBTyxJQUFNQSxTQUFTLEdBQUc7RUFDdkJDLFdBQVcsRUFBRSxZQUFZO0VBQ3pCQyxVQUFVLEVBQUU7QUFDZCxDQUFDO0FBQUM7QUFDSyxJQUFNQyxXQUFXLEdBQUc7RUFDekJDLFFBQVEsRUFBRSxVQUFVO0VBQ3BCQyxNQUFNLEVBQUU7QUFDVixDQUFDO0FBQUM7QUFDSyxJQUFNQyxrQkFBa0IsR0FBRztFQUNoQ0MsYUFBYSxFQUFFLGNBQWM7RUFDN0JDLGNBQWMsRUFBRSxlQUFlO0VBQy9CQyxjQUFjLEVBQUUsZUFBZTtF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LFdBQVc7SUFDcEIsT0FBTyxFQUFFLFdBQVc7SUFDcEIsT0FBTyxFQUFFLFdBQVc7SUFDcEIsTUFBTSxFQUFFLFdBQVc7SUFDbkIsT0FBTyxFQUFFLFdBQVc7SUFDcEIsT0FBTyxFQUFFLFdBQVc7SUFDcEIsT0FBTyxFQUFFO0VBQ1gsQ0FBQztFQUNEQyxJQUFJLEVBQUU7SUFDSixPQUFPLEVBQUUsV0FBVztJQUNwQixPQUFPLEVBQUUsV0FBVztJQUNwQixPQUFPLEVBQUUsV0FBVztJQUNwQixPQUFPLEVBQUUsV0FBVztJQUNwQixPQUFPLEVBQUUsV0FBVztJQUNwQixPQUFPLEVBQUUsV0FBVztJQUNwQixPQUFPLEVBQUU7RUFDWCxDQUFDO0VBQ0RDLElBQUksRUFBRTtJQUNKLE9BQU8sRUFBRSxXQUFXO0lBQ3BCLE9BQU8sRUFBRSxXQUFXO0lBQ3BCLE9BQU8sRUFBRSxXQUFXO0lBQ3BCLE9BQU8sRUFBRSxXQUFXO0lBQ3BCLE9BQU8sRUFBRSxXQUFXO0lBQ3BCLE9BQU8sRUFBRSxXQUFXO0lBQ3BCLE9BQU8sRUFBRSxXQUFXO0lBQ3BCLE9BQU8sRUFBRTtFQUNYLENBQUM7RUFDREMsSUFBSSxFQUFFO0lBQ0osT0FBTyxFQUFFO0VBQ1g7QUFDRixDQUFDO0FBQUM7QUFDSyxJQUFNQyxvQkFBb0IsR0FBRztFQUNsQ0MsS0FBSyxFQUFFLE9BQU87RUFDZEMsS0FBSyxFQUFFLE9BQU87RUFDZEMsTUFBTSxFQUFFO0FBQ1YsQ0FBQztBQUFDO0FBQ0ssSUFBTUMsZUFBZSwyRUFDekJKLG9CQUFvQixDQUFDQyxLQUFLLEVBQUcsQ0FBQyxtREFDOUJELG9CQUFvQixDQUFDRSxLQUFLLEVBQUcsQ0FBQyxtREFDOUJGLG9CQUFvQixDQUFDRyxNQUFNLEVBQUcsQ0FBQyxvQkFDakM7QUFBQyIsImZpbGUiOiI0MC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBDSEFUX1RZUEUgPSB7XG4gIFNJTkdMRV9DSEFUOiAnc2luZ2xlQ2hhdCcsXG4gIEdST1VQX0NIQVQ6ICdncm91cENoYXQnLFxufTtcbmV4cG9ydCBjb25zdCBJTkZPUk1fVFlQRSA9IHtcbiAgQ09OVEFDVFM6ICdjb250YWN0cycsXG4gIEdST1VQUzogJ2dyb3VwcycsXG59O1xuZXhwb3J0IGNvbnN0IEhBTkRMRVJfRVZFTlRfTkFNRSA9IHtcbiAgQ09OTkVDVF9FVkVOVDogJ2Nvbm5lY3RFdmVudCcsXG4gIE1FU1NBR0VTX0VWRU5UOiAnbWVzc2FnZXNFdmVudCcsXG4gIENPTlRBQ1RTX0VWRU5UOiAnY29udGFjdHNFdmVudCcsXG4gIEdST1VQX0VWRU5UOiAnZ3JvdXBFdmVudCcsXG4gIEVSUk9SX0VWRU5UOiAnZXJyb3JFdmVudCcsXG59O1xuXG5leHBvcnQgY29uc3QgQ09OTkVDVF9DQUxMQkFDS19UWVBFID0ge1xuICBDT05ORUNUX0NBTExCQUNLOiAnY29ubmVjdGVkJyxcbiAgRElTQ09OTkVDVF9DQUxMQkFDSzogJ2Rpc2Nvbm5lY3RlZCcsXG4gIFJFQ09OTkVDVElOR19DQUxMQkFDSzogJ3JlY29ubmVjdGluZycsXG4gIEVSUk9SX0NBTExCQUNLOiAnb25lcnJvcicsXG59O1xuXG5leHBvcnQgY29uc3QgU0VTU0lPTl9NRVNTQUdFX1RZUEUgPSB7XG4gIGltZzogJ1vlm77niYddJyxcbiAgZmlsZTogJ1vmlofku7ZdJyxcbiAgYXVkaW86ICdb6K+t6Z+zXScsXG4gIGxvYzogJ1vkvY3nva5dJyxcbn07XG5cbmV4cG9ydCBjb25zdCBDVVNUT01fVFlQRSA9IHtcbiAgdXNlckNhcmQ6ICfkuKrkurrlkI3niYcnLFxufTtcbmV4cG9ydCBjb25zdCBNRVNTQUdFX1RZUEUgPSB7XG4gIElNQUdFOiAnaW1nJyxcbiAgVEVYVDogJ3R4dCcsXG4gIExPQ0FUSU9OOiAnbG9jYXRpb24nLFxuICBWSURFTzogJ3ZpZGVvJyxcbiAgQVVESU86ICdhdWRpbycsXG4gIEVNT0pJOiAnZW1vamknLFxuICBGSUxFOiAnZmlsZScsXG4gIENVU1RPTTogJ2N1c3RvbScsXG59O1xuXG5leHBvcnQgY29uc3QgRU1PSkkgPSB7XG4gIHBhdGg6ICdAL3N0YXRpYy9pbWFnZXMvZmFjZXMnLFxuICBtYXA6IHtcbiAgICAnWyk6XSc6ICdlZV8xLnBuZycsXG4gICAgJ1s6RF0nOiAnZWVfMi5wbmcnLFxuICAgICdbOyldJzogJ2VlXzMucG5nJyxcbiAgICAnWzotb10nOiAnZWVfNC5wbmcnLFxuICAgICdbOnBdJzogJ2VlXzUucG5nJyxcbiAgICAnWyhIKV0nOiAnZWVfNi5wbmcnLFxuICAgICdbOkBdJzogJ2VlXzcucG5nJyxcbiAgICAnWzpzXSc6ICdlZV84LnBuZycsXG4gICAgJ1s6JF0nOiAnZWVfOS5wbmcnLFxuICAgICdbOihdJzogJ2VlXzEwLnBuZycsXG4gICAgXCJbOicoXVwiOiAnZWVfMTEucG5nJyxcbiAgICAnWzxvKV0nOiAnZWVfMTIucG5nJyxcbiAgICAnWyhhKV0nOiAnZWVfMTMucG5nJyxcbiAgICAnWzhvfF0nOiAnZWVfMTQucG5nJyxcbiAgICAnWzgtfF0nOiAnZWVfMTUucG5nJyxcbiAgICAnWytvKF0nOiAnZWVfMTYucG5nJyxcbiAgICAnW3wtKV0nOiAnZWVfMTcucG5nJyxcbiAgICAnWzp8XSc6ICdlZV8xOC5wbmcnLFxuICAgICdbKi0pXSc6ICdlZV8xOS5wbmcnLFxuICAgICdbOi0jXSc6ICdlZV8yMC5wbmcnLFxuICAgICdbXm8pXSc6ICdlZV8yMS5wbmcnLFxuICAgICdbOi0qXSc6ICdlZV8yMi5wbmcnLFxuICAgICdbOC0pXSc6ICdlZV8yMy5wbmcnLFxuICAgICdbZGVsXSc6ICdidG5fZGVsLnBuZycsXG4gICAgJ1sofCldJzogJ2VlXzI0LnBuZycsXG4gICAgJ1sodSldJzogJ2VlXzI1LnBuZycsXG4gICAgJ1soUyldJzogJ2VlXzI2LnBuZycsXG4gICAgJ1soKildJzogJ2VlXzI3LnBuZycsXG4gICAgJ1soIyldJzogJ2VlXzI4LnBuZycsXG4gICAgJ1soUildJzogJ2VlXzI5LnBuZycsXG4gICAgJ1soeyldJzogJ2VlXzMwLnBuZycsXG4gICAgJ1sofSldJzogJ2VlXzMxLnBuZycsXG4gICAgJ1soayldJzogJ2VlXzMyLnBuZycsXG4gICAgJ1soRildJzogJ2VlXzMzLnBuZycsXG4gICAgJ1soVyldJzogJ2VlXzM0LnBuZycsXG4gICAgJ1soRCldJzogJ2VlXzM1LnBuZycsXG4gIH0sXG59O1xuZXhwb3J0IGNvbnN0IEVNT0pJT0JKID0ge1xuICAvLyDnm7jlr7kgZW1vamkuanMg6Lev5b6EXG4gIHBhdGg6ICcvc3RhdGljL2ltYWdlcy9mYWNlcycsXG4gIG1hcDE6IHtcbiAgICAnWyk6XSc6ICdlZV8xLnBuZycsXG4gICAgJ1s6RF0nOiAnZWVfMi5wbmcnLFxuICAgICdbOyldJzogJ2VlXzMucG5nJyxcbiAgICAnWzotb10nOiAnZWVfNC5wbmcnLFxuICAgICdbOnBdJzogJ2VlXzUucG5nJyxcbiAgICAnWyhIKV0nOiAnZWVfNi5wbmcnLFxuICAgICdbOkBdJzogJ2VlXzcucG5nJyxcbiAgfSxcbiAgbWFwMjoge1xuICAgICdbOnNdJzogJ2VlXzgucG5nJyxcbiAgICAnWzokXSc6ICdlZV85LnBuZycsXG4gICAgJ1s6KF0nOiAnZWVfMTAucG5nJyxcbiAgICBcIls6JyhdXCI6ICdlZV8xMS5wbmcnLFxuICAgICdbPG8pXSc6ICdlZV8xMi5wbmcnLFxuICAgICdbKGEpXSc6ICdlZV8xMy5wbmcnLFxuICAgICdbOG98XSc6ICdlZV8xNC5wbmcnLFxuICB9LFxuICBtYXAzOiB7XG4gICAgJ1s4LXxdJzogJ2VlXzE1LnBuZycsXG4gICAgJ1srbyhdJzogJ2VlXzE2LnBuZycsXG4gICAgJ1t8LSldJzogJ2VlXzE3LnBuZycsXG4gICAgJ1s6fF0nOiAnZWVfMTgucG5nJyxcbiAgICAnWyotKV0nOiAnZWVfMTkucG5nJyxcbiAgICAnWzotI10nOiAnZWVfMjAucG5nJyxcbiAgICAnW2RlbF0nOiAnZGVsLnBuZycsXG4gIH0sXG4gIG1hcDQ6IHtcbiAgICAnW15vKV0nOiAnZWVfMjEucG5nJyxcbiAgICAnWzotKl0nOiAnZWVfMjIucG5nJyxcbiAgICAnWzgtKV0nOiAnZWVfMjMucG5nJyxcbiAgICAnWyh8KV0nOiAnZWVfMjQucG5nJyxcbiAgICAnWyh1KV0nOiAnZWVfMjUucG5nJyxcbiAgICAnWyhTKV0nOiAnZWVfMjYucG5nJyxcbiAgICAnWygqKV0nOiAnZWVfMjcucG5nJyxcbiAgfSxcbiAgbWFwNToge1xuICAgICdbKCMpXSc6ICdlZV8yOC5wbmcnLFxuICAgICdbKFIpXSc6ICdlZV8yOS5wbmcnLFxuICAgICdbKHspXSc6ICdlZV8zMC5wbmcnLFxuICAgICdbKH0pXSc6ICdlZV8zMS5wbmcnLFxuICAgICdbKGspXSc6ICdlZV8zMi5wbmcnLFxuICAgICdbKEYpXSc6ICdlZV8zMy5wbmcnLFxuICAgICdbKFcpXSc6ICdlZV8zNC5wbmcnLFxuICAgICdbKEQpXSc6ICdlZV8zNS5wbmcnLFxuICB9LFxuICBtYXA2OiB7XG4gICAgJ1tkZWxdJzogJ2RlbC5wbmcnLFxuICB9LFxufTtcbmV4cG9ydCBjb25zdCBHUk9VUF9ST0xFX1RZUEVfTkFNRSA9IHtcbiAgT1dORVI6ICdvd25lcicsXG4gIEFETUlOOiAnYWRtaW4nLFxuICBNRU1CRVI6ICdtZW1iZXInLFxufTtcbmV4cG9ydCBjb25zdCBHUk9VUF9ST0xFX1RZUEUgPSB7XG4gIFtHUk9VUF9ST0xFX1RZUEVfTkFNRS5PV05FUl06IDAsXG4gIFtHUk9VUF9ST0xFX1RZUEVfTkFNRS5BRE1JTl06IDEsXG4gIFtHUk9VUF9ST0xFX1RZUEVfTkFNRS5NRU1CRVJdOiAyLFxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///40\n");

/***/ }),
/* 41 */
/*!********************************************************************************************!*\
  !*** /Users/hfp/Documents/HBuilderProjects/cunjin-socket-test/EaseIM/emApis/emMessages.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 1);\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\nvar _index = __webpack_require__(/*! ../index */ 16);\nvar _utils = __webpack_require__(/*! @/EaseIM/utils */ 42);\nvar _store = _interopRequireDefault(__webpack_require__(/*! @/store */ 46));\nvar emMessages = function emMessages() {\n  var reportMessages = function reportMessages(params) {\n    var reportType = params.reportType,\n      reportReason = params.reportReason,\n      messageId = params.messageId;\n    return new Promise(function (resolve, reject) {\n      _index.EMClient.reportMessage({\n        reportType: reportType,\n        // 举报类型\n        reportReason: reportReason,\n        // 举报原因。\n        messageId: messageId // 上报消息id\n      }).then(function (res) {\n        resolve(res);\n      }).catch(function (error) {\n        reject(error);\n      });\n    });\n  };\n  var fetchHistoryMessagesFromServer = function fetchHistoryMessagesFromServer(params) {\n    var targetId = params.targetId,\n      cursor = params.cursor,\n      chatType = params.chatType;\n    return new Promise(function (resolve, reject) {\n      var options = {\n        // 对方的用户 ID 或者群组 ID 或聊天室 ID。\n        targetId: targetId,\n        // 每页期望获取的消息条数。取值范围为 [1,50]，默认值为 20。\n        pageSize: 20,\n        // 查询的起始消息 ID。若该参数设置为 `-1`、`null` 或空字符串，从最新消息开始。\n        cursor: cursor || -1,\n        // 会话类型：（默认） `singleChat`：单聊；`groupChat`：群聊。\n        chatType: chatType,\n        // 消息搜索方向：（默认）`up`：按服务器收到消息的时间的逆序获取；`down`：按服务器收到消息的时间的正序获取。\n        searchDirection: 'up'\n      };\n      _index.EMClient.getHistoryMessages(options).then(function (res) {\n        resolve(res);\n      }).catch(function (e) {\n        // 获取失败。\n        reject(e);\n      });\n    });\n  };\n  var sendDisplayMessages = function sendDisplayMessages(messageBody) {\n    messageBody.from = _index.EMClient.user;\n    var key = (0, _utils.getEMKey)(_index.EMClient.user, messageBody.from, messageBody.to, messageBody.chatType);\n    __f__(\"log\", '>>>>要发送的消息key', key, \" at EaseIM/emApis/emMessages.js:54\");\n    return new Promise(function (resolve, reject) {\n      var message = _index.EaseSDK.message.create(messageBody);\n      __f__(\"log\", '>>>>构建的消息msg', message, \" at EaseIM/emApis/emMessages.js:57\");\n      _index.EMClient.send(message).then(function (res) {\n        resolve(res);\n        message.id = res.serverMsgId;\n        //   store.commit('UPDATE_MESSAGE_COLLECTION', {\n        //     key,\n        //     message,\n        //   });\n        //   store.commit('UPDATE_CONVERSATION_ITEM', {\n        //     conversationId: messageBody.to,\n        //     lastMessage: message,\n        //   });\n      }).catch(function (err) {\n        reject(err);\n        __f__(\"log\", '>>>>>发送失败', err, \" at EaseIM/emApis/emMessages.js:73\");\n      });\n    });\n  };\n  return {\n    reportMessages: reportMessages,\n    fetchHistoryMessagesFromServer: fetchHistoryMessagesFromServer,\n    sendDisplayMessages: sendDisplayMessages\n  };\n};\nvar _default = emMessages;\nexports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 12)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vRWFzZUlNL2VtQXBpcy9lbU1lc3NhZ2VzLmpzIl0sIm5hbWVzIjpbImVtTWVzc2FnZXMiLCJyZXBvcnRNZXNzYWdlcyIsInBhcmFtcyIsInJlcG9ydFR5cGUiLCJyZXBvcnRSZWFzb24iLCJtZXNzYWdlSWQiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsIkVNQ2xpZW50IiwicmVwb3J0TWVzc2FnZSIsInRoZW4iLCJyZXMiLCJjYXRjaCIsImVycm9yIiwiZmV0Y2hIaXN0b3J5TWVzc2FnZXNGcm9tU2VydmVyIiwidGFyZ2V0SWQiLCJjdXJzb3IiLCJjaGF0VHlwZSIsIm9wdGlvbnMiLCJwYWdlU2l6ZSIsInNlYXJjaERpcmVjdGlvbiIsImdldEhpc3RvcnlNZXNzYWdlcyIsImUiLCJzZW5kRGlzcGxheU1lc3NhZ2VzIiwibWVzc2FnZUJvZHkiLCJmcm9tIiwidXNlciIsImtleSIsImdldEVNS2V5IiwidG8iLCJtZXNzYWdlIiwiRWFzZVNESyIsImNyZWF0ZSIsInNlbmQiLCJpZCIsInNlcnZlck1zZ0lkIiwiZXJyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0EsSUFBTUEsVUFBVSxHQUFHLFNBQWJBLFVBQVUsR0FBUztFQUN2QixJQUFNQyxjQUFjLEdBQUcsU0FBakJBLGNBQWMsQ0FBSUMsTUFBTSxFQUFLO0lBQ2pDLElBQVFDLFVBQVUsR0FBOEJELE1BQU0sQ0FBOUNDLFVBQVU7TUFBRUMsWUFBWSxHQUFnQkYsTUFBTSxDQUFsQ0UsWUFBWTtNQUFFQyxTQUFTLEdBQUtILE1BQU0sQ0FBcEJHLFNBQVM7SUFDM0MsT0FBTyxJQUFJQyxPQUFPLENBQUMsVUFBQ0MsT0FBTyxFQUFFQyxNQUFNLEVBQUs7TUFDdENDLGVBQVEsQ0FBQ0MsYUFBYSxDQUFDO1FBQ3JCUCxVQUFVLEVBQUVBLFVBQVU7UUFBRTtRQUN4QkMsWUFBWSxFQUFFQSxZQUFZO1FBQUU7UUFDNUJDLFNBQVMsRUFBRUEsU0FBUyxDQUFFO01BQ3hCLENBQUMsQ0FBQyxDQUNDTSxJQUFJLENBQUMsVUFBQ0MsR0FBRyxFQUFLO1FBQ2JMLE9BQU8sQ0FBQ0ssR0FBRyxDQUFDO01BQ2QsQ0FBQyxDQUFDLENBQ0RDLEtBQUssQ0FBQyxVQUFDQyxLQUFLLEVBQUs7UUFDaEJOLE1BQU0sQ0FBQ00sS0FBSyxDQUFDO01BQ2YsQ0FBQyxDQUFDO0lBQ04sQ0FBQyxDQUFDO0VBQ0osQ0FBQztFQUNELElBQU1DLDhCQUE4QixHQUFHLFNBQWpDQSw4QkFBOEIsQ0FBSWIsTUFBTSxFQUFLO0lBQ2pELElBQVFjLFFBQVEsR0FBdUJkLE1BQU0sQ0FBckNjLFFBQVE7TUFBRUMsTUFBTSxHQUFlZixNQUFNLENBQTNCZSxNQUFNO01BQUVDLFFBQVEsR0FBS2hCLE1BQU0sQ0FBbkJnQixRQUFRO0lBQ2xDLE9BQU8sSUFBSVosT0FBTyxDQUFDLFVBQUNDLE9BQU8sRUFBRUMsTUFBTSxFQUFLO01BQ3RDLElBQUlXLE9BQU8sR0FBRztRQUNaO1FBQ0FILFFBQVEsRUFBRUEsUUFBUTtRQUNsQjtRQUNBSSxRQUFRLEVBQUUsRUFBRTtRQUNaO1FBQ0FILE1BQU0sRUFBRUEsTUFBTSxJQUFJLENBQUMsQ0FBQztRQUNwQjtRQUNBQyxRQUFRLEVBQUVBLFFBQVE7UUFDbEI7UUFDQUcsZUFBZSxFQUFFO01BQ25CLENBQUM7TUFDRFosZUFBUSxDQUFDYSxrQkFBa0IsQ0FBQ0gsT0FBTyxDQUFDLENBQ2pDUixJQUFJLENBQUMsVUFBQ0MsR0FBRyxFQUFLO1FBQ2JMLE9BQU8sQ0FBQ0ssR0FBRyxDQUFDO01BQ2QsQ0FBQyxDQUFDLENBQ0RDLEtBQUssQ0FBQyxVQUFDVSxDQUFDLEVBQUs7UUFDWjtRQUNBZixNQUFNLENBQUNlLENBQUMsQ0FBQztNQUNYLENBQUMsQ0FBQztJQUNOLENBQUMsQ0FBQztFQUNKLENBQUM7RUFDRCxJQUFNQyxtQkFBbUIsR0FBRyxTQUF0QkEsbUJBQW1CLENBQUlDLFdBQVcsRUFBSztJQUMzQ0EsV0FBVyxDQUFDQyxJQUFJLEdBQUdqQixlQUFRLENBQUNrQixJQUFJO0lBQ2hDLElBQU1DLEdBQUcsR0FBRyxJQUFBQyxlQUFRLEVBQ2xCcEIsZUFBUSxDQUFDa0IsSUFBSSxFQUNiRixXQUFXLENBQUNDLElBQUksRUFDaEJELFdBQVcsQ0FBQ0ssRUFBRSxFQUNkTCxXQUFXLENBQUNQLFFBQVEsQ0FDckI7SUFDRCxhQUFZLGVBQWUsRUFBRVUsR0FBRztJQUNoQyxPQUFPLElBQUl0QixPQUFPLENBQUMsVUFBQ0MsT0FBTyxFQUFFQyxNQUFNLEVBQUs7TUFDdEMsSUFBTXVCLE9BQU8sR0FBR0MsY0FBTyxDQUFDRCxPQUFPLENBQUNFLE1BQU0sQ0FBQ1IsV0FBVyxDQUFDO01BQ25ELGFBQVksY0FBYyxFQUFFTSxPQUFPO01BQ25DdEIsZUFBUSxDQUFDeUIsSUFBSSxDQUFDSCxPQUFPLENBQUMsQ0FDbkJwQixJQUFJLENBQUMsVUFBQ0MsR0FBRyxFQUFLO1FBQ2JMLE9BQU8sQ0FBQ0ssR0FBRyxDQUFDO1FBQ1ptQixPQUFPLENBQUNJLEVBQUUsR0FBR3ZCLEdBQUcsQ0FBQ3dCLFdBQVc7UUFDNUI7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtNQUNGLENBQUMsQ0FBQyxDQUNEdkIsS0FBSyxDQUFDLFVBQUN3QixHQUFHLEVBQUs7UUFDZDdCLE1BQU0sQ0FBQzZCLEdBQUcsQ0FBQztRQUNYLGFBQVksV0FBVyxFQUFFQSxHQUFHO01BQzlCLENBQUMsQ0FBQztJQUNOLENBQUMsQ0FBQztFQUNKLENBQUM7RUFDRCxPQUFPO0lBQ0xwQyxjQUFjLEVBQWRBLGNBQWM7SUFDZGMsOEJBQThCLEVBQTlCQSw4QkFBOEI7SUFDOUJTLG1CQUFtQixFQUFuQkE7RUFDRixDQUFDO0FBQ0gsQ0FBQztBQUFDLGVBQ2F4QixVQUFVO0FBQUEsMkIiLCJmaWxlIjoiNDEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFYXNlU0RLLCBFTUNsaWVudCB9IGZyb20gJy4uL2luZGV4JztcbmltcG9ydCB7IGdldEVNS2V5IH0gZnJvbSAnQC9FYXNlSU0vdXRpbHMnO1xuaW1wb3J0IHN0b3JlIGZyb20gJ0Avc3RvcmUnO1xuY29uc3QgZW1NZXNzYWdlcyA9ICgpID0+IHtcbiAgY29uc3QgcmVwb3J0TWVzc2FnZXMgPSAocGFyYW1zKSA9PiB7XG4gICAgY29uc3QgeyByZXBvcnRUeXBlLCByZXBvcnRSZWFzb24sIG1lc3NhZ2VJZCB9ID0gcGFyYW1zO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBFTUNsaWVudC5yZXBvcnRNZXNzYWdlKHtcbiAgICAgICAgcmVwb3J0VHlwZTogcmVwb3J0VHlwZSwgLy8g5Li+5oql57G75Z6LXG4gICAgICAgIHJlcG9ydFJlYXNvbjogcmVwb3J0UmVhc29uLCAvLyDkuL7miqXljp/lm6DjgIJcbiAgICAgICAgbWVzc2FnZUlkOiBtZXNzYWdlSWQsIC8vIOS4iuaKpea2iOaBr2lkXG4gICAgICB9KVxuICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgcmVzb2x2ZShyZXMpO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG4gIGNvbnN0IGZldGNoSGlzdG9yeU1lc3NhZ2VzRnJvbVNlcnZlciA9IChwYXJhbXMpID0+IHtcbiAgICBjb25zdCB7IHRhcmdldElkLCBjdXJzb3IsIGNoYXRUeXBlIH0gPSBwYXJhbXM7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGxldCBvcHRpb25zID0ge1xuICAgICAgICAvLyDlr7nmlrnnmoTnlKjmiLcgSUQg5oiW6ICF576k57uEIElEIOaIluiBiuWkqeWupCBJROOAglxuICAgICAgICB0YXJnZXRJZDogdGFyZ2V0SWQsXG4gICAgICAgIC8vIOavj+mhteacn+acm+iOt+WPlueahOa2iOaBr+adoeaVsOOAguWPluWAvOiMg+WbtOS4uiBbMSw1MF3vvIzpu5jorqTlgLzkuLogMjDjgIJcbiAgICAgICAgcGFnZVNpemU6IDIwLFxuICAgICAgICAvLyDmn6Xor6LnmoTotbflp4vmtojmga8gSUTjgILoi6Xor6Xlj4LmlbDorr7nva7kuLogYC0xYOOAgWBudWxsYCDmiJbnqbrlrZfnrKbkuLLvvIzku47mnIDmlrDmtojmga/lvIDlp4vjgIJcbiAgICAgICAgY3Vyc29yOiBjdXJzb3IgfHwgLTEsXG4gICAgICAgIC8vIOS8muivneexu+Wei++8mu+8iOm7mOiupO+8iSBgc2luZ2xlQ2hhdGDvvJrljZXogYrvvJtgZ3JvdXBDaGF0YO+8mue+pOiBiuOAglxuICAgICAgICBjaGF0VHlwZTogY2hhdFR5cGUsXG4gICAgICAgIC8vIOa2iOaBr+aQnOe0ouaWueWQke+8mu+8iOm7mOiupO+8iWB1cGDvvJrmjInmnI3liqHlmajmlLbliLDmtojmga/nmoTml7bpl7TnmoTpgIbluo/ojrflj5bvvJtgZG93bmDvvJrmjInmnI3liqHlmajmlLbliLDmtojmga/nmoTml7bpl7TnmoTmraPluo/ojrflj5bjgIJcbiAgICAgICAgc2VhcmNoRGlyZWN0aW9uOiAndXAnLFxuICAgICAgfTtcbiAgICAgIEVNQ2xpZW50LmdldEhpc3RvcnlNZXNzYWdlcyhvcHRpb25zKVxuICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgcmVzb2x2ZShyZXMpO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGUpID0+IHtcbiAgICAgICAgICAvLyDojrflj5blpLHotKXjgIJcbiAgICAgICAgICByZWplY3QoZSk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuICBjb25zdCBzZW5kRGlzcGxheU1lc3NhZ2VzID0gKG1lc3NhZ2VCb2R5KSA9PiB7XG4gICAgbWVzc2FnZUJvZHkuZnJvbSA9IEVNQ2xpZW50LnVzZXI7XG4gICAgY29uc3Qga2V5ID0gZ2V0RU1LZXkoXG4gICAgICBFTUNsaWVudC51c2VyLFxuICAgICAgbWVzc2FnZUJvZHkuZnJvbSxcbiAgICAgIG1lc3NhZ2VCb2R5LnRvLFxuICAgICAgbWVzc2FnZUJvZHkuY2hhdFR5cGVcbiAgICApO1xuICAgIGNvbnNvbGUubG9nKCc+Pj4+6KaB5Y+R6YCB55qE5raI5oGva2V5Jywga2V5KTtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgY29uc3QgbWVzc2FnZSA9IEVhc2VTREsubWVzc2FnZS5jcmVhdGUobWVzc2FnZUJvZHkpO1xuICAgICAgY29uc29sZS5sb2coJz4+Pj7mnoTlu7rnmoTmtojmga9tc2cnLCBtZXNzYWdlKTtcbiAgICAgIEVNQ2xpZW50LnNlbmQobWVzc2FnZSlcbiAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgIHJlc29sdmUocmVzKTtcbiAgICAgICAgICBtZXNzYWdlLmlkID0gcmVzLnNlcnZlck1zZ0lkO1xuICAgICAgICAgIC8vICAgc3RvcmUuY29tbWl0KCdVUERBVEVfTUVTU0FHRV9DT0xMRUNUSU9OJywge1xuICAgICAgICAgIC8vICAgICBrZXksXG4gICAgICAgICAgLy8gICAgIG1lc3NhZ2UsXG4gICAgICAgICAgLy8gICB9KTtcbiAgICAgICAgICAvLyAgIHN0b3JlLmNvbW1pdCgnVVBEQVRFX0NPTlZFUlNBVElPTl9JVEVNJywge1xuICAgICAgICAgIC8vICAgICBjb252ZXJzYXRpb25JZDogbWVzc2FnZUJvZHkudG8sXG4gICAgICAgICAgLy8gICAgIGxhc3RNZXNzYWdlOiBtZXNzYWdlLFxuICAgICAgICAgIC8vICAgfSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgY29uc29sZS5sb2coJz4+Pj4+5Y+R6YCB5aSx6LSlJywgZXJyKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG4gIHJldHVybiB7XG4gICAgcmVwb3J0TWVzc2FnZXMsXG4gICAgZmV0Y2hIaXN0b3J5TWVzc2FnZXNGcm9tU2VydmVyLFxuICAgIHNlbmREaXNwbGF5TWVzc2FnZXMsXG4gIH07XG59O1xuZXhwb3J0IGRlZmF1bHQgZW1NZXNzYWdlcztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///41\n");

/***/ }),
/* 42 */
/*!**************************************************************************************!*\
  !*** /Users/hfp/Documents/HBuilderProjects/cunjin-socket-test/EaseIM/utils/index.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 1);\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nObject.defineProperty(exports, \"convertGroupDetailsToGroupList\", {\n  enumerable: true,\n  get: function get() {\n    return _convertGroupDetailsToGroupList.default;\n  }\n});\nObject.defineProperty(exports, \"getEMKey\", {\n  enumerable: true,\n  get: function get() {\n    return _getEMKey.default;\n  }\n});\nObject.defineProperty(exports, \"paseEmoji\", {\n  enumerable: true,\n  get: function get() {\n    return _paseEmoji.default;\n  }\n});\nvar _paseEmoji = _interopRequireDefault(__webpack_require__(/*! ./paseEmoji */ 43));\nvar _getEMKey = _interopRequireDefault(__webpack_require__(/*! ./getEMKey */ 44));\nvar _convertGroupDetailsToGroupList = _interopRequireDefault(__webpack_require__(/*! ./convertGroupDetailsToGroupList */ 45));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vRWFzZUlNL3V0aWxzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQSIsImZpbGUiOiI0Mi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwYXNlRW1vamkgZnJvbSAnLi9wYXNlRW1vamknO1xuaW1wb3J0IGdldEVNS2V5IGZyb20gJy4vZ2V0RU1LZXknO1xuaW1wb3J0IGNvbnZlcnRHcm91cERldGFpbHNUb0dyb3VwTGlzdCBmcm9tICcuL2NvbnZlcnRHcm91cERldGFpbHNUb0dyb3VwTGlzdCc7XG5leHBvcnQgeyBwYXNlRW1vamksIGdldEVNS2V5LCBjb252ZXJ0R3JvdXBEZXRhaWxzVG9Hcm91cExpc3QgfTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///42\n");

/***/ }),
/* 43 */
/*!******************************************************************************************!*\
  !*** /Users/hfp/Documents/HBuilderProjects/cunjin-socket-test/EaseIM/utils/paseEmoji.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\nvar Emoji = {\n  path: '../static/images/faces/',\n  map: {\n    '[):]': 'ee_1.png',\n    '[:D]': 'ee_2.png',\n    '[;)]': 'ee_3.png',\n    '[:-o]': 'ee_4.png',\n    '[:p]': 'ee_5.png',\n    '[(H)]': 'ee_6.png',\n    '[:@]': 'ee_7.png',\n    '[:s]': 'ee_8.png',\n    '[:$]': 'ee_9.png',\n    '[:(]': 'ee_10.png',\n    \"[:'(]\": 'ee_11.png',\n    '[<o)]': 'ee_12.png',\n    '[(a)]': 'ee_13.png',\n    '[8o|]': 'ee_14.png',\n    '[8-|]': 'ee_15.png',\n    '[+o(]': 'ee_16.png',\n    '[|-)]': 'ee_17.png',\n    '[:|]': 'ee_18.png',\n    '[*-)]': 'ee_19.png',\n    '[:-#]': 'ee_20.png',\n    '[^o)]': 'ee_21.png',\n    '[:-*]': 'ee_22.png',\n    '[8-)]': 'ee_23.png',\n    '[del]': 'btn_del.png',\n    '[(|)]': 'ee_24.png',\n    '[(u)]': 'ee_25.png',\n    '[(S)]': 'ee_26.png',\n    '[(*)]': 'ee_27.png',\n    '[(#)]': 'ee_28.png',\n    '[(R)]': 'ee_29.png',\n    '[({)]': 'ee_30.png',\n    '[(})]': 'ee_31.png',\n    '[(k)]': 'ee_32.png',\n    '[(F)]': 'ee_33.png',\n    '[(W)]': 'ee_34.png',\n    '[(D)]': 'ee_35.png'\n  }\n};\nvar parseEmoji = function parseEmoji(msg) {\n  if (typeof Emoji === 'undefined' || typeof Emoji.map === 'undefined') {\n    return msg;\n  }\n  var emoji = Emoji,\n    reg = null;\n  var msgList = [];\n  var objList = [];\n  for (var face in emoji.map) {\n    if (emoji.map.hasOwnProperty(face)) {\n      while (msg.indexOf(face) > -1) {\n        msg = msg.replace(face, '^' + emoji.map[face] + '^');\n      }\n    }\n  }\n  var ary = msg.split('^');\n  var reg = /^e.*g$/;\n  for (var i = 0; i < ary.length; i++) {\n    if (ary[i] != '') {\n      msgList.push(ary[i]);\n    }\n  }\n  for (var i = 0; i < msgList.length; i++) {\n    if (reg.test(msgList[i])) {\n      var obj = {};\n      obj.data = msgList[i];\n      obj.type = 'emoji';\n      objList.push(obj);\n    } else {\n      var obj = {};\n      obj.data = msgList[i];\n      obj.type = 'txt';\n      objList.push(obj);\n    }\n  }\n  return objList;\n};\nvar _default = parseEmoji;\nexports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vRWFzZUlNL3V0aWxzL3Bhc2VFbW9qaS5qcyJdLCJuYW1lcyI6WyJFbW9qaSIsInBhdGgiLCJtYXAiLCJwYXJzZUVtb2ppIiwibXNnIiwiZW1vamkiLCJyZWciLCJtc2dMaXN0Iiwib2JqTGlzdCIsImZhY2UiLCJoYXNPd25Qcm9wZXJ0eSIsImluZGV4T2YiLCJyZXBsYWNlIiwiYXJ5Iiwic3BsaXQiLCJpIiwibGVuZ3RoIiwicHVzaCIsInRlc3QiLCJvYmoiLCJkYXRhIiwidHlwZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsSUFBTUEsS0FBSyxHQUFHO0VBQ1pDLElBQUksRUFBRSx5QkFBeUI7RUFDL0JDLEdBQUcsRUFBRTtJQUNILE1BQU0sRUFBRSxVQUFVO0lBQ2xCLE1BQU0sRUFBRSxVQUFVO0lBQ2xCLE1BQU0sRUFBRSxVQUFVO0lBQ2xCLE9BQU8sRUFBRSxVQUFVO0lBQ25CLE1BQU0sRUFBRSxVQUFVO0lBQ2xCLE9BQU8sRUFBRSxVQUFVO0lBQ25CLE1BQU0sRUFBRSxVQUFVO0lBQ2xCLE1BQU0sRUFBRSxVQUFVO0lBQ2xCLE1BQU0sRUFBRSxVQUFVO0lBQ2xCLE1BQU0sRUFBRSxXQUFXO0lBQ25CLE9BQU8sRUFBRSxXQUFXO0lBQ3BCLE9BQU8sRUFBRSxXQUFXO0lBQ3BCLE9BQU8sRUFBRSxXQUFXO0lBQ3BCLE9BQU8sRUFBRSxXQUFXO0lBQ3BCLE9BQU8sRUFBRSxXQUFXO0lBQ3BCLE9BQU8sRUFBRSxXQUFXO0lBQ3BCLE9BQU8sRUFBRSxXQUFXO0lBQ3BCLE1BQU0sRUFBRSxXQUFXO0lBQ25CLE9BQU8sRUFBRSxXQUFXO0lBQ3BCLE9BQU8sRUFBRSxXQUFXO0lBQ3BCLE9BQU8sRUFBRSxXQUFXO0lBQ3BCLE9BQU8sRUFBRSxXQUFXO0lBQ3BCLE9BQU8sRUFBRSxXQUFXO0lBQ3BCLE9BQU8sRUFBRSxhQUFhO0lBQ3RCLE9BQU8sRUFBRSxXQUFXO0lBQ3BCLE9BQU8sRUFBRSxXQUFXO0lBQ3BCLE9BQU8sRUFBRSxXQUFXO0lBQ3BCLE9BQU8sRUFBRSxXQUFXO0lBQ3BCLE9BQU8sRUFBRSxXQUFXO0lBQ3BCLE9BQU8sRUFBRSxXQUFXO0lBQ3BCLE9BQU8sRUFBRSxXQUFXO0lBQ3BCLE9BQU8sRUFBRSxXQUFXO0lBQ3BCLE9BQU8sRUFBRSxXQUFXO0lBQ3BCLE9BQU8sRUFBRSxXQUFXO0lBQ3BCLE9BQU8sRUFBRSxXQUFXO0lBQ3BCLE9BQU8sRUFBRTtFQUNYO0FBQ0YsQ0FBQztBQUVELElBQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFVLENBQUlDLEdBQUcsRUFBSztFQUMxQixJQUFJLE9BQU9KLEtBQUssS0FBSyxXQUFXLElBQUksT0FBT0EsS0FBSyxDQUFDRSxHQUFHLEtBQUssV0FBVyxFQUFFO0lBQ3BFLE9BQU9FLEdBQUc7RUFDWjtFQUVBLElBQUlDLEtBQUssR0FBR0wsS0FBSztJQUNmTSxHQUFHLEdBQUcsSUFBSTtFQUNaLElBQUlDLE9BQU8sR0FBRyxFQUFFO0VBQ2hCLElBQUlDLE9BQU8sR0FBRyxFQUFFO0VBRWhCLEtBQUssSUFBSUMsSUFBSSxJQUFJSixLQUFLLENBQUNILEdBQUcsRUFBRTtJQUMxQixJQUFJRyxLQUFLLENBQUNILEdBQUcsQ0FBQ1EsY0FBYyxDQUFDRCxJQUFJLENBQUMsRUFBRTtNQUNsQyxPQUFPTCxHQUFHLENBQUNPLE9BQU8sQ0FBQ0YsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUU7UUFDN0JMLEdBQUcsR0FBR0EsR0FBRyxDQUFDUSxPQUFPLENBQUNILElBQUksRUFBRSxHQUFHLEdBQUdKLEtBQUssQ0FBQ0gsR0FBRyxDQUFDTyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUM7TUFDdEQ7SUFDRjtFQUNGO0VBRUEsSUFBSUksR0FBRyxHQUFHVCxHQUFHLENBQUNVLEtBQUssQ0FBQyxHQUFHLENBQUM7RUFDeEIsSUFBSVIsR0FBRyxHQUFHLFFBQVE7RUFFbEIsS0FBSyxJQUFJUyxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUdGLEdBQUcsQ0FBQ0csTUFBTSxFQUFFRCxDQUFDLEVBQUUsRUFBRTtJQUNuQyxJQUFJRixHQUFHLENBQUNFLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtNQUNoQlIsT0FBTyxDQUFDVSxJQUFJLENBQUNKLEdBQUcsQ0FBQ0UsQ0FBQyxDQUFDLENBQUM7SUFDdEI7RUFDRjtFQUVBLEtBQUssSUFBSUEsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHUixPQUFPLENBQUNTLE1BQU0sRUFBRUQsQ0FBQyxFQUFFLEVBQUU7SUFDdkMsSUFBSVQsR0FBRyxDQUFDWSxJQUFJLENBQUNYLE9BQU8sQ0FBQ1EsQ0FBQyxDQUFDLENBQUMsRUFBRTtNQUN4QixJQUFJSSxHQUFHLEdBQUcsQ0FBQyxDQUFDO01BQ1pBLEdBQUcsQ0FBQ0MsSUFBSSxHQUFHYixPQUFPLENBQUNRLENBQUMsQ0FBQztNQUNyQkksR0FBRyxDQUFDRSxJQUFJLEdBQUcsT0FBTztNQUNsQmIsT0FBTyxDQUFDUyxJQUFJLENBQUNFLEdBQUcsQ0FBQztJQUNuQixDQUFDLE1BQU07TUFDTCxJQUFJQSxHQUFHLEdBQUcsQ0FBQyxDQUFDO01BQ1pBLEdBQUcsQ0FBQ0MsSUFBSSxHQUFHYixPQUFPLENBQUNRLENBQUMsQ0FBQztNQUNyQkksR0FBRyxDQUFDRSxJQUFJLEdBQUcsS0FBSztNQUNoQmIsT0FBTyxDQUFDUyxJQUFJLENBQUNFLEdBQUcsQ0FBQztJQUNuQjtFQUNGO0VBRUEsT0FBT1gsT0FBTztBQUNoQixDQUFDO0FBQUMsZUFDYUwsVUFBVTtBQUFBIiwiZmlsZSI6IjQzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgRW1vamkgPSB7XG4gIHBhdGg6ICcuLi9zdGF0aWMvaW1hZ2VzL2ZhY2VzLycsXG4gIG1hcDoge1xuICAgICdbKTpdJzogJ2VlXzEucG5nJyxcbiAgICAnWzpEXSc6ICdlZV8yLnBuZycsXG4gICAgJ1s7KV0nOiAnZWVfMy5wbmcnLFxuICAgICdbOi1vXSc6ICdlZV80LnBuZycsXG4gICAgJ1s6cF0nOiAnZWVfNS5wbmcnLFxuICAgICdbKEgpXSc6ICdlZV82LnBuZycsXG4gICAgJ1s6QF0nOiAnZWVfNy5wbmcnLFxuICAgICdbOnNdJzogJ2VlXzgucG5nJyxcbiAgICAnWzokXSc6ICdlZV85LnBuZycsXG4gICAgJ1s6KF0nOiAnZWVfMTAucG5nJyxcbiAgICBcIls6JyhdXCI6ICdlZV8xMS5wbmcnLFxuICAgICdbPG8pXSc6ICdlZV8xMi5wbmcnLFxuICAgICdbKGEpXSc6ICdlZV8xMy5wbmcnLFxuICAgICdbOG98XSc6ICdlZV8xNC5wbmcnLFxuICAgICdbOC18XSc6ICdlZV8xNS5wbmcnLFxuICAgICdbK28oXSc6ICdlZV8xNi5wbmcnLFxuICAgICdbfC0pXSc6ICdlZV8xNy5wbmcnLFxuICAgICdbOnxdJzogJ2VlXzE4LnBuZycsXG4gICAgJ1sqLSldJzogJ2VlXzE5LnBuZycsXG4gICAgJ1s6LSNdJzogJ2VlXzIwLnBuZycsXG4gICAgJ1tebyldJzogJ2VlXzIxLnBuZycsXG4gICAgJ1s6LSpdJzogJ2VlXzIyLnBuZycsXG4gICAgJ1s4LSldJzogJ2VlXzIzLnBuZycsXG4gICAgJ1tkZWxdJzogJ2J0bl9kZWwucG5nJyxcbiAgICAnWyh8KV0nOiAnZWVfMjQucG5nJyxcbiAgICAnWyh1KV0nOiAnZWVfMjUucG5nJyxcbiAgICAnWyhTKV0nOiAnZWVfMjYucG5nJyxcbiAgICAnWygqKV0nOiAnZWVfMjcucG5nJyxcbiAgICAnWygjKV0nOiAnZWVfMjgucG5nJyxcbiAgICAnWyhSKV0nOiAnZWVfMjkucG5nJyxcbiAgICAnWyh7KV0nOiAnZWVfMzAucG5nJyxcbiAgICAnWyh9KV0nOiAnZWVfMzEucG5nJyxcbiAgICAnWyhrKV0nOiAnZWVfMzIucG5nJyxcbiAgICAnWyhGKV0nOiAnZWVfMzMucG5nJyxcbiAgICAnWyhXKV0nOiAnZWVfMzQucG5nJyxcbiAgICAnWyhEKV0nOiAnZWVfMzUucG5nJyxcbiAgfSxcbn07XG5cbmNvbnN0IHBhcnNlRW1vamkgPSAobXNnKSA9PiB7XG4gIGlmICh0eXBlb2YgRW1vamkgPT09ICd1bmRlZmluZWQnIHx8IHR5cGVvZiBFbW9qaS5tYXAgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuIG1zZztcbiAgfVxuXG4gIHZhciBlbW9qaSA9IEVtb2ppLFxuICAgIHJlZyA9IG51bGw7XG4gIHZhciBtc2dMaXN0ID0gW107XG4gIHZhciBvYmpMaXN0ID0gW107XG5cbiAgZm9yICh2YXIgZmFjZSBpbiBlbW9qaS5tYXApIHtcbiAgICBpZiAoZW1vamkubWFwLmhhc093blByb3BlcnR5KGZhY2UpKSB7XG4gICAgICB3aGlsZSAobXNnLmluZGV4T2YoZmFjZSkgPiAtMSkge1xuICAgICAgICBtc2cgPSBtc2cucmVwbGFjZShmYWNlLCAnXicgKyBlbW9qaS5tYXBbZmFjZV0gKyAnXicpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHZhciBhcnkgPSBtc2cuc3BsaXQoJ14nKTtcbiAgdmFyIHJlZyA9IC9eZS4qZyQvO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYXJ5Lmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGFyeVtpXSAhPSAnJykge1xuICAgICAgbXNnTGlzdC5wdXNoKGFyeVtpXSk7XG4gICAgfVxuICB9XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBtc2dMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHJlZy50ZXN0KG1zZ0xpc3RbaV0pKSB7XG4gICAgICB2YXIgb2JqID0ge307XG4gICAgICBvYmouZGF0YSA9IG1zZ0xpc3RbaV07XG4gICAgICBvYmoudHlwZSA9ICdlbW9qaSc7XG4gICAgICBvYmpMaXN0LnB1c2gob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIG9iaiA9IHt9O1xuICAgICAgb2JqLmRhdGEgPSBtc2dMaXN0W2ldO1xuICAgICAgb2JqLnR5cGUgPSAndHh0JztcbiAgICAgIG9iakxpc3QucHVzaChvYmopO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBvYmpMaXN0O1xufTtcbmV4cG9ydCBkZWZhdWx0IHBhcnNlRW1vamk7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///43\n");

/***/ }),
/* 44 */
/*!*****************************************************************************************!*\
  !*** /Users/hfp/Documents/HBuilderProjects/cunjin-socket-test/EaseIM/utils/getEMKey.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n/* 用以获取消息存储格式时的key */\nvar getEMKey = function getEMKey(loginId, fromId, toId, chatType) {\n  var key = '';\n  if (chatType === 'singleChat') {\n    if (loginId === fromId) {\n      key = toId;\n    } else {\n      key = fromId;\n    }\n  } else if (chatType === 'groupChat') {\n    key = toId;\n  }\n  return key;\n};\nvar _default = getEMKey;\nexports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vRWFzZUlNL3V0aWxzL2dldEVNS2V5LmpzIl0sIm5hbWVzIjpbImdldEVNS2V5IiwibG9naW5JZCIsImZyb21JZCIsInRvSWQiLCJjaGF0VHlwZSIsImtleSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBUSxDQUFJQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxRQUFRLEVBQUs7RUFDcEQsSUFBSUMsR0FBRyxHQUFHLEVBQUU7RUFDWixJQUFJRCxRQUFRLEtBQUssWUFBWSxFQUFFO0lBQzdCLElBQUlILE9BQU8sS0FBS0MsTUFBTSxFQUFFO01BQ3RCRyxHQUFHLEdBQUdGLElBQUk7SUFDWixDQUFDLE1BQU07TUFDTEUsR0FBRyxHQUFHSCxNQUFNO0lBQ2Q7RUFDRixDQUFDLE1BQU0sSUFBSUUsUUFBUSxLQUFLLFdBQVcsRUFBRTtJQUNuQ0MsR0FBRyxHQUFHRixJQUFJO0VBQ1o7RUFDQSxPQUFPRSxHQUFHO0FBQ1osQ0FBQztBQUFDLGVBQ2FMLFFBQVE7QUFBQSIsImZpbGUiOiI0NC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIOeUqOS7peiOt+WPlua2iOaBr+WtmOWCqOagvOW8j+aXtueahGtleSAqL1xuY29uc3QgZ2V0RU1LZXkgPSAobG9naW5JZCwgZnJvbUlkLCB0b0lkLCBjaGF0VHlwZSkgPT4ge1xuICBsZXQga2V5ID0gJyc7XG4gIGlmIChjaGF0VHlwZSA9PT0gJ3NpbmdsZUNoYXQnKSB7XG4gICAgaWYgKGxvZ2luSWQgPT09IGZyb21JZCkge1xuICAgICAga2V5ID0gdG9JZDtcbiAgICB9IGVsc2Uge1xuICAgICAga2V5ID0gZnJvbUlkO1xuICAgIH1cbiAgfSBlbHNlIGlmIChjaGF0VHlwZSA9PT0gJ2dyb3VwQ2hhdCcpIHtcbiAgICBrZXkgPSB0b0lkO1xuICB9XG4gIHJldHVybiBrZXk7XG59O1xuZXhwb3J0IGRlZmF1bHQgZ2V0RU1LZXk7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///44\n");

/***/ }),
/* 45 */
/*!***************************************************************************************************************!*\
  !*** /Users/hfp/Documents/HBuilderProjects/cunjin-socket-test/EaseIM/utils/convertGroupDetailsToGroupList.js ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = convertGroupDetailsToGroupList;\nfunction convertGroupDetailsToGroupList(detailsData) {\n  var groupListData = {};\n  // 转换重合字段名\n  groupListData.groupName = detailsData.name;\n  groupListData.groupId = detailsData.id;\n  groupListData.maxUsers = detailsData.maxusers;\n  groupListData.allowInvites = detailsData.allowinvites;\n  groupListData.affiliationsCount = detailsData.affiliations_count;\n  //将返回群列表里面的不存在的属性从群详情新增。\n  groupListData.shieldgroup = detailsData.shieldgroup;\n  groupListData.affiliations = detailsData.affiliations;\n  groupListData.mute = detailsData.mute;\n  groupListData.custom = detailsData.custom;\n  groupListData.created = detailsData.created;\n  groupListData.owner = detailsData.owner;\n  groupListData.membersonly = detailsData.membersonly;\n  //两个数据结构重合的属性值\n  groupListData.description = detailsData.description;\n  groupListData.disabled = detailsData.disabled;\n  groupListData.public = detailsData.public;\n  return groupListData;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vRWFzZUlNL3V0aWxzL2NvbnZlcnRHcm91cERldGFpbHNUb0dyb3VwTGlzdC5qcyJdLCJuYW1lcyI6WyJjb252ZXJ0R3JvdXBEZXRhaWxzVG9Hcm91cExpc3QiLCJkZXRhaWxzRGF0YSIsImdyb3VwTGlzdERhdGEiLCJncm91cE5hbWUiLCJuYW1lIiwiZ3JvdXBJZCIsImlkIiwibWF4VXNlcnMiLCJtYXh1c2VycyIsImFsbG93SW52aXRlcyIsImFsbG93aW52aXRlcyIsImFmZmlsaWF0aW9uc0NvdW50IiwiYWZmaWxpYXRpb25zX2NvdW50Iiwic2hpZWxkZ3JvdXAiLCJhZmZpbGlhdGlvbnMiLCJtdXRlIiwiY3VzdG9tIiwiY3JlYXRlZCIsIm93bmVyIiwibWVtYmVyc29ubHkiLCJkZXNjcmlwdGlvbiIsImRpc2FibGVkIiwicHVibGljIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBZSxTQUFTQSw4QkFBOEIsQ0FBQ0MsV0FBVyxFQUFFO0VBQ2xFLElBQU1DLGFBQWEsR0FBRyxDQUFDLENBQUM7RUFDeEI7RUFDQUEsYUFBYSxDQUFDQyxTQUFTLEdBQUdGLFdBQVcsQ0FBQ0csSUFBSTtFQUMxQ0YsYUFBYSxDQUFDRyxPQUFPLEdBQUdKLFdBQVcsQ0FBQ0ssRUFBRTtFQUN0Q0osYUFBYSxDQUFDSyxRQUFRLEdBQUdOLFdBQVcsQ0FBQ08sUUFBUTtFQUM3Q04sYUFBYSxDQUFDTyxZQUFZLEdBQUdSLFdBQVcsQ0FBQ1MsWUFBWTtFQUNyRFIsYUFBYSxDQUFDUyxpQkFBaUIsR0FBR1YsV0FBVyxDQUFDVyxrQkFBa0I7RUFDaEU7RUFDQVYsYUFBYSxDQUFDVyxXQUFXLEdBQUdaLFdBQVcsQ0FBQ1ksV0FBVztFQUNuRFgsYUFBYSxDQUFDWSxZQUFZLEdBQUdiLFdBQVcsQ0FBQ2EsWUFBWTtFQUNyRFosYUFBYSxDQUFDYSxJQUFJLEdBQUdkLFdBQVcsQ0FBQ2MsSUFBSTtFQUNyQ2IsYUFBYSxDQUFDYyxNQUFNLEdBQUdmLFdBQVcsQ0FBQ2UsTUFBTTtFQUN6Q2QsYUFBYSxDQUFDZSxPQUFPLEdBQUdoQixXQUFXLENBQUNnQixPQUFPO0VBQzNDZixhQUFhLENBQUNnQixLQUFLLEdBQUdqQixXQUFXLENBQUNpQixLQUFLO0VBQ3ZDaEIsYUFBYSxDQUFDaUIsV0FBVyxHQUFHbEIsV0FBVyxDQUFDa0IsV0FBVztFQUNuRDtFQUNBakIsYUFBYSxDQUFDa0IsV0FBVyxHQUFHbkIsV0FBVyxDQUFDbUIsV0FBVztFQUNuRGxCLGFBQWEsQ0FBQ21CLFFBQVEsR0FBR3BCLFdBQVcsQ0FBQ29CLFFBQVE7RUFDN0NuQixhQUFhLENBQUNvQixNQUFNLEdBQUdyQixXQUFXLENBQUNxQixNQUFNO0VBRXpDLE9BQU9wQixhQUFhO0FBQ3RCIiwiZmlsZSI6IjQ1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29udmVydEdyb3VwRGV0YWlsc1RvR3JvdXBMaXN0KGRldGFpbHNEYXRhKSB7XG4gIGNvbnN0IGdyb3VwTGlzdERhdGEgPSB7fTtcbiAgLy8g6L2s5o2i6YeN5ZCI5a2X5q615ZCNXG4gIGdyb3VwTGlzdERhdGEuZ3JvdXBOYW1lID0gZGV0YWlsc0RhdGEubmFtZTtcbiAgZ3JvdXBMaXN0RGF0YS5ncm91cElkID0gZGV0YWlsc0RhdGEuaWQ7XG4gIGdyb3VwTGlzdERhdGEubWF4VXNlcnMgPSBkZXRhaWxzRGF0YS5tYXh1c2VycztcbiAgZ3JvdXBMaXN0RGF0YS5hbGxvd0ludml0ZXMgPSBkZXRhaWxzRGF0YS5hbGxvd2ludml0ZXM7XG4gIGdyb3VwTGlzdERhdGEuYWZmaWxpYXRpb25zQ291bnQgPSBkZXRhaWxzRGF0YS5hZmZpbGlhdGlvbnNfY291bnQ7XG4gIC8v5bCG6L+U5Zue576k5YiX6KGo6YeM6Z2i55qE5LiN5a2Y5Zyo55qE5bGe5oCn5LuO576k6K+m5oOF5paw5aKe44CCXG4gIGdyb3VwTGlzdERhdGEuc2hpZWxkZ3JvdXAgPSBkZXRhaWxzRGF0YS5zaGllbGRncm91cDtcbiAgZ3JvdXBMaXN0RGF0YS5hZmZpbGlhdGlvbnMgPSBkZXRhaWxzRGF0YS5hZmZpbGlhdGlvbnM7XG4gIGdyb3VwTGlzdERhdGEubXV0ZSA9IGRldGFpbHNEYXRhLm11dGU7XG4gIGdyb3VwTGlzdERhdGEuY3VzdG9tID0gZGV0YWlsc0RhdGEuY3VzdG9tO1xuICBncm91cExpc3REYXRhLmNyZWF0ZWQgPSBkZXRhaWxzRGF0YS5jcmVhdGVkO1xuICBncm91cExpc3REYXRhLm93bmVyID0gZGV0YWlsc0RhdGEub3duZXI7XG4gIGdyb3VwTGlzdERhdGEubWVtYmVyc29ubHkgPSBkZXRhaWxzRGF0YS5tZW1iZXJzb25seTtcbiAgLy/kuKTkuKrmlbDmja7nu5PmnoTph43lkIjnmoTlsZ7mgKflgLxcbiAgZ3JvdXBMaXN0RGF0YS5kZXNjcmlwdGlvbiA9IGRldGFpbHNEYXRhLmRlc2NyaXB0aW9uO1xuICBncm91cExpc3REYXRhLmRpc2FibGVkID0gZGV0YWlsc0RhdGEuZGlzYWJsZWQ7XG4gIGdyb3VwTGlzdERhdGEucHVibGljID0gZGV0YWlsc0RhdGEucHVibGljO1xuXG4gIHJldHVybiBncm91cExpc3REYXRhO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///45\n");

/***/ }),
/* 46 */
/*!*******************************************************************************!*\
  !*** /Users/hfp/Documents/HBuilderProjects/cunjin-socket-test/store/index.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 1);\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\nvar _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 26));\nvar _vuex = _interopRequireDefault(__webpack_require__(/*! vuex */ 47));\nvar _login = _interopRequireDefault(__webpack_require__(/*! ./modules/login */ 48));\n// 页面路径：store/index.js\n\n_vue.default.use(_vuex.default); //vue的插件机制\n\n//Vuex.Store 构造器选项\nvar store = new _vuex.default.Store({\n  modules: {\n    LoginStore: _login.default\n  }\n});\nvar _default = store;\nexports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vc3RvcmUvaW5kZXguanMiXSwibmFtZXMiOlsiVnVlIiwidXNlIiwiVnVleCIsInN0b3JlIiwiU3RvcmUiLCJtb2R1bGVzIiwiTG9naW5TdG9yZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBO0FBQ0E7QUFHQTtBQUxBOztBQUlBQSxZQUFHLENBQUNDLEdBQUcsQ0FBQ0MsYUFBSSxDQUFDLENBQUMsQ0FBQzs7QUFFZjtBQUNBLElBQU1DLEtBQUssR0FBRyxJQUFJRCxhQUFJLENBQUNFLEtBQUssQ0FBQztFQUMzQkMsT0FBTyxFQUFFO0lBQ1BDLFVBQVUsRUFBVkE7RUFDRjtBQUNGLENBQUMsQ0FBQztBQUFDLGVBQ1lILEtBQUs7QUFBQSIsImZpbGUiOiI0Ni5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIOmhtemdoui3r+W+hO+8mnN0b3JlL2luZGV4LmpzXG5pbXBvcnQgVnVlIGZyb20gJ3Z1ZSc7XG5pbXBvcnQgVnVleCBmcm9tICd2dWV4JztcblxuVnVlLnVzZShWdWV4KTsgLy92dWXnmoTmj5Lku7bmnLrliLZcbmltcG9ydCBMb2dpblN0b3JlIGZyb20gJy4vbW9kdWxlcy9sb2dpbic7XG4vL1Z1ZXguU3RvcmUg5p6E6YCg5Zmo6YCJ6aG5XG5jb25zdCBzdG9yZSA9IG5ldyBWdWV4LlN0b3JlKHtcbiAgbW9kdWxlczoge1xuICAgIExvZ2luU3RvcmVcbiAgfSxcbn0pO1xuZXhwb3J0IGRlZmF1bHQgc3RvcmU7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///46\n");

/***/ }),
/* 47 */
/*!**************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vuex3/dist/vuex.common.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * vuex v3.6.2
 * (c) 2021 Evan You
 * @license MIT
 */


function applyMixin (Vue) {
  var version = Number(Vue.version.split('.')[0]);

  if (version >= 2) {
    Vue.mixin({ beforeCreate: vuexInit });
  } else {
    // override init and inject vuex init procedure
    // for 1.x backwards compatibility.
    var _init = Vue.prototype._init;
    Vue.prototype._init = function (options) {
      if ( options === void 0 ) options = {};

      options.init = options.init
        ? [vuexInit].concat(options.init)
        : vuexInit;
      _init.call(this, options);
    };
  }

  /**
   * Vuex init hook, injected into each instances init hooks list.
   */

  function vuexInit () {
    var options = this.$options;
    // store injection
    if (options.store) {
      this.$store = typeof options.store === 'function'
        ? options.store()
        : options.store;
    } else if (options.parent && options.parent.$store) {
      this.$store = options.parent.$store;
    }
  }
}

var target = typeof window !== 'undefined'
  ? window
  : typeof global !== 'undefined'
    ? global
    : {};
var devtoolHook = target.__VUE_DEVTOOLS_GLOBAL_HOOK__;

function devtoolPlugin (store) {
  if (!devtoolHook) { return }

  store._devtoolHook = devtoolHook;

  devtoolHook.emit('vuex:init', store);

  devtoolHook.on('vuex:travel-to-state', function (targetState) {
    store.replaceState(targetState);
  });

  store.subscribe(function (mutation, state) {
    devtoolHook.emit('vuex:mutation', mutation, state);
  }, { prepend: true });

  store.subscribeAction(function (action, state) {
    devtoolHook.emit('vuex:action', action, state);
  }, { prepend: true });
}

/**
 * Get the first item that pass the test
 * by second argument function
 *
 * @param {Array} list
 * @param {Function} f
 * @return {*}
 */
function find (list, f) {
  return list.filter(f)[0]
}

/**
 * Deep copy the given object considering circular structure.
 * This function caches all nested objects and its copies.
 * If it detects circular structure, use cached copy to avoid infinite loop.
 *
 * @param {*} obj
 * @param {Array<Object>} cache
 * @return {*}
 */
function deepCopy (obj, cache) {
  if ( cache === void 0 ) cache = [];

  // just return if obj is immutable value
  if (obj === null || typeof obj !== 'object') {
    return obj
  }

  // if obj is hit, it is in circular structure
  var hit = find(cache, function (c) { return c.original === obj; });
  if (hit) {
    return hit.copy
  }

  var copy = Array.isArray(obj) ? [] : {};
  // put the copy into cache at first
  // because we want to refer it in recursive deepCopy
  cache.push({
    original: obj,
    copy: copy
  });

  Object.keys(obj).forEach(function (key) {
    copy[key] = deepCopy(obj[key], cache);
  });

  return copy
}

/**
 * forEach for object
 */
function forEachValue (obj, fn) {
  Object.keys(obj).forEach(function (key) { return fn(obj[key], key); });
}

function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

function isPromise (val) {
  return val && typeof val.then === 'function'
}

function assert (condition, msg) {
  if (!condition) { throw new Error(("[vuex] " + msg)) }
}

function partial (fn, arg) {
  return function () {
    return fn(arg)
  }
}

// Base data struct for store's module, package with some attribute and method
var Module = function Module (rawModule, runtime) {
  this.runtime = runtime;
  // Store some children item
  this._children = Object.create(null);
  // Store the origin module object which passed by programmer
  this._rawModule = rawModule;
  var rawState = rawModule.state;

  // Store the origin module's state
  this.state = (typeof rawState === 'function' ? rawState() : rawState) || {};
};

var prototypeAccessors = { namespaced: { configurable: true } };

prototypeAccessors.namespaced.get = function () {
  return !!this._rawModule.namespaced
};

Module.prototype.addChild = function addChild (key, module) {
  this._children[key] = module;
};

Module.prototype.removeChild = function removeChild (key) {
  delete this._children[key];
};

Module.prototype.getChild = function getChild (key) {
  return this._children[key]
};

Module.prototype.hasChild = function hasChild (key) {
  return key in this._children
};

Module.prototype.update = function update (rawModule) {
  this._rawModule.namespaced = rawModule.namespaced;
  if (rawModule.actions) {
    this._rawModule.actions = rawModule.actions;
  }
  if (rawModule.mutations) {
    this._rawModule.mutations = rawModule.mutations;
  }
  if (rawModule.getters) {
    this._rawModule.getters = rawModule.getters;
  }
};

Module.prototype.forEachChild = function forEachChild (fn) {
  forEachValue(this._children, fn);
};

Module.prototype.forEachGetter = function forEachGetter (fn) {
  if (this._rawModule.getters) {
    forEachValue(this._rawModule.getters, fn);
  }
};

Module.prototype.forEachAction = function forEachAction (fn) {
  if (this._rawModule.actions) {
    forEachValue(this._rawModule.actions, fn);
  }
};

Module.prototype.forEachMutation = function forEachMutation (fn) {
  if (this._rawModule.mutations) {
    forEachValue(this._rawModule.mutations, fn);
  }
};

Object.defineProperties( Module.prototype, prototypeAccessors );

var ModuleCollection = function ModuleCollection (rawRootModule) {
  // register root module (Vuex.Store options)
  this.register([], rawRootModule, false);
};

ModuleCollection.prototype.get = function get (path) {
  return path.reduce(function (module, key) {
    return module.getChild(key)
  }, this.root)
};

ModuleCollection.prototype.getNamespace = function getNamespace (path) {
  var module = this.root;
  return path.reduce(function (namespace, key) {
    module = module.getChild(key);
    return namespace + (module.namespaced ? key + '/' : '')
  }, '')
};

ModuleCollection.prototype.update = function update$1 (rawRootModule) {
  update([], this.root, rawRootModule);
};

ModuleCollection.prototype.register = function register (path, rawModule, runtime) {
    var this$1 = this;
    if ( runtime === void 0 ) runtime = true;

  if ((true)) {
    assertRawModule(path, rawModule);
  }

  var newModule = new Module(rawModule, runtime);
  if (path.length === 0) {
    this.root = newModule;
  } else {
    var parent = this.get(path.slice(0, -1));
    parent.addChild(path[path.length - 1], newModule);
  }

  // register nested modules
  if (rawModule.modules) {
    forEachValue(rawModule.modules, function (rawChildModule, key) {
      this$1.register(path.concat(key), rawChildModule, runtime);
    });
  }
};

ModuleCollection.prototype.unregister = function unregister (path) {
  var parent = this.get(path.slice(0, -1));
  var key = path[path.length - 1];
  var child = parent.getChild(key);

  if (!child) {
    if ((true)) {
      console.warn(
        "[vuex] trying to unregister module '" + key + "', which is " +
        "not registered"
      );
    }
    return
  }

  if (!child.runtime) {
    return
  }

  parent.removeChild(key);
};

ModuleCollection.prototype.isRegistered = function isRegistered (path) {
  var parent = this.get(path.slice(0, -1));
  var key = path[path.length - 1];

  if (parent) {
    return parent.hasChild(key)
  }

  return false
};

function update (path, targetModule, newModule) {
  if ((true)) {
    assertRawModule(path, newModule);
  }

  // update target module
  targetModule.update(newModule);

  // update nested modules
  if (newModule.modules) {
    for (var key in newModule.modules) {
      if (!targetModule.getChild(key)) {
        if ((true)) {
          console.warn(
            "[vuex] trying to add a new module '" + key + "' on hot reloading, " +
            'manual reload is needed'
          );
        }
        return
      }
      update(
        path.concat(key),
        targetModule.getChild(key),
        newModule.modules[key]
      );
    }
  }
}

var functionAssert = {
  assert: function (value) { return typeof value === 'function'; },
  expected: 'function'
};

var objectAssert = {
  assert: function (value) { return typeof value === 'function' ||
    (typeof value === 'object' && typeof value.handler === 'function'); },
  expected: 'function or object with "handler" function'
};

var assertTypes = {
  getters: functionAssert,
  mutations: functionAssert,
  actions: objectAssert
};

function assertRawModule (path, rawModule) {
  Object.keys(assertTypes).forEach(function (key) {
    if (!rawModule[key]) { return }

    var assertOptions = assertTypes[key];

    forEachValue(rawModule[key], function (value, type) {
      assert(
        assertOptions.assert(value),
        makeAssertionMessage(path, key, type, value, assertOptions.expected)
      );
    });
  });
}

function makeAssertionMessage (path, key, type, value, expected) {
  var buf = key + " should be " + expected + " but \"" + key + "." + type + "\"";
  if (path.length > 0) {
    buf += " in module \"" + (path.join('.')) + "\"";
  }
  buf += " is " + (JSON.stringify(value)) + ".";
  return buf
}

var Vue; // bind on install

var Store = function Store (options) {
  var this$1 = this;
  if ( options === void 0 ) options = {};

  // Auto install if it is not done yet and `window` has `Vue`.
  // To allow users to avoid auto-installation in some cases,
  // this code should be placed here. See #731
  if (!Vue && typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
  }

  if ((true)) {
    assert(Vue, "must call Vue.use(Vuex) before creating a store instance.");
    assert(typeof Promise !== 'undefined', "vuex requires a Promise polyfill in this browser.");
    assert(this instanceof Store, "store must be called with the new operator.");
  }

  var plugins = options.plugins; if ( plugins === void 0 ) plugins = [];
  var strict = options.strict; if ( strict === void 0 ) strict = false;

  // store internal state
  this._committing = false;
  this._actions = Object.create(null);
  this._actionSubscribers = [];
  this._mutations = Object.create(null);
  this._wrappedGetters = Object.create(null);
  this._modules = new ModuleCollection(options);
  this._modulesNamespaceMap = Object.create(null);
  this._subscribers = [];
  this._watcherVM = new Vue();
  this._makeLocalGettersCache = Object.create(null);

  // bind commit and dispatch to self
  var store = this;
  var ref = this;
  var dispatch = ref.dispatch;
  var commit = ref.commit;
  this.dispatch = function boundDispatch (type, payload) {
    return dispatch.call(store, type, payload)
  };
  this.commit = function boundCommit (type, payload, options) {
    return commit.call(store, type, payload, options)
  };

  // strict mode
  this.strict = strict;

  var state = this._modules.root.state;

  // init root module.
  // this also recursively registers all sub-modules
  // and collects all module getters inside this._wrappedGetters
  installModule(this, state, [], this._modules.root);

  // initialize the store vm, which is responsible for the reactivity
  // (also registers _wrappedGetters as computed properties)
  resetStoreVM(this, state);

  // apply plugins
  plugins.forEach(function (plugin) { return plugin(this$1); });

  var useDevtools = options.devtools !== undefined ? options.devtools : Vue.config.devtools;
  if (useDevtools) {
    devtoolPlugin(this);
  }
};

var prototypeAccessors$1 = { state: { configurable: true } };

prototypeAccessors$1.state.get = function () {
  return this._vm._data.$$state
};

prototypeAccessors$1.state.set = function (v) {
  if ((true)) {
    assert(false, "use store.replaceState() to explicit replace store state.");
  }
};

Store.prototype.commit = function commit (_type, _payload, _options) {
    var this$1 = this;

  // check object-style commit
  var ref = unifyObjectStyle(_type, _payload, _options);
    var type = ref.type;
    var payload = ref.payload;
    var options = ref.options;

  var mutation = { type: type, payload: payload };
  var entry = this._mutations[type];
  if (!entry) {
    if ((true)) {
      console.error(("[vuex] unknown mutation type: " + type));
    }
    return
  }
  this._withCommit(function () {
    entry.forEach(function commitIterator (handler) {
      handler(payload);
    });
  });

  this._subscribers
    .slice() // shallow copy to prevent iterator invalidation if subscriber synchronously calls unsubscribe
    .forEach(function (sub) { return sub(mutation, this$1.state); });

  if (
    ( true) &&
    options && options.silent
  ) {
    console.warn(
      "[vuex] mutation type: " + type + ". Silent option has been removed. " +
      'Use the filter functionality in the vue-devtools'
    );
  }
};

Store.prototype.dispatch = function dispatch (_type, _payload) {
    var this$1 = this;

  // check object-style dispatch
  var ref = unifyObjectStyle(_type, _payload);
    var type = ref.type;
    var payload = ref.payload;

  var action = { type: type, payload: payload };
  var entry = this._actions[type];
  if (!entry) {
    if ((true)) {
      console.error(("[vuex] unknown action type: " + type));
    }
    return
  }

  try {
    this._actionSubscribers
      .slice() // shallow copy to prevent iterator invalidation if subscriber synchronously calls unsubscribe
      .filter(function (sub) { return sub.before; })
      .forEach(function (sub) { return sub.before(action, this$1.state); });
  } catch (e) {
    if ((true)) {
      console.warn("[vuex] error in before action subscribers: ");
      console.error(e);
    }
  }

  var result = entry.length > 1
    ? Promise.all(entry.map(function (handler) { return handler(payload); }))
    : entry[0](payload);

  return new Promise(function (resolve, reject) {
    result.then(function (res) {
      try {
        this$1._actionSubscribers
          .filter(function (sub) { return sub.after; })
          .forEach(function (sub) { return sub.after(action, this$1.state); });
      } catch (e) {
        if ((true)) {
          console.warn("[vuex] error in after action subscribers: ");
          console.error(e);
        }
      }
      resolve(res);
    }, function (error) {
      try {
        this$1._actionSubscribers
          .filter(function (sub) { return sub.error; })
          .forEach(function (sub) { return sub.error(action, this$1.state, error); });
      } catch (e) {
        if ((true)) {
          console.warn("[vuex] error in error action subscribers: ");
          console.error(e);
        }
      }
      reject(error);
    });
  })
};

Store.prototype.subscribe = function subscribe (fn, options) {
  return genericSubscribe(fn, this._subscribers, options)
};

Store.prototype.subscribeAction = function subscribeAction (fn, options) {
  var subs = typeof fn === 'function' ? { before: fn } : fn;
  return genericSubscribe(subs, this._actionSubscribers, options)
};

Store.prototype.watch = function watch (getter, cb, options) {
    var this$1 = this;

  if ((true)) {
    assert(typeof getter === 'function', "store.watch only accepts a function.");
  }
  return this._watcherVM.$watch(function () { return getter(this$1.state, this$1.getters); }, cb, options)
};

Store.prototype.replaceState = function replaceState (state) {
    var this$1 = this;

  this._withCommit(function () {
    this$1._vm._data.$$state = state;
  });
};

Store.prototype.registerModule = function registerModule (path, rawModule, options) {
    if ( options === void 0 ) options = {};

  if (typeof path === 'string') { path = [path]; }

  if ((true)) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
    assert(path.length > 0, 'cannot register the root module by using registerModule.');
  }

  this._modules.register(path, rawModule);
  installModule(this, this.state, path, this._modules.get(path), options.preserveState);
  // reset store to update getters...
  resetStoreVM(this, this.state);
};

Store.prototype.unregisterModule = function unregisterModule (path) {
    var this$1 = this;

  if (typeof path === 'string') { path = [path]; }

  if ((true)) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
  }

  this._modules.unregister(path);
  this._withCommit(function () {
    var parentState = getNestedState(this$1.state, path.slice(0, -1));
    Vue.delete(parentState, path[path.length - 1]);
  });
  resetStore(this);
};

Store.prototype.hasModule = function hasModule (path) {
  if (typeof path === 'string') { path = [path]; }

  if ((true)) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
  }

  return this._modules.isRegistered(path)
};

Store.prototype[[104,111,116,85,112,100,97,116,101].map(function (item) {return String.fromCharCode(item)}).join('')] = function (newOptions) {
  this._modules.update(newOptions);
  resetStore(this, true);
};

Store.prototype._withCommit = function _withCommit (fn) {
  var committing = this._committing;
  this._committing = true;
  fn();
  this._committing = committing;
};

Object.defineProperties( Store.prototype, prototypeAccessors$1 );

function genericSubscribe (fn, subs, options) {
  if (subs.indexOf(fn) < 0) {
    options && options.prepend
      ? subs.unshift(fn)
      : subs.push(fn);
  }
  return function () {
    var i = subs.indexOf(fn);
    if (i > -1) {
      subs.splice(i, 1);
    }
  }
}

function resetStore (store, hot) {
  store._actions = Object.create(null);
  store._mutations = Object.create(null);
  store._wrappedGetters = Object.create(null);
  store._modulesNamespaceMap = Object.create(null);
  var state = store.state;
  // init all modules
  installModule(store, state, [], store._modules.root, true);
  // reset vm
  resetStoreVM(store, state, hot);
}

function resetStoreVM (store, state, hot) {
  var oldVm = store._vm;

  // bind store public getters
  store.getters = {};
  // reset local getters cache
  store._makeLocalGettersCache = Object.create(null);
  var wrappedGetters = store._wrappedGetters;
  var computed = {};
  forEachValue(wrappedGetters, function (fn, key) {
    // use computed to leverage its lazy-caching mechanism
    // direct inline function use will lead to closure preserving oldVm.
    // using partial to return function with only arguments preserved in closure environment.
    computed[key] = partial(fn, store);
    Object.defineProperty(store.getters, key, {
      get: function () { return store._vm[key]; },
      enumerable: true // for local getters
    });
  });

  // use a Vue instance to store the state tree
  // suppress warnings just in case the user has added
  // some funky global mixins
  var silent = Vue.config.silent;
  Vue.config.silent = true;
  store._vm = new Vue({
    data: {
      $$state: state
    },
    computed: computed
  });
  Vue.config.silent = silent;

  // enable strict mode for new vm
  if (store.strict) {
    enableStrictMode(store);
  }

  if (oldVm) {
    if (hot) {
      // dispatch changes in all subscribed watchers
      // to force getter re-evaluation for hot reloading.
      store._withCommit(function () {
        oldVm._data.$$state = null;
      });
    }
    Vue.nextTick(function () { return oldVm.$destroy(); });
  }
}

function installModule (store, rootState, path, module, hot) {
  var isRoot = !path.length;
  var namespace = store._modules.getNamespace(path);

  // register in namespace map
  if (module.namespaced) {
    if (store._modulesNamespaceMap[namespace] && ("development" !== 'production')) {
      console.error(("[vuex] duplicate namespace " + namespace + " for the namespaced module " + (path.join('/'))));
    }
    store._modulesNamespaceMap[namespace] = module;
  }

  // set state
  if (!isRoot && !hot) {
    var parentState = getNestedState(rootState, path.slice(0, -1));
    var moduleName = path[path.length - 1];
    store._withCommit(function () {
      if ((true)) {
        if (moduleName in parentState) {
          console.warn(
            ("[vuex] state field \"" + moduleName + "\" was overridden by a module with the same name at \"" + (path.join('.')) + "\"")
          );
        }
      }
      Vue.set(parentState, moduleName, module.state);
    });
  }

  var local = module.context = makeLocalContext(store, namespace, path);

  module.forEachMutation(function (mutation, key) {
    var namespacedType = namespace + key;
    registerMutation(store, namespacedType, mutation, local);
  });

  module.forEachAction(function (action, key) {
    var type = action.root ? key : namespace + key;
    var handler = action.handler || action;
    registerAction(store, type, handler, local);
  });

  module.forEachGetter(function (getter, key) {
    var namespacedType = namespace + key;
    registerGetter(store, namespacedType, getter, local);
  });

  module.forEachChild(function (child, key) {
    installModule(store, rootState, path.concat(key), child, hot);
  });
}

/**
 * make localized dispatch, commit, getters and state
 * if there is no namespace, just use root ones
 */
function makeLocalContext (store, namespace, path) {
  var noNamespace = namespace === '';

  var local = {
    dispatch: noNamespace ? store.dispatch : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if (( true) && !store._actions[type]) {
          console.error(("[vuex] unknown local action type: " + (args.type) + ", global type: " + type));
          return
        }
      }

      return store.dispatch(type, payload)
    },

    commit: noNamespace ? store.commit : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if (( true) && !store._mutations[type]) {
          console.error(("[vuex] unknown local mutation type: " + (args.type) + ", global type: " + type));
          return
        }
      }

      store.commit(type, payload, options);
    }
  };

  // getters and state object must be gotten lazily
  // because they will be changed by vm update
  Object.defineProperties(local, {
    getters: {
      get: noNamespace
        ? function () { return store.getters; }
        : function () { return makeLocalGetters(store, namespace); }
    },
    state: {
      get: function () { return getNestedState(store.state, path); }
    }
  });

  return local
}

function makeLocalGetters (store, namespace) {
  if (!store._makeLocalGettersCache[namespace]) {
    var gettersProxy = {};
    var splitPos = namespace.length;
    Object.keys(store.getters).forEach(function (type) {
      // skip if the target getter is not match this namespace
      if (type.slice(0, splitPos) !== namespace) { return }

      // extract local getter type
      var localType = type.slice(splitPos);

      // Add a port to the getters proxy.
      // Define as getter property because
      // we do not want to evaluate the getters in this time.
      Object.defineProperty(gettersProxy, localType, {
        get: function () { return store.getters[type]; },
        enumerable: true
      });
    });
    store._makeLocalGettersCache[namespace] = gettersProxy;
  }

  return store._makeLocalGettersCache[namespace]
}

function registerMutation (store, type, handler, local) {
  var entry = store._mutations[type] || (store._mutations[type] = []);
  entry.push(function wrappedMutationHandler (payload) {
    handler.call(store, local.state, payload);
  });
}

function registerAction (store, type, handler, local) {
  var entry = store._actions[type] || (store._actions[type] = []);
  entry.push(function wrappedActionHandler (payload) {
    var res = handler.call(store, {
      dispatch: local.dispatch,
      commit: local.commit,
      getters: local.getters,
      state: local.state,
      rootGetters: store.getters,
      rootState: store.state
    }, payload);
    if (!isPromise(res)) {
      res = Promise.resolve(res);
    }
    if (store._devtoolHook) {
      return res.catch(function (err) {
        store._devtoolHook.emit('vuex:error', err);
        throw err
      })
    } else {
      return res
    }
  });
}

function registerGetter (store, type, rawGetter, local) {
  if (store._wrappedGetters[type]) {
    if ((true)) {
      console.error(("[vuex] duplicate getter key: " + type));
    }
    return
  }
  store._wrappedGetters[type] = function wrappedGetter (store) {
    return rawGetter(
      local.state, // local state
      local.getters, // local getters
      store.state, // root state
      store.getters // root getters
    )
  };
}

function enableStrictMode (store) {
  store._vm.$watch(function () { return this._data.$$state }, function () {
    if ((true)) {
      assert(store._committing, "do not mutate vuex store state outside mutation handlers.");
    }
  }, { deep: true, sync: true });
}

function getNestedState (state, path) {
  return path.reduce(function (state, key) { return state[key]; }, state)
}

function unifyObjectStyle (type, payload, options) {
  if (isObject(type) && type.type) {
    options = payload;
    payload = type;
    type = type.type;
  }

  if ((true)) {
    assert(typeof type === 'string', ("expects string as the type, but found " + (typeof type) + "."));
  }

  return { type: type, payload: payload, options: options }
}

function install (_Vue) {
  if (Vue && _Vue === Vue) {
    if ((true)) {
      console.error(
        '[vuex] already installed. Vue.use(Vuex) should be called only once.'
      );
    }
    return
  }
  Vue = _Vue;
  applyMixin(Vue);
}

/**
 * Reduce the code which written in Vue.js for getting the state.
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} states # Object's item can be a function which accept state and getters for param, you can do something for state and getters in it.
 * @param {Object}
 */
var mapState = normalizeNamespace(function (namespace, states) {
  var res = {};
  if (( true) && !isValidMap(states)) {
    console.error('[vuex] mapState: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(states).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedState () {
      var state = this.$store.state;
      var getters = this.$store.getters;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapState', namespace);
        if (!module) {
          return
        }
        state = module.context.state;
        getters = module.context.getters;
      }
      return typeof val === 'function'
        ? val.call(this, state, getters)
        : state[val]
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res
});

/**
 * Reduce the code which written in Vue.js for committing the mutation
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} mutations # Object's item can be a function which accept `commit` function as the first param, it can accept another params. You can commit mutation and do any other things in this function. specially, You need to pass anthor params from the mapped function.
 * @return {Object}
 */
var mapMutations = normalizeNamespace(function (namespace, mutations) {
  var res = {};
  if (( true) && !isValidMap(mutations)) {
    console.error('[vuex] mapMutations: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(mutations).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedMutation () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      // Get the commit method from store
      var commit = this.$store.commit;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapMutations', namespace);
        if (!module) {
          return
        }
        commit = module.context.commit;
      }
      return typeof val === 'function'
        ? val.apply(this, [commit].concat(args))
        : commit.apply(this.$store, [val].concat(args))
    };
  });
  return res
});

/**
 * Reduce the code which written in Vue.js for getting the getters
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} getters
 * @return {Object}
 */
var mapGetters = normalizeNamespace(function (namespace, getters) {
  var res = {};
  if (( true) && !isValidMap(getters)) {
    console.error('[vuex] mapGetters: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(getters).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    // The namespace has been mutated by normalizeNamespace
    val = namespace + val;
    res[key] = function mappedGetter () {
      if (namespace && !getModuleByNamespace(this.$store, 'mapGetters', namespace)) {
        return
      }
      if (( true) && !(val in this.$store.getters)) {
        console.error(("[vuex] unknown getter: " + val));
        return
      }
      return this.$store.getters[val]
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res
});

/**
 * Reduce the code which written in Vue.js for dispatch the action
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} actions # Object's item can be a function which accept `dispatch` function as the first param, it can accept anthor params. You can dispatch action and do any other things in this function. specially, You need to pass anthor params from the mapped function.
 * @return {Object}
 */
var mapActions = normalizeNamespace(function (namespace, actions) {
  var res = {};
  if (( true) && !isValidMap(actions)) {
    console.error('[vuex] mapActions: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(actions).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedAction () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      // get dispatch function from store
      var dispatch = this.$store.dispatch;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapActions', namespace);
        if (!module) {
          return
        }
        dispatch = module.context.dispatch;
      }
      return typeof val === 'function'
        ? val.apply(this, [dispatch].concat(args))
        : dispatch.apply(this.$store, [val].concat(args))
    };
  });
  return res
});

/**
 * Rebinding namespace param for mapXXX function in special scoped, and return them by simple object
 * @param {String} namespace
 * @return {Object}
 */
var createNamespacedHelpers = function (namespace) { return ({
  mapState: mapState.bind(null, namespace),
  mapGetters: mapGetters.bind(null, namespace),
  mapMutations: mapMutations.bind(null, namespace),
  mapActions: mapActions.bind(null, namespace)
}); };

/**
 * Normalize the map
 * normalizeMap([1, 2, 3]) => [ { key: 1, val: 1 }, { key: 2, val: 2 }, { key: 3, val: 3 } ]
 * normalizeMap({a: 1, b: 2, c: 3}) => [ { key: 'a', val: 1 }, { key: 'b', val: 2 }, { key: 'c', val: 3 } ]
 * @param {Array|Object} map
 * @return {Object}
 */
function normalizeMap (map) {
  if (!isValidMap(map)) {
    return []
  }
  return Array.isArray(map)
    ? map.map(function (key) { return ({ key: key, val: key }); })
    : Object.keys(map).map(function (key) { return ({ key: key, val: map[key] }); })
}

/**
 * Validate whether given map is valid or not
 * @param {*} map
 * @return {Boolean}
 */
function isValidMap (map) {
  return Array.isArray(map) || isObject(map)
}

/**
 * Return a function expect two param contains namespace and map. it will normalize the namespace and then the param's function will handle the new namespace and the map.
 * @param {Function} fn
 * @return {Function}
 */
function normalizeNamespace (fn) {
  return function (namespace, map) {
    if (typeof namespace !== 'string') {
      map = namespace;
      namespace = '';
    } else if (namespace.charAt(namespace.length - 1) !== '/') {
      namespace += '/';
    }
    return fn(namespace, map)
  }
}

/**
 * Search a special module from store by namespace. if module not exist, print error message.
 * @param {Object} store
 * @param {String} helper
 * @param {String} namespace
 * @return {Object}
 */
function getModuleByNamespace (store, helper, namespace) {
  var module = store._modulesNamespaceMap[namespace];
  if (( true) && !module) {
    console.error(("[vuex] module namespace not found in " + helper + "(): " + namespace));
  }
  return module
}

// Credits: borrowed code from fcomb/redux-logger

function createLogger (ref) {
  if ( ref === void 0 ) ref = {};
  var collapsed = ref.collapsed; if ( collapsed === void 0 ) collapsed = true;
  var filter = ref.filter; if ( filter === void 0 ) filter = function (mutation, stateBefore, stateAfter) { return true; };
  var transformer = ref.transformer; if ( transformer === void 0 ) transformer = function (state) { return state; };
  var mutationTransformer = ref.mutationTransformer; if ( mutationTransformer === void 0 ) mutationTransformer = function (mut) { return mut; };
  var actionFilter = ref.actionFilter; if ( actionFilter === void 0 ) actionFilter = function (action, state) { return true; };
  var actionTransformer = ref.actionTransformer; if ( actionTransformer === void 0 ) actionTransformer = function (act) { return act; };
  var logMutations = ref.logMutations; if ( logMutations === void 0 ) logMutations = true;
  var logActions = ref.logActions; if ( logActions === void 0 ) logActions = true;
  var logger = ref.logger; if ( logger === void 0 ) logger = console;

  return function (store) {
    var prevState = deepCopy(store.state);

    if (typeof logger === 'undefined') {
      return
    }

    if (logMutations) {
      store.subscribe(function (mutation, state) {
        var nextState = deepCopy(state);

        if (filter(mutation, prevState, nextState)) {
          var formattedTime = getFormattedTime();
          var formattedMutation = mutationTransformer(mutation);
          var message = "mutation " + (mutation.type) + formattedTime;

          startMessage(logger, message, collapsed);
          logger.log('%c prev state', 'color: #9E9E9E; font-weight: bold', transformer(prevState));
          logger.log('%c mutation', 'color: #03A9F4; font-weight: bold', formattedMutation);
          logger.log('%c next state', 'color: #4CAF50; font-weight: bold', transformer(nextState));
          endMessage(logger);
        }

        prevState = nextState;
      });
    }

    if (logActions) {
      store.subscribeAction(function (action, state) {
        if (actionFilter(action, state)) {
          var formattedTime = getFormattedTime();
          var formattedAction = actionTransformer(action);
          var message = "action " + (action.type) + formattedTime;

          startMessage(logger, message, collapsed);
          logger.log('%c action', 'color: #03A9F4; font-weight: bold', formattedAction);
          endMessage(logger);
        }
      });
    }
  }
}

function startMessage (logger, message, collapsed) {
  var startMessage = collapsed
    ? logger.groupCollapsed
    : logger.group;

  // render
  try {
    startMessage.call(logger, message);
  } catch (e) {
    logger.log(message);
  }
}

function endMessage (logger) {
  try {
    logger.groupEnd();
  } catch (e) {
    logger.log('—— log end ——');
  }
}

function getFormattedTime () {
  var time = new Date();
  return (" @ " + (pad(time.getHours(), 2)) + ":" + (pad(time.getMinutes(), 2)) + ":" + (pad(time.getSeconds(), 2)) + "." + (pad(time.getMilliseconds(), 3)))
}

function repeat (str, times) {
  return (new Array(times + 1)).join(str)
}

function pad (num, maxLength) {
  return repeat('0', maxLength - num.toString().length) + num
}

var index_cjs = {
  Store: Store,
  install: install,
  version: '3.6.2',
  mapState: mapState,
  mapMutations: mapMutations,
  mapGetters: mapGetters,
  mapActions: mapActions,
  createNamespacedHelpers: createNamespacedHelpers,
  createLogger: createLogger
};

module.exports = index_cjs;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/global.js */ 19)))

/***/ }),
/* 48 */
/*!***************************************************************************************!*\
  !*** /Users/hfp/Documents/HBuilderProjects/cunjin-socket-test/store/modules/login.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 1);\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\nvar _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ 13));\nvar _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ 15));\nvar _EaseIM = __webpack_require__(/*! @/EaseIM */ 16);\nvar _emApis = __webpack_require__(/*! @/EaseIM/emApis */ 29);\nvar _emUserInfos = (0, _emApis.emUserInfos)(),\n  fetchUserInfoWithLoginId = _emUserInfos.fetchUserInfoWithLoginId;\n_emApis.emUserInfos;\nvar loginStore = {\n  state: {\n    loginStatus: false,\n    loginUserBaseInfos: {\n      loginUserId: '',\n      phoneNumber: ''\n    },\n    loginUserProfiles: {}\n  },\n  mutations: {\n    SET_LOGIN_STATUS: function SET_LOGIN_STATUS(state, status) {\n      state.loginStatus = status;\n    },\n    SET_LOGIN_USER_BASE_INFOS: function SET_LOGIN_USER_BASE_INFOS(state, baseInfos) {\n      state.loginUserBaseInfos = Object.assign({}, baseInfos);\n    },\n    SET_LOGIN_USER_PROFILES: function SET_LOGIN_USER_PROFILES(state, profiles) {\n      state.loginUserProfiles = Object.assign({}, profiles);\n    }\n  },\n  actions: {\n    fetchLoginUserProfile: function fetchLoginUserProfile(_ref) {\n      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {\n        var commit, profiles;\n        return _regenerator.default.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                commit = _ref.commit;\n                _context.prev = 1;\n                _context.next = 4;\n                return fetchUserInfoWithLoginId();\n              case 4:\n                profiles = _context.sent;\n                commit('SET_LOGIN_USER_PROFILES', profiles[_EaseIM.EMClient.user]);\n                _context.next = 11;\n                break;\n              case 8:\n                _context.prev = 8;\n                _context.t0 = _context[\"catch\"](1);\n                __f__(\"log\", '>>>>登录用户个人信息获取失败', _context.t0, \" at store/modules/login.js:32\");\n              case 11:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee, null, [[1, 8]]);\n      }))();\n    }\n  },\n  getters: {\n    loginStatus: function loginStatus(state) {\n      return state.loginStatus;\n    }\n  }\n};\nvar _default = loginStore;\nexports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 12)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vc3RvcmUvbW9kdWxlcy9sb2dpbi5qcyJdLCJuYW1lcyI6WyJlbVVzZXJJbmZvcyIsImZldGNoVXNlckluZm9XaXRoTG9naW5JZCIsImxvZ2luU3RvcmUiLCJzdGF0ZSIsImxvZ2luU3RhdHVzIiwibG9naW5Vc2VyQmFzZUluZm9zIiwibG9naW5Vc2VySWQiLCJwaG9uZU51bWJlciIsImxvZ2luVXNlclByb2ZpbGVzIiwibXV0YXRpb25zIiwiU0VUX0xPR0lOX1NUQVRVUyIsInN0YXR1cyIsIlNFVF9MT0dJTl9VU0VSX0JBU0VfSU5GT1MiLCJiYXNlSW5mb3MiLCJPYmplY3QiLCJhc3NpZ24iLCJTRVRfTE9HSU5fVVNFUl9QUk9GSUxFUyIsInByb2ZpbGVzIiwiYWN0aW9ucyIsImZldGNoTG9naW5Vc2VyUHJvZmlsZSIsImNvbW1pdCIsIkVNQ2xpZW50IiwidXNlciIsImdldHRlcnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQSxtQkFBcUMsSUFBQUEsbUJBQVcsR0FBRTtFQUExQ0Msd0JBQXdCLGdCQUF4QkEsd0JBQXdCO0FBRWhDRCxtQkFBVztBQUNYLElBQU1FLFVBQVUsR0FBRztFQUNqQkMsS0FBSyxFQUFFO0lBQ0xDLFdBQVcsRUFBRSxLQUFLO0lBQ2xCQyxrQkFBa0IsRUFBRTtNQUNsQkMsV0FBVyxFQUFFLEVBQUU7TUFDZkMsV0FBVyxFQUFFO0lBQ2YsQ0FBQztJQUNEQyxpQkFBaUIsRUFBRSxDQUFDO0VBQ3RCLENBQUM7RUFDREMsU0FBUyxFQUFFO0lBQ1RDLGdCQUFnQixFQUFFLDBCQUFDUCxLQUFLLEVBQUVRLE1BQU0sRUFBSztNQUNuQ1IsS0FBSyxDQUFDQyxXQUFXLEdBQUdPLE1BQU07SUFDNUIsQ0FBQztJQUNEQyx5QkFBeUIsRUFBRSxtQ0FBQ1QsS0FBSyxFQUFFVSxTQUFTLEVBQUs7TUFDL0NWLEtBQUssQ0FBQ0Usa0JBQWtCLEdBQUdTLE1BQU0sQ0FBQ0MsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFRixTQUFTLENBQUM7SUFDekQsQ0FBQztJQUNERyx1QkFBdUIsRUFBRSxpQ0FBQ2IsS0FBSyxFQUFFYyxRQUFRLEVBQUs7TUFDNUNkLEtBQUssQ0FBQ0ssaUJBQWlCLEdBQUdNLE1BQU0sQ0FBQ0MsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFRSxRQUFRLENBQUM7SUFDdkQ7RUFDRixDQUFDO0VBQ0RDLE9BQU8sRUFBRTtJQUNEQyxxQkFBcUIsdUNBQWE7TUFBQTtRQUFBO1FBQUE7VUFBQTtZQUFBO2NBQUE7Z0JBQVZDLE1BQU0sUUFBTkEsTUFBTTtnQkFBQTtnQkFBQTtnQkFBQSxPQUVUbkIsd0JBQXdCLEVBQUU7Y0FBQTtnQkFBM0NnQixRQUFRO2dCQUNkRyxNQUFNLENBQUMseUJBQXlCLEVBQUVILFFBQVEsQ0FBQ0ksZ0JBQVEsQ0FBQ0MsSUFBSSxDQUFDLENBQUM7Z0JBQUM7Z0JBQUE7Y0FBQTtnQkFBQTtnQkFBQTtnQkFFM0QsYUFBWSxrQkFBa0I7Y0FBUztjQUFBO2dCQUFBO1lBQUE7VUFBQTtRQUFBO01BQUE7SUFFM0M7RUFDRixDQUFDO0VBQ0RDLE9BQU8sRUFBRTtJQUNQbkIsV0FBVyxFQUFFLHFCQUFDRCxLQUFLO01BQUEsT0FBS0EsS0FBSyxDQUFDQyxXQUFXO0lBQUE7RUFDM0M7QUFDRixDQUFDO0FBQUMsZUFDYUYsVUFBVTtBQUFBLDJCIiwiZmlsZSI6IjQ4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRU1DbGllbnQgfSBmcm9tICdAL0Vhc2VJTSc7XG5pbXBvcnQgeyBlbVVzZXJJbmZvcyB9IGZyb20gJ0AvRWFzZUlNL2VtQXBpcyc7XG5jb25zdCB7IGZldGNoVXNlckluZm9XaXRoTG9naW5JZCB9ID0gZW1Vc2VySW5mb3MoKTtcblxuZW1Vc2VySW5mb3M7XG5jb25zdCBsb2dpblN0b3JlID0ge1xuICBzdGF0ZToge1xuICAgIGxvZ2luU3RhdHVzOiBmYWxzZSxcbiAgICBsb2dpblVzZXJCYXNlSW5mb3M6IHtcbiAgICAgIGxvZ2luVXNlcklkOiAnJyxcbiAgICAgIHBob25lTnVtYmVyOiAnJyxcbiAgICB9LFxuICAgIGxvZ2luVXNlclByb2ZpbGVzOiB7fSxcbiAgfSxcbiAgbXV0YXRpb25zOiB7XG4gICAgU0VUX0xPR0lOX1NUQVRVUzogKHN0YXRlLCBzdGF0dXMpID0+IHtcbiAgICAgIHN0YXRlLmxvZ2luU3RhdHVzID0gc3RhdHVzO1xuICAgIH0sXG4gICAgU0VUX0xPR0lOX1VTRVJfQkFTRV9JTkZPUzogKHN0YXRlLCBiYXNlSW5mb3MpID0+IHtcbiAgICAgIHN0YXRlLmxvZ2luVXNlckJhc2VJbmZvcyA9IE9iamVjdC5hc3NpZ24oe30sIGJhc2VJbmZvcyk7XG4gICAgfSxcbiAgICBTRVRfTE9HSU5fVVNFUl9QUk9GSUxFUzogKHN0YXRlLCBwcm9maWxlcykgPT4ge1xuICAgICAgc3RhdGUubG9naW5Vc2VyUHJvZmlsZXMgPSBPYmplY3QuYXNzaWduKHt9LCBwcm9maWxlcyk7XG4gICAgfSxcbiAgfSxcbiAgYWN0aW9uczoge1xuICAgIGFzeW5jIGZldGNoTG9naW5Vc2VyUHJvZmlsZSh7IGNvbW1pdCB9KSB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBwcm9maWxlcyA9IGF3YWl0IGZldGNoVXNlckluZm9XaXRoTG9naW5JZCgpO1xuICAgICAgICBjb21taXQoJ1NFVF9MT0dJTl9VU0VSX1BST0ZJTEVTJywgcHJvZmlsZXNbRU1DbGllbnQudXNlcl0pO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5sb2coJz4+Pj7nmbvlvZXnlKjmiLfkuKrkurrkv6Hmga/ojrflj5blpLHotKUnLCBlcnJvcik7XG4gICAgICB9XG4gICAgfSxcbiAgfSxcbiAgZ2V0dGVyczoge1xuICAgIGxvZ2luU3RhdHVzOiAoc3RhdGUpID0+IHN0YXRlLmxvZ2luU3RhdHVzLFxuICB9LFxufTtcbmV4cG9ydCBkZWZhdWx0IGxvZ2luU3RvcmU7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///48\n");

/***/ }),
/* 49 */
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    if(typeof renderjs.beforeCreate === 'function'){
			renderjs.beforeCreate = [renderjs.beforeCreate]
		}
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 50 */
/*!************************************************************************!*\
  !*** /Users/hfp/Documents/HBuilderProjects/cunjin-socket-test/App.vue ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ 51);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 49);\nvar render, staticRenderFns, recyclableRender, components\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  render,\n  staticRenderFns,\n  false,\n  null,\n  null,\n  null,\n  false,\n  components,\n  renderjs\n)\n\ncomponent.options.__file = \"App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUN1RDtBQUNMOzs7QUFHbEQ7QUFDME07QUFDMU0sZ0JBQWdCLGlOQUFVO0FBQzFCLEVBQUUseUVBQU07QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNlLGdGIiwiZmlsZSI6IjUwLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJBcHAudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///50\n");

/***/ }),
/* 51 */
/*!*************************************************************************************************!*\
  !*** /Users/hfp/Documents/HBuilderProjects/cunjin-socket-test/App.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-1!../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ 52);\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTJyQixDQUFnQix5c0JBQUcsRUFBQyIsImZpbGUiOiI1MS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNy0xIS4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FwcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNy0xIS4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FwcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///51\n");

/***/ }),
/* 52 */
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/hfp/Documents/HBuilderProjects/cunjin-socket-test/App.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\nvar _EaseIM = __webpack_require__(/*! @/EaseIM */ 16);\nvar _emApis = __webpack_require__(/*! @/EaseIM/emApis */ 29);\nvar _emListener = __webpack_require__(/*! @/EaseIM/emListener */ 53);\nvar _constant = __webpack_require__(/*! @/EaseIM/constant */ 40);\nvar _emConnect = (0, _emApis.emConnect)(),\n  closeEaseIM = _emConnect.closeEaseIM,\n  loginWithAccessToken = _emConnect.loginWithAccessToken;\nvar _default = {\n  onLaunch: function onLaunch() {\n    var _this = this;\n    __f__(\"log\", 'App Launch', \" at App.vue:9\");\n    //传给监听callback回调\n    var connectedCallback = function connectedCallback(type) {\n      __f__(\"log\", '>>>>>连接相关回调', type, \" at App.vue:12\");\n      if (type === _constant.CONNECT_CALLBACK_TYPE.CONNECT_CALLBACK) {\n        _this.onConnectedSuccess();\n      }\n      if (type === _constant.CONNECT_CALLBACK_TYPE.DISCONNECT_CALLBACK) {\n        _this.onDisconnect();\n      }\n      if (type === _constant.CONNECT_CALLBACK_TYPE.RECONNECTING_CALLBACK) {\n        _this.onReconnecting();\n      }\n    };\n    /* 链接所需监听回调 */\n    (0, _emListener.emConnectListener)(connectedCallback);\n    /* 全局类型监听集合、消息、联系人、群组等... */\n    (0, _emListener.emMountGlobalListener)();\n  },\n  /* 最终优化点：onShow 全局断开 onHide 本地存储token直接进行IM建联 */\n  //   onShow: function () {\n  //     console.log('App Show');\n  //     const getStorageData = uni.getStorageSync('EM_TOKEN');\n  //     if (getStorageData?.token || getStorageData?.userId) {\n  //       const userId = getStorageData?.userId;\n  //       const token = getStorageData?.token;\n  //       console.log('>>>>>>执行IM 登录', userId, token);\n  //       loginWithAccessToken(userId, token);\n  //     }\n  //   },\n  //   onHide: function () {\n  //     console.log('App Hide');\n  //     /* onHide  主动断开IM连接 */\n  //     closeEaseIM();\n  //   },\n  methods: {\n    onConnectedSuccess: function onConnectedSuccess() {\n      var _ref = this.loginStoreUserBaseInfos || {},\n        loginUserId = _ref.loginUserId;\n      var finalLoginUserId = loginUserId || _EaseIM.EMClient.user;\n      if (!this.loginStoreStatus) {\n        // this.fetchLoginUserNeedData();\n      }\n      this.$store.commit('SET_LOGIN_USER_BASE_INFOS', {\n        loginUserId: finalLoginUserId\n      });\n      this.$store.commit('SET_LOGIN_STATUS', true);\n      uni.showToast({\n        title: '连接成功',\n        icon: 'none',\n        duration: 2000\n      });\n    },\n    onDisconnect: function onDisconnect() {\n      uni.showToast({\n        icon: 'none',\n        title: '断开IM连接'\n      });\n      //断开回调触发后，如果业务登录状态为true则说明异常断开需要重新登录\n      if (!this.loginStatus) {\n        uni.showToast({\n          title: '退出登录',\n          icon: 'none',\n          duration: 2000\n        });\n        closeEaseIM();\n      } else {\n        //执行通过token进行重新登录\n        // actionEMReconnect();\n      }\n    },\n    onReconnecting: function onReconnecting() {\n      uni.showToast({\n        title: '重连中，请勿执行发送消息',\n        icon: 'none'\n      });\n    }\n  }\n};\nexports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 12)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vQXBwLnZ1ZSJdLCJuYW1lcyI6WyJlbUNvbm5lY3QiLCJjbG9zZUVhc2VJTSIsImxvZ2luV2l0aEFjY2Vzc1Rva2VuIiwib25MYXVuY2giLCJjb25uZWN0ZWRDYWxsYmFjayIsInR5cGUiLCJDT05ORUNUX0NBTExCQUNLX1RZUEUiLCJDT05ORUNUX0NBTExCQUNLIiwib25Db25uZWN0ZWRTdWNjZXNzIiwiRElTQ09OTkVDVF9DQUxMQkFDSyIsIm9uRGlzY29ubmVjdCIsIlJFQ09OTkVDVElOR19DQUxMQkFDSyIsIm9uUmVjb25uZWN0aW5nIiwiZW1Db25uZWN0TGlzdGVuZXIiLCJlbU1vdW50R2xvYmFsTGlzdGVuZXIiLCJtZXRob2RzIiwibG9naW5TdG9yZVVzZXJCYXNlSW5mb3MiLCJsb2dpblVzZXJJZCIsImZpbmFsTG9naW5Vc2VySWQiLCJFTUNsaWVudCIsInVzZXIiLCJsb2dpblN0b3JlU3RhdHVzIiwiJHN0b3JlIiwiY29tbWl0IiwidW5pIiwic2hvd1RvYXN0IiwidGl0bGUiLCJpY29uIiwiZHVyYXRpb24iLCJsb2dpblN0YXR1cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBOEMsSUFBQUEsaUJBQVMsR0FBRTtFQUFqREMsV0FBVyxjQUFYQSxXQUFXO0VBQUVDLG9CQUFvQixjQUFwQkEsb0JBQW9CO0FBQWlCLGVBQzNDO0VBQ2JDLFFBQVEsRUFBRSxvQkFBWTtJQUFBO0lBQ3BCLGFBQVksWUFBWTtJQUN4QjtJQUNBLElBQU1DLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBaUIsQ0FBSUMsSUFBSSxFQUFLO01BQ2xDLGFBQVksYUFBYSxFQUFFQSxJQUFJO01BQy9CLElBQUlBLElBQUksS0FBS0MsK0JBQXFCLENBQUNDLGdCQUFnQixFQUFFO1FBQ25ELEtBQUksQ0FBQ0Msa0JBQWtCLEVBQUU7TUFDM0I7TUFDQSxJQUFJSCxJQUFJLEtBQUtDLCtCQUFxQixDQUFDRyxtQkFBbUIsRUFBRTtRQUN0RCxLQUFJLENBQUNDLFlBQVksRUFBRTtNQUNyQjtNQUNBLElBQUlMLElBQUksS0FBS0MsK0JBQXFCLENBQUNLLHFCQUFxQixFQUFFO1FBQ3hELEtBQUksQ0FBQ0MsY0FBYyxFQUFFO01BQ3ZCO0lBQ0YsQ0FBQztJQUNEO0lBQ0EsSUFBQUMsNkJBQWlCLEVBQUNULGlCQUFpQixDQUFDO0lBQ3BDO0lBQ0EsSUFBQVUsaUNBQXFCLEdBQUU7RUFDekIsQ0FBQztFQUNEO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0FDLE9BQU8sRUFBRTtJQUNQUCxrQkFBa0IsZ0NBQUc7TUFDbkIsV0FBd0IsSUFBSSxDQUFDUSx1QkFBdUIsSUFBSSxDQUFDLENBQUM7UUFBbERDLFdBQVcsUUFBWEEsV0FBVztNQUNuQixJQUFNQyxnQkFBZ0IsR0FBR0QsV0FBVyxJQUFJRSxnQkFBUSxDQUFDQyxJQUFJO01BQ3JELElBQUksQ0FBQyxJQUFJLENBQUNDLGdCQUFnQixFQUFFO1FBQzFCO01BQUE7TUFFRixJQUFJLENBQUNDLE1BQU0sQ0FBQ0MsTUFBTSxDQUFDLDJCQUEyQixFQUFFO1FBQzlDTixXQUFXLEVBQUVDO01BQ2YsQ0FBQyxDQUFDO01BQ0YsSUFBSSxDQUFDSSxNQUFNLENBQUNDLE1BQU0sQ0FBQyxrQkFBa0IsRUFBRSxJQUFJLENBQUM7TUFDNUNDLEdBQUcsQ0FBQ0MsU0FBUyxDQUFDO1FBQ1pDLEtBQUssRUFBRSxNQUFNO1FBQ2JDLElBQUksRUFBRSxNQUFNO1FBQ1pDLFFBQVEsRUFBRTtNQUNaLENBQUMsQ0FBQztJQUNKLENBQUM7SUFDRGxCLFlBQVksMEJBQUc7TUFDYmMsR0FBRyxDQUFDQyxTQUFTLENBQUM7UUFDWkUsSUFBSSxFQUFFLE1BQU07UUFDWkQsS0FBSyxFQUFFO01BQ1QsQ0FBQyxDQUFDO01BQ0Y7TUFDQSxJQUFJLENBQUMsSUFBSSxDQUFDRyxXQUFXLEVBQUU7UUFDckJMLEdBQUcsQ0FBQ0MsU0FBUyxDQUFDO1VBQ1pDLEtBQUssRUFBRSxNQUFNO1VBQ2JDLElBQUksRUFBRSxNQUFNO1VBQ1pDLFFBQVEsRUFBRTtRQUNaLENBQUMsQ0FBQztRQUNGM0IsV0FBVyxFQUFFO01BQ2YsQ0FBQyxNQUFNO1FBQ0w7UUFDQTtNQUFBO0lBRUosQ0FBQztJQUNEVyxjQUFjLDRCQUFHO01BQ2ZZLEdBQUcsQ0FBQ0MsU0FBUyxDQUFDO1FBQ1pDLEtBQUssRUFBRSxjQUFjO1FBQ3JCQyxJQUFJLEVBQUU7TUFDUixDQUFDLENBQUM7SUFDSjtFQUNGO0FBQ0YsQ0FBQztBQUFBLDJCIiwiZmlsZSI6IjUyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBFTUNsaWVudCB9IGZyb20gJ0AvRWFzZUlNJztcbmltcG9ydCB7IGVtQ29ubmVjdCB9IGZyb20gJ0AvRWFzZUlNL2VtQXBpcyc7XG5pbXBvcnQgeyBlbUNvbm5lY3RMaXN0ZW5lciwgZW1Nb3VudEdsb2JhbExpc3RlbmVyIH0gZnJvbSAnQC9FYXNlSU0vZW1MaXN0ZW5lcic7XG5pbXBvcnQgeyBDT05ORUNUX0NBTExCQUNLX1RZUEUsIEhBTkRMRVJfRVZFTlRfTkFNRSB9IGZyb20gJ0AvRWFzZUlNL2NvbnN0YW50JztcbmNvbnN0IHsgY2xvc2VFYXNlSU0sIGxvZ2luV2l0aEFjY2Vzc1Rva2VuIH0gPSBlbUNvbm5lY3QoKTtcbmV4cG9ydCBkZWZhdWx0IHtcbiAgb25MYXVuY2g6IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zb2xlLmxvZygnQXBwIExhdW5jaCcpO1xuICAgIC8v5Lyg57uZ55uR5ZCsY2FsbGJhY2vlm57osINcbiAgICBjb25zdCBjb25uZWN0ZWRDYWxsYmFjayA9ICh0eXBlKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygnPj4+Pj7ov57mjqXnm7jlhbPlm57osIMnLCB0eXBlKTtcbiAgICAgIGlmICh0eXBlID09PSBDT05ORUNUX0NBTExCQUNLX1RZUEUuQ09OTkVDVF9DQUxMQkFDSykge1xuICAgICAgICB0aGlzLm9uQ29ubmVjdGVkU3VjY2VzcygpO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGUgPT09IENPTk5FQ1RfQ0FMTEJBQ0tfVFlQRS5ESVNDT05ORUNUX0NBTExCQUNLKSB7XG4gICAgICAgIHRoaXMub25EaXNjb25uZWN0KCk7XG4gICAgICB9XG4gICAgICBpZiAodHlwZSA9PT0gQ09OTkVDVF9DQUxMQkFDS19UWVBFLlJFQ09OTkVDVElOR19DQUxMQkFDSykge1xuICAgICAgICB0aGlzLm9uUmVjb25uZWN0aW5nKCk7XG4gICAgICB9XG4gICAgfTtcbiAgICAvKiDpk77mjqXmiYDpnIDnm5HlkKzlm57osIMgKi9cbiAgICBlbUNvbm5lY3RMaXN0ZW5lcihjb25uZWN0ZWRDYWxsYmFjayk7XG4gICAgLyog5YWo5bGA57G75Z6L55uR5ZCs6ZuG5ZCI44CB5raI5oGv44CB6IGU57O75Lq644CB576k57uE562JLi4uICovXG4gICAgZW1Nb3VudEdsb2JhbExpc3RlbmVyKCk7XG4gIH0sXG4gIC8qIOacgOe7iOS8mOWMlueCue+8mm9uU2hvdyDlhajlsYDmlq3lvIAgb25IaWRlIOacrOWcsOWtmOWCqHRva2Vu55u05o6l6L+b6KGMSU3lu7rogZQgKi9cbiAgLy8gICBvblNob3c6IGZ1bmN0aW9uICgpIHtcbiAgLy8gICAgIGNvbnNvbGUubG9nKCdBcHAgU2hvdycpO1xuICAvLyAgICAgY29uc3QgZ2V0U3RvcmFnZURhdGEgPSB1bmkuZ2V0U3RvcmFnZVN5bmMoJ0VNX1RPS0VOJyk7XG4gIC8vICAgICBpZiAoZ2V0U3RvcmFnZURhdGE/LnRva2VuIHx8IGdldFN0b3JhZ2VEYXRhPy51c2VySWQpIHtcbiAgLy8gICAgICAgY29uc3QgdXNlcklkID0gZ2V0U3RvcmFnZURhdGE/LnVzZXJJZDtcbiAgLy8gICAgICAgY29uc3QgdG9rZW4gPSBnZXRTdG9yYWdlRGF0YT8udG9rZW47XG4gIC8vICAgICAgIGNvbnNvbGUubG9nKCc+Pj4+Pj7miafooYxJTSDnmbvlvZUnLCB1c2VySWQsIHRva2VuKTtcbiAgLy8gICAgICAgbG9naW5XaXRoQWNjZXNzVG9rZW4odXNlcklkLCB0b2tlbik7XG4gIC8vICAgICB9XG4gIC8vICAgfSxcbiAgLy8gICBvbkhpZGU6IGZ1bmN0aW9uICgpIHtcbiAgLy8gICAgIGNvbnNvbGUubG9nKCdBcHAgSGlkZScpO1xuICAvLyAgICAgLyogb25IaWRlICDkuLvliqjmlq3lvIBJTei/nuaOpSAqL1xuICAvLyAgICAgY2xvc2VFYXNlSU0oKTtcbiAgLy8gICB9LFxuICBtZXRob2RzOiB7XG4gICAgb25Db25uZWN0ZWRTdWNjZXNzKCkge1xuICAgICAgY29uc3QgeyBsb2dpblVzZXJJZCB9ID0gdGhpcy5sb2dpblN0b3JlVXNlckJhc2VJbmZvcyB8fCB7fTtcbiAgICAgIGNvbnN0IGZpbmFsTG9naW5Vc2VySWQgPSBsb2dpblVzZXJJZCB8fCBFTUNsaWVudC51c2VyO1xuICAgICAgaWYgKCF0aGlzLmxvZ2luU3RvcmVTdGF0dXMpIHtcbiAgICAgICAgLy8gdGhpcy5mZXRjaExvZ2luVXNlck5lZWREYXRhKCk7XG4gICAgICB9XG4gICAgICB0aGlzLiRzdG9yZS5jb21taXQoJ1NFVF9MT0dJTl9VU0VSX0JBU0VfSU5GT1MnLCB7XG4gICAgICAgIGxvZ2luVXNlcklkOiBmaW5hbExvZ2luVXNlcklkLFxuICAgICAgfSk7XG4gICAgICB0aGlzLiRzdG9yZS5jb21taXQoJ1NFVF9MT0dJTl9TVEFUVVMnLCB0cnVlKTtcbiAgICAgIHVuaS5zaG93VG9hc3Qoe1xuICAgICAgICB0aXRsZTogJ+i/nuaOpeaIkOWKnycsXG4gICAgICAgIGljb246ICdub25lJyxcbiAgICAgICAgZHVyYXRpb246IDIwMDAsXG4gICAgICB9KTtcbiAgICB9LFxuICAgIG9uRGlzY29ubmVjdCgpIHtcbiAgICAgIHVuaS5zaG93VG9hc3Qoe1xuICAgICAgICBpY29uOiAnbm9uZScsXG4gICAgICAgIHRpdGxlOiAn5pat5byASU3ov57mjqUnLFxuICAgICAgfSk7XG4gICAgICAvL+aWreW8gOWbnuiwg+inpuWPkeWQju+8jOWmguaenOS4muWKoeeZu+W9leeKtuaAgeS4unRydWXliJnor7TmmI7lvILluLjmlq3lvIDpnIDopoHph43mlrDnmbvlvZVcbiAgICAgIGlmICghdGhpcy5sb2dpblN0YXR1cykge1xuICAgICAgICB1bmkuc2hvd1RvYXN0KHtcbiAgICAgICAgICB0aXRsZTogJ+mAgOWHuueZu+W9lScsXG4gICAgICAgICAgaWNvbjogJ25vbmUnLFxuICAgICAgICAgIGR1cmF0aW9uOiAyMDAwLFxuICAgICAgICB9KTtcbiAgICAgICAgY2xvc2VFYXNlSU0oKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8v5omn6KGM6YCa6L+HdG9rZW7ov5vooYzph43mlrDnmbvlvZVcbiAgICAgICAgLy8gYWN0aW9uRU1SZWNvbm5lY3QoKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIG9uUmVjb25uZWN0aW5nKCkge1xuICAgICAgdW5pLnNob3dUb2FzdCh7XG4gICAgICAgIHRpdGxlOiAn6YeN6L+e5Lit77yM6K+35Yu/5omn6KGM5Y+R6YCB5raI5oGvJyxcbiAgICAgICAgaWNvbjogJ25vbmUnLFxuICAgICAgfSk7XG4gICAgfSxcbiAgfSxcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///52\n");

/***/ }),
/* 53 */
/*!*******************************************************************************************!*\
  !*** /Users/hfp/Documents/HBuilderProjects/cunjin-socket-test/EaseIM/emListener/index.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nObject.defineProperty(exports, \"emConnectListener\", {\n  enumerable: true,\n  get: function get() {\n    return _emConnectListener.emConnectListener;\n  }\n});\nObject.defineProperty(exports, \"emContactsListener\", {\n  enumerable: true,\n  get: function get() {\n    return _emContactsListener.emContactsListener;\n  }\n});\nObject.defineProperty(exports, \"emMountGlobalListener\", {\n  enumerable: true,\n  get: function get() {\n    return _emMountGlobalListener.emMountGlobalListener;\n  }\n});\nvar _emConnectListener = __webpack_require__(/*! ./emConnectListener */ 54);\nvar _emContactsListener = __webpack_require__(/*! ./emContactsListener */ 55);\nvar _emMountGlobalListener = __webpack_require__(/*! ./emMountGlobalListener */ 56);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vRWFzZUlNL2VtTGlzdGVuZXIvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0EiLCJmaWxlIjoiNTMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBlbUNvbm5lY3RMaXN0ZW5lciB9IGZyb20gJy4vZW1Db25uZWN0TGlzdGVuZXInO1xuaW1wb3J0IHsgZW1Db250YWN0c0xpc3RlbmVyIH0gZnJvbSAnLi9lbUNvbnRhY3RzTGlzdGVuZXInO1xuaW1wb3J0IHsgZW1Nb3VudEdsb2JhbExpc3RlbmVyIH0gZnJvbSAnLi9lbU1vdW50R2xvYmFsTGlzdGVuZXInO1xuZXhwb3J0IHsgZW1Nb3VudEdsb2JhbExpc3RlbmVyLCBlbUNvbm5lY3RMaXN0ZW5lciwgZW1Db250YWN0c0xpc3RlbmVyIH07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///53\n");

/***/ }),
/* 54 */
/*!*******************************************************************************************************!*\
  !*** /Users/hfp/Documents/HBuilderProjects/cunjin-socket-test/EaseIM/emListener/emConnectListener.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.emConnectListener = void 0;\nvar _index = __webpack_require__(/*! ../index */ 16);\nvar _constant = __webpack_require__(/*! ../constant */ 40);\nvar emConnectListener = function emConnectListener(callback, listenerEventName) {\n  __f__(\"log\", '>>>>连接监听已挂载', \" at EaseIM/emListener/emConnectListener.js:4\");\n  var connectListenFunc = {\n    onConnected: function onConnected() {\n      __f__(\"log\", 'connected...', \" at EaseIM/emListener/emConnectListener.js:7\");\n      callback && callback(_constant.CONNECT_CALLBACK_TYPE.CONNECT_CALLBACK);\n    },\n    onDisconnected: function onDisconnected() {\n      callback && callback(_constant.CONNECT_CALLBACK_TYPE.DISCONNECT_CALLBACK);\n      __f__(\"log\", 'disconnected...', \" at EaseIM/emListener/emConnectListener.js:12\");\n    },\n    onReconnecting: function onReconnecting() {\n      callback && callback(_constant.CONNECT_CALLBACK_TYPE.RECONNECTING_CALLBACK);\n    }\n  };\n  _index.EMClient.removeEventHandler(listenerEventName || _constant.HANDLER_EVENT_NAME.CONNECT_EVENT);\n  _index.EMClient.addEventHandler(listenerEventName || _constant.HANDLER_EVENT_NAME.CONNECT_EVENT, connectListenFunc);\n};\nexports.emConnectListener = emConnectListener;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 12)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vRWFzZUlNL2VtTGlzdGVuZXIvZW1Db25uZWN0TGlzdGVuZXIuanMiXSwibmFtZXMiOlsiZW1Db25uZWN0TGlzdGVuZXIiLCJjYWxsYmFjayIsImxpc3RlbmVyRXZlbnROYW1lIiwiY29ubmVjdExpc3RlbkZ1bmMiLCJvbkNvbm5lY3RlZCIsIkNPTk5FQ1RfQ0FMTEJBQ0tfVFlQRSIsIkNPTk5FQ1RfQ0FMTEJBQ0siLCJvbkRpc2Nvbm5lY3RlZCIsIkRJU0NPTk5FQ1RfQ0FMTEJBQ0siLCJvblJlY29ubmVjdGluZyIsIlJFQ09OTkVDVElOR19DQUxMQkFDSyIsIkVNQ2xpZW50IiwicmVtb3ZlRXZlbnRIYW5kbGVyIiwiSEFORExFUl9FVkVOVF9OQU1FIiwiQ09OTkVDVF9FVkVOVCIsImFkZEV2ZW50SGFuZGxlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDQTtBQUNPLElBQU1BLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBaUIsQ0FBSUMsUUFBUSxFQUFFQyxpQkFBaUIsRUFBSztFQUNoRSxhQUFZLGFBQWE7RUFDekIsSUFBTUMsaUJBQWlCLEdBQUc7SUFDeEJDLFdBQVcsRUFBRSx1QkFBTTtNQUNqQixhQUFZLGNBQWM7TUFDMUJILFFBQVEsSUFBSUEsUUFBUSxDQUFDSSwrQkFBcUIsQ0FBQ0MsZ0JBQWdCLENBQUM7SUFDOUQsQ0FBQztJQUNEQyxjQUFjLEVBQUUsMEJBQU07TUFDcEJOLFFBQVEsSUFBSUEsUUFBUSxDQUFDSSwrQkFBcUIsQ0FBQ0csbUJBQW1CLENBQUM7TUFDL0QsYUFBWSxpQkFBaUI7SUFDL0IsQ0FBQztJQUNEQyxjQUFjLEVBQUUsMEJBQU07TUFDcEJSLFFBQVEsSUFBSUEsUUFBUSxDQUFDSSwrQkFBcUIsQ0FBQ0sscUJBQXFCLENBQUM7SUFDbkU7RUFDRixDQUFDO0VBQ0RDLGVBQVEsQ0FBQ0Msa0JBQWtCLENBQ3pCVixpQkFBaUIsSUFBSVcsNEJBQWtCLENBQUNDLGFBQWEsQ0FDdEQ7RUFDREgsZUFBUSxDQUFDSSxlQUFlLENBQ3RCYixpQkFBaUIsSUFBSVcsNEJBQWtCLENBQUNDLGFBQWEsRUFDckRYLGlCQUFpQixDQUNsQjtBQUNILENBQUM7QUFBQyw4QyIsImZpbGUiOiI1NC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVNQ2xpZW50IH0gZnJvbSAnLi4vaW5kZXgnO1xuaW1wb3J0IHsgQ09OTkVDVF9DQUxMQkFDS19UWVBFLCBIQU5ETEVSX0VWRU5UX05BTUUgfSBmcm9tICcuLi9jb25zdGFudCc7XG5leHBvcnQgY29uc3QgZW1Db25uZWN0TGlzdGVuZXIgPSAoY2FsbGJhY2ssIGxpc3RlbmVyRXZlbnROYW1lKSA9PiB7XG4gIGNvbnNvbGUubG9nKCc+Pj4+6L+e5o6l55uR5ZCs5bey5oyC6L29Jyk7XG4gIGNvbnN0IGNvbm5lY3RMaXN0ZW5GdW5jID0ge1xuICAgIG9uQ29ubmVjdGVkOiAoKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygnY29ubmVjdGVkLi4uJyk7XG4gICAgICBjYWxsYmFjayAmJiBjYWxsYmFjayhDT05ORUNUX0NBTExCQUNLX1RZUEUuQ09OTkVDVF9DQUxMQkFDSyk7XG4gICAgfSxcbiAgICBvbkRpc2Nvbm5lY3RlZDogKCkgPT4ge1xuICAgICAgY2FsbGJhY2sgJiYgY2FsbGJhY2soQ09OTkVDVF9DQUxMQkFDS19UWVBFLkRJU0NPTk5FQ1RfQ0FMTEJBQ0spO1xuICAgICAgY29uc29sZS5sb2coJ2Rpc2Nvbm5lY3RlZC4uLicpO1xuICAgIH0sXG4gICAgb25SZWNvbm5lY3Rpbmc6ICgpID0+IHtcbiAgICAgIGNhbGxiYWNrICYmIGNhbGxiYWNrKENPTk5FQ1RfQ0FMTEJBQ0tfVFlQRS5SRUNPTk5FQ1RJTkdfQ0FMTEJBQ0spO1xuICAgIH0sXG4gIH07XG4gIEVNQ2xpZW50LnJlbW92ZUV2ZW50SGFuZGxlcihcbiAgICBsaXN0ZW5lckV2ZW50TmFtZSB8fCBIQU5ETEVSX0VWRU5UX05BTUUuQ09OTkVDVF9FVkVOVFxuICApO1xuICBFTUNsaWVudC5hZGRFdmVudEhhbmRsZXIoXG4gICAgbGlzdGVuZXJFdmVudE5hbWUgfHwgSEFORExFUl9FVkVOVF9OQU1FLkNPTk5FQ1RfRVZFTlQsXG4gICAgY29ubmVjdExpc3RlbkZ1bmNcbiAgKTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///54\n");

/***/ }),
/* 55 */
/*!********************************************************************************************************!*\
  !*** /Users/hfp/Documents/HBuilderProjects/cunjin-socket-test/EaseIM/emListener/emContactsListener.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 1);\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.emContactsListener = void 0;\nvar _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 2));\nvar _index = __webpack_require__(/*! ../index */ 16);\nvar _constant = __webpack_require__(/*! ../constant */ 40);\nvar _store = _interopRequireDefault(__webpack_require__(/*! @/store */ 46));\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n__f__(\"log\", '>>>>>>vuex store', _store.default, \" at EaseIM/emListener/emContactsListener.js:4\");\nvar emContactsListener = function emContactsListener(callback, listenerEventName) {\n  __f__(\"log\", '>>>>>好友关系监听挂载', \" at EaseIM/emListener/emContactsListener.js:6\");\n  var addNewInformFunc = function addNewInformFunc(params) {\n    _store.default.commit('ADD_NEW_INFORM', {\n      informType: _constant.INFORM_TYPE.CONTACTS,\n      inform: params\n    });\n  };\n  //处理新邀请更新至邀请信息缓存store\n  var reveiveFriendInvite = function reveiveFriendInvite(params) {\n    _store.default.commit('ADD_NEW_RECEIVE_INVITE_MSG', params);\n  };\n  var contactsListenFunc = {\n    // 当前用户收到好友请求。用户 B 向用户 A 发送好友请求，用户 A 收到该事件。\n    onContactInvited: function onContactInvited(msg) {\n      var contactsInform = Object.assign({}, msg);\n      callback && callback(contactsInform);\n      addNewInformFunc(_objectSpread({}, msg));\n      reveiveFriendInvite(_objectSpread({\n        chatType: _constant.CHAT_TYPE.SINGLE_CHAT\n      }, msg));\n    },\n    // 当前用户被其他用户从联系人列表上移除。用户 B 将用户 A 从联系人列表上删除，用户 A 收到该事件。\n    onContactDeleted: function onContactDeleted(msg) {\n      callback && callback(msg);\n      addNewInformFunc(msg);\n    },\n    // 当前用户新增了联系人。用户 B 向用户 A 发送好友请求，用户 A 同意该请求，用户 A 收到该事件，而用户 B 收到 `onContactAgreed` 事件。\n    onContactAdded: function onContactAdded(msg) {\n      callback && callback(msg);\n      addNewInformFunc(msg);\n    },\n    // 当前用户发送的好友请求被拒绝。用户 A 向用户 B 发送好友请求，用户 B 收到好友请求后，拒绝加好友，则用户 A 收到该事件。\n    onContactRefuse: function onContactRefuse(msg) {\n      callback && callback(msg);\n      addNewInformFunc(msg);\n    },\n    // 当前用户发送的好友请求经过了对方同意。用户 A 向用户 B 发送好友请求，用户 B 收到好友请求后，同意加好友，则用户 A 收到该事件。\n    onContactAgreed: function onContactAgreed(msg) {\n      callback && callback(msg);\n      addNewInformFunc(msg);\n    }\n  };\n  _index.EMClient.removeEventHandler(listenerEventName || _constant.HANDLER_EVENT_NAME.CONTACTS_EVENT);\n  _index.EMClient.addEventHandler(listenerEventName || _constant.HANDLER_EVENT_NAME.CONTACTS_EVENT, contactsListenFunc);\n};\nexports.emContactsListener = emContactsListener;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 12)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vRWFzZUlNL2VtTGlzdGVuZXIvZW1Db250YWN0c0xpc3RlbmVyLmpzIl0sIm5hbWVzIjpbInN0b3JlIiwiZW1Db250YWN0c0xpc3RlbmVyIiwiY2FsbGJhY2siLCJsaXN0ZW5lckV2ZW50TmFtZSIsImFkZE5ld0luZm9ybUZ1bmMiLCJwYXJhbXMiLCJjb21taXQiLCJpbmZvcm1UeXBlIiwiSU5GT1JNX1RZUEUiLCJDT05UQUNUUyIsImluZm9ybSIsInJldmVpdmVGcmllbmRJbnZpdGUiLCJjb250YWN0c0xpc3RlbkZ1bmMiLCJvbkNvbnRhY3RJbnZpdGVkIiwibXNnIiwiY29udGFjdHNJbmZvcm0iLCJPYmplY3QiLCJhc3NpZ24iLCJjaGF0VHlwZSIsIkNIQVRfVFlQRSIsIlNJTkdMRV9DSEFUIiwib25Db250YWN0RGVsZXRlZCIsIm9uQ29udGFjdEFkZGVkIiwib25Db250YWN0UmVmdXNlIiwib25Db250YWN0QWdyZWVkIiwiRU1DbGllbnQiLCJyZW1vdmVFdmVudEhhbmRsZXIiLCJIQU5ETEVSX0VWRU5UX05BTUUiLCJDT05UQUNUU19FVkVOVCIsImFkZEV2ZW50SGFuZGxlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFBNEI7QUFBQTtBQUM1QixhQUFZLGtCQUFrQixFQUFFQSxjQUFLO0FBQzlCLElBQU1DLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBa0IsQ0FBSUMsUUFBUSxFQUFFQyxpQkFBaUIsRUFBSztFQUNqRSxhQUFZLGVBQWU7RUFDM0IsSUFBTUMsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFnQixDQUFJQyxNQUFNLEVBQUs7SUFDbkNMLGNBQUssQ0FBQ00sTUFBTSxDQUFDLGdCQUFnQixFQUFFO01BQzdCQyxVQUFVLEVBQUVDLHFCQUFXLENBQUNDLFFBQVE7TUFDaENDLE1BQU0sRUFBRUw7SUFDVixDQUFDLENBQUM7RUFDSixDQUFDO0VBQ0Q7RUFDQSxJQUFNTSxtQkFBbUIsR0FBRyxTQUF0QkEsbUJBQW1CLENBQUlOLE1BQU0sRUFBSztJQUN0Q0wsY0FBSyxDQUFDTSxNQUFNLENBQUMsNEJBQTRCLEVBQUVELE1BQU0sQ0FBQztFQUNwRCxDQUFDO0VBQ0QsSUFBTU8sa0JBQWtCLEdBQUc7SUFDekI7SUFDQUMsZ0JBQWdCLEVBQUUsMEJBQVVDLEdBQUcsRUFBRTtNQUMvQixJQUFNQyxjQUFjLEdBQUdDLE1BQU0sQ0FBQ0MsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFSCxHQUFHLENBQUM7TUFDN0NaLFFBQVEsSUFBSUEsUUFBUSxDQUFDYSxjQUFjLENBQUM7TUFDcENYLGdCQUFnQixtQkFBTVUsR0FBRyxFQUFHO01BQzVCSCxtQkFBbUI7UUFBR08sUUFBUSxFQUFFQyxtQkFBUyxDQUFDQztNQUFXLEdBQUtOLEdBQUcsRUFBRztJQUNsRSxDQUFDO0lBQ0Q7SUFDQU8sZ0JBQWdCLEVBQUUsMEJBQVVQLEdBQUcsRUFBRTtNQUMvQlosUUFBUSxJQUFJQSxRQUFRLENBQUNZLEdBQUcsQ0FBQztNQUN6QlYsZ0JBQWdCLENBQUNVLEdBQUcsQ0FBQztJQUN2QixDQUFDO0lBQ0Q7SUFDQVEsY0FBYyxFQUFFLHdCQUFVUixHQUFHLEVBQUU7TUFDN0JaLFFBQVEsSUFBSUEsUUFBUSxDQUFDWSxHQUFHLENBQUM7TUFDekJWLGdCQUFnQixDQUFDVSxHQUFHLENBQUM7SUFDdkIsQ0FBQztJQUNEO0lBQ0FTLGVBQWUsRUFBRSx5QkFBVVQsR0FBRyxFQUFFO01BQzlCWixRQUFRLElBQUlBLFFBQVEsQ0FBQ1ksR0FBRyxDQUFDO01BQ3pCVixnQkFBZ0IsQ0FBQ1UsR0FBRyxDQUFDO0lBQ3ZCLENBQUM7SUFDRDtJQUNBVSxlQUFlLEVBQUUseUJBQVVWLEdBQUcsRUFBRTtNQUM5QlosUUFBUSxJQUFJQSxRQUFRLENBQUNZLEdBQUcsQ0FBQztNQUN6QlYsZ0JBQWdCLENBQUNVLEdBQUcsQ0FBQztJQUN2QjtFQUNGLENBQUM7RUFDRFcsZUFBUSxDQUFDQyxrQkFBa0IsQ0FDekJ2QixpQkFBaUIsSUFBSXdCLDRCQUFrQixDQUFDQyxjQUFjLENBQ3ZEO0VBQ0RILGVBQVEsQ0FBQ0ksZUFBZSxDQUN0QjFCLGlCQUFpQixJQUFJd0IsNEJBQWtCLENBQUNDLGNBQWMsRUFDdERoQixrQkFBa0IsQ0FDbkI7QUFDSCxDQUFDO0FBQUMsZ0QiLCJmaWxlIjoiNTUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFTUNsaWVudCB9IGZyb20gJy4uL2luZGV4JztcbmltcG9ydCB7IEhBTkRMRVJfRVZFTlRfTkFNRSwgSU5GT1JNX1RZUEUsIENIQVRfVFlQRSB9IGZyb20gJy4uL2NvbnN0YW50JztcbmltcG9ydCBzdG9yZSBmcm9tICdAL3N0b3JlJztcbmNvbnNvbGUubG9nKCc+Pj4+Pj52dWV4IHN0b3JlJywgc3RvcmUpO1xuZXhwb3J0IGNvbnN0IGVtQ29udGFjdHNMaXN0ZW5lciA9IChjYWxsYmFjaywgbGlzdGVuZXJFdmVudE5hbWUpID0+IHtcbiAgY29uc29sZS5sb2coJz4+Pj4+5aW95Y+L5YWz57O755uR5ZCs5oyC6L29Jyk7XG4gIGNvbnN0IGFkZE5ld0luZm9ybUZ1bmMgPSAocGFyYW1zKSA9PiB7XG4gICAgc3RvcmUuY29tbWl0KCdBRERfTkVXX0lORk9STScsIHtcbiAgICAgIGluZm9ybVR5cGU6IElORk9STV9UWVBFLkNPTlRBQ1RTLFxuICAgICAgaW5mb3JtOiBwYXJhbXMsXG4gICAgfSk7XG4gIH07XG4gIC8v5aSE55CG5paw6YKA6K+35pu05paw6Iez6YKA6K+35L+h5oGv57yT5a2Yc3RvcmVcbiAgY29uc3QgcmV2ZWl2ZUZyaWVuZEludml0ZSA9IChwYXJhbXMpID0+IHtcbiAgICBzdG9yZS5jb21taXQoJ0FERF9ORVdfUkVDRUlWRV9JTlZJVEVfTVNHJywgcGFyYW1zKTtcbiAgfTtcbiAgY29uc3QgY29udGFjdHNMaXN0ZW5GdW5jID0ge1xuICAgIC8vIOW9k+WJjeeUqOaIt+aUtuWIsOWlveWPi+ivt+axguOAgueUqOaItyBCIOWQkeeUqOaItyBBIOWPkemAgeWlveWPi+ivt+axgu+8jOeUqOaItyBBIOaUtuWIsOivpeS6i+S7tuOAglxuICAgIG9uQ29udGFjdEludml0ZWQ6IGZ1bmN0aW9uIChtc2cpIHtcbiAgICAgIGNvbnN0IGNvbnRhY3RzSW5mb3JtID0gT2JqZWN0LmFzc2lnbih7fSwgbXNnKTtcbiAgICAgIGNhbGxiYWNrICYmIGNhbGxiYWNrKGNvbnRhY3RzSW5mb3JtKTtcbiAgICAgIGFkZE5ld0luZm9ybUZ1bmMoeyAuLi5tc2cgfSk7XG4gICAgICByZXZlaXZlRnJpZW5kSW52aXRlKHsgY2hhdFR5cGU6IENIQVRfVFlQRS5TSU5HTEVfQ0hBVCwgLi4ubXNnIH0pO1xuICAgIH0sXG4gICAgLy8g5b2T5YmN55So5oi36KKr5YW25LuW55So5oi35LuO6IGU57O75Lq65YiX6KGo5LiK56e76Zmk44CC55So5oi3IEIg5bCG55So5oi3IEEg5LuO6IGU57O75Lq65YiX6KGo5LiK5Yig6Zmk77yM55So5oi3IEEg5pS25Yiw6K+l5LqL5Lu244CCXG4gICAgb25Db250YWN0RGVsZXRlZDogZnVuY3Rpb24gKG1zZykge1xuICAgICAgY2FsbGJhY2sgJiYgY2FsbGJhY2sobXNnKTtcbiAgICAgIGFkZE5ld0luZm9ybUZ1bmMobXNnKTtcbiAgICB9LFxuICAgIC8vIOW9k+WJjeeUqOaIt+aWsOWinuS6huiBlOezu+S6uuOAgueUqOaItyBCIOWQkeeUqOaItyBBIOWPkemAgeWlveWPi+ivt+axgu+8jOeUqOaItyBBIOWQjOaEj+ivpeivt+axgu+8jOeUqOaItyBBIOaUtuWIsOivpeS6i+S7tu+8jOiAjOeUqOaItyBCIOaUtuWIsCBgb25Db250YWN0QWdyZWVkYCDkuovku7bjgIJcbiAgICBvbkNvbnRhY3RBZGRlZDogZnVuY3Rpb24gKG1zZykge1xuICAgICAgY2FsbGJhY2sgJiYgY2FsbGJhY2sobXNnKTtcbiAgICAgIGFkZE5ld0luZm9ybUZ1bmMobXNnKTtcbiAgICB9LFxuICAgIC8vIOW9k+WJjeeUqOaIt+WPkemAgeeahOWlveWPi+ivt+axguiiq+aLkue7neOAgueUqOaItyBBIOWQkeeUqOaItyBCIOWPkemAgeWlveWPi+ivt+axgu+8jOeUqOaItyBCIOaUtuWIsOWlveWPi+ivt+axguWQju+8jOaLkue7neWKoOWlveWPi++8jOWImeeUqOaItyBBIOaUtuWIsOivpeS6i+S7tuOAglxuICAgIG9uQ29udGFjdFJlZnVzZTogZnVuY3Rpb24gKG1zZykge1xuICAgICAgY2FsbGJhY2sgJiYgY2FsbGJhY2sobXNnKTtcbiAgICAgIGFkZE5ld0luZm9ybUZ1bmMobXNnKTtcbiAgICB9LFxuICAgIC8vIOW9k+WJjeeUqOaIt+WPkemAgeeahOWlveWPi+ivt+axgue7j+i/h+S6huWvueaWueWQjOaEj+OAgueUqOaItyBBIOWQkeeUqOaItyBCIOWPkemAgeWlveWPi+ivt+axgu+8jOeUqOaItyBCIOaUtuWIsOWlveWPi+ivt+axguWQju+8jOWQjOaEj+WKoOWlveWPi++8jOWImeeUqOaItyBBIOaUtuWIsOivpeS6i+S7tuOAglxuICAgIG9uQ29udGFjdEFncmVlZDogZnVuY3Rpb24gKG1zZykge1xuICAgICAgY2FsbGJhY2sgJiYgY2FsbGJhY2sobXNnKTtcbiAgICAgIGFkZE5ld0luZm9ybUZ1bmMobXNnKTtcbiAgICB9LFxuICB9O1xuICBFTUNsaWVudC5yZW1vdmVFdmVudEhhbmRsZXIoXG4gICAgbGlzdGVuZXJFdmVudE5hbWUgfHwgSEFORExFUl9FVkVOVF9OQU1FLkNPTlRBQ1RTX0VWRU5UXG4gICk7XG4gIEVNQ2xpZW50LmFkZEV2ZW50SGFuZGxlcihcbiAgICBsaXN0ZW5lckV2ZW50TmFtZSB8fCBIQU5ETEVSX0VWRU5UX05BTUUuQ09OVEFDVFNfRVZFTlQsXG4gICAgY29udGFjdHNMaXN0ZW5GdW5jXG4gICk7XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///55\n");

/***/ }),
/* 56 */
/*!***********************************************************************************************************!*\
  !*** /Users/hfp/Documents/HBuilderProjects/cunjin-socket-test/EaseIM/emListener/emMountGlobalListener.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.emMountGlobalListener = void 0;\nvar _emContactsListener = __webpack_require__(/*! ./emContactsListener */ 55);\nvar _emGroupListener = __webpack_require__(/*! ./emGroupListener */ 57);\nvar _emMessagesListener = __webpack_require__(/*! ./emMessagesListener */ 58);\nvar _emErrorListener = __webpack_require__(/*! ./emErrorListener */ 59);\nvar emMountGlobalListener = function emMountGlobalListener() {\n  var cb = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {};\n  if (typeof cb === 'function') {\n    // 参数是一个函数\n    (0, _emMessagesListener.emMessagesListener)(cb);\n    (0, _emContactsListener.emContactsListener)(cb);\n    (0, _emGroupListener.emGroupListener)(cb);\n    (0, _emErrorListener.emErrorListener)(cb);\n  } else {\n    // 参数不是一个函数\n    __f__(\"error\", '传入的参数不是一个函数', \" at EaseIM/emListener/emMountGlobalListener.js:14\");\n  }\n  __f__(\"log\", '>>>>全局监听', \" at EaseIM/emListener/emMountGlobalListener.js:16\");\n};\nexports.emMountGlobalListener = emMountGlobalListener;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 12)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vRWFzZUlNL2VtTGlzdGVuZXIvZW1Nb3VudEdsb2JhbExpc3RlbmVyLmpzIl0sIm5hbWVzIjpbImVtTW91bnRHbG9iYWxMaXN0ZW5lciIsImNiIiwiZW1NZXNzYWdlc0xpc3RlbmVyIiwiZW1Db250YWN0c0xpc3RlbmVyIiwiZW1Hcm91cExpc3RlbmVyIiwiZW1FcnJvckxpc3RlbmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNPLElBQU1BLHFCQUFxQixHQUFHLFNBQXhCQSxxQkFBcUIsR0FBc0I7RUFBQSxJQUFsQkMsRUFBRSx1RUFBRyxZQUFNLENBQUMsQ0FBQztFQUNqRCxJQUFJLE9BQU9BLEVBQUUsS0FBSyxVQUFVLEVBQUU7SUFDNUI7SUFDQSxJQUFBQyxzQ0FBa0IsRUFBQ0QsRUFBRSxDQUFDO0lBQ3RCLElBQUFFLHNDQUFrQixFQUFDRixFQUFFLENBQUM7SUFDdEIsSUFBQUcsZ0NBQWUsRUFBQ0gsRUFBRSxDQUFDO0lBQ25CLElBQUFJLGdDQUFlLEVBQUNKLEVBQUUsQ0FBQztFQUNyQixDQUFDLE1BQU07SUFDTDtJQUNBLGVBQWMsYUFBYTtFQUM3QjtFQUNBLGFBQVksVUFBVTtBQUN4QixDQUFDO0FBQUMsc0QiLCJmaWxlIjoiNTYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBlbUNvbnRhY3RzTGlzdGVuZXIgfSBmcm9tICcuL2VtQ29udGFjdHNMaXN0ZW5lcic7XG5pbXBvcnQgeyBlbUdyb3VwTGlzdGVuZXIgfSBmcm9tICcuL2VtR3JvdXBMaXN0ZW5lcic7XG5pbXBvcnQgeyBlbU1lc3NhZ2VzTGlzdGVuZXIgfSBmcm9tICcuL2VtTWVzc2FnZXNMaXN0ZW5lcic7XG5pbXBvcnQgeyBlbUVycm9yTGlzdGVuZXIgfSBmcm9tICcuL2VtRXJyb3JMaXN0ZW5lcic7XG5leHBvcnQgY29uc3QgZW1Nb3VudEdsb2JhbExpc3RlbmVyID0gKGNiID0gKCkgPT4ge30pID0+IHtcbiAgaWYgKHR5cGVvZiBjYiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIC8vIOWPguaVsOaYr+S4gOS4quWHveaVsFxuICAgIGVtTWVzc2FnZXNMaXN0ZW5lcihjYik7XG4gICAgZW1Db250YWN0c0xpc3RlbmVyKGNiKTtcbiAgICBlbUdyb3VwTGlzdGVuZXIoY2IpO1xuICAgIGVtRXJyb3JMaXN0ZW5lcihjYik7XG4gIH0gZWxzZSB7XG4gICAgLy8g5Y+C5pWw5LiN5piv5LiA5Liq5Ye95pWwXG4gICAgY29uc29sZS5lcnJvcign5Lyg5YWl55qE5Y+C5pWw5LiN5piv5LiA5Liq5Ye95pWwJyk7XG4gIH1cbiAgY29uc29sZS5sb2coJz4+Pj7lhajlsYDnm5HlkKwnKTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///56\n");

/***/ }),
/* 57 */
/*!*****************************************************************************************************!*\
  !*** /Users/hfp/Documents/HBuilderProjects/cunjin-socket-test/EaseIM/emListener/emGroupListener.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 1);\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.emGroupListener = void 0;\nvar _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 2));\nvar _index = __webpack_require__(/*! ../index */ 16);\nvar _constant = __webpack_require__(/*! ../constant */ 40);\nvar _store = _interopRequireDefault(__webpack_require__(/*! @/store */ 46));\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\nvar emGroupListener = function emGroupListener(callback, listenerEventName) {\n  __f__(\"log\", '>>>>群组事件监听挂载', \" at EaseIM/emListener/emGroupListener.js:5\");\n  //处理新邀请更新至邀请信息缓存store\n  var reveiveFriendInvite = function reveiveFriendInvite(params) {\n    _store.default.commit('ADD_NEW_RECEIVE_INVITE_MSG', params);\n  };\n  var groupListenFunc = {\n    onGroupEvent: function onGroupEvent(event) {\n      __f__(\"log\", '>>>>群组事件监听触发', event, \" at EaseIM/emListener/emGroupListener.js:12\");\n      var operation = event.operation;\n      callback(_constant.HANDLER_EVENT_NAME.GROUP_EVENT, event);\n      switch (operation) {\n        // 有新群组创建。群主的其他设备会收到该回调。\n        case 'create':\n          break;\n        // 关闭群组一键禁言。群组所有成员（除操作者外）会收到该回调。\n        case 'unmuteAllMembers':\n          break;\n        // 开启群组一键禁言。群组所有成员（除操作者外）会收到该回调。\n        case 'muteAllMembers':\n          break;\n        // 有成员从群白名单中移出。被移出的成员及群主和群管理员（除操作者外）会收到该回调。\n        case 'removeAllowlistMember':\n          break;\n        // 有成员添加至群白名单。被添加的成员及群主和群管理员（除操作者外）会收到该回调。\n        case 'addUserToAllowlist':\n          break;\n        // 删除群共享文件。群组所有成员会收到该回调。\n        case 'deleteFile':\n          break;\n        // 上传群共享文件。群组所有成员会收到该回调。\n        case 'uploadFile':\n          break;\n        // 删除群公告。群组所有成员会收到该回调。\n        case 'deleteAnnouncement':\n          break;\n        // 更新群公告。群组所有成员会收到该回调。\n        case 'updateAnnouncement':\n          break;\n        // 更新群组信息，如群组名称和群组描述。群组所有成员会收到该回调。\n        case 'updateInfo':\n          break;\n        // 有成员被移出禁言列表。被解除禁言的成员及群主和群管理员（除操作者外）会收到该回调。\n        case 'unmuteMember':\n          break;\n        // 有群组成员被加入禁言列表。被禁言的成员及群主和群管理员（除操作者外）会收到该回调。\n        case 'muteMember':\n          break;\n        // 有管理员被移出管理员列表。群主、被移除的管理员和其他管理员会收到该回调。\n        case 'removeAdmin':\n          break;\n        // 设置管理员。群主、新管理员和其他管理员会收到该回调。\n        case 'setAdmin':\n          break;\n        // 转让群组。原群主和新群主会收到该回调。\n        case 'changeOwner':\n          break;\n        // 群组所有者和管理员拉用户进群时，无需用户确认时会触发该回调。被拉进群的用户会收到该回调。\n        case 'directJoined':\n          break;\n        // 群成员主动退出群组。除了退群的成员，其他群成员会收到该回调。\n        case 'memberAbsence':\n          break;\n        // 有用户加入群组。除了新成员，其他群成员会收到该回调。\n        case 'memberPresence':\n          break;\n        // 用户被移出群组。被踢出群组的成员会收到该回调。\n        case 'removeMember':\n          break;\n        // 当前用户的入群邀请被拒绝。邀请人会收到该回调。例如，用户 B 拒绝了用户 A 的入群邀请，用户 A 会收到该回调。\n        case 'rejectInvite':\n          break;\n        // 当前用户的入群邀请被接受。邀请人会收到该回调。例如，用户 B 接受了用户 A 的入群邀请，则用户 A 会收到该回调。\n        case 'acceptInvite':\n          break;\n        // 当前用户收到了入群邀请。受邀用户会收到该回调。例如，用户 B 邀请用户 A 入群，则用户 A 会收到该回调。\n        case 'inviteToJoin':\n          {\n            reveiveFriendInvite(_objectSpread({\n              chatType: _constant.CHAT_TYPE.GROUP_CHAT\n            }, event));\n          }\n          break;\n        // 当前用户的入群申请被拒绝。申请人会收到该回调。例如，用户 B 拒绝用户 A 的入群申请后，用户 A 会收到该回调。\n        case 'joinPublicGroupDeclined':\n          break;\n        // 当前用户的入群申请被接受。申请人会收到该回调。例如，用户 B 接受用户 A 的入群申请后，用户 A 会收到该回调。\n        case 'acceptRequest':\n          break;\n        // 当前用户发送入群申请。群主和群管理员会收到该回调。\n        case 'requestToJoin':\n          break;\n        // 群组被解散。群主解散群组时，所有群成员均会收到该回调。\n        case 'destroy':\n          break;\n        // 设置群成员的自定义属性。群组内其他成员均会收到该回调。\n        case 'memberAttributesUpdate':\n          break;\n        default:\n          break;\n      }\n    }\n  };\n  _index.EMClient.removeEventHandler(listenerEventName || _constant.HANDLER_EVENT_NAME.GROUP_EVENT);\n  _index.EMClient.addEventHandler(listenerEventName || _constant.HANDLER_EVENT_NAME.GROUP_EVENT, groupListenFunc);\n};\nexports.emGroupListener = emGroupListener;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 12)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vRWFzZUlNL2VtTGlzdGVuZXIvZW1Hcm91cExpc3RlbmVyLmpzIl0sIm5hbWVzIjpbImVtR3JvdXBMaXN0ZW5lciIsImNhbGxiYWNrIiwibGlzdGVuZXJFdmVudE5hbWUiLCJyZXZlaXZlRnJpZW5kSW52aXRlIiwicGFyYW1zIiwic3RvcmUiLCJjb21taXQiLCJncm91cExpc3RlbkZ1bmMiLCJvbkdyb3VwRXZlbnQiLCJldmVudCIsIm9wZXJhdGlvbiIsIkhBTkRMRVJfRVZFTlRfTkFNRSIsIkdST1VQX0VWRU5UIiwiY2hhdFR5cGUiLCJDSEFUX1RZUEUiLCJHUk9VUF9DSEFUIiwiRU1DbGllbnQiLCJyZW1vdmVFdmVudEhhbmRsZXIiLCJhZGRFdmVudEhhbmRsZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQTRCO0FBQUE7QUFDckIsSUFBTUEsZUFBZSxHQUFHLFNBQWxCQSxlQUFlLENBQUlDLFFBQVEsRUFBRUMsaUJBQWlCLEVBQUs7RUFDOUQsYUFBWSxjQUFjO0VBQzFCO0VBQ0EsSUFBTUMsbUJBQW1CLEdBQUcsU0FBdEJBLG1CQUFtQixDQUFJQyxNQUFNLEVBQUs7SUFDdENDLGNBQUssQ0FBQ0MsTUFBTSxDQUFDLDRCQUE0QixFQUFFRixNQUFNLENBQUM7RUFDcEQsQ0FBQztFQUNELElBQU1HLGVBQWUsR0FBRztJQUN0QkMsWUFBWSxFQUFFLHNCQUFDQyxLQUFLLEVBQUs7TUFDdkIsYUFBWSxjQUFjLEVBQUVBLEtBQUs7TUFDakMsSUFBUUMsU0FBUyxHQUFLRCxLQUFLLENBQW5CQyxTQUFTO01BQ2pCVCxRQUFRLENBQUNVLDRCQUFrQixDQUFDQyxXQUFXLEVBQUVILEtBQUssQ0FBQztNQUMvQyxRQUFRQyxTQUFTO1FBQ2Y7UUFDQSxLQUFLLFFBQVE7VUFDWDtRQUNGO1FBQ0EsS0FBSyxrQkFBa0I7VUFDckI7UUFDRjtRQUNBLEtBQUssZ0JBQWdCO1VBQ25CO1FBQ0Y7UUFDQSxLQUFLLHVCQUF1QjtVQUMxQjtRQUNGO1FBQ0EsS0FBSyxvQkFBb0I7VUFDdkI7UUFDRjtRQUNBLEtBQUssWUFBWTtVQUNmO1FBQ0Y7UUFDQSxLQUFLLFlBQVk7VUFDZjtRQUNGO1FBQ0EsS0FBSyxvQkFBb0I7VUFDdkI7UUFDRjtRQUNBLEtBQUssb0JBQW9CO1VBQ3ZCO1FBQ0Y7UUFDQSxLQUFLLFlBQVk7VUFDZjtRQUNGO1FBQ0EsS0FBSyxjQUFjO1VBQ2pCO1FBQ0Y7UUFDQSxLQUFLLFlBQVk7VUFDZjtRQUNGO1FBQ0EsS0FBSyxhQUFhO1VBQ2hCO1FBQ0Y7UUFDQSxLQUFLLFVBQVU7VUFDYjtRQUNGO1FBQ0EsS0FBSyxhQUFhO1VBQ2hCO1FBQ0Y7UUFDQSxLQUFLLGNBQWM7VUFDakI7UUFDRjtRQUNBLEtBQUssZUFBZTtVQUNsQjtRQUNGO1FBQ0EsS0FBSyxnQkFBZ0I7VUFDbkI7UUFDRjtRQUNBLEtBQUssY0FBYztVQUNqQjtRQUNGO1FBQ0EsS0FBSyxjQUFjO1VBQ2pCO1FBQ0Y7UUFDQSxLQUFLLGNBQWM7VUFDakI7UUFDRjtRQUNBLEtBQUssY0FBYztVQUNqQjtZQUNFUCxtQkFBbUI7Y0FBR1UsUUFBUSxFQUFFQyxtQkFBUyxDQUFDQztZQUFVLEdBQUtOLEtBQUssRUFBRztVQUNuRTtVQUVBO1FBQ0Y7UUFDQSxLQUFLLHlCQUF5QjtVQUM1QjtRQUNGO1FBQ0EsS0FBSyxlQUFlO1VBQ2xCO1FBQ0Y7UUFDQSxLQUFLLGVBQWU7VUFDbEI7UUFDRjtRQUNBLEtBQUssU0FBUztVQUNaO1FBQ0Y7UUFDQSxLQUFLLHdCQUF3QjtVQUMzQjtRQUNGO1VBQ0U7TUFBTTtJQUVaO0VBQ0YsQ0FBQztFQUNETyxlQUFRLENBQUNDLGtCQUFrQixDQUN6QmYsaUJBQWlCLElBQUlTLDRCQUFrQixDQUFDQyxXQUFXLENBQ3BEO0VBQ0RJLGVBQVEsQ0FBQ0UsZUFBZSxDQUN0QmhCLGlCQUFpQixJQUFJUyw0QkFBa0IsQ0FBQ0MsV0FBVyxFQUNuREwsZUFBZSxDQUNoQjtBQUNILENBQUM7QUFBQywwQyIsImZpbGUiOiI1Ny5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVNQ2xpZW50IH0gZnJvbSAnLi4vaW5kZXgnO1xuaW1wb3J0IHsgSEFORExFUl9FVkVOVF9OQU1FLCBDSEFUX1RZUEUgfSBmcm9tICcuLi9jb25zdGFudCc7XG5pbXBvcnQgc3RvcmUgZnJvbSAnQC9zdG9yZSc7XG5leHBvcnQgY29uc3QgZW1Hcm91cExpc3RlbmVyID0gKGNhbGxiYWNrLCBsaXN0ZW5lckV2ZW50TmFtZSkgPT4ge1xuICBjb25zb2xlLmxvZygnPj4+Pue+pOe7hOS6i+S7tuebkeWQrOaMgui9vScpO1xuICAvL+WkhOeQhuaWsOmCgOivt+abtOaWsOiHs+mCgOivt+S/oeaBr+e8k+WtmHN0b3JlXG4gIGNvbnN0IHJldmVpdmVGcmllbmRJbnZpdGUgPSAocGFyYW1zKSA9PiB7XG4gICAgc3RvcmUuY29tbWl0KCdBRERfTkVXX1JFQ0VJVkVfSU5WSVRFX01TRycsIHBhcmFtcyk7XG4gIH07XG4gIGNvbnN0IGdyb3VwTGlzdGVuRnVuYyA9IHtcbiAgICBvbkdyb3VwRXZlbnQ6IChldmVudCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coJz4+Pj7nvqTnu4Tkuovku7bnm5HlkKzop6blj5EnLCBldmVudCk7XG4gICAgICBjb25zdCB7IG9wZXJhdGlvbiB9ID0gZXZlbnQ7XG4gICAgICBjYWxsYmFjayhIQU5ETEVSX0VWRU5UX05BTUUuR1JPVVBfRVZFTlQsIGV2ZW50KTtcbiAgICAgIHN3aXRjaCAob3BlcmF0aW9uKSB7XG4gICAgICAgIC8vIOacieaWsOe+pOe7hOWIm+W7uuOAgue+pOS4u+eahOWFtuS7luiuvuWkh+S8muaUtuWIsOivpeWbnuiwg+OAglxuICAgICAgICBjYXNlICdjcmVhdGUnOlxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICAvLyDlhbPpl63nvqTnu4TkuIDplK7npoHoqIDjgILnvqTnu4TmiYDmnInmiJDlkZjvvIjpmaTmk43kvZzogIXlpJbvvInkvJrmlLbliLDor6Xlm57osIPjgIJcbiAgICAgICAgY2FzZSAndW5tdXRlQWxsTWVtYmVycyc6XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIC8vIOW8gOWQr+e+pOe7hOS4gOmUruemgeiogOOAgue+pOe7hOaJgOacieaIkOWRmO+8iOmZpOaTjeS9nOiAheWklu+8ieS8muaUtuWIsOivpeWbnuiwg+OAglxuICAgICAgICBjYXNlICdtdXRlQWxsTWVtYmVycyc6XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIC8vIOacieaIkOWRmOS7jue+pOeZveWQjeWNleS4reenu+WHuuOAguiiq+enu+WHuueahOaIkOWRmOWPiue+pOS4u+WSjOe+pOeuoeeQhuWRmO+8iOmZpOaTjeS9nOiAheWklu+8ieS8muaUtuWIsOivpeWbnuiwg+OAglxuICAgICAgICBjYXNlICdyZW1vdmVBbGxvd2xpc3RNZW1iZXInOlxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICAvLyDmnInmiJDlkZjmt7vliqDoh7PnvqTnmb3lkI3ljZXjgILooqvmt7vliqDnmoTmiJDlkZjlj4rnvqTkuLvlkoznvqTnrqHnkIblkZjvvIjpmaTmk43kvZzogIXlpJbvvInkvJrmlLbliLDor6Xlm57osIPjgIJcbiAgICAgICAgY2FzZSAnYWRkVXNlclRvQWxsb3dsaXN0JzpcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgLy8g5Yig6Zmk576k5YWx5Lqr5paH5Lu244CC576k57uE5omA5pyJ5oiQ5ZGY5Lya5pS25Yiw6K+l5Zue6LCD44CCXG4gICAgICAgIGNhc2UgJ2RlbGV0ZUZpbGUnOlxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICAvLyDkuIrkvKDnvqTlhbHkuqvmlofku7bjgILnvqTnu4TmiYDmnInmiJDlkZjkvJrmlLbliLDor6Xlm57osIPjgIJcbiAgICAgICAgY2FzZSAndXBsb2FkRmlsZSc6XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIC8vIOWIoOmZpOe+pOWFrOWRiuOAgue+pOe7hOaJgOacieaIkOWRmOS8muaUtuWIsOivpeWbnuiwg+OAglxuICAgICAgICBjYXNlICdkZWxldGVBbm5vdW5jZW1lbnQnOlxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICAvLyDmm7TmlrDnvqTlhazlkYrjgILnvqTnu4TmiYDmnInmiJDlkZjkvJrmlLbliLDor6Xlm57osIPjgIJcbiAgICAgICAgY2FzZSAndXBkYXRlQW5ub3VuY2VtZW50JzpcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgLy8g5pu05paw576k57uE5L+h5oGv77yM5aaC576k57uE5ZCN56ew5ZKM576k57uE5o+P6L+w44CC576k57uE5omA5pyJ5oiQ5ZGY5Lya5pS25Yiw6K+l5Zue6LCD44CCXG4gICAgICAgIGNhc2UgJ3VwZGF0ZUluZm8nOlxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICAvLyDmnInmiJDlkZjooqvnp7vlh7rnpoHoqIDliJfooajjgILooqvop6PpmaTnpoHoqIDnmoTmiJDlkZjlj4rnvqTkuLvlkoznvqTnrqHnkIblkZjvvIjpmaTmk43kvZzogIXlpJbvvInkvJrmlLbliLDor6Xlm57osIPjgIJcbiAgICAgICAgY2FzZSAndW5tdXRlTWVtYmVyJzpcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgLy8g5pyJ576k57uE5oiQ5ZGY6KKr5Yqg5YWl56aB6KiA5YiX6KGo44CC6KKr56aB6KiA55qE5oiQ5ZGY5Y+K576k5Li75ZKM576k566h55CG5ZGY77yI6Zmk5pON5L2c6ICF5aSW77yJ5Lya5pS25Yiw6K+l5Zue6LCD44CCXG4gICAgICAgIGNhc2UgJ211dGVNZW1iZXInOlxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICAvLyDmnInnrqHnkIblkZjooqvnp7vlh7rnrqHnkIblkZjliJfooajjgILnvqTkuLvjgIHooqvnp7vpmaTnmoTnrqHnkIblkZjlkozlhbbku5bnrqHnkIblkZjkvJrmlLbliLDor6Xlm57osIPjgIJcbiAgICAgICAgY2FzZSAncmVtb3ZlQWRtaW4nOlxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICAvLyDorr7nva7nrqHnkIblkZjjgILnvqTkuLvjgIHmlrDnrqHnkIblkZjlkozlhbbku5bnrqHnkIblkZjkvJrmlLbliLDor6Xlm57osIPjgIJcbiAgICAgICAgY2FzZSAnc2V0QWRtaW4nOlxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICAvLyDovazorqnnvqTnu4TjgILljp/nvqTkuLvlkozmlrDnvqTkuLvkvJrmlLbliLDor6Xlm57osIPjgIJcbiAgICAgICAgY2FzZSAnY2hhbmdlT3duZXInOlxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICAvLyDnvqTnu4TmiYDmnInogIXlkoznrqHnkIblkZjmi4nnlKjmiLfov5vnvqTml7bvvIzml6DpnIDnlKjmiLfnoa7orqTml7bkvJrop6blj5Hor6Xlm57osIPjgILooqvmi4nov5vnvqTnmoTnlKjmiLfkvJrmlLbliLDor6Xlm57osIPjgIJcbiAgICAgICAgY2FzZSAnZGlyZWN0Sm9pbmVkJzpcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgLy8g576k5oiQ5ZGY5Li75Yqo6YCA5Ye6576k57uE44CC6Zmk5LqG6YCA576k55qE5oiQ5ZGY77yM5YW25LuW576k5oiQ5ZGY5Lya5pS25Yiw6K+l5Zue6LCD44CCXG4gICAgICAgIGNhc2UgJ21lbWJlckFic2VuY2UnOlxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICAvLyDmnInnlKjmiLfliqDlhaXnvqTnu4TjgILpmaTkuobmlrDmiJDlkZjvvIzlhbbku5bnvqTmiJDlkZjkvJrmlLbliLDor6Xlm57osIPjgIJcbiAgICAgICAgY2FzZSAnbWVtYmVyUHJlc2VuY2UnOlxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICAvLyDnlKjmiLfooqvnp7vlh7rnvqTnu4TjgILooqvouKLlh7rnvqTnu4TnmoTmiJDlkZjkvJrmlLbliLDor6Xlm57osIPjgIJcbiAgICAgICAgY2FzZSAncmVtb3ZlTWVtYmVyJzpcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgLy8g5b2T5YmN55So5oi355qE5YWl576k6YKA6K+36KKr5ouS57ud44CC6YKA6K+35Lq65Lya5pS25Yiw6K+l5Zue6LCD44CC5L6L5aaC77yM55So5oi3IEIg5ouS57ud5LqG55So5oi3IEEg55qE5YWl576k6YKA6K+377yM55So5oi3IEEg5Lya5pS25Yiw6K+l5Zue6LCD44CCXG4gICAgICAgIGNhc2UgJ3JlamVjdEludml0ZSc6XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIC8vIOW9k+WJjeeUqOaIt+eahOWFpee+pOmCgOivt+iiq+aOpeWPl+OAgumCgOivt+S6uuS8muaUtuWIsOivpeWbnuiwg+OAguS+i+Wmgu+8jOeUqOaItyBCIOaOpeWPl+S6hueUqOaItyBBIOeahOWFpee+pOmCgOivt++8jOWImeeUqOaItyBBIOS8muaUtuWIsOivpeWbnuiwg+OAglxuICAgICAgICBjYXNlICdhY2NlcHRJbnZpdGUnOlxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICAvLyDlvZPliY3nlKjmiLfmlLbliLDkuoblhaXnvqTpgoDor7fjgILlj5fpgoDnlKjmiLfkvJrmlLbliLDor6Xlm57osIPjgILkvovlpoLvvIznlKjmiLcgQiDpgoDor7fnlKjmiLcgQSDlhaXnvqTvvIzliJnnlKjmiLcgQSDkvJrmlLbliLDor6Xlm57osIPjgIJcbiAgICAgICAgY2FzZSAnaW52aXRlVG9Kb2luJzpcbiAgICAgICAgICB7XG4gICAgICAgICAgICByZXZlaXZlRnJpZW5kSW52aXRlKHsgY2hhdFR5cGU6IENIQVRfVFlQRS5HUk9VUF9DSEFULCAuLi5ldmVudCB9KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgLy8g5b2T5YmN55So5oi355qE5YWl576k55Sz6K+36KKr5ouS57ud44CC55Sz6K+35Lq65Lya5pS25Yiw6K+l5Zue6LCD44CC5L6L5aaC77yM55So5oi3IEIg5ouS57ud55So5oi3IEEg55qE5YWl576k55Sz6K+35ZCO77yM55So5oi3IEEg5Lya5pS25Yiw6K+l5Zue6LCD44CCXG4gICAgICAgIGNhc2UgJ2pvaW5QdWJsaWNHcm91cERlY2xpbmVkJzpcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgLy8g5b2T5YmN55So5oi355qE5YWl576k55Sz6K+36KKr5o6l5Y+X44CC55Sz6K+35Lq65Lya5pS25Yiw6K+l5Zue6LCD44CC5L6L5aaC77yM55So5oi3IEIg5o6l5Y+X55So5oi3IEEg55qE5YWl576k55Sz6K+35ZCO77yM55So5oi3IEEg5Lya5pS25Yiw6K+l5Zue6LCD44CCXG4gICAgICAgIGNhc2UgJ2FjY2VwdFJlcXVlc3QnOlxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICAvLyDlvZPliY3nlKjmiLflj5HpgIHlhaXnvqTnlLPor7fjgILnvqTkuLvlkoznvqTnrqHnkIblkZjkvJrmlLbliLDor6Xlm57osIPjgIJcbiAgICAgICAgY2FzZSAncmVxdWVzdFRvSm9pbic6XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIC8vIOe+pOe7hOiiq+ino+aVo+OAgue+pOS4u+ino+aVo+e+pOe7hOaXtu+8jOaJgOaciee+pOaIkOWRmOWdh+S8muaUtuWIsOivpeWbnuiwg+OAglxuICAgICAgICBjYXNlICdkZXN0cm95JzpcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgLy8g6K6+572u576k5oiQ5ZGY55qE6Ieq5a6a5LmJ5bGe5oCn44CC576k57uE5YaF5YW25LuW5oiQ5ZGY5Z2H5Lya5pS25Yiw6K+l5Zue6LCD44CCXG4gICAgICAgIGNhc2UgJ21lbWJlckF0dHJpYnV0ZXNVcGRhdGUnOlxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0sXG4gIH07XG4gIEVNQ2xpZW50LnJlbW92ZUV2ZW50SGFuZGxlcihcbiAgICBsaXN0ZW5lckV2ZW50TmFtZSB8fCBIQU5ETEVSX0VWRU5UX05BTUUuR1JPVVBfRVZFTlRcbiAgKTtcbiAgRU1DbGllbnQuYWRkRXZlbnRIYW5kbGVyKFxuICAgIGxpc3RlbmVyRXZlbnROYW1lIHx8IEhBTkRMRVJfRVZFTlRfTkFNRS5HUk9VUF9FVkVOVCxcbiAgICBncm91cExpc3RlbkZ1bmNcbiAgKTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///57\n");

/***/ }),
/* 58 */
/*!********************************************************************************************************!*\
  !*** /Users/hfp/Documents/HBuilderProjects/cunjin-socket-test/EaseIM/emListener/emMessagesListener.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 1);\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.emMessagesListener = void 0;\nvar _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 2));\nvar _index = __webpack_require__(/*! ../index */ 16);\nvar _store = _interopRequireDefault(__webpack_require__(/*! @/store */ 46));\nvar _constant = __webpack_require__(/*! ../constant */ 40);\nvar _utils = __webpack_require__(/*! @/EaseIM/utils */ 42);\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\nvar emMessagesListener = function emMessagesListener(callback, listenerEventName) {\n  __f__(\"log\", '消息监听已挂载', \" at EaseIM/emListener/emMessagesListener.js:6\");\n  //处理展示类型消息（txt、image、file...）\n  var handleReciveDisPlayMessages = function handleReciveDisPlayMessages(message) {\n    __f__(\"log\", '>>>>开始处理收到的消息', message, \" at EaseIM/emListener/emMessagesListener.js:9\");\n    var key = (0, _utils.getEMKey)(_index.EMClient.user, message.from, message.to, message.chatType);\n    //向消息集合中添加新消息\n    _store.default.commit('UPDATE_MESSAGE_COLLECTION', {\n      key: key,\n      message: message\n    });\n    _store.default.commit('UPDATE_CONVERSATION_ITEM', {\n      conversationId: key,\n      lastMessage: message\n    });\n    // messageStore.updateMessageCollection(key, message);\n    // conversationStore.updateConversationLastMessage(key, message);\n    // }\n  };\n  //处理回执类型消息\n  var handleReciveAckMessages = function handleReciveAckMessages(message) {\n    __f__(\"log\", '>>>>开始处理回执类型消息', message, \" at EaseIM/emListener/emMessagesListener.js:31\");\n  };\n  //处理撤回类型消息\n  var handleReciveRecallMessage = function handleReciveRecallMessage(message) {\n    __f__(\"log\", '>>>>开始处理撤回类型消息', \" at EaseIM/emListener/emMessagesListener.js:35\");\n  };\n  var messagesListenFunc = {\n    // 当前用户收到文本消息。\n    onTextMessage: function onTextMessage(message) {\n      handleReciveDisPlayMessages(_objectSpread({}, message));\n    },\n    // 当前用户收到图片消息。\n    onImageMessage: function onImageMessage(message) {\n      handleReciveDisPlayMessages(_objectSpread({}, message));\n    },\n    // 当前用户收到透传消息。\n    onCmdMessage: function onCmdMessage(message) {\n      handleReciveDisPlayMessages(_objectSpread({}, message));\n    },\n    // 当前用户收到语音消息。\n    onAudioMessage: function onAudioMessage(message) {\n      handleReciveDisPlayMessages(_objectSpread({}, message));\n    },\n    // 当前用户收到位置消息。\n    onLocationMessage: function onLocationMessage(message) {\n      handleReciveDisPlayMessages(_objectSpread({}, message));\n    },\n    // 当前用户收到文件消息。\n    onFileMessage: function onFileMessage(message) {\n      handleReciveDisPlayMessages(_objectSpread({}, message));\n    },\n    // 当前用户收到自定义消息。\n    onCustomMessage: function onCustomMessage(message) {\n      handleReciveDisPlayMessages(_objectSpread({}, message));\n    },\n    // 当前用户收到视频消息。\n    onVideoMessage: function onVideoMessage(message) {\n      handleReciveDisPlayMessages(_objectSpread({}, message));\n    },\n    // 当前用户收到的消息被消息发送方撤回。\n    onRecallMessage: function onRecallMessage(message) {\n      handleReciveRecallMessage(_objectSpread({}, message));\n    },\n    // 当前用户发送的消息被接收方收到。\n    onReceivedMessage: function onReceivedMessage(message) {\n      handleReciveAckMessages(_objectSpread({}, message));\n    },\n    // 当前用户收到消息送达回执。\n    onDeliveredMessage: function onDeliveredMessage(message) {\n      handleReciveAckMessages(_objectSpread({}, message));\n    },\n    // 当前用户收到消息已读回执。\n    onReadMessage: function onReadMessage(message) {\n      handleReciveAckMessages(_objectSpread({}, message));\n    },\n    // 当前用户收到会话已读回执。\n    onChannelMessage: function onChannelMessage(message) {\n      handleReciveAckMessages(_objectSpread({}, message));\n    }\n  };\n  _index.EMClient.removeEventHandler(listenerEventName || _constant.HANDLER_EVENT_NAME.MESSAGES_EVENT);\n  _index.EMClient.addEventHandler(listenerEventName || _constant.HANDLER_EVENT_NAME.MESSAGES_EVENT, messagesListenFunc);\n};\nexports.emMessagesListener = emMessagesListener;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 12)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vRWFzZUlNL2VtTGlzdGVuZXIvZW1NZXNzYWdlc0xpc3RlbmVyLmpzIl0sIm5hbWVzIjpbImVtTWVzc2FnZXNMaXN0ZW5lciIsImNhbGxiYWNrIiwibGlzdGVuZXJFdmVudE5hbWUiLCJoYW5kbGVSZWNpdmVEaXNQbGF5TWVzc2FnZXMiLCJtZXNzYWdlIiwia2V5IiwiZ2V0RU1LZXkiLCJFTUNsaWVudCIsInVzZXIiLCJmcm9tIiwidG8iLCJjaGF0VHlwZSIsInN0b3JlIiwiY29tbWl0IiwiY29udmVyc2F0aW9uSWQiLCJsYXN0TWVzc2FnZSIsImhhbmRsZVJlY2l2ZUFja01lc3NhZ2VzIiwiaGFuZGxlUmVjaXZlUmVjYWxsTWVzc2FnZSIsIm1lc3NhZ2VzTGlzdGVuRnVuYyIsIm9uVGV4dE1lc3NhZ2UiLCJvbkltYWdlTWVzc2FnZSIsIm9uQ21kTWVzc2FnZSIsIm9uQXVkaW9NZXNzYWdlIiwib25Mb2NhdGlvbk1lc3NhZ2UiLCJvbkZpbGVNZXNzYWdlIiwib25DdXN0b21NZXNzYWdlIiwib25WaWRlb01lc3NhZ2UiLCJvblJlY2FsbE1lc3NhZ2UiLCJvblJlY2VpdmVkTWVzc2FnZSIsIm9uRGVsaXZlcmVkTWVzc2FnZSIsIm9uUmVhZE1lc3NhZ2UiLCJvbkNoYW5uZWxNZXNzYWdlIiwicmVtb3ZlRXZlbnRIYW5kbGVyIiwiSEFORExFUl9FVkVOVF9OQU1FIiwiTUVTU0FHRVNfRVZFTlQiLCJhZGRFdmVudEhhbmRsZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBMEM7QUFBQTtBQUNuQyxJQUFNQSxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQWtCLENBQUlDLFFBQVEsRUFBRUMsaUJBQWlCLEVBQUs7RUFDakUsYUFBWSxTQUFTO0VBQ3JCO0VBQ0EsSUFBTUMsMkJBQTJCLEdBQUcsU0FBOUJBLDJCQUEyQixDQUFJQyxPQUFPLEVBQUs7SUFDL0MsYUFBWSxlQUFlLEVBQUVBLE9BQU87SUFDcEMsSUFBSUMs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ZSI6IjU4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRU1DbGllbnQgfSBmcm9tICcuLi9pbmRleCc7XG5pbXBvcnQgc3RvcmUgZnJvbSAnQC9zdG9yZSc7XG5pbXBvcnQgeyBDSEFUX1RZUEUsIEhBTkRMRVJfRVZFTlRfTkFNRSB9IGZyb20gJy4uL2NvbnN0YW50JztcbmltcG9ydCB7IGdldEVNS2V5IH0gZnJvbSAnQC9FYXNlSU0vdXRpbHMnO1xuZXhwb3J0IGNvbnN0IGVtTWVzc2FnZXNMaXN0ZW5lciA9IChjYWxsYmFjaywgbGlzdGVuZXJFdmVudE5hbWUpID0+IHtcbiAgY29uc29sZS5sb2coJ+a2iOaBr+ebkeWQrOW3suaMgui9vScpO1xuICAvL+WkhOeQhuWxleekuuexu+Wei+a2iOaBr++8iHR4dOOAgWltYWdl44CBZmlsZS4uLu+8iVxuICBjb25zdCBoYW5kbGVSZWNpdmVEaXNQbGF5TWVzc2FnZXMgPSAobWVzc2FnZSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCc+Pj4+5byA5aeL5aSE55CG5pS25Yiw55qE5raI5oGvJywgbWVzc2FnZSk7XG4gICAgbGV0IGtleSA9IGdldEVNS2V5KFxuICAgICAgRU1DbGllbnQudXNlcixcbiAgICAgIG1lc3NhZ2UuZnJvbSxcbiAgICAgIG1lc3NhZ2UudG8sXG4gICAgICBtZXNzYWdlLmNoYXRUeXBlXG4gICAgKTtcbiAgICAvL+WQkea2iOaBr+mbhuWQiOS4rea3u+WKoOaWsOa2iOaBr1xuICAgIHN0b3JlLmNvbW1pdCgnVVBEQVRFX01FU1NBR0VfQ09MTEVDVElPTicsIHtcbiAgICAgIGtleSxcbiAgICAgIG1lc3NhZ2UsXG4gICAgfSk7XG4gICAgc3RvcmUuY29tbWl0KCdVUERBVEVfQ09OVkVSU0FUSU9OX0lURU0nLCB7XG4gICAgICBjb252ZXJzYXRpb25JZDoga2V5LFxuICAgICAgbGFzdE1lc3NhZ2U6IG1lc3NhZ2UsXG4gICAgfSk7XG4gICAgLy8gbWVzc2FnZVN0b3JlLnVwZGF0ZU1lc3NhZ2VDb2xsZWN0aW9uKGtleSwgbWVzc2FnZSk7XG4gICAgLy8gY29udmVyc2F0aW9uU3RvcmUudXBkYXRlQ29udmVyc2F0aW9uTGFzdE1lc3NhZ2Uoa2V5LCBtZXNzYWdlKTtcbiAgICAvLyB9XG4gIH07XG4gIC8v5aSE55CG5Zue5omn57G75Z6L5raI5oGvXG4gIGNvbnN0IGhhbmRsZVJlY2l2ZUFja01lc3NhZ2VzID0gKG1lc3NhZ2UpID0+IHtcbiAgICBjb25zb2xlLmxvZygnPj4+PuW8gOWni+WkhOeQhuWbnuaJp+exu+Wei+a2iOaBrycsIG1lc3NhZ2UpO1xuICB9O1xuICAvL+WkhOeQhuaSpOWbnuexu+Wei+a2iOaBr1xuICBjb25zdCBoYW5kbGVSZWNpdmVSZWNhbGxNZXNzYWdlID0gKG1lc3NhZ2UpID0+IHtcbiAgICBjb25zb2xlLmxvZygnPj4+PuW8gOWni+WkhOeQhuaSpOWbnuexu+Wei+a2iOaBrycpO1xuICB9O1xuICBjb25zdCBtZXNzYWdlc0xpc3RlbkZ1bmMgPSB7XG4gICAgLy8g5b2T5YmN55So5oi35pS25Yiw5paH5pys5raI5oGv44CCXG4gICAgb25UZXh0TWVzc2FnZTogZnVuY3Rpb24gKG1lc3NhZ2UpIHtcbiAgICAgIGhhbmRsZVJlY2l2ZURpc1BsYXlNZXNzYWdlcyh7IC4uLm1lc3NhZ2UgfSk7XG4gICAgfSxcbiAgICAvLyDlvZPliY3nlKjmiLfmlLbliLDlm77niYfmtojmga/jgIJcbiAgICBvbkltYWdlTWVzc2FnZTogZnVuY3Rpb24gKG1lc3NhZ2UpIHtcbiAgICAgIGhhbmRsZVJlY2l2ZURpc1BsYXlNZXNzYWdlcyh7IC4uLm1lc3NhZ2UgfSk7XG4gICAgfSxcbiAgICAvLyDlvZPliY3nlKjmiLfmlLbliLDpgI/kvKDmtojmga/jgIJcbiAgICBvbkNtZE1lc3NhZ2U6IGZ1bmN0aW9uIChtZXNzYWdlKSB7XG4gICAgICBoYW5kbGVSZWNpdmVEaXNQbGF5TWVzc2FnZXMoeyAuLi5tZXNzYWdlIH0pO1xuICAgIH0sXG4gICAgLy8g5b2T5YmN55So5oi35pS25Yiw6K+t6Z+z5raI5oGv44CCXG4gICAgb25BdWRpb01lc3NhZ2U6IGZ1bmN0aW9uIChtZXNzYWdlKSB7XG4gICAgICBoYW5kbGVSZWNpdmVEaXNQbGF5TWVzc2FnZXMoeyAuLi5tZXNzYWdlIH0pO1xuICAgIH0sXG4gICAgLy8g5b2T5YmN55So5oi35pS25Yiw5L2N572u5raI5oGv44CCXG4gICAgb25Mb2NhdGlvbk1lc3NhZ2U6IGZ1bmN0aW9uIChtZXNzYWdlKSB7XG4gICAgICBoYW5kbGVSZWNpdmVEaXNQbGF5TWVzc2FnZXMoeyAuLi5tZXNzYWdlIH0pO1xuICAgIH0sXG4gICAgLy8g5b2T5YmN55So5oi35pS25Yiw5paH5Lu25raI5oGv44CCXG4gICAgb25GaWxlTWVzc2FnZTogZnVuY3Rpb24gKG1lc3NhZ2UpIHtcbiAgICAgIGhhbmRsZVJlY2l2ZURpc1BsYXlNZXNzYWdlcyh7IC4uLm1lc3NhZ2UgfSk7XG4gICAgfSxcbiAgICAvLyDlvZPliY3nlKjmiLfmlLbliLDoh6rlrprkuYnmtojmga/jgIJcbiAgICBvbkN1c3RvbU1lc3NhZ2U6IGZ1bmN0aW9uIChtZXNzYWdlKSB7XG4gICAgICBoYW5kbGVSZWNpdmVEaXNQbGF5TWVzc2FnZXMoeyAuLi5tZXNzYWdlIH0pO1xuICAgIH0sXG4gICAgLy8g5b2T5YmN55So5oi35pS25Yiw6KeG6aKR5raI5oGv44CCXG4gICAgb25WaWRlb01lc3NhZ2U6IGZ1bmN0aW9uIChtZXNzYWdlKSB7XG4gICAgICBoYW5kbGVSZWNpdmVEaXNQbGF5TWVzc2FnZXMoeyAuLi5tZXNzYWdlIH0pO1xuICAgIH0sXG4gICAgLy8g5b2T5YmN55So5oi35pS25Yiw55qE5raI5oGv6KKr5raI5oGv5Y+R6YCB5pa55pKk5Zue44CCXG4gICAgb25SZWNhbGxNZXNzYWdlOiBmdW5jdGlvbiAobWVzc2FnZSkge1xuICAgICAgaGFuZGxlUmVjaXZlUmVjYWxsTWVzc2FnZSh7IC4uLm1lc3NhZ2UgfSk7XG4gICAgfSxcbiAgICAvLyDlvZPliY3nlKjmiLflj5HpgIHnmoTmtojmga/ooqvmjqXmlLbmlrnmlLbliLDjgIJcbiAgICBvblJlY2VpdmVkTWVzc2FnZTogZnVuY3Rpb24gKG1lc3NhZ2UpIHtcbiAgICAgIGhhbmRsZVJlY2l2ZUFja01lc3NhZ2VzKHsgLi4ubWVzc2FnZSB9KTtcbiAgICB9LFxuICAgIC8vIOW9k+WJjeeUqOaIt+aUtuWIsOa2iOaBr+mAgei+vuWbnuaJp+OAglxuICAgIG9uRGVsaXZlcmVkTWVzc2FnZTogZnVuY3Rpb24gKG1lc3NhZ2UpIHtcbiAgICAgIGhhbmRsZVJlY2l2ZUFja01lc3NhZ2VzKHsgLi4ubWVzc2FnZSB9KTtcbiAgICB9LFxuICAgIC8vIOW9k+WJjeeUqOaIt+aUtuWIsOa2iOaBr+W3suivu+WbnuaJp+OAglxuICAgIG9uUmVhZE1lc3NhZ2U6IGZ1bmN0aW9uIChtZXNzYWdlKSB7XG4gICAgICBoYW5kbGVSZWNpdmVBY2tNZXNzYWdlcyh7IC4uLm1lc3NhZ2UgfSk7XG4gICAgfSxcbiAgICAvLyDlvZPliY3nlKjmiLfmlLbliLDkvJror53lt7Lor7vlm57miafjgIJcbiAgICBvbkNoYW5uZWxNZXNzYWdlOiBmdW5jdGlvbiAobWVzc2FnZSkge1xuICAgICAgaGFuZGxlUmVjaXZlQWNrTWVzc2FnZXMoeyAuLi5tZXNzYWdlIH0pO1xuICAgIH0sXG4gIH07XG4gIEVNQ2xpZW50LnJlbW92ZUV2ZW50SGFuZGxlcihcbiAgICBsaXN0ZW5lckV2ZW50TmFtZSB8fCBIQU5ETEVSX0VWRU5UX05BTUUuTUVTU0FHRVNfRVZFTlRcbiAgKTtcbiAgRU1DbGllbnQuYWRkRXZlbnRIYW5kbGVyKFxuICAgIGxpc3RlbmVyRXZlbnROYW1lIHx8IEhBTkRMRVJfRVZFTlRfTkFNRS5NRVNTQUdFU19FVkVOVCxcbiAgICBtZXNzYWdlc0xpc3RlbkZ1bmNcbiAgKTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///58\n");

/***/ }),
/* 59 */
/*!*****************************************************************************************************!*\
  !*** /Users/hfp/Documents/HBuilderProjects/cunjin-socket-test/EaseIM/emListener/emErrorListener.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.emErrorListener = void 0;\nvar _index = __webpack_require__(/*! ../index */ 16);\nvar _constant = __webpack_require__(/*! ../constant */ 40);\nvar emErrorListener = function emErrorListener(callback, listenerEventName) {\n  __f__(\"log\", '>>>>error监听已挂载', \" at EaseIM/emListener/emErrorListener.js:4\");\n  var errorListenFunc = {\n    onError: function onError(e) {\n      __f__(\"log\", '>>>>>onError', e, \" at EaseIM/emListener/emErrorListener.js:7\");\n      callback && callback(_constant.HANDLER_EVENT_NAME.ERROR_EVENT, e);\n    }\n  };\n  _index.EMClient.removeEventHandler(listenerEventName || _constant.HANDLER_EVENT_NAME.ERROR_EVENT);\n  _index.EMClient.addEventHandler(listenerEventName || _constant.HANDLER_EVENT_NAME.ERROR_EVENT, errorListenFunc);\n};\nexports.emErrorListener = emErrorListener;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 12)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vRWFzZUlNL2VtTGlzdGVuZXIvZW1FcnJvckxpc3RlbmVyLmpzIl0sIm5hbWVzIjpbImVtRXJyb3JMaXN0ZW5lciIsImNhbGxiYWNrIiwibGlzdGVuZXJFdmVudE5hbWUiLCJlcnJvckxpc3RlbkZ1bmMiLCJvbkVycm9yIiwiZSIsIkhBTkRMRVJfRVZFTlRfTkFNRSIsIkVSUk9SX0VWRU5UIiwiRU1DbGllbnQiLCJyZW1vdmVFdmVudEhhbmRsZXIiLCJhZGRFdmVudEhhbmRsZXIiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0E7QUFDTyxJQUFNQSxlQUFlLEdBQUcsU0FBbEJBLGVBQWUsQ0FBSUMsUUFBUSxFQUFFQyxpQkFBaUIsRUFBSztFQUM5RCxhQUFZLGdCQUFnQjtFQUM1QixJQUFNQyxlQUFlLEdBQUc7SUFDdEJDLE9BQU8sRUFBRSxpQkFBQ0MsQ0FBQyxFQUFLO01BQ2QsYUFBWSxjQUFjLEVBQUVBLENBQUM7TUFDN0JKLFFBQVEsSUFBSUEsUUFBUSxDQUFDSyw0QkFBa0IsQ0FBQ0MsV0FBVyxFQUFFRixDQUFDLENBQUM7SUFDekQ7RUFDRixDQUFDO0VBQ0RHLGVBQVEsQ0FBQ0Msa0JBQWtCLENBQ3pCUCxpQkFBaUIsSUFBSUksNEJBQWtCLENBQUNDLFdBQVcsQ0FDcEQ7RUFDREMsZUFBUSxDQUFDRSxlQUFlLENBQ3RCUixpQkFBaUIsSUFBSUksNEJBQWtCLENBQUNDLFdBQVcsRUFDbkRKLGVBQWUsQ0FDaEI7QUFDSCxDQUFDO0FBQUMsMEMiLCJmaWxlIjoiNTkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFTUNsaWVudCB9IGZyb20gJy4uL2luZGV4JztcbmltcG9ydCB7IEhBTkRMRVJfRVZFTlRfTkFNRSB9IGZyb20gJy4uL2NvbnN0YW50JztcbmV4cG9ydCBjb25zdCBlbUVycm9yTGlzdGVuZXIgPSAoY2FsbGJhY2ssIGxpc3RlbmVyRXZlbnROYW1lKSA9PiB7XG4gIGNvbnNvbGUubG9nKCc+Pj4+ZXJyb3Lnm5HlkKzlt7LmjILovb0nKTtcbiAgY29uc3QgZXJyb3JMaXN0ZW5GdW5jID0ge1xuICAgIG9uRXJyb3I6IChlKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygnPj4+Pj5vbkVycm9yJywgZSk7XG4gICAgICBjYWxsYmFjayAmJiBjYWxsYmFjayhIQU5ETEVSX0VWRU5UX05BTUUuRVJST1JfRVZFTlQsIGUpO1xuICAgIH0sXG4gIH07XG4gIEVNQ2xpZW50LnJlbW92ZUV2ZW50SGFuZGxlcihcbiAgICBsaXN0ZW5lckV2ZW50TmFtZSB8fCBIQU5ETEVSX0VWRU5UX05BTUUuRVJST1JfRVZFTlRcbiAgKTtcbiAgRU1DbGllbnQuYWRkRXZlbnRIYW5kbGVyKFxuICAgIGxpc3RlbmVyRXZlbnROYW1lIHx8IEhBTkRMRVJfRVZFTlRfTkFNRS5FUlJPUl9FVkVOVCxcbiAgICBlcnJvckxpc3RlbkZ1bmNcbiAgKTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///59\n");

/***/ }),
/* 60 */
/*!*****************************************************************************************!*\
  !*** /Users/hfp/Documents/HBuilderProjects/cunjin-socket-test/uni.promisify.adaptor.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ 4);\nuni.addInterceptor({\n  returnValue: function returnValue(res) {\n    if (!(!!res && (_typeof(res) === \"object\" || typeof res === \"function\") && typeof res.then === \"function\")) {\n      return res;\n    }\n    return new Promise(function (resolve, reject) {\n      res.then(function (res) {\n        return res[0] ? reject(res[0]) : resolve(res[1]);\n      });\n    });\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vdW5pLnByb21pc2lmeS5hZGFwdG9yLmpzIl0sIm5hbWVzIjpbInVuaSIsImFkZEludGVyY2VwdG9yIiwicmV0dXJuVmFsdWUiLCJyZXMiLCJ0aGVuIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiXSwibWFwcGluZ3MiOiI7QUFBQUEsR0FBRyxDQUFDQyxjQUFjLENBQUM7RUFDakJDLFdBQVcsdUJBQUVDLEdBQUcsRUFBRTtJQUNoQixJQUFJLEVBQUUsQ0FBQyxDQUFDQSxHQUFHLEtBQUssUUFBT0EsR0FBRyxNQUFLLFFBQVEsSUFBSSxPQUFPQSxHQUFHLEtBQUssVUFBVSxDQUFDLElBQUksT0FBT0EsR0FBRyxDQUFDQyxJQUFJLEtBQUssVUFBVSxDQUFDLEVBQUU7TUFDeEcsT0FBT0QsR0FBRztJQUNaO0lBQ0EsT0FBTyxJQUFJRSxPQUFPLENBQUMsVUFBQ0MsT0FBTyxFQUFFQyxNQUFNLEVBQUs7TUFDdENKLEdBQUcsQ0FBQ0MsSUFBSSxDQUFDLFVBQUNELEdBQUc7UUFBQSxPQUFLQSxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUdJLE1BQU0sQ0FBQ0osR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUdHLE9BQU8sQ0FBQ0gsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO01BQUEsRUFBQztJQUM5RCxDQUFDLENBQUM7RUFDSjtBQUNGLENBQUMsQ0FBQyIsImZpbGUiOiI2MC5qcyIsInNvdXJjZXNDb250ZW50IjpbInVuaS5hZGRJbnRlcmNlcHRvcih7XG4gIHJldHVyblZhbHVlIChyZXMpIHtcbiAgICBpZiAoISghIXJlcyAmJiAodHlwZW9mIHJlcyA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgcmVzID09PSBcImZ1bmN0aW9uXCIpICYmIHR5cGVvZiByZXMudGhlbiA9PT0gXCJmdW5jdGlvblwiKSkge1xuICAgICAgcmV0dXJuIHJlcztcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHJlcy50aGVuKChyZXMpID0+IHJlc1swXSA/IHJlamVjdChyZXNbMF0pIDogcmVzb2x2ZShyZXNbMV0pKTtcbiAgICB9KTtcbiAgfSxcbn0pOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///60\n");

/***/ })
],[[0,"app-config"]]]);