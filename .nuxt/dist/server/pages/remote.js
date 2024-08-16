exports.ids = [17,3];
exports.modules = {

/***/ 38:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return loginUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getUserInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return searchPaymentHistory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return getPaymentHistory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return registerIntent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return confirmOtp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return changePassword; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return passwordResetIntent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return confirmPasswordResetToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getOnlineStatus; });
/* unused harmony export paymentReceipt */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return energyBalance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return loadToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return logOut; });
async function loginUser(username, password) {
  var passwords = "";
  passwords = {
    params: [username, password]
  };
  passwords = JSON.stringify(passwords);
  try {
    const rawResponse = await fetch('https://api.ikejaelectric.com/idbwebapi/ie/v1/authenticate', {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer 8bcdcbd0-6e0c-3fb4-87af-602e87b5654f',
        'Content-Type': 'application/json'
      },
      body: passwords
    });
    const response = await rawResponse.json();
    // return response

    console.log(response);

    // console.log(response.passwords)
    // console.log(response)
    return response;
  } catch (error) {
    console.log(error);
    M.toast({
      html: `<b class="red-text">${error}</b>`
    });
  }
}
async function getUserInfo() {
  let token = localStorage.getItem('jdotwdott');
  var passwords = "";
  passwords = {
    param: "0102327327"
  };
  passwords = JSON.stringify(passwords);
  try {
    const rawResponse = await fetch('https://api.ikejaelectric.com/idbwebapi/ie/v1/acctinfo', {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer 8bcdcbd0-6e0c-3fb4-87af-602e87b5654f',
        'Content-Type': 'application/json',
        'token': token
      },
      body: passwords
    });
    const response = await rawResponse.json();
    console.log(response);
    return response;

    // console.log(response)

    // console.log(response.passwords)
    // console.log(response)
    return response;
  } catch (error) {
    console.log(error);
    M.toast({
      html: `<b class="red-text">${error}</b>`
    });
  }
}
async function searchPaymentHistory(account_number, start_date, end_date) {
  let token = localStorage.getItem('jdotwdott');
  var passwords = "";
  passwords = {
    params: [account_number, start_date, end_date]
  };
  passwords = JSON.stringify(passwords);
  try {
    const rawResponse = await fetch('https://api.ikejaelectric.com/idbwebapi/ie/v1/paymenthistory2', {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer 8bcdcbd0-6e0c-3fb4-87af-602e87b5654f',
        'Content-Type': 'application/json',
        'token': token
      },
      body: passwords
    });
    const response = await rawResponse.json();
    console.log(response);
    return response;

    // console.log(response)

    // console.log(response.passwords)
    // console.log(response)
    // return response
  } catch (error) {
    console.log(error);
    M.toast({
      html: `<b class="red-text">${error}</b>`
    });
  }
}
async function getPaymentHistory() {
  let token = localStorage.getItem('jdotwdott');
  var passwords = "";
  passwords = {
    param: "0102327327"
  };
  passwords = JSON.stringify(passwords);
  try {
    const rawResponse = await fetch('https://api.ikejaelectric.com/idbwebapi/ie/v1/paymenthistory', {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer 8bcdcbd0-6e0c-3fb4-87af-602e87b5654f',
        'Content-Type': 'application/json',
        'token': token
      },
      body: passwords
    });
    const response = await rawResponse.json();
    // console.log(response)
    return response;

    // console.log(response)

    // console.log(response.passwords)
    // console.log(response)
    // return response
  } catch (error) {
    console.log(error);
    M.toast({
      html: `<b class="red-text">${error}</b>`
    });
  }
}
async function registerIntent(meterNumber) {
  var user_meter_number = "";
  user_meter_number = {
    params: [meterNumber]
  };
  user_meter_number = JSON.stringify(user_meter_number);
  try {
    const rawResponse = await fetch('https://api.ikejaelectric.com/idbwebapi/ie/v1/registerintent', {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer 8bcdcbd0-6e0c-3fb4-87af-602e87b5654f',
        'Content-Type': 'application/json'
      },
      body: user_meter_number
    });
    const response = await rawResponse.json();
    console.log(response);
    return response;

    // console.log(response)

    // console.log(response.passwords)
    // console.log(response)
    // return response
  } catch (error) {
    console.log(error);
    M.toast({
      html: `<b class="red-text">${error}</b>`
    });
  }
}
async function confirmOtp(otp) {
  let token = localStorage.getItem('jdotwdott');
  var userOtp = "";
  userOtp = {
    params: [otp]
  };
  userOtp = JSON.stringify(userOtp);
  try {
    const rawResponse = await fetch('https://api.ikejaelectric.com/idbwebapi/ie/v1/register', {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer 8bcdcbd0-6e0c-3fb4-87af-602e87b5654f',
        'Content-Type': 'application/json',
        'token': token
      },
      body: userOtp
    });
    const response = await rawResponse.json();
    console.log(response);
    return response;

    // console.log(response)

    // console.log(response.passwords)
    // console.log(response)
    // return response
  } catch (error) {
    console.log(error);
    M.toast({
      html: `<b class="red-text">${error}</b>`
    });
  }
}
async function changePassword(newPassword, confirmPassword) {
  let token = localStorage.getItem('jdotwdott');
  var userPasswords = "";
  userPasswords = {
    params: [newPassword, confirmPassword]
  };
  userPasswords = JSON.stringify(userPasswords);
  try {
    const rawResponse = await fetch('https://api.ikejaelectric.com/idbwebapi/ie/v1/changepassword', {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer 8bcdcbd0-6e0c-3fb4-87af-602e87b5654f',
        'Content-Type': 'application/json',
        'token': token
      },
      body: userPasswords
    });
    const response = await rawResponse.json();
    console.log(response);
    return response;

    // console.log(response)

    // console.log(response.passwords)
    // console.log(response)
    // return response
  } catch (error) {
    console.log(error);
    M.toast({
      html: `<b class="red-text">${error}</b>`
    });
  }
}
async function passwordResetIntent(username) {
  var usernameReq = "";
  usernameReq = {
    params: [username]
  };
  usernameReq = JSON.stringify(usernameReq);
  try {
    const rawResponse = await fetch('https://api.ikejaelectric.com/idbwebapi/ie/v1/resetintent', {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer 8bcdcbd0-6e0c-3fb4-87af-602e87b5654f',
        'Content-Type': 'application/json'
      },
      body: usernameReq
    });
    const response = await rawResponse.json();
    console.log(response);
    return response;

    // console.log(response)

    // console.log(response.passwords)
    // console.log(response)
    // return response
  } catch (error) {
    console.log(error);
    M.toast({
      html: `<b class="red-text">${error}</b>`
    });
  }
}
async function confirmPasswordResetToken(otp) {
  let token = localStorage.getItem('jdotwdott');
  var userOtp = "";
  userOtp = {
    params: [otp]
  };
  userOtp = JSON.stringify(userOtp);
  try {
    const rawResponse = await fetch('https://api.ikejaelectric.com/idbwebapi/ie/v1/reset', {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer 8bcdcbd0-6e0c-3fb4-87af-602e87b5654f',
        'Content-Type': 'application/json',
        'token': token
      },
      body: userOtp
    });
    const response = await rawResponse.json();
    console.log(response);
    return response;

    // console.log(response)

    // console.log(response.passwords)
    // console.log(response)
    // return response
  } catch (error) {
    console.log(error);
    M.toast({
      html: `<b class="red-text">${error}</b>`
    });
  }
}
async function getOnlineStatus() {
  let token = localStorage.getItem('jdotwdott');
  // var userMeterNumber = ""
  // userMeterNumber = {
  //     params: [otp],
  // }
  // userMeterNumber = JSON.stringify(userMeterNumber)

  try {
    const rawResponse = await fetch('https://api.ikejaelectric.com/idbwebapi/ie/v1/onlinestatus', {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer 8bcdcbd0-6e0c-3fb4-87af-602e87b5654f',
        'Content-Type': 'application/json',
        'token': token
      }
      // body: userMeterNumber,
    });
    const response = await rawResponse.json();
    console.log(response);
    return response;

    // console.log(response)

    // console.log(response.passwords)
    // console.log(response)
    // return response
  } catch (error) {
    console.log(error);
    M.toast({
      html: `<b class="red-text">${error}</b>`
    });
  }
}

