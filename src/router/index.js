import { createRouter, createWebHistory } from "vue-router";
const routes = [
  {
    path: "/",
    name: "overview-view",
    component: () => import("@/views/OverviewView.vue"),
  },
  {
    path: "/industry",
    name: "industry-view",
    component: () => import("@/views/IndustryView.vue"),
  },
  {
    path: "/campaign",
    name: "campaign-view",
    component: () => import("@/views/CampaignView.vue"),
  },
  {
    path: "/sign-out",
    name: "signout-view",
    component: () => import("@/views/SignOutView.vue"),
  },
  {
    path: "/chatbot",
    name: "chatbot-view",
    component: () => import("@/views/ChatBotView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
