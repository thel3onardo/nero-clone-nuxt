export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Nero',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }, { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/directives.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  ssr: true,

  buildDir: 'nuxt-dist',

  extend(config, ctx) {
      if (ctx.dev && ctx.isClient) {
          config.module.rules.push({
              enforce : 'pre',
              test    : /\.(js|vue)$/,
              loader  : 'eslint-loader',
              exclude : /(node_modules)/,
              options : {
                  fix : true
              }
          });
      }
  }
}
