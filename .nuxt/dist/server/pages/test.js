exports.ids = [26];
exports.modules = {

/***/ 37:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/logo.e97530d.png";

/***/ }),

/***/ 39:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/angled_background.3974983.jpg";

/***/ }),

/***/ 72:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "videos/scm_video.fab312d.mp4";

/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/test.vue?vue&type=template&id=6ad6b202&style=background-color%3A%23fff%3B
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticStyle: {
      "background-color": "#fff"
    }
  }, [_vm.demo == true ? _vm._ssrNode("<div class=\"row full-width\" style=\"background-color:#fff;\">", "</div>", [_vm._ssrNode("<div" + _vm._ssrClass("row center-animation", {
    'hide': _vm.hideAnimation
  }) + "><div class=\"col s12 m6\" style=\"margin-top: 50px\"><div class=\"row center\"><div class=\"col s12\"><img" + _vm._ssrAttr("src", __webpack_require__(37)) + " alt class=\"responsive-img slide-in-bck-bottom\" style=\"width: 90px; height: 90px;\"></div> <div class=\"col s12\"><b class=\"text-focus-in\" style=\"font-weight: 700; font-size: 30px;\">\n              SCM CAPITAL\n            </b></div></div></div></div> "), _vm._ssrNode("<div" + _vm._ssrClass("row", {
    'hide': _vm.hideScmVideo
  }) + ">", "</div>", [_vm._ssrNode("<div class=\"col s12 m6 video-bg-container\">", "</div>", [_vm._ssrNode("<video autoplay=\"autoplay\" muted=\"muted\" loop=\"loop\" playsinline id=\"video-background\"><source" + _vm._ssrAttr("src", __webpack_require__(72)) + " type=\"video/mp4\">\n          Your browser does not support the video tag.\n        </video> "), _vm._ssrNode("<div class=\"container\" style=\"margin-top: 150%;\">", "</div>", [_vm._ssrNode("<div class=\"row\">", "</div>", [_vm._ssrNode("<div class=\"col s12\"></div> "), _vm._ssrNode("<div class=\"col s12\">", "</div>", [_vm._ssrNode("<div class=\"\">", "</div>", [_vm._ssrNode("<div class=\"card-content\">", "</div>", [_vm._ssrNode("<div class=\"row fade-in-bck\"><div class=\"col s12\"><div class=\"image-text-container\"><img" + _vm._ssrAttr("src", __webpack_require__(37)) + " alt class=\"responsive-img\" style=\"width: 50px; height: 50px;\"> <b class=\"image-text\" style=\"font-weight: 700; font-size: 30px; \">\n                            SCM CAPITAL\n                          </b></div></div></div> "), _vm._ssrNode("<div class=\"center\">", "</div>", [_vm._ssrNode("<div class=\"row\">", "</div>", [_vm._ssrNode("<div class=\"input-field\">", "</div>", [_vm._ssrNode("<button class=\"scmColor btn btn-large col s12\" style=\"border-radius:10px; margin-bottom: 30px;\">\n                                Log in\n                            </button> "), _c('nuxt-link', {
    staticClass: "black white-text btn btn-large col s12",
    staticStyle: {
      "border-radius": "10px"
    },
    attrs: {
      "to": "./signup"
    }
  }, [_vm._v("\n                                Sign up\n                            ")])], 2)])])], 2)])])], 2)])], 2)]), _vm._ssrNode(" <div" + _vm._ssrClass("row", {
    'hide': _vm.hideLoginForm
  }) + "><div class=\"col s12 m6\" style=\"margin-top: 50px\"><div class=\"row center\"></div> <div class=\"container\" style=\"background-color:#fff;\"><div class=\"row\"><div class=\"col s12\"><h4 class=\"black-text\" style=\"font-weight:500;\">\n                Login \n              </h4></div></div> <div class=\"row\"><div class=\"col s12\"><p class=\"black-text\" style=\"font-weight:200; margin-top:10px;\">Hi there, welcome! <b style=\"font-weight:800;\"></b></p> <b></b></div></div></div></div></div>")], 2) : _vm._e()]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/test.vue?vue&type=template&id=6ad6b202&style=background-color%3A%23fff%3B

// EXTERNAL MODULE: ./assets/images/angled_background.jpg
var angled_background = __webpack_require__(39);
var angled_background_default = /*#__PURE__*/__webpack_require__.n(angled_background);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/test.vue?vue&type=script&lang=js

// import { StatusBar, Style } from '@capacitor/status-bar';

