import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false;

import 'amfe-flexible/index.js'

//animate
import animated from 'animate.css'

Vue.use(animated);


import H5AudioControls from '@cycjimmy/vue-h5-audio-controls';

Vue.use(H5AudioControls);

import {VueHammer} from 'vue2-hammer'

VueHammer.config.swipe = {
    threshold: 10
};
Vue.use(VueHammer);

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app');
