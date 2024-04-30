exports.ids = [10];
exports.modules = {

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return loginUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getUserInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return searchPaymentHistory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getPaymentHistory; });
/* unused harmony export changePassword */
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
async function changePassword() {
  let token = localStorage.getItem('jdotwdott');
  console.log('this is the token ', token);
  var passwords = "";
  passwords = {
    params: ["Test@001", "Test@001"]
  };
  passwords = JSON.stringify(passwords);
  try {
    const rawResponse = await fetch('https://api.ikejaelectric.com/idbwebapi/ie/v1/changepassword', {
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

/***/ }),

/***/ 45:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KDTwhLS0gVXBsb2FkZWQgdG86IFNWRyBSZXBvLCB3d3cuc3ZncmVwby5jb20sIFRyYW5zZm9ybWVkIGJ5OiBTVkcgUmVwbyBNaXhlciBUb29scyAtLT4KPHN2ZyBmaWxsPSIjZmZmZmZmIiB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBzdHJva2U9IiNmZmZmZmYiPgoNPGcgaWQ9IlNWR1JlcG9fYmdDYXJyaWVyIiBzdHJva2Utd2lkdGg9IjAiLz4KDTxnIGlkPSJTVkdSZXBvX3RyYWNlckNhcnJpZXIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgoNPGcgaWQ9IlNWR1JlcG9faWNvbkNhcnJpZXIiPgoNPHBhdGggZD0iTTEyLDEwaDdMOCwyMmwzLTlINUwxMywyWiIvPgoNPC9nPgoNPC9zdmc+"

/***/ }),

/***/ 46:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/transaction.b4c49f2.svg";

/***/ }),

/***/ 47:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/purchase.ac58b12.svg";

/***/ }),

/***/ 48:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/remote.a3b8f87.svg";

/***/ }),

/***/ 56:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/logout.7004a51.svg";

/***/ }),

/***/ 57:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/bulb_on.6dee91a.svg";

/***/ }),

/***/ 58:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48IS0tIFVwbG9hZGVkIHRvOiBTVkcgUmVwbywgd3d3LnN2Z3JlcG8uY29tLCBHZW5lcmF0b3I6IFNWRyBSZXBvIE1peGVyIFRvb2xzIC0tPgo8c3ZnIHdpZHRoPSI4MDBweCIgaGVpZ2h0PSI4MDBweCIgdmlld0JveD0iMCAwIDE1IDE1IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBkPSJNNy40OTk4OSAzQzUuNTI5NjggMyAzLjg1OTI4IDQuNDQ4NzIgMy41ODA2NSA2LjM5OTEzTDMuNTcwNiA2LjQ2OTQ5QzMuNDExMzkgNy41ODM5OCAzLjczMDMyIDguNjQ1NDMgNC4zNTk5OSA5LjQ1ODk1QzQuNzQzMzYgOS45NTQyNiA0Ljk5OTkgMTAuNDI3IDQuOTk5OSAxMC45MDEzVjEyLjVDNC45OTk5IDEyLjc3NjEgNS4yMjM3NiAxMyA1LjQ5OTkgMTNIOS40OTk5QzkuNzc2MDUgMTMgOS45OTk5IDEyLjc3NjEgOS45OTk5IDEyLjVWMTAuOTAxM0M5Ljk5OTkgMTAuNDI3IDEwLjI1NjQgOS45NTQyMyAxMC42Mzk4IDkuNDU4OTNDMTEuMjY5NSA4LjY0NTQxIDExLjU4ODQgNy41ODM5NyAxMS40MjkyIDYuNDY5NDlMMTEuNDE5MSA2LjM5OTE0QzExLjE0MDUgNC40NDg3MyA5LjQ3MDEgMyA3LjQ5OTg5IDNaIiBmaWxsPSIjMDAwMDAwIi8+CjxwYXRoIGQ9Ik01Ljk5OTkgMTVIOC45OTk5VjE0SDUuOTk5OVYxNVoiIGZpbGw9IiMwMDAwMDAiLz4KPC9zdmc+"

