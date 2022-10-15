import colors from 'vuetify/es5/util/colors'

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: true,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s • Narzędzia dla obywateli',
    title: 'ObywatelPlus',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'description', content: 'Aplikacja dla obywatela' },
      { name: 'keywords', content: 'ObywatelPlus' },
      { property: 'og:site_name', content: 'ObywatelPlus' },
      { property: 'og:url', content: 'https://ObywatelPlus.tk' },
      { property: 'og:type', content: 'website' },
      { property: 'og:title', content: 'ObywatelPlus' },
      { property: 'og:description', content: 'Aplikacja dla obywatela' },
      { property: 'og:image', content: 'https://obywatelplus.tk/icon.png' },
      { property: 'og:image:alt', content: 'Ikona ObywatelPlus' },
      { name: 'format-detection', content: 'telephone=yes' }
    ],
    link: [
      { hid: 'icon', rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/style.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    [
      '@nuxtjs/firebase',
      {
        config: {
          apiKey: 'AIzaSyB7lM_VvHeWqAsMmCc0uyl2EevnyMb_7Qc',
          authDomain: 'obywatel-plus.firebaseapp.com',
          databaseURL: 'https://obywatel-plus-default-rtdb.europe-west1.firebasedatabase.app',
          projectId: 'obywatel-plus',
          storageBucket: 'obywatel-plus.appspot.com',
          messagingSenderId: '614724324012',
          appId: '1:614724324012:web:07a412e59b88cf1522ed09'
        },
        services: {
          auth: {
            initialize: {
              onAuthStateChangedMutation: 'ON_AUTH_STATE_CHANGED_MUTATION'
            }
          }
        }
      }
    ],
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/'
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'pl'
    }
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
