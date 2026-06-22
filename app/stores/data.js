import { defineStore } from "pinia";

export const useWebsiteStore = defineStore("websiteStore", {
  state: () => ({
    data: [],
    loading: false,
    error: null,
    article: null,
  }),

  actions: {
    async fetchArticle(documentId) {
      if (!documentId) {
        throw new Error("Не передан documentId статьи");
      }

      this.loading = true;
      this.error = null;
      this.article = null;

      try {
        const response = await fetch(
          `http://localhost:1337/api/articles/${encodeURIComponent(documentId)}?populate=*`,
        );

        const result = await response.json();

        if (!response.ok) {
          throw new Error(
            result?.error?.message || `Ошибка Strapi: ${response.status}`,
          );
        }

        this.article = result.data;

        return this.article;
      } catch (error) {
        this.error = error.message;
        console.error("Ошибка получения статьи:", error);

        throw error;
      } finally {
        this.loading = false;
      }
    },
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
