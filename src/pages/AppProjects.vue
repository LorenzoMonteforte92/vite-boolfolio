<script>
import ProjectCard from '../components/ProjectsCard.vue';
import axios from 'axios';
import { store } from '../store.js';

    export default {
        name: 'AppProjects',

        components: {
            ProjectCard,

    },

        data() {
            return{
                projects: [],
                store,
                currentPage: 1,
                prevPage: null,
                nextPage: null,
            }
        },
        
        methods: {
            
            getProjects(pageNumber) {
                axios.get(`${this.store.apiBaseURL}/api/projects`,{
                    params: {
                        page: pageNumber,
                    }
                })
                .then((response) => {
                this.projects = response.data.results.data;
                this.currentPage = response.data.results.current_page;
                this.prevPage = response.data.results.prev_page_url;
                this.nextPage = response.data.results.next_page_url;  
                console.log(this.prevPage);
                console.log(this.nextPage);
        })
    }
},

    mounted(){
        this.getProjects(this.currentPage)
        
    }
 }
	    
</script>

<template>
    <div class="container">
        <div class="row mb-3">
            <h1>MyProjects</h1>
        </div>
        <div class="row">
            <nav aria-label="Page navigation example">
                <ul class="pagination justify-content-around">
                    <li class="page-item" :class="{disabled: !this.prevPage}"  v-if="!this.prevPage" ><a class="page-link">First Page</a></li>
                    <li class="page-item" v-if="this.prevPage" ><a class="page-link" @click="getProjects(currentPage - 1)" >Previous</a></li>
                    <li class="page-item pt-2"><span class="fw-bold text-primary" >{{currentPage}}</span></li>
                    <li class="page-item" v-if="this.nextPage" ><a class="page-link" @click="getProjects(currentPage + 1)" >Next</a></li>
                    <li class="page-item" :class="{disabled: !this.nextPage}"  v-if="!this.nextPage" ><a class="page-link">Last Page</a></li>
                </ul>
            </nav>
            <div class="col d-flex flex-wrap gap-3 justify-content-center">
                <ProjectCard v-for="singleProject in projects" :projectInfo="singleProject" ></ProjectCard>
            </div>
            <ul class="pagination justify-content-around mt-3">
                <li class="page-item" :class="{disabled: !this.prevPage}"  v-if="!this.prevPage" ><a class="page-link">First Page</a></li>
                <li class="page-item" v-if="this.prevPage" ><a class="page-link" @click="getProjects(currentPage - 1)" >Previous</a></li>
                <li class="page-item pt-2"><span class="fw-bold text-primary"  >{{currentPage}}</span></li>
                <li class="page-item" v-if="this.nextPage" ><a class="page-link" @click="getProjects(currentPage + 1)" >Next</a></li>
                <li class="page-item" :class="{disabled: !this.nextPage}" v-if="!this.nextPage" ><a class="page-link">Last Page</a></li>
            </ul>
        </div>
    </div>
</template>

<style scoped lang="scss">
    .pagination{
        .page-item{
            cursor: pointer;
        }
    }
</style>