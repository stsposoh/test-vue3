import { createRouter, createWebHistory, RouteRecordRaw, RouterView } from 'vue-router'
import Tr from "@/i18n/translation"
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: "/:locale?",
    component: RouterView,
    beforeEnter: Tr.routeMiddleware,
    children: [
      {
        path: '',
        name: 'home',
        component: HomeView
      },
      {
        path: 'about',
        name: 'about',
        component: () => import('../views/AboutView.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_URL),
  routes
})

export default router
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// const router = createRouter({
//   history: createWebHistory(import.meta.env.VITE_BASE_URL),
//   routes: [
//     {
//       path: '/:locale?',
//       // name: 'home',
//       component: RouterView,
//       // beforeEnter: (to, from, next) => {
//       //   const locale = to.params.locale
//       //   console.log(locale)
//       //   if (!['en', 'ru'].includes(locale)) {
//       //     return next(i18n.locale)
//       //   }
//       //   if (i18n.locale !== locale) {
//       //     i18n.locale = locale
//       //   }
//       //   return next()
//       // },
//       // beforeEnter: routerMiddleware,
//       children: [
//         {
//           path: '',
//           name: 'home',
//           component: () => import('../views/HomeView.vue')
//         },
//         {
//           path: 'about',
//           name: 'about',
//           component: () => import('../views/AboutView.vue')
//         }
//       ]
//     },
//     // {
//     //   // path: '/:lang?',
//     //   path: '/',
//     //   name: 'home',
//     //   component: HomeView
//     // },
//     // {
//     //   path: '/:lang?/about',
//     //   name: 'about',
//     //   component: () => import('../views/AboutView.vue')
//     // }
//   ]
// })
//
// // router.beforeEach(routerMiddleware)
//
// export default router
