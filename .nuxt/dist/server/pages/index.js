exports.ids = [15,7];
exports.modules = {

/***/ 36:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/logo.e97530d.png";

/***/ }),

/***/ 37:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return loginUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getUserInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return searchPaymentHistory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return getPaymentHistory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return registerIntent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return confirmOtp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return changePassword; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return passwordResetIntent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return confirmPasswordResetToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getOnlineStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return paymentReceipt; });
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

/***/ 38:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/angled_background.3974983.jpg";

/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/PreLoader.vue?vue&type=template&id=daccfba6
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<div class=\"preloader-wrapper active\"><div class=\"spinner-layer spinner-red-only\"><div class=\"circle-clipper left\"><div class=\"circle\"></div></div><div class=\"gap-patch\"><div class=\"circle\"></div></div><div class=\"circle-clipper right\"><div class=\"circle\"></div></div></div></div>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/PreLoader.vue?vue&type=template&id=daccfba6

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/PreLoader.vue?vue&type=script&lang=js
/* harmony default export */ var PreLoadervue_type_script_lang_js = ({});
// CONCATENATED MODULE: ./components/PreLoader.vue?vue&type=script&lang=js
 /* harmony default export */ var components_PreLoadervue_type_script_lang_js = (PreLoadervue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/PreLoader.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_PreLoadervue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "20bd1f8a"
  
)

/* harmony default export */ var PreLoader = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=818cd3da
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<div class=\"row full-width\">", "</div>", [_vm._ssrNode("<div class=\"col s12 m6\" style=\"margin-top: 130px\">", "</div>", [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div" + _vm._ssrClass("row", {
    'hide': _vm.hidePreLoader
  }) + "><div class=\"col s12 center\"><img" + _vm._ssrAttr("src", __webpack_require__(36)) + _vm._ssrClass("responsive-img", {
    'heartbeat': _vm.startHeartBeat
  }) + " style=\"max-width: 60px;\"></div></div> <div class=\"row\"><h5 class=\"center red-text\">\n              IDB <b style=\"font-size: 10px; font-weight: 300;\">Alpha version 0.0.1</b></h5></div> "), _vm._ssrNode("<form>", "</form>", [_vm._ssrNode("<div class=\"row\"><div class=\"input-field col s12\"><input type=\"text\" placeholder id=\"username\"" + _vm._ssrAttr("value", _vm.username) + " class=\"black-text focus\"> <label for=\"username\">Username</label></div></div> <div class=\"row\"><div class=\"input-field col s12\"><input type=\"password\" placeholder id=\"password\"" + _vm._ssrAttr("value", _vm.password) + " class=\"black-text\"> <label for=\"password\">Password</label></div></div> <div class=\"row\"><div class=\"input-field col s12 center\"><button class=\"red btn btn-large col s12\" style=\"border-radius: 10px 10px 10px 10px;\">\n                          Login\n                      </button></div></div> "), _vm._ssrNode("<div class=\"row\">", "</div>", [_vm._ssrNode("<div class=\"input-field col s12 center\">", "</div>", [_vm._ssrNode("\n                    Create a free account\n                      "), _c('nuxt-link', {
    staticStyle: {
      "width": "300px"
    },
    attrs: {
      "to": "./signup"
    }
  }, [_vm._v("\n                          Signup\n                      ")])], 2)]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"row\">", "</div>", [_vm._ssrNode("<div class=\"input-field col s12 center\">", "</div>", [_c('nuxt-link', {
    staticStyle: {
      "width": "300px"
    },
    attrs: {
      "to": "./forgot"
    }
  }, [_vm._v("\n                          Forgot password\n                      ")])], 1)])], 2)], 2)]), _vm._ssrNode(" <div class=\"col s12 m6 full-width hide-on-small-and-down\"" + _vm._ssrStyle(null, {
    backgroundImage: `url(${_vm.backgroundUrl})`
  }, null) + "></div>")], 2)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=818cd3da

// EXTERNAL MODULE: ./assets/images/angled_background.jpg
var angled_background = __webpack_require__(38);
var angled_background_default = /*#__PURE__*/__webpack_require__.n(angled_background);

// EXTERNAL MODULE: ./components/PreLoader.vue + 4 modules
var PreLoader = __webpack_require__(42);

