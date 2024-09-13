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
                    Reset Password
                </b>
                <br>

            </div>

            <div class="flexitem-notification" @click="logOut()">
                <nuxt-link to="/settings">
                    <img src="~assets/images/settings.svg" v-if="meter_reachable == true" class="responsive-img"
                        style="max-width: 30px; filter: hue-rotate(180deg);" alt="">
                </nuxt-link>
            </div>
            <!-- <div class="flexitem-notification" @click="logOut()">
          <img src="~assets/images/logout.svg" v-if="meter_reachable == true" class="responsive-img"
            style="max-width: 30px; filter: hue-rotate(180deg);" alt="">
        </div> -->
        </div>
        <!-- #666060 color for svg -->


        <!-- start of buttons -->

        <div class="row">

            <div class="flexcontainerbtn">
                <div class="col s12 m6" style="margin-top: 100px">
                    <form @submit.prevent>
                        <div class="row">
                            <div class="input-field col s12">
                                <input type="password" class="black-text" placeholder="New password" id="_newpassword"
                                    v-model="new_password">
                                <label for="new_password">New Password</label>
                            </div>
                        </div>
                        <div class="row">
                            <div class="input-field col s12">
                                <input type="password" class="black-text" placeholder="Confirm password"
                                    id="confirm_password" v-model="confirm_password">
                                <label for="confirm_password">Confirm Password</label>
                            </div>
                        </div>
                        <div class="row">
                            <div class="input-field col s12 center">
                                <button class="red btn btn-large col s12" @click="changeUsersPassword"
                                    style="border-radius: 10px 10px 10px 10px;">
                                    Proceed
                                </button>
                            </div>
                        </div>

                    </form>
                </div>


            </div>

        </div>


        <!-- end of buttons -->



        <!-- ads starts here -->

        <!-- <div class="row">
            <div class="card-panel red" style="border-radius: 10px;">

                <div class="center">

                    <h4 class="white-text">
                        Logout
                    </h4>

                </div>

            </div>

        </div> -->


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

                this.account_name = user_info.accountName
                this.account_number = user_info.accountNumber
                this.meter_number = user_info.meterNumber
                this.tariff = user_info.tariff
                let user_online_status = await getOnlineStatus()
                this.online_status = user_online_status.message.toLowerCase()
                console.log('here is the ut ', this.account_name);
            }
        },

        async getOnlineStatusRoutineCall() {
            let user_online_status = await getOnlineStatus()
            this.online_status = user_online_status.message.toLowerCase()
            // console.log('light api was called');

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


<style scoped></style>