/***/ }),

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/dashboard.vue?vue&type=template&id=c5fe3eae&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "container",
    staticStyle: {
      "padding-top": "40px"
    }
  }, [_vm._ssrNode("<div class=\"flexcontainer\" style=\"margin-top: 10px;\" data-v-c5fe3eae><div class=\"flexitem-username\" data-v-c5fe3eae><b style=\"font-size: 20px; color: #757575;\" data-v-c5fe3eae>" + _vm._ssrEscape("\n        " + _vm._s(_vm.greeting) + "\n      ") + "</b> <br data-v-c5fe3eae></div> <div class=\"flexitem-notification\" data-v-c5fe3eae>" + (_vm.meter_reachable == true ? "<img" + _vm._ssrAttr("src", __webpack_require__(56)) + " alt class=\"responsive-img\" style=\"max-width: 30px; filter: hue-rotate(180deg);\" data-v-c5fe3eae>" : "<!---->") + "</div></div> <div class=\"row\" data-v-c5fe3eae><b class=\"grey-text darken-4\" data-v-c5fe3eae>" + _vm._ssrEscape("\n      " + _vm._s(_vm.account_name) + "\n    ") + "</b> <br data-v-c5fe3eae> <div class=\"card-panel red\" style=\"border-radius: 10px;\" data-v-c5fe3eae><div class=\"flexcontainerinfo\" data-v-c5fe3eae><div class=\"white-text flex-icon-day\" data-v-c5fe3eae>" + (_vm.meter_reachable == true ? "<img" + _vm._ssrAttr("src", __webpack_require__(57)) + " alt class=\"responsive-img\" style=\"max-width: 50px;\" data-v-c5fe3eae>" : "<!---->") + " " + (_vm.meter_reachable == false ? "<img" + _vm._ssrAttr("src", __webpack_require__(58)) + " alt class=\"responsive-img\" style=\"max-width: 50px; filter: hue-rotate(180deg);\" data-v-c5fe3eae>" : "<!---->") + "</div> <div class=\"flex-time\" data-v-c5fe3eae><span class=\"white-text\" style=\"font-size: 12px;\" data-v-c5fe3eae>" + _vm._ssrEscape("\n            " + _vm._s(_vm.dashboard_date) + "\n          ") + "</span> <br data-v-c5fe3eae> <span class=\"white-text\" style=\"font-weight: 600; font-size: 10px;\" data-v-c5fe3eae>\n            Account number:\n          </span> <br data-v-c5fe3eae> <span class=\"white-text\" style=\"font-weight: 300; font-size: 12px;\" data-v-c5fe3eae>" + _vm._ssrEscape("\n            " + _vm._s(_vm.account_number) + "\n          ") + "</span> <br data-v-c5fe3eae> <span class=\"white-text\" style=\"font-weight: 600; font-size: 10px;\" data-v-c5fe3eae>\n            Meter number:\n          </span><br data-v-c5fe3eae> <span class=\"white-text\" style=\"font-weight: 300; font-size: 12px;\" data-v-c5fe3eae>" + _vm._ssrEscape("\n            " + _vm._s(_vm.meter_number) + "\n          ") + "</span></div> <div class=\"flex-temperature\" data-v-c5fe3eae><b style=\"background-color: yellow; padding: 5px; border-radius: 10px;\" data-v-c5fe3eae>Tariff:</b> <br data-v-c5fe3eae> <span class=\"white-text\" style=\"font-size: 20px;\" data-v-c5fe3eae>" + _vm._ssrEscape("\n            " + _vm._s(_vm.tariff) + "\n          ") + "</span></div></div> <div class=\"flexcontainerinfo\" style=\"margin-top: 5px;\" data-v-c5fe3eae><div class=\"white-text flex-meter-number\" data-v-c5fe3eae></div></div></div></div> "), _vm._ssrNode("<div class=\"row\" data-v-c5fe3eae>", "</div>", [_vm._ssrNode("<div class=\"flexcontainerbtn\" data-v-c5fe3eae>", "</div>", [_vm._ssrNode("<div class=\"card-panel orange flex-buttons\" style=\"border-radius: 10px;\" data-v-c5fe3eae>", "</div>", [_vm._ssrNode("<div class=\"white-text center boarder-top\" data-v-c5fe3eae>", "</div>", [_c('nuxt-link', {
    attrs: {
      "to": "./energy_usage"
    }
  }, [_c('img', {
    staticClass: "responsive-img",
    staticStyle: {
      "max-width": "50px",
      "filter": "hue-rotate(180deg)"
    },
    attrs: {
      "src": __webpack_require__(45),
      "alt": ""
    }
  }), _vm._v(" "), _c('p', {
    staticClass: "button-text white-text"
  }, [_vm._v("\n              Energy Usage\n            ")])])], 1)]), _vm._ssrNode(" <div style=\"width: 10px;\" data-v-c5fe3eae></div> "), _vm._ssrNode("<div class=\"card-panel orange flex-buttons\" style=\"border-radius: 10px;\" data-v-c5fe3eae>", "</div>", [_vm._ssrNode("<div class=\"white-text center boarder-top\" data-v-c5fe3eae>", "</div>", [_c('nuxt-link', {
    attrs: {
      "to": "./trans_history"
    }
  }, [_c('img', {
    staticClass: "responsive-img",
    staticStyle: {
      "max-width": "50px",
      "filter": "hue-rotate(180deg)"
    },
    attrs: {
      "src": __webpack_require__(46),
      "alt": ""
    }
  }), _vm._v(" "), _c('p', {
    staticClass: "button-text white-text"
  }, [_vm._v("\n              Transaction History\n            ")])])], 1)])], 2)]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"row\" data-v-c5fe3eae>", "</div>", [_vm._ssrNode("<div class=\"flexcontainerbtn\" data-v-c5fe3eae>", "</div>", [_vm._ssrNode("<div class=\"card-panel orange flex-buttons\" style=\"border-radius: 10px;\" data-v-c5fe3eae><div class=\"white-text center boarder-top\" data-v-c5fe3eae><img" + _vm._ssrAttr("src", __webpack_require__(47)) + " alt class=\"responsive-img\" style=\"max-width: 50px; filter: hue-rotate(180deg);\" data-v-c5fe3eae> <p class=\"button-text white-text\" data-v-c5fe3eae>\n            Purchase Electricity\n          </p></div></div> <div style=\"width: 10px;\" data-v-c5fe3eae></div> "), _vm._ssrNode("<div class=\"card-panel orange flex-buttons\" style=\"border-radius: 10px;\" data-v-c5fe3eae>", "</div>", [_vm._ssrNode("<div class=\"white-text center boarder-top\" data-v-c5fe3eae>", "</div>", [_c('nuxt-link', {
    attrs: {
      "to": "./remote"
    }
  }, [_c('img', {
    staticClass: "responsive-img",
    staticStyle: {
      "max-width": "50px",
      "filter": "hue-rotate(180deg)"
    },
    attrs: {
      "src": __webpack_require__(48),
      "alt": ""
    }
  }), _vm._v(" "), _c('p', {
    staticClass: "button-text white-text"
  }, [_vm._v("\n              Remote Loading\n            ")])])], 1)])], 2)]), _vm._ssrNode(" <div class=\"row\" data-v-c5fe3eae><div class=\"card-panel red\" style=\"border-radius: 10px;\" data-v-c5fe3eae><div class=\"center\" data-v-c5fe3eae><h4 class=\"white-text\" data-v-c5fe3eae>\n          IE Ads\n        </h4> <b class=\"white-text\" style=\"font-size: 20px; font-weight: 700;\" data-v-c5fe3eae>\n          ...\n        </b></div></div></div>")], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/dashboard.vue?vue&type=template&id=c5fe3eae&scoped=true&

