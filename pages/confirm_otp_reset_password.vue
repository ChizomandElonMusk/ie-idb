<template>
    <div>
      
      <div class="row full-width">
        <div class="col s12 m6" style="margin-top: 60px">
          <Logo/>
          
          <div class="container">
            <div class="row">
                <div class="col s12"></div>
                <div class="col s12">
                    <div class=" white darken-4">
                        <div class="card-content">
                          <p class="center" style="font-weight:500;">
                              Please enter the token sent to your email
                          </p>
                          <div class="row" :class="{'hide': hidePreLoader}">
                              <div class="col s12 center">
                                  <img src="~assets/images/logo.png" class="responsive-img heartbeat" style="max-width: 60px;">
                              </div>
                          </div>
                          <form @submit.prevent>
                              <div class="row">
                                  <div class="input-field col s12">
                                      <input type="text" class="black-text" placeholder="Enter Token" id="user_otp" v-model="user_otp" ref="user_otp">
                                      <label for="user_otp">Enter token</label>
                                  </div>
                              </div>
                              <div class="row">
                                  <div class="input-field col s12 center">
                                      <button class="red btn btn-large col s12" @click="sendOtp()" style="border-radius: 10px 10px 10px 10px;">
                                          Send
                                      </button>
                                  </div>
                              </div>
                          </form>
                        </div>
                    </div>
                </div>
                <!-- <div class="col s12 m3"></div> -->
            </div>
          </div>
  
        </div>
        
        <div class="col s12 m6 full-width hide-on-small-and-down" :style="{ backgroundImage: `url(${backgroundUrl})` }">
  
        </div>
  
      </div>
    </div>
  </template>
  
  <script>
    import backgroundUrl from '~/assets/images/angled_background.jpg'
    import { confirmPasswordResetToken } from '~/js_modules/mods'
    export default {
      data() {
          return {
              user_otp: '',
              hidePreLoader: true,
              backgroundUrl,
          };
      },
  
      methods: {
          async sendOtp() {
              M.toast({html: '<b class="yellow-text">Please wait...</b>'})
              this.user_otp = this.user_otp.trim()
              
              if (this.user_otp == '') {
                  M.toast({html: '<b class="yellow-text">Please enter the otp sent to your email</b>'})
              } else {
                  let response = await confirmPasswordResetToken(this.user_otp)
                  if (response == undefined || response.message == 'Invalid reset operation detected!') {
                      M.toast({html: '<b class="red-text">Invalid reset operation detected!</b>'})
                      this.hidePreLoader = true
                  } else if (response.message == 'Your request processed successfully. Please check your email for details!'){
                      localStorage.clear()
                      this.$router.push('./success_forgotten_password_reset')
                      this.hidePreLoader = true
                  } else {
                    M.toast({html: '<b class="red-text">There was an error while proccessing your request!</b>'})
                  }
              }
              
          }
      }
  }
  </script>
  