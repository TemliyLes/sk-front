<template>
  <div>
    <Header>{{ data?.title }}</Header>
    <h5 class="text-sm text-main mb-6">{{ data?.description }}</h5>
    <div class="relative">
      <BasicImage :data="data?.imgPreview" />
    </div>
    <div>
      <p v-for="(p, pIndex) in data?.content" :key="pIndex" class="mt-4">
        <span
          class="mt-4"
          v-for="(subp, subpIndex) in p?.children"
          :key="subpIndex"
        >
          {{ subp?.text }}
        </span>
      </p>
    </div>
  </div>
</template>
<script setup>
import Header from "../basic/Header.vue";

const props = defineProps({
  data: Object,
});
</script>
