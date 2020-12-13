<template>
  <div id="app">
      <DashBoard />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import DashBoard from '@/pages/Dashboard/index.vue';

export default Vue.extend({
  components: {
    DashBoard,
  },
});
</script>

<style>
*{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body{
    background: #F0F0F5 url('./assets/githubBackGround.svg') no-repeat 70% top;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
  font-size: 16px;
  font-family: 'Roboto', sans-serif;
  }

  #app {
    max-width: 960px;
    margin: 0 auto;
    padding: 40px 20px;
  }

  button {
    cursor: pointer;
  }
</style>
