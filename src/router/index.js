import Vue from 'vue'
import VueRouter from 'vue-router'
import First from '../views/First.vue'

Vue.use(VueRouter);

const routes = [
    {path: '/', redirect: '/index'},
    {path: '/index', component: First},
];

const router = new VueRouter({
    routes
});

router.beforeEach((to, from, next) => {
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


});

export default router
