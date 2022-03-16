import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import {useAuth} from "../stores/auth";

const About = () => import('../views/About.vue');
const Profile = () => import('../views/Profile.vue');
const GitHubLoading = () => import('../views/GithubLoading.vue')

const routes = [
  {path: '/', name: 'Home', component: Home},
  {path: '/about', name: 'About', component: About},
  {path: '/profile', name: 'Profile', component: Profile},
  {path: '/github-loading', name: 'Github Loading', component: GitHubLoading}
];

const router = createRouter({
  routes,
  history: createWebHistory()
});

router.beforeEach((to, from, next) => {
  const auth = useAuth()
  if (to.name === 'Github Loading' && !auth.isAuthenticated) {
    next()
  }
  if (to.name !== 'Home' && !auth.isAuthenticated) {
     next({name: 'Home'})
  }
  else if (to.name === 'Home' && auth.isAuthenticated) {
    next({name: 'Profile'})
  }
  else {
    next()
  }
})

export default router;
