<template>
  <div style="padding-top: 0px;" class="container">
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
        <nuxt-link to="/settings">
          <img src="~assets/images/settings.svg" class="responsive-img"
            style="max-width: 30px; filter: hue-rotate(180deg);" alt="">
        </nuxt-link>
      </div>
      <!-- <div class="flexitem-notification" @click="logOut()">
        <img src="~assets/images/logout.svg" v-if="meter_reachable == true" class="responsive-img"
          style="max-width: 30px; filter: hue-rotate(180deg);" alt="">
      </div> -->
    </div>
    <!-- #666060 color for svg -->

    <div class="row">
      <b class="grey-text darken-4" :class="{'hide': hideAccountName}">
        {{ account_name }}
      </b>
      <b class="wave-dots" :class="{'hide': hideWaveDot}">
          <span>.</span><span>.</span><span>.</span><span>.</span>
        </b>
      <br>


      <!-- start of loading card  -->
      <div class="card-panel red loading" :class="{'hide': hideLazyLoad}" style="border-radius: 10px;">

        <div class="flexcontainerinfo">

          <div class="white-text flex-icon-day">
            <!-- <img src="~assets/images/bulb_off.svg" class="responsive-img"
              style="max-width: 50px;" alt=""> -->

          </div>

          <div class="flex-time">
            <span class="red-text" style="font-size: 12px;">
              <!-- {{ dashboard_date }} -->
            </span>
            <br>

            <span class="red-text" style="font-weight: 600; font-size: 10px;">
              <!-- Account number: -->
            </span>
            <br>

            <span class="red-text" style="font-weight: 300; font-size: 12px;">
              <!-- {{ account_number }} -->
            </span>
            <br>

            <span class="red-text" style="font-weight: 600; font-size: 10px;">
              <!-- Meter number: -->
            </span><br>
            <span class="red-text" style="font-weight: 300; font-size: 12px;">
              <!-- {{ meter_number }} -->
            </span>

          </div>

          <div class="flex-temperature" >
           
            <!-- <span class="white-text" style="font-size: 20px;">
</span> -->
          </div>

        </div>

        <div class="flexcontainerinfo" style="margin-top: 5px;">

          <div class="white-text flex-meter-number">
            <!-- <b class="black-text" style="background-color: yellow; padding: 5px; border-radius: 10px;">Meter number:</b> {{ meter_number }} -->
          </div>

        </div>

      </div>
      <!-- end of loading card  -->




      <!-- start of data card  -->
      <div class="card-panel red" :class="{'hide': hideCardData}" style="border-radius: 10px;">

        <div class="flexcontainerinfo">

          <div class="white-text flex-icon-day" :class="{ 'hide': defaultData }">
            <!-- <b style="font-size: 10px; margin-top: 0px;" class="row">meter status</b> -->
            <img src="~assets/images/bulb_on.svg" v-if="online_status == 'online'" class="responsive-img"
              style="max-width: 50px;" alt="">
            <img src="~assets/images/bulb_off.svg" v-if="online_status == 'offline'" class="responsive-img"
              style="max-width: 50px;" alt="">

          </div>

          <div class="flex-time" :class="{ 'hide': defaultData }">
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

          <div class="flex-temperature" :class="{ 'hide': defaultData }">
            <b style="background-color: yellow; padding: 5px; border-radius: 7px; font-size: 10px;">Band - {{ tariff
              }}</b> <br>
            <!-- <span class="white-text" style="font-size: 20px;">
    </span> -->
          </div>



          <div class="flex-time center" :class="{ 'hide': energyBalance }">
            <p class="white-text" style="font-size: 22px;">
              {{ energy_balance_data }}
            </p>
            <img src="~assets/images/close.svg" class="responsive-img" style="max-width: 30px;" alt=""
              v-on:click="closeEnergyBalance">
          </div>



        </div>

        <div class="flexcontainerinfo" style="margin-top: 5px;">

          <div class="white-text flex-meter-number">
            <!-- <b class="black-text" style="background-color: yellow; padding: 5px; border-radius: 10px;">Meter number:</b> {{ meter_number }} -->
          </div>

        </div>

      </div>
      <!-- end of data card  -->

    </div>


    <!-- start of buttons -->

    <div class="row">

      <div class="flexcontainerbtn">

        <div class="card-panel orange flex-buttons" style="border-radius: 10px;">

          <div class="white-text center boarder-top" v-on:click="showEnergyUsage">
            <img src="~assets/images/energy.svg" class="responsive-img"
              style="max-width: 50px; filter: hue-rotate(180deg);" alt="">
            <p class="button-text white-text">
              Energy Balance
            </p>
          </div>

        </div>

        <div style="width: 10px;"></div>

        <div class="card-panel orange flex-buttons" style="border-radius: 10px;">

          <div class="white-text center boarder-top">
            <nuxt-link to="./trans_history">
              <img src="~assets/images/transaction.svg" class="responsive-img"
                style="max-width: 50px; filter: hue-rotate(180deg);" alt="">
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

          <a href="https://www.ie-payments.com/pay-bill" target="_blank">
            <div class="white-text center boarder-top">
              <img src="~assets/images/purchase.svg" class="responsive-img"
                style="max-width: 50px; filter: hue-rotate(180deg);" alt="">
              <p class="button-text white-text">
                Purchase Electricity
              </p>
            </div>
          </a>

        </div>

        <div style="width: 10px;"></div>

        <div class="card-panel orange flex-buttons" style="border-radius: 10px;">

          <div class="white-text center boarder-top">
            <nuxt-link to="./remote">
              <img src="~assets/images/remote.svg" class="responsive-img"
                style="max-width: 50px; filter: hue-rotate(180deg);" alt="">
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

          <a href="https://www.ikejaelectric.com/contact/" target="_blank">
            <img src="~assets/images/customer_care.svg" class="responsive-img"
              style="max-width: 50px; filter: hue-rotate(180deg);" alt="">
            <br>
          </a>

          <b class="white-text" style="font-size: 10px; font-weight: 700;">
            Customer Care
          </b>

        </div>

      </div>

    </div>


    <!-- ads ends here -->



  </div>

