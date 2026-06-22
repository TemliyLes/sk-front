<template>
  <img class="w-full h-full object-cover" :src="fullURL" alt="" />
</template>

<script setup>
const props = defineProps({
  data: Object,
});

const runtimeConfig = useRuntimeConfig();

const fullURL = computed(() => {
  return `${runtimeConfig.public.strapiUrl}${props.data?.url || ""}`;
});
</script>
