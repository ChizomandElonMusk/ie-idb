exports.ids = [12];
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
function logOut() {
  if (false) {}
}

/***/ }),

/***/ 45:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/settings.c5edcc8.svg";

/***/ }),

/***/ 46:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KDTwhLS0gVXBsb2FkZWQgdG86IFNWRyBSZXBvLCB3d3cuc3ZncmVwby5jb20sIFRyYW5zZm9ybWVkIGJ5OiBTVkcgUmVwbyBNaXhlciBUb29scyAtLT4KPHN2ZyBmaWxsPSIjZmZmZmZmIiB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBzdHJva2U9IiNmZmZmZmYiPgoNPGcgaWQ9IlNWR1JlcG9fYmdDYXJyaWVyIiBzdHJva2Utd2lkdGg9IjAiLz4KDTxnIGlkPSJTVkdSZXBvX3RyYWNlckNhcnJpZXIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgoNPGcgaWQ9IlNWR1JlcG9faWNvbkNhcnJpZXIiPgoNPHBhdGggZD0iTTEyLDEwaDdMOCwyMmwzLTlINUwxMywyWiIvPgoNPC9nPgoNPC9zdmc+"

/***/ }),

/***/ 47:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/transaction.b4c49f2.svg";

/***/ }),

/***/ 48:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/purchase.ac58b12.svg";

/***/ }),

/***/ 49:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/remote.a3b8f87.svg";

/***/ }),

/***/ 55:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(64);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("4d63f3bf", content, true, context)
};

/***/ }),

/***/ 59:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/bulb_on.6dee91a.svg";

/***/ }),

/***/ 60:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48IS0tIFVwbG9hZGVkIHRvOiBTVkcgUmVwbywgd3d3LnN2Z3JlcG8uY29tLCBHZW5lcmF0b3I6IFNWRyBSZXBvIE1peGVyIFRvb2xzIC0tPgo8c3ZnIHdpZHRoPSI4MDBweCIgaGVpZ2h0PSI4MDBweCIgdmlld0JveD0iMCAwIDE1IDE1IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBkPSJNNy40OTk4OSAzQzUuNTI5NjggMyAzLjg1OTI4IDQuNDQ4NzIgMy41ODA2NSA2LjM5OTEzTDMuNTcwNiA2LjQ2OTQ5QzMuNDExMzkgNy41ODM5OCAzLjczMDMyIDguNjQ1NDMgNC4zNTk5OSA5LjQ1ODk1QzQuNzQzMzYgOS45NTQyNiA0Ljk5OTkgMTAuNDI3IDQuOTk5OSAxMC45MDEzVjEyLjVDNC45OTk5IDEyLjc3NjEgNS4yMjM3NiAxMyA1LjQ5OTkgMTNIOS40OTk5QzkuNzc2MDUgMTMgOS45OTk5IDEyLjc3NjEgOS45OTk5IDEyLjVWMTAuOTAxM0M5Ljk5OTkgMTAuNDI3IDEwLjI1NjQgOS45NTQyMyAxMC42Mzk4IDkuNDU4OTNDMTEuMjY5NSA4LjY0NTQxIDExLjU4ODQgNy41ODM5NyAxMS40MjkyIDYuNDY5NDlMMTEuNDE5MSA2LjM5OTE0QzExLjE0MDUgNC40NDg3MyA5LjQ3MDEgMyA3LjQ5OTg5IDNaIiBmaWxsPSIjMDAwMDAwIi8+CjxwYXRoIGQ9Ik01Ljk5OTkgMTVIOC45OTk5VjE0SDUuOTk5OVYxNVoiIGZpbGw9IiMwMDAwMDAiLz4KPC9zdmc+"

/***/ }),

