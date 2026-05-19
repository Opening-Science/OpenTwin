import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2026-05-13',
  devtools: { enabled: true },

  css: ['~/assets/css/main.css'],

  vite: {
    plugins: [tailwindcss()],
    server: {
      // Allow Cloudflare quick-tunnel subdomains for sharing localhost previews.
      // Vite blocks unknown Host headers by default (DNS-rebinding protection).
      allowedHosts: ['.trycloudflare.com'],
    },
  },

  app: {
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
      link: [
        // Font preloads — mirrors opening.science's <head>
        { rel: 'preload', as: 'font', type: 'font/woff2',
          href: '/fonts/Selecta-Bold.woff2', crossorigin: 'anonymous' },
        { rel: 'preload', as: 'font', type: 'font/woff2',
          href: '/fonts/Selecta-Medium.woff2', crossorigin: 'anonymous' },
        { rel: 'preload', as: 'font', type: 'font/woff2',
          href: '/fonts/Selecta-Regular.woff2', crossorigin: 'anonymous' },
        { rel: 'preload', as: 'font', type: 'font/woff2',
          href: '/fonts/ABCDiatypeSemiMono-Bold.woff2', crossorigin: 'anonymous' },
      ],
    },
  },
})
