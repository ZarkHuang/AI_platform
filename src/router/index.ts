// router/index.ts
import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import ContentPageLayout from '@/layouts/ContentPageLayout.vue'
import HomeView from '@/views/HomeView.vue'

const routes: RouteRecordRaw[] = [
  // {
  //   path: '/',
  //   redirect: '/admin/',
  // },
  {
    path: '/',
    meta: { layout: ContentPageLayout },
    component: HomeView,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

// router.beforeEach((to, _from, next) => {
//   const authStore = useAuthStore()
//   const isAuthenticated = !!authStore.authState.token

//   if (!isAuthenticated && !to.path.includes('/admin/sign-in')) {
//     next('/admin/sign-in')
//   } else if (isAuthenticated && to.path === '/admin/sign-in') {
//     next('/admin/cmuhmc/tester-list')
//   } else if (isAuthenticated && !to.matched.length) {
//     next('/admin/cmuhmc/tester-list')
//   } else {
//     next()
//   }
// })

export default router
