import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PostViewVue from '@/views/PostView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      meta: {
        title: "DreamChaser Blog",
      },
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      meta: {
        title: "About"
      },
      component: () => import('@/views/AboutView.vue')
    },
    {
      path: '/login',
      name: 'login',
      meta: {
        title: "Login"
      },
      component: () => import('@/views/LoginView.vue')
    },
    {
      path: '/register',
      name: 'register',
      meta: {
        title: "Register"
      },
      component: () => import('@/views/RegistrationView.vue')
    },
    {
      path: '/post/:postId',
      meta: {
        title: "Goals blog"
      },
      component: PostViewVue
    },
    {
      path: '/admin',
      name: 'admin',
      meta: {
        title: "New results?"
      },
      component: () => import('@/views/AdminPanelView.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (typeof to.meta.title === 'string') {
    document.title = to.meta.title;
  } else {
    document.title = 'Default Title';
  }
  next();
});

export default router
