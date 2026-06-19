import { defineStore } from "pinia";

export const useWebsiteStore = defineStore("websiteStore", {
  state: () => ({
    data: [],
    loading: false,
    error: null,
  }),

  actions: {
    async fetchArticles() {
      this.loading = true;
      this.error = null;

      try {
        const response = await fetch(
          "http://localhost:1337/api/articles?populate=*",
        );

        const result = await response.json();

        if (!response.ok) {
          throw new Error(
            result?.error?.message || `Ошибка Strapi: ${response.status}`,
          );
        }

        this.data = result.data;

        return this.data;
      } catch (error) {
        this.error = error.message;
        console.error("Ошибка получения статей:", error);

        throw error;
      } finally {
        this.loading = false;
      }
    },
  },
});
