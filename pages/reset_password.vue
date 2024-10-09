<template>
  <div style="padding-top: 0px;" class="container">

    <div class="flexcontainer" style="margin-top: 10px;">
      <div class="flexitem-username">
        <b style="font-size: 20px; color: #757575;" class="">
          Reset Password
        </b>
        <br>

      </div>

      <div class="flexitem-notification">
        <nuxt-link to="./settings">
          <img src="~assets/images/home.svg" class="responsive-img"
            style="max-width: 30px; filter: hue-rotate(180deg);" alt="">
        </nuxt-link>
      </div>
      <!-- <div class="flexitem-notification" @click="logOut()">
          <img src="~assets/images/logout.svg" v-if="meter_reachable == true" class="responsive-img"
            style="max-width: 30px; filter: hue-rotate(180deg);" alt="">
        </div> -->
    </div>

    <div class="row">



      <div class="flexcontainerbtn">

        <div class="col s12 m6" style="margin-top: 50px">
          <form @submit.prevent>
            <div class="row">
              <div class="input-field col s12">
                <input type="password" class="black-text" placeholder="New password" id="_newpassword"
                  v-model="new_password">
                <label for="new_password">New Password</label>
              </div>
            </div>
            <div class="row">
              <div class="input-field col s12">
                <input type="password" class="black-text" placeholder="Confirm password" id="confirm_password"
                  v-model="confirm_password">
                <label for="confirm_password">Confirm Password</label>
              </div>
            </div>
            <div class="row">
              <div class="input-field col s12 center">
                <button class="red btn btn-large col s12" @click="changeUsersPassword"
                  style="border-radius: 10px 10px 10px 10px;">
                  Proceed
                </button>
              </div>
            </div>

          </form>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import backgroundUrl from '~/assets/images/angled_background.jpg'
import PreLoader from '~/components/PreLoader.vue'
import { getUserInfo, changePassword } from '~/js_modules/mods'
export default {
  head() {
    return {// Other meta information
      script: [
        { hid: 'cryptojs', src: 'https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.0.0/crypto-js.min.js', defer: true }
      ]
    }
  },
  data() {
    return {
      backgroundUrl,
      new_password: '',
      confirm_password: '',
      hidePreLoader: true,
    }
  },

  methods: {

    async changeUsersPassword() {
      M.toast({ html: '<b class="yellow-text">Please wait...</b>' })
      this.hidePreLoader = false
      this.new_password = this.new_password.trim()
      this.confirm_password = this.confirm_password.trim()

      if (this.new_password == '' || this.confirm_password == '') {
        M.toast({ html: '<b class="red-text">One or more fields are empty</b>' })
        this.hidePreLoader = true
      } else if (this.new_password != this.confirm_password) {
        M.toast({ html: '<b class="red-text"> Passwords do not match</b>' })
        this.hidePreLoader = true
      } else {
        let passwordRes = await changePassword(this.new_password, this.confirm_password)
        if (passwordRes.message == 'Success!') {
          this.hidePreLoader = true
          this.$router.push('./success_password_change')
        } else if (passwordRes.message == 'Password must have at least a combination of lowercase, uppercase , number and special characters!') {
          M.toast({ html: '<b class="red-text">Password must have at least a combination of lowercase, uppercase , number and special characters!</b>' })
        } else if (passwordRes.message == 'Password size must not be less than 8 characters!') {
          M.toast({ html: '<b class="red-text">Password size must not be less than 8 characters!</b>' })
        } else if (passwordRes.message == 'Token expired!') {
          M.toast({ html: '<b class="red-text">Session expired</b>' })
          M.toast({ html: '<b class="red-text">Please login again</b>' })
          this.$router.push('./')
          localStorage.clear()
        } else {
          M.toast({ html: '<b class="red-text">Please try again later</b>' })
        }
      }


      //   if (this.username === '' || this.password === '') {
      //     M.toast({html: '<b class="red-text">Username or Password is empty!</b>'})
      //     this.hidePreLoader = true
      //   } else {
      //     let credentials = await loginUser(this.username, this.password)
      //     //console.log(credentials.u.roles[0]);
      //     if (credentials == undefined) {
      //       M.toast({html: '<b class="red-text">Check Username or Password!</b>'})
      //       this.hidePreLoader = true
      //     } else {
      //       localStorage.setItem('jdotwdott', credentials.jws)
      //       if (credentials.u.roles[0] == 'NEW') {
      //         this.$router.push('./reset_password')
      //       this.hidePreLoader = true
      //       } else {
      //         this.$router.push('./dashboard')
      //       this.hidePreLoader = true
      //       }

      //     }

      //   }






      // this.convertEmail(this.username, this.password)

      // //console.log(`username -> ${this.username}     password -> ${this.password}`)
      // this is the main condition to allow the use login
      // if (this.username === '' || this.password === '') {
      //   M.toast({html: '<b class="red-text">Username or Password is empty!</b>'})
      // } else {
      //   this.hidePreLoader = false
      //   this.convertEmail(this.username, this.password)

      // }
      // this.$router.push('./dashboard')

    },

    async getUserDetails() {
      let user_info = await getUserInfo()

      if (user_info.message == 'Token expired!') {
        localStorage.clear()
        this.$router.push('./')
      } else {

        this.account_name = user_info.accountName
        this.account_number = user_info.accountNumber
        this.meter_number = user_info.meterNumber
        this.tariff = user_info.tariff
        let user_online_status = await getOnlineStatus()
        this.online_status = user_online_status.message.toLowerCase()
        //console.log('here is the ut ', this.account_name);
      }
    },




  },

  mounted() {
    this.getUserDetails()
  },

  created() {
    setInterval(async () => {
      await this.getOnlineStatusRoutineCall();
    }, 60000);
    // this.testAPI()
    // let v = this.$store.state.token
    // //console.log(v)

    // this.$store.commit('setToken', '294039480398029842i42ik3lnsdkhgosih')

    // let vv = this.$store.getters.myGetter;
    // //console.log(vv)


  }
}
</script>