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
          <i class="material-icons">notifications</i>
        </div>
      </div>

      <CustomSelect style="margin-top: 10px;" :options="['2 months', '3 months', '4 months', '5 months', '6 months']" :default="'Duration'" class="" v-model="transaction_duration" />
  
      <div class="row">
        <div class="card-panel white" style="border-radius: 10px;">
            <canvas id="myChart" style="width:100%;max-width:600px"></canvas>
        </div>

      </div>


      <div class="row">
        
      </div>



      <!-- start of buttons -->

      <div class="row">

        <div class="col s12">
            <table class="striped">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Amount</th>
                        <th>Date</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>2304</td>
                        <td>NGN 20,000</td>
                        <td>Jan 1, 2024 10:05 am</td>
                    </tr>
                    <tr>
                        <td>9342</td>
                        <td>NGN 35,000</td>
                        <td>Feb 14, 2024 11:35 am</td>
                    </tr>
                    <tr>
                        <td>4234</td>
                        <td>NGN 5,000</td>
                        <td>March 8, 2024 1:35 am</td>
                    </tr>
                    <tr>
                        <td>9324</td>
                        <td>NGN 50,000</td>
                        <td>April 10, 2024 12:13 pm</td>
                    </tr>
                    
                </tbody>
            </table>
        </div>

      </div>

     


      


      <!-- end of buttons -->
      
  
    </div>
    
  </template>
  
  
  
  

<!-- <script src="@/assets/js/Chart.js"></script> -->
  <script>
  import CustomSelect from '~/components/CustomSelect.vue'
  import { getPaymentHistory, changePassword } from '~/js_modules/mods'
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
            transaction_duration: '',
  
        }
      },

      methods: {
        loadGraph() {
            // const xValues = [50,60,70,80,90,100,110,120,130,140,150];
            // const yValues = [7,8,8,9,9,9,10,11,14,14,15];
            // const xValues = [1, 2, 3, 4];
            

            const xValues = ["Jan", "Feb", "March", "April", "",];
            const yValues = [20000, 35000, 5000, 50000, 0];
            const barColors = ["red", "green","blue","orange"];

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

        logOut() {
          if(process.client) {
            localStorage.removeItem('token')
            window.location = './'
          }
        },

        async paymentHistory() {
          await getPaymentHistory()
          // await changePassword()
        }
      },

      mounted() {
        this.loadGraph()

        console.log('calling paymentHistory');
        // this.paymentHistory()
      },

      created() {
        
      }
  }
  </script>
  
  
  <style scoped>
  </style>