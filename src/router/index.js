import Vue from 'vue'
import VueRouter from 'vue-router'
// import First from '../views/First.vue'
import First from '../views/FirstCity.vue'
import P2 from '../views/P2.vue'
import P3 from '../views/P3.vue'
import P4 from '../views/P4.vue'
import P5 from '../views/P5.vue'
import P6 from '../views/P6.vue'
import P7 from '../views/P7.vue'

Vue.use(VueRouter);

const routes = [
    {path: '/', redirect: '/index'},
    {path: '/index', component: First},
    {path: '/p2', component: P2},
    {path: '/p3', component: P3},
    {path: '/p4', component: P4},
    {path: '/p5', component: P5},
    {path: '/p6', component: P6},
    {path: '/p7', component: P7},
];

const router = new VueRouter({
    //mode: 'history',
    routes
});

/*router.beforeEach((to, from, next) => {
    if (!to.query.intoTime) {
        let query = to.query;
        query.intoTime = new Date().getTime();
        next({
            path: to.path,
            query: query
        })
    } else {
        next();
    }
});*/

export default router
