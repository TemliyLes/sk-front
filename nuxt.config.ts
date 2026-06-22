// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt", "@nuxt/fonts"],
  pinia: {
    storesDirs: [],
  },
  runtimeConfig: {
    // Доступно только на сервере
    strapiToken: "",

    public: {
      // Доступно на сервере и во фронтенде
      strapiUrl: "",
    },
  },
  fonts: {
    provider: "google",

    families: [
      {
        name: "Roboto",
        weights: [400, 500, 700],
        styles: ["normal"],
        subsets: ["latin", "cyrillic"],
      },
    ],
  },
  tailwindcss: {
    config: {
      theme: {
        extend: {
          colors: {
            main: "#454545",
            primary: "#2563EB",
            secondary: "#111827",
            accent: "#F59E0B",
            orange: "#ed5026",
          },

          fontFamily: {
            sans: ["Inter", "sans-serif"],
            roboto: ["Roboto", "sans-serif"],
          },

          screens: {
            xs: "480px",
          },

          borderRadius: {
            custom: "20px",
          },
        },
      },
    },
  },
});
