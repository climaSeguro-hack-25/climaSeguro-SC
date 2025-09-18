import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
  },
  {
    path: '/equipe',
    name: 'Team',
    component: () => import('@/views/TeamView.vue'),
  },
  {
    path: '/clima',
    name: 'Clima',
    component: () => import('@/views/ClimaView.vue'),
  },
  {
    path: '/criar',
    name: 'Create',
    component: () => import('@/views/CreateView.vue'),
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/LoginView.vue'),
  },
  {
    path: '/alerta',
    name: 'Alert',
    component: () => import('@/views/alertView.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
