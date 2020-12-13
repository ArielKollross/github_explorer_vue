<template>
  <div id="app">
      <DashBoard />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import DashBoard from '@/pages/Dashboard/index.vue';
// import App from '@/styles/global';

export default Vue.extend({
  components: {
    DashBoard,
    // App,
  },
});
</script>
