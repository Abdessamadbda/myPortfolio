import { createRouter, createWebHistory } from 'vue-router';

import Home from '../components/Home.vue';
import Skills from '../components/Skills.vue';
import Parcours from '../components/Parcours.vue';
import Projects from '../components/Projects.vue';
import LeftSidebar from '../components/LeftSidebar.vue';


const routes = [
  { path: '/', component: Home },
  { path: '/Skills', component: Skills },
  { path: '/Parcours', component: Parcours },
  { path: '/Projects', component: Projects },
  { path: '/LeftSidebar', component: LeftSidebar }


];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
