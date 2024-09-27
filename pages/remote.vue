<template>
  <div style="padding-top: 0px;" class="container">
    <!-- <div class="row">
        <div>
          <h6 class="red-text" style="font-weight: 100; margin-bottom: 20px;">
            Menu
          </h6>
        </div>
      </div> -->


    <div class="flexcontainer" style="margin-top: 10px;">
      <div class="flexitem-username">
        <b style="font-size: 20px; color: #757575;">
          Remote token
        </b>
        <br>
      </div>

      <!-- <div class="flexitem-username">
          <b style="font-size: 20px; color: #757575;" class="">
            Remote token
          </b>
          <br>
          <b class="grey-text darken-4">
            meter number: {{ meter_number }}
          </b> 
        </div> -->

      <div class="flexitem-notification">
        <nuxt-link to="./dashboard">
          <img src="~assets/images/home.svg" class="responsive-img" style="max-width: 30px; filter: hue-rotate(180deg);"
            alt="">
        </nuxt-link>
      </div>

    </div>

    <div class="row" style="margin-top: 20px;">
      <b class="grey-text darken-4">
        Meter number: 
        <b :class="{'hide': hideMeterNumber}">
          {{ meter_number }}
        </b>
        <b class="wave-dots" :class="{'hide': hideWaveDot}">
          <span>.</span><span>.</span><span>.</span><span>.</span>
        </b>
      </b>
      <div class="card-panel red" style="border-radius: 10px;">
        <!-- <b class="white-text darken-4" style="font-weight: 100;">
                meter number: {{ meter_number }}
            </b>  -->

        <input type="text" class="white-text center" name="token" maxlength="20" autocomplete="off" v-model="value"
          placeholder="Enter token" disabled style="border-bottom: 0; font-size: 20px;">

      </div>

    </div>


    <!-- start of buttons -->

    <div class="row">
      <Keyboard @pressed="value = $event" :selfValue="value" @paste="handlePaste"></Keyboard>
    </div>

    <div class="row" style="margin-top: 20px;">
      <button class="btn btn-large col s12 orange black-text" @click="loadToken()"
        style="border-radius: 10px; font-weight: 400;">
        <b>Load token</b>
      </button>
    </div>

    <br>


    <!-- end of buttons -->




  </div>

</template>




<script>
import Keyboard from '~/components/Keyboard.vue';
import { getUserInfo, loadToken, logOut } from '~/js_modules/mods'

export default {
  layout: 'admin_main',
  components: {
    Keyboard,
  },

  data() {
    return {
      value: '',
      pastedContent: '',
      meter_number: '',

      hideMeterNumber: true,
      hideWaveDot: false,
    }
  },

  methods: {
    // handlePaste(key) {
    //   console.log('Paste was handled');

    //   let pasted_token = key.trim();

    //   if (pasted_token === '') {
    //     this.showToast('Please paste a non-empty value', 'red');
    //     return;
    //   }

    //   pasted_token = pasted_token.replace(/-/g, '');

    //   if (this.isValidMeterNumber(pasted_token)) {
    //     this.value = pasted_token;
    //     console.log('Valid token pasted:', pasted_token);
    //     this.showToast('Token code successfully pasted', 'green');
    //   } else {
    //     console.log('Invalid token pasted:', pasted_token);
    //     this.showToast('Please check token and try again', 'red');
    //   }
    // },
    // isValidMeterNumber(number) {
    //   // Adjust this regex pattern to match your specific meter number format
    //   const meterNumberPattern = /^\d{20}$/;
    //   return meterNumberPattern.test(number);
    // },
    // showToast(message, color) {
    //   // Assuming you're using Materialize for toasts
    //   M.toast({html: `<b class="${color}-text">${this.escapeHtml(message)}</b>`});
    // },
    // escapeHtml(unsafe) {
    //   return unsafe
    //     .replace(/&/g, "&amp;")
    //     .replace(/</g, "&lt;")
    //     .replace(/>/g, "&gt;")
    //     .replace(/"/g, "&quot;")
    //     .replace(/'/g, "&#039;");
    // },
    // handlePasteError(error) {
    //   console.error('Paste error:', error);
    //   this.showToast(error, 'red');
    // },


    handlePaste(key) {
      console.log('paste was clicked');

      let pasted_token = key
      pasted_token = pasted_token.trim()

      if (pasted_token == '') {

      } else {
        pasted_token = pasted_token.replace(/-/g, '')
        var isNumber = this.isNumeric(pasted_token)

        if (isNumber == true) {
          this.value = pasted_token
          console.log('key pressed: ', key);
          M.toast({ html: '<b class="yellow-text">Token code successfully pasted</b>' })
        } else {
          console.log('key pressed: ', key);
          console.log('this is not a valid meter number');
          M.toast({ html: '<b class="red-text">Please check token and try again</b>' })
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
      M.toast({ html: '<b class="yellow-text">Please wait</b>' })
      this.value = this.value.trim()
      if (this.value == '') {

      } else {
        let res = await loadToken(this.value)
        if (res.message == 'Token expired!') {
          let logoutRes = logOut()
          if (logoutRes.message = 0) {
            window.location = './'
          }
        } else if (res.code == '250') {
          this.value = 'Something went wrong. Try again!'
        } else {
          this.value = 'Token successfully loaded'
        }

      }
    },

    async getUserDetails() {
      this.meter_number = this.meter_number.trim()
      let user_info = await getUserInfo()
      this.meter_number = user_info.meterNumber

      if(this.meter_number != ''){
        this.hideMeterNumber = false
        this.hideWaveDot = true
      }
      
    },



  },

  mounted() {
    this.getUserDetails()
  },

  created() {
    // this.getFullname()
  }
}
</script>


<style scoped></style>