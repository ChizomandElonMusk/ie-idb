<template>
    <div style="padding-left: 40px; padding-right: 40px; padding-top: 20px;">

      <div class="row">
        <Logo style="margin-bottom: 30px; margin-top: 100px;"/>
      </div>
  
      <div class="row">
        <div class="row">
          <div class="col s12 center">
            <b class="red-text">IDB</b>
          </div>
        </div>
        <br>

        <div class="row">
          <div class="col s12 center">
            <b class="grey-text">Version 1.0.0</b>
          </div>
        </div>

        <div class="row">
          <div class="col s12 center">
            <b class="grey-text">Copyright Ikeja Electric, <br> All rights Reserved</b>
          </div>
        </div>

        <div class="row" style="margin-top: 40px">
          <div class="col s12 center">
            <nuxt-link to="./settings" style="border-radius: 10px;">
              <img src="~assets/images/home.svg" class="responsive-img"
              style="max-width: 50px; filter: hue-rotate(180deg);" alt="">
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