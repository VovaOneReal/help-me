import { createRouter, createWebHistory } from 'vue-router';
import HelloWorld from "../components/HelloWorld.vue"
import RecipePage from "../views/RecipePage.vue"


const routes = [
  {
    path: '/',
    name: 'Home',
    component: HelloWorld,
  },
  {
    path: '/recipe',
    name: 'RecipePage',
    component: RecipePage, 
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
