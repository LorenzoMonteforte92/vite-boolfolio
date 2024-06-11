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
  <div class="container ">
    <div class="row">
      <div class="col">
        <Appheader></Appheader>
      </div>
    </div>
  </div>
  <div class="container">
    <router-view></router-view>
  </div>
</template>

<style>

</style>