<template>
  <BasicHeader>Все статьи</BasicHeader>
  <div class="mt-4 flex gap-4 space-between">
    <div class="" v-for="item in websiteStore?.data" :key="item?.id">
      <ArticlesCard :data="item" />
    </div>
  </div>
</template>

<script setup>
import { useWebsiteStore } from "~/stores/data";

const websiteStore = useWebsiteStore();
onMounted(() => {
  websiteStore.fetchArticles();
});
</script>
