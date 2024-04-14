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
            Good morning,
          </b>
          <br>
          <b class="grey-text darken-4">
            Chizom Echehieuka
          </b> 
        </div>

        <div class="flexitem-notification">
          <i class="material-icons">notifications</i>
        </div>
      </div>
  
      <div class="row">
        <div class="card-panel red" style="border-radius: 10px;">

          <div class="flexcontainerinfo">

            <div class="white-text flex-icon-day">
              <img src="~assets/images/rainy.svg" class="responsive-img" style="max-width: 50px; filter: hue-rotate(180deg);" alt="">
            </div>

            <div class="flex-time">
              <span class="white-text" style="font-size: 12px;">
                May 16, 2023 10:05 am
              </span> <br>
              <span class="white-text" style="font-weight: 600; font-size: 20px;">
                Cloudy
              </span> <br>
              <span class="white-text" style="font-weight: 300; font-size: 12px;">
                Lagos, Nigeria
              </span>
            </div>

            <div class="flex-temperature">
              <span class="white-text" style="font-size: 50px;">
                19&deg;C
              </span>
            </div>

          </div>

          <div class="flexcontainerinfo" style="margin-top: 5px;">

            <div class="white-text flex-meter-number">
              <b class="black-text" style="background-color: yellow; padding: 5px; border-radius: 10px;">Meter number:</b> 3450834059834
            </div>

          </div>

        </div>

      </div>


      <!-- start of buttons -->

      <div class="row">

        <div class="flexcontainerbtn">
          
          <div class="card-panel orange flex-buttons" style="border-radius: 10px;">

            <div class="white-text center boarder-top">
              <img src="~assets/images/energy.svg" class="responsive-img" style="max-width: 50px; filter: hue-rotate(180deg);" alt="">
              <p>
                Energy Usage
              </p>
            </div>

          </div>

          <div style="width: 10px;"></div>

          <div class="card-panel orange flex-buttons" style="border-radius: 10px;">

            <div class="white-text center boarder-top">
              <img src="~assets/images/transaction.svg" class="responsive-img" style="max-width: 50px; filter: hue-rotate(180deg);" alt="">
              <p>
                Transaction History
              </p>
            </div>

          </div>

        </div>

      </div>


      <div class="row">

        <div class="flexcontainerbtn">
          
          <div class="card-panel orange flex-buttons" style="border-radius: 10px;">

            <div class="white-text center boarder-top">
              <img src="~assets/images/purchase.svg" class="responsive-img" style="max-width: 50px; filter: hue-rotate(180deg);" alt="">
              <p>
                Purchase Electricity
              </p>
            </div>

          </div>

          <div style="width: 10px;"></div>

          <div class="card-panel orange flex-buttons" style="border-radius: 10px;">

            <div class="white-text center boarder-top">
              <img src="~assets/images/remote.svg" class="responsive-img" style="max-width: 50px; filter: hue-rotate(180deg);" alt="">
              <p>
                Remote Loading
              </p>
            </div>

          </div>

        </div>

      </div>


      <!-- end of buttons -->



      <!-- ads starts here -->

      <div class="row">
        <div class="card-panel red" style="border-radius: 10px;">

          <div class="center">

            <h4 class="white-text">
              Ads
            </h4>

            <b class="white-text" style="font-size: 20px; font-weight: 700;">
              ...
            </b>

          </div>

        </div>

      </div>


      <!-- ads ends here -->
  
      
  
    </div>
    
  </template>
  
  
  
  
  <script>
  export default {
      layout: 'admin_main',

      data() {
        return {
          fullname: '',
  
          name: '',
          email: '',
          message: '',
  
          scheduleList: [],
  
        }
      },

      methods: {
        logOut() {
          if(process.client) {
            localStorage.removeItem('token')
            window.location = './'
          }
        },

        async getFullname() {
          // this.fullname = localStorage.getItem('fullname')
        }
      },

      created() {
        // this.getFullname()
      }
  }
  </script>
  
  
  <style scoped>
  </style>