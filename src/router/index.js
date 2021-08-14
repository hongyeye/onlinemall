import Vue from "vue";
import VueRouter from "vue-router";

const Home = () => import("../views/home/Home.vue");
const Cart = () => import("../views/cart/Cart.vue");
const Category = () => import("../views/category/Category.vue");
const Profile = () => import("../views/profile/Profile.vue");

//1.通过VUE.use(插件) 安装插件
Vue.use(VueRouter);

//2.创建 VueRouter实例对象
const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    component: Home,
    meta: {
      //路由元信息
      title: "首页",
    },
  },
  {
    path: "/cart",
    component: Cart,
    meta: {
      title: "购物车",
    },
  },
  {
    path: "/category",
    component: Category,
    meta: {
      title: "分类",
    },
  },
  {
    // 动态路由 （见MainTabBar.vue中16行:path）
    // 一个“路径参数”使用冒号 : 标记。当匹配到一个路由时，参数值会被设置到 this.$route.params,可以使用this.$route.params.userId获取到对应的参数值（见Profile.vue）
    path: "/profile/:userId",
    component: Profile,
    meta: {
      title: "我的",
    },
  },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

//router.beforeEach 注册一个全局前置守卫：
router.beforeEach((to, from, next) => {
  /*
  to:即将要进入的目标的路由对象
  from：当前导航即将要离开的路由对象
  next ：调用该方法后才能进入下一个钩子 
  */
  // console.log(to);
  document.title = to.matched[0].meta.title;
  next(); //这个函数一定要调用，不然无法实现路由跳转
});

//3.导出router
export default router;

//4. 在main.js中导入 router实例，并传到Vue实例中
