exports.ids = [20];
exports.modules = {

/***/ 53:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(62);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("3d7380ec", content, true, context)
};

/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_sent_vue_vue_type_style_index_0_id_43cf74ba_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(53);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_sent_vue_vue_type_style_index_0_id_43cf74ba_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_sent_vue_vue_type_style_index_0_id_43cf74ba_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_sent_vue_vue_type_style_index_0_id_43cf74ba_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_sent_vue_vue_type_style_index_0_id_43cf74ba_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 62:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "#sig-canvas[data-v-43cf74ba]{border:2px dotted #ccc;border-radius:15px;cursor:crosshair}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/sent.vue?vue&type=template&id=43cf74ba&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticStyle: {
      "padding-left": "40px",
      "padding-right": "40px",
      "padding-top": "20px"
    }
  }, [_vm._ssrNode("<div class=\"row\" data-v-43cf74ba></div> <div class=\"row\" data-v-43cf74ba></div> "), _vm._ssrNode("<div class=\"row\" style=\"margin-top: 200px\" data-v-43cf74ba>", "</div>", [_vm._ssrNode("<div class=\"row\" data-v-43cf74ba>", "</div>", [_vm._ssrNode("<div class=\"col s12 center\" data-v-43cf74ba><i class=\"material-icons large red-text\" data-v-43cf74ba>send</i></div> <div class=\"col s12 center red-text\" data-v-43cf74ba><h6 data-v-43cf74ba>\n                Form has been submited\n            </h6></div> "), _vm._ssrNode("<div class=\"col s12 center red-text\" data-v-43cf74ba>", "</div>", [_vm._ssrNode("<div class=\"row\" data-v-43cf74ba>", "</div>", [_vm._ssrNode("<div class=\"col s12 center\" data-v-43cf74ba>", "</div>", [_c('nuxt-link', {
    attrs: {
      "to": "./dashboard"
    }
  }, [_c('div', {
    staticClass: "card-panel red"
  }, [_c('span', {
    staticClass: "white-text"
  }, [_c('h6', [_vm._v("Back to menu")])])])])], 1)])])], 2)])], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/sent.vue?vue&type=template&id=43cf74ba&scoped=true

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/sent.vue?vue&type=script&lang=js
/* harmony default export */ var sentvue_type_script_lang_js = ({
  layout: 'admin_main',
  data() {
    return {};
  },
  methods: {},
  mounted() {
    document.addEventListener('DOMContentLoaded', function () {
      var elems = document.querySelectorAll('select');
      var instances = M.FormSelect.init(elems, options);
    });
  },
  created() {}
});
// CONCATENATED MODULE: ./pages/sent.vue?vue&type=script&lang=js
 /* harmony default export */ var pages_sentvue_type_script_lang_js = (sentvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/sent.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(61)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_sentvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "43cf74ba",
  "150db9fe"
  
)

/* harmony default export */ var sent = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=sent.js.map