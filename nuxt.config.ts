// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: [
    'nuxt-swiper',
    "@nuxtjs/tailwindcss",
    ['@nuxtjs/google-fonts', {
      families: {
        'Zilla Slab': [400],
        'Playfair Display': [400, 700]
      }
    }],
    "@nuxt/image",
  ],
  css: [
    '@/assets/css/font.css',
  ],
})