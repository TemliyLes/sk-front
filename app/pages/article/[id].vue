<template>
  <div>
    <ArticlesSingle :data="websiteStore?.article" />
  </div>
</template>

<script setup>
import { useWebsiteStore } from "~/stores/data";

const websiteStore = useWebsiteStore();
const route = useRoute();

onMounted(() => {
  websiteStore.fetchArticle(route?.params?.id);
});
</script>
