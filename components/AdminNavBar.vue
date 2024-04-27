<template>
    <div>
      
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>

    </div>
  </template>
  
  <script>
  export default {
    name: 'AdminNavBar',


    methods: {
      logOut() {
        if(process.client) {
          localStorage.removeItem('jdotwdott')
          window.location = './'
        }
      },

      checkToken() {
        if(process.client) {
          let token = localStorage.getItem('jdotwdott')
          if (token === null || token == '') {
            this.$router.push('./')
          }
        }
      }
    },

    mounted() {
      M.AutoInit();
      

      
    },

    created() {
      this.checkToken()
    }
  }
  
  </script>
  
  <style scoped>
  ::placeholder {
    color: red;
  }
  </style>