</template>




<script>
import { getUserInfo, getOnlineStatus, energyBalance } from '~/js_modules/mods'
export default {
  layout: 'admin_main',

  data() {
    return {
      account_name: '',
      account_number: '',
      meter_number: '',
      tariff: '',
      online_status: 'offline',
      greeting: '',
      dashboard_date: '',
      meter_reachable: true,

      name: '',
      email: '',
      message: '',

      scheduleList: [],
      defaultData: false,
      energyBalance: true,
      energy_balance_data: 'Please wait...',

      hideCardData: true,
      hideLazyLoad: false,
      hideAccountName: true, 
      hideWaveDot: false,

    }
  },

  methods: {
    logOut() {
      if (process.client) {
        localStorage.clear()
        window.location = './'
      }
    },

    async showEnergyUsage() {
      this.energy_balance_data = 'Please wait...'
      this.defaultData = true
      this.energyBalance = false
      let ebdata = await energyBalance()
      console.log(ebdata);
      if (ebdata.data == undefined || ebdata.data == null) {
        this.energy_balance_data = 'Network error. Try again later'
      } else {
        this.energy_balance_data = ebdata.data
        this.energy_balance_data = ' Balance: ' + this.energy_balance_data + ' KWH'
      }

    },

    closeEnergyBalance() {
      this.defaultData = false
      this.energyBalance = true
    },

    getFirstLetter(text) {
      // Check if the input text is not empty
      if (text && text.length > 0) {
        // Get the first character of the text and convert it to uppercase
        return 'Band-' + text.charAt(0).toUpperCase();
      } else {
        // Return an empty string if the input text is empty
        return '';
      }
    },

    async getUserDetails() {
      let user_info = await getUserInfo()

      if (user_info.message == 'Token expired!') {
        localStorage.clear()
        this.$router.push('./')
      } else {

        this.account_name = this.account_name.trim()
        this.account_name = user_info.accountName
        if(this.account_name != '') {
          this.hideAccountName = false
          this.hideWaveDot = true
        }
        this.account_number = user_info.accountNumber
        this.meter_number = user_info.meterNumber
        this.tariff = user_info.feederBand
        let user_online_status = await getOnlineStatus()
        if (user_online_status.message == 'Error encountered while processing request!') {
          this.online_status = 'offline'
          console.log('no timeer online was called');
        } else {
          this.online_status = user_online_status.message.toLowerCase()
        }

        this.hideLazyLoad = true
        this.hideCardData = false
        // console.log('this is for online status ', this.user_online_status);
        // console.log('here is the ut ', this.account_name);
      }
    },

    async getOnlineStatusRoutineCall() {
      let user_online_status = await getOnlineStatus()
      if (user_online_status.message == 'Error encountered while processing request!') {
        this.online_status = 'offline'
        console.log('>> with timeer online was called');
      } else {
        this.online_status = user_online_status.message.toLowerCase()
      }

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
    setInterval(async () => {
      await this.getOnlineStatusRoutineCall();
    }, 60000);
    // }, 300000);
  }
}
</script>


<style scoped>

.loading {
    position: relative;
    overflow: hidden;
}

.loading::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 50%;
    height: 100%;
    background: linear-gradient(
        to right,
        rgba(255, 255, 255, 0),
        rgba(255, 255, 255, 0.3),
        rgba(255, 255, 255, 0)
    );
    transform: skewX(-25deg);
    animation: glassReflection 2s linear infinite;
}

@keyframes glassReflection {
    0% {
        left: -100%;
    }
    100% {
        left: 200%;
    }
}

.flexcontainerinfo {
    position: relative;
    z-index: 1;
}
</style>