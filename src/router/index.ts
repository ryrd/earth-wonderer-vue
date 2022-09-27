import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue";
import Destination from "../views/Destination.vue";
import NotFound from "../views/NotFound.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/destination/:id",
    name: "destination",
    component: Destination,
  },
  {
    path: "/:catchAll(.*)",
    component: NotFound,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;