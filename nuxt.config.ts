// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },

  ssr: process.env.NODE_ENV !== 'development',
  runtimeConfig: {
    public: {
      API_BASE_URL: process.env.API_URL,
    },
  },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Denthia',
      meta: [{ name: 'description', content: 'My amazing site' }],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: 'anonymous',
        },
        {
          href: 'https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap',
          rel: 'stylesheet',
        },
        {
          href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200',
          rel: 'stylesheet',
        },
      ],
    },
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'layout', mode: 'out-in' },
  },
  plugins: [{ src: 'plugins/bootstrap.js', mode: 'client' }],

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

  modules: ['@nuxtjs/i18n', '@pinia/nuxt', '@nuxt/eslint'],

  i18n: {
    locales: [
      {
        code: 'en',
        name: 'English',
        file: 'en-US.json',
      },
      {
        code: 'es',
        name: 'Español',
        file: 'es-ES.json',
      },
    ],
    lazy: true,
    langDir: 'locales',
    defaultLocale: 'en',
    vueI18n: './lib/i18n.config.ts',
  },
});
