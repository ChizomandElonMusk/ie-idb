<template>
    <input
      type="text"
      v-model="formattedValue"
      @input="formatCreditCard"
      placeholder="Enter credit card number"
    />
  </template>
  
  <script>
  export default {
    data() {
      return {
        formattedValue: ''
      };
    },
    methods: {
      formatCreditCard(event) {
        let input = event.target.value.replace(/-/g, ''); // Remove existing hyphens
        let formattedValue = '';
  
        for (let i = 0; i < input.length; i++) {
          formattedValue += input.charAt(i);
          if ((i + 1) % 4 === 0 && i !== input.length - 1) {
            formattedValue += '-';
          }
        }
  
        this.formattedValue = formattedValue;
      }
    }
  };
  </script>
  