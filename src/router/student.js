import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/pages/index';
import Internship from '@/components/pages/internship';
import Scholarship from '@/components/pages/scholarship';
import Tips from '@/components/pages/tips';

Vue.use(Router);

export default [
  {
    path: '/index',
    name: 'Home',
    component: Home,
  },
  {
    path: '/internship',
    name: 'Internship',
    component: Internship,
  },
  {
    path: '/scholarship',
    name: 'Scholarship',
    component: Scholarship,
  },
  {
    path: '/tips',
    name: 'Tips',
    component: Tips,
  },
];
