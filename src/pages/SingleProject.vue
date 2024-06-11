<script>

import axios from 'axios';

    export default {
        name: 'SingleProject',

        data(){
            return{
                project: null,
            }
        },
        methods: {
            
            getSinglePostFromApi(){
                axios.get(`http://127.0.0.1:8000/api/projects/${this.$route.params.slug}`)
                .then((response) => {
                this.project = response.data.project;
                console.log(this.project)
      })
            }
         },

         mounted() {
        this.getSinglePostFromApi();
    }
    }
	

    
</script>

<template>
     <div v-if="project" class="container">
        <div class="row mb-3">
            <h1>Project: {{ project.name }}</h1>
        </div>
        <div class="row">
            <div class="col">
                <div class="card" style="width: 18rem;" >
                    <img :src="`http://127.0.0.1:8000/storage/${project.image}`" class="card-img-top" alt="...">
                    <div class="card-body" >
                        <h5 class="card-title">{{ project.name }}</h5>
                        <p class="card-text">{{ project.summary }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">

</style>