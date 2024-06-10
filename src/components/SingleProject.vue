<script>
    export default {
        name: 'SingleProject',
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
        <div class="card-body">
            <h5 class="card-title">{{ projectInfo.name }}</h5>
            <p v-if="projectInfo.summary " class="card-text">{{ projectInfo.summary }}</p>
        </div>
    </div>
</template>

<style scoped lang="scss">

</style>