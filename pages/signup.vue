<template>
    <div>

        <div class="row full-width">
            <div class="col s12 m6" style="margin-top: 60px">
                <Logo />

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

                                    <div class="row" :class="{ 'hide': hidePreLoader }">
                                        <div class="col s12 center">
                                            <img src="~assets/images/logo.png" class="responsive-img heartbeat"
                                                style="max-width: 60px;">
                                        </div>
                                    </div>
                                    <form @submit.prevent>
                                        <div class="row">
                                            <div class="input-field col s12">
                                                <input type="text" class="black-text" placeholder="Meter number"
                                                    id="meter_number" v-model="meter_number" ref="meter_number">
                                                <label for="meter_number">Meter number</label>
                                            </div>
                                            <div class="input-field col s12 center">
                                                <b class="red-text" style="font-weight:500;">
                                                    {{ errorMessage }}
                                                </b>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="input-field col s12 center">
                                                <button class="red btn btn-large col s12"
                                                    @click="sendRegistrationIntent"
                                                    style="border-radius: 10px 10px 10px 10px;">
                                                    Send
                                                </button>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="input-field col s12 center">
                                                I already have an account
                                                <nuxt-link to="./" class="" style="width: 300px;">
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

            <div class="col s12 m6 full-width hide-on-small-and-down"
                :style="{ backgroundImage: `url(${backgroundUrl})` }">

            </div>

        </div>
    </div>
</template>

<script>
import backgroundUrl from '~/assets/images/angled_background.jpg'
import { registerIntent } from '~/js_modules/mods'
export default {
    data() {
        return {
            meter_number: '',
            hidePreLoader: true,
            errorMessage: '',
            backgroundUrl,
        };
    },

    methods: {
        async sendRegistrationIntent() {
            M.toast({ html: '<b class="yellow-text">Please wait...</b>' })
            this.errorMessage = ''
            this.meter_number = this.meter_number.trim()

            if (this.meter_number == '') {
                M.toast({ html: '<b class="yellow-text">Please enter a valid meter number</b>' })
            } else {
                let token = await registerIntent(this.meter_number)
                console.log('this is the meter number: ', this.meter_number);
                console.log('this is the response from registerIntent: ', token);
                if (token.code == '02') {
                    M.toast({ html: `<b class="red-text">${token.message}</b>` })
                    this.hidePreLoader = true
                    this.errorMessage = token.message
                } else if (token.jws !== '') {
                    localStorage.setItem('jdotwdott', token.jws)
                    //console.log('jws: ', token.jws);
                    this.$router.push('./confirm_otp')
                    this.hidePreLoader = true
                }
            }

        }
    }
}
</script>
