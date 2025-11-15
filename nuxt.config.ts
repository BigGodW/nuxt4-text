// https://nuxt.com/docs/api/configuration/nuxt-config

import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  vite: {
    plugins: [tailwindcss()],
  },
  css: ["./app/tailwind.css"],
  modules:['@vant/nuxt', "@nuxtjs/supabase"],
  supabase: {
    url: process.env.SUPABASE_URL || '',
    key: process.env.SUPABASE_KEY || '',
    redirect:false
  },
  runtimeConfig: {
    public: {
      imgBaseUrl: 'https://nfcywblyimwziaqpopdf.supabase.co/storage/v1/object/public'
    }
  },
  routeRules:{
    '/admin/**':{ssr:false}
  }
})