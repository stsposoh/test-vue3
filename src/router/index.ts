import { createRouter, createWebHistory, RouteRecordRaw, RouterView } from 'vue-router'
// import i18n from '@/i18n/i18n'
// import routerMiddleware from '@/middlewares/routerMiddleware'
// import HomeView from '@/views/HomeView'

import i18n, { defaultLocale } from '../i18n'

// console.log(defaultLocale)

// console.log(routerMiddleware)

// const routes: Array<RouteRecordRaw> = [
//   {
//     path: '/:locale',
//     component: {
//       template: '<router-view />'
//     },
//     beforeEnter: (to, from, next) => {
//       const locale = to.params.locale
//       console.log(locale)
//       if (!['en', 'ru'].includes(locale)) {
//         return next(i18n.locale)
//       }
//       if (i18n.locale !== locale) {
//         i18n.locale = locale
//       }
//       return next()
//     },
//     children: [
//       {
//         path: '',
//         component: () => import('../views/HomeView.vue')
//       },
//       {
//         path: 'about',
//         component: () => import('../views/AboutView.vue')
//       }
//     ]
//   },
//   {
//     path: '/:pathMatch(.*)*',
//     redirect: `/${i18n.locale}`
//   }
// ]
//
// const router = createRouter({
//   history: createWebHistory(),
//   routes
// })
//
// export default router
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

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_URL),
  routes: [
    {
      path: '/',
      redirect: `/${defaultLocale}`,
    },
    {
      path: '/:locale',
      // name: 'home',
      // component: RouterView,
      // beforeEnter: (to, from, next) => {
      //   const locale = to.params.locale
      //   console.log(locale)
      //   if (!['en', 'ru'].includes(locale)) {
      //     return next(i18n.locale)
      //   }
      //   if (i18n.locale !== locale) {
      //     i18n.locale = locale
      //   }
      //   return next()
      // },
      // beforeEnter: routerMiddleware,
      children: [
        {
          path: '',
          name: 'home',
          component: () => import('../views/HomeView.vue')
        },
        {
          path: 'about',
          name: 'about',
          component: () => import('../views/AboutView.vue')
        }
      ]
    },
    // {
    //   // path: '/:lang?',
    //   path: '/',
    //   name: 'home',
    //   component: HomeView
    // },
    // {
    //   path: '/:lang?/about',
    //   name: 'about',
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

router.beforeEach((to, from) => {
  const newLocale = to.params.locale
  const prevLocale = from.params.locale

  // If the locale hasn't changed, do nothing
  if (newLocale === prevLocale) {
    return
  }



  i18n.setLocale(newLocale)
})


// router.beforeEach(routerMiddleware)

export default router
