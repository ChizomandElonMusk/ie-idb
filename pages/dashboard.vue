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
            {{ greeting }}
          </b>
          <br>
           
        </div>

        <div class="flexitem-notification" @click="logOut()">
          <!-- <i class="material-icons">notifications</i> -->
          <img src="~assets/images/logout.svg" v-if="meter_reachable == true" class="responsive-img" style="max-width: 30px; filter: hue-rotate(180deg);" alt="">
        </div>
      </div>
  
      <div class="row">
        <b class="grey-text darken-4">
          {{ account_name }}
        </b>
        <br>
        <div class="card-panel red" style="border-radius: 10px;">

          <div class="flexcontainerinfo">

            <div class="white-text flex-icon-day">
              <img src="~assets/images/bulb_on.svg" v-if="meter_reachable == true" class="responsive-img" style="max-width: 50px;" alt="">
              <img src="~assets/images/bulb_off.svg" v-if="meter_reachable == false" class="responsive-img" style="max-width: 50px; filter: hue-rotate(180deg);" alt="">
            </div>

            <div class="flex-time">
              <span class="white-text" style="font-size: 12px;">
                {{ dashboard_date }}
              </span> 
              <br>

              <span class="white-text" style="font-weight: 600; font-size: 10px;">
                Account number:
              </span> 
              <br>

              <span class="white-text" style="font-weight: 300; font-size: 12px;">
                {{ account_number }}
              </span>
              <br>

              <span class="white-text" style="font-weight: 600; font-size: 10px;">
                Meter number:
              </span><br>
              <span class="white-text" style="font-weight: 300; font-size: 12px;">
                {{ meter_number }}
              </span>

            </div>

            <div class="flex-temperature">
              <b style="background-color: yellow; padding: 5px; border-radius: 10px;">Tariff:</b> <br>
              <span class="white-text" style="font-size: 20px;">
                {{ tariff }}
              </span>
            </div>

          </div>

          <div class="flexcontainerinfo" style="margin-top: 5px;">

            <div class="white-text flex-meter-number">
              <!-- <b class="black-text" style="background-color: yellow; padding: 5px; border-radius: 10px;">Meter number:</b> {{ meter_number }} -->
            </div>

          </div>

        </div>

      </div>


      <!-- start of buttons -->

      <div class="row">

        <div class="flexcontainerbtn">
          
          <div class="card-panel orange flex-buttons" style="border-radius: 10px;">

            <div class="white-text center boarder-top">
              <nuxt-link to="./energy_usage">
                <img src="~assets/images/energy.svg" class="responsive-img" style="max-width: 50px; filter: hue-rotate(180deg);" alt="">
                <p class="button-text white-text">
                  Energy Usage
                </p>
              </nuxt-link>
            </div>

          </div>

          <div style="width: 10px;"></div>

          <div class="card-panel orange flex-buttons" style="border-radius: 10px;">

            <div class="white-text center boarder-top">
              <nuxt-link to="./trans_history">
                <img src="~assets/images/transaction.svg" class="responsive-img" style="max-width: 50px; filter: hue-rotate(180deg);" alt="">
                <p class="button-text white-text">
                  Transaction History
                </p>
              </nuxt-link>
              
            </div>

          </div>

        </div>

      </div>


      <div class="row">

        <div class="flexcontainerbtn">
          
          <div class="card-panel orange flex-buttons" style="border-radius: 10px;">

            <div class="white-text center boarder-top">
              <img src="~assets/images/purchase.svg" class="responsive-img" style="max-width: 50px; filter: hue-rotate(180deg);" alt="">
              <p class="button-text white-text">
                Purchase Electricity
              </p>
            </div>

          </div>

          <div style="width: 10px;"></div>

          <div class="card-panel orange flex-buttons" style="border-radius: 10px;">

            <div class="white-text center boarder-top">
              <nuxt-link to="./remote">
                <img src="~assets/images/remote.svg" class="responsive-img" style="max-width: 50px; filter: hue-rotate(180deg);" alt="">
                <p class="button-text white-text">
                  Remote Loading
                </p>
              </nuxt-link>
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
              IE Ads
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
  import { getUserInfo } from '~/js_modules/mods'
  export default {
      layout: 'admin_main',

      data() {
        return {
          account_name: '',
          account_number: '',
          meter_number: '',
          tariff: '',
          greeting: '',
          dashboard_date: '',
          meter_reachable: true,
  
          name: '',
          email: '',
          message: '',
  
          scheduleList: [],
  
        }
      },

      methods: {
        logOut() {
          if(process.client) {
            localStorage.clear()
            window.location = './'
          }
        },

        async getUserDetails() {
          let user_info = await getUserInfo()
          this.account_name = user_info.accountName
          this.account_number = user_info.accountNumber
          this.meter_number = user_info.meterNumber
          this.tariff = user_info.tariff
          console.log('here is the ut ', this.account_name);
        },

        greetUser() {
          // Get the current time
          const now = new Date();
          const hours = now.getHours();

          // Greet the user based on the time
          let greeting;
          if (hours >= 5 && hours < 12) {
              this.greeting = 'Good morning,';
            } else if (hours >= 12 && hours < 18) {
                this.greeting = 'Good afternoon,';
            } else {
                this.greeting = 'Good evening,';
          }
        },

        formatDate(date) {
            const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
            const month = months[date.getMonth()];
            const day = date.getDate();
            const year = date.getFullYear();
            let hours = date.getHours();
            const minutes = ('0' + date.getMinutes()).slice(-2);
            const ampm = hours >= 12 ? 'pm' : 'am';
            hours = hours % 12;
            hours = hours ? hours : 12; // Handle midnight (0 hours)
            const formattedDate = `${month} ${day}, ${year} ${hours}:${minutes} ${ampm}`;
            return formattedDate;
        }

      },
      
      mounted() {
        console.log('calling getUserDetails');
        this.getUserDetails()
        this.greetUser()
        const currentDate = new Date();
        this.dashboard_date = this.formatDate(currentDate)
      },

      created() {
        
      }
  }
  </script>
  
  
  <style scoped>
  </style>