/***/ 61:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KDTwhLS0gVXBsb2FkZWQgdG86IFNWRyBSZXBvLCB3d3cuc3ZncmVwby5jb20sIFRyYW5zZm9ybWVkIGJ5OiBTVkcgUmVwbyBNaXhlciBUb29scyAtLT4KPHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KDTxnIGlkPSJTVkdSZXBvX2JnQ2FycmllciIgc3Ryb2tlLXdpZHRoPSIwIi8+Cg08ZyBpZD0iU1ZHUmVwb190cmFjZXJDYXJyaWVyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KDTxnIGlkPSJTVkdSZXBvX2ljb25DYXJyaWVyIj4gPHBhdGggb3BhY2l0eT0iMC41IiBkPSJNMiAxMkMyIDcuMjg1OTUgMiA0LjkyODkzIDMuNDY0NDcgMy40NjQ0N0M0LjkyODkzIDIgNy4yODU5NSAyIDEyIDJDMTYuNzE0IDIgMTkuMDcxMSAyIDIwLjUzNTUgMy40NjQ0N0MyMiA0LjkyODkzIDIyIDcuMjg1OTUgMjIgMTJDMjIgMTYuNzE0IDIyIDE5LjA3MTEgMjAuNTM1NSAyMC41MzU1QzE5LjA3MTEgMjIgMTYuNzE0IDIyIDEyIDIyQzcuMjg1OTUgMjIgNC45Mjg5MyAyMiAzLjQ2NDQ3IDIwLjUzNTVDMiAxOS4wNzExIDIgMTYuNzE0IDIgMTJaIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMS41Ii8+IDxwYXRoIGQ9Ik0xNC41IDkuNTAwMDJMOS41IDE0LjVNOS40OTk5OCA5LjVMMTQuNSAxNC41IiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4gPC9nPgoNPC9zdmc+"

/***/ }),

/***/ 62:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KDTwhLS0gVXBsb2FkZWQgdG86IFNWRyBSZXBvLCB3d3cuc3ZncmVwby5jb20sIFRyYW5zZm9ybWVkIGJ5OiBTVkcgUmVwbyBNaXhlciBUb29scyAtLT4KPHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KDTxnIGlkPSJTVkdSZXBvX2JnQ2FycmllciIgc3Ryb2tlLXdpZHRoPSIwIi8+Cg08ZyBpZD0iU1ZHUmVwb190cmFjZXJDYXJyaWVyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KDTxnIGlkPSJTVkdSZXBvX2ljb25DYXJyaWVyIj4KDTxwYXRoIGQ9Ik00IDIxVjE4LjVDNCAxNS40NjI0IDYuNDYyNDMgMTMgOS41IDEzSDE0LjVDMTcuNTM3NiAxMyAyMCAxNS40NjI0IDIwIDE4LjVWMjFNOCAyMVYxOE0xNiAyMVYxOE0xMSA5SDcuNUM2LjY3MTU3IDkgNiA4LjMyODQzIDYgNy41VjYuNUM2IDUuMTY3MjUgNi41NzkzOCAzLjk2OTgzIDcuNSAzLjE0NTg1TTE4IDguMDAwMDFWNi41MDAwMUMxOCA1LjE2NzI2IDE3LjQyMDYgMy45Njk4MyAxNi41IDMuMTQ1ODVNMjAgNy41VjZNNCA3LjVWNk0xNiA3QzE2IDkuMjA5MTQgMTQuMjA5MSAxMSAxMiAxMUM5Ljc5MDg2IDExIDggOS4yMDkxNCA4IDdDOCA0Ljc5MDg2IDkuNzkwODYgMyAxMiAzQzE0LjIwOTEgMyAxNiA0Ljc5MDg2IDE2IDdaIiBzdHJva2U9IiNmZmYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjQiLz4KDTwvZz4KDTwvc3ZnPg=="