// EXTERNAL MODULE: ./js_modules/mods.js
var mods = __webpack_require__(37);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=script&lang=js



/* harmony default export */ var lib_vue_loader_options_pagesvue_type_script_lang_js = ({
  head() {
    return {
      // Other meta information
      script: [{
        hid: 'cryptojs',
        src: 'https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.0.0/crypto-js.min.js',
        defer: true
      }]
    };
  },
  data() {
    return {
      backgroundUrl: angled_background_default.a,
      // username: 'cechehieuka@ikejaelectric.com',
      // password: 'Chizom.@1',
      username: '',
      username2: '',
      password: '',
      password2: '',
      hidePreLoader: false,
      startHeartBeat: false
    };
  },
  methods: {
    async signIn() {
      M.toast({
        html: '<b class="yellow-text">Please wait...</b>'
      });
      this.hidePreLoader = false;
      this.startHeartBeat = true;
      // this.username = this.username.trim()
      // this.password = this.password.trim()

      // start of for test only
      if (this.username !== 'test@gmail.com' && this.password !== ' p@$$word') {
        M.toast({
          html: '<b class="red-text">Wrong email and password!</b>'
        });
      } else {
        this.username2 = 'cechehieuka@ikejaelectric.com';
        this.password2 = 'Chizom.@1';
        if (this.username2 === '' || this.password2 === '') {
          M.toast({
            html: '<b class="red-text">Username or Password is empty!</b>'
          });
          // this.hidePreLoader = true
          this.startHeartBeat = false;
        } else {
          let credentials = await Object(mods["j" /* loginUser */])(this.username2, this.password2);
          console.log(credentials);
          if (credentials == undefined || credentials.message == 'Error encountered while processing request!') {
            M.toast({
              html: '<b class="red-text">Check Username or Password!</b>'
            });
            // this.hidePreLoader = true
            this.startHeartBeat = false;
          } else {
            localStorage.setItem('jdotwdott', credentials.jws);
            if (credentials.u.roles[0] == 'NEW') {
              this.$router.push('./reset_password');
              // this.hidePreLoader = true
              this.startHeartBeat = false;
            } else if (credentials.u.roles[0] == 'REGULAR') {
              this.$router.push('./dashboard');
              // this.hidePreLoader = true
              this.startHeartBeat = false;
            }
          }
        }
      }
      // end of for test only

      // if (this.username === '' || this.password === '') {
      //   M.toast({html: '<b class="red-text">Username or Password is empty!</b>'})
      //   // this.hidePreLoader = true
      //   this.startHeartBeat = false
      // } else {
      //   let credentials = await loginUser(this.username, this.password)
      //   console.log(credentials);
      //   if (credentials == undefined || credentials.message == 'Error encountered while processing request!') {
      //     M.toast({html: '<b class="red-text">Check Username or Password!</b>'})
      //     // this.hidePreLoader = true
      //     this.startHeartBeat = false
      //   } else {
      //     localStorage.setItem('jdotwdott', credentials.jws)
      //     if (credentials.u.roles[0] == 'NEW') {
      //       this.$router.push('./reset_password')
      //     // this.hidePreLoader = true
      //     this.startHeartBeat = false
      //     } else if (credentials.u.roles[0] == 'REGULAR'){
      //       this.$router.push('./dashboard')
      //     // this.hidePreLoader = true
      //     this.startHeartBeat = false
      //     }

      //   }

      // }

      // this.convertEmail(this.username, this.password)

      // console.log(`username -> ${this.username}     password -> ${this.password}`)
      // this is the main condition to allow the use login
      // if (this.username === '' || this.password === '') {
      //   M.toast({html: '<b class="red-text">Username or Password is empty!</b>'})
      // } else {
      //   this.hidePreLoader = false
      //   this.convertEmail(this.username, this.password)

      // }
      // this.$router.push('./dashboard')
    },
    // async callLoginApi () {
    //   try {

    //     const rawResponse = await fetch('http://192.168.6.183:8087/cwfrestapi/api/v1/auth/login', {
    //       method: 'POST',
    //       headers: {
    //         'Accept': 'application/json',
    //         'Content-Type': 'application/json'
    //       },
    //       body: JSON.stringify({
    //         usernameOrEmail: this.username, 
    //         password: this.password,
    //       })
    //     });

    //     console.log('content is being converted to json')
    //     const content = await rawResponse.json();

    //     console.log(content)

    //     let responseCode = content.code
    //     let message = content.message

    //     console.log('if statement is being ran to check response')
    //     console.log('response code ', responseCode)
    //     console.log('response token ', content.token)
    //     if(responseCode == "09" || responseCode == null || responseCode == undefined) {

    //       M.toast({html: `<b class="red-text">${message}</b>`})
    //       this.hidePreLoader = true

    //     } else if(responseCode === '00') {

    //         M.toast({html: `<b class="green-text">Welcome</b>`})
    //         let token = content.token

    //         if (process.client) {
    //           localStorage.setItem('token', token)
    //           // localStorage.setItem('fullname', `${content.payload.first_name} ${content.payload.last_name}`)
    //         }

    //         this.hidePreLoader = true
    //         window.location = './dashboard'
    //         // this.$router.push('./dashboard')
    //     }

    //   } catch (error) {
    //     console.log(`Your error says -> ${error}`)
    //     console.log(error)
    //     M.toast({html: `<b class="red-text">${error}</b>`})
    //     this.hidePreLoader = true
    //   }

    // },

    async convertEmail(uname, password) {
      let encrptionKey = 'astsk@#$001!!!*&^';
      let username = uname;
      let pWord = password;

      // let encrytedUsername = this.encryptWithAes256(username, encrptionKey)
      let encrytedUsername = username;
      let encrytedPassword = this.encryptWithAes256(pWord, encrptionKey);

      // console.log(`username -> ${encrytedUsername}   password -> ${encrytedPassword}`)

      console.log('trying api now........');
      try {
        const rawResponse = await fetch('http://192.168.6.183:8087/cwfrestapi/api/v1/auth/login', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            usernameOrEmail: encrytedUsername,
            password: encrytedPassword
          })
        });
        console.log('content is being converted to json');
        const content = await rawResponse.json();
        console.log(content);
        let responseCode = content.code;
        let message = content.message;
        console.log('if statement is being ran to check response');
        if (responseCode == "09" || responseCode == null || responseCode == undefined) {
          M.toast({
            html: `<b class="red-text">${message}</b>`
          });
          this.hidePreLoader = true;
        } else if (responseCode === '00') {
          M.toast({
            html: `<b class="green-text">Welcome</b>`
          });
          let token = content.token;
          let userId = content.userId;
          if (false) {}
          this.hidePreLoader = true;
          this.$router.push('./dashboard');
        }
      } catch (error) {
        console.log(`Your error says -> ${error}`);
        M.toast({
          html: `<b class="red-text">${error}</b>`
        });
        this.hidePreLoader = true;
      }
    },
    encryptWithAes256(messageToEncrypt, encryptorKey) {
      // Generate random 16 bytes salt
      var salt = CryptoJS.lib.WordArray.random(128 / 8);

      // Derive key
      var key = CryptoJS.PBKDF2(encryptorKey, salt, {
        keySize: 256 / 32,
        iterations: 1000,
        hasher: CryptoJS.algo.SHA512
      } // Apply SHA512
      );
      // console.log("derived key:\n" + key);

      // Generate random 16 bytes init vector (iv)
      var iv = CryptoJS.lib.WordArray.random(128 / 8);

      // Encrypt
      var cipherText = CryptoJS.AES.encrypt(messageToEncrypt, key, {
        iv: iv
      });

      // Concatenate
      var encryptedData = salt.clone().concat(iv).concat(cipherText.ciphertext); // Concatenate on binary level
      var encryptedDataB64 = encryptedData.toString(CryptoJS.enc.Base64); // Base64 encode the result
      // console.log("aes encrypted text:\n", encryptedDataB64.replace(/(.{56})/g,'$1\n')); 
      return encryptedDataB64.replace(/(.{56})/g, '$1\n');
    }
  },
  created() {
    // this.testAPI()
    // let v = this.$store.state.token
    // console.log(v)

    // this.$store.commit('setToken', '294039480398029842i42ik3lnsdkhgosih')

    // let vv = this.$store.getters.myGetter;
    // console.log(vv)
  }
});
// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=js
 /* harmony default export */ var pagesvue_type_script_lang_js = (lib_vue_loader_options_pagesvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "6f448fb9"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map