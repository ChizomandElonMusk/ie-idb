import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _cb46bde6 = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _30ee9894 = () => interopDefault(import('../pages/dashboard.vue' /* webpackChunkName: "pages/dashboard" */))
const _00fe474c = () => interopDefault(import('../pages/energy_usage.vue' /* webpackChunkName: "pages/energy_usage" */))
const _4c5e1fd3 = () => interopDefault(import('../pages/forgot.vue' /* webpackChunkName: "pages/forgot" */))
const _f887c22e = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _1169e6e3 = () => interopDefault(import('../pages/purchase_electricity.vue' /* webpackChunkName: "pages/purchase_electricity" */))
const _c6b82914 = () => interopDefault(import('../pages/remote.vue' /* webpackChunkName: "pages/remote" */))
const _afc3bce2 = () => interopDefault(import('../pages/remote copy.vue' /* webpackChunkName: "pages/remote copy" */))
const _31426070 = () => interopDefault(import('../pages/sent.vue' /* webpackChunkName: "pages/sent" */))
const _4021ab48 = () => interopDefault(import('../pages/signup.vue' /* webpackChunkName: "pages/signup" */))
const _30899906 = () => interopDefault(import('../pages/trans_history.vue' /* webpackChunkName: "pages/trans_history" */))
const _72dc2170 = () => interopDefault(import('../pages/user-info.vue' /* webpackChunkName: "pages/user-info" */))
const _8bd7085c = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _cb46bde6,
    name: "about"
  }, {
    path: "/dashboard",
    component: _30ee9894,
    name: "dashboard"
  }, {
    path: "/energy_usage",
    component: _00fe474c,
    name: "energy_usage"
  }, {
    path: "/forgot",
    component: _4c5e1fd3,
    name: "forgot"
  }, {
    path: "/login",
    component: _f887c22e,
    name: "login"
  }, {
    path: "/purchase_electricity",
    component: _1169e6e3,
    name: "purchase_electricity"
  }, {
    path: "/remote",
    component: _c6b82914,
    name: "remote"
  }, {
    path: "/remote%20copy",
    component: _afc3bce2,
    name: "remote copy"
  }, {
    path: "/sent",
    component: _31426070,
    name: "sent"
  }, {
    path: "/signup",
    component: _4021ab48,
    name: "signup"
  }, {
    path: "/trans_history",
    component: _30899906,
    name: "trans_history"
  }, {
    path: "/user-info",
    component: _72dc2170,
    name: "user-info"
  }, {
    path: "/",
    component: _8bd7085c,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
