<template>
  <div>

    <div class="row full-width">
      <div class="col s12 m6" style="margin-top: 130px">

        <div class="container">

          <div class="row" :class="{ 'hide': hidePreLoader }">
            <div class="col s12 center">
              <img src="~assets/images/logo.png" class="responsive-img" :class="{ 'heartbeat': startHeartBeat }"
                style="max-width: 60px;">
            </div>
          </div>

          <div class="row">
            <h5 class="center red-text">
              IDB <b style="font-size: 10px; font-weight: 300;">Alpha version 0.0.1</b>
            </h5>
            <!-- <PreLoader class="center" :class="{'hide': hidePreLoader}"/> -->


          </div>
          <form @submit.prevent>
            <div class="row">
              <div class="input-field col s12">
                <input type="text" class="black-text focus" placeholder="" id="username" ref="username"
                  v-model="username">
                <label for="username">Username</label>
              </div>
            </div>
            <div class="row">
              <div class="input-field col s12">
                <input type="password" class="black-text" placeholder="" id="password" v-model="password">
                <label for="password">Password</label>
              </div>
            </div>
            <div class="row">
              <div class="input-field col s12 center">
                <button class="red btn btn-large col s12" @click="signIn" style="border-radius: 10px 10px 10px 10px;">
                  Login
                </button>
              </div>
            </div>
            <div class="row">
              <div class="input-field col s12 center">
                Create a free account
                <nuxt-link to="./signup" class="" style="width: 300px;">
                  Signup
                </nuxt-link>
              </div>
            </div>
            <div class="row">
              <div class="input-field col s12 center">
                <nuxt-link to="./forgot" class="" style="width: 300px;">
                  Forgot password
                </nuxt-link>
              </div>
            </div>

          </form>
        </div>
      </div>

      <div class="col s12 m6 full-width hide-on-small-and-down" :style="{ backgroundImage: `url(${backgroundUrl})` }">

      </div>

    </div>
  </div>
</template>

