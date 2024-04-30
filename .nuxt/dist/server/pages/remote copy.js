exports.ids = [17,3];
exports.modules = {

/***/ 38:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(43);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("51c6abca", content, true, context)
};

/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Keyboard.vue?vue&type=template&id=1f7f4aba&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "vuertual-numeric-keyboard bg-light rounded border p-3"
  }, [_vm._ssrNode(_vm._ssrList(_vm.keys, function (key) {
    return "<button" + _vm._ssrClass("btn btn-large", _vm.keyTheme) + " style=\"border-radius: 10px;\" data-v-1f7f4aba>" + _vm._ssrEscape(_vm._s(key)) + "</button>";
  }) + " <button" + _vm._ssrClass("btn btn-large black", _vm.buttonTheme) + " style=\"border-radius: 10px;\" data-v-1f7f4aba>←</button> <button" + _vm._ssrClass("btn btn-large orange", _vm.buttonTheme) + " style=\"border-radius: 10px;\" data-v-1f7f4aba>Clear</button> "), _c('nuxt-link', {
    staticClass: "btn btn-large col s12 red",
    staticStyle: {
      "border-radius": "10px"
    },
    attrs: {
      "to": "./dashboard"
    }
  }, [_vm._v("\n      Cancel\n  ")]), _vm._ssrNode(" <button" + _vm._ssrClass("btn btn-large blue", _vm.buttonTheme) + " style=\"border-radius: 10px;\" data-v-1f7f4aba>Paste</button>")], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Keyboard.vue?vue&type=template&id=1f7f4aba&scoped=true&

// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__(34);
var external_lodash_default = /*#__PURE__*/__webpack_require__.n(external_lodash_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Keyboard.vue?vue&type=script&lang=js&
//   import 'bootstrap/dist/css/bootstrap.min.css';

/* harmony default export */ var Keyboardvue_type_script_lang_js_ = ({
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
// CONCATENATED MODULE: ./components/Keyboard.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Keyboardvue_type_script_lang_js_ = (Keyboardvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Keyboard.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(42)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Keyboardvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "1f7f4aba",
  "2b31955c"
  
)

/* harmony default export */ var Keyboard = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Keyboard_vue_vue_type_style_index_0_id_1f7f4aba_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(38);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Keyboard_vue_vue_type_style_index_0_id_1f7f4aba_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Keyboard_vue_vue_type_style_index_0_id_1f7f4aba_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Keyboard_vue_vue_type_style_index_0_id_1f7f4aba_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Keyboard_vue_vue_type_style_index_0_id_1f7f4aba_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 43:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".vuertual-numeric-keyboard[data-v-1f7f4aba]{display:grid;grid-template-columns:auto auto auto;grid-gap:20px}.vuertual-numeric-keyboard .btn[data-v-1f7f4aba]{font-weight:700}.btn-keyboard[data-v-1f7f4aba]{background-color:#f44336;color:#fff}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 71:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/remote copy.vue?vue&type=template&id=228e8758&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "container",
    staticStyle: {
      "padding-top": "40px"
    }
  }, [_vm._ssrNode("<div class=\"flexcontainer\" style=\"margin-top: 10px;\" data-v-228e8758><div class=\"flexitem-username\" data-v-228e8758><b style=\"font-size: 20px; color: #757575;\" data-v-228e8758>\n        Remote Token\n      </b> <br data-v-228e8758> <b class=\"grey-text darken-4\" data-v-228e8758>" + _vm._ssrEscape("\n        meter number: " + _vm._s(_vm.meter_number) + "\n      ") + "</b></div> <div class=\"flexitem-notification\" data-v-228e8758><i class=\"material-icons\" data-v-228e8758>notifications</i></div></div> <div class=\"row\" data-v-228e8758><div class=\"card-panel red\" style=\"border-radius: 10px;\" data-v-228e8758><input type=\"text\" name=\"token\" maxlength=\"20\" autocomplete=\"off\" placeholder=\"0000 0000 0000 0000 0000\" disabled=\"disabled\"" + _vm._ssrAttr("value", _vm.value) + " class=\"white-text center\" style=\"border-bottom: 0; font-size: 20px;\" data-v-228e8758></div></div> "), _vm._ssrNode("<div class=\"row\" data-v-228e8758>", "</div>", [_vm._ssrNode("<div class=\"input-field col s12\" style=\"padding-top: 30px\" data-v-228e8758>", "</div>", [_c('Keyboard', {
    attrs: {
      "selfValue": _vm.value
    },
    on: {
      "pressed": function ($event) {
        _vm.value = $event;
      }
    }
  })], 1)]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"row\" data-v-228e8758>", "</div>", [_c('nuxt-link', {
    staticClass: "btn btn-large col s12 red",
    staticStyle: {
      "border-radius": "10px"
    },
    attrs: {
      "to": "./dashboard"
    }
  }, [_vm._v("\n        Back\n    ")])], 1)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/remote copy.vue?vue&type=template&id=228e8758&scoped=true&

// EXTERNAL MODULE: ./components/Keyboard.vue + 4 modules
var Keyboard = __webpack_require__(40);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/remote copy.vue?vue&type=script&lang=js&

/* harmony default export */ var remote_copyvue_type_script_lang_js_ = ({
  layout: 'admin_main',
  components: {
    Keyboard: Keyboard["default"]
  },
  data() {
    return {
      value: '',
      meter_number: '23203042032042'
    };
  },
  methods: {},
  created() {
    // this.getFullname()
  }
});
// CONCATENATED MODULE: ./pages/remote copy.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_remote_copyvue_type_script_lang_js_ = (remote_copyvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/remote copy.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_remote_copyvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "228e8758",
  "e9192794"
  
)

/* harmony default export */ var remote_copy = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Keyboard: __webpack_require__(40).default})


/***/ })

};;
//# sourceMappingURL=remote copy.js.map