import HomeComponent from "@/views/HomeView.vue";
import EditComponent from "@/components/post/EditComponent.vue";
import CreateComponent from "@/components/post/CreateComponent.vue";
import PostsComponent from "@/components/post/PostsComponent.vue";
import { createRouter, createWebHistory } from "vue-router";
const routes = [
  { path: "/", redirect: { name: "home" } },
  { path: "/home", name: "home", component: HomeComponent },
  { path: "/create", name: "Create", component: CreateComponent },
  { path: "/edit/:id", name: "Edit", component: EditComponent },
  { path: "/post/:id", name: "Posts", component: PostsComponent },
];
const router = createRouter({
  history: createWebHistory(""),
  routes,
});
export default router;
