<script>
    export default {
        name: 'ProjectCard',
        props: {
            projectInfo: Object
        },

        data(){
            return{
                
            }
        },
        methods: {
            
            }
        }
	

    
</script>

<template>
    <div class="card" style="width: calc(100% / 4);">
        <div class="card-body d-flex flex-column justify-content-between">
            <h5 class="card-title">{{ projectInfo.name }}</h5>
            <p v-if="projectInfo.summary " class="card-text">{{ projectInfo.summary }}</p>
            <div >
                <router-link :to="{ name: 'Single-project', params: {slug: projectInfo.slug } }" class="btn btn-primary" >View More</router-link>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">

</style>