<script>
import ProjectCard from '../components/ProjectsCard.vue';
import axios from 'axios';

    export default {
        name: 'AppProjects',

        components: {
            ProjectCard,

    },

        data() {
            return{
                projects: []
            }
        },
        
        methods: {
            
            getProjects() {
                axios.get('http://127.0.0.1:8000/api/projects')
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
        <div class="row">
            <h1 class="my-5" >MyProjects</h1>
            <div class="col d-flex flex-wrap gap-3 justify-content-center">
                <ProjectCard v-for="singleProject in projects" :projectInfo="singleProject" ></ProjectCard>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">

</style>