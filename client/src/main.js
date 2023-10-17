import './assets/main.css'

import { createApp } from 'vue';
import App from './App.vue';
import * as router from './router';

const app = createApp(App);
app.use(router);
app.mount('#app');

//createApp(App).mount('#app')

//const app = new Vue({
//    router,
//    render: h => h(App)
//}).$mount('#app');