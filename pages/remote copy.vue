<template>
    <div style="padding-top: 40px;" class="container">
      <!-- <div class="row">
        <div>
          <h6 class="red-text" style="font-weight: 100; margin-bottom: 20px;">
            Menu
          </h6>
        </div>
      </div> -->

      <div class="flexcontainer" style="margin-top: 10px;">
        <div class="flexitem-username">
          <b style="font-size: 20px; color: #757575;" class="">
            Remote Token
          </b>
          <br>
          <b class="grey-text darken-4">
            meter number: {{ meter_number }}
          </b> 
        </div>

        <div class="flexitem-notification">
          <i class="material-icons">notifications</i>
        </div>
      </div>
  
      <div class="row">
        <div class="card-panel red" style="border-radius: 10px;">
            <!-- <b class="white-text darken-4" style="font-weight: 100;">
                meter number: {{ meter_number }}
            </b>  -->

            <input type="text" class="white-text center" name="token" maxlength="20" autocomplete="off" v-model="value"  placeholder="0000 0000 0000 0000 0000" disabled style="border-bottom: 0; font-size: 20px;">

        </div>

      </div>


      <!-- start of buttons -->

      <div class="row">
        <div class="input-field col s12" style="padding-top: 30px">
            <Keyboard @pressed="value = $event" :selfValue="value"></Keyboard>
        </div>
      </div>

      <div class="row">
        <nuxt-link to="./dashboard" class="btn btn-large col s12 red" style="border-radius: 10px;">
            Back
        </nuxt-link>
      </div>


      <!-- end of buttons -->

  
      
  
    </div>
    
  </template>
  
  
  
  
  <script>
  import Keyboard from '~/components/Keyboard.vue';


  export default {
      layout: 'admin_main',
      components: {
        Keyboard,
      },

      data() {
        return {
            value: '',
            meter_number: '23203042032042'
        }
      },

      methods: {

        

      },

      created() {
        // this.getFullname()
      }
  }
  </script>
  
  
  <style scoped>
  </style>