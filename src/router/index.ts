import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';

const About = () => import('../views/About.vue');

const routes = [
  {path: '/', component: Home},
  {path: '/about', component: About}
];

const router = createRouter({
  routes,
  history: createWebHistory()
});

export default router;