import { createWebHistory, createRouter } from 'vue-router'

const routes = [

    {
        path: '/',
        name: 'home',
        component: function() {
            return import ('../views/HomeView.vue')
        }
    },

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;