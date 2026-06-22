<template>
  <BasicHeader>Все статьи</BasicHeader>
  <div class="mt-4 flex gap-4 space-between">
    <div class="" v-for="item in websiteStore?.data" :key="item?.id">
      <ArticlesCard :data="item" />
      <!-- {{ item }}
      {{ item.title }} -->
    </div>
  </div>
  <!-- <div>websiteStore {{ websiteStore }}</div> -->
</template>

<script setup>
import { useWebsiteStore } from "~/stores/data";

const websiteStore = useWebsiteStore();
// console.log(websiteStore);
onMounted(() => {
  websiteStore.fetchArticles();
});
</script>
