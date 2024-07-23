// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },

    ssr: process.env.NODE_ENV !== "development",
    runtimeConfig: {
        public: {
            API_BASE_URL: process.env.API_URL
        }
    },
    app: {
        head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'My amazing site',
            meta: [
          {name: 'description', content: 'My amazing site'}
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' },
      ]
    },
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'layout', mode: 'out-in' },
  },
  plugins: [ { src: 'plugins/bootstrap.js', mode: 'client' } ],

  /** Styles */
  css: ['~/assets/scss/style.scss', '~/assets/css/style.css'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/scss/_variables.scss" as *;',
        },
      },
    },
  },

    modules: [
        '@nuxtjs/i18n',
        '@pinia/nuxt',
    ],
    i18n: {
        vueI18n: './lib/i18n.config.ts',
        locales: [
            {
                code: 'en',
                name: 'English',
                file: 'en-US.json'
            },
            {
                code: 'es',
                name: 'Español',
                file: 'es-ES.json'
            },
            {
                code: 'fr',
                name: 'Français',
                file: 'fr-FR.json'
            },
            {
                code: 'Ja',
                name: '日本人',
                file: 'ja-JA.json'
            }
        ],
        lazy: true,
        langDir: 'locales',
        defaultLocale: 'en'
    }
})
