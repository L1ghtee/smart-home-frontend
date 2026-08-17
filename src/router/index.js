import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
    history: createWebHistory(),
    routes: [
       
        {
            path: '/room',
            name: 'Room',
            component: () => import('../views/Room.vue')
        }
    ]
})

export default router