<script>
import backgroundUrl from '~/assets/images/angled_background.jpg'
import PreLoader from '~/components/PreLoader.vue'
import { loginUser } from '~/js_modules/mods'
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
      username: 'cechehieuka@ikejaelectric.com',
      password: 'Chizom@2',
      // username: '',
      // username: 'test@gmail.com',
      // username2: '',
      // password: 'p@$$word',
      // password: '',
      password2: '',
      hidePreLoader: false,
      startHeartBeat: false,
    }
  },

  methods: {

    async signIn() {
      M.toast({ html: '<b class="yellow-text">Please wait...</b>' })
      this.hidePreLoader = false
      this.startHeartBeat = true
      // this.username = this.username.trim()
      // this.password = this.password.trim()

      // start of for test only
      // if (this.username !== 'test@gmail.com' && this.password !== 'p@$$word') {
      //   M.toast({ html: '<b class="red-text">Wrong email and password!</b>' })
      // } else {
      //   this.username2 = 'cechehieuka@ikejaelectric.com'
      //   this.password2 = 'Chizom.@1'

      //   if (this.username2 === '' || this.password2 === '') {
      //     M.toast({ html: '<b class="red-text">Username or Password is empty!</b>' })
      //     // this.hidePreLoader = true
      //     this.startHeartBeat = false
      //   } else {
      //     let credentials = await loginUser(this.username2, this.password2)
      //     console.log(credentials);
      //     if (credentials == undefined || credentials.message == 'Error encountered while processing request!') {
      //       M.toast({ html: '<b class="red-text">Check Username or Password!</b>' })
      //       // this.hidePreLoader = true
      //       this.startHeartBeat = false
      //     } else {
      //       localStorage.setItem('jdotwdott', credentials.jws)
      //       if (credentials.u.roles[0] == 'NEW') {
      //         this.$router.push('./reset_password')
      //         // this.hidePreLoader = true
      //         this.startHeartBeat = false
      //       } else if (credentials.u.roles[0] == 'REGULAR') {
      //         this.$router.push('./dashboard')
      //         // this.hidePreLoader = true
      //         this.startHeartBeat = false
      //       }

      //     }

      //   }
      // }

      // end of for test only


      if (this.username === '' || this.password === '') {
        M.toast({ html: '<b class="red-text">Username or Password is empty!</b>' })
        // this.hidePreLoader = true
        this.startHeartBeat = false
      } else {
        let credentials = await loginUser(this.username, this.password)
        console.log(credentials);
        if (credentials == undefined || credentials.message == 'Error encountered while processing request!') {
          M.toast({ html: '<b class="red-text">Check Username or Password!</b>' })
          // this.hidePreLoader = true
          this.startHeartBeat = false
        } else {
          localStorage.setItem('jdotwdott', credentials.jws)
          if (credentials.u.roles[0] == 'NEW') {
            this.$router.push('./reset_password')
            // this.hidePreLoader = true
            this.startHeartBeat = false
          } else if (credentials.u.roles[0] == 'REGULAR') {
            this.$router.push('./dashboard')
            // this.hidePreLoader = true
            this.startHeartBeat = false
          }

        }

      }






      // this.convertEmail(this.username, this.password)

      // console.log(`username -> ${this.username}     password -> ${this.password}`)
      // this is the main condition to allow the use login
      // if (this.username === '' || this.password === '') {
      //   M.toast({html: '<b class="red-text">Username or Password is empty!</b>'})
      // } else {
      //   this.hidePreLoader = false
      //   this.convertEmail(this.username, this.password)

      // }
      // this.$router.push('./dashboard')

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

      let encrptionKey = 'astsk@#$001!!!*&^'
      let username = uname
      let pWord = password

      // let encrytedUsername = this.encryptWithAes256(username, encrptionKey)
      let encrytedUsername = username
      let encrytedPassword = this.encryptWithAes256(pWord, encrptionKey)

      // console.log(`username -> ${encrytedUsername}   password -> ${encrytedPassword}`)

      console.log('trying api now........')

      try {



        const rawResponse = await fetch('http://192.168.6.183:8087/cwfrestapi/api/v1/auth/login', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            usernameOrEmail: encrytedUsername,
            password: encrytedPassword,
          })
        });

        console.log('content is being converted to json')
        const content = await rawResponse.json();

        console.log(content)


        let responseCode = content.code
        let message = content.message

        console.log('if statement is being ran to check response')
        if (responseCode == "09" || responseCode == null || responseCode == undefined) {

          M.toast({ html: `<b class="red-text">${message}</b>` })
          this.hidePreLoader = true

        } else if (responseCode === '00') {

          M.toast({ html: `<b class="green-text">Welcome</b>` })
          let token = content.token
          let userId = content.userId

          if (process.client) {
            localStorage.setItem('token', token)
            localStorage.setItem('userId', userId)
            // localStorage.setItem('fullname', `${content.payload.first_name} ${content.payload.last_name}`)
          }

          this.hidePreLoader = true
          this.$router.push('./dashboard')
        }





      } catch (error) {
        console.log(`Your error says -> ${error}`)
        M.toast({ html: `<b class="red-text">${error}</b>` })
        this.hidePreLoader = true
      }



    },


    encryptWithAes256(messageToEncrypt, encryptorKey) {

      // Generate random 16 bytes salt
      var salt = CryptoJS.lib.WordArray.random(128 / 8);

      // Derive key
      var key = CryptoJS.PBKDF2(
        encryptorKey,
        salt,
        { keySize: 256 / 32, iterations: 1000, hasher: CryptoJS.algo.SHA512 }     // Apply SHA512
      );
      // console.log("derived key:\n" + key);

      // Generate random 16 bytes init vector (iv)
      var iv = CryptoJS.lib.WordArray.random(128 / 8);

      // Encrypt
      var cipherText = CryptoJS.AES.encrypt(messageToEncrypt, key, { iv: iv });

      // Concatenate
      var encryptedData = salt.clone().concat(iv).concat(cipherText.ciphertext);  // Concatenate on binary level
      var encryptedDataB64 = encryptedData.toString(CryptoJS.enc.Base64);         // Base64 encode the result
      // console.log("aes encrypted text:\n", encryptedDataB64.replace(/(.{56})/g,'$1\n')); 
      return encryptedDataB64.replace(/(.{56})/g, '$1\n');
    },

  },

  created() {
    // this.testAPI()
    // let v = this.$store.state.token
    // console.log(v)

    // this.$store.commit('setToken', '294039480398029842i42ik3lnsdkhgosih')

    // let vv = this.$store.getters.myGetter;
    // console.log(vv)


  }
}
</script>