<template>
    <div style="padding-top: 60px;" class="container">
      <!-- <div class="row">
        <div>
          <h6 class="red-text" style="font-weight: 100; margin-bottom: 20px;">
            Menu
          </h6>
        </div>
      </div> -->
      

      <div class="flexcontainer" style="margin-top: 10px;">
        <div class="flexitem-username">
          <nuxt-link to="./dashboard" class="btn btn-medium btn-flat red white-text" style="border-radius: 10px 0 0px 10px;">
            Back
          </nuxt-link>
          <b style="font-size: 20px; color: #757575; border-radius: 0 10px 10px 0; padding: 3px;" class="grey white-text">
            Remote token
          </b>
          <br>
          <b class="white-text darken-4">
            .......
          </b> 
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
          <!-- <i class="material-icons">notifications</i> -->
        </div>
      </div>
  
      <div class="row" style="margin-top: 20px;">
        <b class="grey-text darken-4">
            Meter number: {{ meter_number }}
          </b> 
        <div class="card-panel red" style="border-radius: 10px;">
            <!-- <b class="white-text darken-4" style="font-weight: 100;">
                meter number: {{ meter_number }}
            </b>  -->

            <input type="text" class="white-text center" name="token" maxlength="20" autocomplete="off" v-model="value"  placeholder="Enter token" disabled style="border-bottom: 0; font-size: 20px;">

        </div>

      </div>


      <!-- start of buttons -->

      <div class="row">
        <Keyboard @pressed="value = $event" :selfValue="value" @paste="handlePaste"></Keyboard>
      </div>

      <div class="row" style="margin-top: 20px;">
        <button class="btn btn-large col s12 orange black-text" @click="loadToken()" style="border-radius: 10px; font-weight: 400;">
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
            meter_number: ''
        }
      },

      methods: {
        handlePaste(key) {
          console.log('paste was clicked');
            
            let pasted_token = key
            pasted_token = pasted_token.trim()

            if (pasted_token == '') {
              
            } else {
              pasted_token = pasted_token.replace(/-/g, '')
              var isNumber = this.isNumeric(pasted_token)
              // p@$$word
              // 51453345797395467537
              // 73220538680890104971
              // 68336939399713961785
              // 00923354734425296452
              // 65481483520109203561

              if (isNumber == true) {
                this.value = pasted_token
                console.log('key pressed: ', key);
                M.toast({html: '<b class="yellow-text">Token code successfully pasted</b>'})
              } else {
                console.log('key pressed: ', key);
                console.log('this is not a valid meter number');
                M.toast({html: '<b class="red-text">Please check token and try again</b>'})
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
          M.toast({html: '<b class="yellow-text">Please wait</b>'})
          this.value = this.value.trim()
          if (this.value == '') {
            
          } else {
            let res = await loadToken(this.value)
            if(res.message == 'Token expired!') {
              let logoutRes = logOut()
              if (logoutRes.message = 0) {
                window.location = './'
              }
            } else if(res.code == '250') {
              this.value = 'Something went wrong. Try again!'
            } else {
              this.value = 'Token successfully loaded'
            }
            
          }
        },

        async getUserDetails() {
          let user_info = await getUserInfo()
          this.meter_number = user_info.meterNumber
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
  
  
  <style scoped>
  </style>