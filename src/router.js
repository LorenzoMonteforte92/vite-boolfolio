import { createRouter, createWebHistory } from 'vue-router';

import AppHome from './pages/AppHome.vue';
import AppAbout from './pages/AppAbout.vue';
import AppProjects from './pages/AppProjects.vue';
import SingleProject from './pages/SingleProject.vue';
import NotFound from './pages/NotFound.vue';
import AppContactUs from './pages/AppContactUs.vue';



const router = createRouter({	
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: AppHome
        },
        {
            path: '/about',
            name: 'about',
            component: AppAbout
        },
        {
            path: '/projects',
            name: 'projects',
            component: AppProjects
        },
        {
            path: '/contact-us',
            name: 'contact-us',
            component: AppContactUs
        },
        {
            path: '/projects/:slug',
            name: 'Single-project',
            component: SingleProject
        },
        //rotta per gestire il 404 not found
        {
            path: "/:pathMatch(.*)*",
            name: "not-found",
            component: NotFound
        }
        
    ]
});

export { router };