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
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">

</style>