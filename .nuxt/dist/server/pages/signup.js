exports.ids = [22,5];
exports.modules = {

/***/ 37:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/logo.e97530d.png";

/***/ }),

/***/ 38:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return loginUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return getUserInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return searchPaymentHistory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getPaymentHistory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return registerIntent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return confirmOtp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return changePassword; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return passwordResetIntent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return confirmPasswordResetToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return getOnlineStatus; });
/* unused harmony export paymentReceipt */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return energyBalance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return loadToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return deleteAccount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return logOut; });
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

    //console.log(response)

    // //console.log(response.passwords)
    // //console.log(response)
    return response;
  } catch (error) {
    //console.log(error)
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
    //console.log(response)
    return response;

    // //console.log(response)

    // //console.log(response.passwords)
    // //console.log(response)
    return response;
  } catch (error) {
    //console.log(error)
    // M.toast({html: `<b class="red-text">${error}</b>`})
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
    //console.log(response)
    return response;

    // //console.log(response)

    // //console.log(response.passwords)
    // //console.log(response)
    // return response
  } catch (error) {
    //console.log(error)
    M.toast({
      html: `<b class="red-text">${error}</b>`
    });
  }
}
async function getPaymentHistory() {
  let token = localStorage.getItem('jdotwdott');
  var passwords = "";
  passwords = {
    param: ""
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
    // //console.log(response)
    return response;

    // //console.log(response)

    // //console.log(response.passwords)
    // //console.log(response)
    // return response
  } catch (error) {
    //console.log(error)
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
    // console.log(response)
    return response;

    // //console.log(response)

    // //console.log(response.passwords)
    // //console.log(response)
    // return response
  } catch (error) {
    //console.log(error)
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
    //console.log(response)
    return response;

    // //console.log(response)

    // //console.log(response.passwords)
    // //console.log(response)
    // return response
  } catch (error) {
    //console.log(error)
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
    //console.log(response)
    return response;

    // //console.log(response)

    // //console.log(response.passwords)
    // //console.log(response)
    // return response
  } catch (error) {
    //console.log(error)
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
    //console.log(response)
    return response;

    // //console.log(response)

    // //console.log(response.passwords)
    // //console.log(response)
    // return response
  } catch (error) {
    //console.log(error)
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
    //console.log(response)
    return response;

    // //console.log(response)

    // //console.log(response.passwords)
    // //console.log(response)
    // return response
  } catch (error) {
    //console.log(error)
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
    //console.log(response)
    return response;

    // //console.log(response)

    // //console.log(response.passwords)
    // //console.log(response)
    // return response
  } catch (error) {
    //console.log(error)
    // M.toast({html: `<b class="red-text">${error}</b>`})
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
    //console.log(response)

    return response;

    // //console.log(response)

    // //console.log(response.passwords)
    // //console.log(response)
    // return response
  } catch (error) {
    //console.log(error)
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
    //console.log(response)
    return response;

    // //console.log(response)

    // //console.log(response.passwords)
    // //console.log(response)
    // return response
  } catch (error) {
    //console.log(error)
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
    //console.log(response)

    return response;

    // //console.log(response)

    // //console.log(response.passwords)
    // //console.log(response)
    // return response
  } catch (error) {
    //console.log(error)
    M.toast({
      html: `<b class="red-text">${error}</b>`
    });
  }
}
async function deleteAccount() {
  let token = localStorage.getItem('jdotwdott');
  try {
    const rawResponse = await fetch('https://api.ikejaelectric.com/idbwebapi/ie/v1/unsubscribe', {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer 8bcdcbd0-6e0c-3fb4-87af-602e87b5654f',
        'Content-Type': 'application/json',
        'token': token
      }
      // body: userMeterNumber,
    });
    const response = await rawResponse.json();
    console.log(response);
    console.log(response);
    console.log(response);
    console.log(response);
    console.log(response);
    return response;
  } catch (error) {
    //console.log(error)
    // M.toast({html: `<b class="red-text">${error}</b>`})
  }
}
function logOut() {
  if (false) {}
}

/***/ }),

/***/ 39:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/angled_background.3974983.jpg";

/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Logo.vue?vue&type=template&id=ac56e43a
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<div class=\"row\" style=\"margin-top: 0px\"><div class=\"col s12 m3\"></div> <div class=\"col s12 m6 center\"><img" + _vm._ssrAttr("src", __webpack_require__(37)) + " alt class=\"responsive-img circle\" style=\"max-width:100px; max-height:100px\"></div> <div class=\"col s12 m3\"></div></div>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Logo.vue?vue&type=template&id=ac56e43a

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Logo.vue?vue&type=script&lang=js
/* harmony default export */ var Logovue_type_script_lang_js = ({
  name: 'TinaLogo'
});
// CONCATENATED MODULE: ./components/Logo.vue?vue&type=script&lang=js
 /* harmony default export */ var components_Logovue_type_script_lang_js = (Logovue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Logo.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Logovue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "73e52696"
  
)