// payment receipt 
async function paymentReceipt(orderNumber, channel) {
  let token = localStorage.getItem('jdotwdott');
  var userReceiptReq = "";
  userReceiptReq = {
    params: [orderNumber, channel]
  };
  userReceiptReq = JSON.stringify(userReceiptReq);
  try {
    const rawResponse = await fetch('https://api.ikejaelectric.com/idbwebapi/ie/v1/paymentreceipt', {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer 8bcdcbd0-6e0c-3fb4-87af-602e87b5654f',
        'Content-Type': 'application/json',
        'token': token
      },
      body: userReceiptReq
    });
    const response = await rawResponse.json();
    console.log(response);
    return response;

    // console.log(response)

    // console.log(response.passwords)
    // console.log(response)
    // return response
  } catch (error) {
    console.log(error);
    M.toast({
      html: `<b class="red-text">${error}</b>`
    });
  }
}

// energy balance api call
async function energyBalance() {
  let token = localStorage.getItem('jdotwdott');
  try {
    const rawResponse = await fetch('https://api.ikejaelectric.com/idbwebapi/ie/v1/energybalance', {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer 8bcdcbd0-6e0c-3fb4-87af-602e87b5654f',
        'Content-Type': 'application/json',
        'token': token
      }
    });
    const response = await rawResponse.json();
    console.log(response);
    return response;

    // console.log(response)

    // console.log(response.passwords)
    // console.log(response)
    // return response
  } catch (error) {
    console.log(error);
    M.toast({
      html: `<b class="red-text">${error}</b>`
    });
  }
}

