<script>

import { store } from './store.js';
import AppProjects from './components/AppProjects.vue';
  

export default {
  components: {
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
  <div class="container">
    <AppProjects></AppProjects>
  </div>
</template>

<style>

</style>