import Vue from 'vue'
import VueRouter from 'vue-router'
import First from '../views/First.vue'
import Test from '../views/test.vue'

Vue.use(VueRouter);

const routes = [
    {path: '/', redirect: '/index'},
    {path: '/index', component: First},
    {path: '/test', component: Test},
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