// remote token loading
async function loadToken(userToken) {
  let token = localStorage.getItem('jdotwdott');
  var userTokenReq = "";
  userTokenReq = {
    params: [userToken]
  };
  userTokenReq = JSON.stringify(userTokenReq);
  try {
    const rawResponse = await fetch('https://api.ikejaelectric.com/idbwebapi/ie/v1/loadtoken', {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer 8bcdcbd0-6e0c-3fb4-87af-602e87b5654f',
        'Content-Type': 'application/json',
        'token': token
      },
      body: userTokenReq
    });
    const response = await rawResponse.json();
    console.log(response);
    return response;

    // console.log(response)

    // console.log(response.passwords)
    // console.log(response)
    // return response
  } catch (error) {
    console.log(error);
    M.toast({
      html: `<b class="red-text">${error}</b>`
    });
  }
}
function logOut() {
  if (false) {}
}

/***/ }),

/***/ 41:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(49);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("44fe5950", content, true, context)
};

/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Keyboard_vue_vue_type_style_index_0_id_484ab890_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(41);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Keyboard_vue_vue_type_style_index_0_id_484ab890_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Keyboard_vue_vue_type_style_index_0_id_484ab890_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Keyboard_vue_vue_type_style_index_0_id_484ab890_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Keyboard_vue_vue_type_style_index_0_id_484ab890_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 49:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".vuertual-numeric-keyboard[data-v-484ab890]{display:grid;grid-template-columns:auto auto auto;grid-gap:20px}.vuertual-numeric-keyboard .btn[data-v-484ab890]{font-weight:700}.btn-keyboard[data-v-484ab890]{background-color:#f44336;color:#fff}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Keyboard.vue?vue&type=template&id=484ab890&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "vuertual-numeric-keyboard bg-light rounded border p-3"
  }, [_vm._ssrNode(_vm._ssrList(_vm.keys, function (key) {
    return "<button" + _vm._ssrClass("btn btn-large", _vm.keyTheme) + " style=\"border-radius: 10px;\" data-v-484ab890>" + _vm._ssrEscape(_vm._s(key)) + "</button>";
  }) + " <button" + _vm._ssrClass("btn btn-large black", _vm.buttonTheme) + " style=\"border-radius: 10px;\" data-v-484ab890>←</button> <button" + _vm._ssrClass("btn btn-large orange", _vm.buttonTheme) + " style=\"border-radius: 10px;\" data-v-484ab890>Clear</button> "), _c('nuxt-link', {
    staticClass: "btn btn-large col s12 red",
    staticStyle: {
      "border-radius": "10px"
    },
    attrs: {
      "to": "./dashboard"
    }
  }, [_vm._v("\n      Cancel\n  ")]), _vm._ssrNode(" <button" + _vm._ssrClass("btn btn-large blue", _vm.buttonTheme) + " style=\"border-radius: 10px;\" data-v-484ab890>Paste</button>")], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Keyboard.vue?vue&type=template&id=484ab890&scoped=true

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
  
  var style0 = __webpack_require__(48)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Keyboardvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "484ab890",
  "2b31955c"
  
)

