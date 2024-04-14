<template>
    <div style="padding-left: 40px; padding-right: 40px; padding-top: 20px;">

      <div class="row">
        <Logo style="margin-bottom: 50px; margin-top: 100px;"/>
      </div>
  
      <div class="row">
        <div class="row">
          <div class="col s12 center">
            <b class="red-text">IE Mobi-Form</b>
          </div>
        </div>
        <br>

        <div class="row">
          <div class="col s12 center">
            <b>Version 1.0.0</b>
          </div>
        </div>

        <div class="row">
          <div class="col s12 center">
            <b>Copyright Ikeja Electric, All rights Reserved</b>
          </div>
        </div>

        <div class="row" style="margin-top: 40px">
          <div class="col s12 center">
            <nuxt-link class="btn btn-large red" to="./dashboard">
                Back
            </nuxt-link>
          </div>
        </div>

      </div>
  
      
  
    </div>
    
  </template>
  
  
  
  
  <script>
  export default {
      layout: 'admin_main',

      data() {
        return {
  
        }
      },

      methods: {
      },

      created() {

      }
  }
  </script>
  
  
  <style scoped>
  </style>