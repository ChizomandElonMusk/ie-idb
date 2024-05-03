exports.ids = [6];
exports.modules = {

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/MeterInput.vue?vue&type=template&id=dab4a616&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formattedValue,
      expression: "formattedValue"
    }],
    attrs: {
      "type": "text",
      "placeholder": "Enter credit card number"
    },
    domProps: {
      "value": _vm.formattedValue
    },
    on: {
      "input": [function ($event) {
        if ($event.target.composing) return;
        _vm.formattedValue = $event.target.value;
      }, _vm.formatCreditCard]
    }
  }, []);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/MeterInput.vue?vue&type=template&id=dab4a616&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/MeterInput.vue?vue&type=script&lang=js&
/* harmony default export */ var MeterInputvue_type_script_lang_js_ = ({
  data() {
    return {
      formattedValue: ''
    };
  },
  methods: {
    formatCreditCard(event) {
      let input = event.target.value.replace(/-/g, ''); // Remove existing hyphens
      let formattedValue = '';
      for (let i = 0; i < input.length; i++) {
        formattedValue += input.charAt(i);
        if ((i + 1) % 4 === 0 && i !== input.length - 1) {
          formattedValue += '-';
        }
      }
      this.formattedValue = formattedValue;
    }
  }
});
// CONCATENATED MODULE: ./components/MeterInput.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_MeterInputvue_type_script_lang_js_ = (MeterInputvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/MeterInput.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_MeterInputvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "d7f6f528"
  
)

/* harmony default export */ var MeterInput = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=meter-input.js.map