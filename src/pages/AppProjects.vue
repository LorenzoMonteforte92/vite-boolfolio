<script>
import ProjectCard from '../components/ProjectsCard.vue';
import axios from 'axios';
import { store } from '../store.js';

    export default {
        name: 'AppProjects',

        components: {
            ProjectCard,
            store,

    },

        data() {
            return{
                projects: []
            }
        },
        
        methods: {
            
            getProjects() {
                axios.get(`${this.store.apiBaseURL}/api/projects`)
                .then((response) => {
                this.projects = response.data.results;
                console.log(this.projects)
        })
    }
},

    mounted(){
        this.getProjects()
        
    }
 }
	    
</script>

<template>
    <div class="container">
        <div class="row mb-3">
            <h1>MyProjects</h1>
        </div>
        <div class="row">
            <div class="col d-flex flex-wrap gap-3 justify-content-center">
                <ProjectCard v-for="singleProject in projects" :projectInfo="singleProject" ></ProjectCard>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">

</style>