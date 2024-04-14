<template>
    <div style="padding-left: 40px; padding-right: 40px; padding-top: 20px;">
        <div class="row">
            
        </div>
        <div class="row">
        </div>
  
      
  
      <div class="row" style="margin-top: 200px">
        
        <!-- form starts here -->
        <div class="row">
            <div class="col s12 center">
                <i class="material-icons large red-text">send</i>
            </div>
            <div class="col s12 center red-text">
                <h6>
                    Form has been submited
                </h6>
            </div>
            <div class="col s12 center red-text">
                

                <div class="row">
                    <div class="col s12 center">
                        <nuxt-link to="./dashboard">
                            <div class="card-panel red">
                                <span class="white-text">
                                    <h6>Back to menu</h6>
                                </span>
                            </div>
                        </nuxt-link>
                    </div>
                </div>
            </div>
        </div>
        <!-- form ends here -->
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

      mounted() {
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('select');
            var instances = M.FormSelect.init(elems, options);
        });
      },

      created() {
       
      }
  }
  </script>
  
  
  <style scoped>
  #sig-canvas {
    border: 2px dotted #CCCCCC;
    border-radius: 15px;
    cursor: crosshair;
    }
  </style>