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
                        <h6 class="center black-text" style="font-weight:500;">
                            Hi, Welcome
                        </h6>
                        <p class="center" style="font-weight:500;">
                            Please enter your meter number
                        </p>
                        <div class="row" :class="{'hide': hidePreLoader}">
                            <div class="col s12 center">
                                <img src="~assets/images/logo.png" class="responsive-img heartbeat" style="max-width: 60px;">
                            </div>
                        </div>
                        <form @submit.prevent>
                            <div class="row">
                                <div class="input-field col s12">
                                    <input type="text" class="black-text" placeholder="Username" id="username" v-model="username" ref="username">
                                    <label for="username">Username</label>
                                </div>
                            </div>
                            <div class="row">
                                <div class="input-field col s12 center">
                                    <button class="red btn btn-large col s12" @click="confirmUsername()" style="border-radius: 10px 10px 10px 10px;">
                                        Next
                                    </button>
                                </div>
                            </div>
                            <div class="row">
                                <div class="input-field col s12 center">
                                    I already have an account
                                    <nuxt-link to="./" class="" style="width: 300px;" >
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
  import { passwordResetIntent } from '~/js_modules/mods'
  export default {
    data() {
        return {
            username: '',
            hidePreLoader: true,
            backgroundUrl,
        };
    },

    methods: {
        async confirmUsername() {
            M.toast({html: '<b class="yellow-text">Please wait...</b>'})
            this.username = this.username.trim()
            
            if (this.username == '') {
                M.toast({html: '<b class="yellow-text">Please enter a valid username</b>'})
            } else {
                let token = await passwordResetIntent(this.username)
                if (token == undefined || token.message == 'Invalid user details supplied!') {
                    M.toast({html: '<b class="red-text">Invalid user details supplied!</b>'})
                    this.hidePreLoader = true
                } else {
                    localStorage.setItem('jdotwdott', token.jws)
                    //console.log('jws: ', token.jws);
                    this.$router.push('./confirm_otp_reset_password')
                    this.hidePreLoader = true
                }
            }
            
        }
    }
}
</script>
