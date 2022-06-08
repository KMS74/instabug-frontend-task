import { createRouter, createWebHistory } from "vue-router";
import LoginView from "@/views/LoginView.vue";

const routes = [
  {
    path: "/",
    alias: "/login",
    name: "login",
    component: LoginView,
    meta: { disallowAuthed: true },
  },
  {
    path: "/welcome",
    name: "welcome",
    component: () =>
      import(/* webpackChunkName: "welcome" */ "@/views/WelcomeView.vue"),
    // only authenticated users can enter this page
    meta: { requiresAuth: true },
  },
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

// Global Navigation Guard
router.beforeEach((to) => {
  const isLogged = window.localStorage.getItem("username");
  if (to.meta.requiresAuth && !isLogged) {
    return { name: "login", query: { redirect: to.fullPath } };
  }
});

router.beforeEach((to) => {
  const isLogged = window.localStorage.getItem("username");
  if (to.meta.disallowAuthed && isLogged) {
    return { name: "welcome", query: { redirect: to.fullPath } };
  }
});

export default router;