// EXTERNAL MODULE: ./js_modules/mods.js
var mods = __webpack_require__(41);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/dashboard.vue?vue&type=script&lang=js&

/* harmony default export */ var dashboardvue_type_script_lang_js_ = ({
  layout: 'admin_main',
  data() {
    return {
      account_name: '',
      account_number: '',
      meter_number: '',
      tariff: '',
      greeting: '',
      dashboard_date: '',
      meter_reachable: true,
      name: '',
      email: '',
      message: '',
      scheduleList: []
    };
  },
  methods: {
    logOut() {
      if (false) {}
    },
    async getUserDetails() {
      let user_info = await Object(mods["b" /* getUserInfo */])();
      this.account_name = user_info.accountName;
      this.account_number = user_info.accountNumber;
      this.meter_number = user_info.meterNumber;
      this.tariff = user_info.tariff;
      console.log('here is the ut ', this.account_name);
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
    console.log('calling getUserDetails');
    this.getUserDetails();
    this.greetUser();
    const currentDate = new Date();
    this.dashboard_date = this.formatDate(currentDate);
  },
  created() {}
});
// CONCATENATED MODULE: ./pages/dashboard.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_dashboardvue_type_script_lang_js_ = (dashboardvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/dashboard.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_dashboardvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "c5fe3eae",
  "32d73e0a"
  
)

/* harmony default export */ var dashboard = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=dashboard.js.map