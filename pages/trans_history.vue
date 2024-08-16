<template>
    <div style="padding-top: 60px;" class="container">
      <!-- <div class="row">
        <div>
          <h6 class="red-text" style="font-weight: 100; margin-bottom: 20px;">
            Menu
          </h6>
        </div>
      </div> -->

        <div class="flexcontainer" style="margin-top: 10px;">
          <div class="flexitem-username">
            <nuxt-link to="./dashboard" class="btn btn-medium btn-flat red white-text" style="border-radius: 10px 0 0px 10px;">
              Back
            </nuxt-link>
            <b style="font-size: 20px; color: #757575; border-radius: 0 10px 10px 0; padding: 3px;" class="grey white-text">
              Transaction history
            </b>
            <br>
            <b class="white-text darken-4">
              .......
            </b> 
          </div>

          <div class="flexitem-notification">
            <!-- <i class="material-icons">notifications</i> -->
          </div>
        </div>

      <!-- <CustomSelect style="margin-top: 10px;" :options="['2 months', '3 months', '4 months', '5 months', '6 months']" :default="'Duration'" class="" v-model="transaction_duration" /> -->

      
      <div class="container">

        <div class="flexcontainerSearch">
          <div class=" input-field flexitem-datepicker">
            <!-- <input type="date" placeholder="From" class="orange btn btn-medium btn-flat black-text" v-model="date_from" style="border-radius: 10px 0 0px 10px; margin-top: 10px;"> -->
            <input type="date" placeholder="From" v-model="date_from">
          </div>
          <div style="width: 3px;"></div>
          <div class=" input-field flexitem-datepicker">
            <!-- <input type="date" placeholder="To" class="orange btn btn-medium btn-flat black-text" v-model="date_to" style="border-radius: 0px 10px 10px 0px; margin-top: 10px;"> -->
            <input type="date" placeholder="To" v-model="date_to">
          </div>
          <div class=" input-field flexitem-datepicker">
            <img src="~assets/images/search.svg" class="responsive-img" style="max-width: 45px;" @click="getDateFrom()">
            <!-- <button @click="getDateFrom()" class="btn btn-medium btn-flat red white-text" style="border-radius: 10px 10px 10px 10px; margin-top: 10px;">
              Search
            </button> -->
          </div>
        </div>

      </div>

      <div class="container">
        <div class="row" :class="{'hide': hideLoader}">
          <div class="col s12 center">
            <img src="~assets/images/logo.png" class="responsive-img heartbeat" style="max-width: 60px;">
          </div>
        </div>
      </div>
      
      
  
      <div class="row" :class="{'hide': hideElements}">
        <div class="card-panel white" style="border-radius: 10px;">
            <canvas id="myChart" style="width:100%;max-width:600px"></canvas>
        </div>

      </div>


      <div class="row">
        
      </div>



      <!-- start of buttons -->

      <div class="row" :class="{'hide': hideElements}">

        <div class="col s12">
            <table class="striped">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Amount</th>
                        <th>Date</th>
                        <th>View</th>
                    </tr>
                </thead>

                <tbody v-for="(trans, index) in transactionList" :id="trans.orderNo">
                    <tr>
                        <td>
                          <a href="#!" v-on:click="getPaymentRec(trans.orderNo, trans.agencyCode)">
                            {{ index + 1 }}
                          </a>
                        </td>
                        <td>₦{{ formatCurrency(trans.amount) }}</td>
                        <td>{{ formatDateToString(trans.transactionDate) }}</td>
                        <td><img src="~assets/images/view.svg" v-on:click="getPaymentRec(trans)" class="responsive-img" style="max-width: 30px;" alt=""></td>
                    </tr>
                    
                </tbody>
            </table>
        </div>

      </div>
      <!-- end of buttons -->

      <div class="row" :class="{'hide': hidePaymentHistoryDetail}">

        <div class="col s12">

            <div class="row">
                <div class="col s12">
                    <div class="card red white-text">
                        <div class="card-content white-text">
                            <span class="card-title" style="font-weight: 600;">Payment Details</span>
                            <p><b>Account number:</b> {{ account_num }} </p>
                            <p><b>Agency Code:</b> {{ agency_code }} </p>
                            <p><b>Channel:</b> {{ channel }} </p>
                            <p><b>Amount:</b> ₦{{ formatCurrency(amount) }} </p>
                            <p><b>Order number:</b> {{ order_number }} </p>
                            <p><b>Transaction Date:</b> {{ transaction_date }} </p>
                        </div>
                        <div class="card-action">
                            <button class="btn btn-flat white red-text" @click="paymentHistory">Close</button>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>

      </div>
      
  
    </div>
    
  </template>
  
  
  
  

