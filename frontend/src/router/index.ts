import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Page from "@/components/layoutComponents/page.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "*",
    name: "application",
    component: Page
  }
];

const router = new VueRouter({
  routes
});

export default router;
