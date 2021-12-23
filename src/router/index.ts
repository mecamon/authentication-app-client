import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';

const About = () => import('../views/About.vue');
const Profile = () => import('../views/Profile.vue');

const routes = [
  {path: '/', component: Home},
  {path: '/about', component: About},
  {path: '/profile', component: Profile}
];

const router = createRouter({
  routes,
  history: createWebHistory()
});

export default router;