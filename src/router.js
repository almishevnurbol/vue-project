import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import store from './store'


Vue.use(Router)




const router = new Router ({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Home,
            beforeEnter: (to, from, next) => {
                if (store.state.isLogged) next()
                else {
                    to.path !== '/register'
                }
            }
        },
        {
            path: '/register',
            component: () => import('./views/Register.vue')
        },
        {
            path: '/profile',
            component: () => import('./views/Profile.vue'),
            beforeEnter: (to, from, next) => {
                if (store.state.isLogged) next()
                else {
                    to.path !== '/register'
                }
            }
        }
    ]
})




  
// router.beforeEach((to, from, next) => {
//     let isLogged = localStorage.getItem("isLogged")
//     // console.log(isLogged)
//     if (  !isLogged && to.path !== '/register' ) {
//       next("/register")
//     } else {
//       next()
//     }
// });

export default router