/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_style_index_0_id_87ae4efa_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(55);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_style_index_0_id_87ae4efa_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_style_index_0_id_87ae4efa_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_style_index_0_id_87ae4efa_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_style_index_0_id_87ae4efa_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 64:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".loading[data-v-87ae4efa]{overflow:hidden;position:relative}.loading[data-v-87ae4efa]:before{animation:glassReflection-87ae4efa 2s linear infinite;background:linear-gradient(90deg,hsla(0,0%,100%,0),hsla(0,0%,100%,.3),hsla(0,0%,100%,0));content:\"\";height:100%;left:-100%;position:absolute;top:0;transform:skewX(-25deg);width:50%}@keyframes glassReflection-87ae4efa{0%{left:-100%}to{left:200%}}.flexcontainerinfo[data-v-87ae4efa]{position:relative;z-index:1}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/dashboard.vue?vue&type=template&id=87ae4efa&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "container",
    staticStyle: {
      "padding-top": "0px"
    }
  }, [_vm._ssrNode("<div class=\"flexcontainer\" style=\"margin-top: 10px;\" data-v-87ae4efa>", "</div>", [_vm._ssrNode("<div class=\"flexitem-username\" data-v-87ae4efa><b style=\"font-size: 20px; color: #757575;\" data-v-87ae4efa>" + _vm._ssrEscape("\n          " + _vm._s(_vm.greeting) + "\n        ") + "</b> <br data-v-87ae4efa></div> "), _vm._ssrNode("<div class=\"flexitem-notification\" data-v-87ae4efa>", "</div>", [_c('nuxt-link', {
    attrs: {
      "to": "/settings"
    }
  }, [_c('img', {
    staticClass: "responsive-img",
    staticStyle: {
      "max-width": "30px",
      "filter": "hue-rotate(180deg)"
    },
    attrs: {
      "src": __webpack_require__(45),
      "alt": ""
    }
  })])], 1)], 2), _vm._ssrNode(" <div class=\"row\" data-v-87ae4efa><b" + _vm._ssrClass("grey-text darken-4", {
    'hide': _vm.hideAccountName
  }) + " data-v-87ae4efa>" + _vm._ssrEscape("\n        " + _vm._s(_vm.account_name) + "\n      ") + "</b> <b" + _vm._ssrClass("wave-dots", {
    'hide': _vm.hideWaveDot
  }) + " data-v-87ae4efa><span data-v-87ae4efa>.</span><span data-v-87ae4efa>.</span><span data-v-87ae4efa>.</span><span data-v-87ae4efa>.</span></b> <br data-v-87ae4efa> <div" + _vm._ssrClass("card-panel red loading", {
    'hide': _vm.hideLazyLoad
  }) + " style=\"border-radius: 10px;\" data-v-87ae4efa><div class=\"flexcontainerinfo\" data-v-87ae4efa><div class=\"white-text flex-icon-day\" data-v-87ae4efa></div> <div class=\"flex-time\" data-v-87ae4efa><span class=\"red-text\" style=\"font-size: 12px;\" data-v-87ae4efa></span> <br data-v-87ae4efa> <span class=\"red-text\" style=\"font-weight: 600; font-size: 10px;\" data-v-87ae4efa></span> <br data-v-87ae4efa> <span class=\"red-text\" style=\"font-weight: 300; font-size: 12px;\" data-v-87ae4efa></span> <br data-v-87ae4efa> <span class=\"red-text\" style=\"font-weight: 600; font-size: 10px;\" data-v-87ae4efa></span><br data-v-87ae4efa> <span class=\"red-text\" style=\"font-weight: 300; font-size: 12px;\" data-v-87ae4efa></span></div> <div class=\"flex-temperature\" data-v-87ae4efa></div></div> <div class=\"flexcontainerinfo\" style=\"margin-top: 5px;\" data-v-87ae4efa><div class=\"white-text flex-meter-number\" data-v-87ae4efa></div></div></div> <div" + _vm._ssrClass("card-panel red", {
    'hide': _vm.hideCardData
  }) + " style=\"border-radius: 10px;\" data-v-87ae4efa><div class=\"flexcontainerinfo\" data-v-87ae4efa><div" + _vm._ssrClass("white-text flex-icon-day", {
    'hide': _vm.defaultData
  }) + " data-v-87ae4efa>" + (_vm.online_status == 'online' ? "<img" + _vm._ssrAttr("src", __webpack_require__(59)) + " alt class=\"responsive-img\" style=\"max-width: 50px;\" data-v-87ae4efa>" : "<!---->") + " " + (_vm.online_status == 'offline' ? "<img" + _vm._ssrAttr("src", __webpack_require__(60)) + " alt class=\"responsive-img\" style=\"max-width: 50px;\" data-v-87ae4efa>" : "<!---->") + "</div> <div" + _vm._ssrClass("flex-time", {
    'hide': _vm.defaultData
  }) + " data-v-87ae4efa><span class=\"white-text\" style=\"font-size: 12px;\" data-v-87ae4efa>" + _vm._ssrEscape("\n              " + _vm._s(_vm.dashboard_date) + "\n            ") + "</span> <br data-v-87ae4efa> <span class=\"white-text\" style=\"font-weight: 600; font-size: 10px;\" data-v-87ae4efa>\n              Account number:\n            </span> <br data-v-87ae4efa> <span class=\"white-text\" style=\"font-weight: 300; font-size: 12px;\" data-v-87ae4efa>" + _vm._ssrEscape("\n              " + _vm._s(_vm.account_number) + "\n            ") + "</span> <br data-v-87ae4efa> <span class=\"white-text\" style=\"font-weight: 600; font-size: 10px;\" data-v-87ae4efa>\n              Meter number:\n            </span><br data-v-87ae4efa> <span class=\"white-text\" style=\"font-weight: 300; font-size: 12px;\" data-v-87ae4efa>" + _vm._ssrEscape("\n              " + _vm._s(_vm.meter_number) + "\n            ") + "</span></div> <div" + _vm._ssrClass("flex-temperature", {
    'hide': _vm.defaultData
  }) + " data-v-87ae4efa><b style=\"background-color: yellow; padding: 5px; border-radius: 7px; font-size: 10px;\" data-v-87ae4efa>" + _vm._ssrEscape("Band - " + _vm._s(_vm.tariff)) + "</b> <br data-v-87ae4efa></div> <div" + _vm._ssrClass("flex-time center", {
    'hide': _vm.energyBalance
  }) + " data-v-87ae4efa><p class=\"white-text\" style=\"font-size: 22px;\" data-v-87ae4efa>" + _vm._ssrEscape("\n              " + _vm._s(_vm.energy_balance_data) + "\n            ") + "</p> <img" + _vm._ssrAttr("src", __webpack_require__(61)) + " alt class=\"responsive-img\" style=\"max-width: 30px;\" data-v-87ae4efa></div></div> <div class=\"flexcontainerinfo\" style=\"margin-top: 5px;\" data-v-87ae4efa><div class=\"white-text flex-meter-number\" data-v-87ae4efa></div></div></div></div> "), _vm._ssrNode("<div class=\"row\" data-v-87ae4efa>", "</div>", [_vm._ssrNode("<div class=\"flexcontainerbtn\" data-v-87ae4efa>", "</div>", [_vm._ssrNode("<div class=\"card-panel orange flex-buttons\" style=\"border-radius: 10px;\" data-v-87ae4efa><div class=\"white-text center boarder-top\" data-v-87ae4efa><img" + _vm._ssrAttr("src", __webpack_require__(46)) + " alt class=\"responsive-img\" style=\"max-width: 50px; filter: hue-rotate(180deg);\" data-v-87ae4efa> <p class=\"button-text white-text\" data-v-87ae4efa>\n              Energy Balance\n            </p></div></div> <div style=\"width: 10px;\" data-v-87ae4efa></div> "), _vm._ssrNode("<div class=\"card-panel orange flex-buttons\" style=\"border-radius: 10px;\" data-v-87ae4efa>", "</div>", [_vm._ssrNode("<div class=\"white-text center boarder-top\" data-v-87ae4efa>", "</div>", [_c('nuxt-link', {
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
      "src": __webpack_require__(47),
      "alt": ""
    }
  }), _vm._v(" "), _c('p', {
    staticClass: "button-text white-text"
  }, [_vm._v("\n                Transaction History\n              ")])])], 1)])], 2)]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"row\" data-v-87ae4efa>", "</div>", [_vm._ssrNode("<div class=\"flexcontainerbtn\" data-v-87ae4efa>", "</div>", [_vm._ssrNode("<div class=\"card-panel orange flex-buttons\" style=\"border-radius: 10px;\" data-v-87ae4efa><a href=\"https://www.ie-payments.com/pay-bill\" target=\"_blank\" data-v-87ae4efa><div class=\"white-text center boarder-top\" data-v-87ae4efa><img" + _vm._ssrAttr("src", __webpack_require__(48)) + " alt class=\"responsive-img\" style=\"max-width: 50px; filter: hue-rotate(180deg);\" data-v-87ae4efa> <p class=\"button-text white-text\" data-v-87ae4efa>\n                Purchase Electricity\n              </p></div></a></div> <div style=\"width: 10px;\" data-v-87ae4efa></div> "), _vm._ssrNode("<div class=\"card-panel orange flex-buttons\" style=\"border-radius: 10px;\" data-v-87ae4efa>", "</div>", [_vm._ssrNode("<div class=\"white-text center boarder-top\" data-v-87ae4efa>", "</div>", [_c('nuxt-link', {
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
      "src": __webpack_require__(49),
      "alt": ""
    }
  }), _vm._v(" "), _c('p', {
    staticClass: "button-text white-text"
  }, [_vm._v("\n                Remote Loading\n              ")])])], 1)])], 2)]), _vm._ssrNode(" <div class=\"row\" data-v-87ae4efa><div class=\"card-panel red\" style=\"border-radius: 10px;\" data-v-87ae4efa><div class=\"center\" data-v-87ae4efa><a href=\"https://www.ikejaelectric.com/contact/\" target=\"_blank\" data-v-87ae4efa><img" + _vm._ssrAttr("src", __webpack_require__(62)) + " alt class=\"responsive-img\" style=\"max-width: 50px; filter: hue-rotate(180deg);\" data-v-87ae4efa> <br data-v-87ae4efa></a> <b class=\"white-text\" style=\"font-size: 10px; font-weight: 700;\" data-v-87ae4efa>\n            Customer Care\n          </b></div></div></div>")], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/dashboard.vue?vue&type=template&id=87ae4efa&scoped=true

