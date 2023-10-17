// import * as Vue from 'vue/dist/vue';
import * as Router from 'vue-router';

import AppPage from './App.vue';
import HomePage from './views/HomePage.vue';
import UserPage from './views/UserPage.vue';
import LookPhotoPage from './views/LookPhotoPage.vue';
import UploadPhotoPage from './views/UploadPhotoPage.vue';

const routes = [
    { path: '/', name: 'root', component: AppPage },
    { path: '/photo', name: 'home', component: HomePage },
    { path: '/user/<int:id>', name: 'user', component: UserPage },
    { path: '/look', name: 'lookPhoto', component: LookPhotoPage },
    { path: '/upload', name: 'uploadPhoto', component: UploadPhotoPage }
]

const router = Router.createRouter({
    history: Router.createWebHistory(),
    routes: routes,
});
