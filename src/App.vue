<script>

import { store } from './store.js';
import Appheader from './components/Appheader.vue';
import AppProjects from './pages/AppProjects.vue';


export default {
  components: {
    AppProjects,
    Appheader,
    AppProjects,
  

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