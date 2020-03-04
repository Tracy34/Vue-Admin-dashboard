import Vue from 'vue';
import Router from 'vue-router';
import Index from '@/admin/admin_index';
import AddInternship from '@/admin/add_internship';
import AddTips from '@/admin/add_tips';
import AddScholarship from '@/admin/add_scholarship';
import Edit from '@/admin/edit';

Vue.use(Router);

export default [
  {
    path: '/admin',
    component: Index,
    children: [
      {
        path: '/add_internship',
        name: 'AddInternship',
        component: AddInternship,
      },
      {
        path: '/add_tips',
        name: 'AddTips',
        component: AddTips,
      },
      {
        path: '/add_scholarship',
        name: ' AddScholarship',
        component: AddScholarship,
      },
      {
        path: '/edit',
        name: 'Edit',
        component: Edit,
      },
    ],
  },
];
