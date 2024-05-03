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
                          <p class="center green-text" style="font-weight:800; font-size: 30px;">
                              Successfully changed password!
                          </p>
                          <div class="row" :class="{'hide': hidePreLoader}">
                              <div class="col s12 center">
                                  <img src="~assets/images/logo.png" class="responsive-img heartbeat" style="max-width: 60px;">
                              </div>
                          </div>
                          <form @submit.prevent>
                              <div class="row">
                                  <div class="input-field col s12 center">
                                    <nuxt-link to="./" class="red btn btn-large col s12" style="border-radius: 10px 10px 10px 10px;">
                                        Login
                                    </nuxt-link>
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
    import { confirmOtp } from '~/js_modules/mods'
    export default {
      data() {
          return {
              user_otp: '',
              hidePreLoader: true,
              backgroundUrl,
          };
      },
  
      methods: {
         
      }
  }
  </script>
  