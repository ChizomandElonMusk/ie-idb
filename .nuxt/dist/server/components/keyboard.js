exports.ids = [3];
exports.modules = {

/***/ 42:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(51);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("3764c60f", content, true, context)
};

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Keyboard_vue_vue_type_style_index_0_id_62813465_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(42);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Keyboard_vue_vue_type_style_index_0_id_62813465_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Keyboard_vue_vue_type_style_index_0_id_62813465_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Keyboard_vue_vue_type_style_index_0_id_62813465_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Keyboard_vue_vue_type_style_index_0_id_62813465_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 51:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".vuertual-numeric-keyboard[data-v-62813465]{display:grid;grid-template-columns:auto auto auto;grid-gap:20px}.vuertual-numeric-keyboard .btn[data-v-62813465]{font-weight:700}.btn-keyboard[data-v-62813465]{background-color:#f44336;color:#fff}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Keyboard.vue?vue&type=template&id=62813465&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "vuertual-numeric-keyboard bg-light rounded border p-3"
  }, [_vm._ssrNode(_vm._ssrList(_vm.keys, function (key) {
    return "<button" + _vm._ssrClass("btn btn-large", _vm.keyTheme) + " style=\"border-radius: 10px;\" data-v-62813465>" + _vm._ssrEscape(_vm._s(key)) + "</button>";
  }) + " <button" + _vm._ssrClass("btn btn-large black", _vm.buttonTheme) + " style=\"border-radius: 10px;\" data-v-62813465>←</button> <button" + _vm._ssrClass("btn btn-large orange", _vm.buttonTheme) + " style=\"border-radius: 10px;\" data-v-62813465>Clear</button> "), _c('nuxt-link', {
    staticClass: "btn btn-large col s12 red",
    staticStyle: {
      "border-radius": "10px"
    },
    attrs: {
      "to": "./dashboard"
    }
  }, [_vm._v("\n      Cancel\n  ")]), _vm._ssrNode(" <button" + _vm._ssrClass("btn btn-large blue", _vm.buttonTheme) + " style=\"border-radius: 10px;\" data-v-62813465>Paste</button>")], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Keyboard.vue?vue&type=template&id=62813465&scoped=true

// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__(34);
var external_lodash_default = /*#__PURE__*/__webpack_require__.n(external_lodash_);

// EXTERNAL MODULE: external "@capacitor/clipboard"
var clipboard_ = __webpack_require__(35);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Keyboard.vue?vue&type=script&lang=js
//   import 'bootstrap/dist/css/bootstrap.min.css';


/* harmony default export */ var Keyboardvue_type_script_lang_js = ({
  props: ['selfValue'],
  data() {
    return {
      value: '',
      keys: [...Array(10).keys()],
      keyTheme: 'btn-keyboard',
      buttonTheme: 'btn-danger'
    };
  },
  methods: {
    async paste() {
      console.log('was clicked');
      const {
        type,
        value
      } = await clipboard_["Clipboard"].read();
      this.$emit('paste', value);
      console.log(`from clipboard: ${value}`);
    },
    async paste2() {
      // Access clipboard data
      const clipboardData = await navigator.clipboard.readText();
      this.$emit('paste', clipboardData);

      // Do something with the clipboard data
      console.log('Pasted content:', clipboardData);
    },
    shuffle() {
      this.keys = external_lodash_default.a.shuffle(this.keys);
    },
    press(key) {
      if (this.value.length < 20) {
        this.value = `${this.value}${key}`;
        // this.shuffle();
      }
    },
    clear(type) {
      if (type === 'all') this.value = '';else this.value = this.value.substring(0, this.value.length - 1);
    }
  },
  watch: {
    value() {
      this.$emit('pressed', this.value);
    },
    selfValue() {
      this.value = this.selfValue;
    }
  },
  created() {
    // this.shuffle();
  }
});
// CONCATENATED MODULE: ./components/Keyboard.vue?vue&type=script&lang=js
 /* harmony default export */ var components_Keyboardvue_type_script_lang_js = (Keyboardvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Keyboard.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(50)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Keyboardvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "62813465",
  "2b31955c"
  
)

/* harmony default export */ var Keyboard = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=keyboard.js.map