export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: 'Statusflare - Monitoring Made Easy',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Monitoring made easy.'
      },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image'
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: 'Statusflare'
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: 'Monitoring made easy.'
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: 'https://www.statusflare.com/og-statusflare-logo.png'
      },
      {
        hid: 'twitter:site',
        name: 'twitter:site',
        content: '@statusflare_com'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  pwa: {
    manifest: {
      description: 'Monitoring made easy.',
      name: 'Statusflare',
      short_name: 'Statusflare',
      theme_color: '#fe8b4c',
    },
    oneSignal: false,
    meta: {
      ogImage: {
        path: 'og-statusflare-logo.png',
        width: '1200',
        height: '627',
        type: 'image/png',
      },
      ogHost: 'https://www.statusflare.com/',
    },
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/pwa',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: ['nuxt-svg-loader'],
  purgeCSS: {
    whitelist: ['hidden'],
    whitelistPatterns: [/md:w-[1-6]/]
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      loaders: {
        file: {
          esModule: false
        }
      }
    }
  }
}