/* harmony default export */ var Logo = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/signup.vue?vue&type=template&id=6377d929
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<div class=\"row full-width\">", "</div>", [_vm._ssrNode("<div class=\"col s12 m6\" style=\"margin-top: 60px\">", "</div>", [_c('Logo'), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"row\">", "</div>", [_vm._ssrNode("<div class=\"col s12\"></div> "), _vm._ssrNode("<div class=\"col s12\">", "</div>", [_vm._ssrNode("<div class=\"white darken-4\">", "</div>", [_vm._ssrNode("<div class=\"card-content\">", "</div>", [_vm._ssrNode("<h6 class=\"center black-text\" style=\"font-weight:500;\">\n                                    Hi, Welcome\n                                </h6> <p class=\"center\" style=\"font-weight:500;\">\n                                    Please enter your meter number\n                                </p> <div" + _vm._ssrClass("row", {
    'hide': _vm.hidePreLoader
  }) + "><div class=\"col s12 center\"><img" + _vm._ssrAttr("src", __webpack_require__(37)) + " class=\"responsive-img heartbeat\" style=\"max-width: 60px;\"></div></div> "), _vm._ssrNode("<form>", "</form>", [_vm._ssrNode("<div class=\"row\"><div class=\"input-field col s12\"><input type=\"text\" placeholder=\"Meter number\" id=\"meter_number\"" + _vm._ssrAttr("value", _vm.meter_number) + " class=\"black-text\"> <label for=\"meter_number\">Meter number</label></div> <div class=\"input-field col s12 center\"><b class=\"red-text\" style=\"font-weight:500;\">" + _vm._ssrEscape("\n                                                " + _vm._s(_vm.errorMessage) + "\n                                            ") + "</b></div></div> <div class=\"row\"><div class=\"input-field col s12 center\"><button class=\"red btn btn-large col s12\" style=\"border-radius: 10px 10px 10px 10px;\">\n                                                Send\n                                            </button></div></div> "), _vm._ssrNode("<div class=\"row\">", "</div>", [_vm._ssrNode("<div class=\"input-field col s12 center\">", "</div>", [_vm._ssrNode("\n                                            I already have an account\n                                            "), _c('nuxt-link', {
    staticStyle: {
      "width": "300px"
    },
    attrs: {
      "to": "./"
    }
  }, [_vm._v("\n                                                Login\n                                            ")])], 2)])], 2)], 2)])])], 2)])], 2), _vm._ssrNode(" <div class=\"col s12 m6 full-width hide-on-small-and-down\"" + _vm._ssrStyle(null, {
    backgroundImage: `url(${_vm.backgroundUrl})`
  }, null) + "></div>")], 2)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/signup.vue?vue&type=template&id=6377d929

// EXTERNAL MODULE: ./assets/images/angled_background.jpg
var angled_background = __webpack_require__(39);
var angled_background_default = /*#__PURE__*/__webpack_require__.n(angled_background);

// EXTERNAL MODULE: ./js_modules/mods.js
var mods = __webpack_require__(38);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/signup.vue?vue&type=script&lang=js


/* harmony default export */ var signupvue_type_script_lang_js = ({
  data() {
    return {
      meter_number: '',
      hidePreLoader: true,
      errorMessage: '',
      backgroundUrl: angled_background_default.a
    };
  },
  methods: {
    async sendRegistrationIntent() {
      M.toast({
        html: '<b class="yellow-text">Please wait...</b>'
      });
      this.errorMessage = '';
      this.meter_number = this.meter_number.trim();
      if (this.meter_number == '') {
        M.toast({
          html: '<b class="yellow-text">Please enter a valid meter number</b>'
        });
      } else {
        let token = await Object(mods["m" /* registerIntent */])(this.meter_number);
        console.log('this is the meter number: ', this.meter_number);
        console.log('this is the response from registerIntent: ', token);
        if (token.code == '02') {
          M.toast({
            html: `<b class="red-text">${token.message}</b>`
          });
          this.hidePreLoader = true;
          this.errorMessage = token.message;
        } else if (token.jws !== '') {
          localStorage.setItem('jdotwdott', token.jws);
          //console.log('jws: ', token.jws);
          this.$router.push('./confirm_otp');
          this.hidePreLoader = true;
        }
      }
    }
  }
});
// CONCATENATED MODULE: ./pages/signup.vue?vue&type=script&lang=js
 /* harmony default export */ var pages_signupvue_type_script_lang_js = (signupvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/signup.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_signupvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "30f41441"
  
)

/* harmony default export */ var signup = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Logo: __webpack_require__(40).default})


/***/ })

};;
//# sourceMappingURL=signup.js.map