/* harmony default export */ var Keyboard = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 74:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/remote.vue?vue&type=template&id=64e2abc2&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "container",
    staticStyle: {
      "padding-top": "60px"
    }
  }, [_vm._ssrNode("<div class=\"flexcontainer\" style=\"margin-top: 10px;\" data-v-64e2abc2>", "</div>", [_vm._ssrNode("<div class=\"flexitem-username\" data-v-64e2abc2>", "</div>", [_c('nuxt-link', {
    staticClass: "btn btn-medium btn-flat red white-text",
    staticStyle: {
      "border-radius": "10px 0 0px 10px"
    },
    attrs: {
      "to": "./dashboard"
    }
  }, [_vm._v("\n        Back\n      ")]), _vm._ssrNode(" <b class=\"grey white-text\" style=\"font-size: 20px; color: #757575; border-radius: 0 10px 10px 0; padding: 3px;\" data-v-64e2abc2>\n        Remote token\n      </b> <br data-v-64e2abc2> <b class=\"white-text darken-4\" data-v-64e2abc2>\n        .......\n      </b>")], 2), _vm._ssrNode(" <div class=\"flexitem-notification\" data-v-64e2abc2></div>")], 2), _vm._ssrNode(" <div class=\"row\" style=\"margin-top: 20px;\" data-v-64e2abc2><b class=\"grey-text darken-4\" data-v-64e2abc2>" + _vm._ssrEscape("\n        Meter number: " + _vm._s(_vm.meter_number) + "\n      ") + "</b> <div class=\"card-panel red\" style=\"border-radius: 10px;\" data-v-64e2abc2><input type=\"text\" name=\"token\" maxlength=\"20\" autocomplete=\"off\" placeholder=\"Enter token\" disabled=\"disabled\"" + _vm._ssrAttr("value", _vm.value) + " class=\"white-text center\" style=\"border-bottom: 0; font-size: 20px;\" data-v-64e2abc2></div></div> "), _vm._ssrNode("<div class=\"row\" data-v-64e2abc2>", "</div>", [_c('Keyboard', {
    attrs: {
      "selfValue": _vm.value
    },
    on: {
      "pressed": function ($event) {
        _vm.value = $event;
      },
      "paste": _vm.handlePaste
    }
  })], 1), _vm._ssrNode(" <div class=\"row\" style=\"margin-top: 20px;\" data-v-64e2abc2><button class=\"btn btn-large col s12 orange black-text\" style=\"border-radius: 10px; font-weight: 400;\" data-v-64e2abc2><b data-v-64e2abc2>Load token</b></button></div> <br data-v-64e2abc2>")], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/remote.vue?vue&type=template&id=64e2abc2&scoped=true

// EXTERNAL MODULE: ./components/Keyboard.vue + 4 modules
var Keyboard = __webpack_require__(52);

// EXTERNAL MODULE: ./js_modules/mods.js
var mods = __webpack_require__(38);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/remote.vue?vue&type=script&lang=js


/* harmony default export */ var remotevue_type_script_lang_js = ({
  layout: 'admin_main',
  components: {
    Keyboard: Keyboard["default"]
  },
  data() {
    return {
      value: '',
      pastedContent: '',
      meter_number: ''
    };
  },
  methods: {
    handlePaste(key) {
      console.log('paste was clicked');
      let pasted_token = key;
      pasted_token = pasted_token.trim();
      if (pasted_token == '') {} else {
        pasted_token = pasted_token.replace(/-/g, '');
        var isNumber = this.isNumeric(pasted_token);
        // p@$$word
        // 51453345797395467537
        // 73220538680890104971
        // 68336939399713961785
        // 00923354734425296452
        // 65481483520109203561

        if (isNumber == true) {
          this.value = pasted_token;
          console.log('key pressed: ', key);
          M.toast({
            html: '<b class="yellow-text">Token code successfully pasted</b>'
          });
        } else {
          console.log('key pressed: ', key);
          console.log('this is not a valid meter number');
          M.toast({
            html: '<b class="red-text">Please check token and try again</b>'
          });
        }
      }
    },
    isNumeric(value) {
      // Regular expression to match only numeric characters
      const numericRegex = /^[0-9]+$/;

      // Test if the value matches the numeric pattern
      return numericRegex.test(value);
    },
    async loadToken() {
      M.toast({
        html: '<b class="yellow-text">Please wait</b>'
      });
      this.value = this.value.trim();
      if (this.value == '') {} else {
        let res = await Object(mods["h" /* loadToken */])(this.value);
        if (res.message == 'Token expired!') {
          let logoutRes = Object(mods["i" /* logOut */])();
          if (logoutRes.message = 0) {
            window.location = './';
          }
        } else if (res.code == '250') {
          this.value = 'Something went wrong. Try again!';
        } else {
          this.value = 'Token successfully loaded';
        }
      }
    },
    async getUserDetails() {
      let user_info = await Object(mods["g" /* getUserInfo */])();
      this.meter_number = user_info.meterNumber;
    }
  },
  mounted() {
    this.getUserDetails();
  },
  created() {
    // this.getFullname()
  }
});
// CONCATENATED MODULE: ./pages/remote.vue?vue&type=script&lang=js
 /* harmony default export */ var pages_remotevue_type_script_lang_js = (remotevue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/remote.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_remotevue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "64e2abc2",
  "e5135722"
  
)

/* harmony default export */ var remote = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Keyboard: __webpack_require__(52).default})


/***/ })

};;
//# sourceMappingURL=remote.js.map