import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2026-05-13',
  devtools: { enabled: true },

  css: ['~/assets/css/main.css'],

  // baseURL is '/' in dev and set via NUXT_APP_BASE_URL in CI for project pages
  // (e.g. '/OpenTwin/' when deployed to https://opening-science.github.io/OpenTwin/).
  app: {
    baseURL: process.env.NUXT_APP_BASE_URL || '/',
    head: {
      htmlAttrs: { lang: 'en' },
      title: 'OpenTwin',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'Build and validate human digital twins on open standards and infrastructure.',
        },
      ],
    },
  },

  vite: {
    plugins: [tailwindcss()],
    server: {
      // Allow Cloudflare quick-tunnel subdomains for sharing localhost previews.
      // Vite blocks unknown Host headers by default (DNS-rebinding protection).
      allowedHosts: ['.trycloudflare.com'],
    },
  },
})
