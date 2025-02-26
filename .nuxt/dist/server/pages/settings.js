exports.ids = [21];
exports.modules = {

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

/***/ 41:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/home.adfced5.svg";

/***/ }),

/***/ 68:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/reset_password.8c60061.svg";

/***/ }),

/***/ 69:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/about.a1dd1d9.svg";

/***/ }),

/***/ 70:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/delete.eeceb51.svg";

/***/ }),

/***/ 71:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/logout_white.c2bc90c.svg";

/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/settings.vue?vue&type=template&id=8cfc73d6&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "container",
    staticStyle: {
      "padding-top": "0px"
    }
  }, [_vm._ssrNode("<div class=\"flexcontainer\" style=\"margin-top: 10px;\" data-v-8cfc73d6>", "</div>", [_vm._ssrNode("<div class=\"flexitem-username\" data-v-8cfc73d6><b style=\"font-size: 20px; color: #757575;\" data-v-8cfc73d6>\n                Settings\n            </b> <br data-v-8cfc73d6></div> "), _vm._ssrNode("<div class=\"flexitem-notification\" data-v-8cfc73d6>", "</div>", [_c('nuxt-link', {
    attrs: {
      "to": "./dashboard"
    }
  }, [_c('img', {
    staticClass: "responsive-img",
    staticStyle: {
      "max-width": "30px",
      "filter": "hue-rotate(180deg)"
    },
    attrs: {
      "src": __webpack_require__(41),
      "alt": ""
    }
  })])], 1)], 2), _vm._ssrNode(" "), _vm._ssrNode("<div" + _vm._ssrClass("row", {
    'hide': _vm.hideSettingsView
  }) + " data-v-8cfc73d6>", "</div>", [_vm._ssrNode("<div class=\"flexcontainerbtn\" data-v-8cfc73d6>", "</div>", [_vm._ssrNode("<div class=\"card-panel orange flex-buttons\" style=\"border-radius: 10px;\" data-v-8cfc73d6>", "</div>", [_vm._ssrNode("<div class=\"white-text center boarder-top\" data-v-8cfc73d6>", "</div>", [_c('nuxt-link', {
    attrs: {
      "to": "./reset_password"
    }
  }, [_c('img', {
    staticClass: "responsive-img",
    staticStyle: {
      "max-width": "50px",
      "filter": "hue-rotate(180deg)"
    },
    attrs: {
      "src": __webpack_require__(68),
      "alt": ""
    }
  }), _vm._v(" "), _c('p', {
    staticClass: "button-text white-text"
  }, [_vm._v("\n                            Reset Password\n                        ")])])], 1)]), _vm._ssrNode(" <div style=\"width: 10px;\" data-v-8cfc73d6></div> "), _vm._ssrNode("<div class=\"card-panel orange flex-buttons\" style=\"border-radius: 10px;\" data-v-8cfc73d6>", "</div>", [_vm._ssrNode("<div class=\"white-text center boarder-top\" data-v-8cfc73d6>", "</div>", [_c('nuxt-link', {
    attrs: {
      "to": "./about"
    }
  }, [_c('img', {
    staticClass: "responsive-img",
    staticStyle: {
      "max-width": "50px",
      "filter": "hue-rotate(180deg)"
    },
    attrs: {
      "src": __webpack_require__(69),
      "alt": ""
    }
  }), _vm._v(" "), _c('p', {
    staticClass: "button-text white-text"
  }, [_vm._v("\n                            About\n                        ")])])], 1)])], 2)]), _vm._ssrNode(" <div" + _vm._ssrClass("row", {
    'hide': _vm.hideSettingsView
  }) + " data-v-8cfc73d6><div class=\"flexcontainerbtn\" data-v-8cfc73d6><div class=\"card-panel orange flex-buttons\" style=\"border-radius: 10px;\" data-v-8cfc73d6><div class=\"white-text center boarder-top\" data-v-8cfc73d6><div to=\"./trans_history\" data-v-8cfc73d6><img" + _vm._ssrAttr("src", __webpack_require__(70)) + " alt class=\"responsive-img\" style=\"max-width: 50px; filter: hue-rotate(180deg);\" data-v-8cfc73d6> <p class=\"button-text white-text\" data-v-8cfc73d6>\n                            Delete Account\n                        </p></div></div></div></div></div> <div" + _vm._ssrClass("row", {
    'hide': _vm.hideDeleteDialog
  }) + " data-v-8cfc73d6><div class=\"flexcontainerbtn\" data-v-8cfc73d6><div class=\"card-panel white flex-buttons\" style=\"border-radius: 10px;\" data-v-8cfc73d6><div class=\"black-text center boarder-top\" data-v-8cfc73d6><div data-v-8cfc73d6><b data-v-8cfc73d6>Delete Your Account?</b> <p class=\"button-text black-text left-align\" data-v-8cfc73d6>\n                            Are you sure you want to delete your account? This action is permanent and cannot be\n                            undone. Here’s what will happen:\n                            <br data-v-8cfc73d6> <br data-v-8cfc73d6>\n\n                            All your data (e.g., profile information, preferences) will be permanently deleted.\n\n                            <br data-v-8cfc73d6>\n                            You will lose access to all services and features associated with your account.\n\n                            <br data-v-8cfc73d6>\n\n                            You will no longer be able to recover your account or its data.\n                        </p></div> <div class=\"row\" style=\"padding: 10px;\" data-v-8cfc73d6><div class=\"col s6\" data-v-8cfc73d6><button class=\"btn btn-large red\" data-v-8cfc73d6>\n                                Delete\n                            </button></div> <div class=\"col s6\" data-v-8cfc73d6><button class=\"btn btn-large white red-text\" data-v-8cfc73d6>\n                                Cancel\n                            </button></div></div></div></div></div></div> <div" + _vm._ssrClass("row", {
    'hide': _vm.hideSettingsView
  }) + " data-v-8cfc73d6><div class=\"flexcontainerbtn\" data-v-8cfc73d6><div class=\"card-panel red flex-buttons\" style=\"border-radius: 10px;\" data-v-8cfc73d6><div class=\"white-text center boarder-top\" data-v-8cfc73d6><div to=\"./trans_history\" data-v-8cfc73d6><img" + _vm._ssrAttr("src", __webpack_require__(71)) + " alt class=\"responsive-img\" style=\"max-width: 50px; filter: hue-rotate(180deg);\" data-v-8cfc73d6> <p class=\"button-text white-text\" data-v-8cfc73d6>\n                            Logout\n                        </p></div></div></div></div></div>")], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/settings.vue?vue&type=template&id=8cfc73d6&scoped=true

