<script>
    export default {
        name: 'Appheader',

        data(){
            return{
                
            }
        },
        methods: {
            
            }
        }
	

    
</script>

<template>
    <header>
        <nav class="navbar navbar-expand-lg">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">MyProjects</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <router-link :to="{ name: 'home' }" class="nav-link active" aria-current="page">Home</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link :to="{ name: 'about' }" class="nav-link" >About</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link :to="{ name: 'projects' }" class="nav-link" >Projects</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>

<style scoped lang="scss">

</style>