import Vue from "vue";
import VueRouter from "vue-router";

import Error from "../components/404";
import Login from "@/views/login/Login";

Vue.use(VueRouter);

const routes = [
  {
    path:"/",
    redirect:"/login"
  },
  {
    path:"/login",
    component: Login
  },
  {
    path: "/404",
    name: "404",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Error
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});
//挂载路由导航守卫，to-要访问的路径；from-从哪个路径跳转过来；next-放行函数
router.beforeEach((to, from, next)=>{
  //登录页直接放行
  if(to.path==='/login') return next();
  //获取token，token不存在就强制跳转到登录页
  /*const tokenStr = window.sessionStorage.getItem('token')
  if(!tokenStr) return next('/login');*/
  next()
})

export default router;
