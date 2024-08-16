import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _cb46bde6 = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _3d0565a8 = () => interopDefault(import('../pages/confirm_otp.vue' /* webpackChunkName: "pages/confirm_otp" */))
const _00cdfe2e = () => interopDefault(import('../pages/confirm_otp_reset_password.vue' /* webpackChunkName: "pages/confirm_otp_reset_password" */))
const _30ee9894 = () => interopDefault(import('../pages/dashboard.vue' /* webpackChunkName: "pages/dashboard" */))
const _00fe474c = () => interopDefault(import('../pages/energy_usage.vue' /* webpackChunkName: "pages/energy_usage" */))
const _4c5e1fd3 = () => interopDefault(import('../pages/forgot.vue' /* webpackChunkName: "pages/forgot" */))
const _f887c22e = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _c6b82914 = () => interopDefault(import('../pages/remote.vue' /* webpackChunkName: "pages/remote" */))
const _c69fef8a = () => interopDefault(import('../pages/reset_password.vue' /* webpackChunkName: "pages/reset_password" */))
const _31426070 = () => interopDefault(import('../pages/sent.vue' /* webpackChunkName: "pages/sent" */))
const _4021ab48 = () => interopDefault(import('../pages/signup.vue' /* webpackChunkName: "pages/signup" */))
const _f4740b48 = () => interopDefault(import('../pages/success_forgotten_password_reset.vue' /* webpackChunkName: "pages/success_forgotten_password_reset" */))
const _ff1d30d0 = () => interopDefault(import('../pages/success_password_change.vue' /* webpackChunkName: "pages/success_password_change" */))
const _129ce058 = () => interopDefault(import('../pages/success_reg.vue' /* webpackChunkName: "pages/success_reg" */))
const _57c837c2 = () => interopDefault(import('../pages/test.vue' /* webpackChunkName: "pages/test" */))
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
    path: "/confirm_otp",
    component: _3d0565a8,
    name: "confirm_otp"
  }, {
    path: "/confirm_otp_reset_password",
    component: _00cdfe2e,
    name: "confirm_otp_reset_password"
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
    path: "/remote",
    component: _c6b82914,
    name: "remote"
  }, {
    path: "/reset_password",
    component: _c69fef8a,
    name: "reset_password"
  }, {
    path: "/sent",
    component: _31426070,
    name: "sent"
  }, {
    path: "/signup",
    component: _4021ab48,
    name: "signup"
  }, {
    path: "/success_forgotten_password_reset",
    component: _f4740b48,
    name: "success_forgotten_password_reset"
  }, {
    path: "/success_password_change",
    component: _ff1d30d0,
    name: "success_password_change"
  }, {
    path: "/success_reg",
    component: _129ce058,
    name: "success_reg"
  }, {
    path: "/test",
    component: _57c837c2,
    name: "test"
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
