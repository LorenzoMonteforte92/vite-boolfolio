<script>
import SingleProject from './SingleProject.vue';
import axios from 'axios';

    export default {
        name: 'AppProjects',

        components: {
            SingleProject,

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
    <h1 class="my-5" >MyProjects</h1>
    <div class="row">
        <div class="col d-flex flex-wrap gap-3 justify-content-center">
            <SingleProject v-for="singleProject in projects" :projectInfo="singleProject" ></SingleProject>
        </div>
    </div>
</template>

<style scoped lang="scss">

</style>