/* harmony default export */ var testvue_type_script_lang_js = ({
  data() {
    return {
      backgroundUrl: angled_background_default.a,
      user_id: '',
      email: '',
      faceID_email: '',
      password: '',
      faceID_password: '',
      title: 'Biometric Login',
      reason: 'For easy log in',
      subtitle: 'Secure and convinient login.',
      description: 'Login using your biometric data.',
      server_for_faceID: "https://www.scmcapitalng.com/",
      hide_preloader: true,
      hidePassword: 'password',
      hideOpen: false,
      hideClose: true,
      demo: true,
      hideAnimation: false,
      hideLoginForm: true,
      hideScmVideo: true,
      hideHalfCircle: false
    };
  },
  methods: {
    showLoginScreen() {
      this.hideLoginForm = false;
      this.hideScmVideo = true;
      this.hideHalfCircle = false;
    },
    faceId() {
      this.performBiometricVerificatin();
    },
    async performBiometricVerificatin() {
      console.log('calling FaceId');
      const result = await NativeBiometric.isAvailable();
      if (!result.isAvailable) return;
      const isFaceID = result.biometryType == BiometryType.FACE_ID;
      const verified = await NativeBiometric.verifyIdentity({
        reason: this.reason,
        title: this.title,
        subtitle: this.subtitle,
        description: this.description
      }).then(() => true).catch(() => false);
      if (!verified) return;
      const credentials = await NativeBiometric.getCredentials({
        server: this.server_for_faceID
      });
      console.log('..............');
      console.log('..............');
      console.log('..............');
      console.log('..............');
      console.log(credentials.username);
      console.log(credentials.password);
      console.log(credentials.username);
      console.log(credentials.password);
      console.log('..............');
      console.log('..............');
      this.email = credentials.username;
      this.password = credentials.password;
      this.signIn();
      // console.log(credentials.methodName)
      // console.log('..............')
      // console.log('..............')
      // console.log(credentials.success)
      // console.log('..............')
      // console.log('..............')
      // console.log('..............')
    },
    // Save user's credentials
    setCredential() {
      let email = this.faceID_email.trim();
      let password = this.faceID_password.trim();
      if (email !== '' && password !== '') {
        NativeBiometric.setCredentials({
          username: email,
          password: password,
          server: this.server_for_faceID
        }).then();
      } else {
        M.toast({
          html: '<b class="red-text">Please enter your email and password</b>'
        });
      }
    },
    // Delete user's credentials
    deleteCredential() {
      NativeBiometric.deleteCredentials({
        server: this.server_for_faceID
      }).then();
    },
    async checkDemo() {
      let {
        data,
        error
      } = await this.$supabase.from('sys_admin').select('*');
      this.demo = data[0].demo;
    },
    async loadStatusBar() {
      // window.addEventListener('statusTap', function () {
      //   console.log('statusbar tapped');
      // });
      await StatusBar.show();
      console.log('status bar code was called');
    },
    togglePassword() {
      if (this.hidePassword == 'password') {
        this.hidePassword = 'text';
        this.hideOpen = true;
        this.hideClose = false;
      } else if (this.hidePassword == 'text') {
        this.hidePassword = 'password';
        this.hideOpen = false;
        this.hideClose = true;
      }
    },
    async signIn() {
      this.hide_preloader = false;
      this.email = this.email.trim();
      this.password = this.password.trim();
      if (this.email == '' || this.password == '') {
        M.toast({
          html: '<b class="red-text">Wrong email or password</b>'
        });
        this.hide_preloader = true;
      } else {
        const {
          data,
          error
        } = await this.$supabase.auth.signInWithPassword({
          email: this.email,
          password: this.password
        });
        if (data.user == null) {
          console.log(data.user);
          this.hide_preloader = true;
          M.toast({
            html: '<b class="red-text">Wrong email or password</b>'
          });
        } else {
          await this.authUser();
        }
      }
    },
    async checkVerification_status() {
      try {
        let {
          data,
          error
        } = await this.$supabase.from('bvn_verification').select('*').eq('user_id_fk', this.user_id);
        console.log('verification: ', data);
        this.faceID_email = this.email;
        this.faceID_password = this.password;
        if (data.length == 0 || data == null || data == undefined) {
          window.location = '../verify';
        } else {
          this.setCredential();
          window.location = '../dashboard';
        }
      } catch (error) {}
    },
    async authUser() {
      try {
        const {
          data,
          error
        } = await this.$supabase.auth.getSession();
        console.log(data.session);
        this.user_id = data.session.user.id;
        if (data.session == null || data.session == undefined) {
          console.log('it is null');
        } else {
          console.log(this.user_id);
          let {
            data,
            error
          } = await this.$supabase.from('user_info').select('*').eq('user_id_fk', this.user_id);
          let availableUser = data;
          // console.log('this is banned data from login ', data[0].banned)
          if (data[0].banned == true) {
            M.toast({
              html: '<b class="red-text">Please contact support on help@smccapitalng.com</b>'
            });
            this.hide_preloader = true;
          } else if (data[0].banned == false || data[0].banned == null) {
            setTimeout(() => {
              this.hide_preloader = false;
              this.checkVerification_status();
            }, 3000);
          }
          console.log('this is the data', data.length);
          if (availableUser.length == 0 || availableUser == null || availableUser == []) {
            console.log('this is zero');
            // window.location = './signup_user_info'
          } else {}
        }
      } catch (e) {
        console.log(e);
      }
    }
  },
  mounted() {
    // this.loadStatusBar()
  },
  created() {}
});
// CONCATENATED MODULE: ./pages/test.vue?vue&type=script&lang=js
 /* harmony default export */ var pages_testvue_type_script_lang_js = (testvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/test.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_testvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "65e28afb"
  
)

/* harmony default export */ var test = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=test.js.map