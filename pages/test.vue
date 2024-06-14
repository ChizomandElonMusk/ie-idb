<template style="background-color:#fff;">
    <div style="background-color:#fff;">
      
      <div class="row full-width " style="background-color:#fff;" v-if="demo == true">
  
        <div class="row center-animation" :class="{'hide': hideAnimation}">
  
          <!-- login section -->
          <div class="col s12 m6" style="margin-top: 50px">
            <!-- <TinaLogo/>-->
            <div class="row center">
              <div class="col s12">
                <img src="~/assets/images/logo.png" style="width: 90px; height: 90px;" class="responsive-img slide-in-bck-bottom"  alt=""/>
              </div> 
              <div class="col s12">
                <b class="text-focus-in" style="font-weight: 700; font-size: 30px;">
                  SCM CAPITAL
                </b>
              </div>
            </div>
              
            
  
          </div>
  
        </div>
  
  
  
        <!-- background video -->
  
        <div class="row" :class="{'hide': hideScmVideo}">
  
          <!-- login section -->
          <div class="col s12 m6 video-bg-container">
            
  
            <video autoplay muted loop playsinline id="video-background">
              <source src="~assets/images/scm_video.mp4" type="video/mp4">
              Your browser does not support the video tag.
            </video>
              
            <div class="container" style="margin-top: 150%;">
              <div class="row">
                  <div class="col s12"></div>
                  <div class="col s12">
                    <div class=" " >
                      <div class="card-content">
  
                        <div class="row fade-in-bck">
                          <div class="col s12">
                            <div class="image-text-container">
                              <img src="~/assets/images/logo.png" style="width: 50px; height: 50px;" class="responsive-img "  alt=""/>
                              <b class="image-text" style="font-weight: 700; font-size: 30px; ">
                                SCM CAPITAL
                              </b>
                            </div>
                          </div> 
                        </div>
                        
  
                        <div class="center">
                          <div class="row">
                            <div class="input-field">
                                <button class="scmColor btn btn-large col s12" style="border-radius:10px; margin-bottom: 30px;" @click="showLoginScreen()">
                                    Log in
                                </button>
                                <nuxt-link to="./signup" class="black white-text btn btn-large col s12" style="border-radius:10px;">
                                    Sign up
                                </nuxt-link>
                            </div>
                          </div>
                        </div>
                        
                      </div>
                    </div>
                  </div>
              </div>
            </div>
  
          </div>
  
        </div>
  
        <!-- end of background video -->
        
        
        <div class="row" :class="{'hide': hideLoginForm}">
  
          <!-- login section -->
          <div class="col s12 m6" style="margin-top: 50px">
            <!-- <TinaLogo/>-->
            <div class="row center">
              <!-- <img src="~/assets/images/logo.png" class=" responsive-img" width="90px" height="90px" alt=""/> -->
            </div>
            <div class="container" style="background-color:#fff;">
              <div class="row">
                <div class="col s12">
                  <h4 class="black-text" style="font-weight:500;">
                    Login 
                  </h4>
                </div>
              </div>
              <div class="row">
                <div class="col s12">
                  <p style="font-weight:200; margin-top:10px;" class="black-text">Hi there, welcome! <b style="font-weight:800;"></b></p>
                  <b></b>
                </div>
              </div>
            </div>
              
            
          
          </div>
  
        </div>
        
  
      </div>
  
  
  
  
      
  
  
    </div>
  </template>
  
  <script>
    import backgroundUrl from '~/assets/images/angled_background.jpg'
    // import { StatusBar, Style } from '@capacitor/status-bar';
  
    export default {
      data() {
        return {
          backgroundUrl,
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
          hideHalfCircle: false,
        }
      },
  
      methods: {
  
        showLoginScreen() {
          this.hideLoginForm = false
          this.hideScmVideo = true
          this.hideHalfCircle = false
        },
  
        faceId() {
          this.performBiometricVerificatin()
        },
  
        async performBiometricVerificatin(){
          console.log('calling FaceId')
          const result = await NativeBiometric.isAvailable();
  
          if(!result.isAvailable) return;
  
          const isFaceID = result.biometryType == BiometryType.FACE_ID;
  
          const verified = await NativeBiometric.verifyIdentity({
            reason: this.reason,
            title: this.title,
            subtitle: this.subtitle,
            description: this.description,
          })
            .then(() => true)
            .catch(() => false);
  
          if(!verified) return;
  
          const credentials = await NativeBiometric.getCredentials({
            server: this.server_for_faceID,
          });
          console.log('..............')
          console.log('..............')
          console.log('..............')
          console.log('..............')
          console.log(credentials.username)
          console.log(credentials.password)
          console.log(credentials.username)
          console.log(credentials.password)
          console.log('..............')
          console.log('..............')
  
          
          this.email = credentials.username
          this.password = credentials.password
          this.signIn()
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
          let email = this.faceID_email.trim()
          let password = this.faceID_password.trim()
          if(email !== '' && password !== '') {
            NativeBiometric.setCredentials({
              username: email,
              password: password,
              server: this.server_for_faceID,
            }).then();
          } else {
            M.toast({html: '<b class="red-text">Please enter your email and password</b>'})
          }
        },
  
        // Delete user's credentials
        deleteCredential() {
          NativeBiometric.deleteCredentials({
            server: this.server_for_faceID,
          }).then();
        },
  
        async checkDemo() {
          let { data, error } = await this.$supabase.from('sys_admin').select('*')
          this.demo = data[0].demo
        },
  
        async loadStatusBar() {
          // window.addEventListener('statusTap', function () {
          //   console.log('statusbar tapped');
          // });
          await StatusBar.show();
          console.log('status bar code was called')
        },
  
  
        togglePassword() {
            if(this.hidePassword == 'password') {
                this.hidePassword = 'text'
                this.hideOpen = true
                this.hideClose = false
            } else if(this.hidePassword == 'text') {
                this.hidePassword = 'password'
                this.hideOpen = false
                this.hideClose = true
            }
        },
  
        async signIn() {
          this.hide_preloader = false
          this.email = this.email.trim()
          this.password = this.password.trim()
  
          if(this.email == '' || this.password == '') {
            M.toast({html: '<b class="red-text">Wrong email or password</b>'})
            this.hide_preloader = true
          } else {
            const { data, error } = await this.$supabase.auth.signInWithPassword({
            email: this.email,
            password: this.password,
            })
  
            if(data.user == null) {
              console.log(data.user)
              this.hide_preloader = true
              M.toast({html: '<b class="red-text">Wrong email or password</b>'})
            } else {
              await this.authUser()
              
              
              
            }
          }
          
        },
  
        async checkVerification_status() {
          try {
            let { data, error } = await this.$supabase.from('bvn_verification').select('*').eq('user_id_fk', this.user_id)
            console.log('verification: ', data)
            this.faceID_email = this.email
            this.faceID_password = this.password
            if (data.length == 0 || data == null || data == undefined) {
              window.location = '../verify'
            } else {
              this.setCredential()
              window.location = '../dashboard'
  
            }
          } catch (error) {
            
          }
        },
  
        async authUser() {
          try {
              const { data, error } = await this.$supabase.auth.getSession()
              console.log(data.session)
              this.user_id = data.session.user.id
              if (data.session == null || data.session == undefined) {
                console.log('it is null')
              } else {
                
                console.log(this.user_id)
                let { data, error } = await this.$supabase.from('user_info').select('*').eq('user_id_fk', this.user_id)
  
                let availableUser = data
                // console.log('this is banned data from login ', data[0].banned)
                if (data[0].banned == true) {
                  M.toast({html: '<b class="red-text">Please contact support on help@smccapitalng.com</b>'})
                  this.hide_preloader = true
                } else if (data[0].banned == false || data[0].banned == null) {
                  setTimeout(()=> {
                    this.hide_preloader = false
                    this.checkVerification_status()
                    
                  }
                  ,3000);
                }
  
                console.log('this is the data', data.length)
                if (availableUser.length == 0 || availableUser == null || availableUser == []) {
                  console.log('this is zero')
                  // window.location = './signup_user_info'
                } else {
  
                }
              }
          } catch(e) {
              console.log(e)
          }
        },
  
      },
  
      mounted() {
        // this.loadStatusBar()
      },
  
      created() {
        
       
      }
    }
  </script>
  