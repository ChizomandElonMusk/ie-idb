exports.ids = [9,3,4];
exports.modules = {

/***/ 34:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/logo.e97530d.png";

/***/ }),

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Logo.vue?vue&type=template&id=ac56e43a&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<div class=\"row\" style=\"margin-top: 0px\"><div class=\"col s12 m3\"></div> <div class=\"col s12 m6 center\"><img" + _vm._ssrAttr("src", __webpack_require__(34)) + " alt class=\"responsive-img circle\" style=\"max-width:100px; max-height:100px\"></div> <div class=\"col s12 m3\"></div></div>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Logo.vue?vue&type=template&id=ac56e43a&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Logo.vue?vue&type=script&lang=js&
/* harmony default export */ var Logovue_type_script_lang_js_ = ({
  name: 'TinaLogo'
});
// CONCATENATED MODULE: ./components/Logo.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Logovue_type_script_lang_js_ = (Logovue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Logo.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Logovue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "73e52696"
  
)

/* harmony default export */ var Logo = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 36:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/angled_background.3974983.jpg";

/***/ }),

/***/ 37:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/PreLoader.vue?vue&type=template&id=daccfba6&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<div class=\"preloader-wrapper active\"><div class=\"spinner-layer spinner-red-only\"><div class=\"circle-clipper left\"><div class=\"circle\"></div></div><div class=\"gap-patch\"><div class=\"circle\"></div></div><div class=\"circle-clipper right\"><div class=\"circle\"></div></div></div></div>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/PreLoader.vue?vue&type=template&id=daccfba6&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/PreLoader.vue?vue&type=script&lang=js&
/* harmony default export */ var PreLoadervue_type_script_lang_js_ = ({});
// CONCATENATED MODULE: ./components/PreLoader.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_PreLoadervue_type_script_lang_js_ = (PreLoadervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/PreLoader.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_PreLoadervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "20bd1f8a"
  
)

/* harmony default export */ var PreLoader = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=7c29ff1c&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<div class=\"row full-width\">", "</div>", [_vm._ssrNode("<div class=\"col s12 m6\" style=\"margin-top: 130px\">", "</div>", [_c('Logo'), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"row\">", "</div>", [_vm._ssrNode("<h5 class=\"center red-text\">\n              IDB\n            </h5> "), _c('PreLoader', {
    staticClass: "center",
    class: {
      'hide': _vm.hidePreLoader
    }
  })], 2), _vm._ssrNode(" "), _vm._ssrNode("<form>", "</form>", [_vm._ssrNode("<div class=\"row\"><div class=\"input-field col s12\"><input type=\"text\" placeholder id=\"username\"" + _vm._ssrAttr("value", _vm.username) + " class=\"black-text focus\"> <label for=\"username\">Username</label></div></div> <div class=\"row\"><div class=\"input-field col s12\"><input type=\"password\" placeholder id=\"password\"" + _vm._ssrAttr("value", _vm.password) + " class=\"black-text\"> <label for=\"password\">Password</label></div></div> <div class=\"row\"><div class=\"input-field col s12 center\"><button class=\"red btn btn-large col s12\">\n                          Login\n                      </button></div></div> "), _vm._ssrNode("<div class=\"row\">", "</div>", [_vm._ssrNode("<div class=\"input-field col s12 center\">", "</div>", [_vm._ssrNode("\n                    Create a free account\n                      "), _c('nuxt-link', {
    staticStyle: {
      "width": "300px"
    },
    attrs: {
      "to": "./signup"
    }
  }, [_vm._v("\n                          Signup\n                      ")])], 2)])], 2)], 2)], 2), _vm._ssrNode(" <div class=\"col s12 m6 full-width hide-on-small-and-down\"" + _vm._ssrStyle(null, {
    backgroundImage: `url(${_vm.backgroundUrl})`
  }, null) + "></div>")], 2)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=7c29ff1c&

// EXTERNAL MODULE: ./assets/images/angled_background.jpg
var angled_background = __webpack_require__(36);
var angled_background_default = /*#__PURE__*/__webpack_require__.n(angled_background);

// EXTERNAL MODULE: ./components/PreLoader.vue + 4 modules
var PreLoader = __webpack_require__(37);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=script&lang=js&


/* harmony default export */ var lib_vue_loader_options_pagesvue_type_script_lang_js_ = ({
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
      username: 'cechehieuka',
      password: '@@@1KingGod1234',
      hidePreLoader: true
    };
  },
  methods: {
    signIn() {
      M.toast({
        html: '<b class="yellow-text">Please wait...</b>'
      });
      // this.$router.push('./dashboard')
      this.username = this.username.trim();
      this.password = this.password.trim();
      // this.convertEmail(this.username, this.password)

      // console.log(`username -> ${this.username}     password -> ${this.password}`)
      // this is the main condition to allow the use login
      // if (this.username === '' || this.password === '') {
      //   M.toast({html: '<b class="red-text">Username or Password is empty!</b>'})
      // } else {
      //   this.hidePreLoader = false
      //   this.convertEmail(this.username, this.password)

      // }
      this.$router.push('./dashboard');
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
// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pagesvue_type_script_lang_js_ = (lib_vue_loader_options_pagesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "6f448fb9"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Logo: __webpack_require__(35).default,PreLoader: __webpack_require__(37).default})


/***/ })

};;
//# sourceMappingURL=index.js.map