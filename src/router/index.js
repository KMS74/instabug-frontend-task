import { createRouter, createWebHistory } from "vue-router";
import LoginView from "@/views/LoginView.vue";

const routes = [
  {
    path: "/",
    alias: "/login",
    name: "login",
    component: LoginView,
  },
  {
    path: "/welcome",
    name: "welcome",
    // route level code-splitting
    // this generates a separate chunk (welcome.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "welcome" */ "@/views/WelcomeView.vue"),

    // only authenticated users can enter this page
    meta: { requiresAuth: true },
  },
  // will match everything and put it under `$route.params.pathMatch`
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () =>
      import(/* webpackChunkName: "404" */ "@/views/NotFound.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { top: 0, behavior: "smooth" };
  },
});

export default router;
