import { type RouteRecordRaw, createRouter, createWebHistory } from 'vue-router'

import NProgress from 'nprogress'

import 'nprogress/nprogress.css'

NProgress.configure({ showSpinner: false })

export const constantRoutes: RouteRecordRaw[] = []

const router = createRouter({
  history: createWebHistory(),
  routes: constantRoutes,
})

router.beforeEach(() => {
  NProgress.start()
})

router.afterEach(() => {
  NProgress.done()
})

export default router
