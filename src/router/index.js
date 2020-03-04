import Vue from 'vue';
import Router from 'vue-router';
// import HelloWorld from '@/components/HelloWorld';
import StudentRoutes from './student';
import AdminRoutes from './admin';

Vue.use(Router);

export default new Router({
  routes: [
    ...AdminRoutes,
    ...StudentRoutes,
  ],
});