// EXTERNAL MODULE: ./js_modules/mods.js
var mods = __webpack_require__(38);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/dashboard.vue?vue&type=script&lang=js

/* harmony default export */ var dashboardvue_type_script_lang_js = ({
  layout: 'admin_main',
  data() {
    return {
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
      energy_balance_data: 'Please wait...',
      hideCardData: true,
      hideLazyLoad: false,
      hideAccountName: true,
      hideWaveDot: false
    };
  },
  methods: {
    async showEnergyUsage() {
      this.energy_balance_data = 'Please wait...';
      this.defaultData = true;
      this.energyBalance = false;
      let ebdata = await Object(mods["d" /* energyBalance */])();
      ////console.log(ebdata);
      if (ebdata.data == undefined || ebdata.data == null) {
        this.energy_balance_data = 'Network error. Try again later';
      } else {
        this.energy_balance_data = ebdata.data;
        this.energy_balance_data = ' Balance: ' + this.energy_balance_data + ' KWH';
      }
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
      let user_info = await Object(mods["g" /* getUserInfo */])();
      if (user_info.message == 'Token expired!') {
        localStorage.clear();
        this.$router.push('./');
      } else {
        this.account_name = this.account_name.trim();
        this.account_name = user_info.accountName;
        if (this.account_name != '') {
          this.hideAccountName = false;
          this.hideWaveDot = true;
        }
        this.account_number = user_info.accountNumber;
        this.meter_number = user_info.meterNumber;
        this.tariff = user_info.feederBand;
        let user_online_status = await Object(mods["e" /* getOnlineStatus */])();
        if (user_online_status.message == 'Error encountered while processing request!') {
          this.online_status = 'offline';
          ////console.log('no timeer online was called');
        } else {
          this.online_status = user_online_status.message.toLowerCase();
        }
        this.hideLazyLoad = true;
        this.hideCardData = false;
        // ////console.log('this is for online status ', this.user_online_status);
        // ////console.log('here is the ut ', this.account_name);
      }
    },
    async getOnlineStatusRoutineCall() {
      let user_online_status = await Object(mods["e" /* getOnlineStatus */])();
      if (user_online_status.message == 'Error encountered while processing request!' || user_online_status.message == 'Token expired!') {
        this.online_status = 'offline';
      } else {
        this.online_status = user_online_status.message.toLowerCase();
      }
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
    ////console.log('calling getUserDetails');
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
// CONCATENATED MODULE: ./pages/dashboard.vue?vue&type=script&lang=js
 /* harmony default export */ var pages_dashboardvue_type_script_lang_js = (dashboardvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/dashboard.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(63)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_dashboardvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "87ae4efa",
  "32d73e0a"
  
)

/* harmony default export */ var dashboard = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=dashboard.js.map