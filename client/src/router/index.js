import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login.vue';
import Home from '@/components/Home.vue';
import NotFoundComponent from '@/components/NotFoundComponent.vue';
import utils from "@/js/utils";

Vue.use(Router)

var router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta:{
        requireAuth: true,
      }
    },
    { path: '*', component: NotFoundComponent }
  ]
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requireAuth)){ // 判断该路由是否需要登录权限
    if (utils.LocalStorageManager.get('token')){ // 判断当前的token是否存在 ； 登录存入的token
      next();
    }
    else {
      console.log('需要登录');
      next({
        path: '/login',
        query: {redirect: to.fullPath} // 将跳转的路由path作为参数，登录成功后跳转到该路由
      })
    }
  }
  else {
    next();
  }
});

export default router;
