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
                            Kindly fill out your information to get you started.
                        </p>
                        <form @submit.prevent>
                            <div class="row">
                                <div class="input-field col s12">
                                    <input type="text" class="black-text" placeholder="" id="firstname" ref="firstname">
                                    <label for="firstname">First Name</label>
                                </div>
                            </div>
                            <div class="row">
                                <div class="input-field col s12">
                                    <input type="text" class="black-text" placeholder="" id="lastname" ref="lastname">
                                    <label for="lastname">Last Name</label>
                                </div>
                            </div>
                            <div class="row">
                                <div class="input-field col s12">
                                    <input type="text" class="black-text" placeholder="" id="email" ref="email">
                                    <label for="email">Email</label>
                                </div>
                            </div>
                            <div class="row">
                                <div class="input-field col s12">
                                    <input type="text" class="black-text" placeholder="" id="phonenumber" ref="phonenumber">
                                    <label for="phonenumber">Phone Number</label>
                                </div>
                            </div>
                            <div class="row">
                                <div class="input-field col s12">
                                    <input type="password" class="black-text" placeholder="" id="password">
                                    <label for="password">Password</label>
                                </div>
                            </div>
                            <div class="row">
                                <div class="input-field col s12">
                                    <input type="password" class="black-text" placeholder="" id="confirmpassword">
                                    <label for="confirmpassword">Confirm Password</label>
                                </div>
                            </div>
                            <div class="row">
                                <div class="input-field">
                                    <button class="customButtonColor btn btn-large col s12 red" style="border-radius: 10px 10px 10px 10px;">
                                        Create Account
                                    </button>
                                </div>
                                <div class="col s12 center" style="margin-top: 10px;">
                                    I already have an account? <nuxt-link class="orange-text" to="./" style="font-size:17px">Login</nuxt-link>
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
  export default {
    data() {
        return {
            backgroundUrl,
        };
    },
}
</script>
