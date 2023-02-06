import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import FrontView from "@/views/FrontView.vue";
import BackView from "@/views/BackView.vue";
import MoodMusic from "@/views/backend-projects/MoodMusic.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/front",
      name: "front",
      component: FrontView,
    },
    {
      path: "/back",
      name: "back",
      component: BackView,
    },
    {
      path: "/back/mood-music",
      name: "MoodMusic",
      component: MoodMusic,
    }
  ],
});

export default router;
