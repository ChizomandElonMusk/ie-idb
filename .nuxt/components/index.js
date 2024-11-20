export const AdminNavBar = () => import('../../components/AdminNavBar.vue' /* webpackChunkName: "components/admin-nav-bar" */).then(c => wrapFunctional(c.default || c))
export const CustomSelect = () => import('../../components/CustomSelect.vue' /* webpackChunkName: "components/custom-select" */).then(c => wrapFunctional(c.default || c))
export const Forgot = () => import('../../components/Forgot.vue' /* webpackChunkName: "components/forgot" */).then(c => wrapFunctional(c.default || c))
export const Keyboard = () => import('../../components/Keyboard.vue' /* webpackChunkName: "components/keyboard" */).then(c => wrapFunctional(c.default || c))
export const Login = () => import('../../components/Login.vue' /* webpackChunkName: "components/login" */).then(c => wrapFunctional(c.default || c))
export const Logo = () => import('../../components/Logo.vue' /* webpackChunkName: "components/logo" */).then(c => wrapFunctional(c.default || c))
export const MeterInput = () => import('../../components/MeterInput.vue' /* webpackChunkName: "components/meter-input" */).then(c => wrapFunctional(c.default || c))
export const NavBar = () => import('../../components/NavBar.vue' /* webpackChunkName: "components/nav-bar" */).then(c => wrapFunctional(c.default || c))
export const PreLoader = () => import('../../components/PreLoader.vue' /* webpackChunkName: "components/pre-loader" */).then(c => wrapFunctional(c.default || c))
export const SignUp = () => import('../../components/SignUp.vue' /* webpackChunkName: "components/sign-up" */).then(c => wrapFunctional(c.default || c))

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
