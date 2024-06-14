<script>
    export default {
        name: 'Appheader',

        data(){
            return{
               navLinks: [
                {
                    route: 'home',
                    text: 'Home'
                },
                {
                    route: 'about',
                    text: 'About'
                },
                {
                    route: 'projects',
                    text: 'Projects'
                },
                {
                    route: 'contact-us',
                    text: 'Contact Us'
                },
               ] 
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
                        <li v-for="link in navLinks" class="nav-item">
                            <router-link :to="{ name: link.route }" class="nav-link active" aria-current="page">{{ link.text }}</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>

<style scoped lang="scss">

</style>