// EXTERNAL MODULE: ./js_modules/mods.js
var mods = __webpack_require__(38);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/settings.vue?vue&type=script&lang=js

/* harmony default export */ var settingsvue_type_script_lang_js = ({
  layout: 'admin_main',
  data() {
    return {
      hideSettingsView: false,
      hideDeleteDialog: true,
      account_name: '',
      account_number: '',
      meter_number: '',
      tariff: '',
      online_status: 'offline',
      greeting: '',
      dashboard_date: '',
      meter_reachable: true,
      name: '',
      email: '',
      message: '',
      scheduleList: [],
      defaultData: false,
      energyBalance: true,
      energy_balance_data: 'Please wait...'
    };
  },
  methods: {
    deleteAccount() {
      this.hideDeleteDialog = false;
      this.hideSettingsView = true;
    },
    cancelDelete() {
      this.hideDeleteDialog = true;
      this.hideSettingsView = false;
    },
    async yesDeleteAccount() {
      // call api
      // log user out

      try {
        let deleteResponse = await Object(mods["d" /* deleteAccount */])();
        console.log(deleteResponse);
        console.log(deleteResponse);
        console.log(deleteResponse);
        if (deleteResponse.message == 'Success!') {
          this.logOut();
        }
      } catch (error) {}
    },
    logOut() {
      if (false) {}
    },
    async showEnergyUsage() {
      try {
        this.energy_balance_data = 'Please wait...';
        this.defaultData = true;
        this.energyBalance = false;
        let ebdata = await Object(mods["e" /* energyBalance */])();
        //console.log(ebdata);
        if (ebdata.data == undefined || ebdata.data == null) {
          this.energy_balance_data = 'Network error. Try again later';
        } else {
          this.energy_balance_data = ebdata.data;
          this.energy_balance_data = ' Balance: ' + this.energy_balance_data + ' KWH';
        }
      } catch (error) {}
    },
    closeEnergyBalance() {
      this.defaultData = false;
      this.energyBalance = true;
    },
    getFirstLetter(text) {
      // Check if the input text is not empty
      if (text && text.length > 0) {
        // Get the first character of the text and convert it to uppercase
        return 'Band-' + text.charAt(0).toUpperCase();
      } else {
        // Return an empty string if the input text is empty
        return '';
      }
    },
    async getUserDetails() {
      let user_info = await Object(mods["h" /* getUserInfo */])();
      if (user_info.message == 'Token expired!') {
        localStorage.clear();
        this.$router.push('./');
      } else {
        this.account_name = user_info.accountName;
        this.account_number = user_info.accountNumber;
        this.meter_number = user_info.meterNumber;
        this.tariff = user_info.tariff;
        let user_online_status = await Object(mods["f" /* getOnlineStatus */])();
        this.online_status = user_online_status.message.toLowerCase();
        //console.log('here is the ut ', this.account_name);
      }
    },
    async getOnlineStatusRoutineCall() {
      let user_online_status = await Object(mods["f" /* getOnlineStatus */])();
      this.online_status = user_online_status.message.toLowerCase();
      // //console.log('light api was called');
    },
    greetUser() {
      // Get the current time
      const now = new Date();
      const hours = now.getHours();

      // Greet the user based on the time
      let greeting;
      if (hours >= 5 && hours < 12) {
        this.greeting = 'Good morning,';
      } else if (hours >= 12 && hours < 18) {
        this.greeting = 'Good afternoon,';
      } else {
        this.greeting = 'Good evening,';
      }
    },
    formatDate(date) {
      const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
      const month = months[date.getMonth()];
      const day = date.getDate();
      const year = date.getFullYear();
      let hours = date.getHours();
      const minutes = ('0' + date.getMinutes()).slice(-2);
      const ampm = hours >= 12 ? 'pm' : 'am';
      hours = hours % 12;
      hours = hours ? hours : 12; // Handle midnight (0 hours)
      const formattedDate = `${month} ${day}, ${year} ${hours}:${minutes} ${ampm}`;
      return formattedDate;
    }
  },
  mounted() {
    //console.log('calling getUserDetails');
    this.getUserDetails();
    this.greetUser();
    const currentDate = new Date();
    this.dashboard_date = this.formatDate(currentDate);
  },
  created() {
    setInterval(async () => {
      await this.getOnlineStatusRoutineCall();
    }, 60000);
    // }, 300000);
  }
});
// CONCATENATED MODULE: ./pages/settings.vue?vue&type=script&lang=js
 /* harmony default export */ var pages_settingsvue_type_script_lang_js = (settingsvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/settings.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_settingsvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "8cfc73d6",
  "6aa2018c"
  
)

/* harmony default export */ var settings = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=settings.js.map