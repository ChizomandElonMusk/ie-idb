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
                    Settings
                </b>
                <br>

            </div>

            <div class="flexitem-notification" @click="logOut()">
                <nuxt-link to="./dashboard">
                    <img src="~assets/images/home.svg" class="responsive-img"
                        style="max-width: 30px; filter: hue-rotate(180deg);" alt="">
                </nuxt-link>
            </div>
            <!-- <div class="flexitem-notification" @click="logOut()">
          <img src="~assets/images/logout.svg" v-if="meter_reachable == true" class="responsive-img"
            style="max-width: 30px; filter: hue-rotate(180deg);" alt="">
        </div> -->
        </div>
        <!-- #666060 color for svg -->

        <!-- <div class="row">
            <b class="grey-text darken-4">
                {{ account_name }}
            </b>
            <br>
            <div class="card-panel red" style="border-radius: 10px;">

                <div class="flexcontainerinfo">

                    <div class="white-text flex-icon-day" :class="{ 'hide': defaultData }">
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
                        <b style="background-color: yellow; padding: 5px; border-radius: 10px;">Band:</b> <br>
                        <span class="white-text" style="font-size: 20px;">
                            {{ getFirstLetter(tariff) }}
                        </span>
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
                    </div>

                </div>

            </div>

        </div> -->


        <!-- start of buttons -->

        <div class="row" :class="{ 'hide': hideSettingsView }">

            <div class="flexcontainerbtn">

                <div class="card-panel orange flex-buttons" style="border-radius: 10px;">

                    <div class="white-text center boarder-top" v-on:click="showEnergyUsage">
                        <nuxt-link to="./reset_password">
                            <img src="~assets/images/reset_password.svg" class="responsive-img"
                                style="max-width: 50px; filter: hue-rotate(180deg);" alt="">
                            <p class="button-text white-text">
                                Reset Password
                            </p>
                        </nuxt-link>
                    </div>

                </div>

                <div style="width: 10px;"></div>

                <div class="card-panel orange flex-buttons" style="border-radius: 10px;">

                    <div class="white-text center boarder-top">
                        <nuxt-link to="./about">
                            <img src="~assets/images/about.svg" class="responsive-img"
                                style="max-width: 50px; filter: hue-rotate(180deg);" alt="">
                            <p class="button-text white-text">
                                About
                            </p>
                        </nuxt-link>

                    </div>

                </div>

            </div>

        </div>


        <div class="row" :class="{ 'hide': hideSettingsView }">

            <div class="flexcontainerbtn">

                <div class="card-panel orange flex-buttons" style="border-radius: 10px;">

                    <div class="white-text center boarder-top" @click="deleteAccount()">
                        <div to="./trans_history">
                            <img src="~assets/images/delete.svg" class="responsive-img"
                                style="max-width: 50px; filter: hue-rotate(180deg);" alt="">
                            <p class="button-text white-text">
                                Delete Account
                            </p>
                        </div>

                    </div>

                </div>

            </div>

        </div>


        <div class="row" :class="{ 'hide': hideDeleteDialog }">

            <div class="flexcontainerbtn">

                <div class="card-panel white flex-buttons" style="border-radius: 10px;">
                    <div class="black-text center boarder-top">
                        <div>
                            <b>Delete Your Account?</b>
                            <p class="button-text black-text left-align ">
                                Are you sure you want to delete your account? This action is permanent and cannot be
                                undone. Here’s what will happen:
                                <br>
                                <br>

                                All your data (e.g., profile information, preferences) will be permanently deleted.

                                <br>
                                You will lose access to all services and features associated with your account.

                                <br>

                                You will no longer be able to recover your account or its data.
                            </p>
                        </div>

                        <div class="row" style="padding: 10px;">
                            <div class="col s6">
                                <button class="btn btn-large red" @click="yesDeleteAccount()">
                                    Delete
                                </button>
                            </div>
                            <div class="col s6">
                                <button class="btn btn-large white red-text" @click="cancelDelete()">
                                    Cancel
                                </button>
                            </div>
                        </div>

                    </div>

                </div>

            </div>

        </div>


        <div class="row" :class="{ 'hide': hideSettingsView }">

            <div class="flexcontainerbtn">

                <div class="card-panel red flex-buttons" style="border-radius: 10px;">

                    <div class="white-text center boarder-top" @click="logOut()">
                        <div to="./trans_history">
                            <img src="~assets/images/logout_white.svg" class="responsive-img"
                                style="max-width: 50px; filter: hue-rotate(180deg);" alt="">
                            <p class="button-text white-text">
                                Logout
                            </p>
                        </div>

                    </div>

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
import { getUserInfo, getOnlineStatus, energyBalance, deleteAccount } from '~/js_modules/mods'
export default {
    layout: 'admin_main',

    data() {
        return {
            hideSettingsView: false,
            hideDeleteDialog: true,
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

        deleteAccount() {
            this.hideDeleteDialog = false
            this.hideSettingsView = true
        },

        cancelDelete() {
            this.hideDeleteDialog = true
            this.hideSettingsView = false
        },

        async yesDeleteAccount() {
            // call api
            // log user out

            try {
                let deleteResponse = await deleteAccount()
                console.log(deleteResponse);
                console.log(deleteResponse);
                console.log(deleteResponse);

                if (deleteResponse.message == 'Success!') {
                    this.logOut()
                }
            } catch (error) {

            }
        },

        logOut() {
            if (process.client) {
                localStorage.clear()
                window.location = './'
            }
        },

        async showEnergyUsage() {
            try {
                this.energy_balance_data = 'Please wait...'
                this.defaultData = true
                this.energyBalance = false
                let ebdata = await energyBalance()
                //console.log(ebdata);
                if (ebdata.data == undefined || ebdata.data == null) {
                    this.energy_balance_data = 'Network error. Try again later'
                } else {
                    this.energy_balance_data = ebdata.data
                    this.energy_balance_data = ' Balance: ' + this.energy_balance_data + ' KWH'
                }
            } catch (error) {

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
                //console.log('here is the ut ', this.account_name);
            }
        },

        async getOnlineStatusRoutineCall() {
            let user_online_status = await getOnlineStatus()
            this.online_status = user_online_status.message.toLowerCase()
            // //console.log('light api was called');

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
        //console.log('calling getUserDetails');
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