<!-- <script src="@/assets/js/Chart.js"></script> -->
  <script>
  import CustomSelect from '~/components/CustomSelect.vue'
  import { getPaymentHistory, searchPaymentHistory, paymentReceipt } from '~/js_modules/mods'
  import moment from 'moment';
  import Chart from '@/assets/js/Chart.js'

  export default {
      layout: 'admin_main',
      components: {
        CustomSelect,
      },

      // head() {
      //   return {
      //     script: [
      //       {
      //         src: 'https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.4/Chart.js',
      //         // Optional attributes:
      //         async: true,
      //         defer: false,
      //       }
      //     ]
      //   }
      // },

      data() {
        return {
            transactionList: [],
            date_from: '',
            date_to: '',
            hideLoader: true,
            hideElements: true,
            hidePaymentHistoryDetail: true,

            account_num: '',
            agency_code: '',
            channel: '',
            amount: '',
            order_number: '',
            transaction_date: '',
  
        }
      },

      methods: {
        async getDateFrom() {
          this.date_from = this.date_from.trim()
          this.date_to = this.date_to.trim()
          this.hideLoader = false
          this.hideElements = true

          if (this.date_from == '' || this.date_to == '') {
            M.toast({html: '<b class="red-text">Please pick a valid date</b>'})
            this.hideLoader = true
            this.hideElements = false
          } else {
            this.hideLoader = true
            this.hideElements = false
            let date_from = this.date_from.replace(/-/g, '')
            let date_to = this.date_to.replace(/-/g, '')

            if (this.transactionList.message == 'Token expired!') {
              localStorage.clear()
              this.$router.push('./')
            } else {
              this.transactionList = await searchPaymentHistory("0102327327", date_from, date_to)
              this.sortDate(this.transactionList)
              this.loadGraph()
            }
            
          }
        },

        formatDateToString(value) {
          let stringDate = new Date(value).toDateString()
          return stringDate
        },

        formatCurrency(value) {
          if (value == undefined) {

          } else {
            return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
          }
          

        },

        loadGraph() {
            // const xValues = [50,60,70,80,90,100,110,120,130,140,150];
            // const yValues = [7,8,8,9,9,9,10,11,14,14,15];
            // const xValues = [1, 2, 3, 4];


            // Extract transactionDate and amount into separate arrays
            const transactionDates = this.transactionList.map(item => new Date(item.transactionDate).toDateString());
            const amounts = this.transactionList.map(item => item.amount);

            // Generate list of colors based on the length of transactionDates array
            const numColors = transactionDates.length;
            const barColors = generateColors(numColors);

            // Function to generate list of colors
            function generateColors(numColors) {
              const colors = [];
              for (let i = 0; i < numColors; i++) {
                // Generate random color
                const color = '#' + Math.floor(Math.random() * 16777215).toString(16);
                colors.push(color);
              }
              return colors;
            }

            // Log the extracted data and colors
            console.log('Transaction Dates:', transactionDates);
            console.log('Amounts:', amounts);
            console.log('Bar Colors:', barColors);
            

            transactionDates.push("")
            amounts.push("")
            const xValues = transactionDates;
            const yValues = amounts;
            // const barColors = ["red", "green","blue","orange"];

            new Chart("myChart", {
            type: "bar",
            data: {
                labels: xValues,
                datasets: [{
                backgroundColor: barColors,
                data: yValues
                }]
            },
            options: {
                legend: {display: false},
                title: {
                display: true,
                text: "Transaction history"
                }
            }
            
            });
        },

        sortDate(data) {
          data.sort((a, b) => {
            // Convert transactionDate strings to Date objects for comparison
            const dateA = new Date(a.transactionDate);
            const dateB = new Date(b.transactionDate);

            

            // Compare dates
            
            // return dateA - dateB;
            return dateA - dateB;
          });
        },

        logOut() {
          if(process.client) {
            localStorage.removeItem('token')
            window.location = './'
          }
        },

        async paymentHistory() {
          this.hideLoader = false
          this.hideElements = true
          this.hidePaymentHistoryDetail = true
          this.transactionList = await getPaymentHistory()
          // let pr = await paymentReceipt("20240422113154472007399276", "UT000007")
          // let pr = await paymentReceipt("20240411202745039007724322", "UT000007")
          // console.log('reeeeeeceipt ', pr);
          console.log(this.transactionList);
          if (this.transactionList.message == 'Token expired!') {
            localStorage.clear()
            this.$router.push('./')
          } else {
            this.loadGraph()
            this.sortDate(this.transactionList)
            this.hideLoader = true
            this.hideElements = false
          }
        },

        async getPaymentRec(trans) {
          this.account_num = trans.accountNo
          this.agency_code = trans.agencyCode
          this.channel = trans.channel
          this.amount =  trans.amount
          this.order_number = trans.orderNo
          this.transaction_date = trans.transactionDate
          this.hidePaymentHistoryDetail = false
          this.hideElements = true
        },
        

      },

      mounted() {
        document.addEventListener('DOMContentLoaded', function() {
          var elems = document.querySelectorAll('.datepicker');
            var instances = M.Datepicker.init(elems, {
            format: 'yyyy-mm-dd' // Set the format option to 'yyyy-mm-dd'
          });
          console.log('loading.................................');
        });
        M.AutoInit();
        

        console.log('calling paymentHistory');
        this.paymentHistory()
      },

      created() {
        
      }
  }
  </script>
  
  
