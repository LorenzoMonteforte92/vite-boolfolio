<script>

import { store } from './store.js';
import AppProjects from './components/AppProjects.vue';
import Appheader from './components/Appheader.vue';
  

export default {
  components: {
    AppProjects,
    Appheader,

  },

  data() {
    return {
      store
    };
  },
  
  methods: {
   
  },
  mounted() {
   
  }
}
</script>

<template>
  <Appheader></Appheader>
  <router-view></router-view>
</template>

<style>

</style>