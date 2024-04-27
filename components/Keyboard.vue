<template>
    <div class="vuertual-numeric-keyboard bg-light rounded border p-3">
      <button
        v-for="key in keys"
        :key="key"
        @click="press(key)"
        class="btn btn-large"
        :class="keyTheme"
        style="border-radius: 10px;">{{ key }}</button>
      <button class="btn btn-large black" :class="buttonTheme" @click="clear()" style="border-radius: 10px;">&larr;</button>
      <button class="btn btn-large orange" :class="buttonTheme" @click="clear('all')" style="border-radius: 10px;">Clear</button>
      <nuxt-link to="./dashboard" class="btn btn-large col s12 red" style="border-radius: 10px;">
          Cancel
      </nuxt-link>
      <button class="btn btn-large blue" :class="buttonTheme" @click="paste()" style="border-radius: 10px;">Paste</button>
    </div>
  </template>
  
  <script>
//   import 'bootstrap/dist/css/bootstrap.min.css';
  import _ from 'lodash';
  
  export default {
    props: ['selfValue'],
    data() {
      return {
        value: '',
        keys: [...Array(10).keys()],
        keyTheme: 'btn-keyboard',
        buttonTheme: 'btn-danger',
      };
    },
    methods: {
      async paste() {
        // Access clipboard data
        const clipboardData = await navigator.clipboard.readText();
        this.$emit('paste', clipboardData)

        // Do something with the clipboard data
        console.log('Pasted content:', clipboardData);
      },
      shuffle() {
        this.keys = _.shuffle(this.keys);
      },
      press(key) {
        if (this.value.length < 20) {
            this.value = `${this.value}${key}`;
            // this.shuffle();
        }
      },
      clear(type) {
        if (type === 'all') this.value = '';
        else this.value = this.value.substring(0, this.value.length - 1);
      },
    },
    watch: {
      value() {
        this.$emit('pressed', this.value);
      },
      selfValue() {
        this.value = this.selfValue;
      },
    },
    created() {
      // this.shuffle();
    },
  };
  </script>
  
  <style scoped>
  .vuertual-numeric-keyboard {
    display: grid;
    grid-template-columns: auto auto auto;
    grid-gap: 20px;
  }
  .vuertual-numeric-keyboard .btn {
    font-weight: bold;
  }
  .btn-keyboard {
    background-color: #f44336;
    color: #ffffff;
  }
  </style>