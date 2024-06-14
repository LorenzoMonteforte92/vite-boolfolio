<script>
import { store } from '../store.js';
import axios from 'axios';

    export default {
        name: 'SingleProject',

        components: {

    
        },

        data(){
            return{
                project: null,
                store,
            }
        },
        methods: {
            
            getSinglePostFromApi(){
                axios.get(`${this.store.apiBaseURL}/api/projects/${this.$route.params.slug}`)
                .then((response) => {
                this.project = response.data.project;
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
                    <img v-if="project.image" :src="`${this.store.apiBaseURL}/storage/${project.image}`" class="card-img-top" alt="...">
                    <div class="card-body" >
                        <h5 class="card-title">{{ project.name }}</h5>
                        <p v-if="project.technologies.length > 0" class="card-text"><strong>Tecnologies: </strong><span v-for="technology in project.technologies" >{{ technology.name }}&nbsp;</span></p>
                        <p v-if="project.type" class="card-text"><strong>Types: </strong>{{ project.type.name }}</p>
                        <p class="card-text">{{ project.summary }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">

</style>