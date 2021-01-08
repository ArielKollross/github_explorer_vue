import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "Home" */ '@/pages/Dashboard/Dashboard.vue'),
  },
  {
    path: '/repository:repo_name',
    name: 'Repository',
    component: () => import(/* webpackChunkName: "Home" */ '@/pages/Repository/Repository.vue'),

  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
